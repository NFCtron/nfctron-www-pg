import Link from "next/link";
import type { ReactNode } from "react";

type ActionLinkVariant = "primary" | "secondary";

export default function ActionLink({
  href,
  children,
  variant = "primary",
  arrow = false,
}: {
  href: string;
  children: ReactNode;
  variant?: ActionLinkVariant;
  arrow?: boolean;
}) {
  const className =
    variant === "primary"
      ? "inline-flex h-9 items-center gap-5 rounded-full bg-primary-700 px-5 text-[11px] font-medium text-white transition hover:bg-primary-900"
      : "inline-flex h-9 items-center gap-5 rounded-full border border-gray-200 bg-white px-5 text-[11px] font-medium text-primary-700 transition hover:bg-primary-50";

  const content = (
    <>
      {children}
      {arrow ? <span aria-hidden="true">→</span> : null}
    </>
  );

  return href.startsWith("/") ? (
    <Link href={href} className={className}>
      {content}
    </Link>
  ) : (
    <a href={href} className={className}>
      {content}
    </a>
  );
}
