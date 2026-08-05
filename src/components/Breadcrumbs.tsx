import Link from "next/link";
import { SITE } from "@/lib/site";

export type Crumb = { name: string; href?: string };

type Props = {
  items: Crumb[];
};

export default function Breadcrumbs({ items }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.href
        ? { item: item.href.startsWith("http") ? item.href : `${SITE.origin}${item.href}` }
        : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={`${item.name}-${i}`} className="flex items-center gap-1">
                {i > 0 && <span className="text-gray-600 mx-1" aria-hidden="true">/</span>}
                {isLast || !item.href ? (
                  <span className="text-accent" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-accent transition-colors">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
