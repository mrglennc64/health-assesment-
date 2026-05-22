"use client";

import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";

const li: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.8, marginBottom: 4 };

export default function StatusPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          STATUS
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 24px" }}>
          Status
        </h1>

        <p
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(60, 138, 90, 0.10)",
            color: "var(--good, #3c8a5a)",
            padding: "10px 16px",
            borderRadius: 8,
            fontSize: 15,
            fontWeight: 600,
            margin: "0 0 36px",
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: 99, background: "var(--good, #3c8a5a)" }} />
          All systems operational
        </p>

        <ul style={{ paddingLeft: 22, margin: "0 0 36px" }}>
          <li style={li}>Audit Engine: Operational</li>
          <li style={li}>Compliance Suite: Operational</li>
          <li style={li}>Monitoring: Operational</li>
          <li style={li}>File uploads: Operational</li>
          <li style={li}>Exports: Operational</li>
        </ul>

        <h2 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 12px" }}>Scheduled Maintenance</h2>
        <p style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, margin: 0 }}>
          None at this time.
        </p>
      </section>
      <MarketingFooter />
    </>
  );
}
