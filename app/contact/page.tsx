"use client";

import { useState } from "react";
import PageHero from "../components/PageHero";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <PageHero
        image="/akraft-reception.jpg"
        imageAlt="Akrafthaus reception"
        label="Contact"
        title="Reach the front desk"
        subtitle="Reservations, studio hire, franchise questions — one team answers during business hours."
      />

      <section className="section section-white">
        <div className="wrap contact-layout">
          <div className="contact-details">
            <p className="kicker">Direct lines</p>
            <ul className="contact-list body-lg">
              <li>
                <span>Phone / WhatsApp</span>
                <a href="tel:+2347033869555">+234 703 386 9555</a>
              </li>
              <li>
                <span>Email</span>
                <a href="mailto:hello@akrafthaus.ng">hello@akrafthaus.ng</a>
              </li>
              <li>
                <span>Address</span>
                <p>Akrafthaus, Kubwa, Abuja, Nigeria</p>
              </li>
              <li>
                <span>Hours</span>
                <p>Front desk 8:00 – 22:00 daily</p>
              </li>
            </ul>
          </div>

          <div>
            {submitted ? (
              <p className="body-lg">Thank you. We will reply within one business day.</p>
            ) : (
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <p className="kicker">Send a message</p>
                <input className="contact-input" placeholder="Name" required />
                <input className="contact-input" type="email" placeholder="Email" required />
                <input className="contact-input" type="tel" placeholder="Phone" />
                <select className="contact-input" defaultValue="booking" aria-label="Subject">
                  <option value="booking">Room booking</option>
                  <option value="studio">Studio / co-working</option>
                  <option value="franchise">Franchise</option>
                  <option value="other">Other</option>
                </select>
                <textarea className="contact-input" rows={5} placeholder="Your message" required />
                <button type="submit" className="btn-primary">
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: clamp(40px, 8vw, 96px);
          align-items: start;
        }
        .contact-list {
          list-style: none;
          margin: 24px 0 0;
          padding: 0;
        }
        .contact-list li {
          margin-bottom: 24px;
        }
        .contact-list span {
          display: block;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 6px;
        }
        .contact-list a {
          color: var(--brown);
          text-decoration: none;
        }
        .contact-list a:hover {
          color: var(--primary);
        }
        .contact-list p {
          margin: 0;
          color: var(--muted);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .contact-input {
          width: 100%;
          padding: 13px 14px;
          border: 1px solid var(--border);
          background: var(--cream);
          font-family: var(--sans);
          font-size: 14px;
          color: var(--brown);
        }
        .contact-input:focus {
          border-color: var(--primary);
          outline: none;
        }
        @media (max-width: 800px) {
          .contact-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
