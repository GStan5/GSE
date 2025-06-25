import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateSEOMetadata } from "@/lib/seo";
import { CONTACT_INFO } from "@/config/contact";

export const metadata = generateSEOMetadata({
  title: "Terms of Service | Gravix Strategic Edge",
  description:
    "Read our terms of service to understand the agreement between you and Gravix Strategic Edge when using our AI-powered marketing services.",
  url: "/terms-of-service",
});

export default function TermsOfService() {
  const lastUpdated = "December 25, 2024";

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-nautical-blue mb-6 font-heading">
              Terms of Service
            </h1>
            <p className="text-xl text-charcoal-gray max-w-3xl mx-auto">
              These terms govern your use of our website and services. Please
              read them carefully before using our AI-powered marketing
              solutions.
            </p>
            <div className="mt-4 text-sm text-gray-600">
              Last Updated: {lastUpdated}
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Agreement to Terms
              </h2>
              <p className="text-charcoal-gray mb-6">
                By accessing and using the Gravix Strategic Edge website and
                services, you accept and agree to be bound by these Terms of
                Service. If you do not agree to these terms, please do not use
                our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Our Services
              </h2>
              <p className="text-charcoal-gray mb-4">
                Gravix Strategic Edge provides AI-powered digital marketing
                services, including:
              </p>
              <ul className="list-disc list-inside text-charcoal-gray mb-6 space-y-2">
                <li>Social media management and automation</li>
                <li>Local SEO optimization and citation building</li>
                <li>Online reputation management</li>
                <li>Google Business Profile optimization</li>
                <li>Marketing automation and lead generation</li>
                <li>Digital marketing audits and consultations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Use of Services
              </h2>

              <h3 className="text-2xl font-semibold text-nautical-blue mb-4">
                Permitted Use
              </h3>
              <p className="text-charcoal-gray mb-4">
                You may use our services for lawful business purposes only. You
                agree to provide accurate and complete information when
                requested.
              </p>

              <h3 className="text-2xl font-semibold text-nautical-blue mb-4">
                Prohibited Activities
              </h3>
              <p className="text-charcoal-gray mb-4">
                You may not use our services to:
              </p>
              <ul className="list-disc list-inside text-charcoal-gray mb-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Distribute spam, malware, or harmful content</li>
                <li>Engage in fraudulent or deceptive practices</li>
                <li>Interfere with our website or services</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Service Agreements
              </h2>
              <p className="text-charcoal-gray mb-4">
                Specific services will be governed by separate service
                agreements that detail:
              </p>
              <ul className="list-disc list-inside text-charcoal-gray mb-6 space-y-2">
                <li>Scope of work and deliverables</li>
                <li>Payment terms and pricing</li>
                <li>Project timelines and milestones</li>
                <li>Performance metrics and reporting</li>
                <li>Termination conditions</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Payment Terms
              </h2>
              <p className="text-charcoal-gray mb-4">For paid services:</p>
              <ul className="list-disc list-inside text-charcoal-gray mb-6 space-y-2">
                <li>Payment is due according to the agreed schedule</li>
                <li>Late payments may incur additional fees</li>
                <li>Services may be suspended for non-payment</li>
                <li>Refunds are provided according to our refund policy</li>
                <li>All prices are subject to applicable taxes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Intellectual Property
              </h2>
              <p className="text-charcoal-gray mb-4">
                Our website content, software, and proprietary methods are
                protected by intellectual property laws. You retain ownership of
                your business content and data, while we retain rights to our
                tools, processes, and methodologies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Privacy and Data
              </h2>
              <p className="text-charcoal-gray mb-6">
                Your privacy is important to us. Our collection and use of
                personal information is governed by our Privacy Policy, which is
                incorporated into these terms by reference.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Disclaimers
              </h2>
              <p className="text-charcoal-gray mb-4">
                Our services are provided "as is" without warranties of any
                kind. We do not guarantee:
              </p>
              <ul className="list-disc list-inside text-charcoal-gray mb-6 space-y-2">
                <li>Specific marketing results or ROI</li>
                <li>Uninterrupted or error-free service</li>
                <li>Compatibility with all systems or platforms</li>
                <li>Achievement of specific search rankings</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Limitation of Liability
              </h2>
              <p className="text-charcoal-gray mb-6">
                To the maximum extent permitted by law, Gravix Strategic Edge
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of our
                services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Termination
              </h2>
              <p className="text-charcoal-gray mb-6">
                Either party may terminate service agreements according to the
                terms specified in individual contracts. We reserve the right to
                suspend or terminate access to our services for violations of
                these terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Changes to Terms
              </h2>
              <p className="text-charcoal-gray mb-6">
                We may update these Terms of Service from time to time.
                Continued use of our services after changes indicates acceptance
                of the new terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Contact Information
              </h2>
              <p className="text-charcoal-gray mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-charcoal-gray mb-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-nautical-blue hover:underline"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </p>
                <p className="text-charcoal-gray mb-2">
                  <strong>Phone:</strong>{" "}
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-nautical-blue hover:underline"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </p>
                <p className="text-charcoal-gray">
                  <strong>Company:</strong> {CONTACT_INFO.company.name}
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Governing Law
              </h2>
              <p className="text-charcoal-gray mb-6">
                These terms are governed by the laws of the United States. Any
                disputes will be resolved through binding arbitration or in the
                appropriate courts.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
