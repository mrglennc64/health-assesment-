"use client";

import Link from "next/link";
import { ArrowRight, Clock, FileText } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";

export default function HistoryHubPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          HISTORY
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 18px" }}>
          History
        </h1>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.65, marginBottom: 40, maxWidth: 640 }}>
          Past generations across the platform. Choose a section below.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          <Link href="/suite/history" style={{ textDecoration: "none", color: "inherit" }}>
            <div
              className="lift"
              style={{
                background: "var(--card)",
                border: "1px solid var(--line)",
                borderRadius: 12,
                padding: 24,
              }}
            >
              <FileText size={22} strokeWidth={1.5} color="var(--accent)" style={{ marginBottom: 14 }} />
              <h3 style={{ fontSize: 17, fontWeight: 600, margin: "0 0 6px" }}>Suite documents</h3>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.55, margin: "0 0 12px" }}>
                Audit plans, mappings, gap analyses, risk assessments, and policies you&apos;ve generated.
              </p>
              <span style={{ fontSize: 13, color: "var(--accent)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6 }}>
                Open <ArrowRight size={14} />
              </span>
            </div>
          </Link>

          <div
            style={{
              background: "var(--card)",
              border: "1px solid var(--line)",
              borderRadius: 12,
              padding: 24,
              opacity: 0.7,
            }}
          >
            <Clock size={22} strokeWidth={1.5} color="var(--muted-2)" style={{ marginBottom: 14 }} />
            <h3 style={{ fontSize: 17, fontWeight: 600, margin: "0 0 6px" }}>Audit runs</h3>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.55, margin: "0 0 12px" }}>
              Coming soon. Past scans and full audits will appear here when persistent run history ships.
            </p>
            <span className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: "0.08em", fontWeight: 600 }}>
              SOON
            </span>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
