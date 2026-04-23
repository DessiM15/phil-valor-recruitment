"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  highlightWords = [],
  highlightClassName = "font-semibold text-medallion",
}: TextRevealProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay + i * 0.02,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      clipPath: "inset(0 0 100% 0)",
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0% 0)",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, index) => {
        const isHighlighted = highlightWords.includes(word.replace(/[.,!?]/g, ""));
        return (
          <motion.span
            key={index}
            variants={child}
            className={`inline-block mr-[0.3em] ${isHighlighted ? highlightClassName : ""}`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
