import Image from "next/image";
import type { Locale } from "@/i18n/config";
import { activeRetailEvents, activeRetailers, hubHref } from "./data";

const copy = {
  cs: {
    eventsEyebrow: "Právě otevřené příležitosti",
    eventsTitle: "Tady prodejci právě tvoří část zážitku.",
    eventsBody: "Tři konkrétní akce, na kterých je prostor pro fungující gastro a prodejní koncepty. Aktuální příležitosti pokračují v NFCtron Hub.",
    eventStatus: "Prodejci fungují přes NFCtron",
    eventCta: "Zobrazit aktivní akce v NFCtron Hub",
    bridgeEyebrow: "Síť, která už funguje",
    bridgeTitle: "Akce hledají správný mix. Prodejci hledají správné publikum.",
    bridgeBody: "NFCtron Hub propojí obě strany. NFCtron pak drží platby, komunikaci a přehledný provoz na místě.",
    retailersEyebrow: "Aktivní prodejci",
    retailersTitle: "Ověřené koncepty pro různý typ akce.",
    retailersBody: "Šest aktivních konceptů ze sítě, se kterou lze postavit nabídku od rychlého občerstvení po kompletní gastro zónu.",
    retailerCta: "Zobrazit prodejce v NFCtron Hub",
  },
  en: {
    eventsEyebrow: "Open opportunities now",
    eventsTitle: "Vendors are shaping the experience at these events.",
    eventsBody: "Three real events with room for strong food and retail concepts. Current opportunities continue in NFCtron Hub.",
    eventStatus: "Vendors operate through NFCtron",
    eventCta: "View active events in NFCtron Hub",
    bridgeEyebrow: "A network already at work",
    bridgeTitle: "Events need the right mix. Vendors need the right audience.",
    bridgeBody: "NFCtron Hub connects both sides. NFCtron then supports payments, communication and clear on-site operations.",
    retailersEyebrow: "Active vendors",
    retailersTitle: "Trusted concepts for every kind of event.",
    retailersBody: "A focused selection from a network that can cover everything from quick service to a complete gastro zone.",
    retailerCta: "View vendors in NFCtron Hub",
  },
} as const;

function VendorIcon({ type }: { type: (typeof activeRetailers)[number]["icon"] }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {type === "truck" && <><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></>}
      {type === "burger" && <><path d="M4 10h16M5 10c0-4 3-6 7-6s7 2 7 6M4 14h16M5 18h14a1 1 0 0 0 1-1v-1H4v1a1 1 0 0 0 1 1Z"/></>}
      {type === "food" && <><path d="M6 3v8M9 3v8M6 7h3M7.5 11v10M16 3c-2 3-2 7 1 9v9"/></>}
      {type === "drink" && <><path d="M6 4h12l-2 7a4 4 0 0 1-8 0L6 4ZM12 15v5M9 21h6"/></>}
    </svg>
  );
}

function Arrow() {
  return <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>;
}

function localized(locale: Locale, value: Record<Locale, string>) {
  return value[locale];
}

export default function RetailerActivity({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <>
      <section id="active-events" data-testid="retailer-active-events" className="scroll-mt-24 py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
          <div className="max-w-lg">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">{c.eventsEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">{c.eventsTitle}</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">{c.eventsBody}</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
          {activeRetailEvents.map((event) => (
            <a data-testid="retailer-event-card" key={event.title} href={event.href} target="_blank" rel="noreferrer" className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-[#f7f8fb] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(18,20,93,0.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700">
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                <Image src={event.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-[1.025]" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-blue-700">{c.eventStatus}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.03em] sm:text-xl">{event.title}</h3>
                <p className="mt-2 text-xs leading-5 text-gray-500">{localized(locale, event.date)}<br />{localized(locale, event.place)}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-7 flex justify-start md:justify-end">
          <a href={hubHref} className="group inline-flex min-h-11 items-center gap-4 rounded-full bg-primary-700 px-6 text-xs font-semibold text-white transition hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700">{c.eventCta}<Arrow /></a>
        </div>
      </section>

      <section className="my-5 rounded-[28px] bg-[#f3f2ff] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-12">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">{c.bridgeEyebrow}</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">{c.bridgeTitle}</h2>
          </div>
          <p className="text-sm leading-7 text-gray-600 sm:text-base">{c.bridgeBody}</p>
        </div>
      </section>

      <section id="active-retailers" data-testid="retailer-active-vendors" className="scroll-mt-24 py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
          <div className="max-w-lg">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">{c.retailersEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">{c.retailersTitle}</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">{c.retailersBody}</p>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {activeRetailers.map((retailer) => (
            <div data-testid="active-vendor-card" key={retailer.name} className="group flex min-h-[156px] items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-gray-200/80 transition duration-200 hover:-translate-y-0.5 hover:bg-[#fbfbfe] hover:shadow-[0_14px_35px_rgba(18,20,93,0.07)]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition group-hover:bg-primary-100"><VendorIcon type={retailer.icon} /></div>
              <div className="flex min-h-[114px] min-w-0 flex-1 flex-col pt-0.5">
                <h3 className="text-base font-semibold leading-snug tracking-[-0.025em]">{retailer.name}</h3>
                <p className="mt-1 text-xs font-medium text-primary-700">{localized(locale, retailer.category)}</p>
                <p className="mt-1 text-[11px] leading-5 text-gray-400">{retailer.company}</p>
                <p className="mt-auto pt-3 text-[11px] leading-5 text-gray-500">{localized(locale, retailer.activeAt)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 flex justify-start md:justify-end">
          <a href={hubHref} className="group inline-flex min-h-11 items-center gap-4 rounded-full border border-gray-200 bg-white px-6 text-xs font-semibold text-primary-700 transition hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700">{c.retailerCta}<Arrow /></a>
        </div>
      </section>
    </>
  );
}
