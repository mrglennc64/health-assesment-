import { clinicalRulesPrompt } from "../rules/clinical";
import { runWithRules } from "./run-with-rules";
import type { JobResult } from "./types";

export function runClinical(text: string): Promise<JobResult> {
  return runWithRules(clinicalRulesPrompt, text);
}
