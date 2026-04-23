import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { BOOKING_URL, EMAIL, LOCATION } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-denim text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <Image
              src="/images/valor-logo-white.png"
              alt="Valor Financial Specialists"
              width={160}
              height={44}
              className="h-[55px] w-auto mb-6"
            />
            <p className="text-white/40 text-sm leading-relaxed">
              Building the next generation of independent financial professionals.
              Join a firm that invests in your growth, your independence, and your future.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium text-medallion tracking-[0.2em] uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Opportunities", href: "/#opportunity" },
                { label: "Culture", href: "/culture" },
                { label: "Leadership", href: "/#leadership" },
                { label: "Apply", href: "/apply" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-medallion transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium text-medallion tracking-[0.2em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/40 text-sm">
                <Mail size={14} className="text-medallion/60 flex-shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-medallion transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm">
                <MapPin size={14} className="text-medallion/60 flex-shrink-0" />
                {LOCATION}
              </li>
            </ul>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 border border-medallion/50 text-medallion text-sm font-medium px-6 py-2.5 rounded-full hover:bg-medallion hover:text-white transition-colors tracking-wide"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-white/25 text-xs leading-relaxed">
            Valor Financial Specialists is a financial services firm offering
            insurance, investment advisory, and related financial products.
            Investment advisory services offered through Valor Financial
            Specialists, a registered investment advisor. This website is for
            recruitment and informational purposes only.
          </p>
          <p className="text-white/20 text-xs mt-4">
            &copy; {new Date().getFullYear()} Valor Financial Specialists. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
