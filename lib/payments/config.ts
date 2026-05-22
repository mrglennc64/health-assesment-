// Payment configuration — public-facing fields used by the PayNow component.
// Bank receiving details and Revolut Checkout links are public by design.

export type ProductKey =
  | "audit_claims"
  | "audit_full"
  | "audit_denial"
  | "doc_audit_plan"
  | "doc_standards"
  | "doc_gap"
  | "doc_risk"
  | "doc_policy";

export type ProductInfo = {
  key: ProductKey;
  name: string;
  amountDisplay: string;
  amountCents: number;
  revolutUrl: string;
};

export const PRODUCTS: Record<ProductKey, ProductInfo> = {
  audit_claims: {
    key: "audit_claims",
    name: "Claims Audit",
    amountDisplay: "$49",
    amountCents: 4900,
    revolutUrl: "https://checkout.revolut.com/pay/96f7fc60-4d16-44d5-96c7-554f1775c0e5",
  },
  audit_full: {
    key: "audit_full",
    name: "Full Compliance Audit",
    amountDisplay: "$149",
    amountCents: 14900,
    revolutUrl: "https://checkout.revolut.com/pay/36c23286-e62b-4ec9-95ad-2dac90960cdc",
  },
  audit_denial: {
    key: "audit_denial",
    name: "Exceptions & Denial Audit",
    amountDisplay: "$199",
    amountCents: 19900,
    revolutUrl: "https://checkout.revolut.com/pay/5e145c24-d0ed-4e5a-8db2-4f8146d2a59d",
  },
  doc_audit_plan: {
    key: "doc_audit_plan",
    name: "Audit Plan Generator",
    amountDisplay: "$29",
    amountCents: 2900,
    revolutUrl: "https://checkout.revolut.com/pay/9c60da54-6457-41f0-8499-fcfa9a1f3ede",
  },
  doc_standards: {
    key: "doc_standards",
    name: "Standards Mapping",
    amountDisplay: "$19",
    amountCents: 1900,
    revolutUrl: "https://checkout.revolut.com/pay/afef8a00-c4c3-4042-99df-35e2ecc47076",
  },
  doc_gap: {
    key: "doc_gap",
    name: "Document Gap Analysis",
    amountDisplay: "$49",
    amountCents: 4900,
    revolutUrl: "https://checkout.revolut.com/pay/98f200a1-480f-412b-99ff-f5c326a8ab35",
  },
  doc_risk: {
    key: "doc_risk",
    name: "HIPAA Risk Assessment",
    amountDisplay: "$149",
    amountCents: 14900,
    revolutUrl: "https://checkout.revolut.com/pay/8b599aa9-61b1-4a2d-86a2-e0aad81834d6",
  },
  doc_policy: {
    key: "doc_policy",
    name: "Policy / SOP Generator",
    amountDisplay: "$29",
    amountCents: 2900,
    revolutUrl: "https://checkout.revolut.com/pay/f55f90a1-b35b-4beb-a8f5-cff71c8120dc",
  },
};

export function isProductKey(s: unknown): s is ProductKey {
  return typeof s === "string" && s in PRODUCTS;
}

// Default product when the /payment page is loaded with no ?product= query.
export const DEFAULT_PRODUCT: ProductKey = "audit_claims";

// Backward-compatible single-product fields (kept for any code path that still
// reads them directly). New code should use PRODUCTS[key] instead.
export const REVOLUT_CHECKOUT_URL = PRODUCTS.audit_claims.revolutUrl;
export const PAYMENT_AMOUNT_CENTS = PRODUCTS.audit_claims.amountCents;
export const PAYMENT_AMOUNT_DISPLAY = PRODUCTS.audit_claims.amountDisplay;
export const PAYMENT_CURRENCY = "USD";

export const BANK_TRANSFER = {
  currency: "USD",
  beneficiary: "Glenn Carter",
  iban: "LT96 3250 0055 2919 6900",
  bicSwift: "REVOLT21",
  bank: "Revolut Bank UAB",
  bankAddress: "Konstitucijos ave. 21B, 08130, Vilnius, Lithuania",
  correspondentBic: "CHASGB2L",
  referenceHint: "Your email or invoice number",
} as const;
