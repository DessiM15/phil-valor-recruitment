"use client";

import { Quote } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import Link from "next/link";

const spotlights = [
  {
    name: "Sarah M.",
    background: "Former Teacher",
    years: "3 Years with Valor",
    quote:
      "I had zero financial services experience. Valor's training program and mentorship made me feel like I'd been doing this for a decade. The support is unmatched.",
  },
  {
    name: "James K.",
    background: "Career Changer from Tech",
    years: "5 Years with Valor",
    quote:
      "The product shelf is what sold me. Being able to offer clients insurance, advisory, and alternatives — all under one roof — sets me apart from every other advisor in my market.",
  },
  {
    name: "Maria L.",
    background: "Experienced Agent",
    years: "1 Year with Valor",
    quote:
      "I left a captive agency for Valor and it was the best decision I ever made. True independence, better comp, and a team that actually answers the phone when I call.",
  },
];

export default function AgentSpotlights() {
  return (
    <section className="py-28 lg:py-36 bg-cool-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-20">
            <SectionLabel className="mb-4">Our People</SectionLabel>
            <SectionHeading light="Agent" bold="Spotlights" />
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spotlights.map((spotlight) => (
            <StaggerItem key={spotlight.name}>
              <div className="bg-white p-8 rounded-lg h-full flex flex-col">
                <Quote
                  className="text-medallion/20 mb-4"
                  size={32}
                  strokeWidth={1}
                />
                <p className="text-denim/70 italic leading-relaxed text-sm flex-1 mb-6">
                  &ldquo;{spotlight.quote}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-denim text-sm">
                    {spotlight.name}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    {spotlight.background} &middot; {spotlight.years}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="text-center mt-16">
            <Link
              href="/apply"
              className="inline-block bg-denim text-white font-medium px-10 py-4 rounded-full hover:bg-denim-light transition-colors tracking-wide text-sm"
            >
              Start Your Story
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
