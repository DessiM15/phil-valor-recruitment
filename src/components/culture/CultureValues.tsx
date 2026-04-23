"use client";

import { Compass, HeartHandshake, Users } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const values = [
  {
    icon: Compass,
    title: "Independence",
    description:
      "Your business is yours. No production minimums, no captive contracts, no limitations on how you serve your clients. We give you the keys and get out of the way.",
  },
  {
    icon: HeartHandshake,
    title: "Support",
    description:
      "Independence doesn't mean isolation. From licensing to marketing to case design, you'll have a team behind you every step of the way. 1:1 mentorship isn't a perk — it's how we operate.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Join a network of like-minded professionals who share knowledge, refer business, and lift each other up. Valor agents aren't competitors — they're collaborators.",
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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
