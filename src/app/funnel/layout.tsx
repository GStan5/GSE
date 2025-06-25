import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Digital Marketing Audit | Gravix Strategic Edge",
  description:
    "Get a comprehensive analysis of your local business's online presence. Our free marketing audit identifies opportunities to attract more customers and dominate local search results.",
  keywords: [
    "free marketing audit",
    "digital marketing analysis",
    "local business audit",
    "SEO audit",
    "online presence analysis",
    "marketing consultation",
    "business growth audit",
    "local search audit",
    "competitor analysis",
    "marketing strategy consultation",
  ],
  openGraph: {
    title: "Free Digital Marketing Audit | Gravix Strategic Edge",
    description:
      "Get a comprehensive analysis of your local business's online presence. Identify opportunities to attract more customers and dominate local search.",
    url: "https://gravixstrategicedge.com/funnel",
    type: "website",
    images: [
      {
        url: "/images/gse-audit-og.png",
        width: 1200,
        height: 630,
        alt: "Free Digital Marketing Audit - Gravix Strategic Edge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Digital Marketing Audit | Gravix Strategic Edge",
    description:
      "Get a comprehensive analysis of your local business's online presence. Usually $299 - FREE for limited time.",
    images: ["/images/gse-audit-og.png"],
  },
  alternates: {
    canonical: "https://gravixstrategicedge.com/funnel",
  },
};

export default function FunnelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
