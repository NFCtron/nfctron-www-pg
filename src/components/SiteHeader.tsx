"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LanguageMenu from "./LanguageMenu";
import { translate, type Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/routing";

type SiteMode =
  | "home"
  | "company"
  | "organizers"
  | "production"
  | "retailers"
  | "artists"
  | "music"
  | "cards";

interface SiteHeaderProps {
  locale: Locale;
  active?: SiteMode;
}

const MODES: Array<{
  id: SiteMode;
  label: string;
  href: string;
  beta?: boolean;
}> = [
  { id: "home", label: "Návštěvníci", href: "/" },
  { id: "organizers", label: "Pořadatelé", href: "/for-organizers" },
  { id: "retailers", label: "Prodejci", href: "/for-retailers" },
  { id: "artists", label: "Interpreti", href: "/for-artists" },
  { id: "music", label: "Hudba", href: "/music" },
  { id: "cards", label: "NFCtron Card", href: "/cards", beta: true },
  { id: "production", label: "Produkce", href: "/production" },
];

const ORGANIZER_MENU = {
  cs: {
    ariaLabel: "Služby a produkty pro pořadatele",
    back: "Zpět",
    overview: "Přehled pro pořadatele",
    overviewDescription: "Jeden partner pro ticketing, platby a provoz akce.",
    groups: [
      {
        title: "Produkty",
        links: [
          ["Ticketing a vstup", "/for-organizers#ecosystem"],
          ["Platby na akci", "/for-organizers#payments"],
          ["NFCtron Hub", "/for-organizers#ecosystem"],
        ],
      },
      {
        title: "Služby",
        links: [
          ["Provoz na místě", "/for-organizers#operations"],
          ["Prodejci a gastro", "/for-retailers"],
          ["Produkce akce", "/production"],
        ],
      },
      {
        title: "Začít",
        links: [
          ["Poptat řešení", "/for-organizers#contact"],
          ["Jak spolupráce probíhá", "/for-organizers#journey"],
          ["Akce s NFCtron", "/#events"],
        ],
      },
    ],
  },
  en: {
    ariaLabel: "Services and products for organizers",
    back: "Back",
    overview: "For organizers",
    overviewDescription: "One partner for ticketing, payments and event operations.",
    groups: [
      {
        title: "Products",
        links: [
          ["Ticketing and entry", "/for-organizers#ecosystem"],
          ["Event payments", "/for-organizers#payments"],
          ["NFCtron Hub", "/for-organizers#ecosystem"],
        ],
      },
      {
        title: "Services",
        links: [
          ["On-site operations", "/for-organizers#operations"],
          ["Vendors and hospitality", "/for-retailers"],
          ["Event production", "/production"],
        ],
      },
      {
        title: "Get started",
        links: [
          ["Request a solution", "/for-organizers#contact"],
          ["How we work", "/for-organizers#journey"],
          ["Events with NFCtron", "/#events"],
        ],
      },
    ],
  },
} as const;

function SupportIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 13a8 8 0 0 1 16 0" />
      <path d="M4 13v4a2 2 0 0 0 2 2h1v-7H4ZM20 13v4a2 2 0 0 1-2 2h-1v-7h3ZM17 19c0 1.1-.9 2-2 2h-3" />
    </svg>
  );
}

function ChevronDownIcon({ open = false }: { open?: boolean }) {
  return (
    <svg
      className={`h-2.5 w-2.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m3.25 4.75 2.75 2.5 2.75-2.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
    </svg>
  );
}

function DesktopModeSwitcher({
  active,
  t,
  locale,
  organizerOpen,
  onOrganizerOpen,
  onOrganizerClose,
}: {
  active: SiteMode;
  t: (value: string) => string;
  locale: Locale;
  organizerOpen: boolean;
  onOrganizerOpen: () => void;
  onOrganizerClose: () => void;
}) {
  return (
    <div
      className="hidden h-8 items-center rounded-full bg-gray-100 p-0.5 lg:flex"
      aria-label={t("Zobrazení webu")}
    >
      {MODES.map((mode) => (
        <Link
          key={mode.id}
          href={localizedPath(locale, mode.href)}
          aria-current={active === mode.id ? "page" : undefined}
          aria-expanded={mode.id === "organizers" ? organizerOpen : undefined}
          aria-haspopup={mode.id === "organizers" ? "menu" : undefined}
          onMouseEnter={mode.id === "organizers" ? onOrganizerOpen : onOrganizerClose}
          onFocus={mode.id === "organizers" ? onOrganizerOpen : onOrganizerClose}
          className={`flex h-7 items-center whitespace-nowrap rounded-full px-3 text-[10px] font-medium leading-none transition ${mode.id === "organizers" && organizerOpen ? "bg-[#e9e9f6] text-primary-700 shadow-[inset_0_0_0_1px_rgba(31,27,97,0.05)]" : active === mode.id ? "bg-white text-primary-700 shadow-sm" : "text-gray-500 hover:text-primary-700"}`}
        >
          <span>{t(mode.label)}</span>
          {mode.beta ? (
            <span className="ml-1 text-[6px] font-semibold uppercase tracking-[0.08em] text-primary-400">
              Beta
            </span>
          ) : null}
        </Link>
      ))}
    </div>
  );
}

function OrganizerMenuContent({
  locale,
  compact = false,
  onNavigate,
}: {
  locale: Locale;
  compact?: boolean;
  onNavigate?: () => void;
}) {
  const copy = ORGANIZER_MENU[locale];

  return (
    <div className={compact ? "space-y-8" : "grid grid-cols-[1.35fr_repeat(3,1fr)] gap-12"}>
      <div>
        <Link
          href={localizedPath(locale, "/for-organizers")}
          onClick={onNavigate}
          className="group inline-flex items-center gap-3 text-2xl font-semibold tracking-[-0.035em] text-primary-900 transition hover:text-primary-600 sm:text-[28px]"
        >
          {copy.overview}
          <span className="text-primary-400 transition-transform duration-200 group-hover:translate-x-1">
            <ArrowIcon />
          </span>
        </Link>
        <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500">
          {copy.overviewDescription}
        </p>
      </div>

      {copy.groups.map((group) => (
        <div key={group.title}>
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#969bae]">
            {group.title}
          </p>
          <div className="mt-4 space-y-1">
            {group.links.map(([label, href]) => (
              <Link
                key={label}
                href={localizedPath(locale, href)}
                onClick={onNavigate}
                className="group -mx-2 flex min-h-9 items-center justify-between gap-4 rounded-lg px-2 py-2 text-sm font-medium text-primary-900 transition hover:bg-white/80 hover:text-primary-600"
              >
                {label}
                {compact ? (
                  <span className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-primary-400">
                    <ArrowIcon />
                  </span>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function MobileModeSwitcher({
  active,
  t,
  locale,
  open,
  organizerView,
  onToggle,
  onOrganizerView,
  onBack,
  onClose,
}: {
  active: SiteMode;
  t: (value: string) => string;
  locale: Locale;
  open: boolean;
  organizerView: boolean;
  onToggle: () => void;
  onOrganizerView: () => void;
  onBack: () => void;
  onClose: () => void;
}) {
  const activeMode = MODES.find((mode) => mode.id === active) ?? {
    id: "company" as const,
    label: "NFCtron",
    href: "/company-structure",
  };
  const organizerCopy = ORGANIZER_MENU[locale];

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-label={t("Otevřít menu")}
        aria-expanded={open}
        onClick={onToggle}
        className="flex h-7 items-center gap-1.5 whitespace-nowrap rounded-full bg-gray-100 px-2.5 text-[8px] font-medium leading-none text-gray-600"
      >
        <span>{t(activeMode.label)}</span>
        <span className="flex items-center justify-center text-gray-400">
          <ChevronDownIcon open={open} />
        </span>
      </button>

      {open ? (
        <div className={`fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto px-5 pb-12 pt-6 transition-colors sm:px-8 ${organizerView ? "bg-[#f8f8fc]" : "bg-white"}`}>
          <div className="mx-auto max-w-2xl">
            {organizerView ? (
              <>
                <button
                  type="button"
                  onClick={onBack}
                  className="mb-7 inline-flex items-center gap-2 py-2 text-xs font-medium text-gray-500 hover:text-primary-700"
                >
                  <span aria-hidden="true">←</span> {organizerCopy.back}
                </button>
                <OrganizerMenuContent locale={locale} compact onNavigate={onClose} />
              </>
            ) : (
              <div className="space-y-1">
                {MODES.map((mode) =>
                  mode.id === "organizers" ? (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={onOrganizerView}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-4 text-left text-lg font-medium transition ${active === mode.id ? "bg-primary-50 text-primary-700" : "text-primary-900 hover:bg-gray-50"}`}
                    >
                      {t(mode.label)}
                      <ArrowIcon />
                    </button>
                  ) : (
                    <Link
                      key={mode.id}
                      href={localizedPath(locale, mode.href)}
                      onClick={onClose}
                      className={`flex items-center rounded-xl px-4 py-4 text-lg font-medium transition ${active === mode.id ? "bg-primary-50 text-primary-700" : "text-primary-900 hover:bg-gray-50"}`}
                    >
                      <span>{t(mode.label)}</span>
                      {mode.beta ? (
                        <span className="ml-2 text-[8px] font-semibold uppercase tracking-[0.1em] text-primary-400">
                          Beta
                        </span>
                      ) : null}
                    </Link>
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function SiteHeader({
  locale,
  active = "home",
}: SiteHeaderProps) {
  const t = (value: string) => translate(locale, value);
  const onHome = active === "home";
  const [organizerOpen, setOrganizerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOrganizerView, setMobileOrganizerView] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileOrganizerView(false);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOrganizerOpen(false);
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      onMouseLeave={() => setOrganizerOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOrganizerOpen(false);
        }
      }}
      className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur-md"
    >
      <nav
        className="container-fluid relative z-50 flex h-16 items-center justify-between gap-3 bg-white/95 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-5"
        aria-label={t("Hlavní navigace")}
      >
        <div className="flex min-w-0 shrink-0 items-center lg:justify-self-start">
          <Link href={localizedPath(locale, "/")} aria-label="NFCtron domů" className="shrink-0">
            <Image
              src="/nfctron-logo-dark.svg"
              alt="NFCtron"
              width={86}
              height={16}
            />
          </Link>
        </div>

        <DesktopModeSwitcher
          active={active}
          t={t}
          locale={locale}
          organizerOpen={organizerOpen}
          onOrganizerOpen={() => setOrganizerOpen(true)}
          onOrganizerClose={() => setOrganizerOpen(false)}
        />

        <div className="flex shrink-0 items-center gap-0.5 sm:gap-1 lg:justify-self-end">
          <MobileModeSwitcher
            active={active}
            t={t}
            locale={locale}
            open={mobileOpen}
            organizerView={mobileOrganizerView}
            onToggle={() => {
              setMobileOpen((value) => !value);
              setMobileOrganizerView(false);
            }}
            onOrganizerView={() => setMobileOrganizerView(true)}
            onBack={() => setMobileOrganizerView(false)}
            onClose={closeMobileMenu}
          />
          <LanguageMenu locale={locale} />
          <Link
            href={onHome ? "#support" : localizedPath(locale, "/#support")}
            aria-label={t("Přejít na podporu návštěvníků")}
            className="flex h-7 items-center gap-1.5 rounded-full px-2 text-[10px] font-medium leading-none tracking-[0.01em] text-gray-500 transition hover:bg-gray-50 hover:text-primary-700"
          >
            <SupportIcon /> <span className="hidden xl:inline">Support</span>
          </Link>
          <Link
            href="https://tickets.nfctron.com/login"
            className="ml-0.5 inline-flex h-7 items-center whitespace-nowrap rounded-full bg-primary-700 px-3 text-[10px] font-medium leading-none text-white transition hover:bg-primary-900 sm:ml-1"
          >
            {t("Přihlásit se")}
          </Link>
        </div>
      </nav>

      {organizerOpen ? (
        <>
          <button
            type="button"
            aria-label={locale === "cs" ? "Zavřít menu" : "Close menu"}
            onClick={() => setOrganizerOpen(false)}
            className="fixed inset-x-0 bottom-0 top-16 z-30 hidden cursor-default bg-primary-950/10 backdrop-blur-[1px] lg:block"
          />
          <div
            role="menu"
            aria-label={ORGANIZER_MENU[locale].ariaLabel}
            className="mega-menu-reveal absolute inset-x-0 top-full z-40 hidden border-b border-[#e7e7f0] bg-[#f8f8fc] shadow-[0_24px_50px_rgba(17,24,39,0.08)] lg:block"
          >
            <div className="container-fluid py-10 xl:py-12">
              <OrganizerMenuContent locale={locale} onNavigate={() => setOrganizerOpen(false)} />
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
