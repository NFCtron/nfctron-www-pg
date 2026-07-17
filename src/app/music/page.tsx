import type { Metadata } from "next";
import MusicHome from "@/features/music/MusicHome";
import { getLocale } from "@/i18n/server";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return createPageMetadata({
    locale,
    path: "/music",
    title:
      locale === "cs"
        ? "NFCtron Music | Hudba, vydání a distribuce"
        : "NFCtron Music | Releases and distribution",
    description:
      locale === "cs"
        ? "Sledujte novou hudbu interpretů NFCtron, vznikající desku Elizabeth Kopecké a možnosti hudební distribuce v jednom propojeném ekosystému."
        : "Follow new music from NFCtron artists, Elizabeth Kopecká's upcoming album and music distribution in one connected ecosystem.",
    image: "/artists/elizabeth/hero.jpg",
    imageAlt: "NFCtron Music",
    ogLabel: "NFCtron Music",
  });
}

export default async function MusicPage() {
  const locale = await getLocale();
  return <MusicHome locale={locale} />;
}
