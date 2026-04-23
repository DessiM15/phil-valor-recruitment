"use client";

import { Shield, Layers, Clock, Users } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import CounterAnimation from "@/components/animations/CounterAnimation";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import GrainOverlay from "@/components/effects/GrainOverlay";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const stats = [
  {
    icon: Shield,
    value: 100,
    suffix: "+",
    label: "Carriers",
    description: "Access to top-rated insurance and financial product carriers nationwide.",
  },
  {
    icon: Layers,
    value: 7,
    suffix: "",
    label: "Verticals",
    description: "From insurance to advisory to alternative investments — build a diversified practice.",
  },
  {
    icon: Clock,
    value: 20,
    suffix: "+",
    label: "Years Experience",
    description: "Decades of industry expertise backing your business development.",
  },
  {
    icon: Users,
    value: 1,
    suffix: ":1",
    label: "Mentorship",
    description: "Personal mentorship and hands-on support from day one.",
  },
];

export default function WhyValor() {
  return (
    <section className="relative py-28 lg:py-36 bg-denim overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-20">
            <SectionLabel className="mb-4">The Valor Advantage</SectionLabel>
            <SectionHeading light="Why Choose" bold="Valor" color="white" />
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="w-px h-12 bg-medallion/30 mx-auto mb-6" />
                  <Icon
                    className="text-medallion mx-auto mb-5"
                    size={28}
                    strokeWidth={1.5}
                  />
                  <div className="text-4xl font-light text-white mb-2">
                    <CounterAnimation
                      target={stat.value}
                      suffix={stat.suffix}
                      className="text-4xl font-light text-white"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-3 tracking-tight">
                    {stat.label}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {stat.description}
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
