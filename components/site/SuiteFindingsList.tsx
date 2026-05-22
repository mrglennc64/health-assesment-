"use client";

import type { SuiteFinding } from "@/lib/suite/types";
import { SUITE_SEVERITY_COLOR, SUITE_SEVERITY_BG } from "@/lib/suite/severity";

export function SuiteFindingsList({ findings }: { findings: SuiteFinding[] }) {
  if (findings.length === 0) {
    return <p style={{ fontSize: 13.5, color: "var(--muted)" }}>No findings.</p>;
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {findings.map((f, i) => (
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
                background: SUITE_SEVERITY_BG[f.severity],
                color: SUITE_SEVERITY_COLOR[f.severity],
                letterSpacing: "0.04em",
              }}
            >
              {f.severity.toUpperCase()}
            </span>
            <span style={{ fontSize: 15, fontWeight: 600 }}>{f.title}</span>
          </div>
          <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.6, margin: "0 0 12px" }}>{f.detail}</p>

          {f.clauses?.length > 0 && (
            <div style={{ marginBottom: 10 }}>
              <div className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: "0.06em", marginBottom: 6 }}>
                CLAUSES
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {f.clauses.map((c, j) => (
                  <div key={j} style={{ fontSize: 12.5, color: "var(--ink-2)" }}>
                    <strong>{c.framework}</strong> {c.citation}
                    {c.note ? ` — ${c.note}` : ""}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ fontSize: 13, color: "var(--ink)", marginBottom: f.suggestedRemediation ? 6 : 0 }}>
            <strong>Action: </strong>
            {f.requiredAction}
          </div>
          {f.suggestedRemediation && (
            <div style={{ fontSize: 12.5, color: "var(--muted)" }}>
              <em>Remediation: {f.suggestedRemediation}</em>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
