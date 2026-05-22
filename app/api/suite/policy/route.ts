import { NextResponse, type NextRequest } from "next/server";
import { runJsonPrompt } from "@/lib/suite/llm";
import { insertOutput, generateId } from "@/lib/suite/db";
import { policySystemPrompt, buildPolicyUserContent, type PolicyInput } from "@/lib/suite/prompts/policy";
import type { PolicyOutput } from "@/lib/suite/types";

export const maxDuration = 120;

export async function POST(req: NextRequest) {
  let body: Partial<PolicyInput>;
  try {
    body = (await req.json()) as Partial<PolicyInput>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const required: (keyof PolicyInput)[] = [
    "policyTitle",
    "policyType",
    "organisation",
    "organisationType",
    "owner",
    "framework",
    "effectiveDate",
    "requirements",
  ];
  for (const k of required) {
    if (!body[k] || typeof body[k] !== "string" || !(body[k] as string).trim()) {
      return NextResponse.json({ error: `Missing field: ${k}` }, { status: 400 });
    }
  }

  const input = body as PolicyInput;

  let parsed: PolicyOutput;
  let result;
  try {
    const r = await runJsonPrompt<PolicyOutput>({
      systemPrompt: policySystemPrompt,
      userContent: buildPolicyUserContent(input),
    });
    parsed = r.data;
    result = r.result;
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 502 });
  }

  const id = generateId("policy");
  const record = insertOutput({
    id,
    tool: "policy",
    title: parsed.policyTitle || input.policyTitle,
    inputJson: JSON.stringify(input),
    outputJson: JSON.stringify(parsed),
    sourceFileName: null,
    sourceFileText: null,
    model: result.model ?? null,
    provider: result.provider ?? null,
  });

  return NextResponse.json({ ok: true, id: record.id, record });
}
