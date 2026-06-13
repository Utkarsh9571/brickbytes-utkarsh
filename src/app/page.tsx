import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Transformation from "@/components/Transformation";
import ProductEcosystem from "@/components/ProductEcosystem";
import FeaturesBento from "@/components/FeaturesBento";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import WhyBrickBytes from "@/components/WhyBrickBytes";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#060608] text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Transformation />
        <ProductEcosystem />
        <FeaturesBento />
        <HowItWorks />
        <UseCases />
        <WhyBrickBytes />
        <About />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}
