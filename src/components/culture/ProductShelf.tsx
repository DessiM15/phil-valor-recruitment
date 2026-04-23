"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import GrainOverlay from "@/components/effects/GrainOverlay";
import { verticals } from "@/lib/opportunityData";

export default function ProductShelf() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="relative py-28 lg:py-36 bg-denim overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-20">
            <SectionLabel className="mb-4">Full Access</SectionLabel>
            <SectionHeading light="Our Product" bold="Shelf" color="white" />
            <p className="mt-6 text-white/50 leading-relaxed">
              7 verticals. 100+ carriers. One platform. Here&apos;s what you&apos;ll
              have access to from day one.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {verticals.map((vertical, index) => {
            const Icon = vertical.icon;
            const isOpen = openIndex === index;
            return (
              <FadeIn key={vertical.id} delay={index * 0.05}>
                <div className="border border-white/10 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <Icon className="text-medallion" size={22} strokeWidth={1.5} />
                      <span className="text-white font-medium">{vertical.label}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="text-white/40" size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 border-t border-white/5 pt-4">
                          <p className="text-white/50 text-sm leading-relaxed mb-4">
                            {vertical.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {vertical.offerings.map((offering) => (
                              <span
                                key={offering}
                                className="text-xs bg-white/5 text-white/60 px-3 py-1.5 rounded-full"
                              >
                                {offering}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
