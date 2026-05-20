import { communicationRulesPrompt } from "../rules/communication";
import { runWithRules } from "./run-with-rules";
import type { JobResult } from "./types";

export function runCommunication(text: string): Promise<JobResult> {
  return runWithRules(communicationRulesPrompt, text);
}
