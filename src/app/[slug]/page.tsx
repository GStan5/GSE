import { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationPage from "@/components/LocationPage";
import ServicePage from "@/components/ServicePage";
import {
  getLocationBySlug,
  getServiceBySlug,
  getAllSlugs,
} from "@/data/seo-slugs";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const location = getLocationBySlug(slug);
  const service = getServiceBySlug(slug);

  if (location) {
    return {
      title: location.metaTitle,
      description: location.description,
      keywords: [
        ...location.localKeywords,
        "AI marketing",
        "digital marketing",
        "local business marketing",
        "Google Business Profile optimization",
        "local SEO",
        `${location.state} marketing`,
      ],
      openGraph: {
        title: location.metaTitle,
        description: location.description,
        url: `https://gravixstrategicedge.com/${slug}`,
        type: "website",
        images: [
          {
            url: "/images/gse-local-marketing.png",
            width: 1200,
            height: 630,
            alt: `${location.city} Marketing - Gravix Strategic Edge`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: location.metaTitle,
        description: location.description,
        images: ["/images/gse-local-marketing.png"],
      },
      alternates: {
        canonical: `https://gravixstrategicedge.com/${slug}`,
      },
    };
  }

  if (service) {
    return {
      title: service.metaTitle,
      description: service.description,
      keywords: [
        ...service.keywords,
        "local business marketing",
        "Florida marketing",
        "AI marketing solutions",
      ],
      openGraph: {
        title: service.metaTitle,
        description: service.description,
        url: `https://gravixstrategicedge.com/${slug}`,
        type: "website",
        images: [
          {
            url: "/images/gse-services-og.png",
            width: 1200,
            height: 630,
            alt: `${service.service} - Gravix Strategic Edge`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: service.metaTitle,
        description: service.description,
        images: ["/images/gse-services-og.png"],
      },
      alternates: {
        canonical: `https://gravixstrategicedge.com/${slug}`,
      },
    };
  }

  // If neither location nor service found, return 404
  return {
    title: "Page Not Found",
  };
}

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params;

  const location = getLocationBySlug(slug);
  const service = getServiceBySlug(slug);

  if (location) {
    return <LocationPage params={{ slug }} />;
  }

  if (service) {
    return <ServicePage params={{ slug }} />;
  }

  // If neither found, return 404
  notFound();
}
