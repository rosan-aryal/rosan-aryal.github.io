import { MetadataRoute } from "next";

export const dynamic = "force-static";

export async function GET() {
  const sitemap: MetadataRoute.Sitemap = [
    {
      url: "https://rosan-aryal.github.io/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified instanceof Date ? item.lastModified.toISOString() : item.lastModified}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
