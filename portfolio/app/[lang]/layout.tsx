import { languages } from "../i18n/settings";
import { Metadata } from "next";
import "@styles/main.scss";
import Navbar from "@components/navbar";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: "Julien Belinga - Portfolio",
  description: "Portfolio de Julien Belinga, développeur web freelance",
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
