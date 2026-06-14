import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "BrickBytes | About Us",
  description: "Building the bridge between vision and reality. Learn about BrickBytes, our mission, our team, and the values that drive us.",
};

export default function AboutRoute() {
  return (
    <div className="relative min-h-screen">
      <main>
        <AboutPage />
      </main>
    </div>
  );
}
