import { MarketingNav } from "@/components/site/MarketingNav";
import { MarketingFooter } from "@/components/site/MarketingFooter";
import { DEFAULT_PRODUCT, isProductKey } from "@/lib/payments/config";
import { PaymentChrome } from "./PaymentChrome";

export const dynamic = "force-dynamic";

export default async function PaymentPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const raw = params.product;
  const productParam = Array.isArray(raw) ? raw[0] : raw;
  const product = isProductKey(productParam) ? productParam : DEFAULT_PRODUCT;

  return (
    <>
      <MarketingNav />
      <PaymentChrome product={product} />
      <MarketingFooter />
    </>
  );
}
