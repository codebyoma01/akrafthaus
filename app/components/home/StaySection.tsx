import Link from "next/link";
import Image from "next/image";

export default function StaySection() {
  return (
    <section
      className="home-stay-section"
      aria-labelledby="home-stay-title"
    >
      {/* Photographic background */}
      <div className="home-stay__media" aria-hidden>
        <Image
          src="/akraft-room.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={85}
          style={{ objectFit: "cover", objectPosition: "center 55%" }}
        />
      </div>

      {/* Layered overlay — warm at bottom, lighter at top */}
      <div className="home-stay__veil" aria-hidden />

      {/* Content */}
      <div className="home-stay__inner">
        <p className="home-caption home-caption--light">Kubwa · Abuja</p>

        <h2 id="home-stay-title" className="home-stay__headline">
          Stay.<br />
          <em>Create.</em><br />
          Belong.
        </h2>

        <p className="home-stay__lede">
          A place to stay, work, meet and build ideas<br className="home-stay__br" />
          in Kubwa, Abuja.
        </p>

        <div className="home-stay__actions">
          <Link href="/contact" className="btn-primary home-stay__btn-primary">
            Reserve a Room
          </Link>
          <Link href="/about" className="home-stay__btn-ghost">
            Explore Spaces
          </Link>
        </div>
      </div>
    </section>
  );
}