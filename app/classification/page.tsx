"use client";

import type { ReactElement } from "react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { useLang } from "@/lib/i18n/LanguageContext";

type Block =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "dl"; items: { term: string; def: string }[] }
  | { kind: "h3"; text: string }
  | { kind: "h4"; text: string }
  | { kind: "table"; headers: string[]; rows: string[][] }
  | { kind: "note"; text: string };

const h2: React.CSSProperties = { fontSize: 22, fontWeight: 600, margin: "32px 0 14px", color: "var(--ink)", scrollMarginTop: 80 };
const h3: React.CSSProperties = { fontSize: 15, fontWeight: 600, color: "var(--ink)", margin: "18px 0 8px" };
const h4: React.CSSProperties = { fontSize: 13.5, fontWeight: 600, color: "var(--ink)", margin: "14px 0 6px" };
const para: React.CSSProperties = { fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 10px" };
const li: React.CSSProperties = { fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.65, marginBottom: 4 };
const sectionStyle: React.CSSProperties = { marginBottom: 28 };
const note: React.CSSProperties = {
  fontSize: 14,
  color: "var(--ink)",
  lineHeight: 1.6,
  background: "var(--card)",
  borderLeft: "3px solid var(--accent)",
  padding: "12px 16px",
  margin: "12px 0",
  fontStyle: "italic",
};
const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: 13.5,
  margin: "10px 0 14px",
  border: "1px solid var(--line)",
};
const th: React.CSSProperties = {
  textAlign: "left",
  padding: "10px 12px",
  background: "var(--card)",
  borderBottom: "1px solid var(--line)",
  fontWeight: 600,
  color: "var(--ink)",
  fontSize: 12.5,
  letterSpacing: "0.02em",
};
const td: React.CSSProperties = {
  padding: "10px 12px",
  borderBottom: "1px solid var(--line)",
  color: "var(--ink-2)",
  verticalAlign: "top",
  lineHeight: 1.55,
};

function sectionId(idx: number): string {
  return `sec-${idx + 1}`;
}

function renderBlock(block: Block, idx: number): ReactElement {
  switch (block.kind) {
    case "p":
      return <p key={idx} style={para}>{block.text}</p>;
    case "ul":
      return (
        <ul key={idx} style={{ paddingLeft: 22, margin: "0 0 10px" }}>
          {block.items.map((item) => <li key={item} style={li}>{item}</li>)}
        </ul>
      );
    case "ol":
      return (
        <ol key={idx} style={{ paddingLeft: 22, margin: "0 0 10px" }}>
          {block.items.map((item) => <li key={item} style={li}>{item}</li>)}
        </ol>
      );
    case "dl":
      return (
        <dl key={idx} style={{ margin: "0 0 12px" }}>
          {block.items.map((item) => (
            <div key={item.term} style={{ marginBottom: 8 }}>
              <dt style={{ fontSize: 14.5, color: "var(--ink)", fontWeight: 600, display: "inline", marginRight: 4 }}>
                {item.term} —
              </dt>
              <dd style={{ fontSize: 14.5, color: "var(--ink-2)", display: "inline", margin: 0, lineHeight: 1.65 }}>
                {item.def}
              </dd>
            </div>
          ))}
        </dl>
      );
    case "h3":
      return <h3 key={idx} style={h3}>{block.text}</h3>;
    case "h4":
      return <h4 key={idx} style={h4}>{block.text}</h4>;
    case "note":
      return <p key={idx} style={note}>{block.text}</p>;
    case "table":
      return (
        <div key={idx} style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                {block.headers.map((header) => <th key={header} style={th}>{header}</th>)}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rIdx) => (
                <tr key={rIdx}>
                  {row.map((cell, cIdx) => <td key={cIdx} style={td}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function ClassificationPage() {
  const { t } = useLang();
  const c = t.classificationPage;
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 880, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          {c.kicker}
        </div>
        <h1 className="serif" style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.15, margin: "0 0 14px" }}>
          {c.title}
        </h1>
        <p style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.55, margin: "0 0 24px" }}>
          {c.verdict}
        </p>

        <div
          style={{
            border: "1px solid var(--line)",
            borderRadius: 10,
            padding: "14px 18px",
            background: "var(--card)",
            marginBottom: 36,
            display: "grid",
            gap: 6,
          }}
        >
          <div style={{ fontSize: 13, color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{c.metaVersion}:</strong> {c.metaVersionValue}
          </div>
          <div style={{ fontSize: 13, color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{c.metaDate}:</strong> {c.metaDateValue}
          </div>
          <div style={{ fontSize: 13, color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{c.metaPreparedBy}:</strong> {c.metaPreparedByValue}
          </div>
        </div>

        <div
          style={{
            border: "1px solid var(--line)",
            borderRadius: 10,
            padding: "18px 22px",
            marginBottom: 48,
          }}
        >
          <h2 className="mono" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: "var(--muted-2)", margin: "0 0 12px", textTransform: "uppercase" }}>
            {c.tocHeading}
          </h2>
          <ol style={{ paddingLeft: 22, margin: 0 }}>
            {c.sections.map((s, idx) => (
              <li key={s.heading} style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 2 }}>
                <a href={`#${sectionId(idx)}`} style={{ color: "var(--ink-2)", textDecoration: "none" }}>
                  {s.heading.replace(/^\d+\.\s*/, "")}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {c.sections.map((s, idx) => (
          <div key={s.heading} id={sectionId(idx)} style={sectionStyle}>
            <h2 style={h2}>{s.heading}</h2>
            {s.blocks.map((block, i) => renderBlock(block as Block, i))}
          </div>
        ))}

        <div style={{ borderTop: "1px solid var(--line)", marginTop: 56, paddingTop: 24, fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>
          <div><strong style={{ color: "var(--ink)" }}>{c.metaPreparedBy}:</strong> {c.metaPreparedByValue}</div>
          <div><strong style={{ color: "var(--ink)" }}>{c.metaVersion}:</strong> {c.metaVersionValue}</div>
          <div><strong style={{ color: "var(--ink)" }}>{c.metaDate}:</strong> {c.metaDateValue}</div>
        </div>

        <p style={{ textAlign: "center", fontSize: 12, color: "var(--muted-2)", letterSpacing: "0.14em", marginTop: 32, textTransform: "uppercase" }}>
          — {c.endLabel} —
        </p>
      </section>
      <MarketingFooter />
    </>
  );
}
