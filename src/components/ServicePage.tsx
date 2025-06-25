"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServiceBySlug } from "@/data/seo-slugs";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const router = useRouter();
  const service = getServiceBySlug(params.slug);

  useEffect(() => {
    // Add a small delay to allow SEO crawlers to see the content
    const timer = setTimeout(() => {
      // Redirect to funnel with service context
      router.push(`/funnel?service=${params.slug}`);
    }, 2000);

    return () => clearTimeout(timer);
  }, [params.slug, router]);

  if (!service) {
    // If service not found, redirect to 404
    router.push("/not-found");
    return null;
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <main className="flex-grow">
        <section className="py-20 md:py-32 bg-gradient-to-br from-nautical-blue/5 to-digital-teal/5">
          <div className="max-w-6xl mx-auto px-4 text-center">
            {/* Loading/Redirect Message */}
            <div className="mb-8">
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
            </div>

            {/* Service-Specific Content */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl font-black text-nautical-blue mb-6 font-heading">
                {service.service} Solutions
              </h1>
              <p className="text-xl md:text-2xl text-charcoal-gray max-w-4xl mx-auto leading-relaxed mb-8">
                {service.description}
              </p>
              <p className="text-lg text-charcoal-gray/80">
                Redirecting you to our specialized marketing audit to discuss{" "}
                {service.service.toLowerCase()} solutions...
              </p>
            </div>

            {/* Service Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-nautical-blue mb-6 font-heading">
                Why Choose Our {service.service}?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="w-6 h-6 text-digital-teal flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold text-nautical-blue mb-2">
                      AI-Powered Automation
                    </h3>
                    <p className="text-charcoal-gray text-sm">
                      Advanced artificial intelligence optimizes your campaigns
                      24/7 for maximum ROI.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="w-6 h-6 text-digital-teal flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold text-nautical-blue mb-2">
                      Data-Driven Results
                    </h3>
                    <p className="text-charcoal-gray text-sm">
                      Every decision is backed by real performance data and
                      analytics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="w-6 h-6 text-digital-teal flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold text-nautical-blue mb-2">
                      Local Market Focus
                    </h3>
                    <p className="text-charcoal-gray text-sm">
                      Specialized strategies designed specifically for local
                      business success.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="w-6 h-6 text-digital-teal flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold text-nautical-blue mb-2">
                      Transparent Pricing
                    </h3>
                    <p className="text-charcoal-gray text-sm">
                      No hidden fees or surprise charges - clear, upfront
                      pricing for all services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Manual Link (in case JavaScript is disabled) */}
            <div className="bg-nautical-blue/5 p-6 rounded-xl">
              <p className="text-charcoal-gray mb-4">
                If you're not automatically redirected:
              </p>
              <a
                href={`/funnel?service=${params.slug}`}
                className="bg-gradient-to-r from-nautical-blue to-digital-teal hover:from-digital-teal hover:to-nautical-blue text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                Get Your Free {service.service} Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
