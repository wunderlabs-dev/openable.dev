import type { MetadataRoute } from "next";

import { APP_URL } from "@/utils/constants";

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
