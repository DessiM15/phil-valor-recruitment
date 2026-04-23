"use client";

import { CalendarCheck, Target, Rocket } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { ConnectingLine } from "@/components/animations/LineDrawing";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { BOOKING_URL } from "@/lib/constants";

const steps = [
  {
    icon: CalendarCheck,
    number: "01",
    title: "Book a Call",
    description:
      "Schedule a no-pressure strategy call. We'll learn about your goals, your experience, and what you're looking for in a firm.",
  },
  {
    icon: Target,
    number: "02",
    title: "Get Your Plan",
    description:
      "We'll build a personalized onboarding plan — licensing, training, product access, and marketing support tailored to you.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch Your Business",
    description:
      "Hit the ground running with full support. Access carriers, tools, and mentorship from day one. Your business, your way.",
  },
];

export default function PathForward() {
  return (
    <section className="py-28 lg:py-36 bg-cool-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mb-20">
            <SectionLabel className="mb-4">Getting Started</SectionLabel>
            <SectionHeading light="Your Path" bold="Forward" />
            <p className="mt-6 text-gray-500 leading-relaxed">
              Three steps. No red tape. Just a clear path to building something yours.
            </p>
          </div>
        </FadeIn>

        {/* Connecting line (desktop only) */}
        <div className="hidden lg:block max-w-3xl mx-auto -mb-8 relative z-0">
          <ConnectingLine
            className="w-full h-10 text-medallion/30"
            delay={0.5}
            duration={2}
          />
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-12 relative z-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.title}>
                <div className="text-center">
                  <span className="text-6xl font-extralight text-denim/10 block mb-4">
                    {step.number}
                  </span>
                  <Icon
                    className="text-medallion mx-auto mb-4"
                    size={28}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-base font-semibold text-denim mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.5}>
          <div className="text-center mt-16">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block gradient-cta text-white font-medium px-10 py-4 rounded-full tracking-wide text-sm"
            >
              Start with Step One
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
