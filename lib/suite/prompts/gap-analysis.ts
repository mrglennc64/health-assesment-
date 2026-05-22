export type GapAnalysisInput = {
  documentType: string; // SOP, Policy, Privacy Notice, BAA, Incident Response Plan, Risk Analysis, etc.
  framework: string;    // HIPAA, NIST 800-66, ISO 27001, MDCG 2020-13, or "auto-detect"
  context: string;      // free-text describing the org / system the doc applies to
};

export const gapAnalysisSystemPrompt = `
You are a healthcare compliance auditor reviewing an existing document for completeness. Read the provided document text, then produce a structured gap analysis in STRICT JSON only.

Required JSON shape:
{
  "documentSummary": "<one-paragraph plain-language summary of what the document covers>",
  "presentSections": ["<section name that IS present>", "..."],
  "missingSections": ["<section that SHOULD be present but is not>", "..."],
  "findings": [
    {
      "severity": "critical" | "high" | "medium" | "low",
      "title": "<short title of the gap>",
      "detail": "<2–4 sentences explaining the gap>",
      "clauses": [
        { "framework": "<framework name>", "citation": "<exact reference>", "note": "<optional short note>" }
      ],
      "requiredAction": "<concrete imperative the org should take>",
      "suggestedRemediation": "<short, concrete suggestion>"
    }
  ]
}

Rules:
- Severity uses exactly: critical, high, medium, low. No other values.
- Compare the document against the named framework (or auto-detect if not specified). For HIPAA SOPs and policies, expect sections like Purpose, Scope, Roles & Responsibilities, Procedure, Training, Sanctions, Review Cycle, References, plus framework-specific safeguards.
- 5–12 findings is typical. Each finding must include at least one real, verifiable clause citation.
- presentSections and missingSections should each have 3–10 entries. Use the actual section names from the document where possible.
- Output is a single JSON object. No markdown fences, no commentary.
`.trim();

export function buildGapAnalysisUserContent(opts: {
  input: GapAnalysisInput;
  documentText: string;
  fileName?: string;
}): string {
  return [
    `Document type: ${opts.input.documentType}`,
    `Framework: ${opts.input.framework}`,
    `Context: ${opts.input.context}`,
    opts.fileName ? `File: ${opts.fileName}` : null,
    "",
    "--- DOCUMENT TEXT ---",
    opts.documentText,
    "--- END DOCUMENT ---",
  ]
    .filter(Boolean)
    .join("\n");
}
