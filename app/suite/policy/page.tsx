"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, ArrowLeft, FileText } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { Button } from "@/components/ui/primitives";
import type { PolicyOutput } from "@/lib/suite/types";

const POLICY_TYPES = [
  "HIPAA Privacy Policy",
  "HIPAA Security Policy",
  "Access Control Policy",
  "Workforce Training Policy",
  "Incident Response Plan",
  "Sanction Policy",
  "Information System Activity Review",
  "Contingency Plan",
  "Device & Media Controls",
  "Other (specify in title)",
];

const FRAMEWORKS = [
  "HIPAA Security + Privacy Rules",
  "NIST 800-66 Rev 2",
  "NIST 800-53",
  "ISO 27001",
  "Custom",
];

const ORG_TYPES = ["Clinic", "Billing Company", "Telehealth", "Healthcare SaaS", "Hospital / IDN", "Consultant"];

type Result = {
  id: string;
  record: { model: string | null; provider: string | null };
  output: PolicyOutput;
};

function isoToday(): string {
  return new Date().toISOString().slice(0, 10);
}

export default function PolicyPage() {
  const [policyTitle, setPolicyTitle] = useState("");
  const [policyType, setPolicyType] = useState(POLICY_TYPES[0]);
  const [organisation, setOrganisation] = useState("");
  const [organisationType, setOrganisationType] = useState(ORG_TYPES[0]);
  const [owner, setOwner] = useState("Privacy Officer");
  const [framework, setFramework] = useState(FRAMEWORKS[0]);
  const [effectiveDate, setEffectiveDate] = useState(isoToday());
  const [requirements, setRequirements] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  const run = async () => {
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/suite/policy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ policyTitle, policyType, organisation, organisationType, owner, framework, effectiveDate, requirements }),
      });
      const data = (await res.json()) as { ok?: boolean; id?: string; record?: { outputJson: string; model: string | null; provider: string | null }; error?: string };
      if (!res.ok || !data.ok || !data.record) {
        setError(data.error || `HTTP ${res.status}`);
        return;
      }
      setResult({
        id: data.id!,
        record: { model: data.record.model, provider: data.record.provider },
        output: JSON.parse(data.record.outputJson) as PolicyOutput,
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  };

  const canSubmit = !loading && policyTitle.trim() && organisation.trim() && requirements.trim();

  return (
    <>
      <MarketingNav />
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "56px 32px 32px" }}>
        <Link href="/suite" style={{ textDecoration: "none", fontSize: 13, color: "var(--muted)", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
          <ArrowLeft size={14} /> Suite
        </Link>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 12 }}>
          POLICY / SOP GENERATOR
        </div>
        <h1 className="serif" style={{ fontSize: 42, fontWeight: 500, lineHeight: 1.02, margin: "0 0 14px" }}>
          Draft the policy. Edit, sign, file.
        </h1>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.6, marginBottom: 32, maxWidth: 640 }}>
          Complete policy or SOP with purpose, scope, roles, procedure, training, sanctions, records, review cycle, and clause references. Output is a structured Word + PDF you can edit and sign.
        </p>

        {!result && <FormCard {...{ policyTitle, setPolicyTitle, policyType, setPolicyType, organisation, setOrganisation, organisationType, setOrganisationType, owner, setOwner, framework, setFramework, effectiveDate, setEffectiveDate, requirements, setRequirements, canSubmit: !!canSubmit, loading, onRun: run }} />}

        {error && (
          <div style={{ background: "var(--accent-soft)", color: "var(--accent)", padding: "14px 18px", borderRadius: 8, marginTop: 24, fontSize: 13.5 }}>{error}</div>
        )}

        {result && <ResultView id={result.id} record={result.record} output={result.output} onReset={() => setResult(null)} />}
      </div>
      <MarketingFooter />
    </>
  );
}

function FormCard(props: {
  policyTitle: string; setPolicyTitle: (s: string) => void;
  policyType: string; setPolicyType: (s: string) => void;
  organisation: string; setOrganisation: (s: string) => void;
  organisationType: string; setOrganisationType: (s: string) => void;
  owner: string; setOwner: (s: string) => void;
  framework: string; setFramework: (s: string) => void;
  effectiveDate: string; setEffectiveDate: (s: string) => void;
  requirements: string; setRequirements: (s: string) => void;
  canSubmit: boolean; loading: boolean; onRun: () => void;
}) {
  const labelStyle: React.CSSProperties = { fontSize: 12, fontWeight: 600, color: "var(--ink-2)", marginBottom: 6, display: "block" };
  const inputStyle: React.CSSProperties = { width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid var(--line-2)", fontSize: 13.5, fontFamily: "inherit", background: "var(--paper)", color: "var(--ink)", outline: "none" };

  return (
    <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 28 }}>
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>Policy title</label>
        <input style={inputStyle} value={props.policyTitle} onChange={(e) => props.setPolicyTitle(e.target.value)} placeholder="HIPAA Security Risk Management Policy" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div>
          <label style={labelStyle}>Policy type</label>
          <select style={inputStyle} value={props.policyType} onChange={(e) => props.setPolicyType(e.target.value)}>
            {POLICY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>Primary framework</label>
          <select style={inputStyle} value={props.framework} onChange={(e) => props.setFramework(e.target.value)}>
            {FRAMEWORKS.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
      </div>
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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div>
          <label style={labelStyle}>Owner (role)</label>
          <input style={inputStyle} value={props.owner} onChange={(e) => props.setOwner(e.target.value)} placeholder="Privacy Officer" />
        </div>
        <div>
          <label style={labelStyle}>Effective date</label>
          <input type="date" style={inputStyle} value={props.effectiveDate} onChange={(e) => props.setEffectiveDate(e.target.value)} />
        </div>
      </div>
      <div style={{ marginBottom: 24 }}>
        <label style={labelStyle}>Specific requirements / scenarios to cover</label>
        <textarea
          style={{ ...inputStyle, minHeight: 130, lineHeight: 1.55 }}
          value={props.requirements}
          onChange={(e) => props.setRequirements(e.target.value)}
          placeholder="e.g., Covers all workforce members with access to ePHI. Must specify when annual training is delivered, what topics it covers (PHI, breach reporting, password hygiene), and how completion is documented. Sanction tiers for repeated violations."
        />
      </div>
      <Button variant="primary" icon={ArrowRight} onClick={props.onRun} disabled={!props.canSubmit}>
        {props.loading ? "Drafting policy…" : "Generate policy"}
      </Button>
    </div>
  );
}

function ResultView({ id, record, output, onReset }: { id: string; record: { model: string | null; provider: string | null }; output: PolicyOutput; onReset: () => void }) {
  const sectionH: React.CSSProperties = { fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--muted-2)", margin: "28px 0 10px" };
  return (
    <div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
        <a href={`/api/suite/pdf/${id}`} style={{ textDecoration: "none" }} download>
          <Button variant="primary" size="sm" icon={Download}>Download PDF</Button>
        </a>
        <a href={`/api/suite/docx/${id}`} style={{ textDecoration: "none" }} download>
          <Button variant="secondary" size="sm" icon={FileText}>Download Word</Button>
        </a>
        <Button variant="secondary" size="sm" onClick={onReset}>Draft another</Button>
        <Link href="/suite/history" style={{ textDecoration: "none" }}>
          <Button variant="secondary" size="sm">View history</Button>
        </Link>
      </div>

      {record.model && (
        <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", marginBottom: 16, letterSpacing: "0.04em" }}>
          GENERATED BY {record.provider?.toUpperCase()} · {record.model}
        </div>
      )}

      <div style={{ background: "var(--paper-2)", borderRadius: 10, padding: "16px 18px", marginBottom: 16, fontSize: 13.5, lineHeight: 1.7 }}>
        <div className="serif" style={{ fontSize: 22, fontWeight: 500, marginBottom: 6 }}>{output.policyTitle}</div>
        <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", letterSpacing: "0.04em", marginBottom: 10 }}>
          {output.policyId} · v{output.version} · effective {output.effectiveDate} · review {output.reviewCycle} · owner {output.owner}
        </div>
      </div>

      {(output.sections ?? []).map((s, i) => (
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

      {output.references?.length > 0 && (
        <>
          <h2 style={sectionH}>References</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {output.references.map((c, i) => (
              <div key={i} style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 10, padding: "10px 14px" }}>
                <div style={{ fontWeight: 600, fontSize: 13.5 }}>{c.framework} <span style={{ color: "var(--accent)" }}>{c.citation}</span></div>
                {c.note && <div style={{ fontSize: 12.5, color: "var(--ink-2)", marginTop: 2 }}>{c.note}</div>}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
