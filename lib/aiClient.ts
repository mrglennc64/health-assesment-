import { callOpenRouterWithFallback } from "./openrouterClient";
import { callMistral } from "./mistralClient";
import { fetchWithRetry } from "./llmFetch";

export type ModelName = "gemini" | "openrouter" | "mistral" | "openai" | "groq";

export type ModelResult = {
  content: string;
  modelUsed: ModelName | "stub";
  fallbackFrom?: ModelName;
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
    return { content: stubJson("any provider"), modelUsed: "stub" };
  }
  let lastErr: Error | undefined;
  for (let i = 0; i < chain.length; i++) {
    const m = chain[i];
    try {
      const content = await callModel(m, systemPrompt, userContent);
      if (i === 0) return { content, modelUsed: m };
      return {
        content,
        modelUsed: m,
        fallbackFrom: chain[0],
        fallbackReason: lastErr?.message?.slice(0, 120),
      };
    } catch (e) {
      lastErr = e instanceof Error ? e : new Error(String(e));
      if (!isRateLimitError(e)) throw e;
    }
  }
  return {
    content: stubJson("all providers rate-limited"),
    modelUsed: "stub",
    fallbackFrom: preferred,
    fallbackReason: lastErr?.message?.slice(0, 120) ?? "all providers rate-limited",
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

export async function callModel(
  model: ModelName,
  systemPrompt: string,
  userContent: string
): Promise<string> {
  if (model === "gemini") {
    const key = process.env.GOOGLE_AI_KEY;
    if (!key) return stubJson("GOOGLE_AI_KEY");
    return callGemini(key, systemPrompt, userContent);
  }
  if (model === "openrouter") {
    if (!process.env.OPENROUTER_API_KEY) return stubJson("OPENROUTER_API_KEY");
    const { content } = await callOpenRouterWithFallback(
      systemPrompt,
      userContent
    );
    return content;
  }
  if (model === "mistral") {
    if (!process.env.MISTRAL_API_KEY) return stubJson("MISTRAL_API_KEY");
    return callMistral(systemPrompt, userContent);
  }
  if (model === "openai") {
    throw new Error("OpenAI provider not implemented yet.");
  }
  if (model === "groq") {
    throw new Error("Groq provider not implemented yet.");
  }
  throw new Error(`Unknown model: ${model}`);
}

async function callGemini(
  key: string,
  systemPrompt: string,
  userContent: string
): Promise<string> {
  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
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
    throw new Error(`Gemini ${res.status}: ${errText.slice(0, 300)}`);
  }

  const data = (await res.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Gemini returned no text part.");
  return text;
}
