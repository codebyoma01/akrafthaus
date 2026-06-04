"use client";

import TextLink from "./TextLink";
import HomePhoto from "./HomePhoto";
import { useReveal } from "../useReveal";

export default function TheAddress() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="home-section home-section--cream reveal"
      aria-labelledby="home-address-title"
    >
      <div className="home-address">
        <div className="home-address__media">
          <HomePhoto
            src="/about1.jpg"
            alt="Akrafthaus lounge and interior"
            fill
            sizes="(max-width: 960px) 100vw, 55vw"
          />
        </div>
        <div className="home-address__content">
          <p className="home-caption">The building</p>
          <h2 id="home-address-title" className="display-lg home-address__headline">
            Opened in Kubwa for people who stay awhile.
          </h2>
          <div className="home-address__body">
            <p>
              In 2022 we opened twelve rooms above a kitchen that refused to close
              early. Walk-ins sat next to guests. Art went on the walls as it was
              acquired, not ordered from a catalogue.
            </p>
            <p>
              The studio, the desks, and the language school arrived the same way —
              someone asked, and we made room. The building still feels like that.
            </p>
          </div>
          <TextLink href="/about" variant="dark">
            Read more
          </TextLink>
        </div>
      </div>
    </section>
  );
}
