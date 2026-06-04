"use client";

import { useState } from "react";
import PageHero from "../components/PageHero";

const STEPS = [
  {
    title: "Initial conversation",
    body: "We review your property footprint, city, and timeline. No commitment at this stage.",
  },
  {
    title: "Site visit & feasibility",
    body: "Our Abuja team visits (or reviews detailed plans) and shares a fit assessment.",
  },
  {
    title: "License & build-out",
    body: "Brand standards, supplier introductions, and pre-opening training for your core team.",
  },
  {
    title: "Opening support",
    body: "On-site advisors for launch week, then quarterly operational reviews.",
  },
];

export default function FranchisePage() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <PageHero
        image="/franchise-hero.jpg"
        imageAlt="Akrafthaus franchise"
        label="Franchise"
        title="Bring Akrafthaus to your city"
        subtitle="A licensed mixed-use hospitality model. We are speaking with property owners in Lagos, Port Harcourt, and select cities outside Nigeria."
      />

      <section className="section section-white">
        <div className="wrap franchise-intro">
          <div>
            <p className="kicker">The model</p>
            <h2 className="display-lg" style={{ color: "var(--brown)", marginBottom: 20 }}>
              One building, several revenue lines.
            </h2>
            <p className="body-lg" style={{ marginBottom: 16 }}>
              Each franchise operates hotel rooms, F&B, and optional studio or desk space under
              one brand. You run the asset; we provide playbooks, design guidance, and supplier
              relationships tested in Kubwa.
            </p>
            <p className="body-lg">
              Minimum property requirements apply. We share performance data from Abuja with
              serious enquiries only.
            </p>
          </div>
          <img src="/about3.jpg" alt="Akrafthaus interior" className="franchise-intro__img" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <p className="kicker">Process</p>
          <h2 className="display-md" style={{ color: "var(--brown)", marginBottom: 40 }}>
            How a partnership starts
          </h2>
          <ol className="franchise-steps">
            {STEPS.map((step, i) => (
              <li key={step.title}>
                <span className="franchise-steps__num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="serif" style={{ fontSize: "1.25rem", marginBottom: 8, color: "var(--brown)" }}>
                    {step.title}
                  </h3>
                  <p className="body-sm">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact-franchise" className="section section-white">
        <div className="wrap franchise-form-wrap">
          <div>
            <p className="kicker">Enquiry</p>
            <h2 className="display-md" style={{ color: "var(--brown)", marginBottom: 16 }}>
              Request the information pack
            </h2>
            <p className="body-lg" style={{ maxWidth: "40ch" }}>
              Tell us about your property and city. We respond within five business days.
            </p>
          </div>

          {sent ? (
            <p className="body-lg">Thank you. We will be in touch.</p>
          ) : (
            <form
              className="franchise-form"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input className="franchise-input" placeholder="Full name" required />
              <input className="franchise-input" type="email" placeholder="Email" required />
              <input className="franchise-input" placeholder="City / country" required />
              <textarea
                className="franchise-input"
                rows={5}
                placeholder="Property size, timeline, or questions"
                required
              />
              <button type="submit" className="btn-primary">
                Send enquiry
              </button>
            </form>
          )}
        </div>
      </section>

      <style jsx global>{`
        .franchise-intro {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 7vw, 88px);
          align-items: center;
        }
        .franchise-intro__img {
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
        }
        .franchise-steps {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 32px;
        }
        .franchise-steps li {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 24px;
          align-items: start;
          padding-bottom: 32px;
          border-bottom: 1px solid var(--border);
        }
        .franchise-steps__num {
          font-family: var(--serif);
          font-size: 1.5rem;
          color: var(--primary);
        }
        .franchise-form-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px, 6vw, 80px);
          align-items: start;
        }
        .franchise-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .franchise-input {
          width: 100%;
          padding: 13px 14px;
          border: 1px solid var(--border);
          background: var(--cream);
          font-family: var(--sans);
          font-size: 14px;
          color: var(--brown);
        }
        .franchise-input:focus {
          border-color: var(--primary);
          outline: none;
        }
        @media (max-width: 900px) {
          .franchise-intro,
          .franchise-form-wrap {
            grid-template-columns: 1fr;
          }
          .franchise-intro__img {
            aspect-ratio: 16 / 10;
          }
        }
      `}</style>
    </main>
  );
}
