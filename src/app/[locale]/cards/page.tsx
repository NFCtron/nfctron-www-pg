import type { Metadata } from "next";
import CardsHome from "@/features/cards/CardsHome";
import { getRouteLocale, type LocaleParams } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await getRouteLocale(params);
  return createPageMetadata({
    locale,
    path: "/cards",
    title: locale === "cs" ? "NFCtron Card | Karta pro zážitky na akcích" : "NFCtron Card | The card for event experiences",
    description: locale === "cs" ? "NFCtron Card propojuje bezpečné platby, refundace a výhody akcí i interpretů. Objevte artist edition Elizabeth Kopecké a festival edition Vysočina Fest 2027." : "NFCtron Card connects secure payments, refunds and benefits from events and artists. Discover the Elizabeth Kopecká and Vysočina Fest 2027 editions.",
    ogLabel: "NFCtron Card",
  });
}

export default async function CardsPage({ params }: { params: LocaleParams }) {
  return <CardsHome locale={await getRouteLocale(params)} />;
}
