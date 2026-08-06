import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import { SITE } from "@/lib/site";

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

type BlogPostSchemaProps = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  articleBody?: string;
};

/** Article JSON-LD only — breadcrumbs come from the visible Breadcrumbs component */
export default function BlogPostSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image = `${SITE.origin}${SITE.images.game}`,
  articleBody,
}: BlogPostSchemaProps) {
  const url = `${SITE.origin}/blog/${slug}`;
  const article: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    image,
    author: { "@type": "Organization", name: SITE.name, url: SITE.origin },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.origin}${SITE.logo}`,
        ...imageObjectLicensing,
        creditText: `${SITE.name} logo`,
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-PK",
    ...(articleBody && { articleBody }),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(article) }}
    />
  );
}
