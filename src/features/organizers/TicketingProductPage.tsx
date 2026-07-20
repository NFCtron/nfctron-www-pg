import { AudienceHeroSection } from "@/components/audience/AudiencePage";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import ActionLink from "@/components/ui/ActionLink";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/routing";

const content = {
  cs: {
    hero: {
      badge: "NFCtron Tickets",
      eyebrow: "Ticketing a vstup v jednom systému",
      title: "Prodává vstupenky. Řídí vstup. Automaticky vyúčtuje.",
      description:
        "NFCtron Tickets propojuje tvorbu nabídky, prodej, kampaně, vstupní flow, prodej na místě a finální vyúčtování. Pořadatel řídí celý provoz z jednoho místa.",
      primaryCta: "Poptat NFCtron Tickets",
      backCta: "Zpět na Pořadatele",
    },
    builder: {
      eyebrow: "Ticket builder",
      title: "Jeden typ vstupenky. Nebo celý festivalový model.",
      description:
        "Nabídku sestavíte podle reálného provozu akce. Od jediného vstupu až po desítky cenových vln, zón, doplňků a akreditací.",
      items: [
        ["Standard", "2 cenové vlny", "V prodeji"],
        ["VIP", "Kapacita 250", "Připraveno"],
        ["Akreditace", "Schvalovací režim", "Aktivní"],
      ],
      previewStatus: "Aktivní nabídka",
      previewAction: "Přidat typ vstupenky",
      features: [
        ["01", "Jeden i více typů", "Každý typ má vlastní kapacitu, cenu, dostupnost a pravidla."],
        ["02", "Vlny a zóny", "Automatické přechody cen, oddělené kapacity a navazující oprávnění."],
        ["03", "Akreditační mód", "Žádosti, schvalování, role a přístupy bez dalšího systému."],
        ["04", "Dokupy a doplňky", "Parkování, kemp, služby a další položky přímo v objednávce."],
      ],
    },
    campaigns: {
      eyebrow: "Kampaně přímo v prodeji",
      title: "Prodejní engine nekončí tlačítkem Koupit.",
      description:
        "Vlastní e-mailový engine pracuje s publikem, které už akci zná. Spouští cenové vlny, partnerství i cílené nabídky bez exportování dat mezi nástroji.",
      features: [
        "Segmenty podle objednávek a chování",
        "Plánované kampaně a spuštění vln",
        "Promo, benefitní a partnerské kódy",
        "Měření konverzí v jednom přehledu",
      ],
      previewTitle: "Kampaň k další vlně",
      previewLabel: "E-mailový engine",
      previewMeta: "Návštěvníci s nedokončeným nákupem",
      previewStatus: "Naplánováno",
      previewAction: "Spustit v 18:00",
    },
    entry: {
      eyebrow: "Vstupní flow jako součást ticketingu",
      title: "Vstup se navrhuje dřív, než se otevře areál.",
      description:
        "Podle našich zkušeností přibližně 70 % akcí neřeší vstup jako samostatný provozní celek. NFCtron podle rozsahu akce navrhne, naplánuje a vizualizuje varianty vstupního flow — včetně koridorů, kontroly a prodeje na místě.",
      stages: [
        ["01", "Naplánovat", "Příchody, kapacity, brány, koridory, obsluhu a krizové varianty."],
        ["02", "Vizualizovat", "Pořadatel vidí jednotlivá flow, pozice kontroly i prodejní místa ještě před akcí."],
        ["03", "Řídit na místě", "Kontrola vstupenek, řešení výjimek a prodej nových vstupenek v jednom provozu."],
      ],
      note: "Jedna vstupenka. Několik možných flow. Jasný plán pro každý okamžik vstupu.",
    },
    settlement: {
      eyebrow: "Plně automatizované vyúčtování",
      title: "Prodej se uzavírá průběžně. Ne až týdny po akci.",
      description:
        "Objednávky, storna, refundace, poplatky i prodej na místě se propisují do jednoho finančního obrazu. Finální vyúčtování vzniká automaticky a je připravené pro kontrolu i export.",
      rows: [
        ["Online objednávky", "Zahrnuto"],
        ["Prodej na místě", "Zahrnuto"],
        ["Storna a refundace", "Započteno"],
        ["Finální podklady", "Připraveno"],
      ],
      previewTitle: "Automatické vyúčtování",
      features: [
        "Průběžný finanční přehled",
        "Automatické započtení storna a refundací",
        "Propojení online a lokálního prodeje",
        "Kontrolní exporty a finální podklady",
      ],
    },
    visitor: {
      eyebrow: "Výsledek vidí návštěvník",
      title: "Méně tření. Víc důvěry v každém kroku.",
      description:
        "Silný provoz na pozadí vytváří jednodušší nákup, bezpečnější vstup a méně dotazů před akcí i po ní.",
      items: [
        ["Bezpečná vstupenka", "Kontrolovaný QR kód a vstupenka vždy dostupná v telefonu."],
        ["Můj NFCtron", "Objednávky, doklady, změny a vstupenky na jednom místě."],
        ["Oficiální změny a refundace", "Jasný proces bez neověřených převodů a zbytečné podpory."],
      ],
    },
    cta: {
      eyebrow: "NFCtron Tickets pro vaši akci",
      title: "Postavme ticketing, který řídí celý vstup.",
      description:
        "Projdeme nabídku, prodejní model, vstupní flow i vyúčtování a navrhneme rozsah, který odpovídá vaší akci.",
      button: "Poptat řešení",
    },
  },
  en: {
    hero: {
      badge: "NFCtron Tickets",
      eyebrow: "Ticketing and entry in one system",
      title: "Sell tickets. Run entry. Settle automatically.",
      description:
        "NFCtron Tickets connects offer setup, sales, campaigns, entry flow, on-site sales and final settlement. Organizers control the entire operation from one place.",
      primaryCta: "Request NFCtron Tickets",
      backCta: "Back to Organizers",
    },
    builder: {
      eyebrow: "Ticket builder",
      title: "One ticket type. Or a complete festival model.",
      description:
        "Build the offer around real event operations. From a single admission type to multiple pricing waves, zones, add-ons and accreditations.",
      items: [
        ["Standard", "2 pricing waves", "On sale"],
        ["VIP", "Capacity 250", "Ready"],
        ["Accreditation", "Approval mode", "Active"],
      ],
      previewStatus: "Live offer",
      previewAction: "Add ticket type",
      features: [
        ["01", "One or many types", "Each type has its own capacity, price, availability and rules."],
        ["02", "Waves and zones", "Automatic price changes, separate capacities and connected permissions."],
        ["03", "Accreditation mode", "Applications, approval, roles and access without another system."],
        ["04", "Add-ons", "Parking, camping, services and other items directly in the order."],
      ],
    },
    campaigns: {
      eyebrow: "Campaigns built into sales",
      title: "The sales engine does not end at Buy.",
      description:
        "A built-in email engine works with audiences that already know the event. Launch pricing waves, partnerships and targeted offers without moving data between tools.",
      features: [
        "Segments based on orders and behavior",
        "Scheduled campaigns and wave launches",
        "Promo, benefit and partner codes",
        "Conversion measurement in one overview",
      ],
      previewTitle: "Next wave campaign",
      previewLabel: "Email engine",
      previewMeta: "Visitors with an unfinished purchase",
      previewStatus: "Scheduled",
      previewAction: "Launch at 6:00 PM",
    },
    entry: {
      eyebrow: "Entry flow as part of ticketing",
      title: "Entry is designed before the venue opens.",
      description:
        "In our experience, roughly 70% of events do not treat entry as a separate operating system. Depending on event scope, NFCtron designs, plans and visualizes entry flow variants — including corridors, access control and on-site ticket sales.",
      stages: [
        ["01", "Plan", "Arrivals, capacities, gates, corridors, staff and contingency variants."],
        ["02", "Visualize", "Organizers see every flow, control point and sales desk before the event."],
        ["03", "Run on site", "Ticket control, exception handling and new on-site sales in one operation."],
      ],
      note: "One ticket. Multiple possible flows. A clear plan for every moment at the entrance.",
    },
    settlement: {
      eyebrow: "Fully automated settlement",
      title: "Sales close continuously. Not weeks after the event.",
      description:
        "Orders, cancellations, refunds, fees and on-site sales feed one financial picture. Final settlement is generated automatically and stays ready for review and export.",
      rows: [
        ["Online orders", "Included"],
        ["On-site sales", "Included"],
        ["Cancellations and refunds", "Calculated"],
        ["Final documents", "Ready"],
      ],
      previewTitle: "Automated settlement",
      features: [
        "Continuous financial overview",
        "Automatic cancellation and refund calculation",
        "Connected online and on-site sales",
        "Control exports and final documents",
      ],
    },
    visitor: {
      eyebrow: "Visitors see the result",
      title: "Less friction. More trust at every step.",
      description:
        "Strong operations in the background create an easier purchase, safer entry and fewer support requests before and after the event.",
      items: [
        ["Secure ticket", "A controlled QR code and a ticket always available on the phone."],
        ["My NFCtron", "Orders, receipts, changes and tickets in one place."],
        ["Official changes and refunds", "A clear process without unverified transfers or unnecessary support."],
      ],
    },
    cta: {
      eyebrow: "NFCtron Tickets for your event",
      title: "Let us build ticketing that runs the whole entry.",
      description:
        "We review your offer, sales model, entry flow and settlement, then propose a scope that fits your event.",
      button: "Request a solution",
    },
  },
} as const;

function TicketBuilderPreview({
  copy,
}: {
  copy: (typeof content)[Locale]["builder"];
}) {
  return (
    <div className="rounded-[28px] bg-primary-900 p-5 text-white shadow-[0_24px_70px_rgba(20,28,90,0.16)] sm:p-7">
      <div className="flex items-center justify-between border-b border-white/10 pb-5">
        <p className="text-sm font-semibold">NFCtron Ticket Builder</p>
        <span className="rounded-full bg-white/10 px-3 py-1 text-[9px] uppercase tracking-[0.12em] text-white/70">
          {copy.previewStatus}
        </span>
      </div>
      <div className="mt-3 space-y-2.5">
        {copy.items.map(([name, meta, status], index) => (
          <div
            key={name}
            className="grid grid-cols-[32px_1fr_auto] items-center gap-3 rounded-2xl bg-white/[0.07] px-4 py-4"
          >
            <span className="text-[9px] font-semibold text-blue-300">0{index + 1}</span>
            <div>
              <p className="text-sm font-semibold">{name}</p>
              <p className="mt-1 text-[10px] text-white/50">{meta}</p>
            </div>
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] text-white/70">
              {status}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-2xl border border-dashed border-white/20 px-4 py-4 text-xs text-white/55">
        <span className="text-lg leading-none">+</span>
        <span>{copy.previewAction}</span>
      </div>
    </div>
  );
}

function CampaignPreview({ copy }: { copy: (typeof content)[Locale]["campaigns"] }) {
  return (
    <div className="rounded-[28px] bg-[#f3f3fb] p-5 sm:p-7">
      <div className="rounded-2xl bg-white p-5 shadow-[0_20px_60px_rgba(24,30,80,0.06)] sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-blue-700">{copy.previewLabel}</span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-[9px] font-medium text-emerald-700">
            {copy.previewStatus}
          </span>
        </div>
        <h3 className="mt-8 text-xl font-semibold tracking-[-0.035em]">{copy.previewTitle}</h3>
        <p className="mt-2 text-xs leading-6 text-gray-500">{copy.previewMeta}</p>
        <div className="mt-7 rounded-xl bg-[#f8f8fb] px-4 py-3 text-xs font-medium text-primary-800">
          {copy.previewAction}
        </div>
      </div>
    </div>
  );
}

function SettlementPreview({
  copy,
}: {
  copy: (typeof content)[Locale]["settlement"];
}) {
  return (
    <div className="rounded-[28px] bg-[#f5f5fa] p-5 sm:p-7">
      <div className="rounded-2xl bg-white p-5 sm:p-6">
        <div className="flex items-center justify-between pb-5">
          <p className="text-sm font-semibold">{copy.previewTitle}</p>
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
        </div>
        <div className="space-y-2">
          {copy.rows.map(([label, status]) => (
            <div key={label} className="flex items-center justify-between rounded-xl bg-[#f8f8fb] px-4 py-3">
              <span className="text-xs text-gray-600">{label}</span>
              <span className="text-[10px] font-medium text-emerald-700">{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TicketingProductPage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const organizerPath = localizedPath(locale, "/for-organizers");

  return (
    <div className="min-h-screen bg-white text-primary-900">
      <SiteHeader locale={locale} active="organizers" />
      <main>
        <AudienceHeroSection
          badge={copy.hero.badge}
          eyebrow={copy.hero.eyebrow}
          title={copy.hero.title}
          description={copy.hero.description}
          actions={
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ActionLink href={`${organizerPath}#contact`} arrow>
                {copy.hero.primaryCta}
              </ActionLink>
              <ActionLink href={organizerPath} variant="secondary" arrow>
                {copy.hero.backCta}
              </ActionLink>
            </div>
          }
        />

        <section className="bg-[#f8f8fb] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-[1120px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">{copy.builder.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl">{copy.builder.title}</h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">{copy.builder.description}</p>
            </div>
            <TicketBuilderPreview copy={copy.builder} />
          </div>
          <div className="mx-auto mt-12 grid max-w-[1120px] gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {copy.builder.features.map(([number, title, description]) => (
              <article key={number} className="rounded-2xl bg-white p-6 sm:p-7">
                <span className="text-[9px] font-semibold text-blue-700">{number}</span>
                <h3 className="mt-7 text-base font-semibold tracking-[-0.025em]">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-gray-500">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-[1120px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">{copy.campaigns.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">{copy.campaigns.title}</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">{copy.campaigns.description}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {copy.campaigns.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-xs leading-5 text-primary-800">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <CampaignPreview copy={copy.campaigns} />
          </div>
        </section>

        <section className="bg-primary-900 px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1120px]">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300">{copy.entry.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl">{copy.entry.title}</h2>
              </div>
              <p className="text-sm leading-7 text-white/60 sm:text-base">{copy.entry.description}</p>
            </div>
            <div className="mt-12 grid gap-3 lg:mt-16 lg:grid-cols-3">
              {copy.entry.stages.map(([number, title, description]) => (
                <article key={number} className="rounded-2xl bg-white/[0.07] p-6 sm:p-7">
                  <span className="text-[9px] font-semibold text-blue-300">{number}</span>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em]">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-white/55">{description}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-sm font-medium leading-7 text-white/80">{copy.entry.note}</p>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-[1120px] items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">{copy.settlement.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl">{copy.settlement.title}</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">{copy.settlement.description}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {copy.settlement.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-xs leading-5 text-primary-800">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <SettlementPreview copy={copy.settlement} />
          </div>
        </section>

        <section className="bg-[#f8f8fb] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1120px]">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">{copy.visitor.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">{copy.visitor.title}</h2>
              <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">{copy.visitor.description}</p>
            </div>
            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {copy.visitor.items.map(([title, description]) => (
                <article key={title} className="rounded-2xl bg-white p-6 sm:p-7">
                  <h3 className="text-lg font-semibold tracking-[-0.025em]">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-gray-500">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto flex max-w-[920px] flex-col items-center text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">{copy.cta.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl">{copy.cta.title}</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">{copy.cta.description}</p>
            <div className="mt-8">
              <ActionLink href={`${organizerPath}#contact`} arrow>{copy.cta.button}</ActionLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
