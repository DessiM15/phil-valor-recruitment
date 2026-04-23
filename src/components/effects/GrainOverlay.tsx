"use client";

interface GrainOverlayProps {
  className?: string;
}

export default function GrainOverlay({ className = "" }: GrainOverlayProps) {
  return (
    <div
      className={`absolute inset-0 grain-overlay pointer-events-none hidden md:block ${className}`}
      aria-hidden="true"
    />
  );
}
