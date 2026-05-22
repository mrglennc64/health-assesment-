"use client";

import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";

const h2: React.CSSProperties = { fontSize: 20, fontWeight: 600, margin: "0 0 12px" };
const para: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, margin: 0 };
const block: React.CSSProperties = { marginBottom: 32 };

export default function TermsPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          TERMS OF USE
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 32px" }}>
          Terms of Use
        </h1>

        <p style={{ ...para, marginBottom: 40 }}>
          By using MediReady, you agree to the following terms.
        </p>

        <div style={block}>
          <h2 style={h2}>1. No Medical Advice</h2>
          <p style={para}>
            MediReady provides audit and compliance automation tools. It does not provide medical, legal,
            or regulatory advice.
          </p>
        </div>

        <div style={block}>
          <h2 style={h2}>2. User Responsibility</h2>
          <p style={para}>
            You are responsible for ensuring that any data you upload does not contain PHI or other sensitive
            information that violates your internal policies or applicable laws.
          </p>
        </div>

        <div style={block}>
          <h2 style={h2}>3. Data Handling</h2>
          <p style={para}>
            MediReady processes inputs ephemerally and does not store PHI. Compliance Suite outputs are stored
            locally and never shared or used for training.
          </p>
        </div>

        <div style={block}>
          <h2 style={h2}>4. Payment &amp; Billing</h2>
          <p style={para}>
            Payments are handled via secure third-party processors. All fees are non-refundable unless required by law.
          </p>
        </div>

        <div style={block}>
          <h2 style={h2}>5. Limitation of Liability</h2>
          <p style={para}>
            MediReady is provided &ldquo;as is&rdquo; without warranties. We are not liable for indirect, incidental,
            or consequential damages.
          </p>
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
