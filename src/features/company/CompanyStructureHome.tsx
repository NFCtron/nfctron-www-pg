import Image from "next/image";
import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { AudienceHeroSection } from "@/components/audience/AudiencePage";
import type { Locale } from "@/i18n/config";

type CompanyUnit = {
  name: string;
  role: string;
  detail?: string;
};

const copy = {
  cs: {
    hero: {
      badge: "Skupina NFCtron",
      eyebrow: "Jeden propojený ekosystém",
      title: "Nejsme jedna služba. Stavíme infrastrukturu pro celý svět akcí.",
      description:
        "Technologie. Platby. Produkce. Hudba. Marketing. Jeden propojený ekosystém.",
    },
    ecosystem: {
      eyebrow: "Skupina NFCtron",
      title: "Specializované části. Jeden směr.",
      description:
        "Každá část má vlastní roli. Dohromady pokrývají celý životní cyklus akce.",
      core: {
        name: "NFCtron a.s.",
        role: "Technologie, ticketing a provoz akcí",
        detail: "Jádro, které propojuje návštěvníky, pořadatele a provoz v jeden celek.",
      },
      pay: {
        name: "NFCtron Pay a.s.",
        role: "Platební infrastruktura a finanční produkty",
      },
      ventures: {
        name: "NFCtron Ventures s.r.o.",
        role: "Investice a rozvoj nových projektů",
      },
      production: {
        name: "NFCtron Production s.r.o.",
        role: "Produkce živých akcí",
      },
      yashica: {
        name: "Yashica Events a.s.",
        role: "Festivaly, koncerty a turné",
        label: "Součást NFCtron Production",
      },
      marketing: {
        name: "NFCtron Marketing s.r.o.",
        role: "Hudba, značky, obsah a interpreti",
      },
    },
    direction: {
      eyebrow: "Jeden ekosystém",
      title: "Od prvního ticketu po poslední světlo na stage.",
      items: [
        {
          number: "01",
          title: "Technologie",
          description: "Systémy, které propojují celý životní cyklus akce.",
        },
        {
          number: "02",
          title: "Realizace",
          description: "Produkce a zkušenosti z reálného provozu.",
        },
        {
          number: "03",
          title: "Růst",
          description: "Nové projekty, hudba, značky a další možnosti pro eventový svět.",
        },
      ],
    },
    news: {
      eyebrow: "Dění ve skupině",
      title: "NFCtron dokončil akvizici Yashica Events.",
      description:
        "Skupina tak propojuje vlastní technologie s produkčními zkušenostmi z festivalů, koncertů a turné — a rozšiřuje podporu pořadatelům akcí.",
      category: "Akvizice",
      date: "3. července 2026",
      cta: "Přečíst celý článek",
      alt: "NFCtron a Yashica Events na koncertním pódiu",
      href: "https://www.nfctron.com/cs/blog/yashica-events-akvizice-rozsireni-podpory-akci",
    },
    close: {
      title: "Jednotlivé části mají vlastní roli. Společně posouvají celý svět akcí.",
      statement: "Tohle je ekosystém NFCtron.",
    },
  },
  en: {
    hero: {
      badge: "NFCtron Group",
      eyebrow: "One connected ecosystem",
      title: "We are not a single service. We are building infrastructure for the entire world of events.",
      description:
        "Technology. Payments. Production. Music. Marketing. One connected ecosystem.",
    },
    ecosystem: {
      eyebrow: "NFCtron Group",
      title: "Specialized capabilities. One direction.",
      description:
        "Every part has its own role. Together, they cover the complete event lifecycle.",
      core: {
        name: "NFCtron a.s.",
        role: "Technology, ticketing and event operations",
        detail: "The core connecting visitors, organizers and operations into one system.",
      },
      pay: {
        name: "NFCtron Pay a.s.",
        role: "Payment infrastructure and financial products",
      },
      ventures: {
        name: "NFCtron Ventures s.r.o.",
        role: "Investment and development of new projects",
      },
      production: {
        name: "NFCtron Production s.r.o.",
        role: "Live event production",
      },
      yashica: {
        name: "Yashica Events a.s.",
        role: "Festivals, concerts and tours",
        label: "Part of NFCtron Production",
      },
      marketing: {
        name: "NFCtron Marketing s.r.o.",
        role: "Music, brands, content and artists",
      },
    },
    direction: {
      eyebrow: "One ecosystem",
      title: "From the first ticket to the last light on stage.",
      items: [
        {
          number: "01",
          title: "Technology",
          description: "Systems connecting the complete event lifecycle.",
        },
        {
          number: "02",
          title: "Delivery",
          description: "Production shaped by experience from real event operations.",
        },
        {
          number: "03",
          title: "Growth",
          description: "New projects, music, brands and new possibilities for the event world.",
        },
      ],
    },
    news: {
      eyebrow: "Inside the group",
      title: "NFCtron completes the acquisition of Yashica Events.",
      description:
        "The group now connects its technology with hands-on production experience from festivals, concerts and tours — expanding support for event organizers.",
      category: "Acquisition",
      date: "3 July 2026",
      cta: "Read the full story",
      alt: "NFCtron and Yashica Events at a concert stage",
      href: "https://www.nfctron.com/cs/blog/yashica-events-akvizice-rozsireni-podpory-akci",
    },
    close: {
      title: "Every part has its own role. Together, they move the entire world of events forward.",
      statement: "This is the NFCtron ecosystem.",
    },
  },
} satisfies Record<Locale, object>;

export default function CompanyStructureHome({ locale }: { locale: Locale }) {
  const c = copy[locale] as (typeof copy)["cs"];

  return (
    <div className="min-h-screen bg-white text-primary-900">
      <SiteHeader locale={locale} active="company" />
      <main>
        <AudienceHeroSection {...c.hero} />

        <section className="bg-[#f6f7fb] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1120px]">
            <div className="max-w-[680px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {c.ecosystem.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                {c.ecosystem.title}
              </h2>
              <p className="mt-4 max-w-[580px] text-sm leading-7 text-gray-500 sm:text-base">
                {c.ecosystem.description}
              </p>
            </div>

            <div className="relative mt-10 overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_50%_46%,rgba(51,74,255,0.12),transparent_31%),linear-gradient(145deg,#eef1fa_0%,#f8f9fc_52%,#eef1fa_100%)] p-4 sm:mt-12 sm:p-6 lg:p-8">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1.12fr_1fr] lg:grid-rows-2">
                <CompanyCard
                  unit={c.ecosystem.core}
                  tone="core"
                  className="order-1 md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-1"
                />
                <CompanyCard
                  unit={c.ecosystem.pay}
                  className="order-2 lg:col-start-1 lg:row-start-1"
                />
                <CompanyCard
                  unit={c.ecosystem.ventures}
                  className="order-3 lg:col-start-1 lg:row-start-2"
                />
                <ProductionCard
                  production={c.ecosystem.production}
                  yashica={c.ecosystem.yashica}
                  className="order-4 lg:col-start-3 lg:row-start-1"
                />
                <CompanyCard
                  unit={c.ecosystem.marketing}
                  className="order-5 lg:col-start-3 lg:row-start-2"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary-900 px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1120px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300">
              {c.direction.eyebrow}
            </p>
            <h2 className="mt-4 max-w-[760px] text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              {c.direction.title}
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3 sm:mt-12">
              {c.direction.items.map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl bg-white/[0.055] p-6 transition-colors duration-300 hover:bg-white/[0.085] sm:p-8"
                >
                  <span className="text-[10px] font-semibold text-blue-300">
                    {item.number}
                  </span>
                  <h3 className="mt-10 text-xl font-semibold tracking-[-0.035em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1120px]">
            <div className="max-w-[680px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {c.news.eyebrow}
              </p>
            </div>

            <Link
              href={c.news.href}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 grid overflow-hidden rounded-[28px] bg-[#f5f4fb] transition-colors duration-300 hover:bg-[#f0eff9] md:grid-cols-[0.92fr_1.08fr] sm:mt-8"
            >
              <div className="relative min-h-[240px] overflow-hidden sm:min-h-[300px] md:min-h-[360px]">
                <Image
                  src="/yashica-events-acquisition.jpg"
                  alt={c.news.alt}
                  fill
                  sizes="(min-width: 768px) 46vw, 100vw"
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025]"
                />
              </div>
              <article className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-500">
                    <span>{c.news.category}</span>
                    <span className="h-1 w-1 rounded-full bg-blue-500" aria-hidden="true" />
                    <time>{c.news.date}</time>
                  </div>
                  <h2 className="mt-6 max-w-[560px] text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                    {c.news.title}
                  </h2>
                  <p className="mt-5 max-w-[580px] text-sm leading-7 text-gray-500 sm:text-base">
                    {c.news.description}
                  </p>
                </div>
                <span className="mt-10 inline-flex items-center gap-4 text-sm font-semibold text-primary-900">
                  {c.news.cta}
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform duration-300 motion-safe:group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>
              </article>
            </Link>

            <div className="mx-auto mt-20 max-w-[880px] text-center sm:mt-24 lg:mt-28">
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                {c.close.title}
              </h2>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                {c.close.statement}
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

function CompanyCard({
  unit,
  tone = "light",
  className = "",
}: {
  unit: CompanyUnit;
  tone?: "light" | "core";
  className?: string;
}) {
  const isCore = tone === "core";

  return (
    <article
      className={`${className} flex min-h-[184px] flex-col justify-between rounded-2xl p-6 transition-transform duration-300 motion-safe:hover:-translate-y-1 sm:p-7 ${
        isCore
          ? "bg-primary-900 text-white shadow-xl shadow-primary-900/15 lg:min-h-full"
          : "bg-white/90 shadow-sm shadow-primary-900/5"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${isCore ? "bg-blue-400" : "bg-blue-600/70"}`}
        aria-hidden="true"
      />
      <div className="mt-10">
        <h3 className="text-xl font-semibold tracking-[-0.035em]">
          {unit.name}
        </h3>
        <p className={`mt-2 text-sm leading-6 ${isCore ? "text-white/65" : "text-gray-500"}`}>
          {unit.role}
        </p>
        {unit.detail ? (
          <p className={`mt-5 text-xs leading-5 ${isCore ? "text-white/45" : "text-gray-400"}`}>
            {unit.detail}
          </p>
        ) : null}
      </div>
    </article>
  );
}

function ProductionCard({
  production,
  yashica,
  className,
}: {
  production: CompanyUnit;
  yashica: CompanyUnit & { label: string };
  className: string;
}) {
  return (
    <article
      className={`${className} rounded-2xl bg-white/90 p-6 shadow-sm shadow-primary-900/5 transition-transform duration-300 motion-safe:hover:-translate-y-1 sm:p-7`}
    >
      <span className="block h-2 w-2 rounded-full bg-blue-600/70" aria-hidden="true" />
      <h3 className="mt-10 text-xl font-semibold tracking-[-0.035em]">
        {production.name}
      </h3>
      <p className="mt-2 text-sm leading-6 text-gray-500">{production.role}</p>
      <div className="mt-6 rounded-xl bg-primary-50 p-4">
        <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-primary-500">
          {yashica.label}
        </span>
        <h4 className="mt-2 text-sm font-semibold tracking-[-0.02em]">
          {yashica.name}
        </h4>
        <p className="mt-1 text-xs leading-5 text-gray-500">{yashica.role}</p>
      </div>
    </article>
  );
}
