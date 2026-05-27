import type { MetadataRoute } from "next";

import { APP_URL } from "@/utils/constants";

const HOMEPAGE_PRIORITY = 1;

export const dynamic = "force-static";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: APP_URL,
    changeFrequency: "weekly",
    priority: HOMEPAGE_PRIORITY,
  },
];

export default sitemap;
