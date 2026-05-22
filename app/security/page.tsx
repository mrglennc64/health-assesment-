"use client";

import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";

const h2: React.CSSProperties = { fontSize: 20, fontWeight: 600, margin: "0 0 12px" };
const para: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, margin: 0 };
const block: React.CSSProperties = { marginBottom: 36 };

export default function SecurityPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          SECURITY
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 48px" }}>
          Security
        </h1>

        <div style={block}>
          <h2 style={h2}>No PHI Stored</h2>
          <p style={para}>
            MediReady does not store or retain PHI. Inputs are processed ephemerally and deleted after the audit completes.
          </p>
        </div>

        <div style={block}>
          <h2 style={h2}>Encrypted in Transit</h2>
          <p style={para}>
            All uploads and downloads use HTTPS/TLS 1.2+.
          </p>
        </div>

        <div style={block}>
          <h2 style={h2}>Local Storage for Suite Outputs</h2>
          <p style={para}>
            Compliance Suite documents are stored locally in an isolated SQLite database and never shared or used for training.
          </p>
        </div>

        <div style={block}>
          <h2 style={h2}>HIPAA-Aligned Workflows</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 4 }}>No persistent PHI</li>
            <li style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 4 }}>No integration into clinical systems</li>
            <li style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 4 }}>No access to EHRs</li>
            <li style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 4 }}>No background data collection</li>
          </ul>
        </div>

        <div style={block}>
          <h2 style={h2}>Minimal Data Footprint</h2>
          <p style={para}>
            Only the data required to generate the requested output is processed.
          </p>
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
