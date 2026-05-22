// Free-tier limits and messages, per MediReady's free-tier spec:
//   - 3 full audits per month
//   - 1 document per tool per month
//   - Unlimited standards mapping (with per-input length cap)
//   - 7-day history
//
// Counter keys are stable strings stored in the quota_usage table.

export type CounterKey =
  | "audits"
  | "doc.audit-plan"
  | "doc.standards-mapping"
  | "doc.gap-analysis"
  | "doc.risk-assessment"
  | "doc.policy";

export const FREE_TIER_LIMITS: Record<CounterKey, number> = {
  audits: 3,
  "doc.audit-plan": 1,
  "doc.standards-mapping": Infinity, // unlimited, but with input length cap
  "doc.gap-analysis": 1,
  "doc.risk-assessment": 1,
  "doc.policy": 1,
};

// Maximum input length for the Standards Mapping tool on free tier.
export const STANDARDS_INPUT_MAX_CHARS = 2000;

// Suite history retention shown on the free tier (days).
export const FREE_TIER_HISTORY_DAYS = 7;

// User-facing messages when a quota is hit. The /contact link is appended
// by the UI banner so we keep the strings clean here.
export const LIMIT_MESSAGES: Record<CounterKey, string> = {
  audits:
    "Free tier limit reached. You've used all 3 free audits for this month. Contact us to enable higher limits or a pilot.",
  "doc.audit-plan":
    "Free tier limit reached. You've used your free Audit Plan for this month. Contact us to enable higher limits or a pilot.",
  "doc.standards-mapping":
    "Standards Mapping input is too long for the free tier. Trim to under 2,000 characters, or contact us for higher limits.",
  "doc.gap-analysis":
    "Free tier limit reached. You've used your free Gap Analysis for this month. Contact us to enable higher limits or a pilot.",
  "doc.risk-assessment":
    "Free tier limit reached. You've used your free HIPAA Risk Assessment for this month. Contact us to enable higher limits or a pilot.",
  "doc.policy":
    "Free tier limit reached. You've used your free Policy/SOP for this month. Contact us to enable higher limits or a pilot.",
};
