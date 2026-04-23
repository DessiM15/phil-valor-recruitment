"use client";

import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";
import GrainOverlay from "@/components/effects/GrainOverlay";

export default function CultureHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-denim pt-20">
      <GrainOverlay />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <FadeIn>
          <p className="text-medallion tracking-[0.3em] uppercase text-xs font-medium mb-6">
            Our Culture
          </p>
        </FadeIn>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight mb-8">
          <TextReveal
            text="The Valor Difference"
            highlightWords={["Difference"]}
            highlightClassName="font-semibold text-medallion"
            delay={0.2}
          />
        </h1>
        <FadeIn delay={0.8}>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            We&apos;re not a call center. We&apos;re not a captive agency.
            We&apos;re a firm built around one idea: that great agents deserve
            real independence, real support, and a real future.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
