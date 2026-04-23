"use client";

import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  targetId: string;
}

export default function ScrollIndicator({ targetId }: ScrollIndicatorProps) {
  return (
    <motion.div
      className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <a
        href={`#${targetId}`}
        className="text-white/30 text-xs tracking-[0.2em] uppercase flex flex-col items-center gap-3 hover:text-white/60 transition-colors"
      >
        <span>Scroll</span>
        <motion.div
          className="w-px h-8 bg-white/20"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </a>
    </motion.div>
  );
}
