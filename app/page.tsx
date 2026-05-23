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
import { useLang } from "@/lib/i18n/LanguageContext";

const SUITE_TOOL_META = [
  { href: "/suite/audit-plan", icon: FileCheck, color: "#b94545" },
  { href: "/suite/standards-mapping", icon: BookOpen, color: "#5a7a9f" },
  { href: "/suite/gap-analysis", icon: Upload, color: "#d49640" },
  { href: "/suite/risk-assessment", icon: ShieldAlert, color: "#a85a8a" },
  { href: "/suite/policy", icon: FileText, color: "#5a9f6a" },
];

const WHO_ICONS = [
  Stethoscope,
  Briefcase,
  Globe,
  Building2,
  Wrench,
  ShieldCheck,
  ClipboardCheck,
  Gavel,
];

const SAFETY_ICONS = [Ban, Trash2, Lock, HardDrive, Cloud, ShieldCheck];

export default function HomePage() {
  const { t } = useLang();
  const h = t.home;

  return (
    <>
      <MarketingNav />

      {/* HERO */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "88px 32px 72px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 72, alignItems: "center" }}>
          <div className="fade-up">
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 24 }}>
              {h.heroKicker}
            </div>
            <h1 className="serif" style={{ fontSize: "clamp(44px, 5.8vw, 72px)", fontWeight: 500, lineHeight: 1.0, margin: "0 0 28px" }}>
              {h.heroTitle}
            </h1>
            <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.6, maxWidth: 560, marginBottom: 36 }}>
              {h.heroBody}
            </p>
            <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
              <Link href="/scan" style={{ textDecoration: "none" }}>
                <Button variant="primary" size="lg" icon={ArrowRight}>
                  {h.ctaRunAudit}
                </Button>
              </Link>
              <Link href="/suite" prefetch={false} style={{ textDecoration: "none" }}>
                <Button variant="secondary" size="lg" iconLeft={Eye}>
                  {h.ctaExploreSuite}
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
                {h.badgeLLM}
              </span>
              <span style={{ width: 1, height: 12, background: "var(--line-2)" }} />
              <span>{h.badgeExport}</span>
              <span style={{ width: 1, height: 12, background: "var(--line-2)" }} />
              <span>{h.badgeIntegration}</span>
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

      {/* SECTION 1 — Two Products */}
      <section style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "var(--paper-2)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "112px 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 18 }}>
              {h.twoProductsKicker}
            </div>
            <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.02, margin: 0 }}>
              {h.twoProductsTitle}
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {/* AUDITS */}
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
                {h.productOneKicker}
              </div>
              <h3 className="serif" style={{ fontSize: 32, fontWeight: 500, margin: "0 0 12px" }}>
                {h.productOneName}
              </h3>
              <p style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.6, marginBottom: 24 }}>
                {h.productOneBody}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                {h.productOneList.map((label) => (
                  <li key={label} style={{ fontSize: 13.5, color: "var(--ink-2)", display: "flex", gap: 10 }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>›</span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
              <Link href="/scan" style={{ textDecoration: "none" }}>
                <Button variant="primary" icon={ArrowRight}>{h.productOneCTA}</Button>
              </Link>
            </div>

            {/* SUITE */}
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
                {h.productTwoKicker}
              </div>
              <h3 className="serif" style={{ fontSize: 32, fontWeight: 500, margin: "0 0 12px" }}>
                {h.productTwoName}
              </h3>
              <p style={{ fontSize: 14.5, color: "rgba(250,248,244,0.72)", lineHeight: 1.6, marginBottom: 24 }}>
                {h.productTwoBody}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                {h.productTwoList.map((label) => (
                  <li key={label} style={{ fontSize: 13.5, color: "rgba(250,248,244,0.9)", display: "flex", gap: 10 }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>›</span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
              <Link href="/suite" prefetch={false} style={{ textDecoration: "none" }}>
                <Button variant="accent" icon={ArrowRight}>{h.productTwoCTA}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Suite */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "112px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 56 }}>
          <div>
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 18 }}>{h.suiteKicker}</div>
            <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.02, margin: 0 }}>
              {h.suiteTitle}
            </h2>
          </div>
          <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.65, marginTop: 8 }}>
            {h.suiteBody}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {SUITE_TOOL_META.map((meta, i) => {
            const tool = h.suiteTools[i];
            const Icon = meta.icon;
            return (
              <Link key={meta.href} href={meta.href} prefetch={false} style={{ textDecoration: "none", color: "inherit" }}>
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
                      background: `${meta.color}1a`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 18,
                    }}
                  >
                    <Icon size={20} strokeWidth={1.75} color={meta.color} />
                  </div>
                  <h3 className="serif" style={{ fontSize: 20, fontWeight: 500, margin: "0 0 8px" }}>{tool.title}</h3>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.55, margin: 0 }}>{tool.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link href="/suite" prefetch={false} style={{ textDecoration: "none" }}>
            <Button variant="primary" icon={ArrowRight}>{h.suiteCTA}</Button>
          </Link>
        </div>
      </section>

      {/* SECTION 3 — Audit Engine */}
      <section id="audit" style={{ background: "var(--ink)", color: "var(--paper)", padding: "112px 32px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 64 }}>
            <div>
              <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 18 }}>{h.engineKicker}</div>
              <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.02, margin: 0 }}>
                {h.engineTitle}
              </h2>
            </div>
            <p style={{ fontSize: 18, color: "rgba(250, 248, 244, 0.72)", lineHeight: 1.65, marginTop: 8 }}>
              {h.engineBody}
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
                  <h3 className="serif" style={{ fontSize: 24, fontWeight: 500, margin: "0 0 10px" }}>{t.channels[ch.id].label}</h3>
                  <p style={{ fontSize: 13, color: "rgba(250, 248, 244, 0.62)", lineHeight: 1.55, margin: 0 }}>{t.channels[ch.id].desc}</p>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/scan" style={{ textDecoration: "none" }}>
              <Button variant="accent" size="lg" icon={ArrowRight}>{h.engineCTA}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Who It's For */}
      <section id="who-its-for" style={{ background: "var(--paper-2)", padding: "112px 32px", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 56 }}>
            <div>
              <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 18 }}>{h.whoKicker}</div>
              <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.02, margin: 0 }}>
                {h.whoTitle}
              </h2>
            </div>
            <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.65, marginTop: 8 }}>
              {h.whoBody}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {h.whoCards.map((item, i) => {
              const Icon = WHO_ICONS[i];
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

      {/* SECTION 5 — Why It's Safe */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "112px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 56 }}>
          <div>
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 18 }}>{h.safetyKicker}</div>
            <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.02, margin: 0 }}>
              {h.safetyTitle}
            </h2>
          </div>
          <p style={{ fontSize: 18, color: "var(--muted)", lineHeight: 1.65, marginTop: 8 }}>
            {h.safetyBody}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 40 }}>
          {h.safetyCards.map((item, i) => {
            const Icon = SAFETY_ICONS[i];
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
            <Button variant="secondary" icon={ArrowRight}>{h.safetyCTA}</Button>
          </Link>
        </div>
      </section>

      {/* SECTION 6 — Pricing */}
      <section style={{ background: "var(--paper-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 18 }}>{h.pricingKicker}</div>
            <h2 className="serif" style={{ fontSize: 48, fontWeight: 500, lineHeight: 1.05, margin: "0 0 14px" }}>
              {h.pricingTitle}
            </h2>
            <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.6, maxWidth: 680, marginInline: "auto" }}>
              {h.pricingBody}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 32 }}>
            <PricingPreview kicker="ONE-OFF AUDITS" headline="From $49" body="Claims · Full · Denial." />
            <PricingPreview kicker="COMPLIANCE SUITE" headline="From $29" body="Per document, or $99/mo subscription." accent />
            <PricingPreview kicker="BUNDLE" headline="$199/mo" body="4 audits + 10 documents per month." />
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/pricing" style={{ textDecoration: "none" }}>
              <Button variant="primary" size="lg" icon={ArrowRight}>{h.pricingCTA}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section style={{ background: "var(--ink)", color: "var(--paper)", padding: "112px 32px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <h2 className="serif" style={{ fontSize: "clamp(48px, 6vw, 72px)", fontWeight: 500, lineHeight: 1.02, margin: "0 0 28px" }}>
            {h.closingTitle}
          </h2>
          <p style={{ fontSize: 18, color: "rgba(250,248,244,0.7)", lineHeight: 1.6, marginBottom: 40 }}>
            {h.closingBody}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/scan" style={{ textDecoration: "none" }}>
              <Button variant="accent" size="lg" icon={ArrowRight}>{h.ctaRunAudit}</Button>
            </Link>
            <Link href="/suite" prefetch={false} style={{ textDecoration: "none" }}>
              <Button variant="inverse" size="lg" iconLeft={Eye}>{h.ctaExploreSuite}</Button>
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
