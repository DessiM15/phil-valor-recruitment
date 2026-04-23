"use client";

import { motion } from "framer-motion";

interface LineDrawingProps {
  className?: string;
  width?: number;
  height?: number;
  delay?: number;
  duration?: number;
}

export function WheatIcon({ className = "", delay = 0, duration = 2 }: LineDrawingProps) {
  return (
    <motion.svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d="M32 56V20"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration, delay, ease: "easeInOut" }}
      />
      <motion.path
        d="M32 40C26 34 20 32 20 32C20 32 26 30 32 36"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: duration * 0.6, delay: delay + 0.3, ease: "easeInOut" }}
      />
      <motion.path
        d="M32 34C38 28 44 26 44 26C44 26 38 24 32 30"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: duration * 0.6, delay: delay + 0.6, ease: "easeInOut" }}
      />
      <motion.path
        d="M32 28C26 22 20 20 20 20C20 20 26 18 32 24"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: duration * 0.6, delay: delay + 0.9, ease: "easeInOut" }}
      />
      <motion.path
        d="M32 22C38 16 44 14 44 14C44 14 38 12 32 18"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: duration * 0.6, delay: delay + 1.2, ease: "easeInOut" }}
      />
      <motion.circle
        cx="32"
        cy="12"
        r="3"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 1.5, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

export function ConnectingLine({ className = "", delay = 0, duration = 1.5 }: LineDrawingProps) {
  return (
    <motion.svg
      viewBox="0 0 400 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0 20 C100 20, 100 10, 200 20 C300 30, 300 20, 400 20"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration, delay, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
