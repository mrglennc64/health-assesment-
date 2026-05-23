"use client";

import Link from "next/link";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";

const h2: React.CSSProperties = { fontSize: 20, fontWeight: 600, margin: "0 0 12px" };
const para: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, margin: 0 };
const li: React.CSSProperties = { fontSize: 15, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 4 };
const block: React.CSSProperties = { marginBottom: 36 };
const subH: React.CSSProperties = { fontSize: 14, fontWeight: 600, color: "var(--ink)", margin: "16px 0 6px" };
const code: React.CSSProperties = { fontSize: 13.5, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" };

export default function SecurityPage() {
  return (
    <>
      <MarketingNav />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 32px" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 18 }}>
          SECURITY · ARCHITECTURE · v1
        </div>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.05, margin: "0 0 18px" }}>
          How Aegis handles your data.
        </h1>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.6, marginBottom: 48, maxWidth: 680 }}>
          The honest version. What Aegis is, what Aegis is not, where your inputs go, how
          long they stay, and what we have not built yet.
        </p>

        <div style={block}>
          <h2 style={h2}>Position</h2>
          <p style={para}>
            Aegis is <strong>not a HIPAA Business Associate</strong>. It is a compliance-content
            analysis tool designed for de-identified text, sample documents, policies, and
            synthetic examples. Customers must not submit Protected Health Information (PHI).
            This position is reflected in our{" "}
            <Link href="/terms" style={{ color: "var(--accent)" }}>Terms of Service</Link> and
            enforced in the product through input warnings and acknowledgement gates on every
            data-collecting form.
          </p>
        </div>

        <div style={block}>
          <h2 style={h2}>Data flow</h2>
          <p style={para}>
            Two paths exist depending on which tool you use. Both begin with TLS-encrypted
            transport from your browser to our application server. Where they differ is
            persistence.
          </p>
          <div style={{ marginTop: 18, background: "var(--paper-2)", border: "1px solid var(--line)", borderRadius: 12, padding: 20 }}>
            <DataFlowDiagram />
          </div>
        </div>

        <div style={block}>
          <h2 style={h2}>What we receive — and what happens next</h2>

          <h3 style={subH}>/scan (free audit)</h3>
          <p style={para}>
            Text or URL is held in process memory for the duration of the request, sent to one
            or more AI providers for analysis, and discarded when the response is returned.
            Nothing is written to disk. Restarting the application server flushes any in-flight
            state. The job store is a single in-process map; there is no per-user history.
          </p>

          <h3 style={subH}>/suite/* (compliance documents)</h3>
          <p style={para}>
            Form inputs and generated outputs are persisted to a local SQLite database
            (<code style={code}>data/suite.db</code>) so you can re-download documents from
            your history. Each row stores: the form input you submitted, the generated JSON
            output, the source filename if you uploaded a document, the model and provider
            used, and a timestamp. You can permanently delete any row from the{" "}
            <Link href="/suite/history" style={{ color: "var(--accent)" }}>history page</Link>{" "}
            at any time, which issues a hard <code style={code}>DELETE</code> against the
            database.
          </p>
        </div>

        <div style={block}>
          <h2 style={h2}>Third-party processors</h2>
          <p style={para}>
            Inputs are sent to one or more of the following AI providers for inference:
          </p>
          <ul style={{ paddingLeft: 22, margin: "10px 0 12px" }}>
            <li style={li}>Google (Gemini)</li>
            <li style={li}>Mistral</li>
            <li style={li}>OpenRouter</li>
          </ul>
          <p style={para}>
            Each provider&apos;s terms govern their handling of submitted text.{" "}
            <strong>None of these providers operate under a HIPAA Business Associate
            Agreement with Aegis.</strong> This is the central reason our position is
            &ldquo;no PHI&rdquo; rather than &ldquo;PHI is safe with us.&rdquo;
          </p>
        </div>

        <div style={block}>
          <h2 style={h2}>Hosting, transport, and at-rest</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li style={li}>
              <strong>In transit:</strong> TLS 1.2 or higher between your browser and the
              application server. Inputs sent to AI providers are likewise transported over TLS.
            </li>
            <li style={li}>
              <strong>At rest:</strong> the Suite SQLite database lives on the application
              server&apos;s volume. <em>Volume-level encryption-at-rest is on our short
              remediation list ahead of public launch</em> and is one of the drivers for the
              migration described below.
            </li>
            <li style={li}>
              <strong>Server access:</strong> SSH key authentication only; passwords are
              disabled. Multi-factor authentication is enabled on the hosting control panel,
              domain registrar, source-code repository, and payment processor.
            </li>
            <li style={li}>
              <strong>Hosting provider:</strong> Aegis currently runs on a managed VPS
              suitable for evaluation and pre-launch use. We are migrating to a HIPAA-eligible
              hosting platform before opening the service to the general public. Current and
              future provider details are available under NDA on request.
            </li>
          </ul>
        </div>

        <div style={block}>
          <h2 style={h2}>What Aegis is not</h2>
          <ul style={{ paddingLeft: 22, margin: 0 }}>
            <li style={li}>Not an EHR or clinical system</li>
            <li style={li}>Not a clearinghouse or claims-routing service</li>
            <li style={li}>Not integrated with any EHR, billing system, or patient portal</li>
            <li style={li}>Not collecting analytics, telemetry, or behavioural data in the background</li>
            <li style={li}>Not training models on customer inputs</li>
          </ul>
        </div>

        <div style={block}>
          <h2 style={h2}>Honest limitations of the current implementation</h2>
          <p style={para}>
            What follows is what we have <em>not</em> built yet. We document it here because
            pretending these controls exist is the failure mode that destroys customer trust
            on first audit.
          </p>
          <ul style={{ paddingLeft: 22, margin: "10px 0 0" }}>
            <li style={li}>
              <strong>No per-user accounts.</strong> Anyone with the URL can use the tools.
              Suite history is global, not per-tenant.
            </li>
            <li style={li}>
              <strong>No audit log of document access.</strong> The database records who
              created a row and when; it does not log who read or downloaded it.
            </li>
            <li style={li}>
              <strong>No automated backup with documented retention.</strong> Backups depend
              on the hosting provider&apos;s snapshot policy.
            </li>
            <li style={li}>
              <strong>No SOC 2 or HITRUST certification.</strong> We maintain an internal
              self-assessment only.
            </li>
            <li style={li}>
              <strong>No third-party penetration test report.</strong> Planned ahead of paid
              enterprise rollouts; not before.
            </li>
          </ul>
        </div>

        <div style={block}>
          <h2 style={h2}>Ongoing review</h2>
          <p style={para}>
            This page and the underlying internal risk assessment are reviewed at least
            annually, and additionally whenever any of the following occur: a new third-party
            processor is added, a feature changes how inputs are stored or transmitted, a
            security incident is reported, or the founder&apos;s role changes.
          </p>
        </div>

        <div style={block}>
          <h2 style={h2}>Reporting a security issue</h2>
          <p style={para}>
            Email{" "}
            <a href="mailto:mrglenncarter@gmail.com?subject=SECURITY" style={{ color: "var(--accent)" }}>
              mrglenncarter@gmail.com
            </a>{" "}
            with subject line <code style={code}>SECURITY</code>. If we confirm unauthorised
            access to customer data, we will notify affected customers within 72 hours and
            provide a written description of what occurred.
          </p>
        </div>

        <div
          style={{
            marginTop: 48,
            padding: "16px 18px",
            background: "var(--paper-2)",
            border: "1px solid var(--line)",
            borderRadius: 10,
            fontSize: 13,
            color: "var(--muted)",
            lineHeight: 1.6,
          }}
        >
          Last reviewed: 2026-05-23. See also{" "}
          <Link href="/privacy" style={{ color: "var(--accent)" }}>Privacy</Link> and{" "}
          <Link href="/terms" style={{ color: "var(--accent)" }}>Terms of Service</Link>.
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}

type Box = { title: string; sub?: string; external?: boolean };

function DataFlowDiagram() {
  const cols: { label: string; x: number; boxes: Box[] }[] = [
    {
      label: "/SCAN  ·  EPHEMERAL",
      x: 50,
      boxes: [
        { title: "Browser" },
        { title: "Aegis", sub: "/scan endpoint (in-memory)" },
        { title: "AI provider", sub: "Mistral / Gemini / OpenRouter", external: true },
        { title: "Discarded", sub: "no disk write; flushed on response" },
      ],
    },
    {
      label: "/SUITE  ·  PERSISTED",
      x: 430,
      boxes: [
        { title: "Browser" },
        { title: "Aegis", sub: "/suite endpoint (server-side)" },
        { title: "AI provider", sub: "Mistral / Gemini / OpenRouter", external: true },
        { title: "SQLite", sub: "data/suite.db; deletable from history" },
      ],
    },
  ];

  // arrow label appears only on the first (Browser → Aegis) gap.
  const firstArrowLabel = "TLS 1.2+";

  return (
    <svg
      viewBox="0 0 720 360"
      style={{
        width: "100%",
        height: "auto",
        maxWidth: 720,
        display: "block",
        margin: "0 auto",
        color: "var(--ink)",
      }}
      role="img"
      aria-label="Aegis data flow diagram: the /scan path processes inputs in memory and discards them on response. The /suite path persists inputs and outputs to a local SQLite database, deletable from the history page. Both paths send text to an external AI provider with no BAA."
    >
      {cols.map((col) => (
        <g key={col.label}>
          <text
            x={col.x + 120}
            y={22}
            textAnchor="middle"
            fontSize={10}
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fill="currentColor"
            opacity={0.55}
            fontWeight={600}
            letterSpacing="0.08em"
          >
            {col.label}
          </text>
          {col.boxes.map((box, i) => {
            const y = 40 + i * 76;
            return (
              <g key={i}>
                <rect
                  x={col.x}
                  y={y}
                  width={240}
                  height={52}
                  rx={8}
                  ry={8}
                  fill="var(--paper)"
                  stroke="var(--line-2)"
                  strokeWidth={1}
                  strokeDasharray={box.external ? "4 3" : undefined}
                />
                <text
                  x={col.x + 120}
                  y={box.sub ? y + 22 : y + 32}
                  textAnchor="middle"
                  fontSize={13}
                  fontWeight={600}
                  fill="currentColor"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                >
                  {box.title}
                </text>
                {box.sub && (
                  <text
                    x={col.x + 120}
                    y={y + 39}
                    textAnchor="middle"
                    fontSize={10.5}
                    fill="currentColor"
                    opacity={0.6}
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    {box.sub}
                  </text>
                )}
                {i < col.boxes.length - 1 && (
                  <g>
                    <line
                      x1={col.x + 120}
                      y1={y + 52}
                      x2={col.x + 120}
                      y2={y + 72}
                      stroke="currentColor"
                      opacity={0.4}
                      strokeWidth={1.2}
                    />
                    <polygon
                      points={`${col.x + 116},${y + 70} ${col.x + 124},${y + 70} ${col.x + 120},${y + 76}`}
                      fill="currentColor"
                      opacity={0.5}
                    />
                    {i === 0 && (
                      <text
                        x={col.x + 128}
                        y={y + 67}
                        fontSize={9.5}
                        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                        fill="currentColor"
                        opacity={0.55}
                      >
                        {firstArrowLabel}
                      </text>
                    )}
                  </g>
                )}
              </g>
            );
          })}
        </g>
      ))}
      <text
        x={360}
        y={352}
        textAnchor="middle"
        fontSize={10}
        fill="currentColor"
        opacity={0.5}
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        letterSpacing="0.06em"
      >
        DASHED = EXTERNAL BOUNDARY · NO BAA WITH AI PROVIDERS
      </text>
    </svg>
  );
}
