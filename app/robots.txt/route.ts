import { MetadataRoute } from "next";

export const dynamic = "force-static";

export async function GET() {
  const robots: MetadataRoute.Robots = {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://rosan-aryal.github.io/sitemap.xml",
  };

  const rules = Array.isArray(robots.rules) ? robots.rules[0] : robots.rules;
  const userAgent = Array.isArray(rules.userAgent)
    ? rules.userAgent[0]
    : rules.userAgent;
  const allow = Array.isArray(rules.allow) ? rules.allow[0] : rules.allow;

  return new Response(
    `User-agent: ${userAgent}\nAllow: ${allow}\nSitemap: ${robots.sitemap}`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    },
  );
}
