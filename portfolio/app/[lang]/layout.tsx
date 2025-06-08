import { languages } from "../i18n/settings";
import { Metadata } from "next";
import "@styles/main.scss";
import Navbar from "@components/navbar";
import I18nProvider from "../i18n/i18n-provider";
import Footer from "@components/footer";

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
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
