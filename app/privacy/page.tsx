"use client";

import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";

const h2: React.CSSProperties = { fontSize: 20, fontWeight: 600, margin: "0 0 12px" };
const para: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, margin: 0 };
const li: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 4 };
const block: React.CSSProperties = { marginBottom: 36 };

export default function PrivacyPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          PRIVACY
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 48px" }}>
          Privacy
        </h1>

        <div style={block}>
          <h2 style={h2}>No PHI Storage</h2>
          <p style={para}>
            MediReady does not store or retain PHI. All inputs are processed ephemerally and deleted after use.
          </p>
        </div>

        <div style={block}>
          <h2 style={h2}>Data We Collect</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li style={li}>Email (optional)</li>
            <li style={li}>Payment information (via secure third-party processor)</li>
            <li style={li}>Non-PHI operational logs</li>
          </ul>
        </div>

        <div style={block}>
          <h2 style={h2}>Data We Do Not Collect</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li style={li}>Patient identifiers</li>
            <li style={li}>Medical records</li>
            <li style={li}>EHR data</li>
            <li style={li}>Persistent clinical content</li>
          </ul>
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
