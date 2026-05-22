import { NextResponse, type NextRequest } from "next/server";
import { runJsonPrompt } from "@/lib/suite/llm";
import { insertOutput, generateId } from "@/lib/suite/db";
import {
  standardsMappingSystemPrompt,
  buildStandardsMappingUserContent,
} from "@/lib/suite/prompts/standards-mapping";
import type { StandardsMappingOutput } from "@/lib/suite/types";

export async function POST(req: NextRequest) {
  let body: { query?: unknown };
  try {
    body = (await req.json()) as { query?: unknown };
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (typeof body.query !== "string" || !body.query.trim()) {
    return NextResponse.json({ error: "Missing query" }, { status: 400 });
  }
  const query = body.query.trim();

  let parsed: StandardsMappingOutput;
  let result;
  try {
    const r = await runJsonPrompt<StandardsMappingOutput>({
      systemPrompt: standardsMappingSystemPrompt,
      userContent: buildStandardsMappingUserContent(query),
    });
    parsed = r.data;
    result = r.result;
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 502 });
  }

  // Make sure the saved record carries the user's query even if the LLM dropped it.
  parsed.query = query;

  const id = generateId("standards-mapping");
  const record = insertOutput({
    id,
    tool: "standards-mapping",
    title: `Mapping — ${query.slice(0, 80)}${query.length > 80 ? "…" : ""}`,
    inputJson: JSON.stringify({ query }),
    outputJson: JSON.stringify(parsed),
    sourceFileName: null,
    sourceFileText: null,
    model: result.model ?? null,
    provider: result.provider ?? null,
  });

  return NextResponse.json({ ok: true, id: record.id, record });
}
