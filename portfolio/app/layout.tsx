import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { generateMetadata as generateBaseMetadata } from "@/config/metadata";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "";
  const lang = pathname.startsWith("/fr") ? "fr" : "en";

  return {
    ...generateBaseMetadata(lang as "fr" | "en"),
    metadataBase: new URL("https://julien-belinga.fr"),
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "";
  const lang = pathname.startsWith("/fr") ? "fr" : "en";

  return (
    <html lang={lang}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
