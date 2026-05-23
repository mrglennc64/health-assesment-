import { headers } from "next/headers";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { listOutputs } from "@/lib/suite/db";
import { FREE_TIER_HISTORY_DAYS, isAdmin } from "@/lib/quotas";
import { getUsernameFromRequest } from "@/lib/quotas/identity";
import { SuiteHistoryView } from "./SuiteHistoryView";

export const dynamic = "force-dynamic";

export default async function SuiteHistoryPage() {
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
      <SuiteHistoryView records={records} admin={admin} freeTierDays={FREE_TIER_HISTORY_DAYS} />
      <MarketingFooter />
    </>
  );
}
