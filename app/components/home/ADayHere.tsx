"use client";

import HomePhoto from "./HomePhoto";
import { useReveal } from "../useReveal";

const MOMENTS = [
  {
    id: "morning",
    label: "Morning",
    image: "/akraft-room.jpg",
    imageAlt: "Guest room at dawn",
    copy:
      "Blackout curtains drawn, linen still cool. The corridor is quiet until eight.",
    large: true,
  },
  {
    id: "midday",
    label: "Midday",
    image: "/akraft-restaurant.jpg",
    imageAlt: "Restaurant at lunch",
    copy:
      "Plates arrive without ceremony. You do not need a room key to sit down.",
    large: false,
    reverse: true,
  },
  {
    id: "evening",
    label: "Evening",
    image: "/akraft-bar.jpg",
    imageAlt: "Bar in the evening",
    copy:
      "On Fridays the bar runs late. Upstairs, someone is still at a desk.",
    large: true,
  },
] as const;

export default function ADayHere() {
  const introRef = useReveal<HTMLDivElement>();

  return (
    <section className="home-section home-section--cream" aria-labelledby="home-day-title">
      <div ref={introRef} className="home-day__intro reveal">
        <p className="home-caption">A day here</p>
        <h2 id="home-day-title" className="display-lg">
          Morning to night, in one building.
        </h2>
      </div>

      <ol className="home-day__chapters">
        {MOMENTS.map((moment) => (
          <DayChapter key={moment.id} moment={moment} />
        ))}
      </ol>
    </section>
  );
}

function DayChapter({
  moment,
}: {
  moment: (typeof MOMENTS)[number];
}) {
  const ref = useReveal<HTMLLIElement>();
  const classes = [
    "home-day__chapter",
    "reveal",
    moment.large && "home-day__chapter--large",
    "reverse" in moment && moment.reverse && "home-day__chapter--reverse",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <li ref={ref} className={classes}>
      <div className="home-day__media">
        <HomePhoto
          src={moment.image}
          alt={moment.imageAlt}
          fill
          sizes="(max-width: 960px) 100vw, 1240px"
        />
        <span className="home-day__label">{moment.label}</span>
      </div>
      <p className="home-day__copy">{moment.copy}</p>
    </li>
  );
}
