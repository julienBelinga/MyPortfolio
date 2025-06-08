import HeroBanner from "@/sections/herobanner/herobanner";
import Skills from "@/sections/skills/skills";
import Project from "@/sections/project/project";
import Experience from "@/sections/experience/experience";
import Contact from "@/sections/contact/contact";
import { Metadata } from "next";
import { homeMetadata } from "@/config/metadata";

export const metadata: Metadata = homeMetadata;

export default function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
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
