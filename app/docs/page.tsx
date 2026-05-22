"use client";

import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";

const h2: React.CSSProperties = { fontSize: 20, fontWeight: 600, margin: "0 0 12px" };
const li: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 4 };
const block: React.CSSProperties = { marginBottom: 36 };

export default function DocsPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          DOCUMENTATION
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 48px" }}>
          Documentation
        </h1>

        <div style={block}>
          <h2 style={h2}>Getting Started</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li style={li}>Run your first audit</li>
            <li style={li}>Generate compliance documents</li>
            <li style={li}>Use standards mapping</li>
            <li style={li}>Export reports</li>
          </ul>
        </div>

        <div style={block}>
          <h2 style={h2}>Audit Engine</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li style={li}>Claims audit</li>
            <li style={li}>Full compliance audit</li>
            <li style={li}>Denial audit</li>
            <li style={li}>Severity model</li>
            <li style={li}>Required actions</li>
          </ul>
        </div>

        <div style={block}>
          <h2 style={h2}>Compliance Suite</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li style={li}>Audit Plan Generator</li>
            <li style={li}>Standards Mapping</li>
            <li style={li}>Document Gap Analysis</li>
            <li style={li}>HIPAA Risk Assessment</li>
            <li style={li}>Policy &amp; SOP Generator</li>
          </ul>
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
