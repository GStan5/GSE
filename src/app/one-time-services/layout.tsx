import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "One-Time Marketing Services 2025 | Website Design, Branding & Automation | Gravix Strategic Edge",
  description:
    "Expert one-time marketing services delivered fast without contracts. Custom website development, brand refresh & rebranding, automated booking systems, AI chatbot setup, SEO landing pages, Google Business Profile optimization, social media branding, and blog integration. Project-based solutions for businesses in Sarasota, Florida.",
  keywords: [
    "one-time marketing services",
    "project-based marketing",
    "no contract marketing services",
    "custom website development",
    "website design Florida",
    "brand refresh services",
    "rebranding kit",
    "logo design",
    "automated booking system",
    "tour booking system",
    "rental booking system",
    "AI chatbot development",
    "chatbot service setup",
    "SEO landing page creation",
    "landing page design",
    "website SEO optimization",
    "SEO audit services",
    "technical SEO fixes",
    "Google Business Profile setup",
    "local SEO services",
    "social media branding",
    "social media profile setup",
    "blog setup integration",
    "content management system",
    "marketing automation",
    "digital marketing services",
    "Sarasota marketing agency",
    "Florida marketing services",
    "Bradenton marketing",
    "Gulf Coast marketing",
    "small business marketing",
    "quick marketing solutions",
    "fast delivery marketing",
    "professional marketing help",
    "one time website design",
    "project based marketing agency",
    "no commitment marketing services",
    "freelance marketing services",
    "marketing consultant Florida",
    "web design Sarasota",
    "branding services Florida",
    "local business marketing",
    "startup marketing services",
    "ecommerce marketing setup",
  ],
  openGraph: {
    title: "One-Time Marketing Services 2025 | No Contracts Required",
    description:
      "Get expert marketing help delivered fast without long-term commitments. Custom websites, branding, automation systems, and more. Professional results for businesses in Sarasota & Bradenton, Florida.",
    url: "https://gravixstrategicedge.com/one-time-services",
    siteName: "Gravix Strategic Edge",
    images: [
      {
        url: "/images/one-time-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Professional One-Time Marketing Services - Custom Websites, Branding, Automation & More",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "One-Time Marketing Services 2025 | No Contracts Required",
    description:
      "Expert marketing services delivered project-by-project. Websites, branding, automation systems & more. Fast delivery, professional results.",
    images: ["/images/one-time-services-twitter.jpg"],
    creator: "@GravixSE",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://gravixstrategicedge.com/one-time-services",
  },
};

export default function OneTimeServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
