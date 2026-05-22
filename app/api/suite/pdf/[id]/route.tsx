import { NextResponse, type NextRequest } from "next/server";
import { getOutput } from "@/lib/suite/db";
import { recordToPdf } from "@/lib/suite/pdf-render";

export const runtime = "nodejs";
export const maxDuration = 120;

export async function GET(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const record = getOutput(id);
  if (!record) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  try {
    const buf = await recordToPdf(record);
    const filename = `${record.title.replace(/[^\w.-]+/g, "_")}.pdf`;
    return new NextResponse(new Uint8Array(buf), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
