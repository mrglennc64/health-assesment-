"use client";

import {
  BANK_TRANSFER,
  DEFAULT_PRODUCT,
  PRODUCTS,
  type ProductKey,
} from "@/lib/payments/config";
import { useLang } from "@/lib/i18n/LanguageContext";

function bankBlockForAmount(amount: string): string {
  return `Currency: ${BANK_TRANSFER.currency}
Beneficiary: ${BANK_TRANSFER.beneficiary}
IBAN: ${BANK_TRANSFER.iban}
BIC/SWIFT: ${BANK_TRANSFER.bicSwift}
Bank: ${BANK_TRANSFER.bank}
Address: ${BANK_TRANSFER.bankAddress}
Correspondent BIC: ${BANK_TRANSFER.correspondentBic}
Amount: ${amount}
Reference: [${BANK_TRANSFER.referenceHint}]`;
}

export function PayNow({ product = DEFAULT_PRODUCT }: { product?: ProductKey }) {
  const { t } = useLang();
  const p = t.payNow;
  const info = PRODUCTS[product];
  const bankBlock = bankBlockForAmount(info.amountDisplay);

  return (
    <div
      style={{
        border: "1px solid var(--line)",
        borderRadius: 12,
        padding: 24,
        background: "var(--card)",
        maxWidth: 480,
      }}
    >
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 6px" }}>
        {p.title}
      </h2>
      <div
        className="mono"
        style={{ fontSize: 11, color: "var(--muted-2)", letterSpacing: "0.06em", marginBottom: 16 }}
      >
        {info.name.toUpperCase()} · {info.amountDisplay}
      </div>

      {/* Option 1 — Revolut Checkout */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, margin: "0 0 6px" }}>
          {p.option1Heading}
        </h3>
        <p style={{ fontSize: 13, color: "var(--muted)", margin: "0 0 12px", lineHeight: 1.55 }}>
          {p.option1Body(info.amountDisplay)}
        </p>
        <a
          href={info.revolutUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--ink)",
            color: "var(--paper)",
            padding: "10px 18px",
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          {p.option1Cta(info.amountDisplay)}
        </a>
      </div>

      {/* Option 2 — Bank Transfer */}
      <div style={{ borderTop: "1px solid var(--line)", paddingTop: 16 }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, margin: "0 0 6px" }}>
          {p.option2Heading}
        </h3>
        <p style={{ fontSize: 13, color: "var(--muted)", margin: "0 0 12px", lineHeight: 1.55 }}>
          {p.option2Body}
        </p>
        <pre
          style={{
            background: "var(--paper-2)",
            fontSize: 11.5,
            padding: 12,
            borderRadius: 8,
            overflowX: "auto",
            margin: 0,
            lineHeight: 1.55,
            color: "var(--ink-2)",
            border: "1px solid var(--line)",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          }}
        >
          {bankBlock}
        </pre>
      </div>
    </div>
  );
}
