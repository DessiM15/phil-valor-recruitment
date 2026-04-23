import type { Metadata } from "next";
import ApplyHero from "@/components/apply/ApplyHero";
import ApplicationForm from "@/components/apply/ApplicationForm";
import ContactSidebar from "@/components/apply/ContactSidebar";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Apply | Valor Financial Specialists",
  description:
    "Start the conversation. Apply to join Valor Financial Specialists and explore a career built around independence, support, and growth.",
};

export default function ApplyPage() {
  return (
    <>
      <ApplyHero />
      <section className="py-28 lg:py-36 bg-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              <ApplicationForm />
            </FadeIn>
            <ContactSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
