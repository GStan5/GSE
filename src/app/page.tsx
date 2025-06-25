import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import AboutSection from "@/components/home/AboutSection";
import AuditCTA from "@/components/home/AuditCTA";
import ContactSection from "@/components/home/ContactSection";
import StructuredData from "@/components/seo/StructuredData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Powered Local Marketing Solutions | Gravix Strategic Edge",
  description:
    "Transform your local business with AI-powered marketing automation. We help businesses dominate local search, attract more customers, and scale their online presence with proven digital marketing strategies.",
  keywords: [
    "local marketing automation",
    "AI digital marketing",
    "local SEO services",
    "Google Business Profile optimization",
    "social media automation",
    "online reputation management",
    "local citation building",
    "lead generation automation",
    "small business marketing",
    "local search optimization",
  ],
  openGraph: {
    title: "AI-Powered Local Marketing Solutions | Gravix Strategic Edge",
    description:
      "Transform your local business with AI-powered marketing automation. Dominate local search and attract more customers with proven strategies.",
    url: "https://gravixstrategicedge.com",
    type: "website",
    images: [
      {
        url: "/images/gse-og-image.png",
        width: 1200,
        height: 630,
        alt: "Gravix Strategic Edge - AI-Powered Local Marketing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Local Marketing Solutions | Gravix Strategic Edge",
    description:
      "Transform your local business with AI-powered marketing automation. Dominate local search and attract more customers.",
    images: ["/images/gse-og-image.png"],
  },
  alternates: {
    canonical: "https://gravixstrategicedge.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <StructuredData type="organization" />
      <StructuredData type="localBusiness" />
      <StructuredData
        type="webpage"
        title="AI-Powered Local Marketing Solutions | Gravix Strategic Edge"
        description="Transform your local business with AI-powered marketing automation. We help businesses dominate local search, attract more customers, and scale their online presence."
        url="https://gravixstrategicedge.com"
      />
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <AboutSection />
        <AuditCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
