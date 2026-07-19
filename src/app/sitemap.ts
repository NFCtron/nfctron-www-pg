import type { MetadataRoute } from "next";
import { INDEXABLE_ROUTES, SITE_INDEXING_ENABLED, SITE_URL } from "@/config/site";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_INDEXING_ENABLED) {
    return [];
  }

  const lastModified = new Date();

  return INDEXABLE_ROUTES.flatMap((route) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${route.path === "/" ? "" : route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          cs: `${SITE_URL}/cs${route.path === "/" ? "" : route.path}`,
          en: `${SITE_URL}/en${route.path === "/" ? "" : route.path}`,
        },
      },
    })),
  );
}
