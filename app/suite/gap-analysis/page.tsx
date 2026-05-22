"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download, Upload, FileText } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { Button } from "@/components/ui/primitives";
import { SuiteFindingsList } from "@/components/site/SuiteFindingsList";
import type { GapAnalysisOutput } from "@/lib/suite/types";

const DOCUMENT_TYPES = [
  "HIPAA SOP",
  "Privacy Policy",
  "Notice of Privacy Practices",
  "Business Associate Agreement (BAA)",
  "Incident Response Plan",
  "Risk Analysis",
  "Workforce Training Policy",
  "Access Control Policy",
  "Other",
];

const FRAMEWORKS = [
  "auto-detect",
  "HIPAA Security + Privacy Rules",
  "NIST 800-66 Rev 2",
  "NIST 800-53",
  "ISO 27001",
  "MDCG 2020-13",
];

type Result = {
  id: string;
  record: { model: string | null; provider: string | null; sourceFileName: string | null };
  output: GapAnalysisOutput;
};

export default function GapAnalysisPage() {
  const [documentType, setDocumentType] = useState(DOCUMENT_TYPES[0]);
  const [framework, setFramework] = useState(FRAMEWORKS[0]);
  const [context, setContext] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [pastedText, setPastedText] = useState("");
  const [tab, setTab] = useState<"upload" | "paste">("upload");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  const run = async () => {
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const fd = new FormData();
      fd.append("documentType", documentType);
      fd.append("framework", framework);
      fd.append("context", context);
      if (tab === "upload" && file) fd.append("file", file);
      if (tab === "paste") fd.append("pastedText", pastedText);

      const res = await fetch("/api/suite/gap-analysis", { method: "POST", body: fd });
      const data = (await res.json()) as { ok?: boolean; id?: string; record?: { outputJson: string; model: string | null; provider: string | null; sourceFileName: string | null }; error?: string };
      if (!res.ok || !data.ok || !data.record) {
        setError(data.error || `HTTP ${res.status}`);
        return;
      }
      setResult({
        id: data.id!,
        record: { model: data.record.model, provider: data.record.provider, sourceFileName: data.record.sourceFileName },
        output: JSON.parse(data.record.outputJson) as GapAnalysisOutput,
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  };

  const canSubmit = !loading && (
    (tab === "upload" && file) ||
    (tab === "paste" && pastedText.trim().length >= 80)
  );

  return (
    <>
      <MarketingNav />
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "56px 32px 32px" }}>
        <Link href="/suite" style={{ textDecoration: "none", fontSize: 13, color: "var(--muted)", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
          <ArrowLeft size={14} /> Suite
        </Link>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 12 }}>
          DOCUMENT GAP ANALYSIS
        </div>
        <h1 className="serif" style={{ fontSize: 42, fontWeight: 500, lineHeight: 1.02, margin: "0 0 14px" }}>
          Upload a doc. See what&apos;s missing.
        </h1>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.6, marginBottom: 32, maxWidth: 640 }}>
          Accepts PDF, DOCX, TXT, or pasted text (up to 5 MB). AI flags missing sections, weak language, and missing clause references against your chosen framework.
        </p>

        {!result && (
          <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 28 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-2)", marginBottom: 6, display: "block" }}>Document type</label>
                <select
                  value={documentType}
                  onChange={(e) => setDocumentType(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid var(--line-2)", fontSize: 13.5, background: "var(--paper)", color: "var(--ink)", outline: "none" }}
                >
                  {DOCUMENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-2)", marginBottom: 6, display: "block" }}>Framework</label>
                <select
                  value={framework}
                  onChange={(e) => setFramework(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid var(--line-2)", fontSize: 13.5, background: "var(--paper)", color: "var(--ink)", outline: "none" }}
                >
                  {FRAMEWORKS.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-2)", marginBottom: 6, display: "block" }}>Context (optional)</label>
              <input
                value={context}
                onChange={(e) => setContext(e.target.value)}
                placeholder="e.g., 12-provider primary care clinic, EHR is Athena, Q2 2026 review"
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid var(--line-2)", fontSize: 13.5, background: "var(--paper)", color: "var(--ink)", outline: "none", fontFamily: "inherit" }}
              />
            </div>

            <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
              <TabButton active={tab === "upload"} onClick={() => setTab("upload")}>Upload file</TabButton>
              <TabButton active={tab === "paste"} onClick={() => setTab("paste")}>Paste text</TabButton>
            </div>

            {tab === "upload" ? (
              <UploadInput file={file} onFile={setFile} />
            ) : (
              <textarea
                value={pastedText}
                onChange={(e) => setPastedText(e.target.value)}
                placeholder="Paste the document text here…"
                style={{ width: "100%", minHeight: 200, padding: "12px 14px", borderRadius: 8, border: "1px solid var(--line-2)", fontSize: 13.5, fontFamily: "inherit", background: "var(--paper)", color: "var(--ink)", outline: "none", lineHeight: 1.55 }}
              />
            )}

            <div style={{ marginTop: 20 }}>
              <Button variant="primary" icon={ArrowRight} onClick={run} disabled={!canSubmit}>
                {loading ? "Analysing…" : "Run gap analysis"}
              </Button>
            </div>
          </div>
        )}

        {error && (
          <div style={{ background: "var(--accent-soft)", color: "var(--accent)", padding: "14px 18px", borderRadius: 8, marginTop: 24, fontSize: 13.5 }}>
            {error}
          </div>
        )}

        {result && (
          <ResultView result={result} onReset={() => setResult(null)} />
        )}
      </div>
      <MarketingFooter />
    </>
  );
}

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontSize: 13, padding: "8px 16px", borderRadius: 8,
        border: "1px solid " + (active ? "var(--ink)" : "var(--line-2)"),
        background: active ? "var(--paper-2)" : "transparent",
        color: "var(--ink)",
        cursor: "pointer", fontWeight: active ? 600 : 500,
      }}
    >
      {children}
    </button>
  );
}

function UploadInput({ file, onFile }: { file: File | null; onFile: (f: File | null) => void }) {
  return (
    <label
      style={{
        display: "flex", alignItems: "center", gap: 14,
        padding: "20px 18px", border: "1px dashed var(--line-2)", borderRadius: 10,
        background: "var(--paper)", cursor: "pointer",
      }}
    >
      <input
        type="file"
        accept=".pdf,.docx,.txt,.md,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain,text/markdown"
        onChange={(e) => onFile(e.target.files?.[0] ?? null)}
        style={{ display: "none" }}
      />
      <Upload size={20} color="var(--accent)" strokeWidth={1.75} />
      <div style={{ flex: 1 }}>
        {file ? (
          <>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{file.name}</div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>{(file.size / 1024).toFixed(1)} KB · click to replace</div>
          </>
        ) : (
          <>
            <div style={{ fontSize: 14, fontWeight: 600 }}>Click to select a file</div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>PDF, DOCX, TXT, MD · up to 5 MB</div>
          </>
        )}
      </div>
    </label>
  );
}

function ResultView({ result, onReset }: { result: Result; onReset: () => void }) {
  const sectionH: React.CSSProperties = { fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--muted-2)", margin: "32px 0 12px" };
  return (
    <div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
        <a href={`/api/suite/pdf/${result.id}`} style={{ textDecoration: "none" }} download>
          <Button variant="primary" size="sm" icon={Download}>Download PDF</Button>
        </a>
        <a href={`/api/suite/docx/${result.id}`} style={{ textDecoration: "none" }} download>
          <Button variant="secondary" size="sm" icon={FileText}>Download Word</Button>
        </a>
        <Button variant="secondary" size="sm" onClick={onReset}>Analyse another</Button>
        <Link href="/suite/history" style={{ textDecoration: "none" }}>
          <Button variant="secondary" size="sm">View history</Button>
        </Link>
      </div>

      {result.record.model && (
        <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", marginBottom: 16, letterSpacing: "0.04em" }}>
          GENERATED BY {result.record.provider?.toUpperCase()} · {result.record.model}
          {result.record.sourceFileName ? ` · source: ${result.record.sourceFileName}` : ""}
        </div>
      )}

      <h2 style={sectionH}>Document summary</h2>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-2)" }}>{result.output.documentSummary}</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div>
          <h2 style={sectionH}>Sections present</h2>
          <ul style={{ paddingLeft: 20 }}>
            {result.output.presentSections?.map((s, i) => (
              <li key={i} style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.6, marginBottom: 4 }}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 style={sectionH}>Missing or weak</h2>
          <ul style={{ paddingLeft: 20 }}>
            {result.output.missingSections?.map((s, i) => (
              <li key={i} style={{ fontSize: 13.5, color: "var(--accent)", lineHeight: 1.6, marginBottom: 4 }}>{s}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2 style={sectionH}>Findings</h2>
      <SuiteFindingsList findings={result.output.findings ?? []} />
    </div>
  );
}
