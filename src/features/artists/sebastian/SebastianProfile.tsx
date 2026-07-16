import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { translate, type Locale } from "@/i18n/config";
import { sebastianBookingEmail, sebastianEvents, sebastianStats } from "./data";
import {
  SebastianLiveShowSection,
  SebastianMediaSection,
} from "./MediaSections";
import type { SebastianSpotifyData } from "./spotify";

function ArrowIcon() {
  return <span aria-hidden="true">→</span>;
}

export default function SebastianProfile({
  locale,
  spotify,
}: {
  locale: Locale;
  spotify: SebastianSpotifyData;
}) {
  const t = (value: string) => translate(locale, value);
  const bookingHref = `mailto:${sebastianBookingEmail}?subject=${encodeURIComponent(
    "Booking Sebastian",
  )}&body=${encodeURIComponent(
    "Dobrý den,\n\nmám zájem o booking Sebastiana.\n\nTermín:\nMísto:\nTyp akce:\nKapacita:\n\nDěkuji.",
  )}`;

  return (
    <div className="min-h-screen bg-white text-primary-900">
      <SiteHeader locale={locale} active="artists" />
      <main>
        <section className="px-5 pt-5 sm:px-8 sm:pt-7 lg:px-12 lg:pt-8">
          <div className="mx-auto max-w-[1280px]">
            <Link
              href="/for-artists"
              className="mb-3 inline-flex items-center gap-2 text-[11px] font-medium text-gray-500 transition hover:text-primary-700 sm:mb-4"
            >
              <span aria-hidden="true">←</span>
              {t("Zpět na interprety")}
            </Link>
            <div className="relative min-h-[560px] overflow-hidden rounded-[28px] bg-primary-900 sm:min-h-[620px]">
              <Image
                src="/artists/sebastian/hero.jpg"
                alt="Sebastian během koncertu"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
              <div className="relative flex min-h-[560px] max-w-2xl flex-col justify-end p-7 text-white sm:min-h-[620px] sm:p-12 lg:p-16">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  NFCtron Artists
                </p>
                <h1 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.055em] sm:text-7xl lg:text-[88px]">
                  Sebastian
                </h1>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                  {t(
                    "Emoce, energie a show, která funguje na klubovém pódiu i před festivalovým publikem.",
                  )}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={bookingHref}
                    className="inline-flex h-11 items-center gap-5 rounded-full bg-white px-6 text-xs font-semibold text-primary-900 transition hover:bg-primary-50"
                  >
                    {t("Poptat booking")} <ArrowIcon />
                  </a>
                  <a
                    href="#koncerty"
                    className="inline-flex h-11 items-center rounded-full border border-white/35 px-6 text-xs font-medium text-white transition hover:bg-white/10"
                  >
                    {t("Zobrazit koncerty")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="grid gap-8 border-b border-gray-200 pb-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {sebastianStats.map((stat) => (
                <div
                  key={stat.label}
                  className="lg:border-r lg:border-gray-200 lg:px-6 first:lg:pl-0 last:lg:border-0"
                >
                  <strong className="block text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                    {stat.value}
                  </strong>
                  <span className="mt-2 block text-[11px] text-gray-500">
                    {t(stat.label)}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid gap-10 py-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-600">
                  {t("Sebastian live")}
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                  {t("Generační výpověď, která naživo dostává nový rozměr.")}
                </h2>
              </div>
              <div className="max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  {t(
                    "Sebastian propojuje silné melodie s moderní popovou produkcí a bezprostředním kontaktem s publikem. Jeho koncerty stojí na energii celé kapely, známých hitech i nové tvorbě.",
                  )}
                </p>
                <p className="mt-5">
                  {t(
                    "NFCtron zajišťuje booking a postupně propojí koncertní nabídku, vstupenky a data z jednotlivých akcí na jednom místě.",
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        <SebastianMediaSection locale={locale} spotify={spotify} t={t} />
        <SebastianLiveShowSection t={t} />

        <section
          id="koncerty"
          className="bg-[#f8f8fb] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
        >
          <div className="mx-auto max-w-[1120px]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-600">
                  {t("Sezóna 2026–2027")}
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                  {t("Nejbližší koncerty")}
                </h2>
              </div>
              <p className="text-xs text-gray-400">
                {t("Další termíny průběžně doplňujeme")}
              </p>
            </div>

            <div className="mt-8 border-t border-gray-200">
              {sebastianEvents.map((event) => (
                <article
                  key={`${event.date}-${event.city}`}
                  className="grid gap-4 border-b border-gray-200 py-6 sm:grid-cols-[150px_1fr_auto] sm:items-center sm:gap-8"
                >
                  <time className="text-xs font-medium text-gray-500">
                    {event.date}
                  </time>
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.025em]">
                      {event.city}
                    </h3>
                    <p className="mt-1 text-xs text-gray-400">{event.venue}</p>
                  </div>
                  <span className="w-fit rounded-full bg-white px-3 py-1.5 text-[9px] font-medium text-primary-700 shadow-sm">
                    {t(event.status)}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-[1120px] overflow-hidden rounded-[28px] bg-primary-900 text-white lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-[360px] lg:min-h-[480px]">
              <Image
                src="/artists/sebastian/portrait.jpg"
                alt="Sebastian a jeho kapela"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                NFCtron Booking
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                {t("Chcete Sebastiana na svou akci?")}
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
                {t(
                  "Pošlete nám termín, místo, typ akce a předpokládanou kapacitu. Bookingový tým NFCtron se vám ozve s dostupností a dalšími kroky.",
                )}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href={bookingHref}
                  className="inline-flex h-11 items-center gap-5 rounded-full bg-white px-6 text-xs font-semibold text-primary-900 transition hover:bg-primary-50"
                >
                  {t("Odeslat poptávku")} <ArrowIcon />
                </a>
                <a
                  href={`mailto:${sebastianBookingEmail}`}
                  className="text-xs text-white/65 transition hover:text-white"
                >
                  {sebastianBookingEmail}
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="pb-12 text-center">
          <Link
            href="/for-artists"
            className="text-xs font-medium text-primary-700 hover:text-primary-900"
          >
            ← {t("Zpět na interprety")}
          </Link>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
