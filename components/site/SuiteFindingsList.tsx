"use client";

import type { SuiteFinding } from "@/lib/suite/types";
import { SUITE_SEVERITY_COLOR, SUITE_SEVERITY_BG } from "@/lib/suite/severity";
import { useLang } from "@/lib/i18n/LanguageContext";

export function SuiteFindingsList({ findings }: { findings: SuiteFinding[] }) {
  const { t } = useLang();
  const f = t.suite.findings;
  if (findings.length === 0) {
    return <p style={{ fontSize: 13.5, color: "var(--muted)" }}>{f.none}</p>;
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {findings.map((finding, i) => (
        <div
          key={i}
          style={{
            background: "var(--card)",
            border: "1px solid var(--line)",
            borderRadius: 12,
            padding: "16px 20px",
          }}
        >
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}>
            <span
              className="mono"
              style={{
                fontSize: 11,
                padding: "4px 9px",
                borderRadius: 4,
                fontWeight: 600,
                background: SUITE_SEVERITY_BG[finding.severity],
                color: SUITE_SEVERITY_COLOR[finding.severity],
                letterSpacing: "0.04em",
              }}
            >
              {finding.severity.toUpperCase()}
            </span>
            <span style={{ fontSize: 15, fontWeight: 600 }}>{finding.title}</span>
          </div>
          <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.6, margin: "0 0 12px" }}>{finding.detail}</p>

          {finding.clauses?.length > 0 && (
            <div style={{ marginBottom: 10 }}>
              <div className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: "0.06em", marginBottom: 6 }}>
                {f.clauses}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {finding.clauses.map((c, j) => (
                  <div key={j} style={{ fontSize: 12.5, color: "var(--ink-2)" }}>
                    <strong>{c.framework}</strong> {c.citation}
                    {c.note ? ` — ${c.note}` : ""}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ fontSize: 13, color: "var(--ink)", marginBottom: finding.suggestedRemediation ? 6 : 0 }}>
            <strong>{f.action} </strong>
            {finding.requiredAction}
          </div>
          {finding.suggestedRemediation && (
            <div style={{ fontSize: 12.5, color: "var(--muted)" }}>
              <em>{f.remediation} {finding.suggestedRemediation}</em>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
