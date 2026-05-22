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
export type ToolId =
  | "audit-plan"
  | "standards-mapping"
  | "gap-analysis"
  | "risk-assessment"
  | "policy";

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

// HIPAA Risk Assessment output (NIST 800-66 / 800-30 style risk register)
export type RiskAssessmentRow = {
  asset: string;          // ePHI system, data flow, or process
  threat: string;
  vulnerability: string;
  likelihood: SuiteSeverity;  // low/medium/high/critical
  impact: SuiteSeverity;
  inherentRisk: SuiteSeverity;
  existingControls: string;
  residualRisk: SuiteSeverity;
  recommendedControls: string[];
  clauses: ClauseRef[];
};

export type RiskAssessmentOutput = {
  organisation: string;
  scope: string;
  methodology: string;
  assumptions: string[];
  rows: RiskAssessmentRow[];
  summary: {
    criticalCount: number;
    highCount: number;
    mediumCount: number;
    lowCount: number;
    topRecommendations: string[];
  };
};

// Policy / SOP Generator output
export type PolicySection = {
  heading: string;
  body: string;          // markdown-light paragraph(s)
  bullets?: string[];
};

export type PolicyOutput = {
  policyTitle: string;
  policyId: string;       // e.g. "HIPAA-SEC-001"
  version: string;        // e.g. "1.0"
  effectiveDate: string;  // ISO date
  reviewCycle: string;    // e.g. "Annual"
  owner: string;          // role
  sections: PolicySection[]; // Purpose, Scope, Roles, Procedure, Training, Sanctions, Review, References
  references: ClauseRef[];
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
