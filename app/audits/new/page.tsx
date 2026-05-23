"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import { Button } from "@/components/ui/primitives";
import { CHANNELS, type ChannelDef } from "@/components/site/data";
import { useLang } from "@/lib/i18n/LanguageContext";
import type { Dict } from "@/lib/i18n/dict";

type AuditType = "claims" | "full" | "exceptions";

type AuditTypeMeta = {
  id: AuditType;
  label: string;
  desc: string;
  price: string;
  channels: ChannelDef["id"][];
};

function buildAuditTypes(types: Dict["audits"]["types"]): AuditTypeMeta[] {
  const allChannels = CHANNELS.map((c) => c.id);
  return [
    { id: "claims", ...types.claims, channels: ["claims"] },
    { id: "full", ...types.full, channels: allChannels },
    { id: "exceptions", ...types.exceptions, channels: allChannels },
  ];
}

export default function NewAuditPage() {
  const router = useRouter();
  const { t } = useLang();
  const n = t.audits.new;
  const auditTypes = useMemo(() => buildAuditTypes(t.audits.types), [t.audits.types]);
  const channelShort = t.audits.channelShort;

  const [target, setTarget] = useState("");
  const [auditType, setAuditType] = useState<AuditType>("full");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const selected = auditTypes.find((x) => x.id === auditType)!;

  const submit = () => {
    setSubmitting(true);
    router.push(`/report${target ? `?target=${encodeURIComponent(target)}` : ""}`);
  };

  return (
    <AppShell>
      <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 8 }}>
        {n.kicker}
      </div>
      <h1 className="serif" style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.05, margin: "0 0 6px" }}>
        {n.title}
      </h1>
      <p style={{ fontSize: 14.5, color: "var(--muted)", margin: "0 0 32px", maxWidth: 580 }}>
        {n.body}
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
              {n.targetLabel}
            </label>
            <input
              type="text"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              placeholder={n.targetPlaceholder}
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
              {n.targetHelp}
            </div>
          </div>

          {/* Audit type picker */}
          <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 24 }}>
            <label
              className="mono"
              style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: "0.08em", marginBottom: 14, display: "block" }}
            >
              {n.typeLabel}
            </label>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {auditTypes.map((tp) => {
                const isSelected = auditType === tp.id;
                return (
                  <button
                    key={tp.id}
                    onClick={() => setAuditType(tp.id)}
                    style={{
                      textAlign: "left",
                      padding: "16px 18px",
                      borderRadius: 10,
                      border: isSelected ? "1px solid var(--ink)" : "1px solid var(--line-2)",
                      background: isSelected ? "var(--paper-2)" : "transparent",
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
                        border: isSelected ? "5px solid var(--ink)" : "1px solid var(--line-2)",
                        background: isSelected ? "var(--paper)" : "transparent",
                        flexShrink: 0,
                        marginTop: 4,
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                        <span style={{ fontSize: 14.5, fontWeight: 600, color: "var(--ink)" }}>{tp.label}</span>
                        <span className="serif" style={{ fontSize: 16, fontWeight: 500 }}>{tp.price}</span>
                      </div>
                      <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>{tp.desc}</div>
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
              {n.notesLabel}
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={n.notesPlaceholder}
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
              {n.summaryLabel}
            </div>
            <h3 className="serif" style={{ fontSize: 22, fontWeight: 500, margin: "0 0 4px" }}>
              {selected.label}
            </h3>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.55, margin: "0 0 16px" }}>
              {selected.desc}
            </p>

            <div style={{ borderTop: "1px solid var(--line)", paddingTop: 14, marginBottom: 14 }}>
              <div className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: "0.08em", marginBottom: 10 }}>
                {n.channelsLabel}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {selected.channels.map((cid) => (
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
                    {channelShort[cid].toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ borderTop: "1px solid var(--line)", paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
              <span style={{ fontSize: 13, color: "var(--muted)" }}>{n.total}</span>
              <span className="serif" style={{ fontSize: 28, fontWeight: 500 }}>
                {selected.price}
              </span>
            </div>

            <Button
              variant="primary"
              icon={ArrowRight}
              onClick={submit}
              disabled={submitting}
              style={{ width: "100%", justifyContent: "center" }}
            >
              {submitting ? n.starting : n.start}
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
              <span>{n.hint}</span>
            </div>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}
