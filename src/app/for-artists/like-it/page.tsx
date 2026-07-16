import type { Metadata } from "next";
import ArtistProfile from "@/features/artists/profile/ArtistProfile";
import { artistProfiles } from "@/features/artists/profile/profiles";
import { getLocale } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Like-IT — booking | NFCtron",
  description:
    "Oficiální profil kapely Like-IT. Koncerty, hudba a booking pod NFCtron Artists.",
};

export default async function LikeItPage() {
  const locale = await getLocale();
  return <ArtistProfile locale={locale} profile={artistProfiles.likeIt} />;
}
