"use client";

import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";
import GrainOverlay from "@/components/effects/GrainOverlay";

export default function ApplyHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/skyline.jpg')" }}
      />
      <div className="absolute inset-0 bg-denim/85" />
      <GrainOverlay />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <FadeIn>
          <p className="text-medallion tracking-[0.3em] uppercase text-xs font-medium mb-6">
            Join Us
          </p>
        </FadeIn>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight mb-8">
          <TextReveal
            text="Start the Conversation"
            highlightWords={["Conversation"]}
            highlightClassName="font-semibold text-medallion"
            delay={0.2}
          />
        </h1>
        <FadeIn delay={0.8}>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a seasoned professional or just getting started,
            we&apos;d love to hear from you. Tell us about yourself and let&apos;s
            explore what&apos;s possible together.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
