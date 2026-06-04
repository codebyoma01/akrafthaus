"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "../components/PageHero";

type Room = {
  id: number;
  name: string;
  type: string;
  price: number;
  size: string;
  guests: number;
  img: string;
  desc: string;
  features: string[];
};

const ROOMS: Room[] = [
  {
    id: 1,
    name: "Kraft Room",
    type: "Standard",
    price: 50000,
    size: "28 m²",
    guests: 2,
    img: "/room-standard.jpg",
    desc: "King bed, blackout curtains, desk by the window. The room we recommend for a short work trip.",
    features: ["King bed", "Wi‑Fi", "Air conditioning", "En-suite"],
  },
  {
    id: 2,
    name: "Wuse",
    type: "Deluxe",
    price: 70000,
    size: "36 m²",
    guests: 2,
    img: "/room-deluxe.jpg",
    desc: "More floor space, rain shower, mini bar with local soft drinks. Often booked by returning guests.",
    features: ["King bed", "Garden view", "Mini bar", "Rain shower"],
  },
  {
    id: 3,
    name: "Maitama Suite",
    type: "Suite",
    price: 85000,
    size: "52 m²",
    guests: 3,
    img: "/room-suite.jpg",
    desc: "Separate sitting area for small meetings. Sofa bed available for a third guest on request.",
    features: ["Sitting area", "King bed", "Mini bar", "Sofa bed"],
  },
  {
    id: 4,
    name: "Founder's Floor",
    type: "Presidential",
    price: 100000,
    size: "90 m²",
    guests: 4,
    img: "/room-presidential.jpg",
    desc: "Two bedrooms, kitchenette, and the quietest corner of the building. Booked for longer stays.",
    features: ["Two bedrooms", "Kitchenette", "Lounge", "Late checkout on request"],
  },
];

const FILTERS = ["All", "Standard", "Deluxe", "Suite", "Presidential"] as const;

function BookingModal({
  room,
  onClose,
}: {
  room: Room;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      className="rooms-modal-overlay"
      role="dialog"
      aria-modal
      aria-labelledby="booking-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="rooms-modal-box">
        <button type="button" className="rooms-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        {!submitted ? (
          <>
            <p className="kicker">Reservation request</p>
            <h2 id="booking-title" className="display-md" style={{ color: "var(--brown)", marginBottom: 8 }}>
              {room.name}
            </h2>
            <p className="body-sm" style={{ marginBottom: 24 }}>
              ₦{room.price.toLocaleString()} per night · {room.size} · up to {room.guests} guests
            </p>
            <form
              className="rooms-modal-form"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <input className="rooms-input" placeholder="Full name" required />
              <input className="rooms-input" type="email" placeholder="Email" required />
              <input className="rooms-input" type="tel" placeholder="Phone" />
              <div className="rooms-modal-row">
                <input className="rooms-input" type="date" aria-label="Check-in" required />
                <input className="rooms-input" type="date" aria-label="Check-out" required />
              </div>
              <textarea className="rooms-input" rows={3} placeholder="Notes" />
              <button type="submit" className="btn-primary">
                Send request
              </button>
            </form>
          </>
        ) : (
          <p className="body-lg">Thank you. We will confirm availability by email or WhatsApp.</p>
        )}
      </div>
    </div>
  );
}

export default function RoomsPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [booking, setBooking] = useState<Room | null>(null);
  const filtered =
    filter === "All" ? ROOMS : ROOMS.filter((r) => r.type === filter);

  return (
    <main>
      <PageHero
        image="/hotel-hero.jpg"
        imageAlt="Guest room at Akrafthaus"
        label="Stay"
        title="Rooms & suites"
        subtitle="Four room types. Named after Abuja districts we know well. Rates include breakfast on weekdays."
      />

      <section className="section section-white">
        <div className="wrap">
          <div className="rooms-filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={`rooms-filter${filter === f ? " is-active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <ul className="rooms-grid">
            {filtered.map((room) => (
              <li key={room.id} className="rooms-card">
                <div className="rooms-card__media">
                  <img src={room.img} alt={room.name} loading="lazy" />
                  <p className="rooms-card__price">
                    ₦{room.price.toLocaleString()}
                    <span>/ night</span>
                  </p>
                </div>
                <div className="rooms-card__body">
                  <p className="kicker">{room.type}</p>
                  <h3 className="display-md" style={{ color: "var(--brown)", fontSize: "1.35rem", margin: "8px 0 12px" }}>
                    {room.name}
                  </h3>
                  <p className="body-sm" style={{ marginBottom: 12 }}>
                    {room.size} · {room.guests} guests max
                  </p>
                  <p className="body-sm" style={{ marginBottom: 16 }}>
                    {room.desc}
                  </p>
                  <ul className="rooms-card__features">
                    {room.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => setBooking(room)}
                  >
                    Request booking
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap rooms-amenities">
          <p className="kicker">Included</p>
          <h2 className="display-md" style={{ color: "var(--brown)", marginBottom: 24 }}>
            What every stay includes
          </h2>
          <ul className="rooms-amenities__list body-lg">
            <li>Daily housekeeping</li>
            <li>High-speed Wi‑Fi</li>
            <li>Secure parking on site</li>
            <li>Restaurant access for guests</li>
            <li>Front desk until 10pm, on-call after</li>
          </ul>
          <Link href="/contact" className="btn-outline-dark" style={{ marginTop: 32 }}>
            Questions before you book
          </Link>
        </div>
      </section>

      {booking ? (
        <BookingModal room={booking} onClose={() => setBooking(null)} />
      ) : null}

      <style jsx global>{`
        .rooms-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 48px;
        }
        .rooms-filter {
          padding: 9px 18px;
          border: 1px solid var(--border);
          background: transparent;
          font-family: var(--sans);
          font-size: 12px;
          color: var(--muted);
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .rooms-filter.is-active,
        .rooms-filter:hover {
          background: var(--primary);
          border-color: var(--primary);
          color: var(--cream);
        }
        .rooms-grid {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(24px, 4vw, 40px);
        }
        .rooms-card {
          border: 1px solid var(--border);
          background: var(--white);
        }
        .rooms-card__media {
          position: relative;
        }
        .rooms-card__media img {
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
        }
        .rooms-card__price {
          position: absolute;
          bottom: 12px;
          left: 12px;
          margin: 0;
          padding: 8px 12px;
          background: rgba(20, 8, 0, 0.72);
          color: #fff;
          font-family: var(--serif);
          font-size: 1.1rem;
        }
        .rooms-card__price span {
          font-family: var(--sans);
          font-size: 10px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          opacity: 0.7;
          margin-left: 4px;
        }
        .rooms-card__body {
          padding: 24px;
        }
        .rooms-card__features {
          list-style: none;
          margin: 0 0 20px;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 8px 16px;
        }
        .rooms-card__features li {
          font-size: 13px;
          color: var(--muted);
        }
        .rooms-card__features li::before {
          content: "— ";
          color: var(--primary);
        }
        .rooms-amenities__list {
          list-style: none;
          margin: 0;
          padding: 0;
          max-width: 36ch;
        }
        .rooms-amenities__list li {
          padding: 8px 0;
          border-bottom: 1px solid var(--border);
        }
        .rooms-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 500;
          background: rgba(20, 8, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }
        .rooms-modal-box {
          background: var(--white);
          width: 100%;
          max-width: 480px;
          max-height: 92dvh;
          overflow-y: auto;
          padding: 36px;
          position: relative;
        }
        .rooms-modal-close {
          position: absolute;
          top: 12px;
          right: 12px;
          border: none;
          background: none;
          font-size: 24px;
          cursor: pointer;
          color: var(--muted);
        }
        .rooms-modal-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .rooms-modal-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .rooms-input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid var(--border);
          background: var(--cream);
          font-family: var(--sans);
          font-size: 14px;
          color: var(--brown);
        }
        .rooms-input:focus {
          border-color: var(--primary);
          outline: none;
        }
        @media (max-width: 800px) {
          .rooms-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 500px) {
          .rooms-modal-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
