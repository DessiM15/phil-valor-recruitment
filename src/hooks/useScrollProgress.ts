"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

type ScrollOffset = ["start end" | "end start" | "start start" | "end end", "start end" | "end start" | "start start" | "end end"];

export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  offset: ScrollOffset = ["start end", "end start"]
): { scrollYProgress: MotionValue<number> } {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  return { scrollYProgress };
}

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  distance: number = 50
) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  return { y, scrollYProgress };
}
