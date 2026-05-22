import mammoth from "mammoth";
import { PDFParse } from "pdf-parse";

export type ExtractResult = {
  text: string;
  contentType: "pdf" | "docx" | "text";
  charCount: number;
};

const MAX_OUTPUT_CHARS = 200_000; // keep prompts manageable

function trim(s: string): string {
  return s.length > MAX_OUTPUT_CHARS ? s.slice(0, MAX_OUTPUT_CHARS) : s;
}

export async function extractTextFromUpload(file: File): Promise<ExtractResult> {
  const name = (file.name || "").toLowerCase();
  const mime = file.type || "";
  const ab = await file.arrayBuffer();

  if (mime === "application/pdf" || name.endsWith(".pdf")) {
    const parser = new PDFParse({ data: new Uint8Array(ab) });
    const result = await parser.getText();
    const text = trim((result.text ?? "").trim());
    return { text, contentType: "pdf", charCount: text.length };
  }

  if (
    mime === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    name.endsWith(".docx")
  ) {
    const parsed = await mammoth.extractRawText({ buffer: Buffer.from(ab) });
    const text = trim((parsed.value ?? "").trim());
    return { text, contentType: "docx", charCount: text.length };
  }

  if (
    mime.startsWith("text/") ||
    name.endsWith(".txt") ||
    name.endsWith(".md")
  ) {
    const text = trim(Buffer.from(ab).toString("utf8").trim());
    return { text, contentType: "text", charCount: text.length };
  }

  throw new Error(
    `Unsupported file type: ${mime || "(no MIME)"}. Accepted: PDF, DOCX, TXT, MD.`,
  );
}
