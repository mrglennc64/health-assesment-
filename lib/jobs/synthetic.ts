import { syntheticRulesPrompt } from "../rules/synthetic";
import { runWithRules } from "./run-with-rules";
import type { JobResult } from "./types";

export function runSynthetic(text: string): Promise<JobResult> {
  return runWithRules(syntheticRulesPrompt, text);
}
