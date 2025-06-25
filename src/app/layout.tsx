import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Analytics from "@/components/Analytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Gravix Strategic Edge - AI-Powered Local Marketing Solutions",
    template: "%s | Gravix Strategic Edge",
  },
  description:
    "Transform your local business with AI-powered marketing automation. We help businesses dominate local search, attract more customers, and scale their online presence with proven digital marketing strategies.",
  keywords: [
    "local marketing",
    "AI marketing automation",
    "digital marketing agency",
    "local SEO",
    "social media management",
    "Google Business Profile optimization",
    "review management",
    "local citation building",
    "small business marketing",
    "local search optimization",
    "automated marketing solutions",
    "lead generation",
    "online reputation management",
    "local business growth",
  ],
  authors: [{ name: "Gravix Strategic Edge" }],
  creator: "Gravix Strategic Edge",
  publisher: "Gravix Strategic Edge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gravixstrategicedge.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gravix Strategic Edge - AI-Powered Local Marketing Solutions",
    description:
      "Transform your local business with AI-powered marketing automation. We help businesses dominate local search, attract more customers, and scale their online presence.",
    url: "https://gravixstrategicedge.com",
    siteName: "Gravix Strategic Edge",
    images: [
      {
        url: "/images/gse-og-image.png",
        width: 1200,
        height: 630,
        alt: "Gravix Strategic Edge - AI-Powered Local Marketing Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gravix Strategic Edge - AI-Powered Local Marketing Solutions",
    description:
      "Transform your local business with AI-powered marketing automation. Dominate local search and attract more customers.",
    images: ["/images/gse-og-image.png"],
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
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Analytics
          googleAnalyticsId={process.env.NEXT_PUBLIC_GA_ID}
          microsoftClarityId={process.env.NEXT_PUBLIC_CLARITY_ID}
        />
        {children}
      </body>
    </html>
  );
}
