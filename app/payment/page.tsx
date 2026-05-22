"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { PayNow } from "@/components/site/PayNow";

export default function PaymentPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 32px" }}>
        <Link href="/pricing" style={{ textDecoration: "none", fontSize: 13, color: "var(--muted)", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
          <ArrowLeft size={14} /> Pricing
        </Link>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 14 }}>
          PAYMENT
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 16px" }}>
          Complete your payment.
        </h1>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.65, marginBottom: 32, maxWidth: 560 }}>
          Two ways to pay. Online via Revolut Checkout (fastest, automatic reconciliation), or by USD bank transfer for organisations that prefer it.
        </p>

        <PayNow />

        <div style={{ marginTop: 36, padding: "16px 20px", background: "var(--paper-2)", borderRadius: 10, fontSize: 13, color: "var(--muted)", lineHeight: 1.65, maxWidth: 480 }}>
          Questions about the payment? Email{" "}
          <a href="mailto:support@usemediready.com" style={{ color: "var(--accent)" }}>support@usemediready.com</a>.
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
