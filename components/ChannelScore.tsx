import React from "react";
import type { Job } from "@/lib/jobs/types";
import { channelLabels } from "@/lib/jobs/types";
import { classifyScore } from "@/lib/scoring";

const statusColor = {
  pass: "bg-emerald-100 text-emerald-800 border-emerald-200",
  watch: "bg-amber-100 text-amber-800 border-amber-200",
  critical: "bg-rose-100 text-rose-800 border-rose-200",
};

export const ChannelScoreRow: React.FC<{ job: Job }> = ({ job }) => {
  const label = channelLabels[job.channel];

  if (job.status === "pending" || job.status === "running") {
    return (
      <div className="border p-3 rounded mb-2 bg-white flex justify-between items-center">
        <span className="font-medium">{label}</span>
        <span className="text-slate-500 text-sm">
          {job.status === "pending" ? "Queued…" : "Analyzing…"}
        </span>
      </div>
    );
  }

  if (job.status === "failed") {
    return (
      <div className="border p-3 rounded mb-2 bg-white">
        <div className="flex justify-between items-center">
          <span className="font-medium">{label}</span>
          <span className="text-rose-700 text-sm">Failed</span>
        </div>
        {job.error && (
          <div className="text-xs text-slate-500 mt-1">{job.error}</div>
        )}
      </div>
    );
  }

  const score = job.result?.score ?? 0;
  const status = classifyScore(score);

  return (
    <div className="border p-3 rounded mb-2 bg-white">
      <div className="flex justify-between items-center">
        <span className="font-medium">{label}</span>
        <span
          className={`text-xs px-2 py-1 rounded border ${statusColor[status]}`}
        >
          {score} / 100 · {status.toUpperCase()}
        </span>
      </div>
      {job.result?.summary && (
        <div className="text-xs text-slate-500 mt-1">{job.result.summary}</div>
      )}
    </div>
  );
};
