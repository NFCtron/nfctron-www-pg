import type { Metadata } from "next";
import CardsHome from "@/features/cards/CardsHome";
import { getLocale } from "@/i18n/server";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return createPageMetadata({
    locale,
    path: "/cards",
    title:
      locale === "cs"
        ? "NFCtron Card Beta | Karta pro zážitky na akcích"
        : "NFCtron Card Beta | The card for event experiences",
    description:
      locale === "cs"
        ? "NFCtron Card propojuje bezpečné platby, refundace a výhody akcí i interpretů. Objevte artist edition Elizabeth Kopecké a festival edition Vysočina Fest 2027."
        : "NFCtron Card connects secure payments, refunds and benefits from events and artists. Discover the Elizabeth Kopecká and Vysočina Fest 2027 editions.",
    ogLabel: "NFCtron Card · Beta",
  });
}

export default async function CardsPage() {
  const locale = await getLocale();
  return <CardsHome locale={locale} />;
}
