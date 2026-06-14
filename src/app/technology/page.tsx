import type { Metadata } from "next";
import TechnologyPage from "@/components/TechnologyPage";

export const metadata: Metadata = {
  title: "BrickBytes | Our Technology",
  description: "Interactive maps, live inventory, AI-powered engagement, and developer controls — the technology behind BrickBytes.",
};

export default function TechnologyRoute() {
  return (
    <div className="relative min-h-screen">
      <main>
        <TechnologyPage />
      </main>
    </div>
  );
}
