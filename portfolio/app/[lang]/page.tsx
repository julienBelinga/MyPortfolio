import { Metadata } from "next";
import { languages } from "../i18n/settings";
import HomeContent from "@components/home-content";

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

export default function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return <HomeContent />;
}
