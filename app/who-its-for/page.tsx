"use client";

import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";

const items = [
  "Clinics",
  "Billing companies",
  "Healthcare SaaS",
  "Networks & groups",
  "Consultants",
  "Internal audit teams",
  "Regulators",
];

export default function WhoItsForPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          WHO IT&apos;S FOR
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 32px" }}>
          Who It&apos;s For
        </h1>

        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
          {items.map((label) => (
            <li
              key={label}
              style={{
                background: "var(--card)",
                border: "1px solid var(--line)",
                borderRadius: 10,
                padding: "16px 20px",
                fontSize: 15,
                color: "var(--ink-2)",
                fontWeight: 500,
              }}
            >
              {label}
            </li>
          ))}
        </ul>
      </section>
      <MarketingFooter />
    </>
  );
}
