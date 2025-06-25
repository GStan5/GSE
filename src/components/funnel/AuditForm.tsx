"use client";

import { useState } from "react";

interface FormData {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  competitors: string[];
}

interface AuditFormProps {
  onSubmit?: (data: FormData) => void;
}

export default function AuditForm({ onSubmit }: AuditFormProps) {
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    competitors: ["", "", ""],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCompetitorChange = (index: number, value: string) => {
    const newCompetitors = [...formData.competitors];
    newCompetitors[index] = value;
    setFormData((prev) => ({
      ...prev,
      competitors: newCompetitors,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to Google Apps Script
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;

      if (!scriptUrl) {
        throw new Error("Google Apps Script URL not configured");
      }

      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          competitors: formData.competitors.filter(
            (comp) => comp.trim() !== ""
          ),
        }),
      });

      if (response.ok) {
        console.log("Form submitted successfully:", formData);

        if (onSubmit) {
          onSubmit(formData);
        }

        // Reset form
        setFormData({
          businessName: "",
          contactName: "",
          email: "",
          phone: "",
          website: "",
          address: "",
          competitors: ["", "", ""],
        });

        alert(
          "🎉 Success! Your free audit request has been submitted. You will receive your comprehensive report within 24-48 hours."
        );
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        "There was an error submitting your form. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="audit-form"
      className="py-16 bg-gradient-to-br from-nautical-blue to-digital-teal"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-10">
          <div className="inline-flex items-center bg-solar-flare-coral/10 px-4 py-2 rounded-full mb-4 border border-solar-flare-coral/20">
            <svg
              className="w-4 h-4 text-solar-flare-coral mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs uppercase tracking-wider text-solar-flare-coral font-bold">
              DON&apos;T WAIT
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 font-heading leading-tight">
            Claim Your Report Now
          </h2>
          <p className="text-lg text-ami-sand">
            The more fields you fill out, the better and more detailed your
            report will be
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-white/50">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-digital-teal/10 to-nautical-blue/10 px-4 py-2 rounded-full mb-3">
              <svg
                className="w-4 h-4 text-digital-teal mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-bold text-digital-teal uppercase tracking-wider">
                FREE $299 VALUE
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-nautical-blue font-heading mb-1">
              Local Visibility Audit
            </h3>
            <p className="text-sm text-charcoal-gray/70">
              Comprehensive analysis delivered in 24-48 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              {/* Required Fields */}
              <div className="bg-gradient-to-r from-solar-flare-coral/5 to-solar-flare-coral/10 p-4 rounded-xl border border-solar-flare-coral/15">
                <div className="flex items-center mb-3">
                  <svg
                    className="w-4 h-4 text-solar-flare-coral mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h4 className="text-sm font-bold text-solar-flare-coral uppercase tracking-wide">
                    Required Information
                  </h4>
                </div>
                <div className="space-y-3">
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-digital-teal focus:ring-2 focus:ring-digital-teal/20 transition-all duration-300 text-charcoal-gray font-medium placeholder:text-gray-400"
                    placeholder="Business Name *"
                  />

                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-digital-teal focus:ring-2 focus:ring-digital-teal/20 transition-all duration-300 text-charcoal-gray font-medium placeholder:text-gray-400"
                    placeholder="Contact Name *"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-digital-teal focus:ring-2 focus:ring-digital-teal/20 transition-all duration-300 text-charcoal-gray font-medium placeholder:text-gray-400"
                    placeholder="Email Address *"
                  />
                </div>
              </div>

              {/* Optional Contact Info */}
              <div className="bg-gradient-to-r from-digital-teal/5 to-digital-teal/10 p-4 rounded-xl border border-digital-teal/15">
                <div className="flex items-center mb-3">
                  <svg
                    className="w-4 h-4 text-digital-teal mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <h4 className="text-sm font-bold text-digital-teal uppercase tracking-wide">
                    Contact Information (Optional)
                  </h4>
                </div>
                <div className="space-y-3">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-digital-teal focus:ring-2 focus:ring-digital-teal/20 transition-all duration-300 text-charcoal-gray font-medium placeholder:text-gray-400"
                    placeholder="Phone Number"
                  />

                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-digital-teal focus:ring-2 focus:ring-digital-teal/20 transition-all duration-300 text-charcoal-gray font-medium placeholder:text-gray-400"
                    placeholder="Website (e.g., www.yourbusiness.com or https://yourbusiness.com)"
                  />

                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-digital-teal focus:ring-2 focus:ring-digital-teal/20 transition-all duration-300 text-charcoal-gray font-medium placeholder:text-gray-400"
                    placeholder="Business Address"
                  />
                </div>
              </div>

              {/* Competitor Analysis */}
              <div className="bg-gradient-to-r from-nautical-blue/5 to-nautical-blue/10 p-4 rounded-xl border border-nautical-blue/15">
                <div className="flex items-center mb-3">
                  <svg
                    className="w-4 h-4 text-nautical-blue mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h4 className="text-sm font-bold text-nautical-blue uppercase tracking-wide">
                    Competitor Analysis
                  </h4>
                </div>
                <p className="text-xs text-charcoal-gray/70 mb-3">
                  Help us compare your business to your local competition
                </p>
                <div className="space-y-3">
                  {formData.competitors.map((competitor, index) => (
                    <input
                      key={index}
                      type="text"
                      value={competitor}
                      onChange={(e) =>
                        handleCompetitorChange(index, e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-digital-teal focus:ring-2 focus:ring-digital-teal/20 transition-all duration-300 text-charcoal-gray font-medium placeholder:text-gray-400"
                      placeholder={`Competitor ${
                        index + 1
                      } (business name or website)`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-solar-flare-coral to-yellow-500 hover:from-yellow-500 hover:to-solar-flare-coral disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed text-white text-lg font-bold py-4 px-8 rounded-xl transition-all duration-300 uppercase tracking-wider shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none disabled:shadow-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "🚀 SEND MY FREE REPORT"
                )}
              </button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                By submitting this form, you agree to receive marketing
                communications. Unsubscribe anytime.
              </p>
            </div>
          </form>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center text-white">
          <div>
            <div className="text-2xl font-black text-solar-flare-coral mb-1">
              24-48 Hours
            </div>
            <div className="text-ami-sand text-sm">Fast Turnaround</div>
          </div>
          <div>
            <div className="text-2xl font-black text-solar-flare-coral mb-1">
              $299 Value
            </div>
            <div className="text-ami-sand text-sm">Completely Free</div>
          </div>
          <div>
            <div className="text-2xl font-black text-solar-flare-coral mb-1">
              No Obligation
            </div>
            <div className="text-ami-sand text-sm">No Hidden Fees</div>
          </div>
        </div>
      </div>
    </section>
  );
}
