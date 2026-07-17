import type { ReactNode } from "react";
import type { ArtistSocialLink } from "./types";

const paths: Record<ArtistSocialLink["platform"], ReactNode> = {
  spotify: (
    <>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" fill="currentColor" />
      <path d="M6.8 9.1c3.9-1 8.5-.7 11.5 1.1M7.5 12.2c3.4-.8 7.3-.5 10 1M8.2 15.1c2.8-.6 5.9-.3 8.3.8" fill="none" stroke="white" strokeLinecap="round" strokeWidth="1.5" />
    </>
  ),
  appleMusic: (
    <path d="M17.2 13.2V5.5L9.5 7v8.1a3 3 0 1 0 1.5 2.6V10l4.7-.9v4.6a3 3 0 1 0 1.5-.5Z" fill="currentColor" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.7" cy="6.5" r="1.1" fill="currentColor" />
    </>
  ),
  youtube: (
    <>
      <path d="M21 8.2a3 3 0 0 0-2.1-2.1C17 5.6 12 5.6 12 5.6s-5 0-6.9.5A3 3 0 0 0 3 8.2 31 31 0 0 0 2.6 12c0 1.3.1 2.6.4 3.8a3 3 0 0 0 2.1 2.1c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8Z" fill="currentColor" />
      <path d="m10 15 5-3-5-3v6Z" fill="white" />
    </>
  ),
  tiktok: (
    <path d="M14.2 3h3a5 5 0 0 0 3.3 3.1v3a8.2 8.2 0 0 1-3.3-1v6.4a5.6 5.6 0 1 1-4.8-5.5v3.1a2.6 2.6 0 1 0 1.8 2.4V3Z" fill="currentColor" />
  ),
  facebook: (
    <path d="M13.8 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.7-.1-1.5-.2-2.3-.2-2.3 0-3.9 1.4-3.9 4V10H8.2v3h2.6v8h3Z" fill="currentColor" />
  ),
  website: (
    <>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 12h17M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21M12 3c-2.2 2.4-3.3 5.4-3.3 9S9.8 18.6 12 21" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </>
  ),
};

export default function PlatformIcon({ platform }: { platform: ArtistSocialLink["platform"] }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]" focusable="false">
      {paths[platform]}
    </svg>
  );
}
