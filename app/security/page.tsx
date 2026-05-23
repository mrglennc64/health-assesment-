"use client";

import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { useLang } from "@/lib/i18n/LanguageContext";

const h2: React.CSSProperties = { fontSize: 20, fontWeight: 600, margin: "0 0 12px" };
const para: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, margin: 0 };
const li: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 4 };
const block: React.CSSProperties = { marginBottom: 36 };

export default function SecurityPage() {
  const { t } = useLang();
  const s = t.securityPage;
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          {s.kicker}
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 48px" }}>
          {s.title}
        </h1>

        {s.sections.map((sec) => (
          <div key={sec.heading} style={block}>
            <h2 style={h2}>{sec.heading}</h2>
            {sec.body && <p style={para}>{sec.body}</p>}
            {sec.bullets && (
              <ul style={{ paddingLeft: 22, margin: 0 }}>
                {sec.bullets.map((b) => (
                  <li key={b} style={li}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
      <MarketingFooter />
    </>
  );
}
