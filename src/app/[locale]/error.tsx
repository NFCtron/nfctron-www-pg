"use client";

import { useEffect } from "react";
import ErrorPage from "@/features/errors/ErrorPage";
import { getErrorCopy } from "@/features/errors/copy";
import type { Locale } from "@/i18n/config";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const locale: Locale = typeof document !== "undefined" && document.documentElement.lang === "cs" ? "cs" : "en";

  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorPage code="500" locale={locale} content={getErrorCopy(locale, "serverError")} onRetry={reset} />;
}
