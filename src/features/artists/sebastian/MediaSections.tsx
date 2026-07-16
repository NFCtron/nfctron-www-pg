import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { SebastianSpotifyData } from "./spotify";

type Translator = (value: string) => string;

function formatMetric(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "cs" ? "cs-CZ" : "en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export function SebastianMediaSection({
  locale,
  spotify,
  t,
}: {
  locale: Locale;
  spotify: SebastianSpotifyData;
  t: Translator;
}) {
  const metrics = [
    {
      value: formatMetric(spotify.monthlyListeners, locale),
      label: "měsíčních posluchačů na Spotify",
    },
    {
      value: formatMetric(spotify.toulavaStreams, locale),
      label: "streamů skladby Toulavá",
    },
    {
      value: `${formatMetric(spotify.youtubeViews, locale)}+`,
      label: "zhlédnutí Toulavé na YouTube",
    },
  ];

  return (
    <section className="bg-[#f8f8fb] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-[1120px]">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-600">
              {t("Poslouchejte Sebastiana")}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
              {t(
                "Hudba, kterou fanoušci znají ještě před první notou na pódiu.",
              )}
            </h2>
          </div>
          <dl className="grid grid-cols-2 gap-6 border-t border-gray-200 pt-7 sm:grid-cols-3">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={index === 2 ? "col-span-2 sm:col-span-1" : undefined}
              >
                <dd className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                  {metric.value}
                </dd>
                <dt className="mt-1.5 text-[10px] leading-5 text-gray-500">
                  {t(metric.label)}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-[#121212] p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between px-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55">
                Spotify
              </span>
              <a
                href={spotify.artistUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-medium text-white/70 transition hover:text-white"
              >
                {t("Otevřít profil")} →
              </a>
            </div>
            <iframe
              title="Sebastian na Spotify"
              src="https://open.spotify.com/embed/artist/1ucovYZ0AOZZ0ZIfjhYFfQ?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl"
            />
          </div>

          <a
            href="https://www.youtube.com/watch?v=Ls4JABaEhEE"
            target="_blank"
            rel="noreferrer"
            className="group relative min-h-[340px] overflow-hidden rounded-2xl bg-primary-900 sm:min-h-[400px]"
          >
            <Image
              src="/artists/sebastian/alma-youtube.jpg"
              alt="Videoklip Sebastian — ALMA"
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 text-white sm:p-8">
              <div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  YouTube · Official video
                </span>
                <h3 className="mt-2 text-lg font-semibold tracking-[-0.03em] sm:text-xl">
                  Sebastian — ALMA ft. Patrik Malý
                </h3>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm text-primary-900 transition group-hover:scale-105 sm:h-11 sm:w-11">
                ▶
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export function SebastianLiveShowSection({ t }: { t: Translator }) {
  return (
    <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto grid max-w-[1120px] overflow-hidden rounded-[28px] bg-primary-900 text-white lg:grid-cols-[1.25fr_0.75fr]">
        <div className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-[560px]">
          <Image
            src="/artists/sebastian/show.jpg"
            alt="Sebastian během živé show"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 700px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-primary-900/25" />
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
            {t("Show postavená pro pódium")}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
            {t(
              "Silná kapela. Velká energie. Efekty, které si publikum zapamatuje.",
            )}
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/65">
            {t(
              "Sebastian nabízí plnohodnotnou koncertní show pro festivaly, městské slavnosti i samostatné koncerty. Rozsah produkce přizpůsobíme prostoru a technickým možnostem akce.",
            )}
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-white/15 pt-7 text-[11px] text-white/75">
            <li>Live band</li>
            <li>{t("Světelná show")}</li>
            <li>CO₂ &amp; confetti</li>
            <li>{t("Pyro a ohňové efekty")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
