// Hand-curated demo records for the MediReady Suite history.
// Inserted on demand via the "Load demo data" button.
//
// Each entry mirrors what a real LLM call would produce: realistic clinical
// context, accurate clause citations, severity-rated findings. Enough to
// demonstrate the suite without burning API credits.

import type {
  AuditPlanOutput,
  StandardsMappingOutput,
  GapAnalysisOutput,
  RiskAssessmentOutput,
  PolicyOutput,
  ToolId,
} from "./types";

export type SeedRecord = {
  tool: ToolId;
  title: string;
  inputJson: string;
  outputJson: string;
  sourceFileName: string | null;
  sourceFileText: string | null;
  model: string;
  provider: string;
};

// ============================================================================
// Audit Plan examples
// ============================================================================

const auditPlanA: AuditPlanOutput = {
  scope:
    "Quarterly HIPAA-aligned internal audit of Acme Cardiology Group's clinical documentation, claim submission workflow, patient communication channels, and the Athena EHR + Kareo billing platforms. Excludes physical security and disaster recovery (covered in annual review).",
  objectives: [
    "Verify ICD-10 and CPT/HCPCS coding accuracy across a sample of 40 encounters",
    "Confirm NPI, taxonomy, and payer ID presence on outgoing 837 claims",
    "Validate patient appointment reminder workflow respects opt-out preferences",
    "Identify HIPAA Security Rule gaps in administrative and technical safeguards",
    "Document remediation actions with assigned owners and target dates",
  ],
  methodology:
    "Document review of policies and procedures, system walkthroughs of EHR and billing platforms, sampled record review (n=40), interviews with the Privacy Officer and billing lead, and verification against HIPAA Security Rule administrative, physical, and technical safeguards. Sampling is risk-weighted toward Medicare claims.",
  schedule: [
    { phase: "Planning + scope confirmation", days: 2, description: "Kickoff meeting, scope sign-off, evidence request list issued." },
    { phase: "Document + system review", days: 4, description: "Review policies, walk through Athena + Kareo, collect logs." },
    { phase: "Sample testing", days: 5, description: "Code 40 encounters; verify 30 outgoing claims; review 20 patient communications." },
    { phase: "Interviews + analysis", days: 3, description: "Interview Privacy Officer, billing lead, IT. Synthesize findings." },
    { phase: "Reporting + readout", days: 2, description: "Draft report, internal review, executive readout." },
  ],
  checklist: [
    { area: "Clinical documentation", items: ["ICD-10 codes match documented diagnoses", "CPT/HCPCS codes match procedures performed", "Modifiers (25, 59) used correctly", "Visit notes include required elements (CC, HPI, exam, A/P)"] },
    { area: "Claim submission", items: ["NPI and taxonomy present on all claims", "Payer ID and member ID validated", "EDI 837 transmissions complete and acknowledged", "Denial pattern analysis (top 5 reasons)"] },
    { area: "HIPAA — Administrative", items: ["Risk analysis current (within 12 months)", "Workforce training log up to date", "Sanction policy documented and applied"] },
    { area: "HIPAA — Technical", items: ["Unique user IDs enforced", "Automatic logoff configured", "Audit logging enabled and reviewed", "Encryption at rest for backups"] },
    { area: "Patient communication", items: ["Opt-in / opt-out tracked per channel", "Privacy notice version current", "Breach notification template ready"] },
  ],
  riskAreas: [
    {
      severity: "high",
      title: "Stale risk analysis",
      detail: "The HIPAA Security Risk Analysis on file is dated 2024-08-12, past the recommended 12-month refresh window. OCR enforcement actions in 2025 cited missing or stale risk analyses as a top finding.",
      clauses: [
        { framework: "HIPAA Security Rule", citation: "§164.308(a)(1)(ii)(A)", note: "Conduct an accurate and thorough assessment of potential risks." },
        { framework: "NIST 800-66 Rev 2", citation: "§4.1", note: "Risk analysis must be ongoing." },
      ],
      requiredAction: "Schedule a refreshed Security Risk Analysis to complete within 30 days.",
      suggestedRemediation: "Use the suite's Risk Assessment tool to draft the v2 risk register, then have the Privacy Officer review and sign.",
    },
    {
      severity: "medium",
      title: "Modifier 25 overuse on E/M codes",
      detail: "Sampling showed modifier 25 appended to 38% of E/M codes paired with same-day procedures, well above the 12–15% benchmark. Likely to trigger payer audits.",
      clauses: [
        { framework: "CMS Guidance", citation: "MLN MM10843", note: "Modifier 25 requires a significant, separately identifiable E/M service." },
      ],
      requiredAction: "Educate providers on appropriate modifier 25 usage and audit a follow-up 20-encounter sample in 60 days.",
    },
    {
      severity: "low",
      title: "Appointment reminder opt-out lag",
      detail: "Two of 20 sampled patients who opted out of SMS reminders received one further message before the system updated. Root cause: nightly batch sync.",
      clauses: [
        { framework: "TCPA", citation: "47 USC §227(b)", note: "Prior express consent required for automated calls/texts." },
      ],
      requiredAction: "Move opt-out propagation from nightly batch to real-time.",
      suggestedRemediation: "Add a webhook from the patient portal preferences endpoint to the SMS gateway.",
    },
  ],
};

const auditPlanB: AuditPlanOutput = {
  scope:
    "HIPAA + clinical content audit for Lumenara Telehealth's patient-facing platform, covering documentation produced by the asynchronous messaging flow, video visit recording retention, and the AI-generated patient education content shown after each visit.",
  objectives: [
    "Verify async messaging produces compliant clinical documentation",
    "Confirm video visit recordings are retained per state law and deleted on schedule",
    "Audit AI-generated patient education content for clinical accuracy",
    "Validate consent flow before each video session",
  ],
  methodology:
    "Workflow walkthrough of async + video flows, content review of last 90 days of AI-generated patient education materials (random sample of 50), retention log audit, and interview with the medical director and the AI content lead.",
  schedule: [
    { phase: "Scope + access provisioning", days: 1, description: "Read-only access to production logs and content store." },
    { phase: "Workflow walkthroughs", days: 3, description: "Both async and video flows, end to end." },
    { phase: "Content sampling", days: 4, description: "Review 50 AI-generated education outputs against current ACC/AHA, ADA, USPSTF guidelines." },
    { phase: "Report", days: 2, description: "Findings, required actions, executive summary." },
  ],
  checklist: [
    { area: "Async messaging", items: ["Clinical impression documented per visit", "Plan documented and signed by clinician", "ICD-10 + CPT applied for billable visits"] },
    { area: "Video visits", items: ["Pre-session consent captured and logged", "Recording retention complies with state law", "Auto-delete at retention end functioning"] },
    { area: "AI content review", items: ["Output cites current guideline source", "No hallucinated drug names or doses", "Reading level appropriate", "Disclaimer present"] },
    { area: "Audit logs", items: ["Who viewed which PHI logged", "Logs immutable", "30-day retention for view events"] },
  ],
  riskAreas: [
    {
      severity: "critical",
      title: "AI education content cited 2018 ADA guidelines",
      detail: "Of 50 sampled patient education outputs about Type 2 diabetes, 9 referenced 2018 ADA Standards of Care, superseded by 2024 updates (notably SGLT2 / GLP-1 sequencing).",
      clauses: [
        { framework: "FDA Software as a Medical Device", citation: "21 CFR §820.30", note: "Design controls require validation against current standards." },
        { framework: "HHS / ONC AI Guidance", citation: "2024-09", note: "Clinical AI outputs must use current evidence base." },
      ],
      requiredAction: "Update the retrieval-augmented knowledge base to current ADA, ACC/AHA, USPSTF guidelines within 14 days.",
      suggestedRemediation: "Add a quarterly guideline refresh checklist and a content freshness check before deploy.",
    },
    {
      severity: "high",
      title: "Video session consent banner skippable",
      detail: "The pre-session consent banner shows for ~400 ms and can be auto-dismissed by clicking elsewhere on the page during load.",
      clauses: [
        { framework: "HIPAA Privacy Rule", citation: "§164.520", note: "Notice of Privacy Practices acknowledgment required." },
        { framework: "State law (varies)", citation: "CA Civ Code §56.05", note: "California Confidentiality of Medical Information Act." },
      ],
      requiredAction: "Make the consent click-to-confirm with explicit acknowledgment recorded in the session log.",
    },
  ],
};

// ============================================================================
// Standards Mapping examples
// ============================================================================

const standardsMappingA: StandardsMappingOutput = {
  query: "Patient portal does not log failed login attempts.",
  clauses: [
    { framework: "HIPAA Security Rule", citation: "§164.312(b)", note: "Audit controls — implement hardware, software, and procedural mechanisms that record and examine activity in information systems containing ePHI." },
    { framework: "HIPAA Security Rule", citation: "§164.308(a)(5)(ii)(C)", note: "Log-in monitoring is an addressable implementation specification under workforce security." },
    { framework: "NIST 800-53", citation: "AU-2", note: "Audit events — organisations must determine event types to be logged, including authentication events." },
    { framework: "NIST 800-66 Rev 2", citation: "§4.18", note: "Audit controls implementation guidance specifically calls out failed login attempts as a baseline event." },
    { framework: "OCR Guidance", citation: "2018-12 RA Workbook", note: "OCR enforcement actions repeatedly cite missing or insufficient audit logging." },
  ],
  notes:
    "Failed login logging is one of the cheapest, most easily-implemented controls and is consistently a finding in OCR audits. The portal should log: timestamp, account attempted (without password), source IP, user agent, and result. Logs should be retained for at least 6 years (HIPAA general record retention) and reviewed at least monthly.\n\nNote that §164.312(b) is a required (not addressable) implementation specification — failure to implement reasonable audit controls is a direct rule violation, not a risk-based judgment. The related log-in monitoring at §164.308(a)(5)(ii)(C) is addressable, but most organisations of any size will be expected to implement it.",
};

const standardsMappingB: StandardsMappingOutput = {
  query: "Marketing emails to past patients without explicit opt-in.",
  clauses: [
    { framework: "HIPAA Privacy Rule", citation: "§164.508(a)(3)", note: "Marketing communications require a specific written authorisation from the individual." },
    { framework: "HIPAA Privacy Rule", citation: "§164.501", note: "Definition of 'marketing' — communications that encourage the recipient to purchase or use a product or service." },
    { framework: "CAN-SPAM Act", citation: "15 USC §7704", note: "Commercial email requires identifiable sender, clear unsubscribe, accurate header/subject." },
    { framework: "TCPA", citation: "47 USC §227(b)", note: "Prior express written consent required for autodialed/prerecorded calls and SMS." },
    { framework: "State law (varies)", citation: "CA SB-1419", note: "California requires opt-in for certain commercial communications to patients." },
  ],
  notes:
    "Patient marketing is one of the most enforced areas of HIPAA Privacy. Critical distinction: refill reminders, appointment reminders, and treatment alternatives are NOT marketing under HIPAA. But promotional content for products, services, or third-party offers requires written, specific, dated authorisation under §164.508.\n\nLayered on top of HIPAA, CAN-SPAM applies to any commercial email regardless of HIPAA status, and TCPA applies to texts and automated calls. State law often adds further opt-in requirements (CA, NY, MA are strictest).\n\nImmediate action: pause any non-treatment, non-appointment communications to patients until a compliant opt-in flow exists and authorisation records are on file.",
};

// ============================================================================
// Gap Analysis examples
// ============================================================================

const gapAnalysisA: GapAnalysisOutput = {
  documentSummary:
    "A two-page Privacy Policy drafted for a 12-provider primary care group. Covers general handling of patient information at a high level, lists three patient rights, and references HIPAA. Lacks the detail expected of an internal HIPAA Privacy Policy (vs a patient-facing Notice of Privacy Practices, which it appears to conflate).",
  presentSections: ["Purpose statement", "Scope (one sentence)", "Three named patient rights", "Privacy Officer contact"],
  missingSections: [
    "Definitions (PHI, ePHI, workforce member, business associate)",
    "Workforce roles and responsibilities",
    "Use & disclosure rules (TPO, public health, judicial, etc.)",
    "Minimum necessary standard",
    "Patient rights — full set per §164.520–§164.528",
    "Authorisation procedures",
    "Breach notification process",
    "Training and sanctions",
    "Review and update cycle",
  ],
  findings: [
    {
      severity: "critical",
      title: "Document conflates internal policy with patient-facing notice",
      detail: "The text reads like a Notice of Privacy Practices (which patients receive) rather than an internal policy (which staff follow). Both documents are required and serve different audiences.",
      clauses: [
        { framework: "HIPAA Privacy Rule", citation: "§164.520", note: "Notice of Privacy Practices requirements." },
        { framework: "HIPAA Privacy Rule", citation: "§164.530(i)", note: "Policies and procedures requirement." },
      ],
      requiredAction: "Split into two documents: a Notice of Privacy Practices (patient-facing) and a Privacy Policy (internal).",
      suggestedRemediation: "Use the suite's Policy Generator to draft the internal policy; keep the existing text as the basis for the NPP.",
    },
    {
      severity: "high",
      title: "Minimum necessary standard absent",
      detail: "Policy does not define or operationalise the minimum necessary standard, a foundational HIPAA requirement.",
      clauses: [{ framework: "HIPAA Privacy Rule", citation: "§164.502(b)" }],
      requiredAction: "Add a Minimum Necessary section defining application to uses, disclosures, and requests.",
    },
    {
      severity: "high",
      title: "No breach notification procedure",
      detail: "Document does not describe how the organisation detects, investigates, documents, or notifies regarding breaches of unsecured PHI.",
      clauses: [{ framework: "HIPAA Breach Notification Rule", citation: "§164.400–414" }],
      requiredAction: "Add breach notification subsection covering risk assessment factors, individual notification timing (60 days), HHS notification (annual or 60 days for ≥500), and media notification (≥500 in a state).",
    },
    {
      severity: "medium",
      title: "Training and sanctions not addressed",
      detail: "Policy is silent on workforce training cadence and sanctions for non-compliance, both required.",
      clauses: [
        { framework: "HIPAA Privacy Rule", citation: "§164.530(b)", note: "Training requirement." },
        { framework: "HIPAA Privacy Rule", citation: "§164.530(e)", note: "Sanctions requirement." },
      ],
      requiredAction: "Add Training (cadence, topics, attendance tracking) and Sanctions (tiers, documentation) sections.",
    },
  ],
};

const gapAnalysisB: GapAnalysisOutput = {
  documentSummary:
    "A 14-page HIPAA Security SOP for a regional billing company. Solid administrative section, reasonable technical section, but the physical safeguards section is thin and the document has not been updated since 2022.",
  presentSections: [
    "Purpose, Scope, Definitions",
    "Roles & Responsibilities (Security Officer, Privacy Officer named)",
    "Administrative Safeguards — Risk management process",
    "Technical Safeguards — Access control, audit logging, encryption",
    "Workforce Training (annual cadence)",
    "Sanctions for non-compliance",
    "References & version control",
  ],
  missingSections: [
    "Physical Safeguards — Workstation use & security policies",
    "Physical Safeguards — Device & media controls (disposal, re-use, accountability, backup)",
    "Contingency Plan / Disaster Recovery",
    "Business Associate management procedures",
    "Information System Activity Review (log review cadence and ownership)",
  ],
  findings: [
    {
      severity: "high",
      title: "Physical Safeguards section minimal",
      detail: "The Physical Safeguards section is two paragraphs and does not address workstation security, media disposal, device controls, or facility access. Required subparts of §164.310 are not implemented as procedures.",
      clauses: [
        { framework: "HIPAA Security Rule", citation: "§164.310(a)", note: "Facility access controls." },
        { framework: "HIPAA Security Rule", citation: "§164.310(b)", note: "Workstation use." },
        { framework: "HIPAA Security Rule", citation: "§164.310(d)(2)", note: "Device and media controls — disposal, re-use, accountability, backup." },
      ],
      requiredAction: "Expand Physical Safeguards into separate subsections per §164.310(a)–(d). Use the Policy Generator to draft missing subsections.",
    },
    {
      severity: "high",
      title: "No documented Information System Activity Review process",
      detail: "Audit logging is configured (technical safeguard) but there is no procedure for who reviews logs, how often, or what triggers escalation. Required addressable implementation specification.",
      clauses: [{ framework: "HIPAA Security Rule", citation: "§164.308(a)(1)(ii)(D)" }],
      requiredAction: "Add an ISAR section defining a monthly review cadence by the Security Officer, log retention of 6 years, and escalation criteria for anomalies.",
    },
    {
      severity: "medium",
      title: "Last review 2022; document stale",
      detail: "Review cycle says 'annual' but the version block shows the last review was 2022-04. NIST 800-53 NIST 800-66 both expect annual review and update.",
      clauses: [{ framework: "NIST 800-66 Rev 2", citation: "§4.20", note: "Periodic review of policies and procedures." }],
      requiredAction: "Conduct a full review now, update version to reflect current year, and add a calendar reminder for next annual review.",
    },
    {
      severity: "medium",
      title: "Business Associate management not addressed",
      detail: "Document references BAAs but does not describe how the org evaluates, tracks, or renews them.",
      clauses: [{ framework: "HIPAA Privacy Rule", citation: "§164.504(e)" }],
      requiredAction: "Add a Business Associate Management section: pre-engagement risk review, signed BAA on file, renewal cadence, termination procedures.",
    },
  ],
};

// ============================================================================
// Risk Assessment examples
// ============================================================================

const riskAssessmentA: RiskAssessmentOutput = {
  organisation: "Coastline Dental Group",
  scope:
    "Annual HIPAA Security Risk Analysis covering ePHI across four dental clinic locations: Athena Dental cloud EHR, on-prem digital imaging server, local backups, patient portal, and email/SMS appointment reminders. Excludes paper records (kept off-site at a HIPAA-compliant storage vendor; covered by separate BAA review).",
  methodology:
    "NIST 800-30 Rev 1 methodology — asset identification, threat source enumeration, vulnerability identification, likelihood × impact scoring on a 4-level scale (low/medium/high/critical), inherent and residual risk classification, recommended controls with HIPAA Security Rule citations.",
  assumptions: [
    "All four locations use the same network architecture and EHR configuration.",
    "BAAs with cloud vendors are current and accurate.",
    "Workforce headcount is stable at 47 across all locations.",
  ],
  rows: [
    {
      asset: "Athena Dental cloud EHR",
      threat: "External attacker, credential stuffing",
      vulnerability: "No MFA on staff accounts; reused passwords observed in workforce survey",
      likelihood: "high",
      impact: "critical",
      inherentRisk: "critical",
      existingControls: "Password complexity policy; account lockout after 5 failures",
      residualRisk: "high",
      recommendedControls: ["Mandate MFA for all clinical and admin accounts", "Enforce password rotation through SSO", "Deploy a password manager for staff"],
      clauses: [
        { framework: "HIPAA Security Rule", citation: "§164.312(d)", note: "Person or entity authentication." },
        { framework: "NIST 800-53", citation: "IA-2", note: "Identification and authentication of users." },
      ],
    },
    {
      asset: "On-prem digital imaging server",
      threat: "Ransomware via email phishing",
      vulnerability: "End-of-life Windows Server 2012; no EDR; mapped network shares to all workstations",
      likelihood: "high",
      impact: "high",
      inherentRisk: "high",
      existingControls: "Daily local backups, antivirus",
      residualRisk: "high",
      recommendedControls: ["Replace Server 2012 with supported OS within 90 days", "Deploy modern EDR (Defender for Endpoint or equivalent)", "Move backups to immutable cloud storage", "Segment imaging server from workstation network"],
      clauses: [
        { framework: "HIPAA Security Rule", citation: "§164.308(a)(7)", note: "Contingency planning." },
        { framework: "HIPAA Security Rule", citation: "§164.312(a)(2)(ii)", note: "Emergency access procedure." },
      ],
    },
    {
      asset: "Patient portal (PortalCo SaaS)",
      threat: "Unauthorised PHI disclosure via shared account",
      vulnerability: "Family-member proxy access uses shared credentials rather than delegated access",
      likelihood: "medium",
      impact: "high",
      inherentRisk: "high",
      existingControls: "BAA with vendor; portal logs login events",
      residualRisk: "medium",
      recommendedControls: ["Migrate to delegated proxy access feature (vendor offers in current release)", "Train staff on proxy registration workflow"],
      clauses: [
        { framework: "HIPAA Privacy Rule", citation: "§164.502(g)", note: "Personal representatives — proxy access must be authorised." },
      ],
    },
    {
      asset: "Email + SMS appointment reminders (vendor X)",
      threat: "PHI exposure in reminder content",
      vulnerability: "Reminder template includes procedure name (e.g., 'root canal') in plain text body",
      likelihood: "medium",
      impact: "medium",
      inherentRisk: "medium",
      existingControls: "BAA with reminder vendor; opt-in collected at registration",
      residualRisk: "low",
      recommendedControls: ["Strip procedure detail from reminder template; reference 'appointment' generically", "Add per-patient opt-out for procedure names"],
      clauses: [{ framework: "HIPAA Privacy Rule", citation: "§164.502(b)", note: "Minimum necessary standard." }],
    },
    {
      asset: "Local workstation hard drives",
      threat: "Theft from clinic location",
      vulnerability: "Workstations not encrypted at rest",
      likelihood: "low",
      impact: "high",
      inherentRisk: "medium",
      existingControls: "Locked clinic doors after hours; cameras",
      residualRisk: "low",
      recommendedControls: ["Enable BitLocker on all workstations", "Document key recovery process"],
      clauses: [{ framework: "HIPAA Security Rule", citation: "§164.312(a)(2)(iv)", note: "Encryption and decryption (addressable)." }],
    },
    {
      asset: "Workforce — clinical staff",
      threat: "Improper disclosure via social media",
      vulnerability: "No formal social media policy; informal verbal guidance only",
      likelihood: "medium",
      impact: "medium",
      inherentRisk: "medium",
      existingControls: "Annual HIPAA training covers privacy generally",
      residualRisk: "low",
      recommendedControls: ["Adopt written social media policy", "Include scenario-based examples in annual training", "Document acknowledgment in personnel file"],
      clauses: [{ framework: "HIPAA Privacy Rule", citation: "§164.530(b)", note: "Training." }],
    },
  ],
  summary: {
    criticalCount: 0,
    highCount: 2,
    mediumCount: 1,
    lowCount: 3,
    topRecommendations: [
      "Mandate MFA across the EHR within 30 days — single highest-impact control.",
      "Replace EOL imaging server OS and harden network segmentation within 90 days.",
      "Encrypt all workstation drives (BitLocker) within 60 days.",
      "Adopt a written social media policy and incorporate into annual training.",
    ],
  },
};

const riskAssessmentB: RiskAssessmentOutput = {
  organisation: "Lumora Health (EHR add-on SaaS)",
  scope:
    "Annual HIPAA + SOC 2 Security Risk Analysis for Lumora Health's cloud add-on serving 50+ clinic customers. Covers the production application stack, data store, customer onboarding pipeline, and the AI features that summarise patient encounters.",
  methodology:
    "NIST 800-30 + SOC 2 Common Criteria. Hybrid scoring — likelihood × impact on a 4-level scale, with explicit consideration of multi-tenant blast radius (one customer's incident affecting the whole platform).",
  assumptions: [
    "Tenant data is logically separated by row-level security in Postgres; physical separation is not in scope.",
    "All vendors are SOC 2 Type II audited and have BAAs.",
    "Workforce headcount: 22, all remote.",
  ],
  rows: [
    {
      asset: "Production Postgres (multi-tenant PHI)",
      threat: "Tenant data crossover via missing row-level security",
      vulnerability: "5 admin endpoints bypass the RLS-enforced repository pattern and use raw SQL",
      likelihood: "medium",
      impact: "critical",
      inherentRisk: "critical",
      existingControls: "RLS enabled on most tables; weekly automated audit; admin actions logged",
      residualRisk: "high",
      recommendedControls: ["Refactor 5 admin endpoints to use the tenant-scoped repository", "Add CI check that blocks merge if raw SQL appears outside an allowlist", "Quarterly cross-tenant penetration test"],
      clauses: [
        { framework: "HIPAA Security Rule", citation: "§164.312(a)(1)", note: "Access control — unique user identification and emergency access." },
        { framework: "SOC 2", citation: "CC6.1", note: "Logical access security." },
      ],
    },
    {
      asset: "AI summarisation feature",
      threat: "PHI leakage to LLM vendor without BAA",
      vulnerability: "Initial integration POC used OpenAI without a BAA; production now uses Anthropic with BAA, but POC code path still exists behind a feature flag",
      likelihood: "low",
      impact: "critical",
      inherentRisk: "high",
      existingControls: "Feature flag default off in production; quarterly review of flag table",
      residualRisk: "low",
      recommendedControls: ["Delete the OpenAI POC code path entirely; do not rely on a feature flag", "Add a CI check that fails on any reference to the removed module"],
      clauses: [
        { framework: "HIPAA Privacy Rule", citation: "§164.502(e)", note: "Business associate contracts." },
        { framework: "HIPAA Security Rule", citation: "§164.308(b)(1)", note: "Business associate written assurances." },
      ],
    },
    {
      asset: "Customer onboarding (CSV import)",
      threat: "Operator error — wrong tenant assignment",
      vulnerability: "Tenant ID is set from an editable dropdown on the operator console",
      likelihood: "medium",
      impact: "high",
      inherentRisk: "high",
      existingControls: "Operator training; pre-import dry run; rollback procedure documented",
      residualRisk: "medium",
      recommendedControls: ["Require explicit two-person approval for any cross-tenant data action", "Log the approval chain immutably", "Replace dropdown with typed confirmation of tenant slug"],
      clauses: [{ framework: "HIPAA Security Rule", citation: "§164.308(a)(3)", note: "Workforce security — clear authorisation for access." }],
    },
    {
      asset: "Source code repository",
      threat: "Credential exposure via committed secret",
      vulnerability: "No secret-scanning hook on the company GitHub org",
      likelihood: "medium",
      impact: "high",
      inherentRisk: "high",
      existingControls: "Code review required; .gitignore excludes .env files",
      residualRisk: "low",
      recommendedControls: ["Enable GitHub secret scanning + push protection org-wide", "Rotate any historical credentials surfaced by scan"],
      clauses: [{ framework: "NIST 800-53", citation: "IA-5", note: "Authenticator management." }],
    },
    {
      asset: "Workforce — engineers with production access",
      threat: "Lost or stolen laptop",
      vulnerability: "Two engineers have BitLocker disabled; finding from MDM audit",
      likelihood: "low",
      impact: "high",
      inherentRisk: "medium",
      existingControls: "MDM enrolment required; remote wipe capability",
      residualRisk: "low",
      recommendedControls: ["Enforce BitLocker via MDM policy; deny network access to non-compliant devices", "Add monthly MDM compliance review to the security calendar"],
      clauses: [{ framework: "HIPAA Security Rule", citation: "§164.312(a)(2)(iv)", note: "Encryption at rest." }],
    },
    {
      asset: "Customer-facing APIs",
      threat: "API rate-limit bypass enabling enumeration",
      vulnerability: "Rate limits are per-IP, not per-API-key",
      likelihood: "medium",
      impact: "medium",
      inherentRisk: "medium",
      existingControls: "Per-IP rate limits; WAF rules",
      residualRisk: "low",
      recommendedControls: ["Shift rate limiting to per-API-key", "Add anomaly detection on enumeration patterns"],
      clauses: [{ framework: "SOC 2", citation: "CC6.6", note: "System monitoring." }],
    },
  ],
  summary: {
    criticalCount: 0,
    highCount: 1,
    mediumCount: 1,
    lowCount: 4,
    topRecommendations: [
      "Refactor the 5 admin endpoints bypassing RLS — highest residual risk in the platform.",
      "Delete the OpenAI POC code path entirely; remove the feature-flag fallback.",
      "Enable GitHub secret scanning and push protection org-wide.",
      "Enforce BitLocker via MDM and add monthly compliance review.",
    ],
  },
};

// ============================================================================
// Policy examples
// ============================================================================

const policyA: PolicyOutput = {
  policyTitle: "HIPAA Workforce Sanction Policy",
  policyId: "HIPAA-WS-001",
  version: "1.0",
  effectiveDate: "2026-05-22",
  reviewCycle: "Annual",
  owner: "Privacy Officer",
  sections: [
    {
      heading: "Purpose",
      body:
        "Defines disciplinary measures applied to workforce members who fail to comply with the privacy and security policies of Greenline Family Medicine. This policy implements the sanction requirement under 45 CFR §164.530(e) (Privacy Rule) and §164.308(a)(1)(ii)(C) (Security Rule).",
    },
    {
      heading: "Scope",
      body:
        "Applies to all employees, contractors, volunteers, students, and any other workforce member of Greenline Family Medicine who has access to protected health information (PHI) in any form (paper, electronic, oral).",
    },
    {
      heading: "Definitions",
      body: "Terms used in this policy:",
      bullets: [
        "PHI — Protected Health Information, as defined at 45 CFR §160.103.",
        "Violation — Any act or omission that contravenes the Privacy or Security Rule or Greenline's privacy/security policies.",
        "Workforce Member — Any individual whose conduct is under the direct control of Greenline, whether or not they are paid by Greenline.",
        "Severity Tier — Classification (Minor, Moderate, Serious, Egregious) applied at investigation.",
      ],
    },
    {
      heading: "Roles and Responsibilities",
      body: "Authority and responsibility for this policy:",
      bullets: [
        "Privacy Officer: Investigates incidents, classifies severity, issues sanctions.",
        "Department Manager: Surfaces incidents to the Privacy Officer; supports enforcement.",
        "HR: Documents sanctions in personnel records and tracks training completion.",
        "Workforce Members: Report observed violations promptly via the Privacy Officer or anonymous reporting channel.",
      ],
    },
    {
      heading: "Policy / Procedure",
      body:
        "When a possible violation is reported, the Privacy Officer shall:\n\n1. Acknowledge receipt of the report within one business day.\n2. Conduct a fact-finding investigation, documenting evidence and interviews.\n3. Determine whether a violation occurred and classify its severity.\n4. Apply the appropriate sanction (table below), in consultation with HR.\n5. Document the incident, investigation, sanction, and any remediation in the personnel record.\n6. If the violation constitutes a breach of unsecured PHI, initiate the Breach Notification Procedure.\n\nSanction tiers:\n• Minor (first occurrence): retraining, written warning.\n• Moderate: written warning, removal of access to affected systems pending remediation training.\n• Serious: suspension without pay (up to 5 business days), mandatory retraining, formal disciplinary letter.\n• Egregious: termination of employment / contract.\n\nFactors considered in severity classification:\n• Intent (accidental vs deliberate vs malicious)\n• Number of records affected\n• Whether PHI was disclosed externally\n• Pattern of prior violations\n• Cooperation with investigation",
    },
    {
      heading: "Training",
      body:
        "All workforce members complete HIPAA training within 30 days of hire and annually thereafter. The training includes a sanction-policy module explaining tiers, examples of each tier, and the reporting workflow. Completion is logged in the HR system. Workforce members who have received a sanction must complete targeted retraining within 14 days of the sanction.",
    },
    {
      heading: "Sanctions for Non-Compliance",
      body:
        "This policy is itself enforced under itself. Failure of a Department Manager to surface a known incident, or failure of any workforce member to report an observed violation, is treated as a Moderate-tier violation at minimum.",
    },
    {
      heading: "Records and Retention",
      body:
        "Investigation files, sanction records, and related training documentation are retained for six (6) years from the date of the sanction, per 45 CFR §164.530(j). Records are stored in the encrypted HRIS system; access is restricted to the Privacy Officer, HR Director, and the affected manager.",
    },
    {
      heading: "Review and Updates",
      body:
        "This policy is reviewed annually by the Privacy Officer or sooner upon material change in regulation (HHS OCR guidance, state law) or upon a serious-tier or egregious-tier incident. Version history is tracked at the foot of this document.",
    },
  ],
  references: [
    { framework: "HIPAA Privacy Rule", citation: "§164.530(e)", note: "Sanctions standard." },
    { framework: "HIPAA Security Rule", citation: "§164.308(a)(1)(ii)(C)", note: "Sanction policy as part of security management process." },
    { framework: "HIPAA", citation: "§164.530(j)", note: "Documentation retention — six years." },
    { framework: "NIST 800-66 Rev 2", citation: "§4.3", note: "Sanction policy implementation guidance." },
  ],
};

const policyB: PolicyOutput = {
  policyTitle: "Access Control Policy",
  policyId: "SEC-AC-001",
  version: "1.0",
  effectiveDate: "2026-05-22",
  reviewCycle: "Annual",
  owner: "Security Officer",
  sections: [
    {
      heading: "Purpose",
      body:
        "Establishes how Northbrook Telehealth grants, modifies, and revokes access to electronic protected health information (ePHI) and supporting systems. Implements the access-control requirements of 45 CFR §164.312(a) and §164.308(a)(4).",
    },
    {
      heading: "Scope",
      body:
        "Applies to all workforce members and information systems containing ePHI, including the production application (Northbrook EHR), the patient portal, the data warehouse, source code repositories, and all related administrative consoles.",
    },
    {
      heading: "Definitions",
      body: "Key terms:",
      bullets: [
        "Role — A defined set of system permissions tied to a job function (Clinician, Nurse, Billing, Engineer-Tier-1, etc.).",
        "Least Privilege — Granting the minimum access required for a workforce member to perform their job.",
        "Privileged Account — Any account with administrative rights to a production system.",
        "Joiner/Mover/Leaver (JML) — Workforce lifecycle events that trigger access changes.",
      ],
    },
    {
      heading: "Roles and Responsibilities",
      body: "Authority over access decisions:",
      bullets: [
        "Security Officer: Maintains the role catalog; reviews privileged accounts quarterly.",
        "Hiring Manager: Requests initial access for new hires; specifies role from the catalog.",
        "Workforce Member: Acknowledges access terms and reports compromise.",
        "HR: Triggers the Leaver workflow on the workforce member's last day.",
        "Engineering: Implements role-based access controls in systems; ensures audit logging.",
      ],
    },
    {
      heading: "Policy / Procedure",
      body:
        "1. Joiner: Hiring Manager submits access request via the Access Request Form, specifying the role. Security Officer approves. Engineering provisions within one business day. New hire receives MFA setup instructions.\n\n2. Mover: When a workforce member changes role, the prior access is revoked within 7 calendar days and new access provisioned. Both events are logged.\n\n3. Leaver: HR notifies Security Officer of separation on the last day. All access is revoked within 4 hours of departure. Privileged accounts are revoked immediately upon notice of separation, even if the workforce member remains employed in a non-privileged capacity.\n\n4. Quarterly Access Review: Security Officer compares the active access list against the workforce roster and the role catalog. Discrepancies are remediated within 14 days.\n\n5. Privileged Account Standards: All privileged accounts require MFA, are personally assigned (no shared admin accounts), and all actions are logged with at least six years retention.\n\n6. Emergency Access: A documented break-glass procedure exists for clinical emergencies. Use requires Security Officer approval within 24 hours of activation; logs are reviewed quarterly.",
    },
    {
      heading: "Training",
      body:
        "All workforce members complete a 30-minute access-control awareness module within 14 days of access being granted, and annually thereafter. Privileged account holders complete an additional advanced module within 14 days of receiving privileged access.",
    },
    {
      heading: "Sanctions for Non-Compliance",
      body:
        "Violations of this policy (sharing accounts, bypassing MFA, retaining access after a role change) are sanctioned per the Workforce Sanction Policy (HIPAA-WS-001).",
    },
    {
      heading: "Records and Retention",
      body:
        "Access requests, approvals, quarterly reviews, and break-glass activations are retained for six (6) years per 45 CFR §164.530(j). System audit logs of privileged account activity are retained for six (6) years.",
    },
    {
      heading: "Review and Updates",
      body:
        "Reviewed annually by the Security Officer, or sooner upon a material change to the role catalog, addition of a new ePHI-containing system, or a security incident involving access control.",
    },
  ],
  references: [
    { framework: "HIPAA Security Rule", citation: "§164.312(a)", note: "Access control technical safeguards." },
    { framework: "HIPAA Security Rule", citation: "§164.308(a)(4)", note: "Information access management." },
    { framework: "HIPAA Security Rule", citation: "§164.308(a)(3)(ii)(C)", note: "Termination procedures." },
    { framework: "NIST 800-53", citation: "AC-2", note: "Account management." },
    { framework: "NIST 800-53", citation: "AC-6", note: "Least privilege." },
  ],
};

// ============================================================================
// Assembled seed records
// ============================================================================

export function buildSeedRecords(): SeedRecord[] {
  const demoModel = "demo-data";
  const demoProvider = "seed";
  return [
    {
      tool: "audit-plan",
      title: "Audit Plan — Acme Cardiology Group",
      inputJson: JSON.stringify({
        organisation: "Acme Cardiology Group",
        organisationType: "Clinic",
        scope: "HIPAA + Claims",
        period: "Q2 2026",
        systems: "Athena EHR (cloud), Kareo billing (cloud), Mailgun reminders, on-prem file backup, patient portal at portal.acme.example.",
        auditor: "J. Carter, CHC",
      }),
      outputJson: JSON.stringify(auditPlanA),
      sourceFileName: null,
      sourceFileText: null,
      model: demoModel,
      provider: demoProvider,
    },
    {
      tool: "audit-plan",
      title: "Audit Plan — Lumenara Telehealth",
      inputJson: JSON.stringify({
        organisation: "Lumenara Telehealth",
        organisationType: "Telehealth",
        scope: "HIPAA + clinical content",
        period: "2026-H1",
        systems: "Async messaging service, video visit platform, AI patient-education generator.",
      }),
      outputJson: JSON.stringify(auditPlanB),
      sourceFileName: null,
      sourceFileText: null,
      model: demoModel,
      provider: demoProvider,
    },
    {
      tool: "standards-mapping",
      title: "Mapping — Patient portal does not log failed login attempts.",
      inputJson: JSON.stringify({ query: standardsMappingA.query }),
      outputJson: JSON.stringify(standardsMappingA),
      sourceFileName: null,
      sourceFileText: null,
      model: demoModel,
      provider: demoProvider,
    },
    {
      tool: "standards-mapping",
      title: "Mapping — Marketing emails to past patients without explicit opt-in.",
      inputJson: JSON.stringify({ query: standardsMappingB.query }),
      outputJson: JSON.stringify(standardsMappingB),
      sourceFileName: null,
      sourceFileText: null,
      model: demoModel,
      provider: demoProvider,
    },
    {
      tool: "gap-analysis",
      title: "Gap Analysis — Privacy Policy (12-provider primary care)",
      inputJson: JSON.stringify({
        documentType: "Privacy Policy",
        framework: "HIPAA Security + Privacy Rules",
        context: "12-provider primary care group, last update 2 years ago.",
      }),
      outputJson: JSON.stringify(gapAnalysisA),
      sourceFileName: "privacy_policy_v2.txt",
      sourceFileText: "(demo — actual document text would be stored here)",
      model: demoModel,
      provider: demoProvider,
    },
    {
      tool: "gap-analysis",
      title: "Gap Analysis — HIPAA Security SOP (regional billing co)",
      inputJson: JSON.stringify({
        documentType: "HIPAA SOP",
        framework: "HIPAA Security + Privacy Rules",
        context: "Regional billing company serving 80+ clinics, last reviewed 2022.",
      }),
      outputJson: JSON.stringify(gapAnalysisB),
      sourceFileName: "hipaa_security_sop_v3.pdf",
      sourceFileText: "(demo — actual document text would be stored here)",
      model: demoModel,
      provider: demoProvider,
    },
    {
      tool: "risk-assessment",
      title: "Risk Assessment — Coastline Dental Group",
      inputJson: JSON.stringify({
        organisation: "Coastline Dental Group",
        organisationType: "Clinic",
        scope: "Four dental clinic locations, annual HIPAA Security Risk Analysis.",
        ephiInventory: "Athena Dental cloud EHR, on-prem digital imaging server (Server 2012), local backups, patient portal, email + SMS reminders.",
      }),
      outputJson: JSON.stringify(riskAssessmentA),
      sourceFileName: null,
      sourceFileText: null,
      model: demoModel,
      provider: demoProvider,
    },
    {
      tool: "risk-assessment",
      title: "Risk Assessment — Lumora Health",
      inputJson: JSON.stringify({
        organisation: "Lumora Health (EHR add-on SaaS)",
        organisationType: "Healthcare SaaS",
        scope: "Multi-tenant production stack, serving 50+ clinic customers.",
        ephiInventory: "Postgres (multi-tenant), AI summarisation, customer onboarding pipeline, source code repos, engineer laptops.",
      }),
      outputJson: JSON.stringify(riskAssessmentB),
      sourceFileName: null,
      sourceFileText: null,
      model: demoModel,
      provider: demoProvider,
    },
    {
      tool: "policy",
      title: policyA.policyTitle,
      inputJson: JSON.stringify({
        policyTitle: policyA.policyTitle,
        policyType: "Sanction Policy",
        organisation: "Greenline Family Medicine",
        organisationType: "Clinic",
        owner: "Privacy Officer",
        framework: "HIPAA Security + Privacy Rules",
        effectiveDate: "2026-05-22",
        requirements: "Tiered sanctions, training requirement, six-year retention.",
      }),
      outputJson: JSON.stringify(policyA),
      sourceFileName: null,
      sourceFileText: null,
      model: demoModel,
      provider: demoProvider,
    },
    {
      tool: "policy",
      title: policyB.policyTitle,
      inputJson: JSON.stringify({
        policyTitle: policyB.policyTitle,
        policyType: "Access Control Policy",
        organisation: "Northbrook Telehealth",
        organisationType: "Telehealth",
        owner: "Security Officer",
        framework: "HIPAA Security + Privacy Rules",
        effectiveDate: "2026-05-22",
        requirements: "Joiner/Mover/Leaver workflow, quarterly access review, break-glass procedure.",
      }),
      outputJson: JSON.stringify(policyB),
      sourceFileName: null,
      sourceFileText: null,
      model: demoModel,
      provider: demoProvider,
    },
  ];
}
