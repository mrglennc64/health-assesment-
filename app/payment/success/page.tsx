"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { Button } from "@/components/ui/primitives";
import { PAYMENT_AMOUNT_DISPLAY } from "@/lib/payments/config";
import { useLang } from "@/lib/i18n/LanguageContext";

export default function PaymentSuccessPage() {
  const { t } = useLang();
  const s = t.paymentSuccessPage;
  return (
    <>
      <MarketingNav />
      <section
        style={{
          maxWidth: 560,
          margin: "0 auto",
          padding: "120px 32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 99,
            background: "rgba(60, 138, 90, 0.10)",
            margin: "0 auto 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CheckCircle2 size={32} strokeWidth={1.75} color="var(--good, #3c8a5a)" />
        </div>

        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 14 }}>
          {s.kicker}
        </div>
        <h1 className="serif" style={{ fontSize: 38, fontWeight: 500, lineHeight: 1.1, margin: "0 0 16px" }}>
          {s.title(PAYMENT_AMOUNT_DISPLAY)}
        </h1>
        <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65, margin: "0 0 32px" }}>
          {s.body}
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/scan" style={{ textDecoration: "none" }}>
            <Button variant="primary" icon={ArrowRight}>{s.runAuditCta}</Button>
          </Link>
          <Link href="/suite" prefetch={false} style={{ textDecoration: "none" }}>
            <Button variant="secondary">{s.openSuiteCta}</Button>
          </Link>
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
