import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { AudienceHeroSection } from "@/components/audience/AudiencePage";
import type { Locale } from "@/i18n/config";
import EditionCard from "./EditionCard";

const content = {
  cs: {
    eyebrow: "Zážitková karta NFCtron",
    title: "Otevře vám dveře k lepším zážitkům.",
    description:
      "Jedna bezpečná karta propojí vaše vstupenky, oblíbené akce, hudbu i interprety. A postupně odemkne výhody, které jinde nenajdete.",
    primaryCta: "Aktivovat kartu zdarma",
    secondaryCta: "Jak karta funguje",
    previewLabel: "NFCtron Card",
    balanceLabel: "Dostupný zůstatek",
    status: "Aktivní",
    virtual: "Virtuální",
    actions: ["Zmrazit kartu", "Zobrazit údaje", "Dobít kartu"],
    sectionEyebrow: "Bezpečný klíč k ekosystému",
    sectionTitle: "Od vstupenky až po poslední zážitek.",
    sectionDescription:
      "S NFCtron Card se vše důležité odehrává na jednom místě. Bezpečně před akcí, během ní i po ní.",
    features: [
      [
        "01",
        "Bezpečně koupíte vstupenku",
        "Kartou zaplatíte za vstupenky a další služby v ekosystému NFCtron.",
      ],
      [
        "02",
        "Peníze zůstávají chráněné",
        "Zůstatek, platby i pohyby na kartě máte přehledně pod kontrolou v NFCtron ID.",
      ],
      [
        "03",
        "Refundace se vrátí na kartu",
        "Pokud vznikne nárok na refundaci, prostředky se automaticky vrátí zpět na NFCtron Card.",
      ],
      [
        "04",
        "Odemkne celý svět NFCtron",
        "Akce, vstupenky, hudba i interpreti se postupně propojí v jednom zážitkovém ekosystému.",
      ],
    ],
    activationEyebrow: "Jedna aktivace zdarma",
    activationTitle: "Vyberte si svou akci. Odemkněte si její svět.",
    activationDescription:
      "Kartu si zdarma aktivujete pro jednu oblíbenou akci. Tím získáte přístup k výhodám, speciálním dokupům a nabídkám určeným pouze držitelům NFCtron Card.",
    activationCta: "Vybrat oblíbenou akci",
    activationItems: [
      ["01", "Zvolím si akci nebo interpreta", "Kartu propojíte s tím, co máte rádi a chcete sledovat."],
      ["02", "Aktivuji kartu zdarma", "První aktivaci pro vybranou akci nebo interpreta získáte bez poplatku."],
      ["03", "Odemknu si více", "Karta zpřístupní vstupenky, dokupy, refundace a další výhody."],
    ],
    termsLink: "Přesné podmínky karty a refundací",
    artistEyebrow: "Artist edition",
    artistTitle: "Karta, která odemkne svět Elizabeth Kopecké.",
    artistDescription:
      "Propojte kartu s oblíbeným interpretem. Jakmile Elizabeth zveřejní vlastní koncert, držitelé její karty mohou získat první přístup ke vstupenkám a dalším zážitkům.",
    artistCta: "Otevřít profil Elizabeth",
    artistCardLabel: "Elizabeth Kopecká edition",
    artistCardBenefit: "První přístup ke vstupenkám",
    festivalEyebrow: "Festival edition",
    festivalTitle: "Jedna karta pro celý Vysočina Fest 2027.",
    festivalDescription:
      "Aktivujte si kartu pro Vysočina Fest a otevřete si nabídky připravené přímo pro jeho návštěvníky — od zvýhodněných vstupenek po dokupy a výhody spojené s akcí.",
    festivalCta: "Objevit Vysočina Fest",
    festivalCardLabel: "Vysočina Fest 2027 edition",
    festivalCardBenefit: "Výhody festivalu na jedné kartě",
    historyEyebrow: "Karta, která dává víc",
    historyTitle: "Každá akce vám může otevřít něco nového.",
    historyDescription:
      "Výhody se budou lišit podle akce a pořadatele. Vy je najdete přehledně na jednom místě.",
    benefits: [
      ["Výhodnější vstupenky", "Speciální ceny a nabídky dostupné držitelům karty."],
      ["Přednostní výběr VIP", "Dřívější přístup k omezeným nebo prémiovým vstupenkám."],
      ["Exkluzivní dokupy", "Služby, zboží a doplňky ke vstupence dostupné pouze s kartou."],
      ["Lepší vstup na akci", "Rychlejší nebo zvýhodněný vstup podle možností pořadatele."],
    ],
    topUp: "Dobití karty",
    betaNote:
      "NFCtron Card je nyní ve fázi Beta. Funkce a dostupnost postupně rozšiřujeme.",
  },
  en: {
    eyebrow: "The NFCtron experience card",
    title: "Your key to better experiences.",
    description:
      "One secure card connects your tickets, favourite events, music and artists — and gradually unlocks benefits you cannot get elsewhere.",
    primaryCta: "Activate your card free",
    secondaryCta: "How the card works",
    previewLabel: "NFCtron Card",
    balanceLabel: "Available balance",
    status: "Active",
    virtual: "Virtual",
    actions: ["Freeze card", "View details", "Top up"],
    sectionEyebrow: "Your secure key to the ecosystem",
    sectionTitle: "From your ticket to the final experience.",
    sectionDescription:
      "With NFCtron Card, everything important stays in one place — before, during and after the event.",
    features: [
      [
        "01",
        "Buy your ticket securely",
        "Use the card to pay for tickets and services across the NFCtron ecosystem.",
      ],
      [
        "02",
        "Keep your funds protected",
        "See your balance, payments and card activity clearly in NFCtron ID.",
      ],
      [
        "03",
        "Refunds return to your card",
        "When you are eligible for a refund, the funds return automatically to NFCtron Card.",
      ],
      [
        "04",
        "Unlock the NFCtron world",
        "Events, tickets, music and artists gradually connect in one experience ecosystem.",
      ],
    ],
    activationEyebrow: "One activation included",
    activationTitle: "Choose your event. Unlock its world.",
    activationDescription:
      "Activate your card for one favourite event free of charge. Unlock benefits, special ticket add-ons and offers available only to NFCtron Card holders.",
    activationCta: "Choose your favourite event",
    activationItems: [
      ["01", "Choose an event or artist", "Connect the card with what you love and want to follow."],
      ["02", "Activate the card free", "Your first activation for a selected event or artist is included."],
      ["03", "Unlock more", "Access tickets, add-ons, refunds and more cardholder benefits."],
    ],
    termsLink: "Full card and refund terms",
    artistEyebrow: "Artist edition",
    artistTitle: "A card that unlocks Elizabeth Kopecká's world.",
    artistDescription:
      "Connect your card with a favourite artist. When Elizabeth announces her own show, cardholders may receive first access to tickets and more experiences.",
    artistCta: "Open Elizabeth's profile",
    artistCardLabel: "Elizabeth Kopecká edition",
    artistCardBenefit: "First access to tickets",
    festivalEyebrow: "Festival edition",
    festivalTitle: "One card for the entire Vysočina Fest 2027.",
    festivalDescription:
      "Activate your card for Vysočina Fest and unlock offers created for its visitors — from better ticket options to add-ons and event-specific benefits.",
    festivalCta: "Discover Vysočina Fest",
    festivalCardLabel: "Vysočina Fest 2027 edition",
    festivalCardBenefit: "Festival benefits on one card",
    historyEyebrow: "A card that gives you more",
    historyTitle: "Every event can unlock something new.",
    historyDescription:
      "Benefits vary by event and organizer. You will always find them clearly in one place.",
    benefits: [
      ["Better ticket prices", "Special prices and offers available to cardholders."],
      ["Priority VIP access", "Earlier access to limited or premium ticket categories."],
      ["Exclusive add-ons", "Services, merchandise and ticket extras available only with the card."],
      ["A better event entry", "Faster or preferred entry when offered by the organizer."],
    ],
    topUp: "Card top-up",
    betaNote:
      "NFCtron Card is currently in Beta. Features and availability will expand gradually.",
  },
} as const;

function MastercardMark() {
  return (
    <span className="relative block h-7 w-12" aria-hidden="true">
      <span className="absolute left-0 top-0 h-7 w-7 rounded-full bg-[#eb001b]/75" />
      <span className="absolute right-0 top-0 h-7 w-7 rounded-full bg-[#f79e1b]/75" />
    </span>
  );
}

function CardActionIcon({ type }: { type: "freeze" | "details" | "topup" }) {
  if (type === "freeze") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
        <path
          d="M10 3v14M4 6l12 8M16 6 4 14M5 10h10"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.25"
        />
      </svg>
    );
  }

  if (type === "details") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
        <path
          d="M2.8 10s2.7-4.2 7.2-4.2 7.2 4.2 7.2 4.2-2.7 4.2-7.2 4.2S2.8 10 2.8 10Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <circle
          cx="10"
          cy="10"
          r="1.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
      <path
        d="M10 4v12M4 10h12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function CardPreview({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <div className="rounded-[28px] bg-gradient-to-br from-[#f1f2ff] via-[#fafaff] to-[#f5f3ff] p-6 sm:p-10">
      <div className="mx-auto max-w-[390px]">
        <div className="relative aspect-[1.58/1] overflow-hidden rounded-[22px] border border-white/80 bg-gradient-to-br from-white via-[#fdfdff] to-[#f2efff] p-6 shadow-[0_24px_55px_rgba(24,20,92,0.14)] sm:p-8">
          <Image
            src="/nfctron-logo-dark.svg"
            alt="NFCtron"
            width={108}
            height={20}
          />
          <div className="mt-8 h-9 w-11 rounded-lg border border-gray-200 bg-gradient-to-br from-[#ecece8] to-[#d8d8d2]" />
          <div className="absolute bottom-7 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
            <div>
              <p className="text-[11px] font-medium tracking-[0.24em] text-gray-400">
                •••• •••• •••• 7196
              </p>
              <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.08em] text-gray-500">
                NFCtron ID
              </p>
            </div>
            <MastercardMark />
          </div>
        </div>

        <div className="mt-7 text-center">
          <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-gray-400">
            {copy.balanceLabel}
          </p>
          <strong className="mt-1 block text-2xl font-semibold tracking-[-0.04em] text-primary-900">
            700,00 Kč
          </strong>
          <p className="mt-3 text-xs font-semibold text-primary-900">
            {copy.previewLabel}
            <span className="ml-2 rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-medium text-emerald-600">
              {copy.status}
            </span>
          </p>
          <p className="mt-2 text-[9px] text-gray-400">
            {copy.virtual} · •••• 7196
          </p>
        </div>

        <div className="mt-7 grid grid-cols-3 gap-3">
          {copy.actions.map((action, index) => (
            <div key={action} className="text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-medium text-primary-700 shadow-sm">
                <CardActionIcon
                  type={
                    index === 0 ? "freeze" : index === 1 ? "details" : "topup"
                  }
                />
              </span>
              <span className="mt-2 block text-[8px] leading-4 text-gray-500">
                {action}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CardsHome({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <div className="min-h-screen bg-white text-primary-900">
      <SiteHeader locale={locale} active="cards" />
      <main>
        <AudienceHeroSection
          badge="NFCtron Card · Beta"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          actions={
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ActionLink href="https://pass.nfctron.com" arrow>
                {copy.primaryCta}
              </ActionLink>
              <ActionLink href="#how-it-works" variant="secondary">
                {copy.secondaryCta}
              </ActionLink>
            </div>
          }
        />

        <section
          id="artist-edition"
          className="scroll-mt-20 bg-[#f8f8fb] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
        >
          <div className="mx-auto grid max-w-[1120px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            <EditionCard
              edition={copy.artistCardLabel}
              benefit={copy.artistCardBenefit}
              image="/artists/elizabeth/portrait.jpg"
              imageAlt="Elizabeth Kopecká"
              imagePosition="object-[70%_25%]"
              number="2026"
            />
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {copy.artistEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                {copy.artistTitle}
              </h2>
              <p className="mt-5 text-sm leading-7 text-gray-500">
                {copy.artistDescription}
              </p>
              <div className="mt-7">
                <ActionLink href="/for-artists/elizabeth-kopecka" arrow>
                  {copy.artistCta}
                </ActionLink>
              </div>
            </div>
          </div>
        </section>

        <section
          id="festival-edition"
          className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
        >
          <div className="mx-auto grid max-w-[1120px] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <div className="max-w-xl lg:order-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {copy.festivalEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                {copy.festivalTitle}
              </h2>
              <p className="mt-5 text-sm leading-7 text-gray-500">
                {copy.festivalDescription}
              </p>
              <div className="mt-7">
                <ActionLink href="https://tickets.nfctron.com" arrow>
                  {copy.festivalCta}
                </ActionLink>
              </div>
            </div>
            <div className="lg:order-2">
              <EditionCard
                edition={copy.festivalCardLabel}
                benefit={copy.festivalCardBenefit}
                image="/events/vysocina-fest/hero-2027.jpg"
                imageAlt="Vysočina Fest 2027"
                imagePosition="object-center"
                logo="/events/vysocina-fest/logo-2027.png"
                logoAlt="Vysočina Fest 2027"
                number="2027"
                tone="festival"
              />
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="scroll-mt-20 bg-[#f8f8fb] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
        >
          <div className="mx-auto max-w-[1120px] rounded-[28px] bg-white px-6 py-10 shadow-[0_18px_50px_rgba(8,11,63,0.045)] sm:px-10 sm:py-14 lg:px-14">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {copy.activationEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                {copy.activationTitle}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500">
                {copy.activationDescription}
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-7">
              {copy.activationItems.map(([number, title, description]) => (
                <article key={number} className="rounded-2xl bg-primary-50 p-6 sm:p-7">
                  <span className="text-[9px] font-semibold text-primary-500">{number}</span>
                  <h3 className="mt-5 text-base font-semibold tracking-[-0.025em]">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-gray-500">{description}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
              <ActionLink href="https://pass.nfctron.com" arrow>
                {copy.activationCta}
              </ActionLink>
              <a
                href={`https://support.nfctron.com/${locale === "cs" ? "cs" : "en"}/podminky-a-informace`}
                className="text-[10px] text-gray-500 underline decoration-gray-300 underline-offset-4 transition hover:text-primary-700"
              >
                {copy.termsLink}
              </a>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="scroll-mt-20 bg-[#f8f8fb] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
        >
          <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {copy.sectionEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                {copy.sectionTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-500">
                {copy.sectionDescription}
              </p>
            </div>
            <div className="space-y-3">
              {copy.features.map(([number, title, description]) => (
                <article
                  key={number}
                  className="grid gap-3 rounded-2xl bg-white px-5 py-5 shadow-[0_12px_35px_rgba(8,11,63,0.045)] sm:grid-cols-[42px_1fr] sm:gap-5 sm:px-6"
                >
                  <span className="pt-1 text-[9px] font-semibold text-primary-500">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.025em]">
                      {title}
                    </h3>
                    <p className="mt-2 max-w-lg text-xs leading-6 text-gray-500">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto max-w-[880px]">
            <CardPreview locale={locale} />
          </div>
        </section>

        <section className="bg-white px-5 pb-16 pt-4 text-primary-900 sm:px-8 sm:pb-20 lg:px-12">
          <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-20">
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {copy.historyEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                {copy.historyTitle}
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500">
                {copy.historyDescription}
              </p>
              <p className="mt-7 max-w-md text-[10px] leading-5 text-gray-400">
                {copy.betaNote}
              </p>
            </div>
            <div className="space-y-3">
              {copy.benefits.map(([title, description], index) => (
                <article
                  key={title}
                  className="group grid gap-3 rounded-2xl bg-[#f8f8fb] px-5 py-5 transition hover:bg-primary-50 sm:grid-cols-[42px_1fr] sm:gap-5 sm:px-6"
                >
                  <span className="pt-1 text-[9px] font-semibold text-primary-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-[-0.025em] sm:text-lg">
                      {title}
                    </h3>
                    <p className="mt-1.5 max-w-lg text-xs leading-5 text-gray-500">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
