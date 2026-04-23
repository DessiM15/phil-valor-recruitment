"use client";

import Link from "next/link";

interface PrimaryButtonProps {
  children: React.ReactNode;
  href: string;
  external?: boolean;
  className?: string;
}

export default function PrimaryButton({
  children,
  href,
  external = false,
  className = "",
}: PrimaryButtonProps) {
  const baseClasses =
    "inline-block bg-medallion text-white font-medium px-10 py-4 rounded-full hover:bg-medallion-dark transition-colors tracking-wide text-sm";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClasses} ${className}`}>
      {children}
    </Link>
  );
}
