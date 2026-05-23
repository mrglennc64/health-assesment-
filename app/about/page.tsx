"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { Button } from "@/components/ui/primitives";
import { useLang } from "@/lib/i18n/LanguageContext";

const para: React.CSSProperties = { fontSize: 16, color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 18px" };

export default function AboutPage() {
  const { t } = useLang();
  const a = t.about;
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          {a.kicker}
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 32px" }}>
          {a.title}
        </h1>

        <p style={para}>{a.para1}</p>
        <p style={para}>{a.para2}</p>
        <p style={{ ...para, marginBottom: 32 }}>{a.para3}</p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/scan" style={{ textDecoration: "none" }}>
            <Button variant="primary" icon={ArrowRight}>{a.ctaAudit}</Button>
          </Link>
          <Link href="/suite" prefetch={false} style={{ textDecoration: "none" }}>
            <Button variant="secondary">{a.ctaSuite}</Button>
          </Link>
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
