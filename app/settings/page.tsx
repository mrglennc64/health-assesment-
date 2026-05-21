import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { ComingSoon } from "@/components/site/ComingSoon";

export default function SettingsPage() {
  return (
    <>
      <MarketingNav />
      <ComingSoon
        kicker="SETTINGS"
        title="Account & preferences."
        description="API keys, team members, default channel selections, and PDF branding. Coming once accounts are wired."
      />
      <MarketingFooter />
    </>
  );
}
