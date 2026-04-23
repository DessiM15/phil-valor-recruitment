"use client";

import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/effects/MagneticButton";
import GoldGlow from "@/components/effects/GoldGlow";
import GrainOverlay from "@/components/effects/GrainOverlay";
import { BOOKING_URL } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative py-28 lg:py-36 bg-denim overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="w-px h-16 bg-medallion/30 mx-auto mb-10" />
        </FadeIn>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
          <TextReveal
            text="Ready to Build Your Legacy?"
            highlightWords={["Legacy?"]}
            highlightClassName="font-semibold text-medallion"
            delay={0.2}
          />
        </h2>

        <FadeIn delay={0.8}>
          <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed mb-12">
            Take the first step toward a career with true independence, unlimited
            product access, and the mentorship to make it all work.
          </p>
        </FadeIn>

        <FadeIn delay={1}>
          <MagneticButton>
            <GoldGlow>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-medallion text-white font-medium px-12 py-5 rounded-full hover:bg-medallion-dark transition-colors tracking-wide text-base"
              >
                Book Your Discovery Call
              </a>
            </GoldGlow>
          </MagneticButton>
        </FadeIn>

        <FadeIn delay={1.2}>
          <p className="mt-8 text-white/30 text-sm">
            No commitment required. Let&apos;s just talk.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
