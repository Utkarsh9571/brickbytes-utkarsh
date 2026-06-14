import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "BrickBytes | About Us",
  description: "Building the bridge between vision and reality. Learn about BrickBytes, our mission, our team, and the values that drive us.",
  path: "/about",
});

export default function AboutRoute() {
  return (
    <div className="relative min-h-screen">
      <main>
        <AboutPage />
      </main>
    </div>
  );
}
