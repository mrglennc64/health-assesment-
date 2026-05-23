"use client";

import Link from "next/link";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";

const h2: React.CSSProperties = { fontSize: 20, fontWeight: 600, margin: "0 0 12px" };
const para: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, margin: 0 };
const li: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 4 };
const block: React.CSSProperties = { marginBottom: 36 };

export default function PrivacyPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          PRIVACY
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 48px" }}>
          Privacy
        </h1>

        <div style={block}>
          <h2 style={h2}>No PHI</h2>
          <p style={para}>
            Aegis is designed for de-identified content and does not knowingly receive
            Protected Health Information (PHI). Submitting PHI violates our{" "}
            <Link href="/terms" style={{ color: "var(--accent)" }}>Terms of Service</Link>.
            See <Link href="/security" style={{ color: "var(--accent)" }}>Security</Link> for
            the full data-flow architecture.
          </p>
        </div>

        <div style={block}>
          <h2 style={h2}>How your inputs are handled</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li style={li}>
              <strong>/scan (free audit):</strong> processed in process memory and discarded
              when the response returns. Nothing is written to disk.
            </li>
            <li style={li}>
              <strong>/suite/* (compliance documents):</strong> form input and generated
              output are stored locally in a SQLite database so you can re-download documents.
              You can permanently delete any entry from the{" "}
              <Link href="/suite/history" style={{ color: "var(--accent)" }}>history page</Link>{" "}
              at any time.
            </li>
          </ul>
        </div>

        <div style={block}>
          <h2 style={h2}>Data we collect</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li style={li}>Email address (only if you provide it — waitlist, contact form)</li>
            <li style={li}>Payment information, processed by Revolut (we do not store card data)</li>
            <li style={li}>Non-PHI operational logs from the server (request timing, errors)</li>
          </ul>
        </div>

        <div style={block}>
          <h2 style={h2}>Data we do not collect</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li style={li}>Patient identifiers or medical records</li>
            <li style={li}>EHR data or clinical-system content</li>
            <li style={li}>Background analytics, telemetry, or behavioural tracking</li>
          </ul>
        </div>

        <div style={block}>
          <h2 style={h2}>Third-party processors</h2>
          <p style={para}>
            Inputs you submit are sent to one or more AI providers (Google Gemini, Mistral,
            OpenRouter) for analysis. None of these providers operate under a HIPAA Business
            Associate Agreement with Aegis. Do not submit PHI.
          </p>
        </div>

        <div style={block}>
          <h2 style={h2}>Deleting your data</h2>
          <p style={para}>
            For Suite documents, use the trash icon on the{" "}
            <Link href="/suite/history" style={{ color: "var(--accent)" }}>history page</Link>{" "}
            to permanently remove a record. To request deletion of other data (email address,
            contact-form messages), write to{" "}
            <a href="mailto:mrglenncarter@gmail.com" style={{ color: "var(--accent)" }}>
              mrglenncarter@gmail.com
            </a>.
          </p>
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}
