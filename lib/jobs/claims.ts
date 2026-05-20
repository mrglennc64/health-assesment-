import { claimsRulesPrompt } from "../rules/claims";
import { runWithRules } from "./run-with-rules";
import type { JobResult } from "./types";

export function runClaims(text: string): Promise<JobResult> {
  return runWithRules("claims", claimsRulesPrompt, text);
}
