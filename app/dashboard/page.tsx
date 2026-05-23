"use client";

import Link from "next/link";
import { ArrowRight, Plus, TrendingUp, ArrowUpRight } from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import {
  Button,
  ScoreRing,
  SevBadge,
} from "@/components/ui/primitives";
import { CHANNELS } from "@/components/site/data";
import {
  KPIS,
  CHANNEL_SCORES,
  SCORE_HISTORY,
  MOCK_RUNS,
  PENDING_ACTIONS,
} from "@/components/site/mockApp";
import { classifyScore } from "@/lib/scoring";
import { useLang } from "@/lib/i18n/LanguageContext";

const MAX_HISTORY = Math.max(...SCORE_HISTORY);

export default function DashboardPage() {
  const { t } = useLang();
  const d = t.dashboard;
  const channelShort = t.audits.channelShort;

  return (
    <AppShell
      topbarRight={
        <Link href="/audits/new" style={{ textDecoration: "none" }}>
          <Button variant="primary" size="sm" icon={Plus}>{d.newAudit}</Button>
        </Link>
      }
    >
      {/* Greeting */}
      <div style={{ marginBottom: 28 }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 8 }}>
          {d.kicker}
        </div>
        <h1 className="serif" style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.05, margin: 0 }}>
          {d.greeting("Glenn")}
        </h1>
        <p style={{ fontSize: 14.5, color: "var(--muted)", marginTop: 6 }}>
          {d.summary(KPIS.totalThisWeek, KPIS.openCritical)}
        </p>
      </div>

      {/* KPI strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 28 }}>
        <KPI label={d.kpi.avgScore7d} value={KPIS.avgScore7d} suffix="/100" delta="+5" deltaUp />
        <KPI label={d.kpi.avgScore30d} value={KPIS.avgScore30d} suffix="/100" delta="+2" deltaUp />
        <KPI label={d.kpi.openCritical} value={KPIS.openCritical} accent />
        <KPI label={d.kpi.resolved7d} value={KPIS.resolvedThisWeek} delta="+4" deltaUp />
      </div>

      {/* Trend + Channel grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16, marginBottom: 28 }}>
        {/* Trend card */}
        <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
            <div>
              <div className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: "0.08em", marginBottom: 4 }}>
                {d.trend.label}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <span className="serif" style={{ fontSize: 36, fontWeight: 500 }}>{SCORE_HISTORY[SCORE_HISTORY.length - 1]}</span>
                <span className="mono" style={{ fontSize: 11, color: "var(--good)", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                  <TrendingUp size={12} /> {d.trend.sinceWeek1(SCORE_HISTORY[SCORE_HISTORY.length - 1] - SCORE_HISTORY[0])}
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 140, padding: "20px 0 8px", borderBottom: "1px solid var(--line)" }}>
            {SCORE_HISTORY.map((v, i) => {
              const h = Math.max(8, (v / MAX_HISTORY) * 120);
              const isLast = i === SCORE_HISTORY.length - 1;
              return (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <span className="mono" style={{ fontSize: 10, color: isLast ? "var(--ink-2)" : "var(--muted-2)", fontWeight: isLast ? 600 : 400 }}>
                    {v}
                  </span>
                  <div
                    style={{
                      width: "100%",
                      height: h,
                      background: isLast ? "var(--accent)" : "var(--ink-3)",
                      borderRadius: "4px 4px 0 0",
                      transition: "background 0.2s",
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="mono" style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontSize: 9.5, color: "var(--muted-2)", letterSpacing: "0.06em" }}>
            {d.trend.weeks.map((w) => (
              <span key={w}>{w}</span>
            ))}
          </div>
        </div>

        {/* Channel grid */}
        <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 24 }}>
          <div className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: "0.08em", marginBottom: 16 }}>
            {d.channelHealth}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {CHANNELS.map((ch) => {
              const score = CHANNEL_SCORES[ch.id as keyof typeof CHANNEL_SCORES];
              const status = classifyScore(score);
              const Icon = ch.icon;
              const dotColor = status === "pass" ? "var(--good)" : status === "watch" ? "var(--warn)" : "var(--accent)";
              return (
                <div key={ch.id} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Icon size={16} strokeWidth={1.75} color="var(--muted)" style={{ flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    <span style={{ fontSize: 13.5, fontWeight: 500, color: "var(--ink-2)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {channelShort[ch.id]}
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ width: 6, height: 6, borderRadius: 99, background: dotColor }} />
                      <span className="serif" style={{ fontSize: 16, fontWeight: 500, minWidth: 28, textAlign: "right" }}>{score}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pending actions */}
      <Section title={d.pendingActions.title} subtitle={d.pendingActions.subtitle(PENDING_ACTIONS.length)}>
        <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden" }}>
          {PENDING_ACTIONS.map((a, i) => {
            const txt = d.mockActions[i] ?? { channel: a.channel, message: "" };
            return (
              <div
                key={i}
                style={{
                  padding: "16px 20px",
                  borderBottom: i < PENDING_ACTIONS.length - 1 ? "1px solid var(--line)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <SevBadge severity={a.severity} />
                <span className="mono" style={{ fontSize: 11, color: "var(--muted-2)", width: 80, flexShrink: 0, letterSpacing: "0.04em" }}>
                  {txt.channel}
                </span>
                <span style={{ flex: 1, fontSize: 13.5, color: "var(--ink-2)" }}>{txt.message}</span>
                <span className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.04em" }}>
                  {a.count}× {d.pendingActions.timesAcrossRuns}
                </span>
                <ArrowUpRight size={14} color="var(--muted-2)" />
              </div>
            );
          })}
        </div>
      </Section>

      {/* Recent audits */}
      <Section
        title={d.recentAudits.title}
        subtitle={d.recentAudits.subtitle(MOCK_RUNS.length)}
        right={
          <Link href="/audits" style={{ textDecoration: "none" }}>
            <Button variant="secondary" size="sm" icon={ArrowRight}>{d.recentAudits.seeAll}</Button>
          </Link>
        }
      >
        <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden" }}>
          {MOCK_RUNS.slice(0, 5).map((r, i, arr) => {
            const txt = d.mockRuns[i] ?? { target: r.target, date: r.date };
            return (
              <Link
                key={r.id}
                href="/report"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  padding: "16px 20px",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none",
                  gap: 16,
                }}
              >
                <ScoreRing score={r.score} size={44} stroke={4} mini />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {txt.target}
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", marginTop: 2, letterSpacing: "0.04em" }}>
                    {r.id.toUpperCase()} · {txt.date.toUpperCase()}
                  </div>
                </div>
                <span className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.04em", flexShrink: 0 }}>
                  {r.channels}/{r.channelsTotal} {d.recentAudits.channelsSuffix}
                </span>
                <ArrowUpRight size={14} color="var(--muted-2)" />
              </Link>
            );
          })}
        </div>
      </Section>
    </AppShell>
  );
}

function KPI({
  label,
  value,
  suffix,
  delta,
  deltaUp,
  accent,
}: {
  label: string;
  value: number;
  suffix?: string;
  delta?: string;
  deltaUp?: boolean;
  accent?: boolean;
}) {
  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--line)",
        borderRadius: 12,
        padding: "18px 20px",
      }}
    >
      <div className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: "0.08em", marginBottom: 10 }}>
        {label.toUpperCase()}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
          <span
            className="serif"
            style={{ fontSize: 32, fontWeight: 500, lineHeight: 1, color: accent ? "var(--accent)" : "var(--ink)" }}
          >
            {value}
          </span>
          {suffix && <span style={{ fontSize: 13, color: "var(--muted-2)" }}>{suffix}</span>}
        </div>
        {delta && (
          <span
            className="mono"
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: deltaUp ? "var(--good)" : "var(--accent)",
            }}
          >
            {delta}
          </span>
        )}
      </div>
    </div>
  );
}

function Section({
  title,
  subtitle,
  right,
  children,
}: {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: 28 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 14, gap: 16 }}>
        <div>
          <h2 className="serif" style={{ fontSize: 22, fontWeight: 500, margin: "0 0 4px" }}>
            {title}
          </h2>
          {subtitle && <p style={{ fontSize: 13, color: "var(--muted)", margin: 0 }}>{subtitle}</p>}
        </div>
        {right}
      </div>
      {children}
    </section>
  );
}
