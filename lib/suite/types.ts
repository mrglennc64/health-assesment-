// Types for the MediReady Suite. Intentionally separate from lib/rules/types.ts
// so the existing audit engine's contract is untouched.

export type SuiteSeverity = "critical" | "high" | "medium" | "low";

export type ClauseRef = {
  framework: string; // e.g., "HIPAA Security Rule", "NIST 800-66", "ISO 27001"
  citation: string;  // e.g., "§164.312(a)(1)", "Annex A.9.4.2", "Rev2 §4.10"
  note?: string;
};

export type SuiteFinding = {
  severity: SuiteSeverity;
  title: string;
  detail: string;
  clauses: ClauseRef[];
  requiredAction: string;
  suggestedRemediation?: string;
};

// Tool identifiers
export type ToolId = "audit-plan" | "standards-mapping" | "gap-analysis";

// Audit Plan Generator output
export type AuditPlanOutput = {
  scope: string;
  objectives: string[];
  methodology: string;
  schedule: { phase: string; days: number; description: string }[];
  checklist: { area: string; items: string[] }[];
  riskAreas: SuiteFinding[];
};

// Standards Mapping output (a lookup result)
export type StandardsMappingOutput = {
  query: string;
  clauses: ClauseRef[];
  notes: string;
};

// Document Gap Analysis output
export type GapAnalysisOutput = {
  documentSummary: string;
  presentSections: string[];
  missingSections: string[];
  findings: SuiteFinding[];
};

// Persisted record (one row in the outputs table)
export type SuiteRecord = {
  id: string;
  tool: ToolId;
  title: string;
  inputJson: string;
  outputJson: string;
  sourceFileName: string | null;
  sourceFileText: string | null;
  createdAt: string;
  model: string | null;
  provider: string | null;
};
