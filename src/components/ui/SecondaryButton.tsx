"use client";

import Link from "next/link";

interface SecondaryButtonProps {
  children: React.ReactNode;
  href: string;
  external?: boolean;
  variant?: "light" | "dark";
  className?: string;
}

export default function SecondaryButton({
  children,
  href,
  external = false,
  variant = "light",
  className = "",
}: SecondaryButtonProps) {
  const variantClasses =
    variant === "light"
      ? "border-white/25 text-white hover:bg-white/10"
      : "border-denim text-denim hover:bg-denim hover:text-white";

  const baseClasses = `inline-block border font-medium px-10 py-4 rounded-full transition-colors tracking-wide text-sm ${variantClasses}`;

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
