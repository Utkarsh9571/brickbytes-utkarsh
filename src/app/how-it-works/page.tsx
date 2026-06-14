import type { Metadata } from "next";
import HowItWorksPage from "@/components/HowItWorksPage";

export const metadata: Metadata = {
  title: "BrickBytes | How It Works",
  description: "From blueprint upload to live interactive experience — the three-step BrickBytes onboarding process explained in detail.",
};

export default function HowItWorksRoute() {
  return (
    <div className="relative min-h-screen">
      <main>
        <HowItWorksPage />
      </main>
    </div>
  );
}
