import { INDEXABLE_PAGES, SITE } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const entries = INDEXABLE_PAGES.filter((p) => p.images && p.images.length > 0)
    .map((p) => {
      const images = (p.images || [])
        .map(
          (img) => `    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`
        )
        .join("\n");
      return `  <url>
    <loc>${escapeXml(`${SITE.origin}${p.path === "/" ? "/" : p.path}`)}</loc>
    <lastmod>${lastmod}</lastmod>
${images}
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
