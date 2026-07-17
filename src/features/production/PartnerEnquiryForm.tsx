"use client";

import type { FormEvent } from "react";
import type { Locale } from "@/i18n/config";

const content = {
  cs: {
    company: "Společnost",
    companyPlaceholder: "Název společnosti",
    service: "Specializace",
    servicePlaceholder: "Např. stage, technika, infrastruktura",
    reference: "Reference nebo web",
    referencePlaceholder: "https://",
    contact: "Kontaktní osoba",
    contactPlaceholder: "Jméno a příjmení",
    email: "E-mail",
    phone: "Telefon",
    note: "Krátce o vašich kapacitách",
    notePlaceholder: "Co dodáváte, pro jak velké akce a kde působíte?",
    submit: "Chci se stát partnerem",
    legal: "Po odeslání se otevře váš e-mail s připravenou žádostí.",
    subject: "Žádost o zařazení do partnerské sítě NFCtron",
  },
  en: {
    company: "Company",
    companyPlaceholder: "Company name",
    service: "Specialization",
    servicePlaceholder: "E.g. stage, technology, infrastructure",
    reference: "References or website",
    referencePlaceholder: "https://",
    contact: "Contact person",
    contactPlaceholder: "Full name",
    email: "Email",
    phone: "Phone",
    note: "Tell us about your capacity",
    notePlaceholder: "What do you supply, for what event size and in which regions?",
    submit: "Become a partner",
    legal: "Your email app will open with a structured request ready to send.",
    subject: "NFCtron partner network application",
  },
} as const;

export default function PartnerEnquiryForm({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const label = "block text-[10px] font-medium text-gray-500";
  const input = "mt-2 block h-11 w-full rounded-xl border border-gray-200 bg-white px-3.5 text-xs text-primary-900 outline-none transition placeholder:text-gray-300 focus:border-primary-300 focus:ring-2 focus:ring-primary-100";

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `${copy.company}: ${data.get("company")}`,
      `${copy.service}: ${data.get("service")}`,
      `${copy.reference}: ${data.get("reference")}`,
      `${copy.contact}: ${data.get("contact")}`,
      `${copy.email}: ${data.get("email")}`,
      `${copy.phone}: ${data.get("phone")}`,
      `${copy.note}: ${data.get("note")}`,
    ].join("\n");
    window.location.href = `mailto:production@nfctron.com?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
      <label className={label}>{copy.company}<input className={input} name="company" required placeholder={copy.companyPlaceholder} /></label>
      <label className={label}>{copy.service}<input className={input} name="service" required placeholder={copy.servicePlaceholder} /></label>
      <label className={label}>{copy.reference}<input className={input} name="reference" type="url" required placeholder={copy.referencePlaceholder} /></label>
      <label className={label}>{copy.contact}<input className={input} name="contact" required autoComplete="name" placeholder={copy.contactPlaceholder} /></label>
      <label className={label}>{copy.email}<input className={input} name="email" type="email" required autoComplete="email" /></label>
      <label className={label}>{copy.phone}<input className={input} name="phone" type="tel" required autoComplete="tel" /></label>
      <label className={`${label} sm:col-span-2`}>{copy.note}<textarea className={`${input} h-24 resize-none py-3`} name="note" required placeholder={copy.notePlaceholder} /></label>
      <div className="flex flex-col items-start gap-4 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-[9px] leading-4 text-gray-400">{copy.legal}</p>
        <button className="inline-flex h-10 items-center gap-5 rounded-full bg-primary-700 px-5 text-[11px] font-medium text-white transition hover:bg-primary-900" type="submit">
          {copy.submit}<span aria-hidden>→</span>
        </button>
      </div>
    </form>
  );
}
