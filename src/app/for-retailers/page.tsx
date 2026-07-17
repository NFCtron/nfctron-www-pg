import type { Metadata } from "next";
import RetailerHome from "@/components/RetailerHome";
import { getLocale } from "@/i18n/server";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPageMetadata({
    locale,
    path: "/for-retailers",
    title:
      locale === "cs"
        ? "Řešení pro prodejce na akcích | NFCtron"
        : "Solutions for event vendors | NFCtron",
    description:
      locale === "cs"
        ? "NFCtron propojuje pořadatele s prodejci, pomáhá stavět celý gastro provoz a zajišťuje platby, vyúčtování i podporu. Systém NFCtron využívá každou sezonu 1 150 prodejců."
        : "NFCtron connects organizers with vendors, helps build complete gastro operations and supports payments, settlement and operations. Every season, 1,150 vendors use the NFCtron system.",
    ogLabel: locale === "cs" ? "Pro prodejce" : "For vendors",
  });
}

export default async function ForRetailersPage() {
  const locale = await getLocale();
  return <RetailerHome locale={locale} />;
}
