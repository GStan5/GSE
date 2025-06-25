import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  generateSEOMetadata,
  combineKeywords,
  commonKeywords,
} from "@/lib/seo";
import { CONTACT_INFO } from "@/config/contact";

export const metadata = generateSEOMetadata({
  title: "About Us | Gravix Strategic Edge - AI Marketing Experts",
  description:
    "Meet the team behind Gravix Strategic Edge. We're AI marketing experts helping local businesses dominate their markets with cutting-edge automation and proven strategies.",
  keywords: combineKeywords(
    commonKeywords.localMarketing,
    commonKeywords.aiMarketing,
    [
      "marketing experts",
      "digital marketing team",
      "local business specialists",
      "marketing consultants",
    ]
  ),
  url: "/about",
});

export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-nautical-blue/5 to-digital-teal/5 py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-nautical-blue mb-6 font-heading">
              About Gravix Strategic Edge
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-gray max-w-4xl mx-auto leading-relaxed">
              We're passionate about helping local businesses leverage
              AI-powered marketing to outperform their competition and achieve
              sustainable growth.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-nautical-blue mb-6 font-heading">
                  Our Mission
                </h2>
                <p className="text-lg text-charcoal-gray mb-6 leading-relaxed">
                  To democratize advanced marketing technology for local
                  businesses. We believe every business deserves access to the
                  same powerful AI marketing tools that big corporations use to
                  dominate their markets.
                </p>
                <p className="text-lg text-charcoal-gray mb-8 leading-relaxed">
                  Our goal is simple: help you attract more customers, save time
                  on marketing tasks, and grow your business while you focus on
                  what you do best.
                </p>
                <Link
                  href="/funnel"
                  className="inline-block bg-gradient-to-r from-nautical-blue to-digital-teal text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Get Your Free Audit
                </Link>
              </div>
              <div className="bg-gradient-to-br from-digital-teal/10 to-nautical-blue/10 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-nautical-blue to-digital-teal rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-nautical-blue mb-4">
                    Why We Started GSE
                  </h3>
                  <p className="text-charcoal-gray leading-relaxed">
                    After seeing countless local businesses struggle with
                    inconsistent marketing results and wasted ad spend, we knew
                    there had to be a better way. That's when we decided to
                    combine AI automation with proven marketing strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-nautical-blue mb-6 font-heading">
                Our Core Values
              </h2>
              <p className="text-xl text-charcoal-gray max-w-3xl mx-auto">
                These principles guide everything we do and every client
                relationship we build.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Transparency */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-digital-teal to-digital-teal/80 rounded-lg mb-6 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-nautical-blue mb-4">
                  Transparency
                </h3>
                <p className="text-charcoal-gray leading-relaxed">
                  No hidden fees, no confusing jargon. We believe in clear
                  communication and honest reporting about what we do and the
                  results we achieve.
                </p>
              </div>

              {/* Results-Driven */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-solar-flare-coral to-solar-flare-coral/80 rounded-lg mb-6 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-nautical-blue mb-4">
                  Results-Driven
                </h3>
                <p className="text-charcoal-gray leading-relaxed">
                  We measure success by your business growth. Every strategy we
                  implement is designed to deliver measurable results that
                  impact your bottom line.
                </p>
              </div>

              {/* Innovation */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-nautical-blue to-nautical-blue/80 rounded-lg mb-6 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
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
                </div>
                <h3 className="text-2xl font-bold text-nautical-blue mb-4">
                  Innovation
                </h3>
                <p className="text-charcoal-gray leading-relaxed">
                  We stay ahead of the curve by constantly learning and
                  implementing the latest AI marketing technologies and proven
                  strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-nautical-blue mb-6 font-heading">
                What Sets Us Apart
              </h2>
              <p className="text-xl text-charcoal-gray max-w-3xl mx-auto">
                We're not just another marketing agency. Here's what makes us
                different.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-digital-teal rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-nautical-blue mb-2">
                      AI-First Approach
                    </h3>
                    <p className="text-charcoal-gray">
                      We leverage cutting-edge AI tools to automate repetitive
                      tasks and optimize your marketing for maximum efficiency
                      and results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-solar-flare-coral rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-nautical-blue mb-2">
                      Local Market Expertise
                    </h3>
                    <p className="text-charcoal-gray">
                      We understand local markets and know exactly what it takes
                      to help businesses dominate their local competition.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-nautical-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-nautical-blue mb-2">
                      ROI-Focused
                    </h3>
                    <p className="text-charcoal-gray">
                      Every dollar you invest should generate more revenue. We
                      track and optimize for measurable business results, not
                      vanity metrics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-ami-sand/50 to-ami-sand/80 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-nautical-blue mb-6">
                  Ready to Transform Your Marketing?
                </h3>
                <p className="text-charcoal-gray mb-8 leading-relaxed">
                  Let's discuss how our AI-powered marketing solutions can help
                  your business attract more customers and achieve sustainable
                  growth.
                </p>
                <div className="space-y-4">
                  <Link
                    href="/funnel"
                    className="block w-full bg-gradient-to-r from-nautical-blue to-digital-teal text-white px-6 py-4 rounded-lg font-bold text-center transition-all duration-300 hover:shadow-lg"
                  >
                    Get Your Free Marketing Audit
                  </Link>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="block w-full bg-white text-nautical-blue px-6 py-4 rounded-lg font-bold text-center transition-all duration-300 hover:shadow-lg border-2 border-nautical-blue/20"
                  >
                    Call Us: {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
