import { NextResponse, type NextRequest } from "next/server";
import { runJsonPrompt } from "@/lib/suite/llm";
import { insertOutput, generateId } from "@/lib/suite/db";
import {
  riskAssessmentSystemPrompt,
  buildRiskAssessmentUserContent,
  type RiskAssessmentInput,
} from "@/lib/suite/prompts/risk-assessment";
import type { RiskAssessmentOutput } from "@/lib/suite/types";

export const maxDuration = 120;

export async function POST(req: NextRequest) {
  let body: Partial<RiskAssessmentInput>;
  try {
    body = (await req.json()) as Partial<RiskAssessmentInput>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const required: (keyof RiskAssessmentInput)[] = ["organisation", "organisationType", "scope", "ephiInventory"];
  for (const k of required) {
    if (!body[k] || typeof body[k] !== "string" || !(body[k] as string).trim()) {
      return NextResponse.json({ error: `Missing field: ${k}` }, { status: 400 });
    }
  }

  const input = body as RiskAssessmentInput;

  let parsed: RiskAssessmentOutput;
  let result;
  try {
    const r = await runJsonPrompt<RiskAssessmentOutput>({
      systemPrompt: riskAssessmentSystemPrompt,
      userContent: buildRiskAssessmentUserContent(input),
    });
    parsed = r.data;
    result = r.result;
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 502 });
  }

  const id = generateId("risk-assessment");
  const record = insertOutput({
    id,
    tool: "risk-assessment",
    title: `Risk Assessment — ${input.organisation}`,
    inputJson: JSON.stringify(input),
    outputJson: JSON.stringify(parsed),
    sourceFileName: null,
    sourceFileText: null,
    model: result.model ?? null,
    provider: result.provider ?? null,
  });

  return NextResponse.json({ ok: true, id: record.id, record });
}
