import HomePhoto from "./HomePhoto";
import TextLink from "./TextLink";

const LEAD = {
  src: "/akraft-restaurant.jpg",
  alt: "Restaurant at Akrafthaus",
  caption: "Restaurant · ground floor",
};

const SUPPORTING = [
  { src: "/gallery2.jpg", alt: "Inside Akrafthaus" },
  { src: "/about3.jpg", alt: "Suite at Akrafthaus" },
  { src: "/akraft-bar.jpg", alt: "Bar at Akrafthaus" },
  { src: "/kavkanz-art.webp", alt: "Art in the corridor" },
];

export default function GalleryPreview() {
  return (
    <section
      className="home-section home-section--white home-gallery"
      aria-labelledby="home-gallery-title"
    >
      <div className="home-gallery__wrap">
        <header className="home-gallery__header">
          <p className="home-caption">Gallery</p>
          <h2 id="home-gallery-title" className="display-md home-gallery__title">
            Seen inside the building
          </h2>
        </header>

        <div className="home-gallery__spread">
          <figure className="home-gallery__lead">
            <HomePhoto
              src={LEAD.src}
              alt={LEAD.alt}
              fill
              sizes="(max-width: 960px) 100vw, 65vw"
              priority
            />
            <figcaption>{LEAD.caption}</figcaption>
          </figure>

          <div className="home-gallery__support" role="list">
            {SUPPORTING.map(({ src, alt }) => (
              <figure key={src} className="home-gallery__support-item" role="listitem">
                <HomePhoto src={src} alt={alt} fill sizes="35vw" />
              </figure>
            ))}
          </div>
        </div>

        <footer className="home-gallery__footer">
          <TextLink href="/gallery" variant="dark">
            View Gallery
          </TextLink>
        </footer>
      </div>
    </section>
  );
}