"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, ArrowLeft, FileText } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { PhiInputWarning } from "@/components/site/PhiInputWarning";
import { Button } from "@/components/ui/primitives";
import { SuiteFindingsList } from "@/components/site/SuiteFindingsList";
import type { AuditPlanOutput } from "@/lib/suite/types";
import { useLang } from "@/lib/i18n/LanguageContext";
import type { Dict } from "@/lib/i18n/dict";

type Result = {
  id: string;
  record: {
    id: string;
    title: string;
    outputJson: string;
    model: string | null;
    provider: string | null;
  };
};

const ORG_TYPES = [
  "Clinic",
  "Billing Company",
  "Telehealth",
  "Healthcare SaaS",
  "Hospital / IDN",
  "Consultant",
];
const SCOPES = ["HIPAA only", "Claims only", "HIPAA + Claims", "Full operations audit", "Custom"];

export default function AuditPlanPage() {
  const { t } = useLang();
  const tool = t.suite.tools.auditPlan;
  const c = t.suite.common;

  const [organisation, setOrganisation] = useState("");
  const [organisationType, setOrganisationType] = useState(ORG_TYPES[0]);
  const [scope, setScope] = useState(SCOPES[2]);
  const [period, setPeriod] = useState("");
  const [systems, setSystems] = useState("");
  const [auditor, setAuditor] = useState("");
  const [phiAcknowledged, setPhiAcknowledged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [parsed, setParsed] = useState<AuditPlanOutput | null>(null);
  const [error, setError] = useState("");

  const generate = async () => {
    setLoading(true);
    setError("");
    setResult(null);
    setParsed(null);
    try {
      const res = await fetch("/api/suite/audit-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ organisation, organisationType, scope, period, systems, auditor }),
      });
      const data = (await res.json()) as { ok?: boolean; id?: string; record?: Result["record"]; error?: string; message?: string };
      if (!res.ok || !data.ok || !data.record) {
        setError(data.message || data.error || `HTTP ${res.status}`);
        return;
      }
      setResult({ id: data.id!, record: data.record });
      setParsed(JSON.parse(data.record.outputJson) as AuditPlanOutput);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  };

  const canSubmit = organisation.trim() && period.trim() && systems.trim() && phiAcknowledged && !loading;

  return (
    <>
      <MarketingNav />
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "56px 32px 32px" }}>
        <Link href="/suite" style={{ textDecoration: "none", fontSize: 13, color: "var(--muted)", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
          <ArrowLeft size={14} /> {c.backToSuite}
        </Link>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 12 }}>
          {tool.pageKicker}
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.02, margin: "0 0 14px" }}>
          {tool.pageTitle}
        </h1>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.6, maxWidth: 640, marginBottom: 36 }}>
          {tool.pageBody}
        </p>

        {!result && (
          <FormCard
            c={c}
            organisation={organisation}
            setOrganisation={setOrganisation}
            organisationType={organisationType}
            setOrganisationType={setOrganisationType}
            scope={scope}
            setScope={setScope}
            period={period}
            setPeriod={setPeriod}
            systems={systems}
            setSystems={setSystems}
            auditor={auditor}
            setAuditor={setAuditor}
            phiAcknowledged={phiAcknowledged}
            setPhiAcknowledged={setPhiAcknowledged}
            canSubmit={!!canSubmit}
            loading={loading}
            onGenerate={generate}
            cta={tool.cta}
            loadingCta={tool.loadingCta}
          />
        )}

        {error && (
          <div style={{ background: "var(--accent-soft)", color: "var(--accent)", padding: "14px 18px", borderRadius: 8, marginTop: 24, fontSize: 13.5 }}>
            {error}
          </div>
        )}

        {result && parsed && (
          <ResultView c={c} id={result.id} record={result.record} output={parsed} onReset={() => { setResult(null); setParsed(null); }} />
        )}
      </div>
      <MarketingFooter />
    </>
  );
}

function FormCard(props: {
  c: Dict["suite"]["common"];
  organisation: string; setOrganisation: (s: string) => void;
  organisationType: string; setOrganisationType: (s: string) => void;
  scope: string; setScope: (s: string) => void;
  period: string; setPeriod: (s: string) => void;
  systems: string; setSystems: (s: string) => void;
  auditor: string; setAuditor: (s: string) => void;
  phiAcknowledged: boolean; setPhiAcknowledged: (v: boolean) => void;
  canSubmit: boolean; loading: boolean; onGenerate: () => void;
  cta: string; loadingCta: string;
}) {
  const labelStyle: React.CSSProperties = { fontSize: 12, fontWeight: 600, color: "var(--ink-2)", marginBottom: 6, display: "block" };
  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid var(--line-2)", fontSize: 13.5, fontFamily: "inherit", background: "var(--paper)", color: "var(--ink)", outline: "none",
  };
  const c = props.c;

  return (
    <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 28 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div>
          <label style={labelStyle}>{c.organisation}</label>
          <input style={inputStyle} value={props.organisation} onChange={(e) => props.setOrganisation(e.target.value)} placeholder="Acme Cardiology Group" />
        </div>
        <div>
          <label style={labelStyle}>{c.type}</label>
          <select style={inputStyle} value={props.organisationType} onChange={(e) => props.setOrganisationType(e.target.value)}>
            {ORG_TYPES.map((v) => <option key={v} value={v}>{c.orgTypeLabels[v] ?? v}</option>)}
          </select>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div>
          <label style={labelStyle}>{c.scope}</label>
          <select style={inputStyle} value={props.scope} onChange={(e) => props.setScope(e.target.value)}>
            {SCOPES.map((v) => <option key={v} value={v}>{c.scopeLabels[v] ?? v}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>{c.periodCovered}</label>
          <input style={inputStyle} value={props.period} onChange={(e) => props.setPeriod(e.target.value)} placeholder="Q2 2026" />
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>{c.systemsInScope}</label>
        <textarea
          style={{ ...inputStyle, minHeight: 110, lineHeight: 1.55 }}
          value={props.systems}
          onChange={(e) => props.setSystems(e.target.value)}
          placeholder="e.g., EHR (Athena), billing platform (Kareo), patient portal, claim clearinghouse (Availity), email/SMS reminders, third-party analytics."
        />
      </div>
      <div style={{ marginBottom: 24 }}>
        <label style={labelStyle}>{c.leadAuditor}</label>
        <input style={inputStyle} value={props.auditor} onChange={(e) => props.setAuditor(e.target.value)} placeholder="J. Carter, CHC" />
      </div>
      <PhiInputWarning acknowledged={props.phiAcknowledged} onAcknowledgedChange={props.setPhiAcknowledged} />
      <Button variant="primary" icon={ArrowRight} onClick={props.onGenerate} disabled={!props.canSubmit}>
        {props.loading ? props.loadingCta : props.cta}
      </Button>
    </div>
  );
}

function ResultView({ c, id, record, output, onReset }: { c: Dict["suite"]["common"]; id: string; record: { model: string | null; provider: string | null }; output: AuditPlanOutput; onReset: () => void }) {
  const sectionH: React.CSSProperties = { fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--muted-2)", margin: "32px 0 12px" };
  return (
    <div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
        <a href={`/api/suite/pdf/${id}`} style={{ textDecoration: "none" }} download>
          <Button variant="primary" size="sm" icon={Download}>{c.downloadPdf}</Button>
        </a>
        <a href={`/api/suite/docx/${id}`} style={{ textDecoration: "none" }} download>
          <Button variant="secondary" size="sm" icon={FileText}>{c.downloadWord}</Button>
        </a>
        <Button variant="secondary" size="sm" onClick={onReset}>{c.generateAnother}</Button>
        <Link href="/suite/history" style={{ textDecoration: "none" }}>
          <Button variant="secondary" size="sm">{c.viewHistory}</Button>
        </Link>
      </div>

      {record.model && (
        <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", marginBottom: 24, letterSpacing: "0.04em" }}>
          {c.generatedBy} {record.provider?.toUpperCase()} · {record.model}
        </div>
      )}

      <h2 style={sectionH}>{c.sections.scope}</h2>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-2)" }}>{output.scope}</p>

      <h2 style={sectionH}>{c.sections.objectives}</h2>
      <ul style={{ paddingLeft: 20 }}>
        {output.objectives?.map((o, i) => (
          <li key={i} style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-2)", marginBottom: 4 }}>{o}</li>
        ))}
      </ul>

      <h2 style={sectionH}>{c.sections.methodology}</h2>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-2)" }}>{output.methodology}</p>

      <h2 style={sectionH}>{c.sections.schedule}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {output.schedule?.map((s, i) => (
          <div key={i} style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 10, padding: "12px 16px" }}>
            <div style={{ fontWeight: 600, fontSize: 14 }}>{s.phase} — {s.days} day{s.days === 1 ? "" : "s"}</div>
            <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>{s.description}</div>
          </div>
        ))}
      </div>

      <h2 style={sectionH}>{c.sections.checklist}</h2>
      {output.checklist?.map((ck, i) => (
        <div key={i} style={{ marginBottom: 18 }}>
          <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6 }}>{ck.area}</div>
          <ul style={{ paddingLeft: 20 }}>
            {ck.items?.map((it, j) => (
              <li key={j} style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55, marginBottom: 2 }}>{it}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2 style={sectionH}>{c.sections.riskAreas}</h2>
      <SuiteFindingsList findings={output.riskAreas ?? []} />
    </div>
  );
}
