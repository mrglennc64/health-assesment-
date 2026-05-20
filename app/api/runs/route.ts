import { NextResponse, type NextRequest } from "next/server";
import { channels, type Channel, type Job, type Run } from "@/lib/jobs/types";

function newRunId(): string {
  const ts = Date.now().toString(36);
  const rnd = Math.random().toString(36).slice(2, 6);
  return `${ts}${rnd}`;
}
import { runClinical } from "@/lib/jobs/clinical";
import { runHipaa } from "@/lib/jobs/hipaa";
import { runClaims } from "@/lib/jobs/claims";
import { runCommunication } from "@/lib/jobs/communication";
import { runContent } from "@/lib/jobs/content";
import { runSynthetic } from "@/lib/jobs/synthetic";

export const runtime = "nodejs";
export const maxDuration = 60;

const handlers: Record<Channel, (text: string) => Promise<Job["result"]>> = {
  clinical: runClinical,
  hipaa: runHipaa,
  claims: runClaims,
  communication: runCommunication,
  content: runContent,
  synthetic: runSynthetic,
};

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => ({}))) as {
    text?: string;
    customer?: string;
    plan?: Run["plan"];
  };

  const text = (body.text ?? "").trim();
  if (!text) {
    return NextResponse.json({ error: "text is required" }, { status: 400 });
  }

  const id = newRunId();
  const createdAt = new Date().toISOString();

  const settled = await Promise.allSettled(
    channels.map(async (ch) => {
      const startedAt = new Date().toISOString();
      try {
        const result = await handlers[ch](text);
        const finishedAt = new Date().toISOString();
        const job: Job = {
          channel: ch,
          status: "done",
          startedAt,
          finishedAt,
          durationMs: Date.parse(finishedAt) - Date.parse(startedAt),
          result,
        };
        return job;
      } catch (e) {
        const finishedAt = new Date().toISOString();
        const job: Job = {
          channel: ch,
          status: "failed",
          startedAt,
          finishedAt,
          durationMs: Date.parse(finishedAt) - Date.parse(startedAt),
          error: e instanceof Error ? e.message : String(e),
        };
        return job;
      }
    })
  );

  const jobs = Object.fromEntries(
    channels.map((ch, i) => {
      const r = settled[i];
      if (r.status === "fulfilled") return [ch, r.value];
      return [
        ch,
        {
          channel: ch,
          status: "failed",
          error: r.reason instanceof Error ? r.reason.message : String(r.reason),
        } as Job,
      ];
    })
  ) as Run["jobs"];

  const run: Run = {
    id,
    text,
    customer: (body.customer ?? "").trim() || undefined,
    plan: body.plan,
    createdAt,
    jobs,
  };

  return NextResponse.json({ run }, { status: 200 });
}
