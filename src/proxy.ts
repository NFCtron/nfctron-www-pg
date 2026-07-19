import { NextRequest, NextResponse } from "next/server";
import { resolveLocale } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = resolveLocale(
    request.cookies.get("nfctron-locale")?.value ??
      request.headers.get("accept-language"),
  );
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/",
    "/cards",
    "/for-artists/:path*",
    "/for-organizers",
    "/for-retailers",
    "/music",
    "/production",
  ],
};
