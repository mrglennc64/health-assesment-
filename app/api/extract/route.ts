import { NextResponse, type NextRequest } from "next/server";
import { extractTextFromUpload } from "@/lib/suite/extract";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Expected multipart/form-data" }, { status: 400 });
  }

  const fileEntry = form.get("file");
  if (!fileEntry || !(fileEntry instanceof File) || fileEntry.size === 0) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  if (fileEntry.size > 5 * 1024 * 1024) {
    return NextResponse.json({ error: "File too large (max 5 MB)" }, { status: 413 });
  }

  try {
    const extracted = await extractTextFromUpload(fileEntry);
    return NextResponse.json({
      ok: true,
      text: extracted.text,
      fileName: fileEntry.name,
      contentType: extracted.contentType,
      charCount: extracted.charCount,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : String(err) },
      { status: 400 },
    );
  }
}
