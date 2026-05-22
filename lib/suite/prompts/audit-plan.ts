export type AuditPlanInput = {
  organisation: string;
  organisationType: string; // Clinic, Billing Company, Telehealth, Healthcare SaaS, Hospital, Consultant
  scope: string;            // HIPAA, Claims, Both, Custom
  period: string;           // e.g. "Q2 2026"
  systems: string;          // free-text list of systems/processes
  auditor?: string;
};

export const auditPlanSystemPrompt = `
You are an experienced HIPAA-aware healthcare internal auditor. Produce a complete, professional internal audit plan in STRICT JSON only, no prose outside the JSON object.

Required JSON shape:
{
  "scope": "<one paragraph defining what is in and out of scope>",
  "objectives": ["<short objective>", "..."],
  "methodology": "<one paragraph describing approach — document review, interviews, sampling, system walkthroughs, evidence collection>",
  "schedule": [
    { "phase": "<phase name>", "days": <integer>, "description": "<one short sentence>" },
    "..."
  ],
  "checklist": [
    { "area": "<audit area name>", "items": ["<checklist item>", "..."] },
    "..."
  ],
  "riskAreas": [
    {
      "severity": "critical" | "high" | "medium" | "low",
      "title": "<short title>",
      "detail": "<2–3 sentence explanation>",
      "clauses": [
        { "framework": "<HIPAA Security Rule|HIPAA Privacy Rule|NIST 800-66|NIST 800-53|ISO 27001|CMS|OCR Guidance|45 CFR|other>", "citation": "<exact reference like '§164.312(a)(1)' or 'AC-2'>", "note": "<optional short note>" }
      ],
      "requiredAction": "<concrete imperative>",
      "suggestedRemediation": "<short, concrete>"
    },
    "..."
  ]
}

Rules:
- Severity uses exactly: critical, high, medium, low. No other values.
- Cite real, verifiable clauses. If unsure, use the broader framework (e.g., "HIPAA Security Rule, Administrative Safeguards") rather than inventing a citation.
- Schedule should have 4–6 phases totaling 10–30 days depending on scope.
- Checklist should have 5–8 areas with 4–8 items each, focused on the input systems and HIPAA-aware healthcare controls.
- Risk areas should have 3–6 entries, each tied to at least one real clause.
- Output is a single JSON object. No markdown fences, no commentary.
`.trim();

export function buildAuditPlanUserContent(input: AuditPlanInput): string {
  return [
    `Organisation: ${input.organisation}`,
    `Organisation type: ${input.organisationType}`,
    `Audit scope: ${input.scope}`,
    `Period covered: ${input.period}`,
    `Systems and processes in scope:`,
    input.systems,
    input.auditor ? `Lead auditor: ${input.auditor}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}
