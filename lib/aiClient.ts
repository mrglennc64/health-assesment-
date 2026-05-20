import { callOpenRouterWithFallback } from "./openrouterClient";
import { callMistral } from "./mistralClient";
import { fetchWithRetry } from "./llmFetch";

export type ModelName = "gemini" | "openrouter" | "mistral" | "openai" | "groq";

export type ModelResult = {
  content: string;
  provider: ModelName | "stub";
  model: string;
  fallbackFromProvider?: ModelName;
  fallbackReason?: string;
};

export function isRateLimitError(e: unknown): boolean {
  if (!(e instanceof Error)) return false;
  return /\b(429|rate.?limit|quota|too\s+many\s+requests)/i.test(e.message);
}

export function configuredProviders(): ModelName[] {
  const out: ModelName[] = [];
  if (process.env.MISTRAL_API_KEY) out.push("mistral");
  if (process.env.OPENROUTER_API_KEY) out.push("openrouter");
  if (process.env.GOOGLE_AI_KEY) out.push("gemini");
  return out;
}

export async function callModelWithFallback(
  preferred: ModelName,
  systemPrompt: string,
  userContent: string
): Promise<ModelResult> {
  const configured = configuredProviders();
  const chain: ModelName[] = [
    preferred,
    ...configured.filter((p) => p !== preferred),
  ];
  if (chain.length === 0) {
    return {
      content: stubJson("any provider"),
      provider: "stub",
      model: "stub",
    };
  }
  let lastErr: Error | undefined;
  for (let i = 0; i < chain.length; i++) {
    const p = chain[i];
    try {
      const out = await callOneProvider(p, systemPrompt, userContent);
      if (i === 0) {
        return { content: out.content, provider: p, model: out.model };
      }
      return {
        content: out.content,
        provider: p,
        model: out.model,
        fallbackFromProvider: chain[0],
        fallbackReason: lastErr?.message?.slice(0, 120),
      };
    } catch (e) {
      lastErr = e instanceof Error ? e : new Error(String(e));
      if (!isRateLimitError(e)) throw e;
    }
  }
  const tried = chain.join(", ");
  return {
    content: JSON.stringify({
      score: 0,
      findings: [
        {
          code: "ALL_PROVIDERS_RATE_LIMITED",
          severity: "critical",
          message: `All configured providers (${tried}) returned rate-limit errors. Last error: ${lastErr?.message?.slice(0, 160) ?? "unknown"}`,
        },
      ],
      requiredActions: [
        `Wait ~60s and retry, or add an additional provider key (currently configured: ${configured.join(", ") || "none"}).`,
      ],
    }),
    provider: "stub",
    model: "stub",
    fallbackFromProvider: preferred,
    fallbackReason:
      lastErr?.message?.slice(0, 120) ?? "all providers rate-limited",
  };
}

function stubJson(envHint: string): string {
  return JSON.stringify({
    score: 75,
    findings: [
      {
        code: "STUB",
        severity: "watch",
        message: `Stub finding — set ${envHint} to enable real analysis.`,
      },
    ],
    requiredActions: [`Set ${envHint} in .env.local to connect a real model.`],
  });
}

async function callOneProvider(
  provider: ModelName,
  systemPrompt: string,
  userContent: string
): Promise<{ content: string; model: string }> {
  if (provider === "gemini") {
    const key = process.env.GOOGLE_AI_KEY;
    if (!key) return { content: stubJson("GOOGLE_AI_KEY"), model: "stub" };
    return callGemini(key, systemPrompt, userContent);
  }
  if (provider === "openrouter") {
    if (!process.env.OPENROUTER_API_KEY) {
      return { content: stubJson("OPENROUTER_API_KEY"), model: "stub" };
    }
    const { content, modelUsed } = await callOpenRouterWithFallback(
      systemPrompt,
      userContent
    );
    return { content, model: modelUsed };
  }
  if (provider === "mistral") {
    if (!process.env.MISTRAL_API_KEY) {
      return { content: stubJson("MISTRAL_API_KEY"), model: "stub" };
    }
    return callMistral(systemPrompt, userContent);
  }
  if (provider === "openai") {
    throw new Error("OpenAI provider not implemented yet.");
  }
  if (provider === "groq") {
    throw new Error("Groq provider not implemented yet.");
  }
  throw new Error(`Unknown model: ${provider}`);
}

async function callGemini(
  key: string,
  systemPrompt: string,
  userContent: string
): Promise<{ content: string; model: string }> {
  const model = process.env.GEMINI_MODEL || "gemini-2.0-flash";
  const url =
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=` +
    encodeURIComponent(key);

  const body = {
    system_instruction: { parts: [{ text: systemPrompt }] },
    contents: [{ role: "user", parts: [{ text: userContent }] }],
    generationConfig: {
      responseMimeType: "application/json",
      temperature: 0.2,
    },
  };

  const res = await fetchWithRetry(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`Gemini ${res.status} (${model}): ${errText.slice(0, 300)}`);
  }

  const data = (await res.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Gemini returned no text part.");
  return { content: text, model };
}
