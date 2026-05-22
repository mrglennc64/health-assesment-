import type { SuiteRecord, AuditPlanOutput, StandardsMappingOutput, GapAnalysisOutput } from "./types";
import { renderDocx, type DocxSpec, type DocxBlock } from "./docx";

function findingBlocks(label: string, findings: { severity: string; title: string; detail: string; clauses: { framework: string; citation: string; note?: string }[]; requiredAction: string; suggestedRemediation?: string }[]): DocxBlock[] {
  const out: DocxBlock[] = [{ type: "h2", text: label }];
  if (findings.length === 0) {
    out.push({ type: "p", text: "(None)" });
    return out;
  }
  for (const f of findings) {
    out.push({ type: "h3", text: `[${f.severity.toUpperCase()}] ${f.title}` });
    out.push({ type: "p", text: f.detail });
    if (f.clauses?.length) {
      out.push({
        type: "kv",
        rows: f.clauses.map((c) => ({
          key: c.framework,
          value: `${c.citation}${c.note ? ` — ${c.note}` : ""}`,
        })),
      });
    }
    out.push({ type: "bold", text: `Required action: ${f.requiredAction}` });
    if (f.suggestedRemediation) {
      out.push({ type: "p", text: `Remediation: ${f.suggestedRemediation}` });
    }
  }
  return out;
}

function renderAuditPlan(record: SuiteRecord): DocxSpec {
  const input = JSON.parse(record.inputJson) as Record<string, string>;
  const output = JSON.parse(record.outputJson) as AuditPlanOutput;
  const blocks: DocxBlock[] = [
    { type: "h2", text: "Engagement" },
    {
      type: "kv",
      rows: [
        { key: "Organisation", value: input.organisation ?? "" },
        { key: "Type", value: input.organisationType ?? "" },
        { key: "Scope", value: input.scope ?? "" },
        { key: "Period", value: input.period ?? "" },
        ...(input.auditor ? [{ key: "Lead auditor", value: input.auditor }] : []),
      ],
    },
    { type: "h2", text: "Scope" },
    { type: "p", text: output.scope },
    { type: "h2", text: "Objectives" },
    { type: "list", items: output.objectives ?? [] },
    { type: "h2", text: "Methodology" },
    { type: "p", text: output.methodology },
    { type: "h2", text: "Schedule" },
    ...((output.schedule ?? []).flatMap((s) => [
      { type: "bold" as const, text: `${s.phase} — ${s.days} day${s.days === 1 ? "" : "s"}` },
      { type: "p" as const, text: s.description },
    ])),
    { type: "h2", text: "Checklist" },
    ...((output.checklist ?? []).flatMap((c) => [
      { type: "h3" as const, text: c.area },
      { type: "list" as const, items: c.items ?? [] },
    ])),
    ...findingBlocks("Risk Areas", output.riskAreas ?? []),
  ];
  return {
    title: `Audit Plan — ${input.organisation ?? "Untitled"}`,
    subtitle: `${input.organisationType ?? ""} · ${input.scope ?? ""} · ${input.period ?? ""}`.replace(/^\s*·\s*|\s*·\s*$/g, ""),
    generatedAt: record.createdAt,
    blocks,
  };
}

function renderStandardsMapping(record: SuiteRecord): DocxSpec {
  const input = JSON.parse(record.inputJson) as { query: string };
  const output = JSON.parse(record.outputJson) as StandardsMappingOutput;
  return {
    title: "Standards Mapping",
    subtitle: input.query.slice(0, 120),
    generatedAt: record.createdAt,
    blocks: [
      { type: "h2", text: "Query" },
      { type: "p", text: input.query },
      { type: "h2", text: "Applicable Clauses" },
      ...(output.clauses?.length
        ? [
            {
              type: "kv" as const,
              rows: output.clauses.map((c) => ({
                key: `${c.framework} ${c.citation}`,
                value: c.note ?? "",
              })),
            },
          ]
        : [{ type: "p" as const, text: "(no matches)" }]),
      { type: "h2", text: "Notes" },
      { type: "p", text: output.notes ?? "" },
    ],
  };
}

function renderGapAnalysis(record: SuiteRecord): DocxSpec {
  const input = JSON.parse(record.inputJson) as { documentType: string };
  const output = JSON.parse(record.outputJson) as GapAnalysisOutput;
  return {
    title: `Document Gap Analysis — ${record.sourceFileName ?? "Pasted text"}`,
    subtitle: input.documentType,
    generatedAt: record.createdAt,
    blocks: [
      { type: "h2", text: "Document Summary" },
      { type: "p", text: output.documentSummary },
      { type: "h2", text: "Sections Present" },
      output.presentSections?.length
        ? { type: "list", items: output.presentSections }
        : { type: "p", text: "(none detected)" },
      { type: "h2", text: "Missing or Weak Sections" },
      output.missingSections?.length
        ? { type: "list", items: output.missingSections }
        : { type: "p", text: "(none detected)" },
      ...findingBlocks("Findings", output.findings ?? []),
    ],
  };
}

export async function recordToDocx(record: SuiteRecord): Promise<Buffer> {
  let spec: DocxSpec;
  if (record.tool === "audit-plan") spec = renderAuditPlan(record);
  else if (record.tool === "standards-mapping") spec = renderStandardsMapping(record);
  else if (record.tool === "gap-analysis") spec = renderGapAnalysis(record);
  else throw new Error(`Unknown tool: ${(record as SuiteRecord).tool}`);
  return renderDocx(spec);
}
