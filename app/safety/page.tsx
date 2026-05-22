"use client";

import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";

const h2: React.CSSProperties = { fontSize: 20, fontWeight: 600, margin: "0 0 12px" };
const para: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, margin: 0 };
const block: React.CSSProperties = { marginBottom: 36 };

export default function SafetyPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          SAFETY
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 32px" }}>
          Safety
        </h1>

        <p style={{ ...para, marginBottom: 40 }}>
          MediReady is designed to minimize risk by eliminating PHI storage, reducing integration complexity,
          and ensuring all processing is ephemeral and encrypted.
        </p>

        <div style={block}>
          <h2 style={h2}>Ephemeral Processing</h2>
          <p style={para}>
            Uploaded files and text inputs are processed in memory and deleted immediately after the audit completes.
          </p>
        </div>

        <div style={block}>
          <h2 style={h2}>No PHI Retention</h2>
          <p style={para}>
            MediReady does not store PHI, clinical notes, or patient identifiers. This eliminates the need for BAAs
            and reduces compliance overhead.
          </p>
        </div>

        <div style={block}>
          <h2 style={h2}>Local Document Storage</h2>
          <p style={para}>
            Compliance Suite outputs are stored locally in an isolated SQLite database and never shared or used for training.
          </p>
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
