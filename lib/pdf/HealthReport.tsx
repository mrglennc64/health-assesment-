import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import type { Run } from "@/lib/jobs/types";
import { channelLabels, channels } from "@/lib/jobs/types";
import { classifyScore, overallScore } from "@/lib/scoring";

const styles = StyleSheet.create({
  page: { padding: 36, fontSize: 10, color: "#0f172a", fontFamily: "Helvetica" },
  h1: { fontSize: 18, fontWeight: 700, marginBottom: 4 },
  subtitle: { fontSize: 10, color: "#475569", marginBottom: 12 },
  scoreRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    gap: 12,
  },
  scoreBig: { fontSize: 22, fontWeight: 700 },
  sevBar: { flexDirection: "row", gap: 12, marginBottom: 16 },
  sevPill: { fontSize: 10 },
  sevCritical: { color: "#b91c1c" },
  sevWatch: { color: "#b45309" },
  sevPass: { color: "#047857" },
  channelCard: {
    border: "1pt solid #e2e8f0",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  channelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  channelTitle: { fontSize: 12, fontWeight: 700 },
  channelMeta: { fontSize: 9, color: "#64748b" },
  channelScore: { fontSize: 10, fontWeight: 700 },
  pill: { fontSize: 9, paddingHorizontal: 4, paddingVertical: 2, borderRadius: 2 },
  modelPill: {
    fontSize: 8,
    color: "#475569",
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
  },
  finding: { flexDirection: "row", marginTop: 4 },
  findingSev: {
    width: 50,
    fontSize: 9,
    fontWeight: 700,
    textTransform: "uppercase",
  },
  findingBody: { flex: 1, fontSize: 10 },
  sectionLabel: {
    fontSize: 9,
    fontWeight: 700,
    color: "#64748b",
    marginTop: 6,
    textTransform: "uppercase",
  },
  actionItem: { fontSize: 10, marginTop: 2 },
  footer: {
    position: "absolute",
    bottom: 24,
    left: 36,
    right: 36,
    fontSize: 8,
    color: "#94a3b8",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const sevLabel = { issue: "critical", warn: "watch", ok: "info" } as const;
const sevColor = {
  issue: "#b91c1c",
  warn: "#b45309",
  ok: "#047857",
} as const;

export function HealthReport({ run }: { run: Run }) {
  const doneScores = channels
    .filter((ch) => run.jobs[ch].status === "done")
    .map((ch) => ({
      name: ch,
      score: run.jobs[ch].result?.score ?? 0,
      status: classifyScore(run.jobs[ch].result?.score ?? 0),
    }));
  const overall = overallScore(doneScores);

  const totals = channels.reduce(
    (acc, ch) => {
      for (const f of run.jobs[ch].result?.findings ?? []) {
        if (f.severity === "issue") acc.critical++;
        else if (f.severity === "warn") acc.watch++;
        else acc.ok++;
      }
      return acc;
    },
    { critical: 0, watch: 0, ok: 0 }
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.h1}>Healthcare Assessment Report</Text>
        <Text style={styles.subtitle}>
          Run {run.id} · {new Date(run.createdAt).toUTCString()}
        </Text>

        <View style={styles.scoreRow}>
          <Text style={styles.scoreBig}>{overall} / 100</Text>
          <Text style={styles.channelMeta}>overall score</Text>
        </View>
        <View style={styles.sevBar}>
          <Text style={[styles.sevPill, styles.sevCritical]}>
            {totals.critical} critical
          </Text>
          <Text style={[styles.sevPill, styles.sevWatch]}>
            {totals.watch} watch
          </Text>
          <Text style={[styles.sevPill, styles.sevPass]}>
            {totals.ok} pass
          </Text>
        </View>

        {channels.map((ch) => {
          const job = run.jobs[ch];
          const result = job.result;
          const details = result?.details as
            | { provider?: string; model?: string; fallbackFromProvider?: string }
            | undefined;
          return (
            <View key={ch} style={styles.channelCard} wrap={false}>
              <View style={styles.channelHeader}>
                <Text style={styles.channelTitle}>{channelLabels[ch]}</Text>
                <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
                  {details?.model && (
                    <Text style={styles.modelPill}>
                      {details.fallbackFromProvider ? "↳ " : ""}
                      {details.model}
                    </Text>
                  )}
                  <Text style={styles.channelScore}>
                    {job.status === "done" ? `${result?.score ?? 0} / 100` : job.status.toUpperCase()}
                  </Text>
                </View>
              </View>
              {result?.summary && (
                <Text style={styles.channelMeta}>{result.summary}</Text>
              )}
              {job.status === "failed" && job.error && (
                <Text style={[styles.channelMeta, { color: "#b91c1c" }]}>
                  Error: {job.error.slice(0, 200)}
                </Text>
              )}
              {result?.findings && result.findings.length > 0 && (
                <>
                  <Text style={styles.sectionLabel}>Findings</Text>
                  {result.findings.map((f, i) => (
                    <View key={i} style={styles.finding}>
                      <Text
                        style={[
                          styles.findingSev,
                          { color: sevColor[f.severity] },
                        ]}
                      >
                        {sevLabel[f.severity]}
                      </Text>
                      <Text style={styles.findingBody}>
                        <Text style={{ fontWeight: 700 }}>{f.label}</Text>
                        {f.detail ? ` — ${f.detail}` : ""}
                      </Text>
                    </View>
                  ))}
                </>
              )}
              {result?.requiredActions && result.requiredActions.length > 0 && (
                <>
                  <Text style={styles.sectionLabel}>Required actions</Text>
                  {result.requiredActions.map((a, i) => (
                    <Text key={i} style={styles.actionItem}>
                      • {a}
                    </Text>
                  ))}
                </>
              )}
            </View>
          );
        })}

        <View style={styles.footer} fixed>
          <Text>Healthcare Assessment Engine</Text>
          <Text
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </View>
      </Page>
    </Document>
  );
}
