import { contentRulesPrompt } from "../rules/content";
import { runWithRules } from "./run-with-rules";
import type { JobResult } from "./types";

export function runContent(text: string): Promise<JobResult> {
  return runWithRules("content", contentRulesPrompt, text);
}
