"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLocationBySlug } from "@/data/seo-slugs";

interface LocationPageProps {
  params: {
    slug: string;
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const router = useRouter();
  const location = getLocationBySlug(params.slug);

  useEffect(() => {
    // Add a small delay to allow SEO crawlers to see the content
    const timer = setTimeout(() => {
      // Redirect to funnel with location context
      router.push(`/funnel?location=${params.slug}`);
    }, 2000);

    return () => clearTimeout(timer);
  }, [params.slug, router]);

  if (!location) {
    // If location not found, redirect to 404
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

            {/* Location-Specific Content */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl font-black text-nautical-blue mb-6 font-heading">
                {location.city} Marketing Solutions
              </h1>
              <p className="text-xl md:text-2xl text-charcoal-gray max-w-4xl mx-auto leading-relaxed mb-8">
                {location.description}
              </p>
              <p className="text-lg text-charcoal-gray/80">
                Redirecting you to our specialized marketing audit for{" "}
                {location.city} businesses...
              </p>
            </div>

            {/* Local Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-nautical-blue mb-6 font-heading">
                Specialized for {location.city} Businesses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {location.localFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <svg
                      className="w-5 h-5 text-digital-teal flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-charcoal-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Manual Link (in case JavaScript is disabled) */}
            <div className="bg-nautical-blue/5 p-6 rounded-xl">
              <p className="text-charcoal-gray mb-4">
                If you're not automatically redirected:
              </p>
              <a
                href={`/funnel?location=${params.slug}`}
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
                Get Your Free {location.city} Marketing Audit
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
