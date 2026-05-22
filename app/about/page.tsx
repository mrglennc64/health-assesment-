"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { Button } from "@/components/ui/primitives";

export default function AboutPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 880, margin: "0 auto", padding: "96px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          ABOUT
        </div>
        <h1 className="serif" style={{ fontSize: 48, fontWeight: 500, lineHeight: 1.05, margin: "0 0 32px" }}>
          Healthcare audit and compliance, on one platform.
        </h1>

        <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.75, marginBottom: 18 }}>
          We build software for the clinics, billing companies, healthcare SaaS providers, and
          consultants who carry the day-to-day weight of HIPAA, CMS, and payer rules. The tools
          here exist because compliance work shouldn&apos;t require an army of consultants — it
          should require careful inputs, structured outputs, and a paper trail an auditor can read.
        </p>

        <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.75, marginBottom: 18 }}>
          The platform is two products that share a workflow. Aegis Audits surfaces what payers,
          auditors, and regulators will find first — six bounded channels running in parallel.
          MedReady Suite generates the documents you need to close those findings — audit plans,
          standards mappings, gap analyses, risk assessments, policies and SOPs.
        </p>

        <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.75, marginBottom: 32 }}>
          Built on a single principle: structured outputs are auditable; free-text outputs are not.
          Every finding cites a clause. Every plan has a schedule. Every policy has the nine
          sections HIPAA reviewers expect. Every export is reproducible. No magic, no black-box scoring.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/scan" style={{ textDecoration: "none" }}>
            <Button variant="primary" icon={ArrowRight}>Run a free audit</Button>
          </Link>
          <Link href="/suite" style={{ textDecoration: "none" }}>
            <Button variant="secondary">Explore the suite</Button>
          </Link>
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
