import { languages } from "../i18n/settings";
import { Metadata } from "next";
import "@styles/main.scss";
import Navbar from "@components/navbar";
import I18nProvider from "../i18n/i18n-provider";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: "Julien Belinga - Portfolio",
  description: "Portfolio de Julien Belinga, développeur web freelance Nantais",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <body>
        <I18nProvider>
          <Navbar />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
