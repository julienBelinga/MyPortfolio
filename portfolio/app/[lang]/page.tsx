import HeroBanner from "@/sections/herobanner/herobanner";
import Skills from "@/sections/skills/skills";

export default function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <div className="home-container">
      <HeroBanner />
      <Skills />
    </div>
  );
}
