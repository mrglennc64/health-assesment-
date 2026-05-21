"use client";

import Link from "next/link";
import {
  ArrowRight,
  Eye,
  Check,
  Hash,
  AlertCircle,
  FileCheck,
  Layers,
  Download,
  Clock,
  FileBarChart,
  Stethoscope,
  Briefcase,
  Globe,
  Wrench,
  Building2,
  Users,
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

      {/* HERO */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "88px 32px 72px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 72, alignItems: "center" }}>
          <div className="fade-up">
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 24 }}>
              SIX-CHANNEL HEALTHCARE AUDIT ENGINE
            </div>
            <h1 className="serif" style={{ fontSize: "clamp(44px, 5.8vw, 72px)", fontWeight: 500, lineHeight: 1.0, margin: "0 0 28px" }}>
              Surface what payers,
              <br />
              auditors, and regulators
              <br />
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                will find first
              </em>
              .
            </h1>
            <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.6, maxWidth: 560, marginBottom: 36 }}>
              Aegis runs six parallel audit channels — documentation, HIPAA,
              claims, patient communication, clinical content, and synthetic
              browser behavior. One report. Zero integration.
            </p>
            <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
              <Link href="/scan" style={{ textDecoration: "none" }}>
                <Button variant="primary" size="lg" icon={ArrowRight}>
                  Run free scan
                </Button>
              </Link>
              <Link href="/report" style={{ textDecoration: "none" }}>
                <Button variant="secondary" size="lg" iconLeft={Eye}>
                  View sample report
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
              <span>PDF EXPORT</span>
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
              boxShadow:
                "0 1px 0 rgba(11, 18, 32, 0.04), 0 24px 56px -20px rgba(11, 18, 32, 0.12)",
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
                    <span
                      className="mono"
                      style={{
                        fontSize: 9.5,
                        color: "var(--muted-2)",
                        width: 56,
                        flexShrink: 0,
                        letterSpacing: "0.04em",
                      }}
                    >
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

      {/* TRUST STRIP */}
      <section style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "var(--paper-2)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", letterSpacing: "0.1em", fontWeight: 600 }}>BUILT FOR</div>
          {["Clinics", "Billing companies", "Telehealth", "Healthcare SaaS", "Hospitals", "Consultants"].map((item) => (
            <div key={item} className="serif" style={{ fontSize: 19, color: "var(--ink-2)", fontWeight: 500 }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "112px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 56 }}>
          <div>
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 18 }}>HOW IT WORKS</div>
            <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.02, margin: 0 }}>
              File in.<br />Report out.<br />That&apos;s it.
            </h2>
          </div>
          <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.65, marginTop: 8 }}>
            Drop in a clinical note, a claim workflow description, or a healthcare website URL.
            Aegis runs six independent audit channels with isolated rulesets and dedicated prompts.
            Findings are returned with severity, code, and required actions, then combined into a
            structured report with an overall score, model attribution, and PDF export.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {[
            { n: "01", t: "Submit", d: "Paste text, upload a file, or enter a URL. No integration, no API keys, no SDK." },
            { n: "02", t: "Run", d: "Six channels execute in parallel. Each is bounded — no overlap, no leakage between rulesets." },
            { n: "03", t: "Export", d: "Overall score, structured findings, required actions. PDF for auditors. JSON for your stack." },
          ].map((step) => (
            <div key={step.n}>
              <div className="divider-rule" style={{ marginBottom: 24 }} />
              <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", marginBottom: 14, letterSpacing: "0.06em" }}>
                {step.n}
              </div>
              <h3 className="serif" style={{ fontSize: 32, fontWeight: 500, margin: "0 0 14px" }}>{step.t}</h3>
              <p style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHANNELS */}
      <section id="channels" style={{ background: "var(--ink)", color: "var(--paper)", padding: "112px 32px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 64 }}>
            <div>
              <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 18 }}>SIX AUDIT CHANNELS</div>
              <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.02, margin: 0 }}>
                Six bounded
                <br />perspectives.
                <br />
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Zero overlap.</em>
              </h2>
            </div>
            <p style={{ fontSize: 18, color: "rgba(250, 248, 244, 0.72)", lineHeight: 1.65, marginTop: 8 }}>
              Each channel is isolated by design. Prompts and rulesets are strictly bounded so
              documentation, HIPAA, claims, communication, content, and browser behavior are
              evaluated independently. Cross-channel patterns surface only at report aggregation —
              never inside a channel.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(250, 248, 244, 0.08)" }}>
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
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "112px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 56 }}>
          <div>
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 18 }}>WHAT&apos;S INCLUDED</div>
            <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.02, margin: 0 }}>
              Every<br />report.<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Every time.</em>
            </h2>
          </div>
          <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.65, marginTop: 8 }}>
            A consistent, structured output is the point. Whether you run one audit or one thousand,
            every report includes the same fields, in the same order, with the same provenance.
            Auditable. Reproducible. Diff-able.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, border: "1px solid var(--line)", borderRadius: 12, overflow: "hidden", background: "var(--card)" }}>
          {[
            { icon: Hash, label: "79-point audit", sub: "Across all six channels" },
            { icon: AlertCircle, label: "Severity counts", sub: "Critical · Watch · Info · Pass" },
            { icon: FileCheck, label: "Required actions", sub: "Per-channel action list" },
            { icon: Layers, label: "Model attribution", sub: "Primary + fallback per channel" },
            { icon: Download, label: "PDF export", sub: "Auditor-ready, paginated" },
            { icon: Hash, label: "Scan ID", sub: "Stable, sharable identifier" },
            { icon: Clock, label: "RFC timestamp", sub: "UTC, second-level precision" },
            { icon: FileBarChart, label: "JSON output", sub: "For your stack and dashboards" },
          ].map((item, i) => {
            const Icon = item.icon;
            const isLastRow = i >= 4;
            const isLastCol = (i + 1) % 4 === 0;
            return (
              <div
                key={item.label}
                style={{
                  padding: "28px 24px",
                  borderRight: isLastCol ? "none" : "1px solid var(--line)",
                  borderTop: isLastRow ? "1px solid var(--line)" : "none",
                }}
              >
                <Icon size={20} strokeWidth={1.5} color="var(--accent)" style={{ marginBottom: 14 }} />
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 12.5, color: "var(--muted)" }}>{item.sub}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHO IT'S FOR */}
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
              If you generate clinical documentation, submit claims, or handle patient data — Aegis
              gives you the same view payers and auditors will have, before they have it.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { icon: Stethoscope, label: "Clinics", sub: "Primary care, specialty, dental, mental health. No new system. Just an audit on what you already produce." },
              { icon: Briefcase, label: "Billing companies", sub: "Audit client workflows for missing taxonomy, NPI, payer ID. Reduce denials and shorten the appeal cycle." },
              { icon: Globe, label: "Telehealth", sub: "Validate documentation, claims, HIPAA, and patient-facing content across your platform — in minutes." },
              { icon: Wrench, label: "Healthcare SaaS", sub: "EHR add-ons, AI documentation tools, portal vendors. Catch issues before customer security reviews do." },
              { icon: Building2, label: "Hospitals", sub: "Outpatient and ambulatory services. Department-level visibility into documentation and claim quality." },
              { icon: Users, label: "Consultants", sub: "White-label audit layer. Deliver structured, defensible reports to clients without manual scoring." },
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
                    padding: 28,
                  }}
                >
                  <Icon size={22} strokeWidth={1.5} color="var(--accent)" style={{ marginBottom: 18 }} />
                  <h3 className="serif" style={{ fontSize: 22, fontWeight: 500, margin: "0 0 10px" }}>{item.label}</h3>
                  <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>{item.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ maxWidth: 1240, margin: "0 auto", padding: "112px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 56 }}>
          <div>
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 18 }}>PRICING</div>
            <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.02, margin: 0 }}>
              One audit,<br />or many.<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>You choose.</em>
            </h2>
          </div>
          <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.65, marginTop: 8 }}>
            Start with a single audit to find what matters most. Add monitoring once your team has
            cleared the first round of findings. No contracts, no setup fees, no minimums.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 28 }}>
          {[
            {
              name: "Claims Audit",
              price: 49,
              kicker: "SINGLE CHANNEL · FAST",
              tag: null,
              tagline: "Checks taxonomy, NPI, payer ID, clearinghouse, EDI 837.",
              features: ["Claims channel only", "Critical / Watch / Info findings", "Required actions list", "PDF + JSON export", "Scan ID + timestamp"],
            },
            {
              name: "Full Compliance Audit",
              price: 149,
              kicker: "ALL SIX CHANNELS",
              tag: "MOST POPULAR",
              tagline: "All six channels. HIPAA + documentation + claims + content + communication + synthetic.",
              features: ["All six audit channels", "Overall score + per-channel scores", "Model + fallback attribution", "Required actions, per channel", "PDF + JSON export"],
            },
            {
              name: "Exceptions & Denial Audit",
              price: 199,
              kicker: "DEEP DIVE",
              tag: null,
              tagline: "Deep dive into denials, missing fields, payer-specific rules.",
              features: ["Everything in Full Compliance", "Denial pattern analysis", "Payer-specific rule matrix", "Missing-field heat map", "Priority remediation queue"],
            },
          ].map((p) => (
            <div
              key={p.name}
              className="lift"
              style={{
                background: p.tag ? "var(--ink)" : "var(--card)",
                color: p.tag ? "var(--paper)" : "var(--ink)",
                borderRadius: 14,
                border: p.tag ? "1px solid var(--ink)" : "1px solid var(--line)",
                padding: 28,
                position: "relative",
              }}
            >
              {p.tag && (
                <span
                  className="mono"
                  style={{
                    position: "absolute",
                    top: -10,
                    left: 24,
                    background: "var(--accent)",
                    color: "white",
                    fontSize: 10,
                    fontWeight: 600,
                    padding: "5px 11px",
                    borderRadius: 4,
                    letterSpacing: "0.08em",
                  }}
                >
                  {p.tag}
                </span>
              )}
              <div className="mono" style={{ fontSize: 10.5, color: p.tag ? "rgba(250,248,244,0.5)" : "var(--muted-2)", marginBottom: 16, letterSpacing: "0.1em" }}>
                {p.kicker}
              </div>
              <h3 className="serif" style={{ fontSize: 26, fontWeight: 500, margin: "0 0 8px" }}>{p.name}</h3>
              <p style={{ fontSize: 13, color: p.tag ? "rgba(250,248,244,0.7)" : "var(--muted)", lineHeight: 1.5, margin: "0 0 20px", minHeight: 56 }}>
                {p.tagline}
              </p>
              <div style={{ marginBottom: 24, display: "flex", alignItems: "baseline", gap: 4 }}>
                <span style={{ fontSize: 14, opacity: 0.65 }}>$</span>
                <span className="serif" style={{ fontSize: 48, fontWeight: 500, lineHeight: 1 }}>{p.price}</span>
                <span style={{ fontSize: 13, opacity: 0.65, marginLeft: 4 }}>per audit</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 11 }}>
                {p.features.map((f) => (
                  <li key={f} style={{ fontSize: 13, lineHeight: 1.5, display: "flex", gap: 9 }}>
                    <Check size={14} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 3, color: "var(--accent)" }} />
                    <span style={{ opacity: 0.92 }}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/scan" style={{ display: "block", textDecoration: "none" }}>
                <Button variant={p.tag ? "accent" : "secondary"} style={{ width: "100%", justifyContent: "center" }}>
                  Run this audit
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div style={{ padding: "20px 28px", background: "var(--paper-2)", borderRadius: 12, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Need weekly monitoring instead of one-off audits?</div>
            <div style={{ fontSize: 13, color: "var(--muted)" }}>
              Subscriptions from <strong style={{ color: "var(--ink)" }}>$49/mo</strong> (clinics) to <strong style={{ color: "var(--ink)" }}>$999+/mo</strong> (enterprise) with weekly runs and trend tracking.
            </div>
          </div>
          <Link href="/scan" style={{ textDecoration: "none" }}>
            <Button variant="primary" icon={ArrowRight}>View monitoring plans</Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ink)", color: "var(--paper)", padding: "112px 32px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <h2 className="serif" style={{ fontSize: "clamp(48px, 6vw, 72px)", fontWeight: 500, lineHeight: 1.02, margin: "0 0 28px" }}>
            See what your <em style={{ fontStyle: "italic", color: "var(--accent)" }}>auditors</em> would.
          </h2>
          <p style={{ fontSize: 18, color: "rgba(250,248,244,0.7)", lineHeight: 1.6, marginBottom: 40 }}>
            Run a free scan now. Top three critical findings shown in the UI, no signup required.
            Unlock the full audit and PDF for $49.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/scan" style={{ textDecoration: "none" }}>
              <Button variant="accent" size="lg" icon={ArrowRight}>Run free scan</Button>
            </Link>
            <Link href="/report" style={{ textDecoration: "none" }}>
              <Button variant="inverse" size="lg" iconLeft={Eye}>View sample report</Button>
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </>
  );
}
