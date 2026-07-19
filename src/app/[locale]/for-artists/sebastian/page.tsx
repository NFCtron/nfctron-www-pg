import type { Metadata } from "next";
import ArtistProfile from "@/features/artists/profile/ArtistProfile";
import { artistProfiles } from "@/features/artists/profile/profiles";
import { createArtistMetadata } from "@/features/artists/profile/metadata";
import { getRouteLocale, type LocaleParams } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  return createArtistMetadata(artistProfiles.sebastian, await getRouteLocale(params));
}

export default async function SebastianPage({ params }: { params: LocaleParams }) {
  return <ArtistProfile locale={await getRouteLocale(params)} profile={artistProfiles.sebastian} />;
}
