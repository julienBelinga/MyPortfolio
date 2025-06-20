import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { fallbackLng, languages } from "./app/i18n/settings";

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  // Check if the pathname starts with /public/locales
  if (pathname.startsWith("/locales/")) {
    return NextResponse.next();
  }

  // Check if the pathname already includes a locale
  const pathnameIsMissingLocale = languages.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = fallbackLng;

    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(
      new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api) and PDF files
    "/((?!api|_next/static|_next/image|assets|favicon.ico|.*\\.pdf$).*)",
    // Optional: only run on root (/) URL
    "/",
  ],
};
