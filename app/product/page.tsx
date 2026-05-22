"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { Button } from "@/components/ui/primitives";

const sectionH2: React.CSSProperties = { fontSize: 26, fontWeight: 500, margin: "0 0 12px" };
const para: React.CSSProperties = { fontSize: 15, color: "var(--muted)", lineHeight: 1.7, margin: "0 0 14px" };
const list: React.CSSProperties = { paddingLeft: 22, margin: "0 0 14px" };
const li: React.CSSProperties = { fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 4 };

export default function ProductPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          PRODUCT
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 64px" }}>
          Product
        </h1>

        {/* Aegis Audits */}
        <div style={{ marginBottom: 56 }}>
          <h2 className="serif" style={sectionH2}>Aegis Audits</h2>
          <p style={para}>
            Six-channel healthcare audits that surface what payers, auditors, and regulators will find first.
          </p>
          <ul style={list}>
            <li style={li}>Claims reimbursement</li>
            <li style={li}>HIPAA &amp; security</li>
            <li style={li}>Documentation quality</li>
            <li style={li}>Patient communication</li>
            <li style={li}>Clinical content</li>
            <li style={li}>Synthetic reviewer behavior</li>
          </ul>
          <p style={para}>
            Outputs include overall and per-channel scores, severity-rated findings, required actions, and PDF/JSON export.
          </p>
          <div style={{ marginTop: 18 }}>
            <Link href="/scan" style={{ textDecoration: "none" }}>
              <Button variant="primary" icon={ArrowRight}>Run a free audit</Button>
            </Link>
          </div>
        </div>

        {/* MediReady Suite */}
        <div style={{ marginBottom: 56 }}>
          <h2 className="serif" style={sectionH2}>MediReady Suite</h2>
          <p style={para}>
            Compliance documentation generated in minutes. No templates. No manual formatting.
          </p>
          <ul style={list}>
            <li style={li}>Audit Plan Generator</li>
            <li style={li}>Standards Mapping</li>
            <li style={li}>Document Gap Analysis</li>
            <li style={li}>HIPAA Risk Assessment</li>
            <li style={li}>Policy &amp; SOP Generator</li>
          </ul>
          <div style={{ marginTop: 18 }}>
            <Link href="/suite" style={{ textDecoration: "none" }}>
              <Button variant="secondary" icon={ArrowRight}>Open the suite</Button>
            </Link>
          </div>
        </div>

        {/* Monitoring */}
        <div>
          <h2 className="serif" style={sectionH2}>Monitoring</h2>
          <p style={para}>
            Weekly automated audits with trend tracking and historical comparisons.
          </p>
          <div style={{ marginTop: 18 }}>
            <Link href="/waitlist" style={{ textDecoration: "none" }}>
              <Button variant="secondary" icon={ArrowRight}>Join the waitlist</Button>
            </Link>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
