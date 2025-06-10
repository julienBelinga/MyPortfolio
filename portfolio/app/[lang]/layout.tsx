import { Metadata } from "next";
import { generateMetadata as generateBaseMetadata } from "@/config/metadata";
import "@styles/main.scss";
import Navbar from "@components/navbar";
import I18nProvider from "../i18n/i18n-provider";
import Footer from "@components/footer";

interface Props {
  children: React.ReactNode;
  params: {
    lang: "fr" | "en";
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generateBaseMetadata(params.lang);
}

export default function Layout({ children, params: { lang } }: Props) {
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
