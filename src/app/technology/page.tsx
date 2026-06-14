import type { Metadata } from "next";
import ProductEcosystem from "@/components/ProductEcosystem";
import FeaturesBento from "@/components/FeaturesBento";
import FinalCTA from "@/components/FinalCTA";
import InteractiveGrid from "@/components/InteractiveGrid";

export const metadata: Metadata = {
  title: "BrickBytes | Our Technology",
  description: "Interactive maps, 3D visualization, drone reality capture, and broker workspace — the technology behind BrickBytes.",
};

export default function TechnologyPage() {
  return (
    <div className="relative min-h-screen">
      <main>
        {/* Page Hero */}
        <section className="relative bg-[#fbfbfa] text-[#1c1a17] pt-36 sm:pt-44 pb-16 sm:pb-24 overflow-hidden border-b border-zinc-200/50">
          <InteractiveGrid opacity={0.4} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
            <div className="max-w-3xl text-left">
              <div className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-brick-orange mb-3">
                Technology
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight leading-[1.15] text-zinc-950 mb-6">
                Built for spatial{" "}
                <span className="text-brick-orange italic">precision</span>
              </h1>
              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-sans font-light max-w-xl">
                Explore the engineering behind BrickBytes — from interactive map rendering to drone reality capture and real-time broker tools.
              </p>
            </div>
          </div>
        </section>

        <ProductEcosystem />
        <FeaturesBento />
        <FinalCTA />
      </main>
    </div>
  );
}
