# MediReady — Legal artifacts

This folder holds the drafted commercial/regulatory artifacts you give to:

- Swedish counsel for review before any external use, **and**
- Healthcare customers as part of contract negotiations.

| File | Purpose | Status |
|---|---|---|
| `dpa-template.md` | Data Processing Agreement / Personuppgiftsbiträdesavtal — Art 28 GDPR | **DRAFT — needs Swedish counsel review before signing with any customer** |
| `subprocessors.md` | Current list of sub-processors (Mistral, Gemini, OpenRouter, Revolut, Resend, Hostinger) | DRAFT — keep this file current; customers will want change notifications |
| `dpia-outline.md` | Data Protection Impact Assessment per Art 35 — outline + filled sections | DRAFT — finish and re-run any time scope changes (new sub-processor, new feature touching personal data) |

## Workflow before market entry

1. **Swedish counsel review** of `dpa-template.md` against the latest IMY guidance + Swedish supplementary Data Protection Act (lag 2018:218).
2. **Publish `subprocessors.md`** at a stable URL (e.g. `https://health.usesmpt.com/legal/subprocessors`) so customers can subscribe to changes.
3. **Complete `dpia-outline.md`** with actual data flows + risk assessment. Repeat any time architecture changes materially.
4. **NMI applicability opinion** from a Läkemedelsverket-experienced firm — store the written opinion in this folder once received.

All artifacts here are **drafts**. Do not send to a customer or counterparty without legal review.
