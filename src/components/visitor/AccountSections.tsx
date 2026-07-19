import Link from "next/link";
import EditionCard from "@/features/cards/EditionCard";
import { ArrowIcon } from "./icons";
import type { Translator } from "./types";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/routing";

const accountFeatures = [
  "Bezpečný nákup vstupenek",
  "Vrácení peněz zpět na kartu",
  "Výhody od akcí a interpretů",
];

export function AccountSection({ t, locale }: { t: Translator; locale: Locale }) {
  return (
    <section className="section bg-[#eef4ff]" id="all-events">
      <div className="container-fluid">
        <div className="grid items-center gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.16em] text-primary-600">
              {t("NFCtron Card pro návštěvníky")}
            </p>
            <h2 className="section-title">
              {t("Jedna karta. Více zážitků.")}
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-gray-500 sm:text-base">
              {t(
                "Bezpečně s ní koupíte vstupenky, získáte peníze zpět na kartu a odemknete výhody své oblíbené akce nebo interpreta.",
              )}
            </p>
            <ul className="mt-7 space-y-3">
              {accountFeatures.map((item, index) => (
                <li key={item} className="flex items-center gap-4 text-sm">
                  <span className="text-[10px] font-semibold text-primary-500">
                    0{index + 1}
                  </span>
                  <span className="font-semibold text-primary-900">
                    {t(item)}
                  </span>
                </li>
              ))}
            </ul>
            <Link href={localizedPath(locale, "/cards")} className="btn-primary mt-7">
              {t("Objevit NFCtron Card")} <ArrowIcon />
            </Link>
          </div>
          <div className="grid min-w-0 gap-5 sm:grid-cols-2">
            <EditionCard
              edition={t("Artist edition")}
              benefit={t("Blíž k Elizabeth a jejím novým zážitkům.")}
              image="/artists/elizabeth/portrait.jpg"
              imageAlt="Elizabeth Kopecká"
              imagePosition="object-[70%_25%]"
              number="2026"
              size="compact"
            />
            <EditionCard
              edition={t("Festival edition")}
              benefit={t("Vysočina Fest 2027 s výhodami pro držitele.")}
              image="/events/vysocina-fest/hero-2027.jpg"
              imageAlt="Vysočina Fest 2027"
              logo="/events/vysocina-fest/logo-2027.png"
              logoAlt="Vysočina Fest 2027"
              number="2027"
              tone="festival"
              size="compact"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function OrganizerCta({ t, locale }: { t: Translator; locale: Locale }) {
  return (
    <section className="bg-primary-700 py-10 text-white sm:py-12">
      <div className="container-fluid flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-2xl font-bold tracking-[-.03em]">
            {t("Pořádáte akci?")}
          </p>
          <p className="mt-2 text-sm text-white/55">
            {t("Podívejte se, co NFCtron umí pro pořadatele a prodejce.")}
          </p>
        </div>
        <Link
          href={localizedPath(locale, "/for-organizers")}
          className="btn bg-white text-primary-900 hover:bg-primary-100"
        >
          {t("Řešení pro pořadatele")} <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
