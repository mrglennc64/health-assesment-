"use client";

import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { useLang } from "@/lib/i18n/LanguageContext";

const h2: React.CSSProperties = { fontSize: 20, fontWeight: 600, margin: "0 0 12px" };
const h3: React.CSSProperties = { fontSize: 14, fontWeight: 600, color: "var(--ink)", margin: "16px 0 6px" };
const para: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, margin: 0 };
const li: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 4 };
const block: React.CSSProperties = { marginBottom: 36 };

export default function PrivacyPage() {
  const { t } = useLang();
  const p = t.privacyPage;
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          {p.kicker}
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 48px" }}>
          {p.title}
        </h1>

        <div style={block}>
          <h2 style={h2}>{p.noPhiHeading}</h2>
          <p style={para}>{p.noPhiBody}</p>
        </div>

        <div style={block}>
          <h2 style={h2}>{p.inputsHeading}</h2>
          {p.inputsList.map((item) => (
            <div key={item.heading}>
              <h3 style={h3}>{item.heading}</h3>
              <p style={para}>{item.body}</p>
            </div>
          ))}
        </div>

        <div style={block}>
          <h2 style={h2}>{p.collectHeading}</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            {p.collectList.map((item) => (
              <li key={item} style={li}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={block}>
          <h2 style={h2}>{p.notCollectHeading}</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            {p.notCollectList.map((item) => (
              <li key={item} style={li}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={block}>
          <h2 style={h2}>{p.thirdPartyHeading}</h2>
          <p style={para}>{p.thirdPartyBody}</p>
        </div>

        <div style={block}>
          <h2 style={h2}>{p.deleteHeading}</h2>
          <p style={para}>{p.deleteBody}</p>
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
