import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * Generate complete metadata for a page with SEO best practices
 */
export function generatePageMetadata({
  title,
  description,
  path = "",
  image,
  noindex = false,
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noindex?: boolean;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const ogImage = image || SITE_CONFIG.ogImage;

  return {
    title,
    description,
    keywords: keywords || Array.from(SITE_CONFIG.keywords),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      siteName: SITE_CONFIG.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

/**
 * Generate structured data for breadcrumbs
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate structured data for articles/blog posts
 */
export function generateArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  url,
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

/**
 * Generate structured data for products
 */
export function generateProductSchema({
  name,
  description,
  image,
  price = "0",
  currency = "USD",
  ratingValue,
  reviewCount,
}: {
  name: string;
  description: string;
  image: string;
  price?: string;
  currency?: string;
  ratingValue?: string;
  reviewCount?: string;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: currency,
      availability: "https://schema.org/InStock",
    },
  };

  if (ratingValue && reviewCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
    };
  }

  return schema;
}

/**
 * Generate alt text for images based on context
 */
export function generateImageAlt(context: string, description?: string): string {
  if (description) {
    return `${context} - ${description}`;
  }
  return context;
}

/**
 * Create canonical URL
 */
export function createCanonicalUrl(path: string): string {
  // Remove trailing slash and ensure path starts with /
  const cleanPath = path.replace(/\/$/, "").replace(/^(?!\/)/, "/");
  return `${SITE_CONFIG.url}${cleanPath}`;
}

/**
 * Generate meta tags for social sharing
 */
export function generateSocialTags({
  title,
  description,
  image,
  url,
}: {
  title: string;
  description: string;
  image: string;
  url: string;
}) {
  return {
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

