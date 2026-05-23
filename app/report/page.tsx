"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { Button, ScoreRing, SevBadge, ModelPill } from "@/components/ui/primitives";
import {
  CHANNELS,
  engineSeverityToDisplay,
  ENGINE_TO_DISPLAY,
} from "@/components/site/data";
import { CALENDLY_URL } from "@/lib/config";
import { useLang } from "@/lib/i18n/LanguageContext";
import type { Dict } from "@/lib/i18n/dict";

type EngineFinding = {
  severity: "issue" | "warn" | "ok";
  label: string;
  detail?: string;
};

type EngineJobResult = {
  score: number;
  summary: string;
  findings: EngineFinding[];
  requiredActions?: string[];
  details?: {
    provider?: string;
    model?: string;
    fallbackFromProvider?: string;
  };
};

type EngineJob = {
  channel: string;
  status: "pending" | "running" | "done" | "failed";
  startedAt?: string;
  finishedAt?: string;
  durationMs?: number;
  result?: EngineJobResult;
  error?: string;
};

type EngineRun = {
  id: string;
  text: string;
  createdAt: string;
  jobs: Record<string, EngineJob>;
};

const SAMPLE_INPUT = `Patient seen for chest pain on 2026-04-15. No ICD-10 code recorded.
Site uses http://, not https. No CSP header. Google Analytics fires before consent.
Claim submitted without payer-required NPI field. No appointment reminder set.
Patient education content cites 2018 guidelines (now superseded).`;

export default function ReportPage() {
  const { t } = useLang();
  const r = t.reportPage;
  const [text, setText] = useState("");
  const [run, setRun] = useState<EngineRun | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openChannel, setOpenChannel] = useState<string | null>(null);

  const startRun = async () => {
    setError(null);
    setOpenChannel(null);
    setLoading(true);
    setRun(null);
    try {
      const res = await fetch("/api/runs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = (await res.json()) as { run?: EngineRun; error?: string };
      if (!res.ok || !data.run) {
        setError(data.error || r.runErrorDefault);
        return;
      }
      setRun(data.run);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  };

  const downloadPdf = async () => {
    if (!run) return;
    try {
      const res = await fetch("/api/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ run }),
      });
      if (!res.ok) {
        setError(r.pdfErrorDefault);
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `aegis-report-${run.id}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  const overall = run ? computeOverall(run) : 0;
  const counts = run ? aggregateCounts(run) : { critical: 0, watch: 0, info: 0 };

  return (
    <>
      <MarketingNav />
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "56px 32px 24px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 12 }}>
          {run ? r.kickerRun(run.id) : r.kicker}
        </div>
        <h1 className="serif" style={{ fontSize: 48, fontWeight: 500, lineHeight: 1.02, margin: "0 0 16px" }}>
          {run ? r.titleDone : r.title}
        </h1>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.6, maxWidth: 640, marginBottom: 32 }}>
          {run ? r.bodyDone : r.body}
        </p>

        {error && (
          <div style={{ background: "var(--accent-soft)", color: "var(--accent)", padding: "14px 18px", borderRadius: 8, marginBottom: 24, fontSize: 13.5 }}>
            {error}
          </div>
        )}

        {!run && (
          <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 28, marginBottom: 24 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-2)", marginBottom: 12, display: "block" }}>
              {r.inputLabel}
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={r.inputPlaceholder}
              style={{
                width: "100%",
                minHeight: 180,
                padding: 16,
                borderRadius: 8,
                border: "1px solid var(--line-2)",
                fontSize: 14,
                fontFamily: "inherit",
                background: "var(--paper)",
                color: "var(--ink)",
                outline: "none",
                lineHeight: 1.6,
              }}
            />
            <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <button
                onClick={() => setText(SAMPLE_INPUT)}
                disabled={loading}
                style={{
                  fontSize: 12,
                  padding: "5px 10px",
                  border: "1px solid var(--line-2)",
                  borderRadius: 99,
                  background: "transparent",
                  color: "var(--ink-2)",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.5 : 1,
                }}
              >
                {r.useSampleInput}
              </button>
              <Button
                variant="primary"
                icon={ArrowRight}
                onClick={startRun}
                disabled={loading || !text.trim()}
              >
                {loading ? r.runningCta : r.runCta}
              </Button>
            </div>
            {loading && (
              <div style={{ marginTop: 18, padding: "12px 16px", background: "var(--paper-2)", borderRadius: 8, fontSize: 13, color: "var(--muted)" }}>
                {r.runningBody}
              </div>
            )}
          </div>
        )}

        {run && (
          <>
            <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24, marginBottom: 24, flexWrap: "wrap" }}>
                <div>
                  <div className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", marginBottom: 6, letterSpacing: "0.06em" }}>
                    {r.overallLabel}
                  </div>
                  <div className="serif" style={{ fontSize: 56, fontWeight: 500, lineHeight: 1 }}>
                    {overall}
                    <span style={{ fontSize: 24, color: "var(--muted-2)" }}>/100</span>
                  </div>
                  <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
                    <span className="mono" style={{ fontSize: 10.5, padding: "4px 9px", background: "var(--accent-soft)", color: "var(--accent)", borderRadius: 4, fontWeight: 600 }}>
                      {counts.critical} {r.severityCritical}
                    </span>
                    <span className="mono" style={{ fontSize: 10.5, padding: "4px 9px", background: "var(--warn-soft)", color: "var(--warn)", borderRadius: 4, fontWeight: 600 }}>
                      {counts.watch} {r.severityWatch}
                    </span>
                    <span className="mono" style={{ fontSize: 10.5, padding: "4px 9px", background: "var(--info-soft)", color: "var(--info)", borderRadius: 4, fontWeight: 600 }}>
                      {counts.info} {r.severityInfo}
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <ScoreRing score={overall} size={84} stroke={6} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <Button variant="primary" size="sm" icon={Download} onClick={downloadPdf}>
                      {r.downloadPdf}
                    </Button>
                    <Button variant="secondary" size="sm" onClick={() => setRun(null)}>
                      {r.runAgain}
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => window.open(CALENDLY_URL, "_blank", "noopener,noreferrer")}
                    >
                      {r.bookDemo}
                    </Button>
                    <Link href="/waitlist" style={{ textDecoration: "none" }}>
                      <Button variant="secondary" size="sm">
                        {r.joinWaitlist}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {CHANNELS.map((ch) => {
                const engineId = ENGINE_TO_DISPLAY[ch.id] === ch.id
                  ? (Object.entries(ENGINE_TO_DISPLAY).find(([, v]) => v === ch.id)?.[0] ?? ch.id)
                  : ch.id;
                const job = run.jobs[engineId];
                if (!job) return null;
                return (
                  <ChannelBlock
                    key={ch.id}
                    r={r}
                    channelLabel={t.channels[ch.id].label}
                    channelKicker={ch.kicker}
                    icon={ch.icon}
                    job={job}
                    open={openChannel === ch.id}
                    onToggle={() => setOpenChannel(openChannel === ch.id ? null : ch.id)}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
      <MarketingFooter />
    </>
  );
}

function ChannelBlock({
  r,
  channelLabel,
  channelKicker,
  icon: Icon,
  job,
  open,
  onToggle,
}: {
  r: Dict["reportPage"];
  channelLabel: string;
  channelKicker: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; color?: string }>;
  job: EngineJob;
  open: boolean;
  onToggle: () => void;
}) {
  const score = job.result?.score ?? 0;
  const details = job.result?.details;
  const isFailed = job.status === "failed";

  return (
    <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
      <div
        onClick={job.status === "done" ? onToggle : undefined}
        style={{
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: job.status === "done" ? "pointer" : "default",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0, flex: 1 }}>
          {job.status === "done" ? (
            open ? (
              <ChevronDown size={16} color="var(--muted-2)" strokeWidth={2} />
            ) : (
              <ChevronRight size={16} color="var(--muted-2)" strokeWidth={2} />
            )
          ) : (
            <div style={{ width: 16 }} />
          )}
          <Icon size={20} strokeWidth={1.5} color="var(--accent)" />
          <div style={{ minWidth: 0 }}>
            <div className="mono" style={{ fontSize: 10, color: "var(--muted-2)", letterSpacing: "0.06em" }}>
              CH. {channelKicker}
            </div>
            <div style={{ fontSize: 15, fontWeight: 600 }}>{channelLabel}</div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
          {details?.model && <ModelPill model={details.model} fallback={details.fallbackFromProvider} />}
          {isFailed ? (
            <span className="mono" style={{ fontSize: 11, padding: "5px 10px", background: "var(--accent-soft)", color: "var(--accent)", borderRadius: 4, fontWeight: 600 }}>
              {r.failedBadge}
            </span>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div className="serif" style={{ fontSize: 24, fontWeight: 500 }}>
                {score}
                <span style={{ fontSize: 12, color: "var(--muted-2)" }}>/100</span>
              </div>
              <ScoreRing score={score} size={36} stroke={4} mini />
            </div>
          )}
        </div>
      </div>

      {open && job.result && (
        <div style={{ borderTop: "1px solid var(--line)", padding: "20px 24px", background: "var(--paper)" }}>
          {job.result.findings.length === 0 ? (
            <div style={{ fontSize: 13.5, color: "var(--muted)" }}>{r.noFindings}</div>
          ) : (
            <div>
              {job.result.findings.map((f, i) => {
                const sev = engineSeverityToDisplay(f.severity);
                return (
                  <div
                    key={i}
                    style={{
                      padding: "14px 0",
                      borderBottom:
                        i < job.result!.findings.length - 1 ? "1px solid var(--line)" : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                      <SevBadge severity={sev} />
                      <span className="mono" style={{ fontSize: 11, color: "var(--muted-2)" }}>{f.label}</span>
                    </div>
                    {f.detail && (
                      <div style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.6 }}>{f.detail}</div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {(job.result.requiredActions ?? []).length > 0 && (
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--line)" }}>
              <div className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: "0.08em", marginBottom: 10 }}>
                {r.requiredActionsLabel}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {job.result.requiredActions!.map((a, i) => (
                  <li key={i} style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55, display: "flex", gap: 10 }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>›</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {isFailed && job.error && (
        <div style={{ borderTop: "1px solid var(--line)", padding: "14px 24px", background: "var(--accent-soft)", fontSize: 12.5, color: "var(--accent-2)" }}>
          {job.error.slice(0, 240)}
        </div>
      )}
    </div>
  );
}

function computeOverall(run: EngineRun): number {
  const scores = Object.values(run.jobs)
    .filter((j) => j.status === "done" && j.result)
    .map((j) => j.result!.score);
  if (!scores.length) return 0;
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}

function aggregateCounts(run: EngineRun): {
  critical: number;
  watch: number;
  info: number;
} {
  const counts = { critical: 0, watch: 0, info: 0 };
  for (const job of Object.values(run.jobs)) {
    if (!job.result) continue;
    for (const f of job.result.findings) {
      const sev = engineSeverityToDisplay(f.severity);
      if (sev === "critical") counts.critical++;
      else if (sev === "watch") counts.watch++;
      else counts.info++;
    }
  }
  return counts;
}
