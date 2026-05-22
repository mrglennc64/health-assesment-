"use client";

import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";

export default function InternalPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "120px 32px", textAlign: "center" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 14 }}>
          INTERNAL
        </div>
        <h1 className="serif" style={{ fontSize: 40, fontWeight: 500, lineHeight: 1.05, margin: "0 0 18px" }}>
          Internal tools
        </h1>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.65, marginBottom: 28 }}>
          Engineering surface. Not for customer use.
        </p>
        <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", letterSpacing: "0.08em", fontWeight: 600 }}>
          INTERNAL · ACCESS REQUIRED
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
