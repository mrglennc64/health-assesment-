"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, ArrowLeft, FileText } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { PhiInputWarning } from "@/components/site/PhiInputWarning";
import { Button } from "@/components/ui/primitives";
import type { StandardsMappingOutput } from "@/lib/suite/types";
import { useLang } from "@/lib/i18n/LanguageContext";

const EXAMPLES = [
  "Patient names appearing in URL query parameters on the booking flow.",
  "No risk analysis on file for the last 18 months.",
  "Third-party analytics tag loads before the consent banner accepts.",
  "Audit logs do not capture failed login attempts.",
];

type Result = {
  id: string;
  record: { model: string | null; provider: string | null };
  output: StandardsMappingOutput;
};

export default function StandardsMappingPage() {
  const { t } = useLang();
  const tool = t.suite.tools.standardsMapping;
  const c = t.suite.common;

  const [query, setQuery] = useState("");
  const [phiAcknowledged, setPhiAcknowledged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  const run = async () => {
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/suite/standards-mapping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = (await res.json()) as { ok?: boolean; id?: string; record?: { outputJson: string; model: string | null; provider: string | null }; error?: string; message?: string };
      if (!res.ok || !data.ok || !data.record) {
        setError(data.message || data.error || `HTTP ${res.status}`);
        return;
      }
      setResult({
        id: data.id!,
        record: { model: data.record.model, provider: data.record.provider },
        output: JSON.parse(data.record.outputJson) as StandardsMappingOutput,
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MarketingNav />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "56px 32px 32px" }}>
        <Link href="/suite" style={{ textDecoration: "none", fontSize: 13, color: "var(--muted)", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
          <ArrowLeft size={14} /> {c.backToSuite}
        </Link>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 12 }}>
          {tool.pageKicker}
        </div>
        <h1 className="serif" style={{ fontSize: 42, fontWeight: 500, lineHeight: 1.02, margin: "0 0 14px" }}>
          {tool.pageTitle}
        </h1>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.6, marginBottom: 32, maxWidth: 640 }}>
          {tool.pageBody}
        </p>

        {!result && (
          <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 28 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-2)", marginBottom: 8, display: "block" }}>
              {c.query}
            </label>
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Describe what you observed or what you need to map…"
              style={{
                width: "100%", minHeight: 130, padding: "12px 14px", borderRadius: 8,
                border: "1px solid var(--line-2)", fontSize: 14, fontFamily: "inherit",
                background: "var(--paper)", color: "var(--ink)", outline: "none", lineHeight: 1.55,
              }}
            />
            <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 12, color: "var(--muted-2)" }}>{c.tryLabel}</span>
              {EXAMPLES.map((ex) => (
                <button
                  key={ex}
                  onClick={() => setQuery(ex)}
                  style={{
                    fontSize: 12, padding: "4px 10px", border: "1px solid var(--line-2)",
                    borderRadius: 99, background: "transparent", color: "var(--ink-2)", cursor: "pointer",
                  }}
                >
                  {ex.slice(0, 56)}{ex.length > 56 ? "…" : ""}
                </button>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <PhiInputWarning acknowledged={phiAcknowledged} onAcknowledgedChange={setPhiAcknowledged} />
              <Button variant="primary" icon={ArrowRight} onClick={run} disabled={loading || !query.trim() || !phiAcknowledged}>
                {loading ? tool.loadingCta : tool.cta}
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
          <div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
              <a href={`/api/suite/pdf/${result.id}`} style={{ textDecoration: "none" }} download>
                <Button variant="primary" size="sm" icon={Download}>{c.downloadPdf}</Button>
              </a>
              <a href={`/api/suite/docx/${result.id}`} style={{ textDecoration: "none" }} download>
                <Button variant="secondary" size="sm" icon={FileText}>{c.downloadWord}</Button>
              </a>
              <Button variant="secondary" size="sm" onClick={() => setResult(null)}>{c.mapAnother}</Button>
              <Link href="/suite/history" style={{ textDecoration: "none" }}>
                <Button variant="secondary" size="sm">{c.viewHistory}</Button>
              </Link>
            </div>

            {result.record.model && (
              <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", marginBottom: 24, letterSpacing: "0.04em" }}>
                {c.generatedBy} {result.record.provider?.toUpperCase()} · {result.record.model}
              </div>
            )}

            <div style={{ background: "var(--paper-2)", borderRadius: 10, padding: "16px 18px", marginBottom: 24 }}>
              <div className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: "0.06em", marginBottom: 6 }}>{c.sections.query}</div>
              <div style={{ fontSize: 14, lineHeight: 1.55 }}>{result.output.query}</div>
            </div>

            <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--muted-2)", margin: "0 0 12px" }}>
              {c.sections.applicableClauses}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {result.output.clauses?.map((cl, i) => (
                <div key={i} style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 10, padding: "14px 18px" }}>
                  <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
                    {cl.framework} <span style={{ color: "var(--accent)" }}>{cl.citation}</span>
                  </div>
                  {cl.note && (
                    <div style={{ fontSize: 13, color: "var(--ink-2)", lineHeight: 1.55 }}>{cl.note}</div>
                  )}
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--muted-2)", margin: "0 0 12px" }}>{c.sections.notes}</h2>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-2)", whiteSpace: "pre-wrap" }}>{result.output.notes}</p>
          </div>
        )}
      </div>
      <MarketingFooter />
    </>
  );
}
