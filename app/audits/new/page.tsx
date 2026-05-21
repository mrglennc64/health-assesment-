"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import { Button } from "@/components/ui/primitives";
import { CHANNELS } from "@/components/site/data";

type AuditType = "claims" | "full" | "exceptions";

const AUDIT_TYPES: {
  id: AuditType;
  label: string;
  desc: string;
  price: string;
  channels: string[];
}[] = [
  {
    id: "claims",
    label: "Claims Audit",
    desc: "Single channel · fast. Taxonomy, NPI, payer ID, clearinghouse, EDI 837.",
    price: "$49",
    channels: ["claims"],
  },
  {
    id: "full",
    label: "Full Compliance Audit",
    desc: "All six channels. HIPAA + documentation + claims + content + communication + synthetic.",
    price: "$149",
    channels: CHANNELS.map((c) => c.id),
  },
  {
    id: "exceptions",
    label: "Exceptions & Denial Audit",
    desc: "Deep dive into denials, missing fields, payer-specific rules.",
    price: "$199",
    channels: CHANNELS.map((c) => c.id),
  },
];

export default function NewAuditPage() {
  const router = useRouter();
  const [target, setTarget] = useState("");
  const [auditType, setAuditType] = useState<AuditType>("full");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = () => {
    setSubmitting(true);
    // For now, route to /report which holds the input field + real engine call.
    // When auth/persistence lands, this should POST a draft audit record first.
    router.push(`/report${target ? `?target=${encodeURIComponent(target)}` : ""}`);
  };

  return (
    <AppShell>
      <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 8 }}>
        NEW AUDIT
      </div>
      <h1 className="serif" style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.05, margin: "0 0 6px" }}>
        Start a fresh audit.
      </h1>
      <p style={{ fontSize: 14.5, color: "var(--muted)", margin: "0 0 32px", maxWidth: 580 }}>
        Pick the audit type, name your target, and start the run. Each audit fans out across the
        selected channels in parallel.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 24 }}>
        {/* Left: form */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Target */}
          <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 24 }}>
            <label
              className="mono"
              style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: "0.08em", marginBottom: 10, display: "block" }}
            >
              TARGET
            </label>
            <input
              type="text"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              placeholder="patient-portal.example.com · billing-workflow-v2 · COPD encounter notes"
              style={{
                width: "100%",
                padding: "12px 14px",
                fontSize: 14,
                border: "1px solid var(--line-2)",
                borderRadius: 8,
                background: "var(--paper)",
                color: "var(--ink)",
                outline: "none",
                fontFamily: "inherit",
              }}
            />
            <div style={{ fontSize: 12, color: "var(--muted-2)", marginTop: 8 }}>
              Free-form label that identifies what you&apos;re auditing. URL, system name, encounter ID — anything.
            </div>
          </div>

          {/* Audit type picker */}
          <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 24 }}>
            <label
              className="mono"
              style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: "0.08em", marginBottom: 14, display: "block" }}
            >
              AUDIT TYPE
            </label>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {AUDIT_TYPES.map((t) => {
                const selected = auditType === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setAuditType(t.id)}
                    style={{
                      textAlign: "left",
                      padding: "16px 18px",
                      borderRadius: 10,
                      border: selected ? "1px solid var(--ink)" : "1px solid var(--line-2)",
                      background: selected ? "var(--paper-2)" : "transparent",
                      cursor: "pointer",
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                      fontFamily: "inherit",
                    }}
                  >
                    <span
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: 99,
                        border: selected ? "5px solid var(--ink)" : "1px solid var(--line-2)",
                        background: selected ? "var(--paper)" : "transparent",
                        flexShrink: 0,
                        marginTop: 4,
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                        <span style={{ fontSize: 14.5, fontWeight: 600, color: "var(--ink)" }}>{t.label}</span>
                        <span className="serif" style={{ fontSize: 16, fontWeight: 500 }}>{t.price}</span>
                      </div>
                      <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>{t.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Notes */}
          <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 24 }}>
            <label
              className="mono"
              style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: "0.08em", marginBottom: 10, display: "block" }}
            >
              NOTES · OPTIONAL
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Anything that helps reviewers understand context: department, payer mix, system version, sample size."
              style={{
                width: "100%",
                minHeight: 100,
                padding: "12px 14px",
                fontSize: 13.5,
                border: "1px solid var(--line-2)",
                borderRadius: 8,
                background: "var(--paper)",
                color: "var(--ink)",
                outline: "none",
                fontFamily: "inherit",
                lineHeight: 1.5,
              }}
            />
          </div>
        </div>

        {/* Right: summary card */}
        <aside>
          <div
            style={{
              background: "var(--card)",
              border: "1px solid var(--line)",
              borderRadius: 14,
              padding: 24,
              position: "sticky",
              top: 80,
            }}
          >
            <div className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: "0.08em", marginBottom: 14 }}>
              SUMMARY
            </div>
            <h3 className="serif" style={{ fontSize: 22, fontWeight: 500, margin: "0 0 4px" }}>
              {AUDIT_TYPES.find((t) => t.id === auditType)!.label}
            </h3>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.55, margin: "0 0 16px" }}>
              {AUDIT_TYPES.find((t) => t.id === auditType)!.desc}
            </p>

            <div style={{ borderTop: "1px solid var(--line)", paddingTop: 14, marginBottom: 14 }}>
              <div className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: "0.08em", marginBottom: 10 }}>
                CHANNELS
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {AUDIT_TYPES.find((t) => t.id === auditType)!.channels.map((cid) => {
                  const ch = CHANNELS.find((c) => c.id === cid);
                  if (!ch) return null;
                  return (
                    <span
                      key={cid}
                      className="mono"
                      style={{
                        fontSize: 10.5,
                        padding: "4px 9px",
                        background: "var(--paper-2)",
                        color: "var(--ink-2)",
                        borderRadius: 999,
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {ch.short.toUpperCase()}
                    </span>
                  );
                })}
              </div>
            </div>

            <div style={{ borderTop: "1px solid var(--line)", paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
              <span style={{ fontSize: 13, color: "var(--muted)" }}>Total</span>
              <span className="serif" style={{ fontSize: 28, fontWeight: 500 }}>
                {AUDIT_TYPES.find((t) => t.id === auditType)!.price}
              </span>
            </div>

            <Button
              variant="primary"
              icon={ArrowRight}
              onClick={submit}
              disabled={submitting}
              style={{ width: "100%", justifyContent: "center" }}
            >
              {submitting ? "Starting…" : "Start audit"}
            </Button>

            <div
              style={{
                marginTop: 14,
                fontSize: 12,
                color: "var(--muted-2)",
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
                lineHeight: 1.5,
              }}
            >
              <Sparkles size={12} strokeWidth={1.75} color="var(--accent)" style={{ marginTop: 2, flexShrink: 0 }} />
              <span>
                You&apos;ll be redirected to the report screen where you paste the actual content (clinical
                notes, workflow, URL) and the engine kicks off in parallel.
              </span>
            </div>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}
