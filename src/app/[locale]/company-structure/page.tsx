import type { Metadata } from "next";
import CompanyStructureHome from "@/features/company/CompanyStructureHome";
import { getRouteLocale, type LocaleParams } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await getRouteLocale(params);

  return createPageMetadata({
    locale,
    path: "/company-structure",
    title: locale === "cs" ? "Skupina NFCtron | Jeden ekosystém" : "NFCtron Group | One ecosystem",
    description:
      locale === "cs"
        ? "Poznejte propojený ekosystém NFCtron pro technologie, platby, produkci, hudbu, marketing a rozvoj nových projektů."
        : "Explore the connected NFCtron ecosystem for technology, payments, production, music, marketing and new project development.",
    ogLabel: locale === "cs" ? "Skupina NFCtron" : "NFCtron Group",
  });
}

export default async function CompanyStructurePage({ params }: { params: LocaleParams }) {
  return <CompanyStructureHome locale={await getRouteLocale(params)} />;
}
