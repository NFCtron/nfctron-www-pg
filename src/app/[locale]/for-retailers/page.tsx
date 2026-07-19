import type { Metadata } from "next";
import RetailerHome from "@/components/RetailerHome";
import { getRouteLocale, type LocaleParams } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await getRouteLocale(params);
  return createPageMetadata({
    locale,
    path: "/for-retailers",
    title: locale === "cs" ? "Řešení pro prodejce na akcích | NFCtron" : "Solutions for event vendors | NFCtron",
    description: locale === "cs" ? "NFCtron propojuje pořadatele s prodejci, pomáhá stavět celý gastro provoz a zajišťuje platby, vyúčtování i podporu. Systém NFCtron využívá každou sezonu 1 150 prodejců." : "NFCtron connects organizers with vendors, helps build complete gastro operations and supports payments, settlement and operations. Every season, 1,150 vendors use the NFCtron system.",
    ogLabel: locale === "cs" ? "Pro prodejce" : "For vendors",
  });
}

export default async function ForRetailersPage({ params }: { params: LocaleParams }) {
  return <RetailerHome locale={await getRouteLocale(params)} />;
}
