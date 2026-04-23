"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface CounterAnimationProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function CounterAnimation({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: CounterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration,
        ease: "easeOut",
      });

      const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));

      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, target, duration, count, rounded]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3 }}
    >
      {prefix}
      {displayValue}
      {suffix}
    </motion.span>
  );
}
