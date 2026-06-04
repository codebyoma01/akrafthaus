import HomePhoto from "./HomePhoto";
import TextLink from "./TextLink";

export default function RoomsFeature() {
  return (
    <section className="home-rooms" aria-labelledby="home-rooms-title">
      <div className="home-rooms__frame">
        <HomePhoto
          src="/akraft-room.jpg"
          alt="Guest room at Akrafthaus"
          fill
          sizes="100vw"
        />
        <div className="home-rooms__veil" aria-hidden />
        <div className="home-rooms__content">
          <p className="home-caption home-caption--light">Stay</p>
          <h2 id="home-rooms-title" className="display-lg">
            Eighteen rooms. Each a little different.
          </h2>
          <p className="home-rooms__note">
            From ₦50,000 per night · breakfast on weekdays
          </p>
          <TextLink href="/rooms">View rooms</TextLink>
        </div>
      </div>
    </section>
  );
}
