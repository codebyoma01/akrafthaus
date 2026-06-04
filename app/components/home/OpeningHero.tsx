"use client";

import Image from "next/image";
import Link from "next/link";
import TextLink from "./TextLink";
import { HERO_IMAGE } from "./hero-images";

export default function OpeningHero() {
  return (
    <section className="home-opening" aria-label="Welcome to Akrafthaus">
      <div className="home-opening__media">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          sizes="100vw"
          quality={90}
          style={{
            objectFit: "cover",
            objectPosition: HERO_IMAGE.objectPosition,
          }}
        />
      </div>

      <div className="home-opening__veil" aria-hidden />

      <div className="home-opening__inner">
        <p className="home-caption home-caption--light"></p>
        <h1 className="display-xl home-opening__title">
        Where Luxury <em>Meets
        Creativity</em>
        </h1>
        <p className="home-opening__lede">
        Akrafthaus is a luxury lifestyle destination where hospitality, creativity, 
        and innovation come together to inspire, connect, and elevate every experience.
        </p>
        <div className="home-opening__actions">
          <Link href="/contact" className="btn-primary">
            Reserve
          </Link>
          <TextLink href="/rooms">View rooms</TextLink>
        </div>
      </div>

      <div className="home-opening__scroll" aria-hidden>
        <span />
        Scroll
      </div>
    </section>
  );
}