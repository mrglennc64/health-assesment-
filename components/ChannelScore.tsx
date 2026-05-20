import React from "react";
import type { Job } from "@/lib/jobs/types";
import { channelLabels } from "@/lib/jobs/types";
import { classifyScore } from "@/lib/scoring";

const statusColor = {
  pass: "bg-emerald-100 text-emerald-800 border-emerald-200",
  watch: "bg-amber-100 text-amber-800 border-amber-200",
  critical: "bg-rose-100 text-rose-800 border-rose-200",
};

function classifyError(msg: string | undefined): string {
  if (!msg) return "Failed";
  if (/\b429\b|rate.?limit|quota|too\s+many\s+requests/i.test(msg))
    return "Rate limited";
  if (/not valid JSON|parseable|parse/i.test(msg)) return "Bad response shape";
  if (/not implemented/i.test(msg)) return "Provider not configured";
  if (/ENOTFOUND|ECONN|fetch failed|network/i.test(msg)) return "Network error";
  if (/API_KEY|not set/i.test(msg)) return "Missing API key";
  return "Failed";
}

export const ChannelScoreRow: React.FC<{ job: Job }> = ({ job }) => {
  const label = channelLabels[job.channel];

  if (job.status === "pending") {
    return (
      <div className="border p-3 rounded mb-2 bg-white flex justify-between items-center">
        <span className="font-medium">{label}</span>
        <span className="text-slate-500 text-sm">Queued…</span>
      </div>
    );
  }

  if (job.status === "running") {
    const elapsed = job.startedAt
      ? Math.max(0, Math.round((Date.now() - Date.parse(job.startedAt)) / 1000))
      : 0;
    return (
      <div className="border p-3 rounded mb-2 bg-white flex justify-between items-center">
        <span className="font-medium">{label}</span>
        <span className="text-slate-500 text-sm">
          Analyzing… {elapsed > 0 && `(${elapsed}s)`}
        </span>
      </div>
    );
  }

  if (job.status === "failed") {
    const reason = classifyError(job.error);
    return (
      <div className="border p-3 rounded mb-2 bg-white">
        <div className="flex justify-between items-center">
          <span className="font-medium">{label}</span>
          <span className="text-xs px-2 py-1 rounded border bg-rose-50 text-rose-800 border-rose-200">
            {reason}
          </span>
        </div>
        {job.error && (
          <div className="text-xs text-slate-500 mt-1 truncate" title={job.error}>
            {job.error.slice(0, 160)}
          </div>
        )}
      </div>
    );
  }

  const score = job.result?.score ?? 0;
  const status = classifyScore(score);
  const details = job.result?.details as
    | {
        modelUsed?: string;
        fallbackFrom?: string;
      }
    | undefined;
  const usedFallback = details?.fallbackFrom && details?.modelUsed;
  const usedStub = details?.modelUsed === "stub";

  return (
    <div className="border p-3 rounded mb-2 bg-white">
      <div className="flex justify-between items-center">
        <span className="font-medium">{label}</span>
        <div className="flex items-center gap-2">
          {usedStub && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 uppercase tracking-wide">
              stub
            </span>
          )}
          {usedFallback && !usedStub && (
            <span
              className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 uppercase tracking-wide"
              title={`Preferred ${details!.fallbackFrom} was rate-limited; used ${details!.modelUsed}`}
            >
              via {details!.modelUsed}
            </span>
          )}
          <span
            className={`text-xs px-2 py-1 rounded border ${statusColor[status]}`}
          >
            {score} / 100 · {status.toUpperCase()}
          </span>
        </div>
      </div>
      {job.result?.summary && (
        <div className="text-xs text-slate-500 mt-1">{job.result.summary}</div>
      )}
    </div>
  );
};
