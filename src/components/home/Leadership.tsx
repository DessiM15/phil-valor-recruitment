"use client";

import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";
import ParallaxWrapper from "@/components/animations/ParallaxWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { BOOKING_URL } from "@/lib/constants";

export default function Leadership() {
  return (
    <section id="leadership" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="right">
            <ParallaxWrapper speed={30}>
              <div className="relative">
                <Image
                  src="/images/phil-headshot.png"
                  alt="Phil Resch — Founder, Valor Financial Specialists"
                  width={560}
                  height={640}
                  className="rounded-sm object-cover w-full"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-medallion/20" />
              </div>
            </ParallaxWrapper>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <SectionLabel className="mb-4">Leadership</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-light text-denim leading-tight mb-8">
              Meet <span className="font-semibold">Phil Resch</span>
            </h2>
            <blockquote className="border-l-2 border-medallion pl-6 mb-8">
              <p className="text-xl text-denim/70 italic leading-relaxed font-light">
                <TextReveal
                  text="I didn't build Valor to just sell policies. I built it to give agents real independence — the tools, the products, and the mentorship to build something lasting."
                  delay={0.3}
                />
              </p>
            </blockquote>
            <p className="text-xs font-semibold text-medallion uppercase tracking-[0.2em] mb-6">
              Founder & Managing Principal
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              With over 20 years in financial services, Phil built Valor
              Financial Specialists from the ground up with a single mission:
              create a firm where agents can truly thrive. No red tape, no
              limitations — just the freedom to build your business your way.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Based in Franklin, Tennessee, Phil works directly with every
              agent who joins Valor, offering hands-on mentorship, access to
              100+ carriers across 7 verticals, and the support structure that
              most firms only promise.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-denim text-denim font-medium px-8 py-3.5 rounded-full hover:bg-denim hover:text-white transition-colors tracking-wide text-sm"
            >
              Connect with Phil
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
