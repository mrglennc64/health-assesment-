# Healthcare Assessment Engine

HIPAA-aware audits for clinics, billing companies, and healthcare SaaS. The
app fans an input description out to six audit channels and aggregates the
findings into a single report:

- **Clinical documentation** — ICD-10, CPT/HCPCS, NPI, payer fields
- **HIPAA & security** — PHI exposure, HTTPS/CSP, cookies, trackers
- **Claims workflow** — payer config, clearinghouse, EDI 837
- **Patient communication** — reminders, denial notifications, consent
- **Clinical content** — outdated guidelines, hallucinated treatments, references
- **Synthetic browser check** — load times, JS errors, submission confirmation

## Architecture

Built on the same job/runner pattern as [`mrglennc64/war`](https://github.com/mrglennc64/war):

- `POST /api/runs` creates a `Run` with six pending jobs, kicks off
  `startRun()` in the background, returns `201` with `run.id` immediately.
- `runner.ts` calls each channel's `run<Channel>(text)` in parallel,
  updating job status `pending → running → done/failed` in an in-memory store.
- `GET /api/runs/[id]` returns the current state; the report page polls it
  every 1.5s until every job is `done` or `failed`.
- `lib/aiClient.ts` wraps the LLM provider. `gemini` is wired (REST to
  `gemini-2.0-flash`); `openai` and `groq` are stubs. With no
  `GOOGLE_AI_KEY`, the client returns shaped stub JSON so the UI works
  offline.
- `lib/rules/<channel>.ts` holds the prompt text for each channel; runners
  are thin wrappers around `runWithRules(prompt, text)`.

## Getting Started

```bash
cp .env.local.example .env.local
# add GOOGLE_AI_KEY=... to .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Without `GOOGLE_AI_KEY` set, the app runs against a stub model and shows
placeholder findings. With the key set, each channel calls Gemini and
returns real findings.

## Project layout

```
app/
  page.tsx              landing
  report/page.tsx       report UI (creates Run, polls)
  api/
    runs/route.ts       POST creates Run · GET lists
    runs/[id]/route.ts  GET single Run (poll target)
components/
  Layout · ChannelScore · Findings · RequiredActions
lib/
  aiClient.ts           gemini | openai | groq wrapper
  scoring.ts            classifyScore, overallScore
  jobs/
    types.ts            Run / Job / Finding / Channel
    runner.ts           startRun, runChannel state machine
    store.ts            in-memory Map<id, Run>
    run-with-rules.ts   shared LLM-call + JSON-parse helper
    <channel>.ts        six thin wrappers
  rules/
    types.ts            RuleFinding / RuleResult
    <channel>.ts        six prompt constants
```

## Out of scope (for v1)

- OpenAI / Groq providers (stubs only; throw `Error("not implemented")`)
- PDF export of the report
- PDF upload / OCR for source documents
- Persistence beyond the in-memory store (lost on restart)
- Auth, share links, multi-tenancy
- A real Puppeteer/Playwright synthetic check — for v1, "synthetic" runs
  the same LLM-text pattern as the other channels
