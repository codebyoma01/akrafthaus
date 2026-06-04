import HomePhoto from "./HomePhoto";

export default function FounderStory() {
  return (
    <section
      className="home-section home-section--alt home-founder"
      aria-labelledby="home-founder-title"
    >
      <div className="home-founder">
        <div className="home-founder__media">
          <HomePhoto
            src="/about2.jpg"
            alt=""
            fill
            sizes="(max-width: 960px) 100vw, 45vw"
          />
        </div>

        <div className="home-founder__content">
          <h2 id="home-founder-title" className="display-lg home-founder__title">
            Why Akrafthaus Exists
          </h2>

          <div className="home-founder__body">
            <p>Akrafthaus did not begin as a hotel project.</p>

            <p>It began with a simple question:</p>

            <p className="home-founder__question">
              Why should people have to leave a neighbourhood to find good
              workspaces, good food, creative communities, and comfortable places
              to stay?
            </p>

            <p>
              What started as one idea gradually became several. A restaurant.
              Rooms. Spaces for artists. Places for conversations. A home for
              people passing through Abuja and for people building something here.
            </p>

            <p>
              Today, Akrafthaus is less a hotel and more a gathering place. Some
              guests arrive for a night. Others return every week. Many stay longer
              than they planned.
            </p>

            <p>That was never part of a business strategy.</p>

            <p className="home-founder__closing">
              It was simply the result of building a place people wanted to come
              back to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
