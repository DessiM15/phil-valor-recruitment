"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";

const navLinks = [
  { label: "Opportunities", href: "/#opportunity" },
  { label: "Culture", href: "/culture" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Apply", href: "/apply" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-denim/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/valor-logo-white.png"
              alt="Valor Financial Specialists"
              width={160}
              height={44}
              priority
              className="h-[55px] w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/60 text-sm tracking-wider hover:text-medallion transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-medallion text-medallion text-sm font-medium px-6 py-2.5 rounded-full hover:bg-medallion hover:text-white transition-colors tracking-wide"
            >
              Book a Strategy Call
            </a>
          </div>

          <button
            className="md:hidden text-white/70 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-denim/95 backdrop-blur-md border-t border-white/5">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-white/60 text-sm tracking-wider py-2 hover:text-medallion transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-medallion text-medallion text-sm font-medium px-6 py-2.5 rounded-full hover:bg-medallion hover:text-white transition-colors tracking-wide mt-4"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
