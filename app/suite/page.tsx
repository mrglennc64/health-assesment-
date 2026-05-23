"use client";

import Link from "next/link";
import {
  FileCheck,
  BookOpen,
  Upload,
  Clock,
  ArrowRight,
  ShieldAlert,
  FileText,
} from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { SuiteToolCard } from "@/components/site/SuiteToolCard";
import { Button } from "@/components/ui/primitives";
import { useLang } from "@/lib/i18n/LanguageContext";

const TOOL_META = [
  { href: "/suite/audit-plan", icon: FileCheck, color: "#b94545", key: "auditPlan" as const, title: "Audit Plan Generator" },
  { href: "/suite/standards-mapping", icon: BookOpen, color: "#5a7a9f", key: "standardsMapping" as const, title: "Standards Mapping" },
  { href: "/suite/gap-analysis", icon: Upload, color: "#d49640", key: "gapAnalysis" as const, title: "Document Gap Analysis" },
  { href: "/suite/risk-assessment", icon: ShieldAlert, color: "#a85a8a", key: "riskAssessment" as const, title: "HIPAA Risk Assessment" },
  { href: "/suite/policy", icon: FileText, color: "#5a9f6a", key: "policy" as const, title: "Policy / SOP Generator" },
];

export default function SuiteIndexPage() {
  const { t } = useLang();
  const s = t.suite;
  return (
    <>
      <MarketingNav />
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "72px 32px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 14 }}>
          {s.index.kicker}
        </div>
        <h1 className="serif" style={{ fontSize: "clamp(40px, 5.4vw, 60px)", fontWeight: 500, lineHeight: 1.02, margin: "0 0 18px", maxWidth: 820 }}>
          {s.index.title}
        </h1>
        <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.6, maxWidth: 720, marginBottom: 28 }}>
          {s.index.body}
        </p>

        <div style={{ display: "flex", gap: 12, marginBottom: 48, flexWrap: "wrap" }}>
          <Link href="/suite/history" style={{ textDecoration: "none" }}>
            <Button variant="secondary" size="sm" iconLeft={Clock}>
              {s.index.history}
            </Button>
          </Link>
          <Link href="/scan" style={{ textDecoration: "none" }}>
            <Button variant="secondary" size="sm" icon={ArrowRight}>
              {s.index.backToScan}
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
          {TOOL_META.map((meta) => {
            const copy = s.tools[meta.key];
            return (
              <SuiteToolCard
                key={meta.href}
                href={meta.href}
                icon={meta.icon}
                iconColor={meta.color}
                tier="FREE"
                tierLabel={s.index.tierFree}
                title={meta.title}
                description={copy.cardDesc}
                bullets={copy.cardBullets}
              />
            );
          })}
        </div>

        <div style={{ marginTop: 56, padding: "20px 28px", background: "var(--paper-2)", borderRadius: 12, border: "1px solid var(--line)" }}>
          <div style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6 }}>
            <strong style={{ color: "var(--ink)" }}>{s.index.aboutLabel}</strong>
            {s.index.aboutBody}
            <Link href="/suite/history" style={{ color: "var(--accent)" }}>{s.index.history.toLowerCase()}</Link>.
          </div>
        </div>
      </div>
      <MarketingFooter />
    </>
  );
}
