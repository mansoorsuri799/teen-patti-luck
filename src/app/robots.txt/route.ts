import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const body = `# robots.txt for ${SITE.domain}
User-agent: *
Allow: /

Disallow: /api/
Disallow: /_next/static/chunks/pages/
Disallow: /*.json$

Sitemap: ${SITE.origin}/sitemap-index.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
