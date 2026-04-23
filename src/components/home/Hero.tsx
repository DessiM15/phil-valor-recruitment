"use client";

import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";
import { WheatIcon } from "@/components/animations/LineDrawing";
import MagneticButton from "@/components/effects/MagneticButton";
import GrainOverlay from "@/components/effects/GrainOverlay";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { BOOKING_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Skyline background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/skyline.jpg')" }}
      />
      <div className="absolute inset-0 bg-denim/85" />
      <GrainOverlay />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <FadeIn>
          <WheatIcon
            className="w-16 h-16 text-medallion/40 mx-auto mb-8"
            delay={0.2}
            duration={2.5}
          />
        </FadeIn>

        <div className="mb-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.1] tracking-tight">
            <TextReveal
              text="Your Career. Your Legacy."
              highlightWords={["Legacy."]}
              highlightClassName="font-semibold text-medallion"
              delay={0.3}
            />
          </h1>
        </div>

        <FadeIn delay={0.8}>
          <p className="mt-8 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
            Join a financial services firm that invests in your independence,
            your growth, and your future.
          </p>
        </FadeIn>

        <FadeIn delay={1}>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <MagneticButton>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-medallion text-white font-medium px-10 py-4 rounded-full hover:bg-medallion-dark transition-colors tracking-wide"
              >
                Book a Strategy Call
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#opportunity"
                className="inline-block border border-white/25 text-white font-medium px-10 py-4 rounded-full hover:bg-white/10 transition-colors tracking-wide"
              >
                Explore Opportunities
              </a>
            </MagneticButton>
          </div>
        </FadeIn>

        <FadeIn delay={1.2}>
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-xs text-white/40 tracking-[0.2em] uppercase">
            <span>Independent</span>
            <span className="hidden sm:inline text-medallion/40">|</span>
            <span>Full Product Shelf</span>
            <span className="hidden sm:inline text-medallion/40">|</span>
            <span>Franklin, TN</span>
          </div>
        </FadeIn>
      </div>

      <ScrollIndicator targetId="opportunity" />
    </section>
  );
}
