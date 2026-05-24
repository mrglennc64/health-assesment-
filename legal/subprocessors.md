# MediReady — Sub-processors

**Last updated**: [DATE — keep current]  
**Authoritative version**: this file at the URL in the DPA §10, or [TBD public URL]

This is the complete list of sub-processors that may process personal data on behalf of MediReady customers. Adding or replacing any entry triggers the 30-day notice to customers under our standard DPA §10.

## How to read this list

- **Role**: what the sub-processor does for us
- **Location**: where the sub-processor's processing happens (relevant for international-transfer assessment)
- **Personal data**: categories of personal data the sub-processor sees
- **Transfer mechanism**: legal basis for any transfer outside EU/EEA
- **Policy link**: sub-processor's DPA / privacy / security documentation

---

## AI inference providers

These process the **input content** customers submit to `/scan` and `/suite/*` for inference. None operates under a HIPAA Business Associate Agreement with MediReady.

### Mistral AI

| Field | Value |
|---|---|
| Role | LLM inference (primary) |
| Legal entity | Mistral AI SAS, France |
| Location of processing | EU (France) |
| Personal data | Whatever the customer submits in the input field |
| Transfer mechanism | Intra-EU (no transfer) |
| Policy link | https://mistral.ai/terms/ — Data Processing Addendum |
| Retention | Per provider's terms; we do not enable training on submissions |

### Google (Gemini)

| Field | Value |
|---|---|
| Role | LLM inference (fallback / secondary channel) |
| Legal entity | Google Ireland Ltd / Google LLC depending on endpoint |
| Location of processing | EU + US (regional endpoints; default us‑central1 unless pinned to EU) |
| Personal data | Whatever the customer submits in the input field |
| Transfer mechanism | EU SCCs (Module Two — Controller to Processor) where applicable; Google's data-processing terms |
| Policy link | https://cloud.google.com/terms/data-processing-addendum |
| Retention | Per provider's terms |

### OpenRouter

| Field | Value |
|---|---|
| Role | LLM inference (routing layer) |
| Legal entity | OpenRouter, Inc., United States |
| Location of processing | US (and downstream provider locations — OpenRouter forwards to one of several model providers) |
| Personal data | Whatever the customer submits in the input field |
| Transfer mechanism | EU SCCs (Module Three — Processor to Processor) + Transfer Impact Assessment |
| Policy link | https://openrouter.ai/privacy |
| Retention | Per provider's terms |

> **Customer guidance**: Customers must not submit special-category data (Art 9 GDPR) or PHI to the Service. The client-side detector blocks common identifier patterns; the rest is the customer's responsibility.

---

## Infrastructure

### Hostinger

| Field | Value |
|---|---|
| Role | VPS hosting (application server, SQLite database) |
| Legal entity | Hostinger International Ltd, Cyprus |
| Location of processing | EU (server region: confirm and pin in account settings) |
| Personal data | Everything stored or transmitted by the Service |
| Transfer mechanism | Intra-EU (if EU region pinned) |
| Policy link | https://www.hostinger.com/legal/data-processing-agreement |
| Retention | Application data per MediReady retention policy; provider-level backups per Hostinger's standard |

> **Planned change**: migration to a HIPAA-eligible (or equivalent) EU-located host before opening to general customers in regulated healthcare. Customers will be notified per DPA §10.

---

## Payments

### Revolut Business

| Field | Value |
|---|---|
| Role | Payment processing (one-off purchases) |
| Legal entity | Revolut Bank UAB, Lithuania (EU) |
| Location of processing | EU |
| Personal data | Payer name, email, billing address, payment method metadata. **MediReady does not store card data.** |
| Transfer mechanism | Intra-EU |
| Policy link | https://www.revolut.com/legal/privacy/ |
| Retention | Per Revolut's terms; payment record IDs retained in MediReady DB |

---

## Email / Transactional

### Resend

| Field | Value |
|---|---|
| Role | Transactional email (waitlist confirmations, account events) |
| Legal entity | Resend, Inc., United States |
| Location of processing | US (with EU regional endpoint available — confirm and pin) |
| Personal data | Recipient email, message content (transactional only — no marketing) |
| Transfer mechanism | EU SCCs + Transfer Impact Assessment |
| Policy link | https://resend.com/legal/dpa |
| Retention | Resend retains delivery logs per its terms |

---

## Change log

| Date | Change | Customer notification sent? |
|---|---|---|
| (initial) | Initial publication | n/a |

Going forward, every addition / replacement / removal is logged here with the date, the change, and a note on whether the 30-day customer notification was sent.

---

## Not on this list

- **Stripe / Adyen / PayPal**: not used.
- **Anthropic / OpenAI direct**: not used directly (OpenAI may be reached via OpenRouter — see above).
- **AWS / GCP / Azure direct**: not used directly (Google reached via Gemini API as listed).
- **Analytics, telemetry, third-party tag managers**: not used. The site sends no behavioural telemetry.
- **CDN / WAF (Cloudflare, etc.)**: confirm before launch and add here if added.

If a customer notices a service touching their data that is not on this list, contact `mrglenncarter@gmail.com` — that is a compliance bug we will fix immediately.
