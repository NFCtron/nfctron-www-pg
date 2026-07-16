import type { Metadata } from "next";
import ArtistProfile from "@/features/artists/profile/ArtistProfile";
import { artistProfiles } from "@/features/artists/profile/profiles";
import { getLocale } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Elizabeth Kopecká — booking | NFCtron",
  description:
    "Oficiální profil Elizabeth Kopecké. Koncerty, hudba a booking pod NFCtron Artists.",
};

export default async function ElizabethKopeckaPage() {
  const locale = await getLocale();
  return <ArtistProfile locale={locale} profile={artistProfiles.elizabeth} />;
}
