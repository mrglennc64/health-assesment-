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

const h2: React.CSSProperties = { fontSize: 20, fontWeight: 600, margin: "32px 0 14px", color: "var(--ink)" };
const h3: React.CSSProperties = { fontSize: 15, fontWeight: 600, color: "var(--ink)", margin: "18px 0 8px" };
const h4: React.CSSProperties = { fontSize: 13.5, fontWeight: 600, color: "var(--ink)", margin: "14px 0 6px", letterSpacing: "0.01em" };
const para: React.CSSProperties = { fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 10px" };
const li: React.CSSProperties = { fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.65, marginBottom: 4 };
const sectionStyle: React.CSSProperties = { marginBottom: 28 };
const note: React.CSSProperties = {
  fontSize: 13.5,
  color: "var(--muted)",
  lineHeight: 1.6,
  background: "var(--card)",
  borderLeft: "3px solid var(--line)",
  padding: "10px 14px",
  margin: "10px 0",
};
const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: 13.5,
  margin: "8px 0 12px",
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

export default function DpaPage() {
  const { t } = useLang();
  const d = t.dpaPage;
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 880, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          {d.kicker}
        </div>
        <h1 className="serif" style={{ fontSize: 38, fontWeight: 500, lineHeight: 1.1, margin: "0 0 12px" }}>
          {d.title}
        </h1>
        <p style={{ fontSize: 14, color: "var(--muted)", margin: "0 0 28px" }}>
          {d.subtitle}
        </p>

        <div
          style={{
            border: "1px solid var(--line)",
            borderRadius: 10,
            padding: "16px 20px",
            background: "var(--card)",
            marginBottom: 40,
          }}
        >
          <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 6 }}>{d.parties.lead}</div>
          <div style={{ fontSize: 14, color: "var(--ink)", marginBottom: 4 }}>{d.parties.controller}</div>
          <div style={{ fontSize: 13, color: "var(--muted)", margin: "6px 0" }}>{d.parties.and}</div>
          <div style={{ fontSize: 14, color: "var(--ink)", marginBottom: 12 }}>{d.parties.processor}</div>
          <div style={{ fontSize: 13, color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{d.effectiveLabel}:</strong> {d.effectiveValue}
          </div>
        </div>

        {d.sections.map((s) => (
          <div key={s.heading} style={sectionStyle}>
            <h2 style={h2}>{s.heading}</h2>
            {s.blocks.map((block, i) => renderBlock(block as Block, i))}
          </div>
        ))}

        <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--line)" }}>
          <h2 style={{ ...h2, fontSize: 22 }}>{d.annexHeading}</h2>
          {d.annexParts.map((part) => (
            <div key={part.heading} style={sectionStyle}>
              <h3 style={{ ...h3, fontSize: 16, marginTop: 24 }}>{part.heading}</h3>
              {part.intro ? <p style={para}>{part.intro}</p> : null}
              {part.blocks.map((block, i) => renderBlock(block as Block, i))}
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: 12, color: "var(--muted-2)", letterSpacing: "0.14em", marginTop: 48, textTransform: "uppercase" }}>
          — {d.endOfAgreement} —
        </p>
      </section>
      <MarketingFooter />
    </>
  );
}
