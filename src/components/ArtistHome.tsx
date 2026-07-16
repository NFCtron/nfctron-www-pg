import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { AudienceHero } from "./audience/AudiencePage";
import ActionLink from "./ui/ActionLink";
import ArtistRoster from "@/features/artists/home/ArtistRoster";
import BookingEnquiryForm from "@/features/artists/home/BookingEnquiryForm";
import { getArtistHomeContent } from "@/features/artists/home/content";
import type { Locale } from "@/i18n/config";

export default function ArtistHome({ locale }: { locale: Locale }) {
  const content = getArtistHomeContent(locale);

  return (
    <div className="min-h-screen bg-white text-primary-900">
      <SiteHeader locale={locale} active="artists" />
      <main>
        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[1120px]">
            <AudienceHero
              badge="NFCtron Artists"
              eyebrow={content.heroEyebrow}
              title={content.heroTitle}
              description={content.heroDescription}
              actions={
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <ActionLink href="#pro-interprety" arrow>
                    {content.artistAction}
                  </ActionLink>
                  <ActionLink href="#pro-poradatele" variant="secondary">
                    {content.organizerAction}
                  </ActionLink>
                </div>
              }
            />
          </div>
        </section>

        <ArtistRoster locale={locale} content={content} />

        <section
          id="pro-interprety"
          className="scroll-mt-20 px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
        >
          <div className="mx-auto max-w-[1120px]">
            <div className="grid items-end gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                  {content.artistEyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                  {content.artistTitle}
                </h2>
              </div>
              <div>
                <p className="max-w-xl text-sm leading-7 text-gray-500">
                  {content.artistDescription}
                </p>
                <div className="mt-6">
                  <ActionLink href="#booking" arrow>
                    {content.collaborate}
                  </ActionLink>
                </div>
              </div>
            </div>

            <div className="mt-10 grid border-y border-gray-200 sm:grid-cols-2 lg:grid-cols-3">
              {content.flow.map(([number, title, description]) => (
                <article
                  key={number}
                  className="border-b border-gray-200 px-1 py-6 sm:px-6 lg:py-8 lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n)]:pr-0"
                >
                  <span className="text-[9px] font-medium text-blue-700">
                    {number}
                  </span>
                  <h3 className="mt-5 text-base font-semibold tracking-[-0.025em]">
                    {title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-5 text-gray-500">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f8fb] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {content.processingEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                {content.processingTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-500">
                {content.processingDescription}
              </p>
            </div>

            <div className="mt-10 grid overflow-hidden rounded-[28px] border border-gray-200 bg-white lg:grid-cols-2 lg:divide-x lg:divide-gray-200">
              {content.processing.map((area, areaIndex) => (
                <article
                  key={area.label}
                  className="border-b border-gray-200 p-7 last:border-b-0 sm:p-9 lg:border-b-0 lg:p-10"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-700">
                      {area.label}
                    </p>
                    <span className="text-[10px] text-gray-300">
                      0{areaIndex + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 max-w-md text-2xl font-semibold leading-tight tracking-[-0.04em]">
                    {area.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500">
                    {area.description}
                  </p>
                  <ul className="mt-7 grid gap-3 border-t border-gray-100 pt-6 sm:grid-cols-2">
                    {area.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-[11px] leading-5 text-primary-900"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-600"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pro-poradatele"
          className="scroll-mt-20 bg-primary-900 px-5 py-14 text-white sm:px-8 sm:py-20 lg:px-12"
        >
          <div className="mx-auto max-w-[1120px]">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  {content.organizerEyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                  {content.organizerTitle}
                </h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
                  {content.organizerDescription}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {content.formats.map((format) => (
                    <span
                      key={format}
                      className="rounded-full border border-white/15 px-3 py-1.5 text-[9px] text-white/70"
                    >
                      {format}
                    </span>
                  ))}
                </div>
                <div className="mt-7">
                  <ActionLink href="#booking" variant="secondary" arrow>
                    {content.enquire}
                  </ActionLink>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {content.organizerSteps.map(([number, title, description]) => (
                  <article
                    key={number}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6"
                  >
                    <span className="text-[9px] font-medium text-white/40">
                      {number}
                    </span>
                    <h3 className="mt-8 text-base font-semibold tracking-[-0.025em]">
                      {title}
                    </h3>
                    <p className="mt-3 text-[11px] leading-5 text-white/55">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="booking"
          className="scroll-mt-20 px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
        >
          <div className="mx-auto grid max-w-[1120px] gap-9 rounded-[28px] bg-[#f8f8fb] p-7 sm:p-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:p-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {content.bookingEyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                {content.bookingTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-500">
                {content.bookingDescription}
              </p>
            </div>
            <BookingEnquiryForm locale={locale} />
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
