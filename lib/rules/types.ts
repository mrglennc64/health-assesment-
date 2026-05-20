export type RuleSeverity = "critical" | "watch" | "info";

export type RuleFinding = {
  code: string;
  severity: RuleSeverity;
  message: string;
};

export type RuleResult = {
  score: number;
  findings: RuleFinding[];
  requiredActions: string[];
};
