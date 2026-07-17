"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";

const copy = {
  cs: {
    eyebrow: "NFCtron Hi-Res Store",
    title: "Světový zvuk. Navždy váš.",
    description:
      "Kupte si nahrávku přímo od interpreta v plné kvalitě. Bez komprese streamovacích služeb a bez prostředníků.",
    release: "Nové album · předobjednávka",
    format: "Hi-Res master · WAV + FLAC",
    ownership: "Soubor zůstává vám",
    add: "Přidat do košíku",
    added: "V košíku",
    cart: "Košík",
    item: "Elizabeth Kopecká · nové album",
    checkout: "Pokračovat k objednávce",
    note: "Platba a stažení budou dostupné po vydání alba.",
  },
  en: {
    eyebrow: "NFCtron Hi-Res Store",
    title: "World-class sound. Yours forever.",
    description:
      "Buy the recording directly from the artist in full quality. No streaming compression and no middlemen.",
    release: "New album · pre-order",
    format: "Hi-Res master · WAV + FLAC",
    ownership: "The files stay yours",
    add: "Add to cart",
    added: "In cart",
    cart: "Cart",
    item: "Elizabeth Kopecká · new album",
    checkout: "Continue to order",
    note: "Payment and download will become available when the album is released.",
  },
} as const;

export default function MusicPurchase({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [inCart, setInCart] = useState(false);

  return (
    <section id="music-store" className="bg-[#f4f5ff] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto grid max-w-[1120px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="max-w-lg">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.04] tracking-[-0.05em] sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-500">{t.description}</p>
        </div>

        <div className="rounded-[26px] bg-white p-6 shadow-[0_22px_65px_rgba(8,11,63,0.08)] sm:p-8">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-blue-700">
                Elizabeth Kopecká
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{t.release}</h3>
            </div>
            <span aria-hidden="true" className="text-xl">♫</span>
          </div>

          <div className="mt-7 flex flex-wrap gap-2 text-[10px] font-medium text-primary-700">
            <span className="rounded-full bg-primary-50 px-3 py-2">{t.format}</span>
            <span className="rounded-full bg-primary-50 px-3 py-2">{t.ownership}</span>
          </div>

          <button
            type="button"
            onClick={() => setInCart(true)}
            className="mt-7 inline-flex h-10 items-center gap-5 rounded-full bg-primary-700 px-5 text-[11px] font-medium text-white transition hover:bg-primary-800"
          >
            {inCart ? t.added : t.add} <span aria-hidden="true">{inCart ? "✓" : "→"}</span>
          </button>

          {inCart && (
            <div className="mt-6 rounded-2xl bg-[#f8f8fb] p-5" aria-live="polite">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-400">{t.cart}</p>
              <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-primary-900">{t.item}</p>
                  <p className="mt-1 text-[11px] text-gray-500">{t.format}</p>
                </div>
                <a
                  href="mailto:music@nfctron.com?subject=NFCtron%20Hi-Res%20Store%20%E2%80%93%20Elizabeth%20Kopeck%C3%A1"
                  className="inline-flex h-9 shrink-0 items-center justify-center rounded-full bg-white px-4 text-[10px] font-medium text-primary-700 shadow-sm transition hover:bg-primary-50"
                >
                  {t.checkout} →
                </a>
              </div>
              <p className="mt-4 text-[10px] leading-5 text-gray-400">{t.note}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
