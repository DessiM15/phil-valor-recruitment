"use client";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p className={`text-medallion tracking-[0.3em] uppercase text-xs font-medium ${className}`}>
      {children}
    </p>
  );
}
