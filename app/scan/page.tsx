"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Lock, Upload } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { PhiInputWarning } from "@/components/site/PhiInputWarning";
import { PhiDetectionBanner } from "@/components/site/PhiDetectionBanner";
import { detectPhi } from "@/lib/phi/detector";
import { Button, ScoreRing, SevBadge, ModelPill } from "@/components/ui/primitives";
import {
  CHANNELS,
  engineSeverityToDisplay,
  ENGINE_TO_DISPLAY,
  type DisplaySeverity,
  type ChannelDef,
} from "@/components/site/data";
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

export default function ScanPage() {
  const { t } = useLang();
  const s = t.scanPage;
  const [step, setStep] = useState<"input" | "running" | "results">("input");
  const [text, setText] = useState("");
  const [run, setRun] = useState<EngineRun | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (step !== "running") return;
    const start = Date.now();
    const tick = setInterval(() => setElapsed(Math.round((Date.now() - start) / 1000)), 500);
    return () => clearInterval(tick);
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
      const data = (await res.json()) as { run?: EngineRun; isAdmin?: boolean; error?: string };
      if (!res.ok || !data.run) {
        setError(data.error || s.runErrorDefault);
        setStep("input");
        return;
      }
      setRun(data.run);
      setIsAdmin(Boolean(data.isAdmin));
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
          {step === "results" ? s.kickerResults : s.kicker}
        </div>
        <h1 className="serif" style={{ fontSize: 56, fontWeight: 500, lineHeight: 1.02, margin: "0 0 18px" }}>
          {step === "results" ? s.titleResults : s.title}
        </h1>
        <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.6, marginBottom: 44, maxWidth: 640 }}>
          {step === "results" ? s.bodyResults : s.body}
        </p>

        {error && (
          <div style={{ background: "var(--accent-soft)", color: "var(--accent)", padding: "14px 18px", borderRadius: 8, marginBottom: 24, fontSize: 13.5 }}>
            {error}
          </div>
        )}

        {step === "input" && (
          <ScanInputForm s={s} text={text} setText={setText} onRun={runScan} />
        )}
        {step === "running" && <ScanRunning s={s} t={t} elapsed={elapsed} />}
        {step === "results" && run && <ScanResults s={s} t={t} run={run} isAdmin={isAdmin} />}
      </div>
      <MarketingFooter />
    </>
  );
}

function ScanInputForm({
  s,
  text,
  setText,
  onRun,
}: {
  s: Dict["scanPage"];
  text: string;
  setText: (v: string) => void;
  onRun: () => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadedName, setUploadedName] = useState<string | null>(null);
  const phiMatches = detectPhi(text);
  const phiBlocked = phiMatches.length > 0;

  const handleFile = async (file: File | null) => {
    if (!file) return;
    setUploadError(null);
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/extract", { method: "POST", body: fd });
      const data = (await res.json()) as { ok?: boolean; text?: string; error?: string };
      if (!res.ok || !data.ok || typeof data.text !== "string") {
        setUploadError(data.error || s.uploadErrorPrefix(res.status));
        return;
      }
      if (!data.text.trim()) {
        setUploadError(s.uploadNoText);
        return;
      }
      setText(data.text);
      setUploadedName(file.name);
    } catch (e) {
      setUploadError(e instanceof Error ? e.message : String(e));
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 32 }}>
      <PhiInputWarning />
      <label style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-2)", marginBottom: 14, display: "block" }}>
        {s.inputLabel}
      </label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={s.inputPlaceholder}
        style={{
          width: "100%",
          minHeight: 200,
          padding: 16,
          borderRadius: 8,
          border: phiMatches.length > 0 ? "1px solid var(--accent)" : "1px solid var(--line-2)",
          fontSize: 14,
          fontFamily: "inherit",
          background: "var(--paper)",
          color: "var(--ink)",
          outline: "none",
          lineHeight: 1.6,
        }}
      />

      <PhiDetectionBanner matches={phiMatches} />

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.docx,.txt,.md,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain,text/markdown"
        onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
        style={{ display: "none" }}
      />

      <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          style={{
            fontSize: 12,
            padding: "5px 12px",
            border: "1px solid var(--line-2)",
            borderRadius: 99,
            background: "transparent",
            color: "var(--ink-2)",
            cursor: uploading ? "wait" : "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            opacity: uploading ? 0.6 : 1,
          }}
        >
          <Upload size={12} />
          {uploading ? s.uploadBusy : s.uploadIdle}
        </button>
        <span style={{ fontSize: 12, color: "var(--muted-2)", marginLeft: 6, marginRight: 4 }}>{s.uploadOrTry}</span>
        {s.sampleInputs.map((ex) => (
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

      {(uploadError || uploadedName) && (
        <div
          style={{
            marginTop: 12,
            fontSize: 12,
            color: uploadError ? "var(--accent)" : "var(--muted)",
          }}
        >
          {uploadError ? uploadError : s.uploadLoaded(uploadedName!)}
        </div>
      )}

      <div style={{ marginTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", display: "flex", alignItems: "center", gap: 6, letterSpacing: "0.04em" }}>
          <Lock size={12} />
          {s.noStoreBadge}
        </div>
        <Button variant="primary" icon={Play} onClick={onRun} disabled={!text.trim() || phiBlocked}>
          {s.runCta}
        </Button>
      </div>
    </div>
  );
}

function ScanRunning({ s, t, elapsed }: { s: Dict["scanPage"]; t: Dict; elapsed: number }) {
  return (
    <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 40 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
        <div>
          <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", marginBottom: 6, letterSpacing: "0.06em" }}>
            {s.runningStatus}
          </div>
          <div className="serif" style={{ fontSize: 30, fontWeight: 500 }}>{s.runningTitle}</div>
          <div style={{ fontSize: 14, color: "var(--muted)", marginTop: 6 }}>
            {s.runningBody}
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
          {s.elapsedPrefix} · {elapsed}s
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
                <div style={{ fontSize: 13, fontWeight: 500 }}>{t.audits.channelShort[ch.id]}</div>
              </div>
              <div className="pulse-soft" style={{ width: 8, height: 8, borderRadius: 99, background: "var(--accent)" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ScanResults({ s, t, run, isAdmin }: { s: Dict["scanPage"]; t: Dict; run: EngineRun; isAdmin: boolean }) {
  const findings = collectFindings(run, t);
  const critical = findings.filter((f) => f.severity === "critical");
  const watch = findings.filter((f) => f.severity === "watch");
  const info = findings.filter((f) => f.severity === "info");

  // Admins (logged in via Basic Auth) see the full report; everyone else sees a 3-finding preview.
  const visible = isAdmin ? [...critical, ...watch, ...info] : critical.slice(0, 3);
  const overall = computeOverall(run);

  return (
    <div>
      <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 32, marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
          <div>
            <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", marginBottom: 6, letterSpacing: "0.06em" }}>
              {s.overallKicker(run.id)}
            </div>
            <div className="serif" style={{ fontSize: 56, fontWeight: 500, lineHeight: 1 }}>
              {overall}
              <span style={{ fontSize: 24, color: "var(--muted-2)" }}>/100</span>
            </div>
          </div>
          <ScoreRing score={overall} size={88} stroke={7} label={s.overallKicker(run.id).split("·")[0].trim()} />
        </div>

        <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
          <span className="mono" style={{ fontSize: 11, padding: "5px 10px", background: "var(--accent-soft)", color: "var(--accent)", borderRadius: 4, fontWeight: 600 }}>
            {critical.length} {s.severityCritical}
          </span>
          <span className="mono" style={{ fontSize: 11, padding: "5px 10px", background: "var(--warn-soft)", color: "var(--warn)", borderRadius: 4, fontWeight: 600 }}>
            {watch.length} {s.severityWatch}
          </span>
          <span className="mono" style={{ fontSize: 11, padding: "5px 10px", background: "var(--info-soft)", color: "var(--info)", borderRadius: 4, fontWeight: 600 }}>
            {info.length} {s.severityInfo}
          </span>
        </div>

        <div style={{ borderTop: "1px solid var(--line)", paddingTop: 20 }}>
          {visible.length > 0 ? (
            visible.map((f, i) => <FindingRow key={i} finding={f} />)
          ) : (
            <div style={{ fontSize: 14, color: "var(--muted)", padding: "12px 0" }}>
              {s.noCriticalBody}
            </div>
          )}
        </div>
      </div>

      {/* Locked unlock card — hidden for admins, who already see the full report */}
      {!isAdmin && (
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
          {s.unlockTitle(findings.length - visible.length)}
        </h3>
        <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6, marginBottom: 24, maxWidth: 480, marginInline: "auto" }}>
          {s.unlockBody}
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/waitlist" style={{ textDecoration: "none" }}>
            <Button variant="accent" icon={ArrowRight}>{s.unlockCta}</Button>
          </Link>
          <Link href="/waitlist" style={{ textDecoration: "none" }}>
            <Button variant="secondary">{s.subscribeCta}</Button>
          </Link>
        </div>
      </div>
      )}
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

function collectFindings(run: EngineRun, t: Dict): FlatFinding[] {
  const out: FlatFinding[] = [];
  for (const [engineCh, job] of Object.entries(run.jobs)) {
    if (job.status !== "done" || !job.result) continue;
    const displayId = (ENGINE_TO_DISPLAY[engineCh] ?? "documentation") as ChannelDef["id"];
    const label = t.channels[displayId].label;
    const short = t.audits.channelShort[displayId];
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
