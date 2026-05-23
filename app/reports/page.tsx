"use client";

import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { useLang } from "@/lib/i18n/LanguageContext";

export default function ReportsPage() {
  const { t } = useLang();
  const r = t.reportsPage;
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "120px 32px", textAlign: "center" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 14 }}>
          {r.kicker}
        </div>
        <h1 className="serif" style={{ fontSize: 40, fontWeight: 500, lineHeight: 1.05, margin: "0 0 18px" }}>
          {r.title}
        </h1>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.65, marginBottom: 28 }}>
          {r.body}
        </p>
        <p style={{ fontSize: 13.5, color: "var(--muted-2)" }}>
          {r.downloadsLine}
        </p>
      </section>
      <MarketingFooter />
    </>
  );
}
