import HeroBanner from "@/sections/herobanner/herobanner";
import Skills from "@/sections/skills/skills";
import Project from "@/sections/project/project";
import Experience from "@/sections/experience/experience";
import Contact from "@/sections/contact/contact";

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
