"use client";

import React, { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { ChannelScoreRow } from "@/components/ChannelScore";
import { Findings } from "@/components/Findings";
import { RequiredActions } from "@/components/RequiredActions";
import {
  channels,
  channelLabels,
  type Channel,
  type Run,
} from "@/lib/jobs/types";
import { classifyScore, overallScore } from "@/lib/scoring";

type RunResponse = { run: Run };

const SAMPLE_TEXT = `Patient seen for chest pain on 2026-04-15. No ICD-10 code recorded.
Site uses http://, not https. No CSP header. Google Analytics fires before consent.
Claim submitted without payer-required NPI field. No appointment reminder set.
Patient education content cites 2018 guidelines (now superseded).`;

function isRunComplete(run: Run): boolean {
  return channels.every((ch) => {
    const status = run.jobs[ch].status;
    return status === "done" || status === "failed";
  });
}

export default function ReportPage() {
  const [text, setText] = useState("");
  const [run, setRun] = useState<Run | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openChannel, setOpenChannel] = useState<Channel | null>(null);

  const runId = run?.id ?? null;

  useEffect(() => {
    if (!runId) return;
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/runs/${runId}`);
        if (!res.ok) return;
        const data = (await res.json()) as RunResponse;
        setRun(data.run);
        if (isRunComplete(data.run)) {
          clearInterval(interval);
          setLoading(false);
        }
      } catch {
        // ignore transient errors; poll again next tick
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [runId]);

  const startRun = async () => {
    setError(null);
    setOpenChannel(null);
    setLoading(true);
    setRun(null);
    try {
      const res = await fetch("/api/runs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = (await res.json()) as RunResponse | { error: string };
      if (!res.ok || !("run" in data)) {
        setError(("error" in data && data.error) || "Failed to start run.");
        setLoading(false);
        return;
      }
      setRun(data.run);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setLoading(false);
    }
  };

  const channelScores = run
    ? channels
        .filter((ch) => run.jobs[ch].status === "done")
        .map((ch) => ({
          name: ch,
          score: run.jobs[ch].result?.score ?? 0,
          status: classifyScore(run.jobs[ch].result?.score ?? 0),
        }))
    : [];
  const overall = overallScore(channelScores);
  const completedCount = run
    ? channels.filter(
        (ch) =>
          run.jobs[ch].status === "done" || run.jobs[ch].status === "failed"
      ).length
    : 0;

  const severityTotals = run
    ? channels.reduce(
        (acc, ch) => {
          const findings = run.jobs[ch].result?.findings ?? [];
          for (const f of findings) {
            if (f.severity === "issue") acc.critical++;
            else if (f.severity === "warn") acc.watch++;
            else acc.ok++;
          }
          return acc;
        },
        { critical: 0, watch: 0, ok: 0 }
      )
    : { critical: 0, watch: 0, ok: 0 };

  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-4">Health Report</h1>
      <p className="mb-3 text-sm text-slate-600">
        Paste a description of the site, claim workflow, or clinical
        documentation context. The engine fans out to six audit channels and
        polls until each is complete.
      </p>
      <textarea
        className="w-full border rounded p-2 mb-2 h-40 text-sm"
        placeholder="Paste context here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex gap-2 items-center mb-6">
        <button
          className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={startRun}
          disabled={loading || !text.trim()}
        >
          {loading ? "Analyzing…" : "Generate Report"}
        </button>
        <button
          className="text-sm text-slate-600 underline"
          onClick={() => setText(SAMPLE_TEXT)}
          disabled={loading}
        >
          Use sample input
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 border border-rose-200 bg-rose-50 text-rose-800 rounded text-sm">
          {error}
        </div>
      )}

      {run && (
        <div>
          <div className="flex justify-between items-start mb-3 flex-wrap gap-3">
            <div>
              <h2 className="text-xl font-semibold">
                Overall Score: {overall} / 100
              </h2>
              <div className="text-sm mt-1 flex gap-3">
                <span className="text-rose-700">
                  <span className="font-semibold">{severityTotals.critical}</span> critical
                </span>
                <span className="text-amber-700">
                  <span className="font-semibold">{severityTotals.watch}</span> watch
                </span>
                <span className="text-emerald-700">
                  <span className="font-semibold">{severityTotals.ok}</span> pass
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-500">
                {completedCount} / {channels.length} channels complete
              </span>
              {completedCount === channels.length && (
                <>
                  <a
                    className="text-sm bg-slate-100 hover:bg-slate-200 border px-3 py-1 rounded"
                    href={`/api/runs/${run.id}/pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download PDF
                  </a>
                  <button
                    className="text-sm bg-slate-100 hover:bg-slate-200 border px-3 py-1 rounded"
                    onClick={startRun}
                    disabled={loading || !text.trim()}
                  >
                    Run again
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="mb-4">
            {channels.map((ch) => {
              const job = run.jobs[ch];
              const isOpen = openChannel === ch;
              const canOpen = job.status === "done" && job.result;
              return (
                <div key={ch}>
                  <div
                    onClick={() => canOpen && setOpenChannel(isOpen ? null : ch)}
                    className={canOpen ? "cursor-pointer" : ""}
                  >
                    <ChannelScoreRow
                      job={job}
                      isOpen={isOpen}
                      expandable={!!canOpen}
                    />
                  </div>
                  {isOpen && job.result && (
                    <div className="border-l-2 border-slate-200 ml-2 pl-4 pb-4 -mt-1 mb-2">
                      <div className="text-xs text-slate-500 mb-2">
                        {channelLabels[ch]}
                      </div>
                      <Findings findings={job.result.findings} />
                      <RequiredActions
                        actions={job.result.requiredActions ?? []}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Layout>
  );
}
