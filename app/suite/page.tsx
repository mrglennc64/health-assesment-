"use client";

import Link from "next/link";
import {
  FileCheck,
  BookOpen,
  Upload,
  Clock,
  ArrowRight,
} from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { SuiteToolCard } from "@/components/site/SuiteToolCard";
import { Button } from "@/components/ui/primitives";

export default function SuiteIndexPage() {
  return (
    <>
      <MarketingNav />
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "72px 32px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 14 }}>
          MEDIREADY SUITE
        </div>
        <h1 className="serif" style={{ fontSize: "clamp(40px, 5.4vw, 60px)", fontWeight: 500, lineHeight: 1.02, margin: "0 0 18px", maxWidth: 820 }}>
          Compliance documents,
          <br />
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>generated in minutes</em>.
        </h1>
        <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.6, maxWidth: 720, marginBottom: 28 }}>
          Tools for healthcare audit plans, standards mapping, and document gap analysis. Outputs save
          to your local history and download as Word documents.
        </p>

        <div style={{ display: "flex", gap: 12, marginBottom: 48, flexWrap: "wrap" }}>
          <Link href="/suite/history" style={{ textDecoration: "none" }}>
            <Button variant="secondary" size="sm" iconLeft={Clock}>
              History
            </Button>
          </Link>
          <Link href="/scan" style={{ textDecoration: "none" }}>
            <Button variant="secondary" size="sm" icon={ArrowRight}>
              Back to free audit
            </Button>
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          <SuiteToolCard
            href="/suite/audit-plan"
            icon={FileCheck}
            iconColor="#b94545"
            tier="FREE"
            title="Audit Plan Generator"
            description="Generate a complete internal audit plan — scope, objectives, methodology, schedule, checklist, and risk areas. Exports to Word."
            bullets={[
              "HIPAA + healthcare-aligned scope",
              "Critical / High / Medium / Low risk classification",
              "Auto-generated methodology + schedule",
              "Word + JSON export",
            ]}
          />
          <SuiteToolCard
            href="/suite/standards-mapping"
            icon={BookOpen}
            iconColor="#5a7a9f"
            tier="FREE"
            title="Standards Mapping"
            description="Paste a finding, gap, or requirement and get the exact HIPAA, CMS, OCR, NIST, ISO clauses that apply."
            bullets={[
              "HIPAA Security & Privacy Rules",
              "NIST 800-66 / 800-53 / 800-30",
              "ISO 27001, ISO 13485 (where relevant)",
              "OCR & CMS guidance references",
            ]}
          />
          <SuiteToolCard
            href="/suite/gap-analysis"
            icon={Upload}
            iconColor="#d49640"
            tier="FREE"
            title="Document Gap Analysis"
            description="Upload an existing SOP, policy, or compliance document. AI flags missing sections, weak language, and clause gaps."
            bullets={[
              "PDF, DOCX, or plain text upload",
              "Section completeness check",
              "Severity-rated findings",
              "Remediation suggestions",
            ]}
          />
        </div>

        <div style={{ marginTop: 56, padding: "20px 28px", background: "var(--paper-2)", borderRadius: 12, border: "1px solid var(--line)" }}>
          <div style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6 }}>
            <strong style={{ color: "var(--ink)" }}>About this suite —</strong> outputs are saved locally on the server in a SQLite database. They are not shared, indexed, or used for training. Your inputs stay in your <Link href="/suite/history" style={{ color: "var(--accent)" }}>history</Link>.
          </div>
        </div>
      </div>
      <MarketingFooter />
    </>
  );
}
