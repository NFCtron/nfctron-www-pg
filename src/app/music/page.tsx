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
        ? "NFCtron Music | Světový zvuk bez hranic"
        : "NFCtron Music | World-class sound without borders",
    description:
      locale === "cs"
        ? "Elizabeth Kopecká přiváží ze Švýcarska nový světový zvuk. Poslouchejte releasy NFCtron a kupte si hudbu přímo od interpreta v Hi-Res kvalitě."
        : "Elizabeth Kopecká brings a new international sound from Switzerland. Explore NFCtron releases and buy Hi-Res music directly from the artist.",
    image: "/artists/elizabeth/hero.jpg",
    imageAlt: "NFCtron Music",
    ogLabel: "NFCtron Music",
  });
}

export default async function MusicPage() {
  const locale = await getLocale();
  return <MusicHome locale={locale} />;
}
