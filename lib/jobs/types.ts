export type Channel =
  | "clinical"
  | "hipaa"
  | "claims"
  | "communication"
  | "content"
  | "synthetic";

export type JobStatus = "pending" | "running" | "done" | "failed";

export type FindingSeverity = "ok" | "warn" | "issue";

export type Finding = {
  severity: FindingSeverity;
  label: string;
  detail?: string;
};

export type JobResult = {
  score: number;
  summary: string;
  findings: Finding[];
  requiredActions?: string[];
  details?: Record<string, unknown>;
};

export type Job = {
  channel: Channel;
  status: JobStatus;
  startedAt?: string;
  finishedAt?: string;
  durationMs?: number;
  result?: JobResult;
  error?: string;
};

export type Run = {
  id: string;
  text: string;
  customer?: string;
  plan?: "Starter" | "Standard" | "Professional";
  createdAt: string;
  jobs: Record<Channel, Job>;
};

export const channels: Channel[] = [
  "clinical",
  "hipaa",
  "claims",
  "communication",
  "content",
  "synthetic",
];

export const channelLabels: Record<Channel, string> = {
  clinical: "Clinical documentation",
  hipaa: "HIPAA & security",
  claims: "Claims workflow",
  communication: "Patient communication",
  content: "Clinical content",
  synthetic: "Synthetic browser check",
};
