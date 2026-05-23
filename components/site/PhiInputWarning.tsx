"use client";

import { AlertTriangle } from "lucide-react";
import { useLang } from "@/lib/i18n/LanguageContext";

export function PhiInputWarning({
  acknowledged,
  onAcknowledgedChange,
}: {
  acknowledged?: boolean;
  onAcknowledgedChange?: (v: boolean) => void;
}) {
  const { t } = useLang();
  const p = t.suite.phi;
  const showCheckbox = typeof onAcknowledgedChange === "function";
  return (
    <div
      style={{
        background: "var(--paper-2)",
        border: "1px solid var(--line)",
        borderLeft: "3px solid var(--accent)",
        borderRadius: 8,
        padding: "12px 14px",
        marginBottom: 16,
        fontSize: 12.5,
        color: "var(--ink-2)",
        lineHeight: 1.55,
      }}
    >
      <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
        <AlertTriangle
          size={14}
          color="var(--accent)"
          strokeWidth={2}
          style={{ marginTop: 2, flexShrink: 0 }}
        />
        <div>
          <strong style={{ color: "var(--ink)" }}>{p.heading}</strong>{" "}
          {p.body}
        </div>
      </div>
      {showCheckbox && (
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginTop: 10,
            paddingLeft: 22,
            cursor: "pointer",
            fontSize: 12.5,
          }}
        >
          <input
            type="checkbox"
            checked={!!acknowledged}
            onChange={(e) => onAcknowledgedChange!(e.target.checked)}
            style={{ cursor: "pointer" }}
          />
          <span>{p.confirm}</span>
        </label>
      )}
    </div>
  );
}
