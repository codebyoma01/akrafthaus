const DISCIPLINES = [
  "Hospitality",
  "Art",
  "Media",
  "Technology",
  "Language",
] as const;

export default function InsideAkrafthaus() {
  return (
    <section
      className="home-section home-section--cream home-section--tight-top home-inside"
      aria-labelledby="home-inside-title"
    >
      <div className="home-inside__inner">
        <h2 id="home-inside-title" className="home-inside__heading">
          Inside Akrafthaus
        </h2>
        <ul className="home-inside__list" role="list">
          {DISCIPLINES.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
