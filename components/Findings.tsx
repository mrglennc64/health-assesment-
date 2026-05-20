import React from "react";
import type { Finding } from "@/lib/jobs/types";

const severityBadge: Record<Finding["severity"], string> = {
  issue: "bg-rose-100 text-rose-800",
  warn: "bg-amber-100 text-amber-800",
  ok: "bg-emerald-100 text-emerald-800",
};

const severityLabel: Record<Finding["severity"], string> = {
  issue: "critical",
  warn: "watch",
  ok: "info",
};

export const Findings: React.FC<{ findings: Finding[] }> = ({ findings }) => {
  if (!findings.length) {
    return <p className="text-sm text-slate-500">No findings.</p>;
  }
  return (
    <ul className="space-y-2">
      {findings.map((f, i) => (
        <li key={i} className="text-sm">
          <span
            className={`inline-block text-[10px] uppercase tracking-wide px-2 py-0.5 rounded mr-2 ${severityBadge[f.severity]}`}
          >
            {severityLabel[f.severity]}
          </span>
          <span className="font-medium">{f.label}</span>
          {f.detail && (
            <span className="text-slate-600"> — {f.detail}</span>
          )}
        </li>
      ))}
    </ul>
  );
};
