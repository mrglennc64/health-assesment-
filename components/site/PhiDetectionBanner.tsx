"use client";

import { AlertOctagon } from "lucide-react";
import { detectPhi, type PhiMatch } from "@/lib/phi/detector";
import { useLang } from "@/lib/i18n/LanguageContext";

export function usePhiDetection(text: string): PhiMatch[] {
  return detectPhi(text);
}

export function PhiDetectionBanner({ matches }: { matches: PhiMatch[] }) {
  const { t } = useLang();
  const p = t.suite.phi;
  if (matches.length === 0) return null;

  const grouped = new Map<string, string[]>();
  for (const m of matches) {
    const label = p.labelByType[m.type];
    const arr = grouped.get(label) ?? [];
    arr.push(m.value);
    grouped.set(label, arr);
  }

  return (
    <div
      role="alert"
      style={{
        background: "var(--accent-soft)",
        border: "1px solid var(--accent)",
        borderLeft: "4px solid var(--accent)",
        borderRadius: 8,
        padding: "14px 16px",
        marginTop: 12,
        marginBottom: 12,
        fontSize: 13,
        color: "var(--ink-2)",
        lineHeight: 1.55,
      }}
    >
      <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
        <AlertOctagon size={16} color="var(--accent)" strokeWidth={2} style={{ marginTop: 1, flexShrink: 0 }} />
        <div>
          <strong style={{ color: "var(--accent)" }}>{p.detectedHeading}</strong>
          <div style={{ marginTop: 4 }}>{p.detectedBody}</div>
        </div>
      </div>
      <ul style={{ margin: "8px 0 0", paddingLeft: 32, listStyle: "disc" }}>
        {[...grouped.entries()].map(([label, values]) => (
          <li key={label} style={{ marginBottom: 4 }}>
            <span style={{ fontWeight: 600 }}>{label}:</span>{" "}
            <code
              style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: 12,
                background: "var(--paper-2)",
                padding: "1px 6px",
                borderRadius: 4,
              }}
            >
              {values.slice(0, 3).join(" · ")}
              {values.length > 3 ? ` … (+${values.length - 3})` : ""}
            </code>
          </li>
        ))}
      </ul>
    </div>
  );
}
