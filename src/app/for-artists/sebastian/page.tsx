import type { Metadata } from "next";
import SebastianProfile from "@/features/artists/sebastian/SebastianProfile";
import { getSebastianSpotifyData } from "@/features/artists/sebastian/spotify";
import { getLocale } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Sebastian — koncerty a booking | NFCtron",
  description:
    "Koncerty, aktuální termíny a booking zpěváka Sebastiana. Poptávky zajišťuje NFCtron.",
};

export default async function SebastianPage() {
  const [locale, spotify] = await Promise.all([
    getLocale(),
    getSebastianSpotifyData(),
  ]);
  return <SebastianProfile locale={locale} spotify={spotify} />;
}
