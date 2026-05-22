import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  renderToBuffer,
  type DocumentProps,
} from "@react-pdf/renderer";
import type {
  SuiteRecord,
  AuditPlanOutput,
  StandardsMappingOutput,
  GapAnalysisOutput,
  RiskAssessmentOutput,
  PolicyOutput,
  SuiteFinding,
  ClauseRef,
} from "./types";

// =========================================================================
// Brand styles
// =========================================================================

const C = {
  ink: "#0b1220",
  ink2: "#1f2a3d",
  muted: "#5d6b80",
  muted2: "#8a96a8",
  line: "#e2e6ee",
  paper: "#ffffff",
  paper2: "#f7f8fb",
  accent: "#b94545",
  high: "#d49640",
  med: "#a89150",
  low: "#5a7a9f",
} as const;

const SEV_COLOR: Record<string, string> = {
  critical: C.accent,
  high: C.high,
  medium: C.med,
  low: C.low,
};

const styles = StyleSheet.create({
  page: {
    padding: 56,
    paddingTop: 64,
    paddingBottom: 56,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: C.ink,
    lineHeight: 1.5,
  },
  // Header
  brandRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: C.line,
  },
  brand: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: C.accent,
    letterSpacing: 1.5,
  },
  brandRight: {
    fontSize: 8,
    color: C.muted2,
  },
  toolLabel: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: C.accent,
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  title: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: C.ink,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 11,
    color: C.muted,
    marginBottom: 28,
  },
  h2: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: C.muted2,
    marginTop: 22,
    marginBottom: 10,
  },
  h3: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: C.ink,
    marginTop: 12,
    marginBottom: 4,
  },
  p: {
    fontSize: 10,
    color: C.ink2,
    marginBottom: 8,
  },
  kvRow: {
    flexDirection: "row",
    marginBottom: 3,
  },
  kvKey: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: C.muted,
    width: 110,
  },
  kvVal: {
    fontSize: 9.5,
    color: C.ink2,
    flex: 1,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 3,
    paddingLeft: 4,
  },
  bulletDot: {
    fontSize: 10,
    color: C.accent,
    marginRight: 6,
    width: 8,
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
    color: C.ink2,
  },
  findingCard: {
    marginBottom: 12,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: C.line,
    backgroundColor: C.paper2,
  },
  findingHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  sevPill: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 8,
    color: C.paper,
  },
  findingTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: C.ink,
    flex: 1,
  },
  findingDetail: {
    fontSize: 10,
    color: C.ink2,
    marginBottom: 6,
  },
  clauseLine: {
    fontSize: 9,
    color: C.muted,
    marginBottom: 2,
  },
  action: {
    fontSize: 10,
    color: C.ink,
    marginTop: 4,
  },
  // Table
  table: {
    marginBottom: 10,
    borderTopWidth: 1,
    borderTopColor: C.line,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: C.line,
    paddingVertical: 6,
  },
  tableHeader: {
    backgroundColor: C.paper2,
  },
  tableCell: {
    fontSize: 8.5,
    color: C.ink2,
    paddingHorizontal: 4,
  },
  tableCellHeader: {
    fontFamily: "Helvetica-Bold",
    color: C.muted,
    fontSize: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    paddingHorizontal: 4,
  },
  // Footer
  footer: {
    position: "absolute",
    left: 56,
    right: 56,
    bottom: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 8,
    color: C.muted2,
    borderTopWidth: 1,
    borderTopColor: C.line,
    paddingTop: 8,
  },
});

// =========================================================================
// Small primitive components
// =========================================================================

function Header({ toolLabel, title, subtitle, generatedAt }: { toolLabel: string; title: string; subtitle?: string; generatedAt: string }) {
  return (
    <View>
      <View style={styles.brandRow}>
        <Text style={styles.brand}>MEDIREADY SUITE</Text>
        <Text style={styles.brandRight}>{new Date(generatedAt).toLocaleString()}</Text>
      </View>
      <Text style={styles.toolLabel}>{toolLabel}</Text>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

function Footer() {
  return (
    <View style={styles.footer} fixed>
      <Text>MediReady Suite · health.usesmpt.com</Text>
      <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </View>
  );
}

function KV({ rows }: { rows: { key: string; value: string }[] }) {
  return (
    <View>
      {rows.map((r, i) => (
        <View key={i} style={styles.kvRow} wrap={false}>
          <Text style={styles.kvKey}>{r.key}</Text>
          <Text style={styles.kvVal}>{r.value}</Text>
        </View>
      ))}
    </View>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <View>
      {items.map((it, i) => (
        <View key={i} style={styles.bullet}>
          <Text style={styles.bulletDot}>›</Text>
          <Text style={styles.bulletText}>{it}</Text>
        </View>
      ))}
    </View>
  );
}

function FindingCard({ f }: { f: SuiteFinding }) {
  return (
    <View style={[styles.findingCard, { borderLeftColor: SEV_COLOR[f.severity] ?? C.line }]} wrap={false}>
      <View style={styles.findingHeader}>
        <Text style={[styles.sevPill, { backgroundColor: SEV_COLOR[f.severity] ?? C.muted }]}>
          {f.severity.toUpperCase()}
        </Text>
        <Text style={styles.findingTitle}>{f.title}</Text>
      </View>
      <Text style={styles.findingDetail}>{f.detail}</Text>
      {f.clauses?.length > 0 && (
        <View>
          {f.clauses.map((c, i) => (
            <Text key={i} style={styles.clauseLine}>
              {c.framework} {c.citation}{c.note ? ` — ${c.note}` : ""}
            </Text>
          ))}
        </View>
      )}
      <Text style={styles.action}>
        <Text style={{ fontFamily: "Helvetica-Bold" }}>Action: </Text>
        {f.requiredAction}
      </Text>
      {f.suggestedRemediation && (
        <Text style={{ fontSize: 9, color: C.muted, fontStyle: "italic", marginTop: 2 }}>
          Remediation: {f.suggestedRemediation}
        </Text>
      )}
    </View>
  );
}

function ClauseList({ clauses }: { clauses: ClauseRef[] }) {
  return (
    <View>
      {clauses.map((c, i) => (
        <View key={i} style={{ marginBottom: 6 }} wrap={false}>
          <Text style={{ fontSize: 10, fontFamily: "Helvetica-Bold", color: C.ink }}>
            {c.framework} <Text style={{ color: C.accent }}>{c.citation}</Text>
          </Text>
          {c.note && <Text style={{ fontSize: 9.5, color: C.ink2, marginTop: 1 }}>{c.note}</Text>}
        </View>
      ))}
    </View>
  );
}

// =========================================================================
// Per-tool documents
// =========================================================================

function AuditPlanDoc({ record }: { record: SuiteRecord }) {
  const input = JSON.parse(record.inputJson) as Record<string, string>;
  const o = JSON.parse(record.outputJson) as AuditPlanOutput;
  const subtitle = [input.organisationType, input.scope, input.period].filter(Boolean).join(" · ");
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <Header toolLabel="AUDIT PLAN" title={`Audit Plan — ${input.organisation ?? "Untitled"}`} subtitle={subtitle} generatedAt={record.createdAt} />

        <Text style={styles.h2}>Engagement</Text>
        <KV
          rows={[
            { key: "Organisation", value: input.organisation ?? "" },
            { key: "Type", value: input.organisationType ?? "" },
            { key: "Scope", value: input.scope ?? "" },
            { key: "Period", value: input.period ?? "" },
            ...(input.auditor ? [{ key: "Lead auditor", value: input.auditor }] : []),
          ]}
        />

        <Text style={styles.h2}>Scope</Text>
        <Text style={styles.p}>{o.scope}</Text>

        <Text style={styles.h2}>Objectives</Text>
        <BulletList items={o.objectives ?? []} />

        <Text style={styles.h2}>Methodology</Text>
        <Text style={styles.p}>{o.methodology}</Text>

        <Text style={styles.h2}>Schedule</Text>
        {o.schedule?.map((s, i) => (
          <View key={i} style={{ marginBottom: 6 }} wrap={false}>
            <Text style={{ fontSize: 10.5, fontFamily: "Helvetica-Bold" }}>{s.phase} — {s.days} day{s.days === 1 ? "" : "s"}</Text>
            <Text style={{ fontSize: 10, color: C.muted }}>{s.description}</Text>
          </View>
        ))}

        <Text style={styles.h2}>Checklist</Text>
        {o.checklist?.map((c, i) => (
          <View key={i} style={{ marginBottom: 10 }} wrap={false}>
            <Text style={styles.h3}>{c.area}</Text>
            <BulletList items={c.items ?? []} />
          </View>
        ))}

        <Text style={styles.h2}>Risk Areas</Text>
        {(o.riskAreas ?? []).map((f, i) => <FindingCard key={i} f={f} />)}

        <Footer />
      </Page>
    </Document>
  );
}

function StandardsMappingDoc({ record }: { record: SuiteRecord }) {
  const o = JSON.parse(record.outputJson) as StandardsMappingOutput;
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <Header
          toolLabel="STANDARDS MAPPING"
          title="Standards Mapping"
          subtitle={o.query.length > 120 ? o.query.slice(0, 117) + "…" : o.query}
          generatedAt={record.createdAt}
        />

        <Text style={styles.h2}>Query</Text>
        <Text style={styles.p}>{o.query}</Text>

        <Text style={styles.h2}>Applicable Clauses</Text>
        <ClauseList clauses={o.clauses ?? []} />

        <Text style={styles.h2}>Notes</Text>
        <Text style={styles.p}>{o.notes}</Text>

        <Footer />
      </Page>
    </Document>
  );
}

function GapAnalysisDoc({ record }: { record: SuiteRecord }) {
  const input = JSON.parse(record.inputJson) as { documentType: string; framework: string; context: string };
  const o = JSON.parse(record.outputJson) as GapAnalysisOutput;
  const title = `Document Gap Analysis — ${record.sourceFileName ?? input.documentType}`;
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <Header toolLabel="GAP ANALYSIS" title={title} subtitle={`${input.documentType} · ${input.framework}`} generatedAt={record.createdAt} />

        <Text style={styles.h2}>Input</Text>
        <KV
          rows={[
            { key: "Document type", value: input.documentType },
            { key: "Framework", value: input.framework },
            ...(input.context ? [{ key: "Context", value: input.context }] : []),
            ...(record.sourceFileName ? [{ key: "Source file", value: record.sourceFileName }] : []),
          ]}
        />

        <Text style={styles.h2}>Document Summary</Text>
        <Text style={styles.p}>{o.documentSummary}</Text>

        <Text style={styles.h2}>Sections Present</Text>
        <BulletList items={o.presentSections ?? []} />

        <Text style={styles.h2}>Missing or Weak Sections</Text>
        <BulletList items={o.missingSections ?? []} />

        <Text style={styles.h2}>Findings</Text>
        {(o.findings ?? []).map((f, i) => <FindingCard key={i} f={f} />)}

        <Footer />
      </Page>
    </Document>
  );
}

function RiskAssessmentDoc({ record }: { record: SuiteRecord }) {
  const o = JSON.parse(record.outputJson) as RiskAssessmentOutput;
  const widths = [80, 86, 86, 50, 50, 60, 60, 80];
  return (
    <Document>
      <Page size="LETTER" orientation="landscape" style={styles.page}>
        <Header toolLabel="HIPAA RISK ASSESSMENT" title={`Risk Assessment — ${o.organisation}`} subtitle={o.scope} generatedAt={record.createdAt} />

        <Text style={styles.h2}>Summary</Text>
        <KV
          rows={[
            { key: "Critical", value: String(o.summary?.criticalCount ?? 0) },
            { key: "High", value: String(o.summary?.highCount ?? 0) },
            { key: "Medium", value: String(o.summary?.mediumCount ?? 0) },
            { key: "Low", value: String(o.summary?.lowCount ?? 0) },
          ]}
        />

        <Text style={styles.h2}>Methodology</Text>
        <Text style={styles.p}>{o.methodology}</Text>

        {o.assumptions?.length ? (
          <>
            <Text style={styles.h2}>Assumptions</Text>
            <BulletList items={o.assumptions} />
          </>
        ) : null}

        <Text style={styles.h2}>Risk Register</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableCellHeader, { width: widths[0] }]}>Asset</Text>
            <Text style={[styles.tableCellHeader, { width: widths[1] }]}>Threat</Text>
            <Text style={[styles.tableCellHeader, { width: widths[2] }]}>Vulnerability</Text>
            <Text style={[styles.tableCellHeader, { width: widths[3] }]}>Likeli.</Text>
            <Text style={[styles.tableCellHeader, { width: widths[4] }]}>Impact</Text>
            <Text style={[styles.tableCellHeader, { width: widths[5] }]}>Inherent</Text>
            <Text style={[styles.tableCellHeader, { width: widths[6] }]}>Residual</Text>
            <Text style={[styles.tableCellHeader, { width: widths[7] }]}>Recommended controls</Text>
          </View>
          {(o.rows ?? []).map((r, i) => (
            <View key={i} style={styles.tableRow} wrap={false}>
              <Text style={[styles.tableCell, { width: widths[0] }]}>{r.asset}</Text>
              <Text style={[styles.tableCell, { width: widths[1] }]}>{r.threat}</Text>
              <Text style={[styles.tableCell, { width: widths[2] }]}>{r.vulnerability}</Text>
              <Text style={[styles.tableCell, { width: widths[3], color: SEV_COLOR[r.likelihood] }]}>{r.likelihood?.toUpperCase()}</Text>
              <Text style={[styles.tableCell, { width: widths[4], color: SEV_COLOR[r.impact] }]}>{r.impact?.toUpperCase()}</Text>
              <Text style={[styles.tableCell, { width: widths[5], color: SEV_COLOR[r.inherentRisk], fontFamily: "Helvetica-Bold" }]}>{r.inherentRisk?.toUpperCase()}</Text>
              <Text style={[styles.tableCell, { width: widths[6], color: SEV_COLOR[r.residualRisk], fontFamily: "Helvetica-Bold" }]}>{r.residualRisk?.toUpperCase()}</Text>
              <Text style={[styles.tableCell, { width: widths[7] }]}>{(r.recommendedControls ?? []).join("; ")}</Text>
            </View>
          ))}
        </View>

        {o.summary?.topRecommendations?.length ? (
          <>
            <Text style={styles.h2}>Top recommendations</Text>
            <BulletList items={o.summary.topRecommendations} />
          </>
        ) : null}

        <Footer />
      </Page>
    </Document>
  );
}

function PolicyDoc({ record }: { record: SuiteRecord }) {
  const o = JSON.parse(record.outputJson) as PolicyOutput;
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <Header toolLabel="POLICY / SOP" title={o.policyTitle} subtitle={`${o.policyId} · v${o.version} · effective ${o.effectiveDate}`} generatedAt={record.createdAt} />

        <Text style={styles.h2}>Document Control</Text>
        <KV
          rows={[
            { key: "Policy ID", value: o.policyId },
            { key: "Version", value: o.version },
            { key: "Effective", value: o.effectiveDate },
            { key: "Review cycle", value: o.reviewCycle },
            { key: "Owner", value: o.owner },
          ]}
        />

        {(o.sections ?? []).map((s, i) => (
          <View key={i} wrap={false}>
            <Text style={styles.h2}>{s.heading}</Text>
            {s.body && <Text style={styles.p}>{s.body}</Text>}
            {s.bullets?.length ? <BulletList items={s.bullets} /> : null}
          </View>
        ))}

        {o.references?.length ? (
          <>
            <Text style={styles.h2}>References</Text>
            <ClauseList clauses={o.references} />
          </>
        ) : null}

        <Footer />
      </Page>
    </Document>
  );
}

// =========================================================================
// Dispatcher
// =========================================================================

export async function recordToPdf(record: SuiteRecord): Promise<Buffer> {
  let element: React.ReactElement<DocumentProps>;
  if (record.tool === "audit-plan") element = <AuditPlanDoc record={record} />;
  else if (record.tool === "standards-mapping") element = <StandardsMappingDoc record={record} />;
  else if (record.tool === "gap-analysis") element = <GapAnalysisDoc record={record} />;
  else if (record.tool === "risk-assessment") element = <RiskAssessmentDoc record={record} />;
  else if (record.tool === "policy") element = <PolicyDoc record={record} />;
  else throw new Error(`Unknown tool: ${(record as SuiteRecord).tool}`);
  return await renderToBuffer(element);
}
