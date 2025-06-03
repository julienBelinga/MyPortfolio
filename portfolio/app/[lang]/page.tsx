export default function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <div className="home-container">
      <h1>Hello world</h1>
    </div>
  );
}
