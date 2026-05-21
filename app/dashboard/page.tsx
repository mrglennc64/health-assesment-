import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { ComingSoon } from "@/components/site/ComingSoon";

export default function DashboardPage() {
  return (
    <>
      <MarketingNav />
      <ComingSoon
        kicker="DASHBOARD"
        title="Your audit overview."
        description="Score history, channel trends, pending actions, and weekly monitoring will live here. Currently in design — accounts and persistence land in the next milestone."
      />
      <MarketingFooter />
    </>
  );
}
