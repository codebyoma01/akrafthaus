import HomePhoto from "./HomePhoto";

export default function PhotoInterlude() {
  return (
    <figure className="home-interlude">
      <div className="home-interlude__image-wrap">
        <HomePhoto
          src="/akraft-restaurant.jpg"
          alt=""
          fill
          sizes="100vw"
        />
      </div>
      <figcaption className="home-interlude__caption">
        Restaurant · Friday evening
      </figcaption>
    </figure>
  );
}
