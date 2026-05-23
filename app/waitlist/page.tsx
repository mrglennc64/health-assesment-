"use client";

import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { WaitlistForm } from "@/components/site/WaitlistForm";
import { useLang } from "@/lib/i18n/LanguageContext";

export default function WaitlistPage() {
  const { t } = useLang();
  const w = t.waitlistPage;
  return (
    <>
      <MarketingNav />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "72px 32px" }}>
        <div
          className="mono"
          style={{
            fontSize: 11,
            color: "var(--accent)",
            fontWeight: 600,
            letterSpacing: "0.14em",
            marginBottom: 14,
          }}
        >
          {w.kicker}
        </div>
        <h1
          className="serif"
          style={{
            fontSize: 56,
            fontWeight: 500,
            lineHeight: 1.02,
            margin: "0 0 18px",
          }}
        >
          {w.title}
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "var(--muted)",
            lineHeight: 1.6,
            marginBottom: 44,
          }}
        >
          {w.body}
        </p>
        <WaitlistForm />
      </div>
      <MarketingFooter />
    </>
  );
}
