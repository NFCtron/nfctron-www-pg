import type { Metadata } from "next";
import TicketingProductPage from "@/features/organizers/TicketingProductPage";
import { getRouteLocale, type LocaleParams } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const locale = await getRouteLocale(params);

  return createPageMetadata({
    locale,
    path: "/for-organizers/ticketing",
    title:
      locale === "cs"
        ? "NFCtron Tickets | Ticketing a vstup pro moderní akce"
        : "NFCtron Tickets | Ticketing and entry for modern events",
    description:
      locale === "cs"
        ? "Prodejní engine, tvorba vstupenek a akreditací, návrh vstupního flow, prodej na místě a plně automatizované vyúčtování v NFCtron Tickets."
        : "A sales engine, ticket and accreditation setup, entry-flow planning, on-site sales and fully automated settlement in NFCtron Tickets.",
    ogLabel: "NFCtron Tickets",
  });
}

export default async function TicketingPage({
  params,
}: {
  params: LocaleParams;
}) {
  return <TicketingProductPage locale={await getRouteLocale(params)} />;
}
