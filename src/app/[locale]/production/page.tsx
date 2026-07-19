import type { Metadata } from "next";
import ProductionHome from "@/features/production/ProductionHome";
import { getRouteLocale, type LocaleParams } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await getRouteLocale(params);
  return createPageMetadata({
    locale,
    path: "/production",
    title: locale === "cs" ? "Produkce akcí | NFCtron" : "Event production | NFCtron",
    description: locale === "cs" ? "NFCtron spojuje vlastní produkční kapacity a ověřené partnery do jednoho řízeného eventového celku." : "NFCtron combines in-house production capacity and trusted partners into one managed event delivery team.",
    ogLabel: locale === "cs" ? "Produkce" : "Production",
    image: "https://images.nfctron.com/organizers/f56e6361-4114-4691-bbde-8b03e4d760aa.jpg",
  });
}

export default async function ProductionPage({ params }: { params: LocaleParams }) {
  return <ProductionHome locale={await getRouteLocale(params)} />;
}
