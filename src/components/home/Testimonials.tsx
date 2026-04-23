"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Insurance Agent — 3 Years with Valor",
    quote:
      "Joining Valor was the best decision I made for my career. The product access and mentorship gave me the confidence to go independent. I doubled my book in the first year.",
  },
  {
    name: "James K.",
    role: "Financial Advisor — 5 Years with Valor",
    quote:
      "What sets Valor apart is the genuine support. Phil isn't just a name on the door — he's in the trenches with you, helping you solve problems and grow your practice.",
  },
  {
    name: "Maria L.",
    role: "New to Financial Services — 1 Year with Valor",
    quote:
      "I came from a completely different industry. Valor's training program and 1:1 mentorship made the transition not just possible, but exciting. I found my calling.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  function next() {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }

  function prev() {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <section className="py-28 lg:py-36 bg-pearl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-20">
            <SectionLabel className="mb-4">Agent Stories</SectionLabel>
            <SectionHeading light="Real Agents," bold="Real Results" />
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="relative bg-white p-10 sm:p-14">
              <Quote
                className="text-medallion/20 absolute top-8 left-8"
                size={48}
                strokeWidth={1}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <p className="text-xl sm:text-2xl text-denim/70 italic leading-relaxed font-light mb-8">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-base font-semibold text-denim">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      {testimonials[current].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === current ? "bg-medallion" : "bg-gray-200"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-medallion hover:text-medallion transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-medallion hover:text-medallion transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
