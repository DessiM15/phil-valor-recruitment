"use client";

import { GraduationCap, Wrench, BarChart3, Headphones } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";

const supportItems = [
  {
    icon: GraduationCap,
    title: "Licensing & Onboarding",
    description:
      "We guide you through every license, appointment, and certification you need. Whether you're starting from scratch or adding new lines, we handle the complexity so you can focus on learning.",
    align: "left" as const,
  },
  {
    icon: Wrench,
    title: "Technology & Tools",
    description:
      "Access CRM systems, quoting platforms, e-applications, and marketing automation tools — all set up and ready on day one. No tech headaches, just productivity.",
    align: "right" as const,
  },
  {
    icon: BarChart3,
    title: "Business Development",
    description:
      "From lead generation programs to seminar support, we help you build a pipeline. Our marketing team creates co-branded materials and digital campaigns tailored to your market.",
    align: "left" as const,
  },
  {
    icon: Headphones,
    title: "Ongoing Case Support",
    description:
      "Complex case? We're here. Our team provides case design, underwriting guidance, and product recommendations for even the most sophisticated client situations.",
    align: "right" as const,
  },
];

export default function TrainingSupport() {
  return (
    <section className="py-28 lg:py-36 bg-pearl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-20">
            <SectionLabel className="mb-4">Your Growth</SectionLabel>
            <SectionHeading light="Training &" bold="Support" />
            <p className="mt-6 text-gray-500 leading-relaxed">
              We don&apos;t just hand you a contract and wish you luck. Valor
              provides hands-on support at every stage of your career.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-16">
          {supportItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn
                key={item.title}
                direction={item.align === "left" ? "right" : "left"}
                delay={index * 0.1}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    item.align === "right" ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={item.align === "right" ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-denim/5 flex items-center justify-center">
                        <Icon className="text-medallion" size={24} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-semibold text-denim">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className={`${item.align === "right" ? "lg:order-1" : ""}`}>
                    <div className="h-48 bg-denim/5 rounded-lg flex items-center justify-center">
                      <Icon className="text-denim/10" size={64} strokeWidth={1} />
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
