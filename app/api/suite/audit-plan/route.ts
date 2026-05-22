import { NextResponse, type NextRequest } from "next/server";
import { runJsonPrompt } from "@/lib/suite/llm";
import { insertOutput, generateId } from "@/lib/suite/db";
import { checkAndIncrementQuota } from "@/lib/quotas";
import {
  auditPlanSystemPrompt,
  buildAuditPlanUserContent,
  type AuditPlanInput,
} from "@/lib/suite/prompts/audit-plan";
import type { AuditPlanOutput } from "@/lib/suite/types";

export async function POST(req: NextRequest) {
  let body: Partial<AuditPlanInput>;
  try {
    body = (await req.json()) as Partial<AuditPlanInput>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const required: (keyof AuditPlanInput)[] = ["organisation", "organisationType", "scope", "period", "systems"];
  for (const k of required) {
    if (!body[k] || typeof body[k] !== "string" || !(body[k] as string).trim()) {
      return NextResponse.json({ error: `Missing field: ${k}` }, { status: 400 });
    }
  }

  const input = body as AuditPlanInput;

  const quota = checkAndIncrementQuota(req, "doc.audit-plan");
  if (!quota.ok) return quota.response;

  let parsed: AuditPlanOutput;
  let result;
  try {
    const r = await runJsonPrompt<AuditPlanOutput>({
      systemPrompt: auditPlanSystemPrompt,
      userContent: buildAuditPlanUserContent(input),
    });
    parsed = r.data;
    result = r.result;
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 502 },
    );
  }

  const id = generateId("audit-plan");
  const record = insertOutput({
    id,
    tool: "audit-plan",
    title: `Audit Plan — ${input.organisation}`,
    inputJson: JSON.stringify(input),
    outputJson: JSON.stringify(parsed),
    sourceFileName: null,
    sourceFileText: null,
    model: result.model ?? null,
    provider: result.provider ?? null,
  });

  return NextResponse.json({ ok: true, id: record.id, record });
}
