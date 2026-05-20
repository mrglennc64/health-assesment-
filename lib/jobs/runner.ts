import { saveRun, getRun } from "./store";
import { channels, type Channel, type Run, type JobResult } from "./types";
import { runClinical } from "./clinical";
import { runHipaa } from "./hipaa";
import { runClaims } from "./claims";
import { runCommunication } from "./communication";
import { runContent } from "./content";
import { runSynthetic } from "./synthetic";

const handlers: Record<Channel, (text: string) => Promise<JobResult>> = {
  clinical: runClinical,
  hipaa: runHipaa,
  claims: runClaims,
  communication: runCommunication,
  content: runContent,
  synthetic: runSynthetic,
};

export function startRun(run: Run) {
  for (const ch of channels) {
    void runChannel(run.id, ch, run.text);
  }
}

async function runChannel(runId: string, ch: Channel, text: string) {
  const begin = () => {
    const current = getRun(runId);
    if (!current) return;
    current.jobs[ch] = {
      ...current.jobs[ch],
      status: "running",
      startedAt: new Date().toISOString(),
    };
    saveRun(current);
  };
  const finish = (
    status: "done" | "failed",
    out: { result?: JobResult; error?: string }
  ) => {
    const current = getRun(runId);
    if (!current) return;
    const finishedAt = new Date().toISOString();
    const startedAt = current.jobs[ch].startedAt ?? finishedAt;
    current.jobs[ch] = {
      ...current.jobs[ch],
      status,
      finishedAt,
      durationMs: Date.parse(finishedAt) - Date.parse(startedAt),
      result: out.result,
      error: out.error,
    };
    saveRun(current);
  };

  begin();
  try {
    const result = await handlers[ch](text);
    finish("done", { result });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    finish("failed", { error: msg });
  }
}
