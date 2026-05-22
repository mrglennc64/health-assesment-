"use client";

import Link from "next/link";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";

export default function ReportsPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "120px 32px", textAlign: "center" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 14 }}>
          REPORTS
        </div>
        <h1 className="serif" style={{ fontSize: 40, fontWeight: 500, lineHeight: 1.05, margin: "0 0 18px" }}>
          Reports library
        </h1>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.65, marginBottom: 28 }}>
          A consolidated view of every PDF + Word export you&apos;ve generated — across audits and the
          Compliance Suite. Coming with the monitoring tier.
        </p>
        <p style={{ fontSize: 13.5, color: "var(--muted-2)" }}>
          For now, downloads live with each individual run — see your{" "}
          <Link href="/suite/history" style={{ color: "var(--accent)" }}>suite history</Link>.
        </p>
      </section>
      <MarketingFooter />
    </>
  );
}
