"use client";

import type { FormEvent } from "react";
import type { Locale } from "@/i18n/config";

const copy = {
  cs: {
    eventName: "Název akce",
    eventNamePlaceholder: "Např. Letní festival 2027",
    company: "Společnost / pořadatel",
    companyPlaceholder: "Název společnosti nebo pořadatele",
    artist: "Interpret",
    artistPlaceholder: "Vyberte interpreta",
    date: "Termín",
    place: "Město a místo",
    placePlaceholder: "Např. Praha · Výstaviště",
    type: "Typ akce",
    typePlaceholder: "Vyberte typ akce",
    capacity: "Předpokládaná kapacita",
    capacityPlaceholder: "Např. 2 500",
    email: "Kontaktní e-mail",
    phone: "Telefon",
    phonePlaceholder: "+420 123 456 789",
    send: "Pokračovat k odeslání",
    note: "Všechna pole jsou povinná. Po odeslání se otevře váš e-mail s připravenou poptávkou.",
    eventTypes: [
      "Festival",
      "Městská slavnost",
      "Klub",
      "Firemní event",
      "Jiná akce",
    ],
    subject: "Bookingová poptávka",
  },
  en: {
    eventName: "Event name",
    eventNamePlaceholder: "E.g. Summer Festival 2027",
    company: "Company / organizer",
    companyPlaceholder: "Company or organizer name",
    artist: "Artist",
    artistPlaceholder: "Choose an artist",
    date: "Date",
    place: "City and venue",
    placePlaceholder: "E.g. Prague · Exhibition Grounds",
    type: "Event type",
    typePlaceholder: "Choose an event type",
    capacity: "Expected capacity",
    capacityPlaceholder: "E.g. 2,500",
    email: "Contact email",
    phone: "Phone",
    phonePlaceholder: "+420 123 456 789",
    send: "Continue to send",
    note: "All fields are required. Your email app will open with a structured enquiry ready to send.",
    eventTypes: [
      "Festival",
      "City celebration",
      "Club",
      "Corporate event",
      "Other event",
    ],
    subject: "Booking enquiry",
  },
} as const;

function SelectChevron() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="pointer-events-none absolute bottom-[15px] right-4 h-3.5 w-3.5 text-primary-900"
    >
      <path
        d="m4 6 4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

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

export default function BookingEnquiryForm({ locale }: { locale: Locale }) {
  const content = copy[locale];
  const labelClass = "block min-w-0 text-[10px] font-medium text-gray-500";
  const inputClass =
    "mt-2 block h-11 min-w-0 w-full max-w-full rounded-xl border border-gray-200 bg-white px-3.5 text-xs text-primary-900 outline-none transition placeholder:text-gray-300 focus:border-primary-300 focus:ring-2 focus:ring-primary-100";

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lines = [
      `${content.eventName}: ${form.get("eventName")}`,
      `${content.company}: ${form.get("company")}`,
      `${content.artist}: ${form.get("artist")}`,
      `${content.date}: ${form.get("date")}`,
      `${content.place}: ${form.get("place")}`,
      `${content.type}: ${form.get("eventType")}`,
      `${content.capacity}: ${form.get("capacity")}`,
      `${content.email}: ${form.get("email")}`,
      `${content.phone}: ${form.get("phone")}`,
    ];
    window.location.href = `mailto:booking@nfctron.com?subject=${encodeURIComponent(content.subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  };

  return (
    <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
      <label className={`${labelClass} sm:col-span-2`}>
        {content.eventName}
        <input
          name="eventName"
          required
          placeholder={content.eventNamePlaceholder}
          className={inputClass}
        />
      </label>

      <label className={labelClass}>
        {content.company}
        <input
          name="company"
          autoComplete="organization"
          required
          placeholder={content.companyPlaceholder}
          className={inputClass}
        />
      </label>

      <label className={`relative ${labelClass}`}>
        {content.artist}
        <select
          name="artist"
          required
          defaultValue=""
          className={`${inputClass} appearance-none pr-10`}
        >
          <option value="" disabled>
            {content.artistPlaceholder}
          </option>
          <option>Sebastian</option>
          <option>Elizabeth Kopecká</option>
          <option>Like-IT</option>
        </select>
        <SelectChevron />
      </label>

      <label className={`relative ${labelClass}`}>
        {content.date}
        <input
          name="date"
          type="date"
          required
          className={`${inputClass} appearance-none [&::-webkit-date-and-time-value]:min-h-5 [&::-webkit-date-and-time-value]:text-left`}
          style={{ minWidth: 0, width: "100%", WebkitAppearance: "none" }}
        />
      </label>

      <label className={labelClass}>
        {content.place}
        <input
          name="place"
          required
          placeholder={content.placePlaceholder}
          className={inputClass}
        />
      </label>

      <label className={`relative ${labelClass}`}>
        {content.type}
        <select
          name="eventType"
          required
          defaultValue=""
          className={`${inputClass} appearance-none pr-10`}
        >
          <option value="" disabled>
            {content.typePlaceholder}
          </option>
          {content.eventTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
        <SelectChevron />
      </label>

      <label className={labelClass}>
        {content.capacity}
        <input
          name="capacity"
          type="number"
          min="1"
          required
          placeholder={content.capacityPlaceholder}
          className={inputClass}
        />
      </label>

      <label className={labelClass}>
        {content.phone}
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          placeholder={content.phonePlaceholder}
          className={inputClass}
        />
      </label>

      <label className={`${labelClass} sm:col-span-2`}>
        {content.email}
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          className={inputClass}
        />
      </label>

      <div className="mt-2 flex flex-col items-start gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-[9px] leading-4 text-gray-400">
          {content.note}
        </p>
        <button
          type="submit"
          className="inline-flex h-10 items-center gap-5 rounded-full bg-primary-700 px-5 text-[11px] font-medium text-white transition hover:bg-primary-900"
        >
          {content.send} <ArrowRight />
        </button>
      </div>
    </form>
  );
}
