"use client";

import type { FormEvent } from "react";
import type { Locale } from "@/i18n/config";

const formCopy = {
  cs: {
    event: "Název akce",
    eventPlaceholder: "Např. Letní festival 2027",
    company: "Společnost / pořadatel",
    companyPlaceholder: "Název společnosti nebo pořadatele",
    date: "Termín akce",
    datePlaceholder: "Např. 16.–18. července 2027",
    place: "Město a místo",
    placePlaceholder: "Např. Praha · Výstaviště",
    attendance: "Očekávaná návštěvnost",
    attendancePlaceholder: "Např. 10 000",
    solution: "Co potřebujete řešit",
    solutionPlaceholder: "Vyberte rozsah řešení",
    solutions: [
      "Celý ekosystém NFCtron",
      "Ticketing a vstup",
      "Platby na akci",
      "NFCtron Hub a data",
    ],
    phone: "Telefon",
    phonePlaceholder: "+420 123 456 789",
    email: "Kontaktní e-mail",
    note: "Všechna pole jsou povinná. Po odeslání se otevře váš e-mail s připravenou poptávkou.",
    submit: "Poptat řešení",
    subject: "Poptávka řešení pro akci",
  },
  en: {
    event: "Event name",
    eventPlaceholder: "E.g. Summer Festival 2027",
    company: "Company / organizer",
    companyPlaceholder: "Company or organizer name",
    date: "Event date",
    datePlaceholder: "E.g. 16–18 July 2027",
    place: "City and venue",
    placePlaceholder: "E.g. Prague · Exhibition Grounds",
    attendance: "Expected attendance",
    attendancePlaceholder: "E.g. 10,000",
    solution: "What do you need",
    solutionPlaceholder: "Choose the scope",
    solutions: [
      "Complete NFCtron ecosystem",
      "Ticketing and entry",
      "Event payments",
      "NFCtron Hub and data",
    ],
    phone: "Phone",
    phonePlaceholder: "+420 123 456 789",
    email: "Contact email",
    note: "All fields are required. Your email app will open with a structured enquiry ready to send.",
    submit: "Request a solution",
    subject: "Event solution enquiry",
  },
} as const;

function ArrowRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5">
      <path
        d="M2.5 8h10M9 4.5 12.5 8 9 11.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export default function OrganizerEnquiryForm({ locale }: { locale: Locale }) {
  const copy = formCopy[locale];
  const labelClass = "block min-w-0 text-[10px] font-medium text-gray-500";
  const inputClass =
    "mt-2 block h-11 min-w-0 w-full rounded-xl border border-gray-200 bg-white px-3.5 text-xs text-primary-900 outline-none transition placeholder:text-gray-300 focus:border-primary-300 focus:ring-2 focus:ring-primary-100";

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lines = [
      `${copy.event}: ${form.get("eventName")}`,
      `${copy.company}: ${form.get("company")}`,
      `${copy.date}: ${form.get("date")}`,
      `${copy.place}: ${form.get("place")}`,
      `${copy.attendance}: ${form.get("attendance")}`,
      `${copy.solution}: ${form.get("solution")}`,
      `${copy.phone}: ${form.get("phone")}`,
      `${copy.email}: ${form.get("email")}`,
    ];

    window.location.href = `mailto:sales@nfctron.com?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  };

  return (
    <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
      <label className={`${labelClass} sm:col-span-2`}>
        {copy.event}
        <input
          name="eventName"
          required
          placeholder={copy.eventPlaceholder}
          className={inputClass}
        />
      </label>
      <label className={labelClass}>
        {copy.company}
        <input
          name="company"
          required
          autoComplete="organization"
          placeholder={copy.companyPlaceholder}
          className={inputClass}
        />
      </label>
      <label className={labelClass}>
        {copy.date}
        <input
          name="date"
          required
          inputMode="text"
          placeholder={copy.datePlaceholder}
          className={inputClass}
        />
      </label>
      <label className={labelClass}>
        {copy.place}
        <input
          name="place"
          required
          placeholder={copy.placePlaceholder}
          className={inputClass}
        />
      </label>
      <label className={labelClass}>
        {copy.attendance}
        <input
          name="attendance"
          required
          inputMode="numeric"
          placeholder={copy.attendancePlaceholder}
          className={inputClass}
        />
      </label>
      <label className={`${labelClass} sm:col-span-2`}>
        {copy.solution}
        <select
          name="solution"
          required
          defaultValue=""
          className={`${inputClass} appearance-none`}
        >
          <option value="" disabled>
            {copy.solutionPlaceholder}
          </option>
          {copy.solutions.map((solution) => (
            <option key={solution}>{solution}</option>
          ))}
        </select>
      </label>
      <label className={labelClass}>
        {copy.phone}
        <input
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder={copy.phonePlaceholder}
          className={inputClass}
        />
      </label>
      <label className={labelClass}>
        {copy.email}
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </label>
      <div className="mt-2 flex flex-col items-start gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-[9px] leading-4 text-gray-400">
          {copy.note}
        </p>
        <button
          type="submit"
          className="inline-flex h-10 items-center gap-5 rounded-full bg-primary-700 px-5 text-[11px] font-medium text-white transition hover:bg-primary-900"
        >
          {copy.submit} <ArrowRight />
        </button>
      </div>
    </form>
  );
}
