"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { Button } from "@/components/ui/primitives";
import { PAYMENT_AMOUNT_DISPLAY } from "@/lib/payments/config";

export default function PaymentSuccessPage() {
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
          PAYMENT RECEIVED
        </div>
        <h1 className="serif" style={{ fontSize: 38, fontWeight: 500, lineHeight: 1.1, margin: "0 0 16px" }}>
          Thanks — your {PAYMENT_AMOUNT_DISPLAY} payment has been recorded.
        </h1>
        <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65, margin: "0 0 32px" }}>
          A confirmation email will be sent shortly. If you don&apos;t see it within a few minutes, check your spam folder.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/scan" style={{ textDecoration: "none" }}>
            <Button variant="primary" icon={ArrowRight}>Run an audit</Button>
          </Link>
          <Link href="/suite" style={{ textDecoration: "none" }}>
            <Button variant="secondary">Open the suite</Button>
          </Link>
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
