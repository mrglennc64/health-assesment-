"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { Button } from "@/components/ui/primitives";

const PER_DOC = [
  { name: "Audit Plan Generator", price: "$29", suffix: "/document", product: "doc_audit_plan" },
  { name: "Standards Mapping", price: "$19", suffix: "/mapping", product: "doc_standards" },
  { name: "Document Gap Analysis", price: "$49", suffix: "/document", product: "doc_gap" },
  { name: "HIPAA Risk Assessment", price: "$149", suffix: "/assessment", product: "doc_risk" },
  { name: "Policy / SOP Generator", price: "$29", suffix: "/document", product: "doc_policy" },
];

export default function PricingPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 32px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          PRICING
        </div>
        <h1 className="serif" style={{ fontSize: "clamp(40px, 5vw, 56px)", fontWeight: 500, lineHeight: 1.05, margin: "0 0 18px" }}>
          One audit, or a full
          <br />
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>compliance suite</em>. You choose.
        </h1>
        <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.65, maxWidth: 640, marginBottom: 56 }}>
          Free tier for invited users. Per-document pricing for one-offs. Subscriptions for teams.
        </p>
      </section>

      {/* SECTION 1 — Free Tier */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px 56px" }}>
        <div
          style={{
            background: "var(--ink)",
            color: "var(--paper)",
            border: "1px solid var(--ink)",
            borderRadius: 16,
            padding: "40px 44px",
            position: "relative",
          }}
        >
          <span
            className="mono"
            style={{
              position: "absolute",
              top: -12,
              left: 32,
              background: "var(--accent)",
              color: "white",
              fontSize: 10.5,
              fontWeight: 600,
              padding: "5px 12px",
              borderRadius: 4,
              letterSpacing: "0.1em",
            }}
          >
            INVITE ONLY
          </span>

          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <div className="mono" style={{ fontSize: 11, color: "rgba(250,248,244,0.55)", letterSpacing: "0.1em", fontWeight: 600, marginBottom: 14 }}>
                FREE TIER
              </div>
              <h2 className="serif" style={{ fontSize: 40, fontWeight: 500, lineHeight: 1.05, margin: "0 0 14px" }}>
                Free
              </h2>
              <p style={{ fontSize: 15.5, color: "rgba(250,248,244,0.78)", lineHeight: 1.65, marginBottom: 24, maxWidth: 380 }}>
                For early users evaluating MediReady. Every tool, gated by invite — request access and we&apos;ll set you up.
              </p>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Button variant="accent" icon={ArrowRight}>Request access</Button>
              </Link>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "3 full audits per month",
                "1 document per tool per month",
                "Unlimited standards mapping (short inputs)",
                "7-day history",
                "Demo monitoring dashboard",
              ].map((item) => (
                <li key={item} style={{ fontSize: 14, lineHeight: 1.5, display: "flex", gap: 10, color: "rgba(250,248,244,0.92)" }}>
                  <Check size={16} strokeWidth={2.5} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Per-Document Pricing */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px 56px" }}>
        <SectionHeader
          kicker="PER-DOCUMENT"
          headline="Per-document pricing"
          body="For one-off needs. Pay only for what you generate."
        />

        <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 12 }}>
          {PER_DOC.map((item, i) => (
            <div
              key={item.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 24px",
                borderBottom: i < PER_DOC.length - 1 ? "1px solid var(--line)" : "none",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <div style={{ fontSize: 15, fontWeight: 600 }}>{item.name}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div>
                  <span className="serif" style={{ fontSize: 20, fontWeight: 500 }}>{item.price}</span>
                  <span style={{ fontSize: 12, color: "var(--muted)", marginLeft: 4 }}>{item.suffix}</span>
                </div>
                <Link href={`/payment?product=${item.product}`} style={{ textDecoration: "none" }}>
                  <Button variant="secondary" size="sm">Pay</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — Suite Subscriptions */}
      <section style={{ background: "var(--paper-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SectionHeader
            kicker="SUITE SUBSCRIPTIONS"
            headline="For teams that generate often"
            body="Subscriptions are not yet active. Join the waitlist to be notified when they launch."
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            <SubCard
              name="Clinic"
              price="$99"
              tagline="Single-site practices and small clinics."
              features={["10 documents/month", "Unlimited standards mapping", "Unlimited audit plans", "Priority queue", "PDF + Word export"]}
              cta={{ label: "Join the waitlist", href: "/waitlist" }}
            />
            <SubCard
              highlighted
              tag="MOST POPULAR"
              name="Network / SaaS"
              price="$499"
              tagline="Multi-site networks and healthcare SaaS providers."
              features={["50 documents/month", "Unlimited risk assessments", "Unlimited gap analysis", "Team accounts", "Shared history"]}
              cta={{ label: "Join the waitlist", href: "/waitlist", variant: "accent" }}
            />
            <SubCard
              name="Enterprise"
              price="$999+"
              tagline="IDNs, large consultancies, high-volume operators."
              features={["Unlimited everything", "API access", "Weekly monitoring", "Dedicated support", "Custom integrations"]}
              cta={{ label: "Contact sales", href: "/contact" }}
            />
          </div>
        </div>
      </section>

      <MarketingFooter />
    </>
  );
}

function SectionHeader({ kicker, headline, body }: { kicker: string; headline: string; body: string }) {
  return (
    <div style={{ marginBottom: 28, maxWidth: 720 }}>
      <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 12 }}>
        {kicker}
      </div>
      <h2 className="serif" style={{ fontSize: 32, fontWeight: 500, lineHeight: 1.1, margin: "0 0 10px" }}>{headline}</h2>
      <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.6 }}>{body}</p>
    </div>
  );
}

function SubCard({
  name, price, tagline, features, cta, highlighted, tag,
}: {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  cta: { label: string; href: string; variant?: "primary" | "secondary" | "accent" };
  highlighted?: boolean;
  tag?: string;
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
      <h3 className="serif" style={{ fontSize: 24, fontWeight: 500, margin: "0 0 8px" }}>{name}</h3>
      <p style={{ fontSize: 13, color: highlighted ? "rgba(250,248,244,0.7)" : "var(--muted)", lineHeight: 1.5, margin: "0 0 20px", minHeight: 40 }}>
        {tagline}
      </p>
      <div style={{ marginBottom: 24, display: "flex", alignItems: "baseline", gap: 4 }}>
        <span className="serif" style={{ fontSize: 36, fontWeight: 500, lineHeight: 1 }}>{price}</span>
        <span style={{ fontSize: 13, opacity: 0.65, marginLeft: 4 }}>/month</span>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        {features.map((f) => (
          <li key={f} style={{ fontSize: 13, lineHeight: 1.5, display: "flex", gap: 9 }}>
            <Check size={14} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 3, color: "var(--accent)" }} />
            <span style={{ opacity: 0.92 }}>{f}</span>
          </li>
        ))}
      </ul>
      <Link href={cta.href} style={{ display: "block", textDecoration: "none" }}>
        <Button variant={cta.variant ?? "secondary"} style={{ width: "100%", justifyContent: "center" }}>
          {cta.label}
        </Button>
      </Link>
    </div>
  );
}
