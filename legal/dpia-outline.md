# MediReady — Data Protection Impact Assessment (DPIA)

**Status**: outline + partial draft. Not legally reviewed. Refresh on every material change.  
**Owner**: [PRRC / DPO once appointed — currently founder]  
**Version**: 0.1 — DRAFT  
**Last reviewed**: [DATE]

This DPIA is prepared per Art 35 GDPR and follows the structure recommended by EDPB Guidelines on DPIAs (WP248rev.01) and IMY's published methodology.

A DPIA is **required** for MediReady because the Service involves:
- Large-scale processing of input that may, despite controls, contain special-category data (Art 35(3)(b))
- Use of new technology — AI inference — at scale (Art 35(1))
- Innovative use of personal data in a healthcare-adjacent context (IMY 2026 priority area)

---

## 1. Systematic description of processing

### 1.1 Nature of processing

| Processing | Description |
|---|---|
| `/scan` (free audit) | Customer pastes text or uploads a file. Text is sent to one or more LLM providers, response is returned, in-memory state is discarded. **Nothing written to disk.** |
| `/suite/*` (Compliance Suite) | Customer fills a structured form. Form input + generated output saved to local SQLite. Customer can delete via `/suite/history`. |
| Account / waitlist / contact | Customer email + optional name stored locally; transactional email sent via Resend. |
| Payment | Customer pays via Revolut Checkout; only payment record IDs stored locally. Card data held by Revolut. |
| Operational logs | Server runtime emits timestamps, request IDs, error metadata (no input content). Retained ≤ 90 days. |

### 1.2 Scope

- **Personal data categories**: see DPA §4 (account, contact, user-submitted text, payment metadata, operational logs)
- **Data subjects**: customer employees / authorised users; (by accident, in violation of input policy) potentially identifiable healthcare workers or patients named in submitted text
- **Data volume**: TBD per customer cohort
- **Geographic scope**: Sweden (primary), EU/EEA (secondary)
- **Duration**: per subscription term + DPA §12 deletion

### 1.3 Context

- **Sector**: healthcare-adjacent (administrative tooling for compliance and audit functions)
- **Relationship to data subjects**: B2B SaaS; the data subject relationship belongs to the customer (controller)
- **Power dynamic**: low — data subjects are typically employees of the customer with workplace processing already established
- **State of the art**: rapidly evolving (LLM inference, EU AI Act, IMY AI-in-healthcare priority)

### 1.4 Purpose

- **Primary**: enable customers to draft compliance documentation, perform internal audits, and map regulatory clauses without manual templating
- **Secondary**: none. **No** secondary use for product analytics, model training, or marketing profiling.
- **Legal basis** (controller, not processor — but documented here for clarity): Art 6(1)(f) legitimate interest for customer employee data; Art 6(1)(b) contract for paying customers

---

## 2. Necessity and proportionality

### 2.1 Lawful basis

The Processor relies on the Controller's lawful basis. The Service's processing of personal data is necessary for the contracted purpose under Art 28(3)(a) — processing on documented instructions of the Controller.

### 2.2 Data minimisation

| Measure | Implementation |
|---|---|
| No account required for `/scan` | Reduces personal data to zero for the free-tier flow (anonymous use) |
| Suite forms request only fields needed for the chosen tool | No "just in case" fields |
| Operational logs strip input content | Verified at logger level |
| No analytics / no behavioural telemetry | Verified — no third-party tags on the site |
| Client-side detector blocks common PHI patterns | `lib/phi/detector.ts` — see Annex A |
| Free-tier history limited to 7 days | Older runs hidden from non-admins |

### 2.3 Storage limitation

- Suite outputs: until customer deletes (user-controlled) or DPA §12 termination
- Operational logs: 90 days
- Waitlist emails: until customer requests deletion
- Payment metadata: 7 years (Swedish accounting law — Bokföringslagen 7 kap.)

### 2.4 Accuracy

- LLM outputs are not factual representations of any data subject; they are generated text. The Service presents outputs as **drafts requiring human review**.
- Customer can edit / delete any Suite output.

### 2.5 Transparency

- Privacy policy at `/privacy`
- Security architecture at `/security`
- This DPIA available to customers on request

---

## 3. Risks to data subjects

### 3.1 Risk catalogue

| # | Risk | Source | Inherent likelihood | Inherent impact | Inherent risk |
|---|---|---|---|---|---|
| R1 | Customer submits PHI / special-category data despite policy | Customer error | High | High | **Critical** |
| R2 | AI provider retains or trains on submitted input | Sub-processor breach of terms | Low | High | High |
| R3 | Unauthorized access to Suite SQLite database | Server compromise | Medium | High | High |
| R4 | Unauthorized access to operational logs containing email addresses | Server compromise | Medium | Low | Medium |
| R5 | International transfer to US sub-processor without valid safeguard | Schrems II / regulatory shift | Medium | Medium | Medium |
| R6 | LLM output contains hallucinated personal data (false attribution) | Model behaviour | Low | Medium | Medium |
| R7 | Sub-processor change without notification | Operational | Low | Medium | Medium |
| R8 | Data breach notification not delivered within 72 hours | Process gap | Low | High | High |

### 3.2 Mitigations (mapping to risks above)

| Risk | Mitigation | Residual risk |
|---|---|---|
| R1 | (a) Mandatory PHI input warning + acknowledgement on every Suite form; (b) Client-side regex detector blocks submit on detected identifier patterns; (c) DPA §4 contractually prohibits PHI submission; (d) Indemnity in DPA §16; (e) NMI-out positioning in product copy | Medium |
| R2 | (a) Sub-processor DPAs with each AI provider; (b) Provider terms reviewed for "no training" commitments; (c) Inputs not flagged as training-eligible at API call level where the provider supports the flag | Low |
| R3 | (a) TLS in transit; (b) Volume-level encryption at rest (**planned — gap**); (c) SSH key-only access + MFA on hosting console; (d) No public DB ports; (e) Backups encrypted and access-controlled | Medium pending encryption-at-rest |
| R4 | (a) Logs do not contain input content (verified); (b) Same server access controls as R3; (c) 90-day retention | Low |
| R5 | (a) SCCs in place with US providers; (b) TIA documented per provider; (c) Migration to EU-region endpoints where available (Gemini EU endpoint, Resend EU endpoint) | Low after EU-endpoint pinning |
| R6 | (a) UI presents output as draft; (b) User must review before downloading/sharing; (c) Service explicitly not for individual patient care | Low |
| R7 | (a) `subprocessors.md` published; (b) 30-day customer notification under DPA §10; (c) Process owner documented | Low |
| R8 | (a) Documented incident response procedure; (b) On-call contact 24/7; (c) Tabletop exercise annually (**planned — gap**) | Medium pending tabletop |

### 3.3 Open gaps requiring action

These are the **must-fix** items before market entry into regulated Swedish healthcare:

1. **Per-user accounts** (currently global access) — without per-user auth, R3 inherent risk is higher than acceptable
2. **Audit log of who reads/downloads Suite documents** — not built; required for R3 mitigation
3. **Volume-level encryption at rest** — planned, not implemented
4. **Automated backup with documented retention** — currently depends on Hostinger snapshot policy
5. **Pentest** — not done; required by enterprise customers
6. **Tabletop exercise on incident response** — not done
7. **Migration to EU-pinned endpoints** for Google / Resend — not confirmed

---

## 4. Stakeholder consultation

| Stakeholder | Consulted? | Output |
|---|---|---|
| Founder | Yes — this document | Owner of acceptance |
| Swedish counsel | **Pending** | NMI applicability opinion + DPA review |
| Pilot customers (1–3 Swedish vårdgivare or konsulter) | Pending | Real-world risk view |
| External pentest firm | Pending (planned pre-enterprise) | Independent technical risk assessment |
| Affected data subjects | n/a directly (B2B model) | Surfaced via customers |

---

## 5. Compliance with Article 35(7)(d)

This DPIA contains:

- (a) **Systematic description**: §1 ✅
- (b) **Necessity & proportionality**: §2 ✅
- (c) **Risks to data subjects**: §3 ✅
- (d) **Safeguards, security measures, and mechanisms**: §3.2 ✅

---

## 6. Decision

| Item | Decision |
|---|---|
| Overall residual risk after mitigations | **Medium** (acceptable for non-regulated customers; **not yet acceptable** for direct sales to Swedish vårdgivare until gaps in §3.3 are closed) |
| Consultation with IMY required under Art 36? | **Not at current scope**. If the architecture changes such that the Service starts handling identifiable patient data (in violation of current positioning), Art 36 consultation is required. |
| Date of decision | [DATE] |
| Decision-maker | [name + role] |
| Review trigger | Any of: (a) new sub-processor; (b) new feature touching personal data; (c) annual cycle; (d) regulatory change (e.g. EU AI Act applicability); (e) personal data breach |

---

## Annex A — Client-side PHI detector

See [`lib/phi/detector.ts`](../lib/phi/detector.ts). Patterns covered:

- Swedish personnummer (YYMMDD-XXXX / YYYYMMDD-XXXX, with `+` for over-100)
- US Social Security Number
- Labeled identifiers: `Personnummer:`, `PNR:`, `MRN:`, `Patient ID:`, `Journal nr:`, etc.
- Date of birth with context: `född YYYY`, `DOB MM/DD/YYYY`, `f. YYYY`
- Swedish phone numbers with explicit prefix

Blocking is **conservative** — favours false positives over missed identifiers. Users can edit surrounding text to break a false-positive pattern.

## Annex B — Sub-processor list

See [`subprocessors.md`](./subprocessors.md).

## Annex C — Incident response procedure

[TBD — separate document; reference here once written. Must cover: detection → triage → notification (Controller within 48h per DPA §9; IMY within 72h per Art 33) → remediation → post-mortem.]
