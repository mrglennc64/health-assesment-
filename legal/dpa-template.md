# Data Processing Agreement / Personuppgiftsbiträdesavtal

**Template — DRAFT. Not legally reviewed. Do not sign without Swedish counsel review.**

This template covers the obligations under Article 28 of Regulation (EU) 2016/679 (GDPR) and the Swedish supplementary Data Protection Act (lag 2018:218 med kompletterande bestämmelser till EU:s dataskyddsförordning). It is drafted in English with a Swedish summary; for Swedish customers, prepare a fully Swedish version before signing.

---

## 1. Parties / Parter

**Controller / Personuppgiftsansvarig**  
[Customer legal name]  
[Customer organisation number]  
[Customer address]  
("**Controller**" / "**Personuppgiftsansvarig**")

**Processor / Personuppgiftsbiträde**  
MediReady (operated by [legal entity — TBD])  
Stockholm, Sweden  
("**Processor**" / "**Personuppgiftsbiträde**")

---

## 2. Background and purpose / Bakgrund och syfte

The Controller uses the Processor's "MediReady" service (the **Service**) to support its internal compliance, audit, and policy-documentation workflows. To deliver the Service, the Processor processes personal data on the Controller's behalf. This agreement governs that processing.

The Service is **not** a National Medical Information System (NMI) under HSLF-FS 2022:42 and **must not** be used by the Controller for individual patient care. The Controller is responsible for ensuring inputs to the Service contain no protected health information (PHI) or other special-category data tied to identifiable individuals.

---

## 3. Subject matter, nature, and duration / Föremål, art och varaktighet

- **Subject matter**: processing of personal data necessary to operate the Service for the Controller.
- **Nature of processing**: temporary in-memory processing (free audits via `/scan`); local SQLite persistence on the application server (Compliance Suite outputs); transmission to third-party AI inference providers (see §10).
- **Duration**: for the term of the underlying subscription or service contract between the parties, plus the deletion period under §11.

---

## 4. Categories of personal data / Kategorier av personuppgifter

| Category | Source | Storage |
|---|---|---|
| Controller's contact / account data (name, work email, role) | Account registration | Local DB until account deletion |
| Controller user inputs (text/files submitted to the Service) | Submitted via UI | Discarded after request (`/scan`) or local DB until deleted by user (`/suite/*`) |
| Operational logs (timestamps, request IDs, error metadata, **no input content**) | Server runtime | Retained per Processor's standard retention (≤ 90 days) |
| Payment metadata (no card data) | Payment processor (Revolut) | Local DB; card data held by Revolut |

The Controller **must not** submit special-category data under Art 9 GDPR (including health data tied to identifiable individuals) or criminal-offence data under Art 10. The Processor operates client-side detection to block known identifier patterns, but the Controller remains responsible for input content.

---

## 5. Categories of data subjects / Kategorier av registrerade

- Controller's employees and authorised users
- (As a result of incorrect input by Controller, in violation of §4 — see §13)

---

## 6. Controller's instructions / Den ansvarigas instruktioner

The Processor processes personal data only on documented instructions from the Controller. The Controller's instructions are: (i) this agreement; (ii) the Controller's use of the Service through its documented features; (iii) any further written instruction issued by the Controller.

If the Processor believes an instruction infringes GDPR or other Union/Member State data protection law, the Processor shall promptly notify the Controller.

---

## 7. Security measures / Säkerhetsåtgärder

The Processor implements appropriate technical and organisational measures, taking into account the state of the art, including:

- TLS 1.2+ in transit (browser ↔ server; server ↔ AI providers)
- Encryption at rest for the SQLite database (full-volume encryption on the application server)
- SSH key-only access to production; MFA on hosting console, source repository, and payment processor
- Least-privilege role separation for staff with production access
- Application-layer secrets stored as environment variables, never in source control
- Client-side detection of common personal-identifier patterns (Swedish personnummer, US SSN, MRN-style labels) with submit blocking
- Documented incident response procedure (see §9)

A current technical and organisational measures (TOM) summary is available at request and is incorporated by reference.

---

## 8. Confidentiality / Sekretess

Personnel authorised to process personal data are bound by written confidentiality undertakings or appropriate statutory obligations of confidentiality. Access to the Controller's personal data is limited to staff with a need to know.

---

## 9. Personal data breach notification / Anmälan om personuppgiftsincident

The Processor notifies the Controller without undue delay, and in any case within **48 hours** of becoming aware of a personal data breach affecting the Controller's data. The notification includes, to the extent then known:

- nature of the breach, categories and approximate number of data subjects and records concerned
- likely consequences
- measures taken or proposed to address the breach and mitigate adverse effects
- contact point for follow-up

The Processor assists the Controller in fulfilling its own notification obligations to the supervisory authority (IMY) and data subjects under Art 33–34 GDPR.

---

## 10. Sub-processors / Underbiträden

The Controller grants the Processor a **general written authorisation** to engage the sub-processors listed in the file `subprocessors.md`, published at [URL TBD].

The Processor:

- maintains the published sub-processor list current at all times
- gives the Controller at least **30 days' notice** of any intended addition or replacement, via the email address registered on the Controller's account
- ensures each sub-processor is bound by data-protection obligations no less protective than those in this agreement, including assistance with security, breach notification, and data-subject rights

If the Controller objects to a proposed sub-processor change within the notice period, the parties shall in good faith seek a resolution. Failing resolution, the Controller may terminate the Service for the affected processing, with refund of any prepaid fees for the unused remainder.

**Note on AI inference providers** (Mistral, Google, OpenRouter): these process input content for inference and are sub-processors. None operates under a HIPAA Business Associate Agreement with the Processor. International transfers under §13.

---

## 11. Assistance with data-subject rights / Bistånd med registrerades rättigheter

Taking into account the nature of the processing, the Processor assists the Controller by appropriate technical and organisational measures, insofar as possible, for the fulfilment of the Controller's obligation to respond to requests under Art 15–22 GDPR (access, rectification, erasure, restriction, portability, objection).

For Compliance Suite outputs, the Controller (or its end-user) may delete records directly via the `/suite/history` interface (hard `DELETE` against the database).

For other data (account, contact, payment metadata, operational logs), the Controller's request to `mrglenncarter@gmail.com` is acknowledged within 5 business days and completed within 30 days unless extension under Art 12(3) is required.

---

## 12. Return or deletion / Återlämning eller radering

On termination of the underlying contract, at the Controller's choice, the Processor:

- deletes all personal data processed on the Controller's behalf, **or**
- returns it in a structured machine-readable format and then deletes its copies

within **30 days** of termination, unless Union or Member State law requires storage of the personal data. The Processor confirms deletion in writing.

Operational logs containing only non-content metadata may be retained per §4 for security and audit purposes.

---

## 13. International transfers / Internationella överföringar

To the extent personal data is transferred to a sub-processor outside the EU/EEA, the Processor ensures one of the following safeguards under Chapter V GDPR is in place:

- Adequacy decision (Art 45)
- Standard Contractual Clauses (Commission Implementing Decision (EU) 2021/914) plus a Transfer Impact Assessment (TIA) document
- Other appropriate safeguard under Art 46

Current transfers and their safeguards are listed in `subprocessors.md`.

---

## 14. Audits / Revision

The Controller (or an independent auditor mandated by the Controller, bound by confidentiality) may, with reasonable prior notice and no more than **once per twelve-month period** (unless a personal data breach has occurred), conduct an audit limited to verifying the Processor's compliance with this agreement.

Audits shall be conducted during business hours, with minimal disruption, and at the Controller's cost (each party bears its own costs unless the audit identifies material non-compliance attributable to the Processor).

The Processor may satisfy audit requests by providing current third-party attestations (e.g. ISO 27001 certificate or pentest report) when available.

---

## 15. Records of processing / Register över behandling

The Processor maintains records of processing on behalf of the Controller per Art 30(2) GDPR and provides them to the Controller or the supervisory authority on request.

---

## 16. Liability and indemnity / Ansvar och skadeslöshet

Liability is governed by the underlying subscription / service agreement between the parties, subject to the mandatory provisions of Art 82 GDPR.

The Controller shall indemnify the Processor for losses arising from the Controller's submission of personal data to the Service in violation of §4 (including PHI or special-category data), provided the Processor has not contributed to the breach by failing to implement the security measures in §7.

---

## 17. Governing law and jurisdiction / Tillämplig lag och jurisdiktion

This agreement is governed by Swedish law. Disputes shall be resolved by the Stockholm District Court (Stockholms tingsrätt) as court of first instance.

---

## 18. Order of precedence / Tolkningsföreträde

In case of conflict between this agreement and any underlying subscription/service agreement, this agreement prevails on matters of personal data processing.

---

## Signatures / Signaturer

**For the Controller / För Personuppgiftsansvarig**

Name: ____________________________  
Title: _____________________________  
Date: _____________________________  
Signature: ________________________

**For the Processor / För Personuppgiftsbiträde**

Name: ____________________________  
Title: _____________________________  
Date: _____________________________  
Signature: ________________________

---

## Annex A — Technical and Organisational Measures (TOM)

To be attached as a separate document, refreshed annually and on material architecture changes. See `/security` page on the production site for the current public summary.

## Annex B — Sub-processor list

See `subprocessors.md`. The list at the URL in §10 is authoritative; the version in this folder is a snapshot for record.
