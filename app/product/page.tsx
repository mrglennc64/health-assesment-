"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { Button } from "@/components/ui/primitives";
import { useLang } from "@/lib/i18n/LanguageContext";

const sectionH2: React.CSSProperties = { fontSize: 26, fontWeight: 500, margin: "0 0 12px" };
const para: React.CSSProperties = { fontSize: 15, color: "var(--muted)", lineHeight: 1.7, margin: "0 0 14px" };
const list: React.CSSProperties = { paddingLeft: 22, margin: "0 0 14px" };
const li: React.CSSProperties = { fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 4 };

export default function ProductPage() {
  const { t } = useLang();
  const p = t.productPage;
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          {p.kicker}
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 64px" }}>
          {p.title}
        </h1>

        {/* MediReady Audits */}
        <div style={{ marginBottom: 56 }}>
          <h2 className="serif" style={sectionH2}>{p.auditsHeading}</h2>
          <p style={para}>{p.auditsBody}</p>
          <ul style={list}>
            {p.auditsList.map((item) => (
              <li key={item} style={li}>{item}</li>
            ))}
          </ul>
          <p style={para}>{p.auditsOutputs}</p>
          <div style={{ marginTop: 18 }}>
            <Link href="/scan" style={{ textDecoration: "none" }}>
              <Button variant="primary" icon={ArrowRight}>{p.auditsCta}</Button>
            </Link>
          </div>
        </div>

        {/* MediReady Suite */}
        <div style={{ marginBottom: 56 }}>
          <h2 className="serif" style={sectionH2}>{p.suiteHeading}</h2>
          <p style={para}>{p.suiteBody}</p>
          <ul style={list}>
            {p.suiteList.map((item) => (
              <li key={item} style={li}>{item}</li>
            ))}
          </ul>
          <div style={{ marginTop: 18 }}>
            <Link href="/suite" prefetch={false} style={{ textDecoration: "none" }}>
              <Button variant="secondary" icon={ArrowRight}>{p.suiteCta}</Button>
            </Link>
          </div>
        </div>

        {/* Monitoring */}
        <div>
          <h2 className="serif" style={sectionH2}>{p.monitoringHeading}</h2>
          <p style={para}>{p.monitoringBody}</p>
          <div style={{ marginTop: 18 }}>
            <Link href="/waitlist" style={{ textDecoration: "none" }}>
              <Button variant="secondary" icon={ArrowRight}>{p.monitoringCta}</Button>
            </Link>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
