import Image from "next/image";
import Link from "next/link";
import { artistProfiles } from "../profile/profiles";
import { localize, type ArtistProfileConfig } from "../profile/types";
import type { Locale } from "@/i18n/config";
import type { getArtistHomeContent } from "./content";

type HomeContent = ReturnType<typeof getArtistHomeContent>;

export default function ArtistRoster({
  locale,
  content,
}: {
  locale: Locale;
  content: HomeContent;
}) {
  const artists: ArtistProfileConfig[] = Object.values(artistProfiles);

  return (
    <section className="border-y border-gray-200 bg-[#fafafd] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-[1120px]">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
            {content.rosterEyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
            {content.rosterTitle}
          </h2>
          <p className="mt-4 text-sm leading-7 text-gray-500">
            {content.rosterDescription}
          </p>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {artists.map((artist, index) => {
            const event = artist.events[0];
            const metric = artist.spotify.metrics[0];

            return (
              <Link
                key={artist.slug}
                href={`/for-artists/${artist.slug}`}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-primary-900">
                  <Image
                    src={artist.portraitImage}
                    alt={artist.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className={`object-cover transition duration-500 group-hover:scale-[1.025] ${artist.heroPosition ?? "object-center"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-medium text-primary-700 backdrop-blur">
                    0{index + 1}
                  </span>
                  <p className="absolute bottom-4 left-4 right-4 text-[10px] font-medium text-white/85">
                    {localize(locale, artist.tagline)}
                  </p>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.035em]">
                        {artist.name}
                      </h3>
                      <p className="mt-1.5 text-[10px] uppercase tracking-[0.12em] text-blue-700">
                        {content.availability} ·{" "}
                        {localize(locale, event.status)}
                      </p>
                    </div>
                    <div className="text-right">
                      <strong className="block text-lg font-semibold tracking-[-0.03em]">
                        {metric.value}
                      </strong>
                      <span className="block max-w-24 text-[9px] leading-4 text-gray-400">
                        {localize(locale, metric.label)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-gray-100 pt-4">
                    <p className="text-[9px] uppercase tracking-[0.12em] text-gray-400">
                      {content.nextShow}
                    </p>
                    <p className="mt-1 text-xs font-medium text-primary-900">
                      {event.date} · {event.city}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-[10px] font-medium text-primary-700">
                      <span>{content.profile}</span>
                      <span className="transition group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
