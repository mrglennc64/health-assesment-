export type PolicyInput = {
  policyTitle: string;
  policyType: string;       // HIPAA Privacy Policy, HIPAA Security Policy, Access Control, Incident Response, Workforce Training, etc.
  organisation: string;
  organisationType: string; // Clinic, Billing Co, etc.
  owner: string;            // role / title responsible
  framework: string;        // primary regulatory framework
  effectiveDate: string;    // ISO date
  requirements: string;     // free-text specific requirements / scenarios to cover
};

export const policySystemPrompt = `
You are an experienced healthcare compliance writer producing a complete, professional internal policy or SOP. Output STRICT JSON only.

Required JSON shape:
{
  "policyTitle": "<title>",
  "policyId": "<short identifier like 'HIPAA-SEC-001' or 'IR-PL-002'>",
  "version": "1.0",
  "effectiveDate": "<ISO date>",
  "reviewCycle": "<Annual|Biennial|other>",
  "owner": "<role>",
  "sections": [
    { "heading": "Purpose", "body": "<1–2 paragraphs>" },
    { "heading": "Scope", "body": "<1 paragraph>" },
    { "heading": "Definitions", "body": "<intro sentence>", "bullets": ["<term — meaning>", "..."] },
    { "heading": "Roles and Responsibilities", "body": "<intro>", "bullets": ["<role: responsibility>", "..."] },
    { "heading": "Policy / Procedure", "body": "<numbered or paragraph form, clear and operational>" },
    { "heading": "Training", "body": "<who must be trained, on what, how often>" },
    { "heading": "Sanctions for Non-Compliance", "body": "<paragraph>" },
    { "heading": "Records and Retention", "body": "<what records, retained how long>" },
    { "heading": "Review and Updates", "body": "<who reviews, when, change log expectations>" }
  ],
  "references": [
    { "framework": "<framework>", "citation": "<exact reference>", "note": "<short>" }
  ]
}

Rules:
- Sections must be in the order shown. If a section truly doesn't apply, include the heading with body "Not applicable — <one-line reason>" rather than omitting it.
- Use operational, imperative language ("staff must verify…", "the Security Officer shall…").
- Cite at least 3 real, verifiable clauses in references.
- Tailor every section to the organisation type and the specific requirements provided.
- Output is a single JSON object, no markdown fences, no prose outside the object.
`.trim();

export function buildPolicyUserContent(input: PolicyInput): string {
  return [
    `Policy title: ${input.policyTitle}`,
    `Policy type: ${input.policyType}`,
    `Organisation: ${input.organisation} (${input.organisationType})`,
    `Owner: ${input.owner}`,
    `Primary framework: ${input.framework}`,
    `Effective date: ${input.effectiveDate}`,
    "",
    "Specific requirements / scenarios to cover:",
    input.requirements,
  ].join("\n");
}
