import type { ReactNode } from "react";

type PageHeroProps = {
  image: string;
  imageAlt: string;
  label?: string;
  title: ReactNode;
  subtitle?: string;
};

export default function PageHero({
  image,
  imageAlt,
  label,
  title,
  subtitle,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <img src={image} alt={imageAlt} className="page-hero__media" />
      <div className="page-hero__veil" aria-hidden />
      <div className="page-hero__content">
        {label ? <p className="kicker-light">{label}</p> : null}
        <h1 className="display-xl" style={{ color: "#fff", marginTop: label ? 12 : 0 }}>
          {title}
        </h1>
        {subtitle ? (
          <p
            className="body-lg"
            style={{
              color: "rgba(255,255,255,0.62)",
              maxWidth: "440px",
              marginTop: 16,
            }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
