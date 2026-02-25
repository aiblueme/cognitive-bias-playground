import HeroSection from "@/components/HeroSection";
import BiasGrid from "@/components/BiasGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-carbon">
      <HeroSection />

      {/* Divider rule */}
      <div className="w-full h-px bg-carbon-soft" />

      <BiasGrid />

      {/* Footer */}
      <footer className="w-full border-t border-carbon-soft mt-4">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-[0.2em] text-grey-subtle uppercase">
            The Cognitive Bias Playground — 2026
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-grey-subtle uppercase">
            Swiss Editorial × 20 Biases
          </p>
        </div>
      </footer>
    </main>
  );
}
