"use client";

import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";

export default function AdminPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "120px 32px", textAlign: "center" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 14 }}>
          ADMIN
        </div>
        <h1 className="serif" style={{ fontSize: 40, fontWeight: 500, lineHeight: 1.05, margin: "0 0 18px" }}>
          Admin console
        </h1>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.65, marginBottom: 28 }}>
          Customer accounts, payments, audit history, system metrics. Reserved area.
        </p>
        <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", letterSpacing: "0.08em", fontWeight: 600 }}>
          INTERNAL · ACCESS REQUIRED
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
