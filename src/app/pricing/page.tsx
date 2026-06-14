import type { Metadata } from "next";
import PricingPage from "@/components/PricingPage";

export const metadata: Metadata = {
  title: "BrickBytes | Pricing",
  description: "Customized pricing for plotted developments, townships, and enterprise deployments. See what BrickBytes includes at every scale.",
};

export default function PricingRoute() {
  return (
    <div className="relative min-h-screen">
      <main>
        <PricingPage />
      </main>
    </div>
  );
}
