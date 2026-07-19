import type { Metadata } from "next";
import "@fontsource-variable/dm-sans";
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-ext-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-ext-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-ext-600.css";
import { locales, seo } from "@/i18n/config";
import { getRouteLocale, type LocaleParams } from "@/i18n/routing";
import { SITE_URL } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import CookieConsent from "@/features/privacy/CookieConsent";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const locale = await getRouteLocale(params);
  const content = seo[locale];

  return {
    ...createPageMetadata({
      title: content.title,
      description: content.description,
      path: "/",
      locale,
      ogLabel: locale === "cs" ? "Akce a vstupenky" : "Events and tickets",
    }),
    metadataBase: new URL(SITE_URL),
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
        { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
      other: [
        { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#25196A" },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LocaleParams;
}) {
  const locale = await getRouteLocale(params);

  return (
    <html lang={locale}>
      <body className="font-sans antialiased">
        {children}
        <CookieConsent locale={locale} />
      </body>
    </html>
  );
}
