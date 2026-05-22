import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { Button } from "@/components/ui/primitives";
import { SuiteFindingsList } from "@/components/site/SuiteFindingsList";
import { HistoryDeleteButton } from "@/components/site/HistoryDeleteButton";
import { getOutput } from "@/lib/suite/db";
import type {
  AuditPlanOutput,
  GapAnalysisOutput,
  StandardsMappingOutput,
} from "@/lib/suite/types";

export const dynamic = "force-dynamic";

function fmtDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

const sectionH: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "var(--muted-2)",
  margin: "28px 0 12px",
};

export default async function HistoryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const record = getOutput(id);
  if (!record) notFound();

  return (
    <>
      <MarketingNav />
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "56px 32px 32px" }}>
        <Link href="/suite/history" style={{ textDecoration: "none", fontSize: 13, color: "var(--muted)", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
          <ArrowLeft size={14} /> History
        </Link>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 12 }}>
          {record.tool.replace("-", " ").toUpperCase()}
        </div>
        <h1 className="serif" style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.05, margin: "0 0 10px" }}>
          {record.title}
        </h1>
        <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", letterSpacing: "0.04em", marginBottom: 24 }}>
          {fmtDate(record.createdAt)}
          {record.model ? ` · ${record.provider?.toUpperCase()} · ${record.model}` : ""}
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
          <a href={`/api/suite/docx/${record.id}`} style={{ textDecoration: "none" }} download>
            <Button variant="primary" size="sm" icon={Download}>Download Word</Button>
          </a>
          <HistoryDeleteButton id={record.id} />
        </div>

        {record.tool === "audit-plan" && <AuditPlanBody record={record} />}
        {record.tool === "standards-mapping" && <StandardsMappingBody record={record} />}
        {record.tool === "gap-analysis" && <GapAnalysisBody record={record} />}
      </div>
      <MarketingFooter />
    </>
  );
}

function AuditPlanBody({ record }: { record: { inputJson: string; outputJson: string } }) {
  const input = JSON.parse(record.inputJson) as Record<string, string>;
  const output = JSON.parse(record.outputJson) as AuditPlanOutput;
  return (
    <>
      <h2 style={sectionH}>Engagement</h2>
      <div style={{ background: "var(--paper-2)", borderRadius: 10, padding: "14px 18px", fontSize: 13.5, lineHeight: 1.7 }}>
        <div><strong>Organisation:</strong> {input.organisation}</div>
        <div><strong>Type:</strong> {input.organisationType}</div>
        <div><strong>Scope:</strong> {input.scope}</div>
        <div><strong>Period:</strong> {input.period}</div>
        {input.auditor && <div><strong>Lead auditor:</strong> {input.auditor}</div>}
      </div>
      <h2 style={sectionH}>Scope</h2>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-2)" }}>{output.scope}</p>
      <h2 style={sectionH}>Objectives</h2>
      <ul style={{ paddingLeft: 20 }}>{output.objectives?.map((o, i) => <li key={i} style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 4 }}>{o}</li>)}</ul>
      <h2 style={sectionH}>Methodology</h2>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-2)" }}>{output.methodology}</p>
      <h2 style={sectionH}>Schedule</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {output.schedule?.map((s, i) => (
          <div key={i} style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 10, padding: "10px 14px" }}>
            <div style={{ fontWeight: 600, fontSize: 14 }}>{s.phase} — {s.days} day{s.days === 1 ? "" : "s"}</div>
            <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 2 }}>{s.description}</div>
          </div>
        ))}
      </div>
      <h2 style={sectionH}>Checklist</h2>
      {output.checklist?.map((c, i) => (
        <div key={i} style={{ marginBottom: 14 }}>
          <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{c.area}</div>
          <ul style={{ paddingLeft: 20 }}>{c.items?.map((it, j) => <li key={j} style={{ fontSize: 13.5, lineHeight: 1.55, marginBottom: 2, color: "var(--ink-2)" }}>{it}</li>)}</ul>
        </div>
      ))}
      <h2 style={sectionH}>Risk areas</h2>
      <SuiteFindingsList findings={output.riskAreas ?? []} />
    </>
  );
}

function StandardsMappingBody({ record }: { record: { outputJson: string } }) {
  const output = JSON.parse(record.outputJson) as StandardsMappingOutput;
  return (
    <>
      <h2 style={sectionH}>Query</h2>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-2)" }}>{output.query}</p>
      <h2 style={sectionH}>Clauses</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {output.clauses?.map((c, i) => (
          <div key={i} style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 10, padding: "12px 16px" }}>
            <div style={{ fontWeight: 600, fontSize: 14 }}>{c.framework} <span style={{ color: "var(--accent)" }}>{c.citation}</span></div>
            {c.note && <div style={{ fontSize: 13, color: "var(--ink-2)", lineHeight: 1.55, marginTop: 4 }}>{c.note}</div>}
          </div>
        ))}
      </div>
      <h2 style={sectionH}>Notes</h2>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-2)", whiteSpace: "pre-wrap" }}>{output.notes}</p>
    </>
  );
}

function GapAnalysisBody({ record }: { record: { inputJson: string; outputJson: string; sourceFileName: string | null } }) {
  const input = JSON.parse(record.inputJson) as { documentType: string; framework: string; context: string };
  const output = JSON.parse(record.outputJson) as GapAnalysisOutput;
  return (
    <>
      <h2 style={sectionH}>Input</h2>
      <div style={{ background: "var(--paper-2)", borderRadius: 10, padding: "14px 18px", fontSize: 13.5, lineHeight: 1.7 }}>
        <div><strong>Document type:</strong> {input.documentType}</div>
        <div><strong>Framework:</strong> {input.framework}</div>
        {input.context && <div><strong>Context:</strong> {input.context}</div>}
        {record.sourceFileName && <div><strong>Source file:</strong> {record.sourceFileName}</div>}
      </div>
      <h2 style={sectionH}>Document summary</h2>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-2)" }}>{output.documentSummary}</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div>
          <h2 style={sectionH}>Sections present</h2>
          <ul style={{ paddingLeft: 20 }}>{output.presentSections?.map((s, i) => <li key={i} style={{ fontSize: 13.5, lineHeight: 1.55, marginBottom: 4, color: "var(--ink-2)" }}>{s}</li>)}</ul>
        </div>
        <div>
          <h2 style={sectionH}>Missing or weak</h2>
          <ul style={{ paddingLeft: 20 }}>{output.missingSections?.map((s, i) => <li key={i} style={{ fontSize: 13.5, lineHeight: 1.55, marginBottom: 4, color: "var(--accent)" }}>{s}</li>)}</ul>
        </div>
      </div>
      <h2 style={sectionH}>Findings</h2>
      <SuiteFindingsList findings={output.findings ?? []} />
    </>
  );
}
