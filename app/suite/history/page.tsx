import { headers } from "next/headers";
import Link from "next/link";
import { ArrowLeft, Clock, FileCheck, BookOpen, Upload, ShieldAlert, FileText } from "lucide-react";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { Button } from "@/components/ui/primitives";
import { HistorySeedButton } from "@/components/site/HistorySeedButton";
import { DeleteHistoryButton } from "@/components/site/DeleteHistoryButton";
import { listOutputs } from "@/lib/suite/db";
import type { ToolId } from "@/lib/suite/types";
import { FREE_TIER_HISTORY_DAYS, isAdmin } from "@/lib/quotas";
import { getUsernameFromRequest } from "@/lib/quotas/identity";

export const dynamic = "force-dynamic";

const TOOL_LABEL: Record<ToolId, string> = {
  "audit-plan": "Audit Plan",
  "standards-mapping": "Standards Mapping",
  "gap-analysis": "Gap Analysis",
  "risk-assessment": "Risk Assessment",
  "policy": "Policy / SOP",
};

const TOOL_ICON: Record<ToolId, typeof FileCheck> = {
  "audit-plan": FileCheck,
  "standards-mapping": BookOpen,
  "gap-analysis": Upload,
  "risk-assessment": ShieldAlert,
  "policy": FileText,
};

const TOOL_COLOR: Record<ToolId, string> = {
  "audit-plan": "#b94545",
  "standards-mapping": "#5a7a9f",
  "gap-analysis": "#d49640",
  "risk-assessment": "#a85a8a",
  "policy": "#5a9f6a",
};

function fmtDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleString();
  } catch {
    return iso;
  }
}

export default async function SuiteHistoryPage() {
  // Build a synthetic Request-shaped object so getUsernameFromRequest works
  // from a server component (it reads from a headers().Authorization).
  const hdrs = await headers();
  const fakeReq = new Request("http://internal", {
    headers: {
      authorization: hdrs.get("authorization") ?? hdrs.get("Authorization") ?? "",
    },
  });
  const userId = getUsernameFromRequest(fakeReq);
  const admin = isAdmin(userId);

  let sinceISO: string | undefined;
  if (!admin) {
    // Server component — Date.now() runs at request time, which is the intent.
    // eslint-disable-next-line react-hooks/purity
    const cutoff = new Date(Date.now() - FREE_TIER_HISTORY_DAYS * 24 * 60 * 60 * 1000);
    sinceISO = cutoff.toISOString();
  }

  const records = listOutputs({ limit: 200, sinceISO });

  return (
    <>
      <MarketingNav />
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "56px 32px 32px" }}>
        <Link href="/suite" style={{ textDecoration: "none", fontSize: 13, color: "var(--muted)", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
          <ArrowLeft size={14} /> Suite
        </Link>
        <div className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 12 }}>
          HISTORY
        </div>
        <h1 className="serif" style={{ fontSize: 42, fontWeight: 500, lineHeight: 1.02, margin: "0 0 14px" }}>
          Every generation, saved.
        </h1>
        <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.6, marginBottom: 24, maxWidth: 640 }}>
          Audit plans, mappings, and gap analyses you&apos;ve created. Click an entry to re-download or review.
        </p>

        {!admin && (
          <div
            style={{
              background: "var(--paper-2)",
              border: "1px solid var(--line)",
              borderRadius: 10,
              padding: "12px 16px",
              fontSize: 13,
              color: "var(--muted)",
              lineHeight: 1.55,
              marginBottom: 24,
            }}
          >
            <strong style={{ color: "var(--ink)" }}>Free tier — last {FREE_TIER_HISTORY_DAYS} days.</strong>{" "}
            Older runs are hidden. <Link href="/contact" style={{ color: "var(--accent)" }}>Contact us</Link>{" "}
            to enable full history.
          </div>
        )}

        {records.length === 0 ? (
          <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14, padding: 40, textAlign: "center" }}>
            <Clock size={28} color="var(--muted-2)" strokeWidth={1.5} style={{ marginBottom: 12 }} />
            <h2 className="serif" style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px" }}>
              No history yet.
            </h2>
            <p style={{ fontSize: 13.5, color: "var(--muted)", marginBottom: 18 }}>
              Run any of the suite tools to populate your history — or load demo records to explore the suite without burning API credits.
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", alignItems: "flex-start" }}>
              <Link href="/suite" style={{ textDecoration: "none" }}>
                <Button variant="primary" size="sm">Open the suite</Button>
              </Link>
              <HistorySeedButton />
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {records.map((r) => {
              const Icon = TOOL_ICON[r.tool];
              const color = TOOL_COLOR[r.tool];
              return (
                <div
                  key={r.id}
                  className="lift"
                  style={{
                    background: "var(--card)", border: "1px solid var(--line)", borderRadius: 12,
                    padding: "16px 20px", display: "flex", alignItems: "center", gap: 16,
                  }}
                >
                  <Link
                    href={`/suite/history/${r.id}`}
                    style={{
                      textDecoration: "none", color: "inherit",
                      flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 36, height: 36, borderRadius: 8,
                        background: `${color}1a`, display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} strokeWidth={1.75} color={color} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {r.title}
                      </div>
                      <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", letterSpacing: "0.04em", marginTop: 2 }}>
                        {TOOL_LABEL[r.tool].toUpperCase()} · {fmtDate(r.createdAt)}
                        {r.model ? ` · ${r.model}` : ""}
                      </div>
                    </div>
                  </Link>
                  <DeleteHistoryButton id={r.id} title={r.title} />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <MarketingFooter />
    </>
  );
}
