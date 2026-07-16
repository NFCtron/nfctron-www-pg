import type { Metadata } from "next";
import ArtistHome from "@/components/ArtistHome";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return locale === "cs"
    ? {
        title: "Interpreti a booking | NFCtron",
        description:
          "Profily interpretů, booking a propojení pořadatelů s hudebními projekty, které NFCtron zastupuje a rozvíjí.",
      }
    : {
        title: "Artists and booking | NFCtron",
        description:
          "Artist profiles, booking and a direct connection between organizers and the music projects represented by NFCtron.",
      };
}

export default async function ForArtistsPage() {
  const locale = await getLocale();
  return <ArtistHome locale={locale} />;
}
