import HeroBanner from "@/sections/herobanner";

export default function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <div className="home-container">
      <HeroBanner />
    </div>
  );
}
