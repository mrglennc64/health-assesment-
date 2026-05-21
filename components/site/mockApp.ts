import type { DisplaySeverity } from "./data";

export type MockRun = {
  id: string;
  target: string;
  date: string;
  iso: string;
  score: number;
  channels: number;
  channelsTotal: number;
  status: "complete" | "running" | "failed";
};

export const MOCK_RUNS: MockRun[] = [
  { id: "mpejne6d2sti", target: "COPD exacerbation follow-up · workflow + portal", date: "May 20, 2026 · 20:58 UTC", iso: "2026-05-20T20:58:00Z", score: 79, channels: 6, channelsTotal: 6, status: "complete" },
  { id: "mpd1lm0a8z3x", target: "patient-portal.example.com",                       date: "May 19, 2026 · 14:23 UTC", iso: "2026-05-19T14:23:00Z", score: 79, channels: 6, channelsTotal: 6, status: "complete" },
  { id: "mpcq04t6yjk2", target: "billing-workflow-v2",                              date: "May 12, 2026 · 09:14 UTC", iso: "2026-05-12T09:14:00Z", score: 71, channels: 6, channelsTotal: 6, status: "complete" },
  { id: "mpb8x2nfwl9p", target: "telehealth-app · subset",                          date: "May 5, 2026 · 17:02 UTC",  iso: "2026-05-05T17:02:00Z", score: 84, channels: 4, channelsTotal: 6, status: "complete" },
  { id: "mpax3jqkflw7", target: "ambulatory-discharge-summary",                     date: "Apr 28, 2026 · 11:40 UTC", iso: "2026-04-28T11:40:00Z", score: 68, channels: 6, channelsTotal: 6, status: "complete" },
  { id: "mpa01gnxk7r3", target: "pediatric-encounter-notes (sample of 50)",         date: "Apr 21, 2026 · 08:55 UTC", iso: "2026-04-21T08:55:00Z", score: 73, channels: 5, channelsTotal: 6, status: "complete" },
  { id: "mp9zk31wf02m", target: "claim-form-v3-staging",                            date: "Apr 14, 2026 · 19:11 UTC", iso: "2026-04-14T19:11:00Z", score: 62, channels: 6, channelsTotal: 6, status: "complete" },
];

export const CHANNEL_SCORES = {
  documentation: 78,
  hipaa: 64,
  claims: 82,
  communication: 88,
  content: 75,
  synthetic: 82,
};

// Trailing 8-week overall score history (last entry = most recent).
export const SCORE_HISTORY = [58, 62, 64, 71, 68, 73, 76, 79];

export type PendingAction = {
  channel: string;
  severity: DisplaySeverity;
  code: string;
  message: string;
  count: number;
};

export const PENDING_ACTIONS: PendingAction[] = [
  { channel: "HIPAA",   severity: "critical", code: "PHI_IN_URL_OR_PARAMS",    message: "Patient identifiers (MRN/DOB) appearing in 14 distinct URL patterns",  count: 14 },
  { channel: "CLAIMS",  severity: "critical", code: "MISSING_TAXONOMY",        message: "Provider taxonomy code missing on outpatient claim workflow",         count: 8  },
  { channel: "COMM.",   severity: "critical", code: "MISSING_DENIAL_NOTIF",    message: "No queued denial-notification workflow for 277CA rejections",        count: 1  },
  { channel: "CONTENT", severity: "watch",    code: "CONTENT_CURRENCY",        message: "Patient education pages cite superseded clinical guidelines",         count: 5  },
  { channel: "SYNTH.",  severity: "watch",    code: "CLEARINGHOUSE_FAILS",     message: "Synthetic submission fails 4.1% during clearinghouse window",         count: 1  },
  { channel: "HIPAA",   severity: "watch",    code: "THIRD_PARTY_TRACKERS",    message: "Analytics fires on /login before consent banner resolves",            count: 3  },
];

export const KPIS = {
  avgScore7d:      77,
  avgScore30d:     72,
  totalThisWeek:   2,
  totalThisMonth:  9,
  openCritical:    23,
  openWatch:       45,
  resolvedThisWeek: 11,
};
