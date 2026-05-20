import { type NextRequest } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { HealthReport } from "@/lib/pdf/HealthReport";
import type { Run } from "@/lib/jobs/types";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => ({}))) as { run?: Run };
  if (!body.run || !body.run.id) {
    return new Response(
      JSON.stringify({ error: "run is required in request body" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const buffer = await renderToBuffer(<HealthReport run={body.run} />);
  const bytes = new Uint8Array(buffer);

  return new Response(bytes, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="health-report-${body.run.id}.pdf"`,
      "Cache-Control": "no-store",
    },
  });
}
