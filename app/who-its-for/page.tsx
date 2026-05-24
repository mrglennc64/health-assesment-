"use client";

import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { useLang } from "@/lib/i18n/LanguageContext";

export default function WhoItsForPage() {
  const { t } = useLang();
  const w = t.whoItsForPage;
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          {w.kicker}
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 32px" }}>
          {w.title}
        </h1>

        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14, listStyle: "none", padding: 0, margin: 0 }}>
          {w.items.map((item) => (
            <li
              key={item.label}
              style={{
                background: "var(--card)",
                border: "1px solid var(--line)",
                borderRadius: 10,
                padding: "20px 22px",
              }}
            >
              <h3 className="serif" style={{ fontSize: 18, fontWeight: 500, margin: "0 0 8px", color: "var(--ink)" }}>
                {item.label}
              </h3>
              <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
                {item.sub}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <MarketingFooter />
    </>
  );
}
