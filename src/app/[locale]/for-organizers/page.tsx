import type { Metadata } from "next";
import OrganizerHome from "@/features/organizers/OrganizerHome";
import { getRouteLocale, type LocaleParams } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await getRouteLocale(params);
  return createPageMetadata({
    locale,
    path: "/for-organizers",
    title: locale === "cs" ? "Řešení pro pořadatele akcí | NFCtron" : "Solutions for event organizers | NFCtron",
    description: locale === "cs" ? "Vstupenky, bezhotovostní platby a provozní data pro pořadatele akcí v jednom propojeném systému NFCtron." : "Tickets, cashless payments and operational data for event organizers in one connected NFCtron system.",
    ogLabel: locale === "cs" ? "Pro pořadatele" : "For organizers",
  });
}

export default async function ForOrganizersPage({ params }: { params: LocaleParams }) {
  return <OrganizerHome locale={await getRouteLocale(params)} />;
}
