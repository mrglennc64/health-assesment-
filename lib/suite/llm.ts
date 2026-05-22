import { callModelWithFallback, configuredProviders, type ModelName, type ModelResult } from "@/lib/aiClient";

const PREFERRED_ORDER: ModelName[] = ["mistral", "openrouter", "gemini"];

/**
 * Run a structured JSON request against the existing aiClient. Returns the
 * parsed JSON and the model metadata. Throws on parse failure (the caller
 * decides how to surface that to the user).
 *
 * This file is the suite's bridge to the existing LLM provider chain.
 * It does not modify or import anything that the existing /scan or /report
 * paths depend on beyond `callModelWithFallback`.
 */
export async function runJsonPrompt<T>(opts: {
  systemPrompt: string;
  userContent: string;
}): Promise<{ data: T; result: ModelResult }> {
  const available = new Set(configuredProviders());
  const preferred = PREFERRED_ORDER.find((p) => available.has(p)) ?? PREFERRED_ORDER[0];

  const result = await callModelWithFallback(
    preferred,
    opts.systemPrompt,
    opts.userContent,
  );

  let data: T;
  try {
    data = JSON.parse(result.content) as T;
  } catch (err) {
    const head = result.content.slice(0, 200);
    throw new Error(
      `LLM did not return valid JSON. Provider=${result.provider}, model=${result.model}. ` +
        `First 200 chars: ${head}. Parse error: ${(err as Error).message}`,
    );
  }

  return { data, result };
}
