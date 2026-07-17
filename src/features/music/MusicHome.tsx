import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import ActionLink from "@/components/ui/ActionLink";
import type { Locale } from "@/i18n/config";

const releases = [
  {
    artist: "Elizabeth Kopecká",
    artistHref: "/for-artists/elizabeth-kopecka",
    title: "Tak schválně (Au Au Au)",
    date: { cs: "Singl · 2026", en: "Single · 2026" },
    image: "/artists/elizabeth/show.jpg",
    videoUrl: "https://www.youtube.com/watch?v=M8xPs5O3PM8",
  },
  {
    artist: "Sebastian",
    artistHref: "/for-artists/sebastian",
    title: "ALMA ft. Patrik Malý",
    date: { cs: "Vydáno 2026", en: "Released 2026" },
    image: "/artists/sebastian/alma-youtube.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Ls4JABaEhEE",
  },
  {
    artist: "Like-It",
    artistHref: "/for-artists/like-it",
    title: "Nezapomenout",
    date: { cs: "Vydáno 2026", en: "Released 2026" },
    image: "/artists/like-it/hero.jpg",
    videoUrl: "https://youtu.be/L4vFd73Q2eY",
  },
] as const;

const copy = {
  cs: {
    badge: "NFCtron Music",
    eyebrow: "Hudba bez zbytečných hranic",
    title: "Tvoříme hudbu. A všechno, co přijde po ní.",
    description:
      "Od prvního nápadu přes vydání až po fanoušky, koncert a vlastní kartu interpreta. NFCtron propojuje hudbu s celým světem zážitků.",
    milestoneEyebrow: "Právě vzniká ve Švýcarsku",
    milestoneTitle: "Nová deska Elizabeth Kopecké vyjde brzy.",
    milestoneDescription:
      "Nové skladby, nový zvuk a další kapitola projektu Elizabeth. Sledujte místo, kde budeme postupně odkrývat vše od studia až po pódium.",
    milestoneCta: "Sledovat Elizabeth",
    cardCta: "Objevit artist edition",
    releaseEyebrow: "Mezi dvěma kapitolami",
    releaseTitle: "Jeden singl. Než přijde celá deska.",
    releaseDescription:
      "Tak schválně (Au Au Au) je samostatný release Elizabeth před novou deskou. Pusťte si klip a poznejte interpretku, se kterou stavíme další etapu.",
    video: "Přehrát klip",
    profile: "Profil interpreta",
    catalogueEyebrow: "NFCtron releases",
    catalogueTitle: "Hudba, na které pracujeme.",
    distributorEyebrow: "NFCtron Music Distribution",
    distributorTitle: "Vydání hudby je začátek.",
    distributorDescription:
      "Dostaneme ji na platformy, pohlídáme data a propojíme ji s interpretem, koncerty i vstupenkami.",
    distributorCta: "Chci vydat hudbu",
    distributorItems: [
      {
        title: "Vydání na hlavních platformách",
        description: "Spotify, Apple Music, YouTube Music a další služby v jednom procesu.",
      },
      {
        title: "Příprava a správa releasu",
        description: "Metadata, termín vydání i kontrola podkladů bez zbytečného chaosu.",
      },
      {
        title: "Data, která dávají smysl",
        description: "Výsledky vydání, reporting a podpora pro další rozhodnutí.",
      },
      {
        title: "Cesta ze sluchátek na pódium",
        description: "Hudbu umíme propojit s profilem interpreta, koncerty i vstupenkami.",
      },
    ],
  },
  en: {
    badge: "NFCtron Music",
    eyebrow: "Music without unnecessary borders",
    title: "We make music — and everything that comes after.",
    description:
      "From the first idea and release to fans, shows and an artist's own card. NFCtron connects music with an entire world of experiences.",
    milestoneEyebrow: "Now being made in Switzerland",
    milestoneTitle: "Elizabeth Kopecká's new album is coming soon.",
    milestoneDescription:
      "New songs, a new sound and the next chapter of Elizabeth's project. Follow the place where we will reveal the journey from studio to stage.",
    milestoneCta: "Follow Elizabeth",
    cardCta: "Discover artist edition",
    releaseEyebrow: "Between two chapters",
    releaseTitle: "One single before the full album arrives.",
    releaseDescription:
      "Tak schválně (Au Au Au) is Elizabeth's standalone release before the new album. Watch the video and meet the artist whose next chapter we are building.",
    video: "Play video",
    profile: "Artist profile",
    catalogueEyebrow: "NFCtron releases",
    catalogueTitle: "Music we are working on.",
    distributorEyebrow: "NFCtron Music Distribution",
    distributorTitle: "Releasing music is only the beginning.",
    distributorDescription:
      "We put it on platforms, look after the data and connect it with the artist, live shows and tickets.",
    distributorCta: "Release my music",
    distributorItems: [
      {
        title: "Release on major platforms",
        description: "Spotify, Apple Music, YouTube Music and more in one process.",
      },
      {
        title: "Release preparation and management",
        description: "Metadata, release timing and asset checks without unnecessary chaos.",
      },
      {
        title: "Data you can act on",
        description: "Release results, reporting and support for your next decision.",
      },
      {
        title: "From headphones to the stage",
        description: "We can connect music with artist profiles, live shows and tickets.",
      },
    ],
  },
} as const;

export default function MusicHome({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [elizabethRelease, ...catalogue] = releases;

  return (
    <div className="min-h-screen bg-white text-primary-900">
      <SiteHeader locale={locale} active="music" />
      <main>
        <section className="px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <span className="inline-flex rounded-full bg-primary-50 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-primary-700">
              {t.badge}
            </span>
            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-700">
              {t.eyebrow}
            </p>
            <h1 className="mx-auto mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              {t.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              {t.description}
            </p>
          </div>
        </section>

        <section className="bg-[#080b3f] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-[1120px] overflow-hidden rounded-[28px] bg-white/[0.055] lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[390px] sm:min-h-[500px]">
              <Image
                src="/artists/elizabeth/hero.jpg"
                alt="Elizabeth Kopecká"
                fill
                priority
                className="object-cover object-[center_30%]"
                sizes="(max-width: 1024px) 100vw, 620px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b3f]/45 via-transparent to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8bbcff]">
                {t.milestoneEyebrow}
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl">
                {t.milestoneTitle}
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/58">
                {t.milestoneDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/for-artists/elizabeth-kopecka"
                  className="inline-flex h-9 items-center gap-5 rounded-full bg-white px-5 text-[11px] font-medium text-primary-700 transition hover:bg-primary-50"
                >
                  {t.milestoneCta} <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/cards#artist-edition"
                  className="inline-flex h-9 items-center rounded-full border border-white/20 px-5 text-[11px] font-medium text-white transition hover:bg-white/10"
                >
                  {t.cardCta}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-[1120px] items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div className="max-w-lg">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {t.releaseEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                {t.releaseTitle}
              </h2>
              <p className="mt-5 text-sm leading-7 text-gray-500">
                {t.releaseDescription}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ActionLink href={elizabethRelease.videoUrl} arrow>
                  {t.video}
                </ActionLink>
                <ActionLink href={elizabethRelease.artistHref} variant="secondary">
                  {t.profile}
                </ActionLink>
              </div>
            </div>
            <a
              href={elizabethRelease.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative min-h-[340px] overflow-hidden rounded-[24px] bg-primary-900 sm:min-h-[440px]"
            >
              <Image
                src={elizabethRelease.image}
                alt={elizabethRelease.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 620px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 text-white sm:p-8">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55">
                    {elizabethRelease.date[locale]}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em]">
                    {elizabethRelease.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/60">{elizabethRelease.artist}</p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-sm text-primary-900">
                  ▶
                </span>
              </div>
            </a>
          </div>
        </section>

        <section className="bg-[#f8f8fb] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
              {t.catalogueEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              {t.catalogueTitle}
            </h2>
            <div className="mt-9 space-y-3">
              {catalogue.map((release, index) => (
                <article
                  key={release.title}
                  className="group grid items-center gap-4 rounded-2xl bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(8,11,63,0.08)] sm:grid-cols-[34px_112px_1fr_auto] sm:gap-6"
                >
                  <span className="text-[9px] font-semibold text-primary-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative aspect-[1.45/1] overflow-hidden rounded-xl">
                    <Image src={release.image} alt="" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.13em] text-gray-400">
                      {release.date[locale]}
                    </p>
                    <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.03em]">
                      {release.title}
                    </h3>
                    <Link
                      href={release.artistHref}
                      className="mt-1 inline-flex text-xs text-gray-500 transition hover:text-primary-700"
                    >
                      {release.artist} →
                    </Link>
                  </div>
                  <a
                    href={release.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-8 w-fit items-center rounded-full bg-primary-50 px-4 text-[10px] font-medium text-primary-700 transition hover:bg-primary-100 sm:justify-self-end"
                  >
                    {t.video} ↗
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-[1120px] items-start gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {t.distributorEyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.04] tracking-[-0.05em] sm:text-5xl">
                {t.distributorTitle}
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">
                {t.distributorDescription}
              </p>
              <div className="mt-8">
                <a
                  href="mailto:music@nfctron.com?subject=NFCtron Music Distribution"
                  className="inline-flex h-9 items-center gap-5 rounded-full bg-primary-700 px-5 text-[11px] font-medium text-white transition hover:bg-primary-800"
                >
                  {t.distributorCta} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="space-y-8 pt-1 sm:space-y-9">
              {t.distributorItems.map((item, index) => (
                <div
                  key={item.title}
                  className="grid grid-cols-[28px_1fr] gap-4 sm:grid-cols-[36px_1fr] sm:gap-5"
                >
                  <span className="pt-1 text-[9px] font-semibold text-primary-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-[-0.025em] text-primary-900 sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-xl text-xs leading-6 text-gray-500 sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
