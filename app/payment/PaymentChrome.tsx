"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PayNow } from "@/components/site/PayNow";
import type { ProductKey } from "@/lib/payments/config";
import { useLang } from "@/lib/i18n/LanguageContext";

export function PaymentChrome({ product }: { product: ProductKey }) {
  const { t } = useLang();
  const p = t.paymentPage;
  return (
    <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 32px" }}>
      <Link
        href="/pricing"
        style={{
          textDecoration: "none",
          fontSize: 13,
          color: "var(--muted)",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 16,
        }}
      >
        <ArrowLeft size={14} /> {p.backToPricing}
      </Link>
      <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 14 }}>
        {p.kicker}
      </div>
      <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 16px" }}>
        {p.title}
      </h1>
      <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.65, marginBottom: 32, maxWidth: 560 }}>
        {p.body}
      </p>

      <PayNow product={product} />

      <div style={{ marginTop: 36, padding: "16px 20px", background: "var(--paper-2)", borderRadius: 10, fontSize: 13, color: "var(--muted)", lineHeight: 1.65, maxWidth: 480 }}>
        {p.questionsLead}
        <a href="mailto:support@usemediready.com" style={{ color: "var(--accent)" }}>support@usemediready.com</a>.
      </div>
    </section>
  );
}
