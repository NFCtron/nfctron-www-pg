import type { Locale } from "@/i18n/config";
import type { ArtistSocialLink } from "./types";
import PlatformIcon from "./PlatformIcon";

export default function ArtistSocialLinks({
  artistName,
  links,
  locale,
}: {
  artistName: string;
  links: ArtistSocialLink[];
  locale: Locale;
}) {
  return (
    <section data-testid="artist-social-links" className="px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
      <div className="mx-auto grid max-w-[1120px] gap-7 md:grid-cols-[minmax(250px,0.68fr)_minmax(0,1.32fr)] md:items-center md:gap-12">
        <div className="max-w-md">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
            {artistName} online
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
            {locale === "cs"
              ? "Poslouchejte. Sledujte. Buďte u toho."
              : "Listen. Follow. Be part of it."}
          </h2>
        </div>

        <nav
          aria-label={locale === "cs" ? `Sítě ${artistName}` : `${artistName} online`}
          className="grid grid-cols-1 gap-2 min-[390px]:grid-cols-2 sm:flex sm:flex-wrap md:justify-end"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${artistName} – ${link.label}`}
              className="group inline-flex min-h-11 min-w-0 items-center gap-3 rounded-full bg-[#f5f5f8] px-3.5 text-[11px] font-medium text-primary-700 transition duration-200 hover:-translate-y-0.5 hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 sm:px-4"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-primary-700 shadow-sm transition group-hover:scale-105">
                <PlatformIcon platform={link.platform} />
              </span>
              <span className="min-w-0 flex-1 truncate">{link.label}</span>
              <span aria-hidden="true" className="shrink-0 text-gray-400 transition group-hover:text-primary-700">
                ↗
              </span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
