import type { Metadata } from "next";
import PricingPage from "@/components/PricingPage";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "BrickBytes | Pricing",
  description: "Customized pricing for plotted developments, townships, and enterprise deployments. See what BrickBytes includes at every scale.",
  path: "/pricing",
});

export default function PricingRoute() {
  return (
    <div className="relative min-h-screen">
      <main>
        <PricingPage />
      </main>
    </div>
  );
}
