import Image from "next/image";
import Link from "next/link";
import LanguageMenu from "./LanguageMenu";
import { translate, type Locale } from "@/i18n/config";

type SiteMode = "home" | "organizers" | "retailers" | "artists";

interface SiteHeaderProps {
  locale: Locale;
  active?: SiteMode;
}

const MODES: Array<{ id: SiteMode; label: string; href: string }> = [
  { id: "home", label: "Návštěvníci", href: "/" },
  { id: "organizers", label: "Pořadatelé", href: "/for-organizers" },
  { id: "retailers", label: "Prodejci", href: "/for-retailers" },
  { id: "artists", label: "Interpreti", href: "/for-artists" },
];

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

function DesktopModeSwitcher({
  active,
  t,
}: {
  active: SiteMode;
  t: (value: string) => string;
}) {
  return (
    <div
      className="hidden h-8 items-center rounded-full bg-gray-100 p-0.5 sm:flex"
      aria-label={t("Zobrazení webu")}
    >
      {MODES.map((mode) => (
        <Link
          key={mode.id}
          href={mode.href}
          aria-current={active === mode.id ? "page" : undefined}
          className={`flex h-7 items-center whitespace-nowrap rounded-full px-3 text-[10px] font-medium leading-none transition ${active === mode.id ? "bg-white text-primary-700 shadow-sm" : "text-gray-500 hover:text-primary-700"}`}
        >
          {t(mode.label)}
        </Link>
      ))}
    </div>
  );
}

function MobileModeSwitcher({
  active,
  t,
}: {
  active: SiteMode;
  t: (value: string) => string;
}) {
  const activeMode = MODES.find((mode) => mode.id === active) ?? MODES[0];

  return (
    <details className="relative sm:hidden">
      <summary className="flex h-7 cursor-pointer list-none items-center gap-1 rounded-full bg-gray-100 px-2 text-[8px] font-medium leading-none text-gray-600 [&::-webkit-details-marker]:hidden">
        {t(activeMode.label)}{" "}
        <span className="text-[8px] text-gray-400">⌄</span>
      </summary>
      <div className="absolute right-0 top-9 z-50 min-w-32 rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg shadow-primary-900/5">
        {MODES.map((mode) => (
          <Link
            key={mode.id}
            href={mode.href}
            className={`block rounded-lg px-3 py-2 text-[10px] ${active === mode.id ? "bg-primary-50 font-medium text-primary-700" : "text-gray-600 hover:bg-gray-50"}`}
          >
            {t(mode.label)}
          </Link>
        ))}
      </div>
    </details>
  );
}

export default function SiteHeader({
  locale,
  active = "home",
}: SiteHeaderProps) {
  const t = (value: string) => translate(locale, value);
  const onHome = active === "home";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur-md">
      <nav
        className="container-fluid flex h-16 items-center justify-between gap-3 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:gap-5"
        aria-label={t("Hlavní navigace")}
      >
        <div className="flex min-w-0 shrink-0 items-center sm:justify-self-start">
          <Link href="/" aria-label="NFCtron domů" className="shrink-0">
            <Image
              src="/nfctron-logo-dark.svg"
              alt="NFCtron"
              width={86}
              height={16}
              priority
            />
          </Link>
        </div>

        <DesktopModeSwitcher active={active} t={t} />

        <div className="flex shrink-0 items-center gap-0.5 sm:justify-self-end sm:gap-1">
          <MobileModeSwitcher active={active} t={t} />
          <LanguageMenu locale={locale} />
          <Link
            href={onHome ? "#support" : "/#support"}
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
    </header>
  );
}
