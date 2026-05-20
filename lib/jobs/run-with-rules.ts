import { callModelWithFallback, type ModelName } from "../aiClient";
import type { RuleResult, RuleSeverity } from "../rules/types";
import type { Channel, Finding, FindingSeverity, JobResult } from "./types";

const severityMap: Record<RuleSeverity, FindingSeverity> = {
  critical: "issue",
  watch: "warn",
  info: "ok",
};

const KNOWN_PROVIDERS = new Set<ModelName>([
  "gemini",
  "openrouter",
  "mistral",
  "openai",
  "groq",
]);

function pickPreferred(channel: Channel): ModelName {
  const override = process.env[`${channel.toUpperCase()}_PROVIDER`];
  if (override && KNOWN_PROVIDERS.has(override as ModelName)) {
    return override as ModelName;
  }
  if (process.env.MISTRAL_API_KEY) return "mistral";
  if (process.env.OPENROUTER_API_KEY) return "openrouter";
  return "gemini";
}

export async function runWithRules(
  channel: Channel,
  prompt: string,
  text: string
): Promise<JobResult> {
  const preferred = pickPreferred(channel);
  const { content, provider, model, fallbackFromProvider, fallbackReason } =
    await callModelWithFallback(preferred, prompt, text);

  let parsed: RuleResult;
  try {
    parsed = JSON.parse(content) as RuleResult;
  } catch {
    throw new Error(
      `Model output was not valid JSON (${model}): ${content.slice(0, 200)}`
    );
  }

  const findings: Finding[] = (parsed.findings ?? []).map((f) => ({
    severity: severityMap[f.severity] ?? "warn",
    label: f.code,
    detail: f.message,
  }));

  const requiredActions = parsed.requiredActions ?? [];
  const score = typeof parsed.score === "number" ? parsed.score : 0;

  const counts = {
    critical: findings.filter((f) => f.severity === "issue").length,
    watch: findings.filter((f) => f.severity === "warn").length,
    ok: findings.filter((f) => f.severity === "ok").length,
  };

  let summary = `${counts.critical} critical · ${counts.watch} watch · ${counts.ok} pass.`;
  if (fallbackFromProvider) {
    summary += ` (Fallback: ${fallbackFromProvider} → ${provider})`;
  } else if (provider === "stub") {
    summary += ` (Stub — no provider available)`;
  }

  return {
    score,
    summary,
    findings,
    requiredActions,
    details: {
      raw: parsed,
      provider,
      model,
      preferred,
      fallbackFromProvider,
      fallbackReason,
    },
  };
}
