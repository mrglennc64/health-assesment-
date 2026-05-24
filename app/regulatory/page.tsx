"use client";

import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { useLang } from "@/lib/i18n/LanguageContext";

const h2: React.CSSProperties = { fontSize: 20, fontWeight: 600, margin: "0 0 12px", color: "var(--ink)" };
const h3: React.CSSProperties = { fontSize: 15, fontWeight: 600, color: "var(--ink)", margin: "20px 0 8px" };
const para: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 10px" };
const li: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 4 };
const block: React.CSSProperties = { marginBottom: 36 };
const subBlock: React.CSSProperties = { marginBottom: 18 };
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

export default function RegulatoryPage() {
  const { t } = useLang();
  const r = t.regulatoryPage;
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          {r.kicker}
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 14px" }}>
          {r.title}
        </h1>
        <p style={{ fontSize: 13.5, color: "var(--muted)", margin: "0 0 48px", letterSpacing: "0.02em" }}>
          {r.subtitle}
        </p>

        <div style={block}>
          <h2 style={h2}>{r.leadHeading}</h2>
          <p style={para}>{r.leadPara1}</p>
          <p style={para}>{r.leadPara2}</p>
        </div>

        <div style={block}>
          <h2 style={h2}>{r.intendedUseHeading}</h2>
          <p style={para}>{r.intendedUseIntro}</p>
          <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
            {r.intendedUseItems.map((item) => (
              <div
                key={item.label}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--line)",
                  borderRadius: 10,
                  padding: "16px 18px",
                }}
              >
                <div className="serif" style={{ fontSize: 16, fontWeight: 500, color: "var(--ink)", marginBottom: 6 }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.55 }}>
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
          <p style={{ ...para, marginTop: 18 }}>{r.intendedUseOutro}</p>
        </div>

        <div style={block}>
          <h2 style={h2}>{r.classificationHeading}</h2>

          <div style={subBlock}>
            <h3 style={h3}>{r.mdrHeading}</h3>
            <p style={para}>{r.mdrBody1}</p>
            <blockquote style={quoteStyle}>{r.mdrQuote}</blockquote>
            <p style={quoteAttr}>{r.mdrQuoteAttribution}</p>
            <p style={{ ...para, marginTop: 10 }}>{r.mdrConclusion}</p>
          </div>

          <div style={subBlock}>
            <h3 style={h3}>{r.nmiHeading}</h3>
            <p style={para}>{r.nmiIntro}</p>
            <ul style={{ paddingLeft: 22, margin: "0 0 10px" }}>
              {r.nmiCriteria.map((c) => (
                <li key={c} style={li}>{c}</li>
              ))}
            </ul>
            <p style={{ ...para, fontWeight: 600 }}>{r.nmiSupportLead}</p>
            <p style={para}>{r.nmiSupportBody}</p>
            <p style={para}>{r.nmiConclusion}</p>
          </div>
        </div>

        <div style={block}>
          <h2 style={h2}>{r.gdprHeading}</h2>
          <p style={para}>{r.gdprIntro}</p>
          {r.gdprBlocks.map((b) => (
            <div key={b.heading} style={{ marginTop: 14 }}>
              <h3 style={h3}>{b.heading}</h3>
              <p style={para}>{b.body}</p>
            </div>
          ))}
        </div>

        <div style={block}>
          <h2 style={h2}>{r.nis2Heading}</h2>
          <p style={para}>{r.nis2Intro}</p>
          <ul style={{ paddingLeft: 22, margin: "0 0 10px" }}>
            {r.nis2Criteria.map((c) => (
              <li key={c} style={li}>{c}</li>
            ))}
          </ul>
          <p style={para}>{r.nis2Conclusion}</p>
        </div>

        <div style={block}>
          <h2 style={h2}>{r.ehdsHeading}</h2>
          <p style={para}>{r.ehdsBody}</p>
        </div>

        <div style={block}>
          <h2 style={h2}>{r.actionsHeading}</h2>
          {r.actionsItems.map((item) => (
            <div key={item.heading} style={subBlock}>
              <h3 style={h3}>{item.heading}</h3>
              <p style={para}>{item.body}</p>
            </div>
          ))}
        </div>

        <div style={block}>
          <h2 style={h2}>{r.summaryHeading}</h2>
          <p style={para}>{r.summaryBody}</p>
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
