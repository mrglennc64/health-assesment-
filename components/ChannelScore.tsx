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

function prettyModel(model: string): string {
  if (!model || model === "stub") return "stub";
  // truncate org/model:tag style names so badges stay narrow
  const tail = model.split("/").pop() ?? model;
  return tail.length > 32 ? tail.slice(0, 30) + "…" : tail;
}

export const ChannelScoreRow: React.FC<{
  job: Job;
  isOpen?: boolean;
  expandable?: boolean;
}> = ({ job, isOpen, expandable }) => {
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
        provider?: string;
        model?: string;
        fallbackFromProvider?: string;
      }
    | undefined;
  const provider = details?.provider ?? "";
  const model = details?.model ?? "";
  const fellBack = !!details?.fallbackFromProvider && provider !== "stub";
  const isStub = provider === "stub";

  return (
    <div
      className={`border rounded mb-2 bg-white p-3 ${expandable ? "hover:bg-slate-50 transition-colors" : ""}`}
    >
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-2 min-w-0">
          {expandable && (
            <span
              className="text-slate-400 text-sm w-4 inline-block select-none"
              aria-hidden
            >
              {isOpen ? "▾" : "▸"}
            </span>
          )}
          <span className="font-medium truncate">{label}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {isStub ? (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 uppercase tracking-wide">
              stub
            </span>
          ) : model ? (
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wide ${
                fellBack
                  ? "bg-amber-100 text-amber-800"
                  : "bg-slate-100 text-slate-700"
              }`}
              title={
                fellBack
                  ? `Preferred ${details!.fallbackFromProvider} was rate-limited; used ${provider}/${model}`
                  : `${provider} / ${model}`
              }
            >
              {fellBack && "↳ "}
              {prettyModel(model)}
            </span>
          ) : null}
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
