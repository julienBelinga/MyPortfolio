import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Liste des extensions de fichiers statiques à exclure de la redirection
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Exclure les fichiers statiques (img, css, js, etc.) et les dossiers spéciaux
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/img") ||
    pathname.startsWith("/fonts") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Ici, ta logique de redirection de langue (exemple)
  // Si le chemin ne commence pas par /fr ou /en, on redirige vers /fr par défaut
  if (!pathname.startsWith("/fr") && !pathname.startsWith("/en")) {
    const url = request.nextUrl.clone();
    url.pathname = `/fr${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api) and PDF files
    "/((?!api|_next/static|_next/image|assets|favicon.ico|.*\\.pdf$).*)",
    // Optional: only run on root (/) URL
    "/",
  ],
};
