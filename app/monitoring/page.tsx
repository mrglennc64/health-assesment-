"use client";

import Link from "next/link";
import { ArrowRight, Activity, Bell, LineChart, ShieldCheck } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { Button } from "@/components/ui/primitives";
import { useLang } from "@/lib/i18n/LanguageContext";

const FEATURE_ICONS = [Activity, LineChart, Bell, ShieldCheck];

export default function MonitoringPage() {
  const { t } = useLang();
  const m = t.monitoring;
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 980, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          {m.kicker}
        </div>
        <h1 className="serif" style={{ fontSize: 48, fontWeight: 500, lineHeight: 1.05, margin: "0 0 18px" }}>
          {m.title}
        </h1>
        <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.65, marginBottom: 48, maxWidth: 680 }}>
          {m.body}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 48 }}>
          {m.features.map((f, i) => {
            const Icon = FEATURE_ICONS[i];
            return (
              <div
                key={f.title}
                className="lift"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--line)",
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                <Icon size={22} strokeWidth={1.5} color="var(--accent)" style={{ marginBottom: 14 }} />
                <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 6px" }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.55, margin: 0 }}>{f.desc}</p>
              </div>
            );
          })}
        </div>

        <div style={{ background: "var(--paper-2)", borderRadius: 12, padding: "20px 24px", marginBottom: 36 }}>
          <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", letterSpacing: "0.1em", fontWeight: 600, marginBottom: 8 }}>
            {m.pricingKicker}
          </div>
          <div style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.7 }}>
            {m.pricingBody}
            <Link href="/pricing" style={{ color: "var(--accent)" }}>{m.pricingPageLink}</Link>
            {m.pricingBodyAfter}
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/waitlist" style={{ textDecoration: "none" }}>
            <Button variant="primary" icon={ArrowRight}>{m.ctaWaitlist}</Button>
          </Link>
          <Link href="/scan" style={{ textDecoration: "none" }}>
            <Button variant="secondary">{m.ctaOneOff}</Button>
          </Link>
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
