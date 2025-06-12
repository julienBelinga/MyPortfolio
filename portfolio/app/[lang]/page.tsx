import HeroBanner from "@/sections/herobanner/herobanner";
import Skills from "@/sections/skills/skills";
import Project from "@/sections/project/project";
import Experience from "@/sections/experience/experience";
import Contact from "@/sections/contact/contact";
import { Metadata } from "next";
import { generateHomeMetadata } from "@/config/metadata";

interface Props {
  params: {
    lang: "fr" | "en";
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generateHomeMetadata(params.lang);
}

export default function Home({ params: { lang } }: Props) {
  return (
    <div className="home-container">
      <HeroBanner />
      <Project />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
