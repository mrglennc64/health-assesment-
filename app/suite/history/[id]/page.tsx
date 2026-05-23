import { notFound } from "next/navigation";
import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { getOutput } from "@/lib/suite/db";
import { HistoryDetailView } from "./HistoryDetailView";

export const dynamic = "force-dynamic";

export default async function HistoryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const record = getOutput(id);
  if (!record) notFound();

  return (
    <>
      <MarketingNav />
      <HistoryDetailView record={record} />
      <MarketingFooter />
    </>
  );
}
