import Link from "next/link";
import PageHero from "../components/PageHero";

const VALUES = [
  {
    num: "01",
    title: "Nigerian art on the walls",
    body: "Common areas display work by Nigerian artists on rotation — not a one-off décor package.",
  },
  {
    num: "02",
    title: "Mixed use from day one",
    body: "Hotel, restaurant, studio, school, and desks were part of the original brief for the building.",
  },
  {
    num: "03",
    title: "Open to the neighbourhood",
    body: "The restaurant takes walk-ins. The studio books by the day. The school runs evening classes.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        image="/about-hero.jpg"
        imageAlt="Akrafthaus interior"
        label="About"
        title="Built in Kubwa for people who stay awhile"
        subtitle="A mixed-use hotel and creative address — opened in 2022, still run by the team who opened it."
      />

      <section className="section section-white">
        <div className="wrap about-story">
          <div>
            <p className="kicker">Our story</p>
            <h2 className="display-lg" style={{ color: "var(--brown)", margin: "16px 0 24px" }}>
              Started in Abuja. Designed for it.
            </h2>
            <p className="body-lg" style={{ marginBottom: 20 }}>
              Akrafthaus opened in Abuja in 2022. The building was planned to serve more than one
              purpose: hotel rooms and apartments for visitors and relocations, a working restaurant,
              a media studio, co-working desks, and a German language school.
            </p>
            <p className="body-lg" style={{ marginBottom: 20 }}>
              Each space has its own manager and hours. Rooms are furnished individually; the
              restaurant serves Nigerian and international food daily; the studio is hired by the day.
            </p>
            <p className="body-lg" style={{ marginBottom: 32 }}>
              Art by Nigerian artists runs through the common areas — acquired over time, not
              chosen from a catalogue for a single refurb.
            </p>
            <Link href="/rooms" className="btn-primary">
              View rooms
            </Link>
          </div>
          <div className="about-story__grid">
            {["/about1.jpg", "/about2.jpg", "/about3.jpg", "/about4.jpg"].map((src) => (
              <img key={src} src={src} alt="" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <p className="kicker">How we work</p>
          <h2 className="display-md" style={{ color: "var(--brown)", margin: "12px 0 48px", maxWidth: "20ch" }}>
            Three commitments we can point to.
          </h2>
          <ul className="about-values">
            {VALUES.map((v) => (
              <li key={v.num}>
                <span className="about-values__num">{v.num}</span>
                <div>
                  <h3 className="serif" style={{ fontSize: "1.2rem", marginBottom: 10, color: "var(--brown)" }}>
                    {v.title}
                  </h3>
                  <p className="body-sm">{v.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap about-mission">
          <img src="/about2.jpg" alt="Dining at Akrafthaus" loading="lazy" />
          <div>
            <p className="kicker">Today</p>
            <h2 className="display-md" style={{ color: "var(--brown)", margin: "12px 0 20px" }}>
              We are still learning what the building wants to be.
            </h2>
            <p className="body-lg" style={{ marginBottom: 16 }}>
              New programmes start when guests ask for them — the language school began after expat
              families kept enquiring at reception. That is how most changes here happen.
            </p>
            <p className="body-lg">
              If you are visiting Abuja for work or family, we aim to be the address you return to
              without renegotiating your routine each time.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap" style={{ maxWidth: "640px" }}>
          <p className="kicker-light">Franchise</p>
          <h2 className="display-md" style={{ color: "#fff", margin: "12px 0 20px" }}>
            Interested in licensing the model?
          </h2>
          <p className="body-lg" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 28 }}>
            We share operational playbooks and brand standards with qualified property owners.
          </p>
          <Link href="/franchise" className="btn-primary">
            Franchise enquiry
          </Link>
        </div>
      </section>

      <style>{`
        .about-story {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 7vw, 96px);
          align-items: start;
        }
        .about-story__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .about-story__grid img {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
        }
        .about-values {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(24px, 4vw, 48px);
        }
        .about-values li {
          border-top: 1px solid var(--border);
          padding-top: 24px;
        }
        .about-values__num {
          display: block;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--primary);
          margin-bottom: 16px;
        }
        .about-mission {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(32px, 6vw, 80px);
          align-items: center;
        }
        .about-mission img {
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
        }
        @media (max-width: 900px) {
          .about-story,
          .about-mission {
            grid-template-columns: 1fr;
          }
          .about-values {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
