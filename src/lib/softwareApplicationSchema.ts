import { ROUTES, SITE } from "@/lib/site";

/** Sitewide SoftwareApplication JSON-LD — Google SERP stars under URL (all pages) */
export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE.origin}/#app`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: `${SITE.origin}${ROUTES.download}`,
    operatingSystem: "Android",
    applicationCategory: "GameApplication",
    applicationSubCategory: "Card Game",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.ratingValue,
      bestRating: "5",
      worstRating: "1",
      ratingCount: SITE.ratingCount,
    },
    downloadUrl: SITE.downloadUrl,
    softwareVersion: SITE.version,
    fileSize: SITE.fileSize,
    image: `${SITE.origin}${SITE.logo}`,
    screenshot: `${SITE.origin}${SITE.images.game}`,
    description:
      "Teen Patti Lucky is a free Android card game for Pakistani players with JazzCash and EasyPaisa support.",
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.origin,
    },
    countriesSupported: "PK",
    inLanguage: ["en", "ur"],
  };
}
