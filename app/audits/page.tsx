"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Plus, Search, ArrowUpRight, Filter } from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import { Button, ScoreRing } from "@/components/ui/primitives";
import { MOCK_RUNS } from "@/components/site/mockApp";
import { useLang } from "@/lib/i18n/LanguageContext";

type ScoreFilter = "all" | "critical" | "watch" | "pass";

const filterMatchesScore = (filter: ScoreFilter, score: number) => {
  if (filter === "all") return true;
  if (filter === "pass") return score >= 80;
  if (filter === "watch") return score >= 65 && score < 80;
  return score < 65;
};

export default function AuditsPage() {
  const { t } = useLang();
  const a = t.audits.list;
  const mockRuns = t.dashboard.mockRuns;
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<ScoreFilter>("all");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return MOCK_RUNS.map((r, i) => ({
      ...r,
      target: mockRuns[i]?.target ?? r.target,
      date: mockRuns[i]?.date ?? r.date,
    })).filter((r) => {
      if (!filterMatchesScore(filter, r.score)) return false;
      if (!needle) return true;
      return (
        r.target.toLowerCase().includes(needle) ||
        r.id.toLowerCase().includes(needle)
      );
    });
  }, [q, filter, mockRuns]);

  return (
    <AppShell
      topbarRight={
        <Link href="/audits/new" style={{ textDecoration: "none" }}>
          <Button variant="primary" size="sm" icon={Plus}>{a.newAudit}</Button>
        </Link>
      }
    >
      <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 8 }}>
        {a.kicker}
      </div>
      <h1 className="serif" style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.05, margin: "0 0 6px" }}>
        {a.title}
      </h1>
      <p style={{ fontSize: 14.5, color: "var(--muted)", margin: "0 0 28px" }}>
        {a.body}
      </p>

      {/* Toolbar */}
      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--line)",
          borderRadius: 12,
          padding: "12px 14px",
          display: "flex",
          gap: 12,
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: 16,
        }}
      >
        <div style={{ position: "relative", flex: 1, minWidth: 260 }}>
          <Search
            size={14}
            color="var(--muted-2)"
            strokeWidth={2}
            style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }}
          />
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={a.searchPlaceholder}
            style={{
              width: "100%",
              padding: "9px 14px 9px 34px",
              fontSize: 13,
              border: "1px solid var(--line-2)",
              borderRadius: 8,
              background: "var(--paper)",
              color: "var(--ink)",
              outline: "none",
              fontFamily: "inherit",
            }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Filter size={12} color="var(--muted-2)" />
          {(["all", "critical", "watch", "pass"] as ScoreFilter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="mono"
              style={{
                padding: "6px 12px",
                fontSize: 10.5,
                fontWeight: 600,
                letterSpacing: "0.06em",
                borderRadius: 999,
                border: "1px solid var(--line-2)",
                background: filter === f ? "var(--ink)" : "transparent",
                color: filter === f ? "var(--paper)" : "var(--ink-2)",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              {a.filters[f]}
            </button>
          ))}
        </div>
      </div>

      {/* Result count */}
      <div className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: "0.08em", marginBottom: 10 }}>
        {filtered.length} {a.countSuffix} {MOCK_RUNS.length} {a.runsLabel}
      </div>

      {/* Table */}
      <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden" }}>
        <div
          className="mono"
          style={{
            display: "grid",
            gridTemplateColumns: "60px 1fr 140px 140px 110px 36px",
            gap: 16,
            padding: "12px 20px",
            background: "var(--paper-2)",
            borderBottom: "1px solid var(--line)",
            fontSize: 10.5,
            color: "var(--muted-2)",
            letterSpacing: "0.08em",
            fontWeight: 600,
          }}
        >
          <span>{a.cols.score}</span>
          <span>{a.cols.target}</span>
          <span>{a.cols.runId}</span>
          <span>{a.cols.date}</span>
          <span>{a.cols.channels}</span>
          <span />
        </div>
        {filtered.length === 0 ? (
          <div style={{ padding: "40px 20px", textAlign: "center", color: "var(--muted)", fontSize: 13 }}>
            {a.empty}
          </div>
        ) : (
          filtered.map((r, i, arr) => (
            <Link
              key={r.id}
              href="/report"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "grid",
                gridTemplateColumns: "60px 1fr 140px 140px 110px 36px",
                gap: 16,
                padding: "14px 20px",
                alignItems: "center",
                borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none",
              }}
            >
              <ScoreRing score={r.score} size={44} stroke={4} mini />
              <span style={{ fontSize: 14, fontWeight: 500, color: "var(--ink)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {r.target}
              </span>
              <span className="mono" style={{ fontSize: 11.5, color: "var(--muted)", letterSpacing: "0.02em" }}>
                {r.id}
              </span>
              <span style={{ fontSize: 12.5, color: "var(--muted)" }}>{r.date}</span>
              <span className="mono" style={{ fontSize: 11, color: "var(--muted-2)", letterSpacing: "0.04em" }}>
                {r.channels}/{r.channelsTotal}
              </span>
              <ArrowUpRight size={14} color="var(--muted-2)" />
            </Link>
          ))
        )}
      </div>
    </AppShell>
  );
}
