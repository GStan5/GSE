"use client";

import Link from "next/link";
import { CONTACT_INFO, formatPhone } from "@/config/contact";
import {
  trackPhoneClick,
  trackEmailClick,
  trackConversion,
} from "@/utils/tracking";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-nautical-blue mb-6 font-heading">
            Ready to Start Your
            <span className="block text-transparent bg-gradient-to-r from-solar-flare-coral to-digital-teal bg-clip-text">
              Growth Journey?
            </span>
          </h2>

          <p className="text-xl text-charcoal-gray max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can help your business thrive in the digital
            age. Choose the best way to connect with our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Options */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-nautical-blue mb-6">
              Multiple Ways to Connect
            </h3>

            {/* Phone */}
            <a
              href={`tel:${formatPhone.tel}`}
              onClick={() => {
                trackPhoneClick();
                trackConversion("phone");
              }}
              className="group bg-gradient-to-r from-digital-teal/5 to-digital-teal/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-digital-teal/10 hover:border-digital-teal/30 hover:bg-digital-teal/5 cursor-pointer block"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-digital-teal to-digital-teal/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-nautical-blue mb-2 group-hover:text-digital-teal transition-colors duration-300">
                    Call Us Now
                  </h4>
                  <p className="text-digital-teal font-bold text-lg mb-1">
                    {formatPhone.display}
                  </p>
                  <p className="text-charcoal-gray/80">
                    Speak with a marketing specialist instantly
                  </p>
                </div>
                <div className="text-digital-teal group-hover:translate-x-1 transition-transform duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              onClick={() => {
                trackEmailClick();
                trackConversion("email");
              }}
              className="group bg-gradient-to-r from-solar-flare-coral/5 to-solar-flare-coral/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-solar-flare-coral/10 hover:border-solar-flare-coral/30 hover:bg-solar-flare-coral/5 cursor-pointer block"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-solar-flare-coral to-solar-flare-coral/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-nautical-blue mb-2 group-hover:text-solar-flare-coral transition-colors duration-300">
                    Send Email
                  </h4>
                  <p className="text-solar-flare-coral font-bold text-lg mb-1">
                    {CONTACT_INFO.email}
                  </p>
                  <p className="text-charcoal-gray/80">
                    Detailed inquiries and project discussions
                  </p>
                </div>
                <div className="text-solar-flare-coral group-hover:translate-x-1 transition-transform duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </a>

            {/* Text Message */}
            <a
              href={`sms:${formatPhone.sms}`}
              className="group bg-gradient-to-r from-nautical-blue/5 to-nautical-blue/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-nautical-blue/10 hover:border-nautical-blue/30 hover:bg-nautical-blue/5 cursor-pointer block"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-nautical-blue to-nautical-blue/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-nautical-blue mb-2 group-hover:text-nautical-blue/80 transition-colors duration-300">
                    Text Message
                  </h4>
                  <p className="text-nautical-blue font-bold text-lg mb-1">
                    {formatPhone.display}
                  </p>
                  <p className="text-charcoal-gray/80">
                    Quick questions and immediate responses
                  </p>
                </div>
                <div className="text-nautical-blue group-hover:translate-x-1 transition-transform duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* Right Side - CTA Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-nautical-blue to-nautical-blue/90 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-20 h-20 bg-digital-teal rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-solar-flare-coral rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-solar-flare-coral to-digital-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-center mb-4">
                  Get Started Today
                </h3>

                <p className="text-white/90 text-center mb-6 leading-relaxed">
                  Take the first step towards growing your business. Get your
                  free marketing audit and see real results.
                </p>

                <div className="space-y-4">
                  <Link
                    href="/funnel"
                    className="group w-full bg-gradient-to-r from-solar-flare-coral to-solar-flare-coral/90 hover:from-solar-flare-coral/90 hover:to-solar-flare-coral text-white px-6 py-4 rounded-xl font-bold text-center transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
                  >
                    Get Your FREE Audit
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>

                  <div className="text-center">
                    <p className="text-white/80 text-sm">
                      ✓ No commitment required • ✓ Takes only 2 minutes • ✓
                      Instant results
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-digital-teal/20 rounded-full blur-sm"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-solar-flare-coral/20 rounded-full blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
