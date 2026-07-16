"use client";

import { COOKIE_CONSENT_EVENT } from "./consent";

export default function CookieSettingsButton({
  label,
  className = "transition hover:text-primary-700",
}: {
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT))}
      className={className}
    >
      {label}
    </button>
  );
}
