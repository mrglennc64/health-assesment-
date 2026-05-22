"use client";

import Link from "next/link";
import { Ban, Trash2, Lock, HardDrive, Cloud, ShieldCheck, ArrowRight } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { Button } from "@/components/ui/primitives";

const POINTS = [
  {
    icon: Ban,
    title: "No PHI stored on the audit side",
    detail:
      "Scan inputs (text, file content, URL) are sent to the LLM provider for processing and discarded immediately after the run completes. They are not retained in our database, not indexed for search, and not aggregated across runs.",
  },
  {
    icon: Trash2,
    title: "Inputs deleted after processing",
    detail:
      "The audit engine is stateless. Run results (overall score, findings, required actions) are returned to your browser; the original input that produced them is not persisted on our side.",
  },
  {
    icon: Lock,
    title: "Encrypted in transit",
    detail:
      "All traffic uses TLS 1.2+. HSTS is enforced site-wide. There is no plaintext HTTP fallback. Certificates are issued by Let's Encrypt and renewed automatically.",
  },
  {
    icon: HardDrive,
    title: "Local SQLite storage for Suite outputs",
    detail:
      "MedReady Suite saves generated documents (audit plans, policies, risk assessments, etc.) to a local SQLite database on the same server that serves this site. They are not replicated to a cloud index, not synced to a third-party service, and not used to train any model. You can delete individual records from the History view at any time.",
  },
  {
    icon: Cloud,
    title: "Not used for training",
    detail:
      "We run inference against LLM providers that have signed Business Associate Agreements covering PHI handling, where applicable, and that contractually exclude our traffic from training pipelines.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-aligned workflows",
    detail:
      "Audit logging, least-privilege access, retention controls, and breach reporting expectations are first-class in the product, not bolted on. We model our internal practices on NIST 800-66 and the HIPAA Security Rule, and we apply our own tools to our own operations.",
  },
];

export default function SafetyPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 980, margin: "0 auto", padding: "96px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          SAFETY
        </div>
        <h1 className="serif" style={{ fontSize: 48, fontWeight: 500, lineHeight: 1.05, margin: "0 0 18px" }}>
          Built for healthcare data.
        </h1>
        <p style={{ fontSize: 16.5, color: "var(--muted)", lineHeight: 1.65, marginBottom: 48, maxWidth: 720 }}>
          PHI is the only regulated data class that matters here. Everything below is the default — no checkboxes to flip, no enterprise tier required to get the basics right.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 48 }}>
          {POINTS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--line)",
                  borderRadius: 12,
                  padding: "22px 26px",
                  display: "flex",
                  gap: 18,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 36, height: 36, borderRadius: 9,
                    background: "var(--accent-soft)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} strokeWidth={1.75} color="var(--accent)" />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 6px" }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.65, margin: 0 }}>{p.detail}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/scan" style={{ textDecoration: "none" }}>
            <Button variant="primary" icon={ArrowRight}>Run a free audit</Button>
          </Link>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <Button variant="secondary">Security questions? Contact us</Button>
          </Link>
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
