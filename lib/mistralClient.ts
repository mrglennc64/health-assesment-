/**
 * Mistral AI client. OpenAI-compatible chat completions endpoint.
 *
 * Env vars read:
 *   MISTRAL_API_KEY   required at call time
 *   MISTRAL_MODEL     default: "mistral-large-latest"
 *
 * HIPAA note: Mistral may log requests on free/standard tiers. Do not send PHI
 * unless on an enterprise tier with a data-processing agreement.
 */

import { fetchWithRetry } from "./llmFetch";

const ENDPOINT = "https://api.mistral.ai/v1/chat/completions";

export async function callMistral(
  systemPrompt: string,
  userContent: string
): Promise<{ content: string; model: string }> {
  const key = process.env.MISTRAL_API_KEY;
  if (!key) throw new Error("MISTRAL_API_KEY not set");

  const model = process.env.MISTRAL_MODEL || "mistral-large-latest";

  const res = await fetchWithRetry(ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Accept: "application/json",
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
    throw new Error(`Mistral ${res.status} (${model}): ${errText.slice(0, 300)}`);
  }

  const data = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const text = data.choices?.[0]?.message?.content;
  if (!text) throw new Error("Mistral returned no content.");
  return { content: text, model };
}
