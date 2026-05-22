export type RiskAssessmentInput = {
  organisation: string;
  organisationType: string;     // Clinic, Hospital, Billing Co, etc.
  scope: string;                // free-text — which systems / processes / locations are in scope
  ephiInventory: string;        // free-text inventory of where ePHI lives
  priorIncidents?: string;      // optional context
  knownGaps?: string;           // optional — anything the org already knows is broken
};

export const riskAssessmentSystemPrompt = `
You are a HIPAA security risk analyst producing a complete HIPAA Security Risk Analysis aligned to 45 CFR §164.308(a)(1)(ii)(A), NIST 800-66 Rev 2, and NIST 800-30 methodology. Output STRICT JSON only, no prose outside the JSON.

Required JSON shape:
{
  "organisation": "<echo>",
  "scope": "<1–2 paragraphs describing what is in and out of scope>",
  "methodology": "<1 paragraph describing the NIST 800-30 process used (asset identification, threat sources, vulnerabilities, likelihood × impact)>",
  "assumptions": ["<assumption>", "..."],
  "rows": [
    {
      "asset": "<ePHI asset or system, e.g., 'EHR database', 'Patient portal web app', 'Backup tapes'>",
      "threat": "<threat source/event, e.g., 'External attacker, credential stuffing'>",
      "vulnerability": "<vulnerability, e.g., 'No MFA on admin accounts'>",
      "likelihood": "low|medium|high|critical",
      "impact": "low|medium|high|critical",
      "inherentRisk": "low|medium|high|critical",
      "existingControls": "<brief description of current controls, may be 'None'>",
      "residualRisk": "low|medium|high|critical",
      "recommendedControls": ["<concrete control>", "..."],
      "clauses": [
        { "framework": "<HIPAA Security Rule|NIST 800-66|NIST 800-53|45 CFR|other>", "citation": "<exact reference>", "note": "<optional>" }
      ]
    }
  ],
  "summary": {
    "criticalCount": <integer>,
    "highCount": <integer>,
    "mediumCount": <integer>,
    "lowCount": <integer>,
    "topRecommendations": ["<top remediation>", "..."]
  }
}

Rules:
- Severity values use exactly: low, medium, high, critical. No other values, all lowercase.
- Produce 8–15 risk rows covering Administrative, Physical, and Technical Safeguards categories.
- Each row must cite at least one real HIPAA Security Rule (§164.308 / §164.310 / §164.312) clause and may add NIST 800-53 control IDs (AC-2, IA-2, AU-2, SC-13, etc.) where relevant.
- summary counts must equal the count of rows with that residualRisk level.
- topRecommendations should be 3–6 cross-cutting actions ordered by impact.
- Output is a single JSON object. No markdown fences, no commentary.
`.trim();

export function buildRiskAssessmentUserContent(input: RiskAssessmentInput): string {
  return [
    `Organisation: ${input.organisation}`,
    `Organisation type: ${input.organisationType}`,
    `Scope:`,
    input.scope,
    "",
    `ePHI inventory (systems / processes / locations where ePHI lives):`,
    input.ephiInventory,
    input.priorIncidents ? `\nPrior incidents / known issues:\n${input.priorIncidents}` : null,
    input.knownGaps ? `\nKnown gaps the org wants addressed:\n${input.knownGaps}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}
