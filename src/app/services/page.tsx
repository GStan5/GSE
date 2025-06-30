"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesBenefits from "@/components/services/ServicesBenefits";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesCTA from "@/components/services/ServicesCTA";
import ServicesFAQ from "@/components/services/ServicesFAQ";

function ServicesContent() {
  return (
    <div className="min-h-screen bg-ami-sand text-charcoal-gray font-sans">
      <StructuredData
        type="service"
        title="One-Time Marketing Services | Gravix Strategic Edge"
        description="Professional one-time marketing services to boost your business visibility. From SEO audits to website optimization, get expert help without long-term commitments."
        url="https://gravixstrategicedge.com/services"
      />
      <Header />

      <main>
        <ServicesHero />
        <ServicesList />
        <ServicesBenefits />
        <ServicesProcess />
        <ServicesCTA />
        <ServicesFAQ />
      </main>

      <Footer />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-ami-sand text-charcoal-gray font-sans flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block bg-gradient-to-br from-solar-flare-coral/20 to-digital-teal/20 rounded-full p-8 mb-6">
              <svg
                className="w-16 h-16 text-nautical-blue mx-auto animate-spin"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <p className="text-xl text-charcoal-gray">
              Loading our services...
            </p>
          </div>
        </div>
      }
    >
      <ServicesContent />
    </Suspense>
  );
}
