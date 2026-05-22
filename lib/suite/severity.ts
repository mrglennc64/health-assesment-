// Severity model exclusive to the MediReady Suite. The existing /scan and
// /report keep their critical/watch/info model — this file is not imported
// from anywhere outside lib/suite/* and app/suite/*.

import type { SuiteSeverity } from "./types";

export const SUITE_SEVERITIES: SuiteSeverity[] = [
  "critical",
  "high",
  "medium",
  "low",
];

export const SUITE_SEVERITY_COLOR: Record<SuiteSeverity, string> = {
  critical: "#b94545", // accent red
  high: "#d49640",     // amber
  medium: "#a89150",   // muted yellow
  low: "#5a7a9f",      // muted blue
};

export const SUITE_SEVERITY_BG: Record<SuiteSeverity, string> = {
  critical: "rgba(185, 69, 69, 0.10)",
  high: "rgba(212, 150, 64, 0.10)",
  medium: "rgba(168, 145, 80, 0.10)",
  low: "rgba(90, 122, 159, 0.10)",
};

export function isSuiteSeverity(v: unknown): v is SuiteSeverity {
  return v === "critical" || v === "high" || v === "medium" || v === "low";
}

export function normaliseSeverity(v: unknown): SuiteSeverity {
  if (isSuiteSeverity(v)) return v;
  // Map a few common variants from the LLM.
  if (v === "info") return "low";
  if (v === "warn" || v === "watch" || v === "warning") return "medium";
  if (v === "issue" || v === "error" || v === "severe") return "critical";
  return "medium";
}
