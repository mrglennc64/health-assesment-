import { NextResponse, type NextRequest } from "next/server";
import { runJsonPrompt } from "@/lib/suite/llm";
import { insertOutput, generateId } from "@/lib/suite/db";
import { extractTextFromUpload } from "@/lib/suite/extract";
import { checkAndIncrementQuota } from "@/lib/quotas";
import {
  gapAnalysisSystemPrompt,
  buildGapAnalysisUserContent,
  type GapAnalysisInput,
} from "@/lib/suite/prompts/gap-analysis";
import type { GapAnalysisOutput } from "@/lib/suite/types";

export const runtime = "nodejs";
// nginx in front limits body to 5MB.
export const maxDuration = 120;

export async function POST(req: NextRequest) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Expected multipart/form-data" }, { status: 400 });
  }

  const documentType = String(form.get("documentType") ?? "").trim();
  const framework = String(form.get("framework") ?? "auto-detect").trim();
  const context = String(form.get("context") ?? "").trim();
  const fileEntry = form.get("file");
  const pastedText = String(form.get("pastedText") ?? "").trim();

  if (!documentType) {
    return NextResponse.json({ error: "Missing documentType" }, { status: 400 });
  }

  let documentText = "";
  let sourceFileName: string | null = null;

  if (fileEntry && fileEntry instanceof File && fileEntry.size > 0) {
    if (fileEntry.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large (max 5 MB)" }, { status: 413 });
    }
    try {
      const extracted = await extractTextFromUpload(fileEntry);
      documentText = extracted.text;
      sourceFileName = fileEntry.name;
    } catch (err) {
      return NextResponse.json({ error: (err as Error).message }, { status: 400 });
    }
  } else if (pastedText) {
    documentText = pastedText;
  } else {
    return NextResponse.json({ error: "Provide either a file or pasted text" }, { status: 400 });
  }

  if (documentText.trim().length < 80) {
    return NextResponse.json({ error: "Document text is too short to analyse" }, { status: 400 });
  }

  const input: GapAnalysisInput = { documentType, framework, context };

  const quota = checkAndIncrementQuota(req, "doc.gap-analysis");
  if (!quota.ok) return quota.response;

  let parsed: GapAnalysisOutput;
  let result;
  try {
    const r = await runJsonPrompt<GapAnalysisOutput>({
      systemPrompt: gapAnalysisSystemPrompt,
      userContent: buildGapAnalysisUserContent({
        input,
        documentText,
        fileName: sourceFileName ?? undefined,
      }),
    });
    parsed = r.data;
    result = r.result;
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 502 });
  }

  const id = generateId("gap-analysis");
  const title = `Gap analysis — ${sourceFileName ?? documentType}`;
  const record = insertOutput({
    id,
    tool: "gap-analysis",
    title,
    inputJson: JSON.stringify(input),
    outputJson: JSON.stringify(parsed),
    sourceFileName,
    sourceFileText: documentText,
    model: result.model ?? null,
    provider: result.provider ?? null,
  });

  return NextResponse.json({ ok: true, id: record.id, record });
}
