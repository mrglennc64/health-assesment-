import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { ComingSoon } from "@/components/site/ComingSoon";

export default function AuditsPage() {
  return (
    <>
      <MarketingNav />
      <ComingSoon
        kicker="AUDITS"
        title="Run history."
        description="Browse, filter, and re-run every audit. Compare runs, watch a target over time, and export historical PDFs. Coming once accounts and persistence are wired."
      />
      <MarketingFooter />
    </>
  );
}
