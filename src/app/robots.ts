import type { MetadataRoute } from "next";

const APP_URL = "https://openable.dev";

export const dynamic = "force-static";

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
    disallow: ["/api/", "/auth/", "/cli/"],
  },
  sitemap: new URL("/sitemap.xml", APP_URL).toString(),
});

export default robots;
