"use client";

import { ReactNode } from "react";

interface GoldGlowProps {
  children: ReactNode;
  className?: string;
}

export default function GoldGlow({ children, className = "" }: GoldGlowProps) {
  return <div className={`gold-glow rounded-full ${className}`}>{children}</div>;
}
