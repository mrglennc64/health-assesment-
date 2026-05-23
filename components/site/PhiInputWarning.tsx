"use client";

import { AlertTriangle } from "lucide-react";

export function PhiInputWarning({
  acknowledged,
  onAcknowledgedChange,
}: {
  acknowledged?: boolean;
  onAcknowledgedChange?: (v: boolean) => void;
}) {
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
          <strong style={{ color: "var(--ink)" }}>Do not paste real patient data.</strong>{" "}
          Aegis is designed for de-identified content, sample text, policies, and synthetic
          examples. Do not submit protected health information (PHI) &mdash; names, dates of
          birth, MRNs, addresses, or any of the 18 HIPAA identifiers tied to a real person.
          Inputs are processed by third-party AI providers.
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
          <span>I confirm this input contains no protected health information.</span>
        </label>
      )}
    </div>
  );
}
