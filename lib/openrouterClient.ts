/**
 * Standalone OpenRouter client. Mirrors the shape of callGemini in aiClient.ts.
 *
 * Not wired into aiClient.ts yet — import directly:
 *   import { callOpenRouter, callOpenRouterWithFallback } from "@/lib/openrouterClient";
 *
 * Env vars read:
 *   OPENROUTER_API_KEY          required at call time
 *   OPENROUTER_MODEL            default primary
 *   OPENROUTER_FALLBACK_MODEL   used when primary returns 429
 *
 * HIPAA note: OpenRouter forwards prompts to third-party model providers. Free-tier
 * models may log or train on inputs. Do not send PHI through this client unless the
 * chosen model has a no-logging agreement.
 */

import { fetchWithRetry } from "./llmFetch";

const ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";

export async function callOpenRouter(
  key: string,
  model: string,
  systemPrompt: string,
  userContent: string
): Promise<string> {
  const res = await fetchWithRetry(ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userContent },
      ],
      response_format: { type: "json_object" },
      temperature: 0.2,
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    const err = new Error(`OpenRouter ${res.status}: ${errText.slice(0, 300)}`);
    (err as Error & { status?: number }).status = res.status;
    throw err;
  }

  const data = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const text = data.choices?.[0]?.message?.content;
  if (!text) throw new Error("OpenRouter returned no content.");
  return text;
}

/**
 * Calls OpenRouter on the primary model, switching to the fallback on 429 / rate-limit.
 * Mirrors the pattern in pam-chat/server.py:160-174.
 */
export async function callOpenRouterWithFallback(
  systemPrompt: string,
  userContent: string
): Promise<{ content: string; modelUsed: string }> {
  const key = process.env.OPENROUTER_API_KEY;
  if (!key) throw new Error("OPENROUTER_API_KEY not set");
  const primary = process.env.OPENROUTER_MODEL ?? "openrouter/owl-alpha";
  const fallback = process.env.OPENROUTER_FALLBACK_MODEL ?? "meta-llama/llama-3.3-70b-instruct:free";

  try {
    const content = await callOpenRouter(key, primary, systemPrompt, userContent);
    return { content, modelUsed: primary };
  } catch (e) {
    const err = e as Error & { status?: number };
    const isRateLimit = err.status === 429 || /rate/i.test(err.message);
    if (!isRateLimit || primary === fallback) throw err;
    const content = await callOpenRouter(key, fallback, systemPrompt, userContent);
    return { content, modelUsed: fallback };
  }
}
