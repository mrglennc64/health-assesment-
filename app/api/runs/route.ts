import { NextResponse, type NextRequest } from "next/server";
import { listRuns, newRunId, saveRun } from "@/lib/jobs/store";
import { channels, type Run } from "@/lib/jobs/types";
import { startRun } from "@/lib/jobs/runner";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({ runs: listRuns() });
}

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
  const run: Run = {
    id,
    text,
    customer: (body.customer ?? "").trim() || undefined,
    plan: body.plan,
    createdAt: new Date().toISOString(),
    jobs: Object.fromEntries(
      channels.map((ch) => [ch, { channel: ch, status: "pending" as const }])
    ) as Run["jobs"],
  };
  saveRun(run);
  startRun(run);

  return NextResponse.json({ run }, { status: 201 });
}
