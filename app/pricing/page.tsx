"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  FileCheck,
  BookOpen,
  Upload,
  ShieldAlert,
  FileText,
} from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { Button } from "@/components/ui/primitives";

type TierKey = "claims" | "full" | "denial" | "suite" | "bundle" | "enterprise";

const TIER_LABELS: Record<TierKey, string> = {
  claims: "Claims Audit",
  full: "Full Audit",
  denial: "Denial Audit",
  suite: "Suite",
  bundle: "Bundle",
  enterprise: "Enterprise",
};

const TIER_PRICES: Record<TierKey, string> = {
  claims: "$49",
  full: "$149",
  denial: "$199",
  suite: "$29–$149",
  bundle: "$199/mo",
  enterprise: "$999+/mo",
};

const MATRIX: { feature: string; in: TierKey[] }[] = [
  { feature: "Claims channel", in: ["claims", "full", "denial", "bundle", "enterprise"] },
  { feature: "All 6 channels", in: ["full", "denial", "bundle", "enterprise"] },
  { feature: "Denial analysis", in: ["denial", "bundle", "enterprise"] },
  { feature: "Audit plans", in: ["suite", "bundle", "enterprise"] },
  { feature: "Standards mapping", in: ["suite", "bundle", "enterprise"] },
  { feature: "Gap analysis", in: ["suite", "bundle", "enterprise"] },
  { feature: "HIPAA risk assessment", in: ["suite", "bundle", "enterprise"] },
  { feature: "SOP/policy generator", in: ["suite", "bundle", "enterprise"] },
  { feature: "Team accounts", in: ["enterprise"] },
  { feature: "API", in: ["enterprise"] },
];

const TIER_ORDER: TierKey[] = ["claims", "full", "denial", "suite", "bundle", "enterprise"];

export default function PricingPage() {
  return (
    <>
      <MarketingNav />

      {/* HERO */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "96px 32px 64px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          PRICING
        </div>
        <h1 className="serif" style={{ fontSize: "clamp(44px, 5.8vw, 64px)", fontWeight: 500, lineHeight: 1.02, margin: "0 0 18px", maxWidth: 900 }}>
          One audit, or a full
          <br />
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>compliance suite</em>. You choose.
        </h1>
        <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.65, maxWidth: 640 }}>
          Pay per audit, per document, or subscribe monthly for unlimited. Bundles available for teams that need both.
        </p>
      </section>

      {/* SECTION 1 — Audit Pricing */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "48px 32px 32px" }}>
        <SectionHeader kicker="ONE-OFF AUDITS" headline="Audit pricing" body="Run a single audit. Pay for the result." />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          <PriceCard
            kicker="SINGLE CHANNEL · FAST"
            name="Claims Audit"
            price="$49"
            priceSuffix="per audit"
            tagline="Checks taxonomy, NPI, payer ID, clearinghouse, EDI 837."
            features={[
              "Claims channel only",
              "Critical / Watch / Info findings",
              "Required actions list",
              "PDF + JSON export",
              "Scan ID + timestamp",
            ]}
            cta={{ label: "Run this audit", href: "/scan", variant: "secondary" }}
          />
          <PriceCard
            highlighted
            tag="MOST POPULAR"
            kicker="ALL SIX CHANNELS"
            name="Full Compliance Audit"
            price="$149"
            priceSuffix="per audit"
            tagline="All six channels. HIPAA + documentation + claims + content + communication + synthetic."
            features={[
              "All six audit channels",
              "Overall + per-channel scores",
              "Model + fallback attribution",
              "Required actions, per channel",
              "PDF + JSON export",
            ]}
            cta={{ label: "Run this audit", href: "/scan", variant: "accent" }}
          />
          <PriceCard
            kicker="DEEP DIVE"
            name="Exceptions & Denial Audit"
            price="$199"
            priceSuffix="per audit"
            tagline="Deep dive into denials, missing fields, payer-specific rules."
            features={[
              "Everything in Full Compliance",
              "Denial pattern analysis",
              "Payer-specific rule matrix",
              "Missing-field heat map",
              "Priority remediation queue",
            ]}
            cta={{ label: "Run this audit", href: "/scan", variant: "secondary" }}
          />
        </div>
      </section>

      {/* SECTION 2 — Compliance Suite Per-Document */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 32px 32px" }}>
        <SectionHeader
          kicker="COMPLIANCE SUITE"
          headline="Per-document pricing"
          body="Perfect for clinics, consultants, and one-off needs. Generate now, pay for what you use."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          <DocPriceCard icon={FileCheck} color="#b94545" name="Audit Plan Generator" price="$29" suffix="/document" href="/suite/audit-plan" />
          <DocPriceCard icon={BookOpen} color="#5a7a9f" name="Standards Mapping" price="$19" suffix="/mapping" href="/suite/standards-mapping" />
          <DocPriceCard icon={Upload} color="#d49640" name="Document Gap Analysis" price="$49" suffix="/document" href="/suite/gap-analysis" />
          <DocPriceCard icon={ShieldAlert} color="#a85a8a" name="HIPAA Risk Assessment" price="$149" suffix="/assessment" href="/suite/risk-assessment" />
          <DocPriceCard icon={FileText} color="#5a9f6a" name="Policy / SOP Generator" price="$29" suffix="/document" href="/suite/policy" />
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link href="/suite" style={{ textDecoration: "none" }}>
            <Button variant="primary" icon={ArrowRight}>Open the suite</Button>
          </Link>
        </div>
      </section>

      {/* SECTION 2b — Suite Subscriptions */}
      <section style={{ background: "var(--paper-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <SectionHeader
            kicker="SUITE SUBSCRIPTIONS"
            headline="For teams that generate often"
            body="Unlimited tools at predictable monthly cost. Cancel any time."
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            <PriceCard
              kicker="CLINIC"
              name="Clinic"
              price="$99"
              priceSuffix="/month"
              tagline="For single-site practices and small clinics."
              features={[
                "10 documents/month",
                "Unlimited standards mapping",
                "Unlimited audit plans",
                "Priority queue",
                "PDF + Word export",
              ]}
              cta={{ label: "Join the waitlist", href: "/waitlist", variant: "secondary" }}
            />
            <PriceCard
              highlighted
              tag="MOST POPULAR"
              kicker="NETWORK / SAAS"
              name="Network / SaaS"
              price="$499"
              priceSuffix="/month"
              tagline="For multi-site networks and healthcare SaaS providers."
              features={[
                "50 documents/month",
                "Unlimited risk assessments",
                "Unlimited gap analysis",
                "Team accounts",
                "Shared history",
              ]}
              cta={{ label: "Join the waitlist", href: "/waitlist", variant: "accent" }}
            />
            <PriceCard
              kicker="ENTERPRISE"
              name="Enterprise"
              price="$999+"
              priceSuffix="/month"
              tagline="For IDNs, large consultancies, and high-volume operators."
              features={[
                "Unlimited everything",
                "API access",
                "Weekly monitoring",
                "Dedicated support",
                "Custom integrations",
              ]}
              cta={{ label: "Join the waitlist", href: "/waitlist", variant: "secondary" }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 — Bundle */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "96px 32px" }}>
        <SectionHeader
          kicker="BUNDLE"
          headline="Compliance + Audits"
          body="Both products, one subscription. Best fit if you run audits and need the documents to fix what they find."
        />

        <div
          style={{
            background: "var(--ink)",
            color: "var(--paper)",
            border: "1px solid var(--ink)",
            borderRadius: 18,
            padding: "40px 48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
            position: "relative",
          }}
        >
          <span
            className="mono"
            style={{
              position: "absolute",
              top: -12,
              left: 36,
              background: "var(--accent)",
              color: "white",
              fontSize: 10.5,
              fontWeight: 600,
              padding: "5px 12px",
              borderRadius: 4,
              letterSpacing: "0.1em",
            }}
          >
            BEST VALUE
          </span>

          <div>
            <div className="mono" style={{ fontSize: 11, color: "rgba(250,248,244,0.55)", letterSpacing: "0.1em", fontWeight: 600, marginBottom: 12 }}>
              COMPLIANCE + AUDITS BUNDLE
            </div>
            <h3 className="serif" style={{ fontSize: 36, fontWeight: 500, margin: "0 0 16px" }}>
              $199<span style={{ fontSize: 18, opacity: 0.7 }}>/month</span>
            </h3>
            <p style={{ fontSize: 15, color: "rgba(250,248,244,0.78)", lineHeight: 1.65, marginBottom: 24 }}>
              Run audits AND generate the documents that close the findings. Both products, one price.
            </p>
            <Link href="/waitlist" style={{ textDecoration: "none" }}>
              <Button variant="accent" icon={ArrowRight}>Choose bundle</Button>
            </Link>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
            {[
              "4 full audits per month",
              "10 compliance documents per month",
              "Unlimited standards mapping",
              "Priority queue (audits first)",
              "PDF + JSON + Word export",
              "Shared history across both products",
            ].map((f) => (
              <li key={f} style={{ fontSize: 14, lineHeight: 1.5, display: "flex", gap: 10, color: "rgba(250,248,244,0.92)" }}>
                <Check size={16} strokeWidth={2.5} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 4 — Monitoring */}
      <section style={{ background: "var(--paper-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <SectionHeader
            kicker="MONITORING"
            headline="Weekly automated audits"
            body="Set the target once. Get a fresh report every week with trend tracking and regression alerts."
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            <MonitorCard tier="Clinics" price="$49/mo" desc="Single-site practices, one target." />
            <MonitorCard tier="Networks" price="$199/mo" desc="Multi-site, up to 5 targets." />
            <MonitorCard tier="SaaS" price="$499/mo" desc="Per-environment monitoring." />
            <MonitorCard tier="Enterprise" price="$999+/mo" desc="Unlimited targets, custom cadence." />
          </div>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/waitlist" style={{ textDecoration: "none" }}>
              <Button variant="primary" icon={ArrowRight}>View monitoring plans</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* COMPARISON MATRIX */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "96px 32px" }}>
        <SectionHeader
          kicker="COMPARE"
          headline="What's in each plan"
          body="The full feature × tier matrix."
        />

        <div style={{ overflowX: "auto", border: "1px solid var(--line)", borderRadius: 12 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: "var(--paper-2)" }}>
                <th style={{ textAlign: "left", padding: "14px 18px", fontSize: 11, fontWeight: 700, color: "var(--muted-2)", letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "1px solid var(--line)" }}>Feature</th>
                {TIER_ORDER.map((t) => (
                  <th key={t} style={{ textAlign: "center", padding: "14px 12px", fontSize: 11, fontWeight: 700, color: "var(--muted-2)", letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "1px solid var(--line)" }}>
                    {TIER_LABELS[t]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MATRIX.map((row) => (
                <tr key={row.feature} style={{ borderBottom: "1px solid var(--line)" }}>
                  <td style={{ padding: "12px 18px", fontSize: 13.5, color: "var(--ink-2)" }}>{row.feature}</td>
                  {TIER_ORDER.map((t) => (
                    <td key={t} style={{ textAlign: "center", padding: "12px 12px" }}>
                      {row.in.includes(t)
                        ? <Check size={16} strokeWidth={2.5} color="var(--good, #3c8a5a)" style={{ display: "inline-block" }} />
                        : <X size={14} color="var(--line-2)" style={{ display: "inline-block" }} />}
                    </td>
                  ))}
                </tr>
              ))}
              <tr style={{ background: "var(--paper-2)" }}>
                <td style={{ padding: "16px 18px", fontSize: 13, color: "var(--muted-2)", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>Price</td>
                {TIER_ORDER.map((t) => (
                  <td key={t} style={{ textAlign: "center", padding: "16px 12px", fontSize: 13, fontWeight: 700, color: "var(--ink)" }}>
                    {TIER_PRICES[t]}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <MarketingFooter />
    </>
  );
}

// =========================================================================

function SectionHeader({ kicker, headline, body }: { kicker: string; headline: string; body: string }) {
  return (
    <div style={{ marginBottom: 36, maxWidth: 720 }}>
      <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 14 }}>
        {kicker}
      </div>
      <h2 className="serif" style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.1, margin: "0 0 10px" }}>{headline}</h2>
      <p style={{ fontSize: 15.5, color: "var(--muted)", lineHeight: 1.6 }}>{body}</p>
    </div>
  );
}

function PriceCard({
  kicker, name, price, priceSuffix, tagline, features, cta, tag, highlighted,
}: {
  kicker: string;
  name: string;
  price: string;
  priceSuffix: string;
  tagline: string;
  features: string[];
  cta: { label: string; href: string; variant: "primary" | "secondary" | "accent" };
  tag?: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className="lift"
      style={{
        background: highlighted ? "var(--ink)" : "var(--card)",
        color: highlighted ? "var(--paper)" : "var(--ink)",
        borderRadius: 14,
        border: highlighted ? "1px solid var(--ink)" : "1px solid var(--line)",
        padding: 28,
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {tag && (
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
          {tag}
        </span>
      )}
      <div className="mono" style={{ fontSize: 10.5, color: highlighted ? "rgba(250,248,244,0.55)" : "var(--muted-2)", marginBottom: 16, letterSpacing: "0.1em" }}>
        {kicker}
      </div>
      <h3 className="serif" style={{ fontSize: 26, fontWeight: 500, margin: "0 0 8px" }}>{name}</h3>
      <p style={{ fontSize: 13, color: highlighted ? "rgba(250,248,244,0.7)" : "var(--muted)", lineHeight: 1.5, margin: "0 0 20px", minHeight: 56 }}>
        {tagline}
      </p>
      <div style={{ marginBottom: 24, display: "flex", alignItems: "baseline", gap: 4 }}>
        <span className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1 }}>{price}</span>
        <span style={{ fontSize: 13, opacity: 0.65, marginLeft: 4 }}>{priceSuffix}</span>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 11, flex: 1 }}>
        {features.map((f) => (
          <li key={f} style={{ fontSize: 13, lineHeight: 1.5, display: "flex", gap: 9 }}>
            <Check size={14} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 3, color: "var(--accent)" }} />
            <span style={{ opacity: 0.92 }}>{f}</span>
          </li>
        ))}
      </ul>
      <Link href={cta.href} style={{ display: "block", textDecoration: "none" }}>
        <Button variant={cta.variant} style={{ width: "100%", justifyContent: "center" }}>
          {cta.label}
        </Button>
      </Link>
    </div>
  );
}

function DocPriceCard({
  icon: Icon, color, name, price, suffix, href,
}: {
  icon: typeof FileCheck;
  color: string;
  name: string;
  price: string;
  suffix: string;
  href: string;
}) {
  return (
    <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        className="lift"
        style={{
          background: "var(--card)",
          border: "1px solid var(--line)",
          borderRadius: 12,
          padding: 22,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: 38, height: 38, borderRadius: 9,
            background: `${color}1a`,
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 14,
          }}
        >
          <Icon size={20} strokeWidth={1.75} color={color} />
        </div>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14, minHeight: 38 }}>{name}</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
          <span className="serif" style={{ fontSize: 28, fontWeight: 500, lineHeight: 1 }}>{price}</span>
          <span style={{ fontSize: 12, color: "var(--muted)" }}>{suffix}</span>
        </div>
      </div>
    </Link>
  );
}

function MonitorCard({ tier, price, desc }: { tier: string; price: string; desc: string }) {
  return (
    <div
      className="lift"
      style={{
        background: "var(--card)",
        border: "1px solid var(--line)",
        borderRadius: 12,
        padding: 22,
      }}
    >
      <div className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: "0.1em", fontWeight: 600, marginBottom: 10 }}>
        {tier.toUpperCase()}
      </div>
      <div className="serif" style={{ fontSize: 26, fontWeight: 500, marginBottom: 8 }}>{price}</div>
      <div style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.5 }}>{desc}</div>
    </div>
  );
}
