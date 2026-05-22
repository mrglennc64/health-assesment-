import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { Button } from "@/components/ui/primitives";
import { SuiteFindingsList } from "@/components/site/SuiteFindingsList";
import { HistoryDeleteButton } from "@/components/site/HistoryDeleteButton";
import { SUITE_SEVERITY_BG, SUITE_SEVERITY_COLOR } from "@/lib/suite/severity";
import { getOutput } from "@/lib/suite/db";
import type {
  AuditPlanOutput,
  GapAnalysisOutput,
  StandardsMappingOutput,
  RiskAssessmentOutput,
  PolicyOutput,
  SuiteSeverity,
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
          <a href={`/api/suite/pdf/${record.id}`} style={{ textDecoration: "none" }} download>
            <Button variant="primary" size="sm" icon={Download}>Download PDF</Button>
          </a>
          <a href={`/api/suite/docx/${record.id}`} style={{ textDecoration: "none" }} download>
            <Button variant="secondary" size="sm" icon={FileText}>Download Word</Button>
          </a>
          <HistoryDeleteButton id={record.id} />
        </div>

        {record.tool === "audit-plan" && <AuditPlanBody record={record} />}
        {record.tool === "standards-mapping" && <StandardsMappingBody record={record} />}
        {record.tool === "gap-analysis" && <GapAnalysisBody record={record} />}
        {record.tool === "risk-assessment" && <RiskAssessmentBody record={record} />}
        {record.tool === "policy" && <PolicyBody record={record} />}
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

function SevPill({ s }: { s: SuiteSeverity }) {
  return (
    <span
      className="mono"
      style={{
        fontSize: 10, padding: "3px 7px", borderRadius: 4, fontWeight: 600,
        background: SUITE_SEVERITY_BG[s], color: SUITE_SEVERITY_COLOR[s], letterSpacing: "0.04em",
      }}
    >
      {s.toUpperCase()}
    </span>
  );
}

function RiskAssessmentBody({ record }: { record: { outputJson: string } }) {
  const o = JSON.parse(record.outputJson) as RiskAssessmentOutput;
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginTop: 16, marginBottom: 8 }}>
        {(["critical", "high", "medium", "low"] as const).map((sev) => {
          const key = `${sev}Count` as keyof typeof o.summary;
          const count = (o.summary?.[key] as number | undefined) ?? 0;
          return (
            <div key={sev} style={{ background: SUITE_SEVERITY_BG[sev], borderRadius: 10, padding: "12px 14px" }}>
              <div className="mono" style={{ fontSize: 10, color: SUITE_SEVERITY_COLOR[sev], letterSpacing: "0.06em", fontWeight: 600 }}>{sev.toUpperCase()}</div>
              <div className="serif" style={{ fontSize: 26, fontWeight: 500, color: SUITE_SEVERITY_COLOR[sev] }}>{count}</div>
            </div>
          );
        })}
      </div>
      <h2 style={sectionH}>Scope</h2>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-2)" }}>{o.scope}</p>
      <h2 style={sectionH}>Methodology</h2>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-2)" }}>{o.methodology}</p>
      {o.assumptions?.length > 0 && (
        <>
          <h2 style={sectionH}>Assumptions</h2>
          <ul style={{ paddingLeft: 20 }}>{o.assumptions.map((a, i) => <li key={i} style={{ fontSize: 13.5, lineHeight: 1.6, marginBottom: 3, color: "var(--ink-2)" }}>{a}</li>)}</ul>
        </>
      )}
      <h2 style={sectionH}>Risk register</h2>
      <div style={{ overflowX: "auto", border: "1px solid var(--line)", borderRadius: 10 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr style={{ background: "var(--paper-2)" }}>
              {["Asset", "Threat", "Vulnerability", "Likeli.", "Impact", "Inherent", "Residual", "Recommended controls"].map((h) => (
                <th key={h} style={{ textAlign: "left", padding: "10px 12px", fontSize: 10.5, fontWeight: 700, color: "var(--muted-2)", letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "1px solid var(--line)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(o.rows ?? []).map((r, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--line)" }}>
                <td style={{ padding: "10px 12px", verticalAlign: "top", fontWeight: 600 }}>{r.asset}</td>
                <td style={{ padding: "10px 12px", verticalAlign: "top" }}>{r.threat}</td>
                <td style={{ padding: "10px 12px", verticalAlign: "top" }}>{r.vulnerability}</td>
                <td style={{ padding: "10px 12px", verticalAlign: "top" }}><SevPill s={r.likelihood} /></td>
                <td style={{ padding: "10px 12px", verticalAlign: "top" }}><SevPill s={r.impact} /></td>
                <td style={{ padding: "10px 12px", verticalAlign: "top" }}><SevPill s={r.inherentRisk} /></td>
                <td style={{ padding: "10px 12px", verticalAlign: "top" }}><SevPill s={r.residualRisk} /></td>
                <td style={{ padding: "10px 12px", verticalAlign: "top", fontSize: 12, lineHeight: 1.5 }}>
                  <ul style={{ paddingLeft: 16, margin: 0 }}>{(r.recommendedControls ?? []).map((c, j) => <li key={j} style={{ marginBottom: 2 }}>{c}</li>)}</ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {o.summary?.topRecommendations?.length > 0 && (
        <>
          <h2 style={sectionH}>Top recommendations</h2>
          <ol style={{ paddingLeft: 20 }}>{o.summary.topRecommendations.map((r, i) => <li key={i} style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 4, color: "var(--ink-2)" }}>{r}</li>)}</ol>
        </>
      )}
    </>
  );
}

function PolicyBody({ record }: { record: { outputJson: string } }) {
  const o = JSON.parse(record.outputJson) as PolicyOutput;
  return (
    <>
      <div style={{ background: "var(--paper-2)", borderRadius: 10, padding: "16px 18px", marginTop: 16, marginBottom: 16, fontSize: 13.5 }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", letterSpacing: "0.04em" }}>
          {o.policyId} · v{o.version} · effective {o.effectiveDate} · review {o.reviewCycle} · owner {o.owner}
        </div>
      </div>
      {(o.sections ?? []).map((s, i) => (
        <div key={i}>
          <h2 style={sectionH}>{s.heading}</h2>
          {s.body && <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-2)", whiteSpace: "pre-wrap" }}>{s.body}</p>}
          {s.bullets?.length && (
            <ul style={{ paddingLeft: 20 }}>
              {s.bullets.map((b, j) => <li key={j} style={{ fontSize: 13.5, lineHeight: 1.6, marginBottom: 3, color: "var(--ink-2)" }}>{b}</li>)}
            </ul>
          )}
        </div>
      ))}
      {o.references?.length > 0 && (
        <>
          <h2 style={sectionH}>References</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {o.references.map((c, i) => (
              <div key={i} style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 10, padding: "10px 14px" }}>
                <div style={{ fontWeight: 600, fontSize: 13.5 }}>{c.framework} <span style={{ color: "var(--accent)" }}>{c.citation}</span></div>
                {c.note && <div style={{ fontSize: 12.5, color: "var(--ink-2)", marginTop: 2 }}>{c.note}</div>}
              </div>
            ))}
          </div>
        </>
      )}
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
