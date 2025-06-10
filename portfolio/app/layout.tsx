import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { headers } from "next/headers";
import { generateMetadata as generateBaseMetadata } from "@/config/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "";
  const lang = pathname.startsWith("/fr") ? "fr" : "en";
  const host = headersList.get("host") || "julien-belinga.fr";
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  return {
    ...generateBaseMetadata(lang as "fr" | "en"),
    metadataBase: new URL(`${protocol}://${host}`),
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
