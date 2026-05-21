"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Lock } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { Button, ScoreRing, SevBadge, ModelPill } from "@/components/ui/primitives";
import {
  CHANNELS,
  engineSeverityToDisplay,
  ENGINE_TO_DISPLAY,
  type DisplaySeverity,
} from "@/components/site/data";

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

const SAMPLE_INPUTS = [
  "Patient evaluated for Type 2 diabetes on 2026-06-01. ICD-10 E11.9 recorded. CPT 99214 correct. Modifier 25 applied. NPI present, POS 11 entered.",
  "Website uses HTTPS with HSTS, CSP, and secure cookies. No PHI in URLs. Consent banner loads before analytics.",
  "Claim submitted with payer ID, taxonomy, NPI, and EDI 837 generated. Clearinghouse response 200. No denial notification workflow configured.",
];

export default function ScanPage() {
  const [step, setStep] = useState<"input" | "running" | "results">("input");
  const [text, setText] = useState("");
  const [run, setRun] = useState<EngineRun | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);

  // tick elapsed clock while running (reset happens in runScan, not here)
  useEffect(() => {
    if (step !== "running") return;
    const start = Date.now();
    const t = setInterval(() => setElapsed(Math.round((Date.now() - start) / 1000)), 500);
    return () => clearInterval(t);
  }, [step]);

  const runScan = async () => {
    setError(null);
    setRun(null);
    setElapsed(0);
    setStep("running");
    try {
      const res = await fetch("/api/runs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = (await res.json()) as { run?: EngineRun; error?: string };
      if (!res.ok || !data.run) {
        setError(data.error || "Failed to run audit.");
        setStep("input");
        return;
      }
      setRun(data.run);
      setStep("results");
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setStep("input");
    }
  };

  return (
    <>
      <MarketingNav />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "72px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 14 }}>
          {step === "results" ? "FREE SCAN · RESULTS" : "FREE SCAN"}
        </div>
        <h1 className="serif" style={{ fontSize: 56, fontWeight: 500, lineHeight: 1.02, margin: "0 0 18px" }}>
          {step === "results" ? "Critical findings." : "Start a free audit."}
        </h1>
        <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.6, marginBottom: 44, maxWidth: 640 }}>
          {step === "results"
            ? "Top critical issues across the six channels. Full report — all findings, required actions, PDF export — unlocks for $49."
            : "Paste a clinical note, claim workflow, or URL. Aegis runs all six channels in parallel — typically 15–40 seconds."}
        </p>

        {error && (
          <div style={{ background: "var(--accent-soft)", color: "var(--accent)", padding: "14px 18px", borderRadius: 8, marginBottom: 24, fontSize: 13.5 }}>
            {error}
          </div>
        )}

        {step === "input" && (
          <ScanInputForm text={text} setText={setText} onRun={runScan} />
        )}
        {step === "running" && <ScanRunning elapsed={elapsed} />}
        {step === "results" && run && <ScanResults run={run} />}
      </div>
      <MarketingFooter />
    </>
  );
}

function ScanInputForm({
  text,
  setText,
  onRun,
}: {
  text: string;
  setText: (v: string) => void;
  onRun: () => void;
}) {
  return (
    <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 32 }}>
      <label style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-2)", marginBottom: 14, display: "block" }}>
        Input — clinical note, workflow description, or URL
      </label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste a clinical note, claim workflow description, or healthcare URL..."
        style={{
          width: "100%",
          minHeight: 200,
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

      <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
        <span style={{ fontSize: 12, color: "var(--muted-2)", marginRight: 4 }}>Try:</span>
        {SAMPLE_INPUTS.map((ex) => (
          <button
            key={ex}
            onClick={() => setText(ex)}
            style={{
              fontSize: 12,
              padding: "5px 10px",
              border: "1px solid var(--line-2)",
              borderRadius: 99,
              background: "transparent",
              color: "var(--ink-2)",
              cursor: "pointer",
            }}
          >
            {ex.slice(0, 56)}…
          </button>
        ))}
      </div>

      <div style={{ marginTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", display: "flex", alignItems: "center", gap: 6, letterSpacing: "0.04em" }}>
          <Lock size={12} />
          INPUT IS NOT STORED OR USED FOR TRAINING
        </div>
        <Button variant="primary" icon={Play} onClick={onRun} disabled={!text.trim()}>
          Run scan
        </Button>
      </div>
    </div>
  );
}

function ScanRunning({ elapsed }: { elapsed: number }) {
  return (
    <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 40 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
        <div>
          <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", marginBottom: 6, letterSpacing: "0.06em" }}>
            STATUS
          </div>
          <div className="serif" style={{ fontSize: 30, fontWeight: 500 }}>Running six audit channels…</div>
          <div style={{ fontSize: 14, color: "var(--muted)", marginTop: 6 }}>
            Fanning out in parallel. Typical run: 15–40 seconds.
          </div>
        </div>
        <div style={{ position: "relative", width: 60, height: 60 }}>
          <div
            className="spin-slow"
            style={{
              position: "absolute",
              inset: 0,
              border: "2px solid var(--line)",
              borderTopColor: "var(--accent)",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 28 }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", letterSpacing: "0.04em" }}>
          ELAPSED · {elapsed}s
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
        {CHANNELS.map((ch) => {
          const Icon = ch.icon;
          return (
            <div
              key={ch.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 16px",
                borderRadius: 8,
                background: "var(--paper)",
                border: "1px solid var(--line)",
              }}
            >
              <Icon size={18} strokeWidth={1.75} color="var(--muted-2)" />
              <div style={{ flex: 1 }}>
                <div className="mono" style={{ fontSize: 10, color: "var(--muted-2)", letterSpacing: "0.06em" }}>
                  CH. {ch.kicker}
                </div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{ch.short}</div>
              </div>
              <div className="pulse-soft" style={{ width: 8, height: 8, borderRadius: 99, background: "var(--accent)" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ScanResults({ run }: { run: EngineRun }) {
  const findings = collectFindings(run);
  const critical = findings.filter((f) => f.severity === "critical");
  const watch = findings.filter((f) => f.severity === "watch");
  const info = findings.filter((f) => f.severity === "info");

  const visible = critical.slice(0, 3);
  const overall = computeOverall(run);

  return (
    <div>
      <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 32, marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
          <div>
            <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", marginBottom: 6, letterSpacing: "0.06em" }}>
              OVERALL · RUN {run.id}
            </div>
            <div className="serif" style={{ fontSize: 56, fontWeight: 500, lineHeight: 1 }}>
              {overall}
              <span style={{ fontSize: 24, color: "var(--muted-2)" }}>/100</span>
            </div>
          </div>
          <ScoreRing score={overall} size={88} stroke={7} label="OVERALL" />
        </div>

        <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
          <span className="mono" style={{ fontSize: 11, padding: "5px 10px", background: "var(--accent-soft)", color: "var(--accent)", borderRadius: 4, fontWeight: 600 }}>
            {critical.length} CRITICAL
          </span>
          <span className="mono" style={{ fontSize: 11, padding: "5px 10px", background: "var(--warn-soft)", color: "var(--warn)", borderRadius: 4, fontWeight: 600 }}>
            {watch.length} WATCH
          </span>
          <span className="mono" style={{ fontSize: 11, padding: "5px 10px", background: "var(--info-soft)", color: "var(--info)", borderRadius: 4, fontWeight: 600 }}>
            {info.length} INFO
          </span>
        </div>

        <div style={{ borderTop: "1px solid var(--line)", paddingTop: 20 }}>
          {visible.length > 0 ? (
            visible.map((f, i) => <FindingRow key={i} finding={f} />)
          ) : (
            <div style={{ fontSize: 14, color: "var(--muted)", padding: "12px 0" }}>
              No critical findings detected in this run. Unlock the full report to see all watch and info-level items.
            </div>
          )}
        </div>
      </div>

      {/* Locked unlock card */}
      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--line)",
          borderRadius: 14,
          padding: 32,
          textAlign: "center",
        }}
      >
        <Lock size={24} color="var(--accent)" strokeWidth={1.75} style={{ marginBottom: 12 }} />
        <h3 className="serif" style={{ fontSize: 24, fontWeight: 500, margin: "0 0 8px" }}>
          {findings.length - visible.length} more findings · PDF export
        </h3>
        <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6, marginBottom: 24, maxWidth: 480, marginInline: "auto" }}>
          Unlock the full audit to see every finding, required action, and download the PDF for auditors.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/report" style={{ textDecoration: "none" }}>
            <Button variant="accent" icon={ArrowRight}>Unlock full report</Button>
          </Link>
          <Link href="/dashboard" style={{ textDecoration: "none" }}>
            <Button variant="secondary">Subscribe instead</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

type FlatFinding = {
  severity: DisplaySeverity;
  code: string;
  message: string;
  engineChannel: string;
  channelLabel: string;
  channelShort: string;
  model?: string;
  fallbackFrom?: string;
};

function collectFindings(run: EngineRun): FlatFinding[] {
  const out: FlatFinding[] = [];
  for (const [engineCh, job] of Object.entries(run.jobs)) {
    if (job.status !== "done" || !job.result) continue;
    const displayId = ENGINE_TO_DISPLAY[engineCh] ?? "documentation";
    const channelDef = CHANNELS.find((c) => c.id === displayId);
    const label = channelDef?.label ?? engineCh;
    const short = channelDef?.short ?? engineCh;
    for (const f of job.result.findings) {
      out.push({
        severity: engineSeverityToDisplay(f.severity),
        code: f.label,
        message: f.detail ?? "",
        engineChannel: engineCh,
        channelLabel: label,
        channelShort: short,
        model: job.result.details?.model,
        fallbackFrom: job.result.details?.fallbackFromProvider,
      });
    }
  }
  return out;
}

function computeOverall(run: EngineRun): number {
  const scores = Object.values(run.jobs)
    .filter((j) => j.status === "done" && j.result)
    .map((j) => j.result!.score);
  if (!scores.length) return 0;
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}

function FindingRow({ finding }: { finding: FlatFinding }) {
  return (
    <div style={{ padding: "16px 0", borderBottom: "1px solid var(--line)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 8, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <SevBadge severity={finding.severity} />
          <span className="mono" style={{ fontSize: 11, color: "var(--muted-2)" }}>{finding.code}</span>
          <span className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.06em", fontWeight: 600 }}>
            {finding.channelShort.toUpperCase()}
          </span>
        </div>
        {finding.model && <ModelPill model={finding.model} fallback={finding.fallbackFrom} />}
      </div>
      <div style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.6 }}>{finding.message}</div>
    </div>
  );
}
