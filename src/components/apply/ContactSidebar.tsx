"use client";

import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { BOOKING_URL, EMAIL, LOCATION } from "@/lib/constants";

export default function ContactSidebar() {
  return (
    <FadeIn delay={0.15}>
      <div className="space-y-8 lg:pl-8">
        <div className="pb-8 border-b border-denim/10">
          <div className="flex items-start gap-4">
            <Calendar
              className="text-medallion flex-shrink-0 mt-1"
              size={20}
              strokeWidth={1.5}
            />
            <div>
              <h3 className="text-base font-semibold text-denim mb-2">
                Prefer to Talk First?
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Skip the form and schedule a no-obligation strategy call
                directly with Phil.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-medallion text-medallion font-medium px-6 py-2.5 rounded-full hover:bg-medallion hover:text-white transition-colors text-sm tracking-wide"
              >
                Book a Strategy Call
              </a>
            </div>
          </div>
        </div>

        <div className="pb-8 border-b border-denim/10">
          <div className="flex items-start gap-4">
            <Mail
              className="text-medallion flex-shrink-0 mt-1"
              size={20}
              strokeWidth={1.5}
            />
            <div>
              <h3 className="text-base font-semibold text-denim mb-2">
                Email Us
              </h3>
              <a
                href={`mailto:${EMAIL}`}
                className="text-gray-500 hover:text-medallion transition-colors text-sm"
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="pb-8 border-b border-denim/10">
          <div className="flex items-start gap-4">
            <Phone
              className="text-medallion flex-shrink-0 mt-1"
              size={20}
              strokeWidth={1.5}
            />
            <div>
              <h3 className="text-base font-semibold text-denim mb-2">
                Call Us
              </h3>
              <p className="text-gray-500 text-sm">Available Mon–Fri, 9am–5pm CT</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-start gap-4">
            <MapPin
              className="text-medallion flex-shrink-0 mt-1"
              size={20}
              strokeWidth={1.5}
            />
            <div>
              <h3 className="text-base font-semibold text-denim mb-2">
                Location
              </h3>
              <p className="text-gray-500 text-sm">{LOCATION}</p>
            </div>
          </div>
        </div>

        {/* Encouragement */}
        <div className="bg-denim/5 p-6 rounded-lg mt-8">
          <h4 className="text-sm font-semibold text-denim mb-2">
            New to Financial Services?
          </h4>
          <p className="text-gray-500 text-xs leading-relaxed">
            That&apos;s great — some of our best agents started from scratch.
            We provide full licensing support, training, and mentorship.
            Don&apos;t let experience hold you back.
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
