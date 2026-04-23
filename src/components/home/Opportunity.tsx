"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import { verticals } from "@/lib/opportunityData";

export default function Opportunity() {
  const [activeTab, setActiveTab] = useState(0);
  const active = verticals[activeTab];
  const Icon = active.icon;

  return (
    <section id="opportunity" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-20">
            <SectionLabel className="mb-4">What You Can Build</SectionLabel>
            <SectionHeading light="Opportunity," bold="Built Around You" />
          </div>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.2}>
          <div className="relative flex flex-wrap justify-center gap-2 sm:gap-0 mb-16">
            <div className="flex flex-wrap justify-center border-b border-gray-200 w-full">
              {verticals.map((vertical, index) => (
                <button
                  key={vertical.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative px-4 sm:px-6 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === index
                      ? "text-denim"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {vertical.label}
                  {activeTab === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-medallion"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="w-14 h-14 rounded-lg bg-denim/5 flex items-center justify-center mb-6">
                  <Icon className="text-medallion" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold text-denim mb-4">
                  {active.label}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {active.description}
                </p>
              </div>

              <div className="bg-pearl/50 rounded-lg p-8">
                <h4 className="text-xs font-medium text-medallion tracking-[0.2em] uppercase mb-6">
                  Key Offerings
                </h4>
                <ul className="space-y-4">
                  {active.offerings.map((offering) => (
                    <li key={offering} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-medallion flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{offering}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
