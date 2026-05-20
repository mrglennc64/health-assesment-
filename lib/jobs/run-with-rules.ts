import { callModel } from "../aiClient";
import type { RuleResult, RuleSeverity } from "../rules/types";
import type { Finding, FindingSeverity, JobResult } from "./types";

const severityMap: Record<RuleSeverity, FindingSeverity> = {
  critical: "issue",
  watch: "warn",
  info: "ok",
};

export async function runWithRules(
  prompt: string,
  text: string
): Promise<JobResult> {
  const raw = await callModel("gemini", prompt, text);

  let parsed: RuleResult;
  try {
    parsed = JSON.parse(raw) as RuleResult;
  } catch {
    throw new Error(`Model output was not valid JSON: ${raw.slice(0, 200)}`);
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

  return {
    score,
    summary: `${counts.critical} critical · ${counts.watch} watch · ${counts.ok} pass.`,
    findings,
    requiredActions,
    details: { raw: parsed },
  };
}
