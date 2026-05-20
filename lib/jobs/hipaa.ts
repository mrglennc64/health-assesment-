import { hipaaRulesPrompt } from "../rules/hipaa";
import { runWithRules } from "./run-with-rules";
import type { JobResult } from "./types";

export function runHipaa(text: string): Promise<JobResult> {
  return runWithRules(hipaaRulesPrompt, text);
}
