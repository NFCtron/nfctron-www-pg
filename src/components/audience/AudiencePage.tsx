import type { ReactNode } from "react";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";
import type { Locale } from "@/i18n/config";

type AudienceMode = "organizers" | "retailers" | "artists";

interface AudiencePageProps {
  locale: Locale;
  mode: AudienceMode;
  badge: string;
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  children: ReactNode;
}

export function AudienceHero({
  badge,
  eyebrow,
  title,
  description,
  actions,
}: Pick<
  AudiencePageProps,
  "badge" | "eyebrow" | "title" | "description" | "actions"
>) {
  return (
    <div className="mx-auto flex w-full max-w-[920px] flex-col items-center text-center">
      <span className="inline-flex rounded-full bg-primary-50 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-primary-700">
        {badge}
      </span>
      <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
        {eyebrow}
      </p>
      <h1 className="mt-4 max-w-[900px] text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mx-auto mt-5 max-w-[700px] text-sm leading-7 text-gray-500 sm:mt-6 sm:text-base">
        {description}
      </p>
      {actions}
    </div>
  );
}

export function AudienceHeroSection({
  badge,
  eyebrow,
  title,
  description,
  actions,
}: Pick<
  AudiencePageProps,
  "badge" | "eyebrow" | "title" | "description" | "actions"
>) {
  return (
    <section className="flex min-h-[460px] items-center px-5 py-14 sm:h-[490px] sm:min-h-0 sm:px-8 sm:py-16 lg:h-[504px] lg:px-12 lg:py-20">
      <div className="mx-auto w-full max-w-[1120px]">
        <AudienceHero
          badge={badge}
          eyebrow={eyebrow}
          title={title}
          description={description}
          actions={actions}
        />
      </div>
    </section>
  );
}

export function AudiencePage({
  locale,
  mode,
  badge,
  eyebrow,
  title,
  description,
  actions,
  children,
}: AudiencePageProps) {
  return (
    <div className="min-h-screen bg-white text-primary-900">
      <SiteHeader locale={locale} active={mode} />
      <main>
        <AudienceHeroSection
          badge={badge}
          eyebrow={eyebrow}
          title={title}
          description={description}
          actions={actions}
        />
        <div className="px-5 pb-14 sm:px-8 sm:pb-20 lg:px-12">
          <div className="mx-auto max-w-[1120px]">{children}</div>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

export function AudienceFeatureCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-[#fafafd] p-7 sm:p-9">
      <span className="text-[10px] font-medium text-blue-700">{number}</span>
      <h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-gray-500">{description}</p>
    </article>
  );
}
