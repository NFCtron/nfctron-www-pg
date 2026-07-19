import { notFound } from "next/navigation";
import { locales, type Locale } from "./config";

export type LocaleParams = Promise<{ locale: string }>;

export async function getRouteLocale(params: LocaleParams): Promise<Locale> {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return locale as Locale;
}

export function localizedPath(locale: Locale, path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (path === "/") return `/${locale}`;
  if (path.startsWith("/#")) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
}
