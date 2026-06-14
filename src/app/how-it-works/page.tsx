import type { Metadata } from "next";
import HowItWorksPage from "@/components/HowItWorksPage";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "BrickBytes | How It Works",
  description: "From blueprint upload to live interactive experience — the three-step BrickBytes onboarding process explained in detail.",
  path: "/how-it-works",
});

export default function HowItWorksRoute() {
  return (
    <div className="relative min-h-screen">
      <main>
        <HowItWorksPage />
      </main>
    </div>
  );
}
