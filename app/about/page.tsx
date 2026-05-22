"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { Button } from "@/components/ui/primitives";

const para: React.CSSProperties = { fontSize: 16, color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 18px" };

export default function AboutPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          COMPANY
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 32px" }}>
          Company
        </h1>

        <p style={para}>
          MediReady builds file-based healthcare audit and compliance tools that surface issues before payers,
          auditors, or regulators do. No integrations. No IT projects. File in → report out.
        </p>

        <p style={para}>
          Founded by Glenn Carter, MediReady combines healthcare workflow experience, audit-grade data handling,
          HIPAA-aligned architecture, and deterministic validation logic.
        </p>

        <p style={{ ...para, marginBottom: 32 }}>
          Our goal is simple: make healthcare compliance fast, accurate, and accessible.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/scan" style={{ textDecoration: "none" }}>
            <Button variant="primary" icon={ArrowRight}>Run a free audit</Button>
          </Link>
          <Link href="/suite" prefetch={false} style={{ textDecoration: "none" }}>
            <Button variant="secondary">Explore the suite</Button>
          </Link>
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
