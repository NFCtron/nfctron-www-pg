"use client";

import ErrorPage from "@/features/errors/ErrorPage";
import { getErrorCopy } from "@/features/errors/copy";
import type { Locale } from "@/i18n/config";

export default function NotFound() {
  const locale: Locale =
    typeof document !== "undefined" && document.documentElement.lang === "cs"
      ? "cs"
      : "en";
  return <ErrorPage code="404" locale={locale} content={getErrorCopy(locale, "notFound")} />;
}
