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
        title="Professional One-Time Marketing Services | Custom Development & Branding Solutions"
        description="Expert one-time marketing services delivered fast without contracts. Custom website development, brand refresh & rebranding kits, automated booking systems, AI chatbot setup, SEO landing pages, Google Business Profile optimization, social media branding, and blog integration. Professional project-based solutions for businesses in Sarasota, Bradenton, and throughout Florida."
        url="https://gravixstrategicedge.com/one-time-services"
      />

      {/* Enhanced Structured Data for One-Time Marketing Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Professional One-Time Marketing Services",
            description:
              "Expert one-time marketing services including custom website development, brand refresh & rebranding, automated booking systems, AI chatbot setup, SEO landing pages, Google Business Profile optimization, social media branding, and blog integration. No long-term contracts required - project-based solutions delivered fast.",
            provider: {
              "@type": "Organization",
              name: "Gravix Strategic Edge",
              url: "https://gravixstrategicedge.com",
              telephone: "+1-941-555-0123",
              email: "info@gravixstrategicedge.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sarasota",
                addressRegion: "FL",
                addressCountry: "US",
              },
            },
            serviceType: "Digital Marketing Services",
            category: "Marketing Services",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "One-Time Marketing Services Catalog",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Full Website Design & Development",
                    description:
                      "Complete custom website built from scratch with modern design, mobile responsiveness, SEO optimization, content management system, and performance optimization. Includes analytics integration and ongoing support.",
                    serviceType: "Web Development",
                  },
                  category: "Website Development",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Brand Refresh & Rebranding Kit",
                    description:
                      "Complete brand makeover including logo design & variations, custom color palette, typography selection, comprehensive brand guidelines, business card design, letterhead templates, and social media templates.",
                    serviceType: "Branding",
                  },
                  category: "Brand Identity",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Tour & Rental Booking System Setup",
                    description:
                      "Automated booking system with custom booking interface, payment gateway integration, calendar synchronization, automated confirmations, customer database, reporting dashboard, and mobile-friendly design.",
                    serviceType: "Marketing Automation",
                  },
                  category: "Booking Systems",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Chatbot Service System Setup",
                    description:
                      "24/7 AI-powered chatbot with custom development, conversation training, website integration, lead capture setup, analytics dashboard, multi-platform deployment, and ongoing optimization.",
                    serviceType: "AI Services",
                  },
                  category: "AI & Automation",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "SEO Landing Page Creation",
                    description:
                      "High-converting landing pages with custom design, SEO optimization, conversion optimization, mobile responsiveness, analytics integration, lead capture forms, and A/B testing setup.",
                    serviceType: "SEO",
                  },
                  category: "Search Engine Optimization",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Google Business Profile Setup",
                    description:
                      "Complete Google Business Profile setup including profile creation & verification, business information optimization, photo uploads, service listings, review management setup, and post scheduling strategy.",
                    serviceType: "Local SEO",
                  },
                  category: "Local Search Optimization",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Social Media Branding Setup",
                    description:
                      "Professional social media profile setup across 3 major platforms with custom graphics & covers, bio optimization, brand consistency, content strategy basics, and hashtag research.",
                    serviceType: "Social Media Marketing",
                  },
                  category: "Social Media",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Blog Setup on Existing Website",
                    description:
                      "Professional blog integration with custom blog design, SEO optimization, category setup, author profiles, and social sharing integration for existing websites.",
                    serviceType: "Content Marketing",
                  },
                  category: "Content Management",
                },
              ],
            },
            areaServed: [
              {
                "@type": "City",
                name: "Sarasota",
                containedInPlace: {
                  "@type": "State",
                  name: "Florida",
                },
              },
              {
                "@type": "City",
                name: "Bradenton",
                containedInPlace: {
                  "@type": "State",
                  name: "Florida",
                },
              },
              {
                "@type": "State",
                name: "Florida",
              },
              {
                "@type": "City",
                name: "Tampa",
                containedInPlace: {
                  "@type": "State",
                  name: "Florida",
                },
              },
              {
                "@type": "City",
                name: "St. Petersburg",
                containedInPlace: {
                  "@type": "State",
                  name: "Florida",
                },
              },
              {
                "@type": "City",
                name: "Venice",
                containedInPlace: {
                  "@type": "State",
                  name: "Florida",
                },
              },
              {
                "@type": "City",
                name: "Lakewood Ranch",
                containedInPlace: {
                  "@type": "State",
                  name: "Florida",
                },
              },
              {
                "@type": "Country",
                name: "United States",
              },
            ],
            audience: {
              "@type": "BusinessAudience",
              audienceType: "Small to Medium Businesses",
            },
            serviceOutput:
              "Professional marketing deliverables including custom responsive websites, comprehensive branding materials, automated booking and chatbot systems, SEO-optimized landing pages, and complete digital marketing asset packages",
            potentialAction: {
              "@type": "ContactAction",
              target:
                "https://gravixstrategicedge.com/one-time-services#contact",
              name: "Request Quote for One-Time Marketing Services",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              validFrom: "2025-01-01",
              businessFunction: "https://schema.org/Sell",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "15",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
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
