import ActionLink from "@/components/ui/ActionLink";
import { AudienceHeroSection } from "@/components/audience/AudiencePage";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import OrganizerEnquiryForm from "./OrganizerEnquiryForm";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/routing";

const content = {
  cs: {
    badge: "NFCtron pro pořadatele",
    eyebrow: "Infrastruktura moderních akcí",
    title: "NFCtron určuje, jak budou moderní akce fungovat.",
    description:
      "Propojujeme ticketing, vstup, platby čipem i kartou a provozní data. Jeden systém od prvního prodaného lístku po finální vyúčtování.",
    primaryCta: "Poptat řešení",
    secondaryCta: "Prohlédnout ekosystém",
    pillarsEyebrow: "Jeden propojený systém",
    pillarsTitle: "NFCtron je raketa nabitá funkcemi.",
    pillarsDescription:
      "Ticketing, platby a data nejsou samostatné světy. NFCtron je spojuje do jednoho systému, který posouvá celou akci dopředu.",
    pillars: [
      [
        "01",
        "Ticketing a vstup",
        "Vlastní prodejní stránka, objednávky, vstupenky a rychlá kontrola návštěvníků.",
        [
          "Prodejní microsite",
          "Typy vstupenek a vlny",
          "Slevy a promo kódy",
          "Kontrola vstupu",
          "Objednávky a refundace",
        ],
      ],
      [
        "02",
        "Platby na akci",
        "Uzavřený čipový systém, platební karty nebo telefon podle typu akce.",
        [
          "Platba čipem",
          "Platba kartou",
          "Mobilní terminál",
          "Dobíjení kreditu",
          "Refundace po akci",
        ],
      ],
      [
        "03",
        "NFCtron Hub",
        "Prodeje, tržby a provozní data dostupná vašemu týmu v reálném čase.",
        [
          "Tržby v reálném čase",
          "Přehled prodejních míst",
          "Správa týmu a rolí",
          "Exporty a vyúčtování",
          "Data pro další ročník",
        ],
      ],
    ],
    responsibilityEyebrow: "Řešení, které vzniká s vámi",
    responsibilityTitle: "Nejdřív pochopíme vaši akci. Potom postavíme řešení.",
    responsibilityDescription:
      "Každá akce začíná jinde. Společně projdeme současný stav, cíle i provoz a rozsah skládáme postupně — od jedné služby až po celý ekosystém.",
    responsibilities: [
      [
        "Prodej vstupenek",
        "Prodejní stránka, cenové vlny, objednávky, slevy, kontrola vstupu a podpora návštěvníků.",
      ],
      [
        "Platby návštěvníků",
        "Čipy, karty, telefony, dobíjení, prodejní místa a refundace v modelu, který sedí vaší akci.",
      ],
      [
        "Provoz v areálu",
        "Hardware, konfigurace, školení obsluhy, podpora na místě a řešení nestandardních situací.",
      ],
      [
        "Data a vyúčtování",
        "Průběžné tržby, kontrola prodejců, finální vyúčtování, exporty a podklady pro další ročník.",
      ],
    ],
    scopeEyebrow: "Rozsah spolupráce",
    scopeTitle: "Vyberte si, kolik toho chcete předat NFCtron.",
    scopes: [
      "Ticketing",
      "Platby",
      "Ticketing + platby",
      "Kompletní ekosystém",
    ],
    eventsProof: "Chcete vidět NFCtron v praxi?",
    eventsProofCta: "Prohlédnout prodávané akce",
    journeyEyebrow: "Celý životní cyklus akce",
    journeyTitle: "Před akcí. Na místě. Po akci.",
    journey: [
      [
        "Před akcí",
        "Spuštění prodeje, konfigurace vstupenek, příprava prodejců a provozního modelu.",
      ],
      [
        "Na místě",
        "Kontrola vstupu, platby, dobíjení, prodejní místa a podpora přímo v areálu.",
      ],
      [
        "Po akci",
        "Refundace, vyúčtování, reporting a data, díky kterým bude další ročník lepší.",
      ],
    ],
    paymentsEyebrow: "Platby bez kompromisů",
    paymentsTitle: "Čip, karta nebo telefon. Správný model pro každou akci.",
    paymentsDescription:
      "Technologii nepředepisujeme. Navrhneme platební provoz podle návštěvnosti, areálu, prodejců a cíle pořadatele.",
    paymentTypes: [
      [
        "Čipový systém",
        "Rychlý uzavřený platební ekosystém pro velké a komplexní akce.",
      ],
      [
        "Platební karty",
        "Přímé bezhotovostní platby s přehledem nad celým provozem.",
      ],
      [
        "NFCtron Nautilus",
        "Přijímání plateb kartou přímo v podporovaném telefonu.",
      ],
      [
        "Kombinovaný provoz",
        "Propojení více platebních metod v jednom provozním modelu.",
      ],
    ],
    teamEyebrow: "Více než software",
    teamTitle: "Technologie a tým, který ji doručí.",
    teamDescription:
      "NFCtron není krabicové řešení. Navrhneme architekturu akce, připravíme hardware, zaškolíme tým a podle potřeby podpoříme provoz přímo na místě.",
    teamItems: [
      "Návrh řešení",
      "Hardware a konfigurace",
      "Školení obsluhy",
      "Podpora na místě",
      "Vyúčtování a reporting",
    ],
    formEyebrow: "Pojďme navrhnout vaši akci",
    formTitle: "Řekněte nám, co připravujete.",
    formDescription:
      "Pošlete základní informace. Náš tým se ozve a navrhne rozsah řešení, který dává smysl právě pro vaši akci.",
  },
  en: {
    badge: "NFCtron for organizers",
    eyebrow: "Infrastructure for modern events",
    title: "NFCtron is defining how modern events operate.",
    description:
      "We connect ticketing, entry, chip and card payments, and operational data. One system from the first ticket sold to final settlement.",
    primaryCta: "Request a solution",
    secondaryCta: "Explore the ecosystem",
    pillarsEyebrow: "One connected system",
    pillarsTitle: "NFCtron is a rocket packed with features.",
    pillarsDescription:
      "Ticketing, payments and data are not separate worlds. NFCtron connects them into one system that moves the entire event forward.",
    pillars: [
      [
        "01",
        "Ticketing and entry",
        "A dedicated sales page, orders, tickets and fast visitor access control.",
        [
          "Sales microsite",
          "Ticket types and waves",
          "Discounts and promo codes",
          "Access control",
          "Orders and refunds",
        ],
      ],
      [
        "02",
        "Event payments",
        "A closed-loop chip system, payment cards or phones based on the event model.",
        [
          "Chip payments",
          "Card payments",
          "Mobile terminal",
          "Credit top-ups",
          "Post-event refunds",
        ],
      ],
      [
        "03",
        "NFCtron Hub",
        "Sales, revenue and operational data available to your team in real time.",
        [
          "Real-time revenue",
          "Point-of-sale overview",
          "Team and role management",
          "Exports and settlement",
          "Data for the next edition",
        ],
      ],
    ],
    responsibilityEyebrow: "A solution built with you",
    responsibilityTitle:
      "First we understand your event. Then we build the solution.",
    responsibilityDescription:
      "Every event starts in a different place. Together, we review the current setup, goals and operations, then build the scope step by step — from one service to the complete ecosystem.",
    responsibilities: [
      [
        "Ticket sales",
        "Sales page, price waves, orders, discounts, access control and visitor support.",
      ],
      [
        "Visitor payments",
        "Chips, cards, phones, top-ups, points of sale and refunds in the model that fits your event.",
      ],
      [
        "Venue operations",
        "Hardware, configuration, staff training, on-site support and non-standard situations.",
      ],
      [
        "Data and settlement",
        "Live revenue, vendor control, final settlement, exports and inputs for your next edition.",
      ],
    ],
    scopeEyebrow: "Scope of cooperation",
    scopeTitle: "Choose how much you want to hand over to NFCtron.",
    scopes: [
      "Ticketing",
      "Payments",
      "Ticketing + payments",
      "Complete ecosystem",
    ],
    eventsProof: "Want to see NFCtron in action?",
    eventsProofCta: "Explore events on sale",
    journeyEyebrow: "The complete event lifecycle",
    journeyTitle: "Before. On site. After.",
    journey: [
      [
        "Before the event",
        "Sales launch, ticket configuration, vendor setup and operational planning.",
      ],
      [
        "On site",
        "Entry control, payments, top-ups, points of sale and support across the venue.",
      ],
      [
        "After the event",
        "Refunds, settlement, reporting and data that make the next edition better.",
      ],
    ],
    paymentsEyebrow: "Payments without compromise",
    paymentsTitle: "Chip, card or phone. The right model for every event.",
    paymentsDescription:
      "We do not prescribe technology. We design payment operations around attendance, venue, vendors and organizer goals.",
    paymentTypes: [
      [
        "Chip system",
        "A fast closed-loop payment ecosystem for large and complex events.",
      ],
      [
        "Payment cards",
        "Direct cashless payments with an overview of the entire operation.",
      ],
      [
        "NFCtron Nautilus",
        "Accept card payments directly on a supported phone.",
      ],
      [
        "Hybrid operations",
        "Combine multiple payment methods in one operational model.",
      ],
    ],
    teamEyebrow: "More than software",
    teamTitle: "Technology and the team that delivers it.",
    teamDescription:
      "NFCtron is not an off-the-shelf product. We design the event architecture, prepare hardware, train the team and support operations on site when needed.",
    teamItems: [
      "Solution design",
      "Hardware and configuration",
      "Staff training",
      "On-site support",
      "Settlement and reporting",
    ],
    formEyebrow: "Let’s design your event",
    formTitle: "Tell us what you are planning.",
    formDescription:
      "Share the essentials. Our team will get back to you with a solution scope that makes sense for your event.",
  },
} as const;

export default function OrganizerHome({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <div className="min-h-screen bg-white text-primary-900">
      <SiteHeader locale={locale} active="organizers" />
      <main>
        <AudienceHeroSection
          badge={copy.badge}
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          actions={
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ActionLink href="#contact" arrow>
                {copy.primaryCta}
              </ActionLink>
              <ActionLink href="#ecosystem" variant="secondary">
                {copy.secondaryCta}
              </ActionLink>
            </div>
          }
        />

        <section
          id="ecosystem"
          className="scroll-mt-20 bg-[#f8f8fb] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
        >
          <div className="mx-auto max-w-[1120px]">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {copy.pillarsEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                {copy.pillarsTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-500">
                {copy.pillarsDescription}
              </p>
            </div>
            <div className="mt-9 grid gap-4 lg:grid-cols-3">
              {copy.pillars.map(([number, title, description, features]) => (
                <article
                  key={number}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 sm:p-8"
                >
                  <span className="text-[9px] font-semibold text-primary-500">
                    {number}
                  </span>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {description}
                  </p>
                  <ul className="mt-7 space-y-3 border-t border-gray-100 pt-6">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-xs font-medium text-primary-900"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-primary-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="scroll-mt-20 px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {copy.responsibilityEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                {copy.responsibilityTitle}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500">
                {copy.responsibilityDescription}
              </p>
            </div>

            <div className="mt-12 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
              {copy.responsibilities.map(([title, description], index) => (
                <article key={title} className="border-t border-gray-200 pt-6">
                  <span className="text-[9px] font-semibold text-primary-400">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[24px] bg-primary-900 p-7 text-white sm:p-9">
              <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-14">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-primary-300">
                    {copy.scopeEyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">
                    {copy.scopeTitle}
                  </h3>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {copy.scopes.map((scope, index) => (
                    <div
                      key={scope}
                      className="flex items-center gap-4 rounded-xl bg-white/[0.055] px-5 py-4 text-sm font-medium"
                    >
                      <span className="text-[9px] text-primary-300">
                        0{index + 1}
                      </span>
                      {scope}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                <p className="text-sm text-white/60">{copy.eventsProof}</p>
                <ActionLink href={localizedPath(locale, "/#events")} variant="secondary" arrow>
                  {copy.eventsProofCta}
                </ActionLink>
              </div>
            </div>
          </div>
        </section>

        <section id="payments" className="scroll-mt-20 px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
              {copy.journeyEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              {copy.journeyTitle}
            </h2>
            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {copy.journey.map(([title, description], index) => (
                <article
                  key={title}
                  className="rounded-2xl bg-[#f8f8fb] p-7 sm:p-8"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[9px] font-semibold text-primary-500 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 text-lg font-semibold tracking-[-0.025em]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-[1120px] overflow-hidden rounded-[28px] bg-primary-900 text-white lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 sm:p-12 lg:p-14">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-300">
                {copy.paymentsEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                {copy.paymentsTitle}
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/60">
                {copy.paymentsDescription}
              </p>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-2 lg:p-5">
              {copy.paymentTypes.map(([title, description], index) => (
                <article
                  key={title}
                  className="rounded-2xl bg-white/[0.05] p-7 sm:p-8"
                >
                  <span className="text-[9px] font-semibold text-primary-300">
                    0{index + 1}
                  </span>
                  <h3 className="mt-7 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-white/55">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="operations" className="scroll-mt-20 bg-[#f8f8fb] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {copy.teamEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                {copy.teamTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-500">
                {copy.teamDescription}
              </p>
            </div>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {copy.teamItems.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-5 py-4 text-sm font-medium"
                >
                  <span className="text-[9px] text-primary-400">
                    0{index + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-20 px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
        >
          <div className="mx-auto grid max-w-[1120px] gap-10 rounded-[28px] bg-[#f8f8fb] p-7 sm:p-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:p-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {copy.formEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                {copy.formTitle}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-gray-500">
                {copy.formDescription}
              </p>
            </div>
            <OrganizerEnquiryForm locale={locale} />
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
