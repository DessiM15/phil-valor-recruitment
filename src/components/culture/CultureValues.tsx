"use client";

import { Compass, ShieldCheck, BarChart3, HeartHandshake } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const values = [
  {
    icon: ShieldCheck,
    title: "Fiduciary-First",
    description:
      "We don't just recommend what's suitable — we recommend what's best. Every recommendation is legally required to be in your client's best interest. You'll never be asked to push a product that doesn't serve them.",
  },
  {
    icon: Compass,
    title: "True Independence",
    description:
      "Your business is yours. No production minimums, no captive contracts, no limitations on how you serve your clients. We give you the keys and get out of the way.",
  },
  {
    icon: BarChart3,
    title: "Institutional-Grade Platform",
    description:
      "Your clients deserve the same tools and access that institutional investors enjoy. Our platform provides sophisticated research, investment vehicles, and planning tools that set you apart from every other advisor in your market.",
  },
  {
    icon: HeartHandshake,
    title: "Relationship-Driven",
    description:
      "We limit our growth intentionally. Every agent works directly with Phil — not a call center, not a regional manager. 1:1 mentorship isn't a perk. It's how we operate.",
  },
];

export default function CultureValues() {
  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-20">
            <SectionLabel className="mb-4">What We Believe</SectionLabel>
            <SectionHeading light="Built on" bold="Values" />
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <StaggerItem key={value.title}>
                <div className="bg-pearl/50 p-10 rounded-lg">
                  <Icon
                    className="text-medallion mb-6"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl font-semibold text-denim mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
