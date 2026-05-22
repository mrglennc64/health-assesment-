import { NextResponse, type NextRequest } from "next/server";
import { insertOutput, listOutputs, generateId } from "@/lib/suite/db";
import { buildSeedRecords } from "@/lib/suite/seed-data";

export async function POST(_req: NextRequest) {
  // Refuse to seed if any records already exist — keeps demo data from
  // duplicating into a populated database.
  const existing = listOutputs({ limit: 1 });
  if (existing.length > 0) {
    return NextResponse.json(
      { error: "History already has records. Delete them before seeding demo data." },
      { status: 409 },
    );
  }

  const records = buildSeedRecords();
  const inserted: string[] = [];
  for (const r of records) {
    const id = generateId(r.tool);
    insertOutput({
      id,
      tool: r.tool,
      title: r.title,
      inputJson: r.inputJson,
      outputJson: r.outputJson,
      sourceFileName: r.sourceFileName,
      sourceFileText: r.sourceFileText,
      model: r.model,
      provider: r.provider,
    });
    inserted.push(id);
  }

  return NextResponse.json({ ok: true, inserted: inserted.length, ids: inserted });
}
