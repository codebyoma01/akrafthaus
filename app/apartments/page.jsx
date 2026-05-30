"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --cream:      #F5F0E8;
      --charcoal:   #1C1A17;
      --charcoal2:  #2A2520;
      --warm-gold:  #C9A96E;
      --warm-brown: #8B6B47;
      --sand:       #F0EAE0;
      --text-muted: #7A6E64;
    }

    html { scroll-behavior: smooth; }
    body {
      background: var(--sand);
      color: var(--charcoal);
      font-family: 'DM Sans', sans-serif;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }
    .serif { font-family: 'Playfair Display', Georgia, serif; }

    .eyebrow {
      font-size: 10px; letter-spacing: 0.28em;
      text-transform: uppercase; color: var(--warm-brown); font-weight: 400;
    }

    /* ── NAVBAR ── */
    .navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 200;
      height: 72px; padding: 0 48px;
      display: flex; align-items: center; justify-content: space-between; gap: 24px;
      background: transparent;
      transition: background 0.35s ease, box-shadow 0.35s ease, height 0.35s ease;
    }
    .navbar.scrolled {
      background: rgba(255,255,255,0.97);
      box-shadow: 0 1px 0 rgba(139,107,71,0.12);
      height: 64px;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    .nav-links-list { display: flex; gap: 28px; list-style: none; align-items: center; }

    .hamburger {
      display: none; flex-direction: column; gap: 5px;
      cursor: pointer; background: none; border: none; padding: 4px;
    }
    .hamburger span {
      display: block; width: 22px; height: 1.5px;
      background: var(--charcoal); transition: all 0.3s ease; transform-origin: center;
    }
    .hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
    .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    .hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

    .mobile-menu {
      position: fixed; top: 0; left: 0; right: 0; z-index: 199;
      background: #fff; padding: 90px 32px 40px;
      display: flex; flex-direction: column;
      box-shadow: 0 8px 32px rgba(0,0,0,0.08);
    }
    .mobile-menu a {
      display: block; padding: 16px 0; font-size: 17px;
      color: var(--charcoal); text-decoration: none;
      border-bottom: 1px solid rgba(139,107,71,0.1);
      font-weight: 400; transition: color 0.2s;
    }
    .mobile-menu a:hover { color: var(--warm-brown); }
    .mobile-menu .mobile-cta {
      margin-top: 28px; border-bottom: none;
      display: inline-flex; align-items: center; justify-content: center; gap: 10px;
      padding: 15px 32px; background: var(--warm-brown); color: #fff;
      font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 500;
    }

    /* ── UNIT CARD ── */
    .unit-card {
      background: #fff;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid rgba(139,107,71,0.08);
      transition: box-shadow 0.3s ease, transform 0.3s ease;
      cursor: pointer;
    }
    .unit-card:hover {
      box-shadow: 0 12px 40px rgba(139,107,71,0.12);
      transform: translateY(-4px);
    }
    .unit-card-img {
      width: 100%; height: 240px; object-fit: cover; display: block;
      transition: transform 0.7s ease;
    }
    .unit-card:hover .unit-card-img { transform: scale(1.04); }
    .unit-card-img-wrap { overflow: hidden; position: relative; }

    .badge {
      position: absolute; top: 16px; left: 16px;
      padding: 5px 12px; font-size: 9px; letter-spacing: 0.16em;
      text-transform: uppercase; font-weight: 500; border-radius: 2px;
    }
    .badge-available { background: var(--warm-brown); color: #fff; }
    .badge-booked { background: rgba(28,26,23,0.65); color: rgba(245,240,232,0.8); }

    .unit-card-body { padding: 24px; }

    .amenity-tag {
      display: inline-flex; align-items: center; gap: 5px;
      padding: 5px 10px; background: var(--sand);
      border-radius: 20px; font-size: 11px; color: var(--text-muted);
    }

    .filter-btn {
      padding: 9px 20px; border-radius: 20px; border: 1px solid rgba(139,107,71,0.2);
      background: transparent; font-size: 12px; color: var(--text-muted);
      cursor: pointer; font-family: 'DM Sans', sans-serif;
      transition: all 0.2s; white-space: nowrap;
    }
    .filter-btn.active, .filter-btn:hover {
      background: var(--warm-brown); color: #fff; border-color: var(--warm-brown);
    }

    .book-btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      width: 100%; padding: 13px 24px;
      background: var(--warm-brown); color: #fff;
      font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
      font-weight: 500; border: none; cursor: pointer;
      font-family: 'DM Sans', sans-serif; border-radius: 4px;
      transition: opacity 0.2s; text-decoration: none;
    }
    .book-btn:hover { opacity: 0.85; }
    .book-btn-outline {
      background: transparent; border: 1px solid var(--warm-brown);
      color: var(--warm-brown);
    }
    .book-btn-outline:hover { background: var(--warm-brown); color: #fff; opacity: 1; }

    /* ── MODAL ── */
    .modal-overlay {
      position: fixed; inset: 0; z-index: 500;
      background: rgba(14,10,6,0.7);
      display: flex; align-items: center; justify-content: center;
      padding: 24px;
      backdrop-filter: blur(4px);
    }
    .modal-box {
      background: #fff; border-radius: 10px;
      max-width: 560px; width: 100%;
      max-height: 90vh; overflow-y: auto;
      padding: 40px;
      position: relative;
    }
    .modal-close {
      position: absolute; top: 16px; right: 16px;
      background: none; border: none; cursor: pointer;
      color: var(--text-muted); font-size: 20px; line-height: 1;
      width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;
      border-radius: 50%; transition: background 0.2s;
    }
    .modal-close:hover { background: var(--sand); }

    .form-group { margin-bottom: 18px; }
    .form-label {
      display: block; font-size: 11px; letter-spacing: 0.08em;
      text-transform: uppercase; color: var(--charcoal); font-weight: 500;
      margin-bottom: 8px;
    }
    .form-input {
      width: 100%; padding: 12px 16px;
      border: 1px solid rgba(139,107,71,0.2); border-radius: 4px;
      font-size: 14px; color: var(--charcoal);
      font-family: 'DM Sans', sans-serif;
      background: var(--sand);
      transition: border-color 0.2s; outline: none;
    }
    .form-input:focus { border-color: var(--warm-brown); }

    /* ── RESPONSIVE ── */
    @media (max-width: 768px) {
      .navbar { padding: 0 20px; }
      .nav-links-list { display: none; }
      .nav-book-btn { display: none; }
      .hamburger { display: flex; }
      .apartments-grid { grid-template-columns: 1fr !important; }
      .hero-apt { padding: 0 24px !important; }
      .filters-row { flex-wrap: wrap; }
    }
    @media (max-width: 480px) {
      .modal-box { padding: 28px 20px; }
    }
  `}</style>
);

const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
const NAV_LINKS = ["Apartments", "Hotel", "Creative Studio", "Restaurant", "Tech Hub", "Gallery"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navClass = ["navbar", scrolled ? "scrolled" : "", menuOpen ? "menu-open" : ""].filter(Boolean).join(" ");

  return (
    <>
      <motion.nav
        className={navClass}
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: scrolled ? undefined : "rgba(255,255,255,0.97)", boxShadow: "0 1px 0 rgba(139,107,71,0.12)" }}
      >
        <div style={{ flexShrink: 0 }}>
          <Link href="/">
            <img src="/logo.png" alt="AKRAFTHAUS" style={{ height: "40px", width: "auto", objectFit: "contain" }} />
          </Link>
        </div>

        <ul className="nav-links-list">
          {NAV_LINKS.map(l => (
            <li key={l}>
              <Link
                href={l === "Apartments" ? "/apartments" : `/${l.toLowerCase().replace(" ", "-")}`}
                style={{
                  color: l === "Apartments" ? "var(--charcoal)" : "var(--text-muted)",
                  fontSize: "13px", fontWeight: l === "Apartments" ? 500 : 400,
                  letterSpacing: "0.02em", textDecoration: "none", paddingBottom: "4px",
                  borderBottom: l === "Apartments" ? "1.5px solid var(--warm-gold)" : "1.5px solid transparent",
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >{l}</Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#contact"
          className="nav-book-btn"
          style={{
            flexShrink: 0, padding: "10px 24px", background: "var(--warm-brown)",
            color: "#fff", fontSize: "12px", letterSpacing: "0.06em",
            textDecoration: "none", fontWeight: 500, borderRadius: "6px",
          }}
        >Book Now</Link>

        <button
          className={"hamburger" + (menuOpen ? " open" : "")}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV_LINKS.map(l => (
              <Link key={l} href={l === "Apartments" ? "/apartments" : `/${l.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMenuOpen(false)}>{l}</Link>
            ))}
            <Link href="/#contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>
              Book Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─────────────────────────────────────────────
   DATA — 8 APARTMENT UNITS
───────────────────────────────────────────── */
const UNITS = [
  {
    id: 1,
    name: "The Signature Suite",
    type: "Suite",
    beds: 2, baths: 2, sqft: 980,
    price: 85000,
    available: true,
    img: "/apt-1.jpg",
    description: "A refined two-bedroom suite with floor-to-ceiling windows, a private balcony, and bespoke furnishings that set the tone for luxurious living.",
    amenities: ["Balcony", "King Bed", "Smart TV", "Mini Bar", "Kitchenette"],
  },
  {
    id: 2,
    name: "The Loft Apartment",
    type: "Loft",
    beds: 1, baths: 1, sqft: 620,
    price: 55000,
    available: true,
    img: "/apt-2.jpg",
    description: "An open-plan loft with soaring ceilings, exposed brick accents, and an artist's eye for detail. Perfect for the creative professional.",
    amenities: ["High Ceilings", "Open Plan", "Smart TV", "Work Desk", "Kitchenette"],
  },
  {
    id: 3,
    name: "The Garden Terrace",
    type: "Terrace",
    beds: 3, baths: 2, sqft: 1200,
    price: 120000,
    available: false,
    img: "/apt-3.jpg",
    description: "A spacious three-bedroom unit with a private garden terrace, ideal for families or those who love outdoor living in a serene setting.",
    amenities: ["Private Garden", "3 Bedrooms", "Smart TV", "Full Kitchen", "Parking"],
  },
  {
    id: 4,
    name: "The Executive Studio",
    type: "Studio",
    beds: 1, baths: 1, sqft: 420,
    price: 38000,
    available: true,
    img: "/apt-4.jpg",
    description: "A compact yet elegantly designed studio unit with premium finishes, ideal for solo travellers or short corporate stays.",
    amenities: ["Queen Bed", "Smart TV", "Work Desk", "Mini Fridge", "Fast WiFi"],
  },
  {
    id: 5,
    name: "The Penthouse",
    type: "Penthouse",
    beds: 4, baths: 3, sqft: 1800,
    price: 250000,
    available: true,
    img: "/apt-5.jpg",
    description: "The crown jewel of Akrafthaus. A sprawling penthouse with panoramic views, a private rooftop deck, and curated luxury at every turn.",
    amenities: ["Rooftop Deck", "4 Bedrooms", "Butler Service", "Full Kitchen", "Jacuzzi"],
  },
  {
    id: 6,
    name: "The Classic Room",
    type: "Room",
    beds: 1, baths: 1, sqft: 350,
    price: 28000,
    available: true,
    img: "/apt-6.jpg",
    description: "A timeless and comfortable room with warm interiors, premium bedding, and access to all Akrafthaus shared amenities.",
    amenities: ["Queen Bed", "Smart TV", "Mini Bar", "Fast WiFi", "Room Service"],
  },
  {
    id: 7,
    name: "The Deluxe Suite",
    type: "Suite",
    beds: 2, baths: 2, sqft: 850,
    price: 72000,
    available: false,
    img: "/apt-7.jpg",
    description: "A generously sized deluxe suite with a separate living area, walk-in wardrobe, and a luxurious en-suite bathroom with soaking tub.",
    amenities: ["Soaking Tub", "Living Area", "Smart TV", "Walk-in Wardrobe", "Kitchenette"],
  },
  {
    id: 8,
    name: "The Creative Flat",
    type: "Loft",
    beds: 2, baths: 1, sqft: 710,
    price: 62000,
    available: true,
    img: "/apt-8.jpg",
    description: "Designed for the modern creative, this flat features a dedicated studio workspace, curated art pieces, and an inspired atmosphere throughout.",
    amenities: ["Studio Space", "Art Pieces", "Smart TV", "Work Desk", "Fast WiFi"],
  },
];

const FILTERS = ["All", "Studio", "Room", "Loft", "Suite", "Terrace", "Penthouse"];

/* ─────────────────────────────────────────────
   BOOKING MODAL
───────────────────────────────────────────── */
function BookingModal({ unit, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", checkin: "", checkout: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        className="modal-box"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <button className="modal-close" onClick={onClose}>✕</button>

        {!submitted ? (
          <>
            <p className="eyebrow" style={{ marginBottom: "8px" }}>Book Your Stay</p>
            <h3 className="serif" style={{ fontSize: "24px", fontWeight: 500, color: "var(--charcoal)", marginBottom: "6px" }}>{unit.name}</h3>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "28px" }}>
              ₦{unit.price.toLocaleString()} / night · {unit.beds} bed{unit.beds > 1 ? "s" : ""} · {unit.baths} bath{unit.baths > 1 ? "s" : ""}
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input className="form-input" required placeholder="Your name"
                    value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input className="form-input" required placeholder="+234..."
                    value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" required placeholder="your@email.com"
                  value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div className="form-group">
                  <label className="form-label">Check-in</label>
                  <input className="form-input" type="date" required
                    value={form.checkin} onChange={e => setForm(f => ({ ...f, checkin: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label">Check-out</label>
                  <input className="form-input" type="date" required
                    value={form.checkout} onChange={e => setForm(f => ({ ...f, checkout: e.target.value }))} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Message (optional)</label>
                <textarea className="form-input" rows={3} placeholder="Any special requests..."
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ resize: "vertical" }} />
              </div>
              <button type="submit" className="book-btn" style={{ marginTop: "8px" }}>
                Send Booking Request
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </form>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: "40px", marginBottom: "16px" }}>✦</div>
            <h3 className="serif" style={{ fontSize: "26px", fontWeight: 500, color: "var(--charcoal)", marginBottom: "12px" }}>Request Received!</h3>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "28px" }}>
              Thank you, {form.name}. We've received your booking request for <strong>{unit.name}</strong> and will get back to you within 24 hours.
            </p>
            <button className="book-btn" onClick={onClose}>Close</button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   UNIT CARD
───────────────────────────────────────────── */
function UnitCard({ unit, index, onBook }) {
  const [ref, visible] = useInView(0.08);
  return (
    <motion.div
      ref={ref}
      className="unit-card"
      initial={{ opacity: 0, y: 28 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1 }}
    >
      <div className="unit-card-img-wrap">
        <img src={unit.img} alt={unit.name} className="unit-card-img" />
        <span className={`badge ${unit.available ? "badge-available" : "badge-booked"}`}>
          {unit.available ? "Available" : "Booked"}
        </span>
      </div>

      <div className="unit-card-body">
        {/* Type tag + price */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
          <span style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--warm-brown)", fontWeight: 400 }}>{unit.type}</span>
          <span className="serif" style={{ fontSize: "18px", fontWeight: 500, color: "var(--charcoal)" }}>
            ₦{unit.price.toLocaleString()}<span style={{ fontSize: "11px", color: "var(--text-muted)", fontFamily: "'DM Sans',sans-serif", fontWeight: 400 }}>/night</span>
          </span>
        </div>

        {/* Name */}
        <h3 className="serif" style={{ fontSize: "20px", fontWeight: 500, color: "var(--charcoal)", marginBottom: "8px", lineHeight: 1.2 }}>{unit.name}</h3>

        {/* Quick stats */}
        <div style={{ display: "flex", gap: "16px", marginBottom: "14px" }}>
          {[
            { icon: "🛏", label: `${unit.beds} Bed${unit.beds > 1 ? "s" : ""}` },
            { icon: "🚿", label: `${unit.baths} Bath${unit.baths > 1 ? "s" : ""}` },
            { icon: "📐", label: `${unit.sqft} sqft` },
          ].map(({ icon, label }) => (
            <span key={label} style={{ fontSize: "12px", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
              {icon} {label}
            </span>
          ))}
        </div>

        {/* Description */}
        <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "16px" }}>
          {unit.description}
        </p>

        {/* Amenity tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
          {unit.amenities.map(a => (
            <span key={a} className="amenity-tag">{a}</span>
          ))}
        </div>

        {/* CTA */}
        <button
          className={`book-btn ${!unit.available ? "book-btn-outline" : ""}`}
          onClick={() => unit.available && onBook(unit)}
          disabled={!unit.available}
          style={{ opacity: unit.available ? 1 : 0.6, cursor: unit.available ? "pointer" : "not-allowed" }}
        >
          {unit.available ? "Book This Unit" : "Currently Unavailable"}
        </button>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function ApartmentsHero() {
  return (
    <section style={{
      position: "relative", width: "100%", height: "420px",
      overflow: "hidden", display: "flex", alignItems: "center",
    }}>
      <img src="/apt-hero.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,10,5,0.78) 0%, rgba(15,10,5,0.4) 70%, rgba(15,10,5,0.15) 100%)" }} />
      <div className="hero-apt" style={{ position: "relative", zIndex: 2, padding: "0 72px", paddingTop: "72px" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}
        >
          <span style={{ width: "28px", height: "1px", background: "var(--warm-gold)" }} />
          <span style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--warm-gold)", fontWeight: 400 }}>
            Kubwa, Abuja · Nigeria
          </span>
        </motion.div>
        <motion.h1
          className="serif"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1.08, fontWeight: 500, color: "var(--cream)", marginBottom: "16px", letterSpacing: "-0.02em" }}
        >
          Luxury Apartments
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          style={{ fontSize: "15px", color: "rgba(245,240,232,0.72)", maxWidth: "420px", lineHeight: 1.75, fontWeight: 300 }}
        >
          From intimate studios to sprawling penthouses — every unit at Akrafthaus is designed to elevate the way you live.
        </motion.p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function ApartmentsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [bookingUnit, setBookingUnit] = useState(null);

  const filtered = activeFilter === "All"
    ? UNITS
    : UNITS.filter(u => u.type === activeFilter);

  return (
    <>
      <FontLoader />
      <Navbar />
      <ApartmentsHero />

      {/* Filters + listing */}
      <section style={{ background: "var(--sand)", padding: "64px 64px 100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: "40px" }}
          >
            <p className="eyebrow" style={{ marginBottom: "10px" }}>Our Units</p>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
              <h2 className="serif" style={{ fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 500, color: "var(--charcoal)", lineHeight: 1.1 }}>
                Find Your Perfect Space
              </h2>
              <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                {filtered.length} unit{filtered.length !== 1 ? "s" : ""} available
              </span>
            </div>
          </motion.div>

          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="filters-row"
            style={{ display: "flex", gap: "10px", marginBottom: "44px", overflowX: "auto", paddingBottom: "4px" }}
          >
            {FILTERS.map(f => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? "active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >{f}</button>
            ))}
          </motion.div>

          {/* Grid */}
          <div
            className="apartments-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}
          >
            {filtered.map((unit, i) => (
              <UnitCard key={unit.id} unit={unit} index={i} onBook={setBookingUnit} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0", color: "var(--text-muted)" }}>
              <p className="serif" style={{ fontSize: "22px", marginBottom: "10px" }}>No units found</p>
              <p style={{ fontSize: "14px" }}>Try a different filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Booking modal */}
      <AnimatePresence>
        {bookingUnit && (
          <BookingModal unit={bookingUnit} onClose={() => setBookingUnit(null)} />
        )}
      </AnimatePresence>

      {/* Footer note */}
      <div style={{ background: "var(--cream)", borderTop: "1px solid rgba(139,107,71,0.12)", padding: "24px 64px", textAlign: "center" }}>
        <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
          © 2026 Akrafthaus. All rights reserved. · <a href="/" style={{ color: "var(--warm-brown)", textDecoration: "none" }}>Back to Home</a>
        </span>
      </div>
    </>
  );
}