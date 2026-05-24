"use client";

import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { useLang } from "@/lib/i18n/LanguageContext";

const h2: React.CSSProperties = { fontSize: 20, fontWeight: 600, margin: "0 0 14px", color: "var(--ink)" };
const h3: React.CSSProperties = { fontSize: 15, fontWeight: 600, color: "var(--ink)", margin: "18px 0 8px" };
const para: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 10px" };
const li: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 4 };
const section: React.CSSProperties = { marginBottom: 32 };
const quoteStyle: React.CSSProperties = {
  borderLeft: "3px solid var(--accent)",
  background: "var(--card)",
  padding: "12px 16px",
  margin: "12px 0 6px",
  fontStyle: "italic",
  color: "var(--ink)",
  fontSize: 14.5,
  lineHeight: 1.6,
};
const quoteAttr: React.CSSProperties = { fontSize: 12.5, color: "var(--muted)", margin: "0 0 0 2px" };
const metaRow: React.CSSProperties = { display: "flex", gap: 8, fontSize: 13, color: "var(--muted)" };

export default function ClassificationPage() {
  const { t } = useLang();
  const c = t.classificationPage;
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          {c.kicker}
        </div>
        <h1 className="serif" style={{ fontSize: 38, fontWeight: 500, lineHeight: 1.1, margin: "0 0 14px" }}>
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
            marginBottom: 48,
            display: "grid",
            gap: 6,
          }}
        >
          <div style={metaRow}>
            <span style={{ fontWeight: 600, color: "var(--ink)" }}>{c.metaVersion}:</span>
            <span>{c.metaVersionValue}</span>
          </div>
          <div style={metaRow}>
            <span style={{ fontWeight: 600, color: "var(--ink)" }}>{c.metaDate}:</span>
            <span>{c.metaDateValue}</span>
          </div>
          <div style={metaRow}>
            <span style={{ fontWeight: 600, color: "var(--ink)" }}>{c.metaPreparedBy}:</span>
            <span>{c.metaPreparedByValue}</span>
          </div>
        </div>

        {c.sections.map((s, idx) => (
          <div key={`${idx}-${s.heading}`} style={section}>
            {s.heading ? <h2 style={h2}>{s.heading}</h2> : null}
            {s.paragraphs?.map((p, i) => (
              <p key={i} style={para}>{p}</p>
            ))}
            {s.bullets && s.bullets.length > 0 ? (
              <ul style={{ paddingLeft: 22, margin: "0 0 10px" }}>
                {s.bullets.map((b) => (
                  <li key={b} style={li}>{b}</li>
                ))}
              </ul>
            ) : null}
            {s.subsections?.map((sub) => (
              <div key={sub.heading} style={{ marginTop: 16 }}>
                <h3 style={h3}>{sub.heading}</h3>
                {sub.paragraphs?.map((p, i) => (
                  <p key={i} style={para}>{p}</p>
                ))}
                {sub.bullets && sub.bullets.length > 0 ? (
                  <ul style={{ paddingLeft: 22, margin: "0 0 10px" }}>
                    {sub.bullets.map((b) => (
                      <li key={b} style={li}>{b}</li>
                    ))}
                  </ul>
                ) : null}
                {sub.quote ? <blockquote style={quoteStyle}>{sub.quote}</blockquote> : null}
                {sub.quoteAttribution ? <p style={quoteAttr}>{sub.quoteAttribution}</p> : null}
              </div>
            ))}
          </div>
        ))}
      </section>
      <MarketingFooter />
    </>
  );
}
