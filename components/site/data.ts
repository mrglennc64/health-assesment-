import {
  FileText,
  Shield,
  FileCheck,
  MessageSquare,
  BookOpen,
  Globe,
  type LucideIcon,
} from "lucide-react";

export type DisplaySeverity = "critical" | "watch" | "info" | "pass";

export type ChannelDef = {
  id:
    | "documentation"
    | "hipaa"
    | "claims"
    | "communication"
    | "content"
    | "synthetic";
  label: string;
  short: string;
  icon: LucideIcon;
  kicker: string;
  desc: string;
};

export const CHANNELS: ChannelDef[] = [
  {
    id: "documentation",
    label: "Clinical documentation",
    short: "Documentation",
    icon: FileText,
    kicker: "01",
    desc: "ICD-10, CPT, HCPCS, modifiers, NPI, taxonomy, encounter completeness",
  },
  {
    id: "hipaa",
    label: "HIPAA & security",
    short: "HIPAA",
    icon: Shield,
    kicker: "02",
    desc: "PHI exposure, headers, encryption, trackers, consent",
  },
  {
    id: "claims",
    label: "Claims workflow",
    short: "Claims",
    icon: FileCheck,
    kicker: "03",
    desc: "Payer rules, clearinghouse, EDI 837, payer IDs, denials",
  },
  {
    id: "communication",
    label: "Patient communication",
    short: "Communication",
    icon: MessageSquare,
    kicker: "04",
    desc: "Reminders, denial notices, opt-outs, privacy signals",
  },
  {
    id: "content",
    label: "Clinical content",
    short: "Content",
    icon: BookOpen,
    kicker: "05",
    desc: "Guideline currency, evidence alignment, red-flag instructions",
  },
  {
    id: "synthetic",
    label: "Synthetic browser check",
    short: "Synthetic",
    icon: Globe,
    kicker: "06",
    desc: "JS errors, network failures, payer API calls, performance",
  },
];

// Maps engine channel id (clinical) -> display id (documentation) and back.
export const ENGINE_TO_DISPLAY: Record<string, ChannelDef["id"]> = {
  clinical: "documentation",
  hipaa: "hipaa",
  claims: "claims",
  communication: "communication",
  content: "content",
  synthetic: "synthetic",
};

export const DISPLAY_TO_ENGINE: Record<ChannelDef["id"], string> = {
  documentation: "clinical",
  hipaa: "hipaa",
  claims: "claims",
  communication: "communication",
  content: "content",
  synthetic: "synthetic",
};

// Bridges engine severity (issue | warn | ok) to display severity.
export function engineSeverityToDisplay(
  sev: "issue" | "warn" | "ok"
): DisplaySeverity {
  if (sev === "issue") return "critical";
  if (sev === "warn") return "watch";
  return "info";
}

// Sample run used on the marketing site only.
export const SAMPLE_RUN_TEASER = {
  scanId: "mpejne6d2sti",
  target: "COPD exacerbation follow-up · workflow + portal",
  overall: 79,
  ts: "Wed, 20 May 2026 · 20:58 UTC",
  modelPrimary: "mistral-large-latest",
  modelFallback: "openrouter/owl-alpha",
  counts: { critical: 5, watch: 9, info: 8 },
  preview: [
    { ch: "HIPAA", sev: "critical" as const, code: "PHI_IN_URL_OR_PARAMS", title: "PHI in URL parameters" },
    { ch: "CLAIMS", sev: "critical" as const, code: "MISSING_TAXONOMY", title: "Missing taxonomy code" },
    { ch: "COMM.", sev: "watch" as const, code: "MISSING_DENIAL_NOTIF", title: "No denial notification workflow" },
    { ch: "CONTENT", sev: "info" as const, code: "CONTENT_CURRENCY", title: "2025 GOLD guidelines referenced" },
  ],
};
