import type { Metadata } from "next";
import TechnologyPage from "@/components/TechnologyPage";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "BrickBytes | Our Technology",
  description: "Interactive maps, live inventory, AI-powered engagement, and developer controls — the technology behind BrickBytes.",
  path: "/technology",
});

export default function TechnologyRoute() {
  return (
    <div className="relative min-h-screen">
      <main>
        <TechnologyPage />
      </main>
    </div>
  );
}
