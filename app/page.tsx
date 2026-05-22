"use client";

import Link from "next/link";
import {
  ArrowRight,
  Eye,
  FileCheck,
  BookOpen,
  Upload,
  ShieldAlert,
  FileText,
  Stethoscope,
  Briefcase,
  Globe,
  Wrench,
  Building2,
  Gavel,
  ClipboardCheck,
  Lock,
  Trash2,
  Cloud,
  HardDrive,
  Ban,
  ShieldCheck,
} from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import {
  Button,
  ScoreRing,
  SevBadge,
  ModelPill,
} from "@/components/ui/primitives";
import { CHANNELS, SAMPLE_RUN_TEASER } from "@/components/site/data";

export default function HomePage() {
  return (
    <>
      <MarketingNav />

      {/* ====================================================================
          HERO
          ==================================================================== */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "88px 32px 72px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 72, alignItems: "center" }}>
          <div className="fade-up">
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 24 }}>
              AUDIT ENGINE + COMPLIANCE SUITE
            </div>
            <h1 className="serif" style={{ fontSize: "clamp(44px, 5.8vw, 72px)", fontWeight: 500, lineHeight: 1.0, margin: "0 0 28px" }}>
              One platform for
              <br />
              healthcare audits and
              <br />
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>compliance documentation</em>.
            </h1>
            <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.6, maxWidth: 560, marginBottom: 36 }}>
              Run six-channel audits, generate HIPAA-aligned documents, map standards, and close gaps — all in minutes.
            </p>
            <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
              <Link href="/scan" style={{ textDecoration: "none" }}>
                <Button variant="primary" size="lg" icon={ArrowRight}>
                  Run a free audit
                </Button>
              </Link>
              <Link href="/suite" style={{ textDecoration: "none" }}>
                <Button variant="secondary" size="lg" iconLeft={Eye}>
                  Explore the compliance suite
                </Button>
              </Link>
            </div>
            <div
              className="mono"
              style={{
                fontSize: 11.5,
                color: "var(--muted-2)",
                display: "flex",
                alignItems: "center",
                gap: 14,
                flexWrap: "wrap",
                letterSpacing: "0.04em",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span className="pulse-soft" style={{ width: 6, height: 6, borderRadius: 99, background: "var(--good)" }} />
                LLM + SYNTHETIC BROWSER
              </span>
              <span style={{ width: 1, height: 12, background: "var(--line-2)" }} />
              <span>WORD + PDF EXPORT</span>
              <span style={{ width: 1, height: 12, background: "var(--line-2)" }} />
              <span>ZERO INTEGRATION</span>
            </div>
          </div>

          {/* Hero report card */}
          <div
            className="fade-up-delay-1 lift"
            style={{
              background: "var(--card)",
              borderRadius: 14,
              border: "1px solid var(--line)",
              padding: 24,
              boxShadow: "0 1px 0 rgba(11, 18, 32, 0.04), 0 24px 56px -20px rgba(11, 18, 32, 0.12)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div>
                <div className="mono" style={{ fontSize: 10, color: "var(--muted-2)", marginBottom: 6, letterSpacing: "0.06em" }}>
                  RUN {SAMPLE_RUN_TEASER.scanId}
                </div>
                <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 2 }}>
                  COPD exacerbation follow-up
                </div>
                <div className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)" }}>
                  {SAMPLE_RUN_TEASER.ts.toUpperCase()}
                </div>
              </div>
              <ScoreRing score={SAMPLE_RUN_TEASER.overall} size={68} label="OVERALL" />
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
              <span className="mono" style={{ fontSize: 10.5, padding: "4px 8px", background: "var(--accent-soft)", color: "var(--accent)", borderRadius: 4, fontWeight: 600 }}>{SAMPLE_RUN_TEASER.counts.critical} CRITICAL</span>
              <span className="mono" style={{ fontSize: 10.5, padding: "4px 8px", background: "var(--warn-soft)", color: "var(--warn)", borderRadius: 4, fontWeight: 600 }}>{SAMPLE_RUN_TEASER.counts.watch} WATCH</span>
              <span className="mono" style={{ fontSize: 10.5, padding: "4px 8px", background: "var(--info-soft)", color: "var(--info)", borderRadius: 4, fontWeight: 600 }}>{SAMPLE_RUN_TEASER.counts.info} INFO</span>
            </div>
            <div style={{ borderTop: "1px solid var(--line)", paddingTop: 14 }}>
              {SAMPLE_RUN_TEASER.preview.map((row, i, arr) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "9px 0",
                    borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, minWidth: 0 }}>
                    <span className="mono" style={{ fontSize: 9.5, color: "var(--muted-2)", width: 56, flexShrink: 0, letterSpacing: "0.04em" }}>
                      {row.ch}
                    </span>
                    <span style={{ fontSize: 12.5, color: "var(--ink-2)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {row.title}
                    </span>
                  </div>
                  <SevBadge severity={row.sev} />
                </div>
              ))}
            </div>
            <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <ModelPill model={SAMPLE_RUN_TEASER.modelPrimary} />
              <span className="mono" style={{ fontSize: 10, color: "var(--muted-2)", letterSpacing: "0.04em" }}>
                ~38s · 6/6 CHANNELS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 1 — Two Products. One Platform.
          ==================================================================== */}
      <section style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "var(--paper-2)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "112px 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 18 }}>
              TWO PRODUCTS · ONE PLATFORM
            </div>
            <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.02, margin: 0 }}>
              Find the gaps.<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Then close them.</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {/* AEGIS AUDITS */}
            <div
              className="lift"
              style={{
                background: "var(--card)",
                border: "1px solid var(--line)",
                borderRadius: 14,
                padding: 36,
              }}
            >
              <div className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: "0.1em", fontWeight: 600, marginBottom: 14 }}>
                PRODUCT ONE
              </div>
              <h3 className="serif" style={{ fontSize: 32, fontWeight: 500, margin: "0 0 12px" }}>
                Aegis Audits
              </h3>
              <p style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.6, marginBottom: 24 }}>
                Six parallel audit channels that surface what payers, auditors, and regulators will find first.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Claims",
                  "HIPAA & security",
                  "Documentation",
                  "Patient communication",
                  "Clinical content",
                  "Synthetic browser behavior",
                ].map((label) => (
                  <li key={label} style={{ fontSize: 13.5, color: "var(--ink-2)", display: "flex", gap: 10 }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>›</span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
              <Link href="/scan" style={{ textDecoration: "none" }}>
                <Button variant="primary" icon={ArrowRight}>Run a free audit</Button>
              </Link>
            </div>

            {/* MEDREADY SUITE */}
            <div
              className="lift"
              style={{
                background: "var(--ink)",
                color: "var(--paper)",
                border: "1px solid var(--ink)",
                borderRadius: 14,
                padding: 36,
              }}
            >
              <div className="mono" style={{ fontSize: 10.5, color: "rgba(250,248,244,0.5)", letterSpacing: "0.1em", fontWeight: 600, marginBottom: 14 }}>
                PRODUCT TWO
              </div>
              <h3 className="serif" style={{ fontSize: 32, fontWeight: 500, margin: "0 0 12px" }}>
                MedReady Suite
              </h3>
              <p style={{ fontSize: 14.5, color: "rgba(250,248,244,0.72)", lineHeight: 1.6, marginBottom: 24 }}>
                Compliance documentation generated in minutes.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Audit plans",
                  "Standards mapping",
                  "Document gap analysis",
                  "HIPAA risk assessments",
                  "Policy & SOP generator",
                ].map((label) => (
                  <li key={label} style={{ fontSize: 13.5, color: "rgba(250,248,244,0.9)", display: "flex", gap: 10 }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>›</span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
              <Link href="/suite" style={{ textDecoration: "none" }}>
                <Button variant="accent" icon={ArrowRight}>View the full suite</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 2 — Compliance Documents, Generated in Minutes
          ==================================================================== */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "112px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 56 }}>
          <div>
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 18 }}>THE SUITE</div>
            <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.02, margin: 0 }}>
              Compliance<br />
              documents,<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>generated in minutes</em>.
            </h2>
          </div>
          <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.65, marginTop: 8 }}>
            Five tools that share the same engine and the same data model. Inputs are structured. Outputs cite real clauses. Every artifact downloads as a polished PDF and an editable Word document.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {[
            { href: "/suite/audit-plan", icon: FileCheck, color: "#b94545", title: "Audit Plan Generator", desc: "Complete internal audit plans — scope, objectives, methodology, schedule, checklist, and risk areas. Word + JSON export." },
            { href: "/suite/standards-mapping", icon: BookOpen, color: "#5a7a9f", title: "Standards Mapping", desc: "Paste a finding or requirement and get the exact HIPAA, CMS, OCR, NIST, and ISO clauses that apply." },
            { href: "/suite/gap-analysis", icon: Upload, color: "#d49640", title: "Document Gap Analysis", desc: "Upload an SOP or policy. AI flags missing sections, weak language, and clause gaps." },
            { href: "/suite/risk-assessment", icon: ShieldAlert, color: "#a85a8a", title: "HIPAA Risk Assessment", desc: "NIST 800-30 methodology with full risk register, likelihood/impact scoring, and recommended controls." },
            { href: "/suite/policy", icon: FileText, color: "#5a9f6a", title: "Policy / SOP Generator", desc: "Draft complete HIPAA-aligned policies and SOPs with required sections and clause references." },
          ].map((t) => {
            const Icon = t.icon;
            return (
              <Link key={t.href} href={t.href} style={{ textDecoration: "none", color: "inherit" }}>
                <div
                  className="lift"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--line)",
                    borderRadius: 14,
                    padding: 24,
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: `${t.color}1a`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 18,
                    }}
                  >
                    <Icon size={20} strokeWidth={1.75} color={t.color} />
                  </div>
                  <h3 className="serif" style={{ fontSize: 20, fontWeight: 500, margin: "0 0 8px" }}>{t.title}</h3>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.55, margin: 0 }}>{t.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link href="/suite" style={{ textDecoration: "none" }}>
            <Button variant="primary" icon={ArrowRight}>Open the suite</Button>
          </Link>
        </div>
      </section>

      {/* ====================================================================
          SECTION 3 — Six-Channel Audit Engine
          ==================================================================== */}
      <section id="audit" style={{ background: "var(--ink)", color: "var(--paper)", padding: "112px 32px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 64 }}>
            <div>
              <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 18 }}>THE AUDIT ENGINE</div>
              <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.02, margin: 0 }}>
                File in.<br />Report out.<br />
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>That&apos;s it.</em>
              </h2>
            </div>
            <p style={{ fontSize: 18, color: "rgba(250, 248, 244, 0.72)", lineHeight: 1.65, marginTop: 8 }}>
              Upload a file, paste text, or enter a URL. Six bounded audit channels run in parallel. Export structured findings, required actions, and a PDF/JSON report. No integration, no SDK, no agent installed on your network.
            </p>
          </div>

          <div id="channels" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(250, 248, 244, 0.08)", marginBottom: 48 }}>
            {CHANNELS.map((ch) => {
              const Icon = ch.icon;
              return (
                <div key={ch.id} style={{ background: "var(--ink)", padding: "36px 32px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
                    <Icon size={28} strokeWidth={1.5} color="var(--accent)" />
                    <span className="mono" style={{ fontSize: 10.5, color: "rgba(250, 248, 244, 0.4)", letterSpacing: "0.08em" }}>
                      CH. {ch.kicker}
                    </span>
                  </div>
                  <h3 className="serif" style={{ fontSize: 24, fontWeight: 500, margin: "0 0 10px" }}>{ch.label}</h3>
                  <p style={{ fontSize: 13, color: "rgba(250, 248, 244, 0.62)", lineHeight: 1.55, margin: 0 }}>{ch.desc}</p>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/scan" style={{ textDecoration: "none" }}>
              <Button variant="accent" size="lg" icon={ArrowRight}>Run a free audit</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4 — Who It's For
          ==================================================================== */}
      <section id="who-its-for" style={{ background: "var(--paper-2)", padding: "112px 32px", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 56 }}>
            <div>
              <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 18 }}>WHO IT&apos;S FOR</div>
              <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.02, margin: 0 }}>
                Anyone with<br />
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>regulatory exposure</em>.
              </h2>
            </div>
            <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.65, marginTop: 8 }}>
              If you generate clinical documentation, submit claims, handle patient data, write policies, or run audits — this platform gives you the same view your reviewers will have, before they have it.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { icon: Stethoscope, label: "Clinics", sub: "Primary care, specialty, dental, mental health." },
              { icon: Briefcase, label: "Billing companies", sub: "Audit client workflows; reduce denials." },
              { icon: Globe, label: "Healthcare SaaS", sub: "EHR add-ons, AI documentation, portals." },
              { icon: Building2, label: "Networks", sub: "IDNs, ACOs, multi-location practices." },
              { icon: Wrench, label: "Consultants", sub: "White-label audit + documentation layer." },
              { icon: ShieldCheck, label: "Compliance officers", sub: "Recurring audits + policy upkeep." },
              { icon: ClipboardCheck, label: "Internal audit teams", sub: "Plans, evidence, defensible reports." },
              { icon: Gavel, label: "Regulators", sub: "Independent verification workflows." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="lift"
                  style={{
                    background: "var(--card)",
                    borderRadius: 12,
                    border: "1px solid var(--line)",
                    padding: 24,
                  }}
                >
                  <Icon size={22} strokeWidth={1.5} color="var(--accent)" style={{ marginBottom: 16 }} />
                  <h3 className="serif" style={{ fontSize: 19, fontWeight: 500, margin: "0 0 6px" }}>{item.label}</h3>
                  <p style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.55, margin: 0 }}>{item.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 5 — Why It's Safe
          ==================================================================== */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "112px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 56 }}>
          <div>
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 18 }}>WHY IT&apos;S SAFE</div>
            <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.02, margin: 0 }}>
              Built for<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>healthcare data</em>.
            </h2>
          </div>
          <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.65, marginTop: 8 }}>
            We designed for the only regulated data class that matters here: PHI. Everything below is the default — no checkboxes to flip, no enterprise tier required to get safety basics.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 40 }}>
          {[
            { icon: Ban, title: "No PHI stored on the audit side", desc: "Scan inputs are processed and discarded — not retained, not indexed, not aggregated." },
            { icon: Trash2, title: "Inputs deleted after processing", desc: "Audit run inputs are not persisted beyond the run. The engine is stateless by design." },
            { icon: Lock, title: "Encrypted in transit", desc: "TLS 1.2+ on every endpoint. HSTS enforced. No mixed content. No plaintext fallback." },
            { icon: HardDrive, title: "Local SQLite for Suite outputs", desc: "Suite documents live on your server, not in a third-party cloud index. You hold the file." },
            { icon: Cloud, title: "Not used for training", desc: "Inference runs against providers with signed BAAs. Inputs are not shared with training pipelines." },
            { icon: ShieldCheck, title: "HIPAA-aligned workflows", desc: "Audit logging, least-privilege access, retention controls, and breach reporting are first-class." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="lift"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--line)",
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                <Icon size={22} strokeWidth={1.5} color="var(--accent)" style={{ marginBottom: 14 }} />
                <h3 style={{ fontSize: 14.5, fontWeight: 600, margin: "0 0 6px" }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/safety" style={{ textDecoration: "none" }}>
            <Button variant="secondary" icon={ArrowRight}>Learn more about safety</Button>
          </Link>
        </div>
      </section>

      {/* ====================================================================
          SECTION 6 — Pricing Overview
          ==================================================================== */}
      <section style={{ background: "var(--paper-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 18 }}>PRICING</div>
            <h2 className="serif" style={{ fontSize: 48, fontWeight: 500, lineHeight: 1.05, margin: "0 0 14px" }}>
              Pay for what you need.
            </h2>
            <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.6, maxWidth: 680, marginInline: "auto" }}>
              Run a one-off audit, generate a single document, or subscribe for unlimited.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 32 }}>
            <PricingPreview kicker="ONE-OFF AUDITS" headline="From $49" body="Claims · Full · Denial." />
            <PricingPreview kicker="COMPLIANCE SUITE" headline="From $29" body="Per document, or $99/mo subscription." accent />
            <PricingPreview kicker="BUNDLE" headline="$199/mo" body="4 audits + 10 documents per month." />
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/pricing" style={{ textDecoration: "none" }}>
              <Button variant="primary" size="lg" icon={ArrowRight}>View pricing</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          CLOSING CTA
          ==================================================================== */}
      <section style={{ background: "var(--ink)", color: "var(--paper)", padding: "112px 32px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <h2 className="serif" style={{ fontSize: "clamp(48px, 6vw, 72px)", fontWeight: 500, lineHeight: 1.02, margin: "0 0 28px" }}>
            See what your <em style={{ fontStyle: "italic", color: "var(--accent)" }}>auditors</em> would.
          </h2>
          <p style={{ fontSize: 18, color: "rgba(250,248,244,0.7)", lineHeight: 1.6, marginBottom: 40 }}>
            Run a free audit now. Top critical findings shown in the UI, no signup required.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/scan" style={{ textDecoration: "none" }}>
              <Button variant="accent" size="lg" icon={ArrowRight}>Run a free audit</Button>
            </Link>
            <Link href="/suite" style={{ textDecoration: "none" }}>
              <Button variant="inverse" size="lg" iconLeft={Eye}>Explore the suite</Button>
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </>
  );
}

function PricingPreview({ kicker, headline, body, accent }: { kicker: string; headline: string; body: string; accent?: boolean }) {
  return (
    <div
      style={{
        background: accent ? "var(--ink)" : "var(--card)",
        color: accent ? "var(--paper)" : "var(--ink)",
        border: accent ? "1px solid var(--ink)" : "1px solid var(--line)",
        borderRadius: 14,
        padding: 28,
        textAlign: "center",
      }}
    >
      <div className="mono" style={{ fontSize: 10.5, color: accent ? "rgba(250,248,244,0.55)" : "var(--muted-2)", letterSpacing: "0.1em", fontWeight: 600, marginBottom: 14 }}>
        {kicker}
      </div>
      <div className="serif" style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.1, marginBottom: 10 }}>
        {headline}
      </div>
      <div style={{ fontSize: 13, color: accent ? "rgba(250,248,244,0.7)" : "var(--muted)", lineHeight: 1.55 }}>
        {body}
      </div>
    </div>
  );
}
