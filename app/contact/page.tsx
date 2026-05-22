"use client";

import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";

const row: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.8, marginBottom: 8 };
const linkStyle: React.CSSProperties = { color: "var(--accent)", textDecoration: "none" };

export default function ContactPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          CONTACT
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 32px" }}>
          Contact
        </h1>

        <p style={row}>
          General inquiries:{" "}
          <a href="mailto:support@usemediready.com" style={linkStyle}>support@usemediready.com</a>
        </p>
        <p style={row}>
          Sales:{" "}
          <a href="mailto:sales@usemediready.com" style={linkStyle}>sales@usemediready.com</a>
        </p>
        <p style={row}>
          Founder:{" "}
          <a href="mailto:glenn@usemediready.com" style={linkStyle}>glenn@usemediready.com</a>
        </p>

        <p style={{ ...row, marginTop: 24 }}>Stockholm, Sweden</p>
      </section>
      <MarketingFooter />
    </>
  );
}
