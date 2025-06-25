"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuditFeatures from "@/components/funnel/AuditFeatures";
import HowItWorks from "@/components/funnel/HowItWorks";
import AuditForm from "@/components/funnel/AuditForm";
import FunnelFAQ from "@/components/funnel/FunnelFAQ";
import StructuredData from "@/components/seo/StructuredData";
import FunnelHeroPro from "@/components/funnel/FunnelHeroProfessional";
import { getLocationBySlug, getServiceBySlug } from "@/data/seo-slugs";

function FunnelContent() {
  const searchParams = useSearchParams();
  const locationSlug = searchParams.get("location");
  const serviceSlug = searchParams.get("service");

  const location = locationSlug ? getLocationBySlug(locationSlug) : null;
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : null;

  const handleFormSubmit = (formData: {
    businessName: string;
    contactName: string;
    email: string;
    phone: string;
    website: string;
    address: string;
    competitors: string[];
  }) => {
    // Add location and service context to form data
    const enhancedFormData = {
      ...formData,
      sourceLocation: location?.city || null,
      sourceService: service?.service || null,
      referralSlug: locationSlug || serviceSlug || null,
    };

    // Handle form submission here - could send to API, analytics, etc.
    console.log("Form submitted:", enhancedFormData);

    // Add analytics tracking with context
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "form_submit", {
        event_category: "audit_request",
        location_context: location?.city || "general",
        service_context: service?.service || "general",
      });
    }
  };

  return (
    <div className="min-h-screen bg-ami-sand text-charcoal-gray font-sans">
      <StructuredData
        type="service"
        title={
          location
            ? `Free ${location.city} Marketing Audit | Gravix Strategic Edge`
            : service
            ? `Free ${service.service} Consultation | Gravix Strategic Edge`
            : "Free Digital Marketing Audit | Gravix Strategic Edge"
        }
        description={
          location
            ? `Get a comprehensive analysis of your ${location.city} business's online presence. Our free marketing audit identifies local opportunities to attract more customers.`
            : service
            ? `Get expert ${service.service.toLowerCase()} consultation for your local business. Our free audit identifies opportunities to improve your marketing ROI.`
            : "Get a comprehensive analysis of your local business's online presence. Our free marketing audit identifies opportunities to attract more customers and dominate local search."
        }
        url="https://gravixstrategicedge.com/funnel"
      />
      <Header />

      <main>
        <FunnelHeroPro />
        <AuditFeatures />
        <HowItWorks />
        <AuditForm onSubmit={handleFormSubmit} />
        <FunnelFAQ />
      </main>

      <Footer />
    </div>
  );
}

export default function FunnelPage() {
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
              Loading your personalized marketing audit...
            </p>
          </div>
        </div>
      }
    >
      <FunnelContent />
    </Suspense>
  );
}
