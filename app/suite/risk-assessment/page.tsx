"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, ArrowLeft, FileText } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { PhiInputWarning } from "@/components/site/PhiInputWarning";
import { Button } from "@/components/ui/primitives";
import { SUITE_SEVERITY_COLOR, SUITE_SEVERITY_BG } from "@/lib/suite/severity";
import type { RiskAssessmentOutput, SuiteSeverity } from "@/lib/suite/types";

const ORG_TYPES = [
  "Clinic",
  "Billing Company",
  "Telehealth",
  "Healthcare SaaS",
  "Hospital / IDN",
  "Consultant",
];

type Result = {
  id: string;
  record: { model: string | null; provider: string | null };
  output: RiskAssessmentOutput;
};

export default function RiskAssessmentPage() {
  const [organisation, setOrganisation] = useState("");
  const [organisationType, setOrganisationType] = useState(ORG_TYPES[0]);
  const [scope, setScope] = useState("");
  const [ephiInventory, setEphiInventory] = useState("");
  const [priorIncidents, setPriorIncidents] = useState("");
  const [knownGaps, setKnownGaps] = useState("");
  const [phiAcknowledged, setPhiAcknowledged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  const run = async () => {
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/suite/risk-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ organisation, organisationType, scope, ephiInventory, priorIncidents, knownGaps }),
      });
      const data = (await res.json()) as { ok?: boolean; id?: string; record?: { outputJson: string; model: string | null; provider: string | null }; error?: string; message?: string };
      if (!res.ok || !data.ok || !data.record) {
        setError(data.message || data.error || `HTTP ${res.status}`);
        return;
      }
      setResult({
        id: data.id!,
        record: { model: data.record.model, provider: data.record.provider },
        output: JSON.parse(data.record.outputJson) as RiskAssessmentOutput,
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  };

  const canSubmit = !loading && organisation.trim() && scope.trim() && ephiInventory.trim() && phiAcknowledged;

  return (
    <>
      <MarketingNav />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 32px 32px" }}>
        <Link href="/suite" style={{ textDecoration: "none", fontSize: 13, color: "var(--muted)", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
          <ArrowLeft size={14} /> Suite
        </Link>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 12 }}>
          HIPAA RISK ASSESSMENT
        </div>
        <h1 className="serif" style={{ fontSize: 42, fontWeight: 500, lineHeight: 1.02, margin: "0 0 14px" }}>
          The annual document OCR will ask for.
        </h1>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.6, marginBottom: 32, maxWidth: 640 }}>
          Required under 45 CFR §164.308(a)(1)(ii)(A). NIST 800-30 methodology, full risk register with
          likelihood × impact, inherent vs residual risk, recommended controls, and clause citations.
        </p>

        {!result && <FormCard {...{ organisation, setOrganisation, organisationType, setOrganisationType, scope, setScope, ephiInventory, setEphiInventory, priorIncidents, setPriorIncidents, knownGaps, setKnownGaps, phiAcknowledged, setPhiAcknowledged, canSubmit: !!canSubmit, loading, onRun: run }} />}

        {error && (
          <div style={{ background: "var(--accent-soft)", color: "var(--accent)", padding: "14px 18px", borderRadius: 8, marginTop: 24, fontSize: 13.5 }}>
            {error}
          </div>
        )}

        {result && <ResultView id={result.id} record={result.record} output={result.output} onReset={() => setResult(null)} />}
      </div>
      <MarketingFooter />
    </>
  );
}

function FormCard(props: {
  organisation: string; setOrganisation: (s: string) => void;
  organisationType: string; setOrganisationType: (s: string) => void;
  scope: string; setScope: (s: string) => void;
  ephiInventory: string; setEphiInventory: (s: string) => void;
  priorIncidents: string; setPriorIncidents: (s: string) => void;
  knownGaps: string; setKnownGaps: (s: string) => void;
  phiAcknowledged: boolean; setPhiAcknowledged: (v: boolean) => void;
  canSubmit: boolean; loading: boolean; onRun: () => void;
}) {
  const labelStyle: React.CSSProperties = { fontSize: 12, fontWeight: 600, color: "var(--ink-2)", marginBottom: 6, display: "block" };
  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid var(--line-2)", fontSize: 13.5, fontFamily: "inherit", background: "var(--paper)", color: "var(--ink)", outline: "none",
  };
  const textareaStyle: React.CSSProperties = { ...inputStyle, minHeight: 90, lineHeight: 1.55 };

  return (
    <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 28 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div>
          <label style={labelStyle}>Organisation</label>
          <input style={inputStyle} value={props.organisation} onChange={(e) => props.setOrganisation(e.target.value)} placeholder="Acme Cardiology Group" />
        </div>
        <div>
          <label style={labelStyle}>Type</label>
          <select style={inputStyle} value={props.organisationType} onChange={(e) => props.setOrganisationType(e.target.value)}>
            {ORG_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>Scope</label>
        <textarea style={textareaStyle} value={props.scope} onChange={(e) => props.setScope(e.target.value)} placeholder="e.g., All electronic systems containing ePHI for our 4-clinic primary care group, Q2 2026 review." />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>ePHI inventory</label>
        <textarea style={{ ...textareaStyle, minHeight: 120 }} value={props.ephiInventory} onChange={(e) => props.setEphiInventory(e.target.value)} placeholder="e.g., Athena EHR (cloud), Kareo billing (cloud), Mailgun for appointment reminders, on-prem file server for backup, BAA with all vendors. Patient portal at portal.acme.example using Cognito auth." />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
        <div>
          <label style={labelStyle}>Prior incidents (optional)</label>
          <textarea style={textareaStyle} value={props.priorIncidents} onChange={(e) => props.setPriorIncidents(e.target.value)} placeholder="Stolen laptop 2024-09, no encryption, 4 patients notified." />
        </div>
        <div>
          <label style={labelStyle}>Known gaps (optional)</label>
          <textarea style={textareaStyle} value={props.knownGaps} onChange={(e) => props.setKnownGaps(e.target.value)} placeholder="No MFA on EHR admin accounts. No formal incident response plan." />
        </div>
      </div>
      <PhiInputWarning acknowledged={props.phiAcknowledged} onAcknowledgedChange={props.setPhiAcknowledged} />
      <Button variant="primary" icon={ArrowRight} onClick={props.onRun} disabled={!props.canSubmit}>
        {props.loading ? "Running risk analysis…" : "Run risk analysis"}
      </Button>
    </div>
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

function ResultView({ id, record, output, onReset }: { id: string; record: { model: string | null; provider: string | null }; output: RiskAssessmentOutput; onReset: () => void }) {
  const sectionH: React.CSSProperties = { fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--muted-2)", margin: "32px 0 12px" };
  return (
    <div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
        <a href={`/api/suite/pdf/${id}`} style={{ textDecoration: "none" }} download>
          <Button variant="primary" size="sm" icon={Download}>Download PDF</Button>
        </a>
        <a href={`/api/suite/docx/${id}`} style={{ textDecoration: "none" }} download>
          <Button variant="secondary" size="sm" icon={FileText}>Download Word</Button>
        </a>
        <Button variant="secondary" size="sm" onClick={onReset}>Run another</Button>
        <Link href="/suite/history" style={{ textDecoration: "none" }}>
          <Button variant="secondary" size="sm">View history</Button>
        </Link>
      </div>

      {record.model && (
        <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", marginBottom: 16, letterSpacing: "0.04em" }}>
          GENERATED BY {record.provider?.toUpperCase()} · {record.model}
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 16 }}>
        {(["critical", "high", "medium", "low"] as const).map((sev) => {
          const key = `${sev}Count` as keyof typeof output.summary;
          const count = (output.summary?.[key] as number | undefined) ?? 0;
          return (
            <div key={sev} style={{ background: SUITE_SEVERITY_BG[sev], borderRadius: 10, padding: "12px 14px" }}>
              <div className="mono" style={{ fontSize: 10, color: SUITE_SEVERITY_COLOR[sev], letterSpacing: "0.06em", fontWeight: 600 }}>{sev.toUpperCase()}</div>
              <div className="serif" style={{ fontSize: 28, fontWeight: 500, color: SUITE_SEVERITY_COLOR[sev] }}>{count}</div>
            </div>
          );
        })}
      </div>

      <h2 style={sectionH}>Scope</h2>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-2)" }}>{output.scope}</p>

      <h2 style={sectionH}>Methodology</h2>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-2)" }}>{output.methodology}</p>

      {output.assumptions?.length > 0 && (
        <>
          <h2 style={sectionH}>Assumptions</h2>
          <ul style={{ paddingLeft: 20 }}>{output.assumptions.map((a, i) => <li key={i} style={{ fontSize: 13.5, lineHeight: 1.6, marginBottom: 3, color: "var(--ink-2)" }}>{a}</li>)}</ul>
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
            {(output.rows ?? []).map((r, i) => (
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

      {output.summary?.topRecommendations?.length > 0 && (
        <>
          <h2 style={sectionH}>Top recommendations</h2>
          <ol style={{ paddingLeft: 20 }}>{output.summary.topRecommendations.map((r, i) => <li key={i} style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 4, color: "var(--ink-2)" }}>{r}</li>)}</ol>
        </>
      )}
    </div>
  );
}
