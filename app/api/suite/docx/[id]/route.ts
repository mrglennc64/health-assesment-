import { NextResponse, type NextRequest } from "next/server";
import { getOutput } from "@/lib/suite/db";
import { recordToDocx } from "@/lib/suite/docx-render";

export async function GET(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const record = getOutput(id);
  if (!record) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  try {
    const buf = await recordToDocx(record);
    const filename = `${record.title.replace(/[^\w.-]+/g, "_")}.docx`;
    return new NextResponse(new Uint8Array(buf), {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
