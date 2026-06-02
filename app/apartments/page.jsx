"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --cream: #F5F0E8; --charcoal: #1C1A17; --warm-gold: #C9A96E;
      --warm-brown: #8B6B47; --sand: #F0EAE0; --text-muted: #7A6E64;
    }

    html { scroll-behavior: smooth; }
    body { background: var(--sand); color: var(--charcoal); font-family: 'DM Sans', sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
    .serif { font-family: 'Playfair Display', Georgia, serif; }
    .eyebrow { font-size: 10px; letter-spacing: 0.28em; text-transform: uppercase; color: var(--warm-brown); font-weight: 400; }

    .unit-card { background: #fff; border-radius: 8px; overflow: hidden; border: 1px solid rgba(139,107,71,0.08); transition: box-shadow 0.3s ease, transform 0.3s ease; }
    .unit-card:hover { box-shadow: 0 12px 40px rgba(139,107,71,0.12); transform: translateY(-4px); }
    .unit-card-img-wrap { overflow: hidden; position: relative; }
    .unit-card-img { width: 100%; height: 220px; object-fit: cover; display: block; transition: transform 0.7s ease; }
    .unit-card:hover .unit-card-img { transform: scale(1.04); }

    .badge { position: absolute; top: 14px; left: 14px; padding: 5px 12px; font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 500; border-radius: 2px; }
    .badge-available { background: var(--warm-brown); color: #fff; }
    .badge-booked { background: rgba(28,26,23,0.65); color: rgba(245,240,232,0.8); }

    .amenity-tag { display: inline-flex; align-items: center; gap: 5px; padding: 5px 10px; background: var(--sand); border-radius: 20px; font-size: 11px; color: var(--text-muted); }

    .filter-btn { padding: 9px 18px; border-radius: 20px; border: 1px solid rgba(139,107,71,0.2); background: transparent; font-size: 12px; color: var(--text-muted); cursor: pointer; font-family: 'DM Sans', sans-serif; transition: all 0.2s; white-space: nowrap; flex-shrink: 0; }
    .filter-btn.active, .filter-btn:hover { background: var(--warm-brown); color: #fff; border-color: var(--warm-brown); }

    .book-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 13px 24px; background: var(--warm-brown); color: #fff; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 500; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif; border-radius: 4px; transition: opacity 0.2s; }
    .book-btn:hover { opacity: 0.85; }
    .book-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .book-btn-outline { background: transparent; border: 1px solid var(--warm-brown); color: var(--warm-brown); }
    .book-btn-outline:hover { background: var(--warm-brown); color: #fff; opacity: 1; }

    .modal-overlay { position: fixed; inset: 0; z-index: 500; background: rgba(14,10,6,0.72); display: flex; align-items: center; justify-content: center; padding: 16px; backdrop-filter: blur(4px); }
    .modal-box { background: #fff; border-radius: 10px; width: 100%; max-width: 540px; max-height: 92dvh; overflow-y: auto; padding: 36px; position: relative; }
    .modal-close { position: absolute; top: 14px; right: 14px; background: none; border: none; cursor: pointer; color: var(--text-muted); font-size: 18px; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 50%; transition: background 0.2s; }
    .modal-close:hover { background: var(--sand); }

    .form-group { margin-bottom: 16px; }
    .form-label { display: block; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--charcoal); font-weight: 500; margin-bottom: 7px; }
    .form-input { width: 100%; padding: 12px 14px; border: 1px solid rgba(139,107,71,0.2); border-radius: 4px; font-size: 14px; color: var(--charcoal); font-family: 'DM Sans', sans-serif; background: var(--sand); transition: border-color 0.2s; outline: none; }
    .form-input:focus { border-color: var(--warm-brown); }

    .footer-link { color: var(--text-muted); font-size: 12.5px; text-decoration: none; line-height: 2; display: block; transition: color 0.2s; }
    .footer-link:hover { color: var(--warm-brown); }

    .whatsapp-btn { position: fixed; bottom: 24px; right: 24px; z-index: 999; width: 54px; height: 54px; border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(37,211,102,0.4); text-decoration: none; transition: transform 0.2s ease; }
    .whatsapp-btn:hover { transform: scale(1.1); }
    .whatsapp-pulse { position: absolute; inset: 0; border-radius: 50%; background: #25D366; animation: waPulse 2s ease-out infinite; }
    @keyframes waPulse { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(1.7); opacity: 0; } }

    @media (max-width: 1024px) { .apartments-grid { grid-template-columns: repeat(2, 1fr) !important; } }
    @media (max-width: 768px) {
      .apt-hero { height: 340px !important; }
      .apt-hero-content { padding: 0 24px !important; padding-top: 60px !important; }
      .apt-section { padding: 48px 20px !important; }
      .apartments-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
      .unit-card-img { height: 200px !important; }
      .modal-overlay { padding: 0 !important; align-items: flex-end !important; }
      .modal-box { border-radius: 14px 14px 0 0 !important; max-height: 92dvh !important; padding: 28px 20px !important; }
      .modal-form-grid { grid-template-columns: 1fr !important; }
    }
    @media (max-width: 480px) {
      .apartments-grid { grid-template-columns: 1fr !important; }
      .unit-card-img { height: 180px !important; }
    }
  `}</style>
);

const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const UNITS = [
  { id: 1, name: "The Signature Suite", type: "Suite", beds: 2, baths: 2, sqft: 980, price: 85000, available: true, img: "/apt-1.jpg", description: "A refined two-bedroom suite with floor-to-ceiling windows, a private balcony, and bespoke furnishings crafted by local artisans.", amenities: ["Balcony", "King Bed", "Smart TV", "Mini Bar", "Kitchenette"] },
  { id: 2, name: "The Loft", type: "Loft", beds: 1, baths: 1, sqft: 620, price: 55000, available: true, img: "/apt-2.jpg", description: "Soaring ceilings, an open-plan layout, and an artist's eye for detail. Designed for the creative professional who thinks better in good spaces.", amenities: ["High Ceilings", "Open Plan", "Smart TV", "Work Desk", "Kitchenette"] },
  { id: 3, name: "The Garden Terrace", type: "Terrace", beds: 3, baths: 2, sqft: 1200, price: 120000, available: false, img: "/apt-3.jpg", description: "A spacious three-bedroom unit opening onto a private garden terrace. The kind of space families actually want to spend time in.", amenities: ["Private Garden", "3 Bedrooms", "Smart TV", "Full Kitchen", "Parking"] },
  { id: 4, name: "The Executive Studio", type: "Studio", beds: 1, baths: 1, sqft: 420, price: 38000, available: true, img: "/apt-4.jpg", description: "Compact, precise, and beautifully finished. Every inch designed for the solo traveller who doesn't want to compromise on quality.", amenities: ["Queen Bed", "Smart TV", "Work Desk", "Mini Fridge", "Fast WiFi"] },
  { id: 5, name: "The Penthouse", type: "Penthouse", beds: 4, baths: 3, sqft: 1800, price: 250000, available: true, img: "/apt-5.jpg", description: "The crown of Akrafthaus. Panoramic views, a private rooftop deck, butler service, and a level of quiet that money can — and should — buy.", amenities: ["Rooftop Deck", "4 Bedrooms", "Butler Service", "Full Kitchen", "Jacuzzi"] },
  { id: 6, name: "The Classic", type: "Room", beds: 1, baths: 1, sqft: 350, price: 28000, available: true, img: "/apt-6.jpg", description: "Warm interiors, thoughtful details, and full access to everything Akrafthaus has to offer. The perfect base for whatever brings you to Kubwa.", amenities: ["Queen Bed", "Smart TV", "Mini Bar", "Fast WiFi", "Room Service"] },
  { id: 7, name: "The Deluxe Suite", type: "Suite", beds: 2, baths: 2, sqft: 850, price: 72000, available: false, img: "/apt-7.jpg", description: "A generous suite with a separate living area and a soaking tub that earns its keep. Ideal for longer stays.", amenities: ["Soaking Tub", "Living Area", "Smart TV", "Walk-in Wardrobe", "Kitchenette"] },
  { id: 8, name: "The Creative Flat", type: "Loft", beds: 2, baths: 1, sqft: 710, price: 62000, available: true, img: "/apt-8.jpg", description: "Built for makers. A dedicated studio workspace, curated art pieces from Nigerian artists, and a layout that never gets in your way.", amenities: ["Studio Space", "Nigerian Art", "Smart TV", "Work Desk", "Fast WiFi"] },
];

const FILTERS = ["All", "Studio", "Room", "Loft", "Suite", "Terrace", "Penthouse"];

function BookingModal({ unit, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", checkin: "", checkout: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <motion.div className="modal-box" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
        <button className="modal-close" onClick={onClose}>✕</button>
        {!submitted ? (
          <>
            <p className="eyebrow" style={{ marginBottom: "8px" }}>Book Your Stay</p>
            <h3 className="serif" style={{ fontSize: "22px", fontWeight: 500, color: "var(--charcoal)", marginBottom: "6px" }}>{unit.name}</h3>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "24px" }}>₦{unit.price.toLocaleString()} / night · {unit.beds} bed{unit.beds > 1 ? "s" : ""} · {unit.baths} bath{unit.baths > 1 ? "s" : ""}</p>
            <div className="modal-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div className="form-group"><label className="form-label">Full Name</label><input className="form-input" required placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} /></div>
              <div className="form-group"><label className="form-label">Phone</label><input className="form-input" required placeholder="+234..." value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} /></div>
            </div>
            <div className="form-group"><label className="form-label">Email</label><input className="form-input" type="email" required placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} /></div>
            <div className="modal-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div className="form-group"><label className="form-label">Check-in</label><input className="form-input" type="date" required value={form.checkin} onChange={e => setForm(f => ({ ...f, checkin: e.target.value }))} /></div>
              <div className="form-group"><label className="form-label">Check-out</label><input className="form-input" type="date" required value={form.checkout} onChange={e => setForm(f => ({ ...f, checkout: e.target.value }))} /></div>
            </div>
            <div className="form-group"><label className="form-label">Message (optional)</label><textarea className="form-input" rows={3} placeholder="Any special requests..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} style={{ resize: "vertical" }} /></div>
            <button className="book-btn" style={{ marginTop: "8px" }} onClick={() => { if (form.name && form.email && form.checkin && form.checkout) setSubmitted(true); }}>
              Send Booking Request
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: "36px", marginBottom: "16px", color: "var(--warm-gold)" }}>✦</div>
            <h3 className="serif" style={{ fontSize: "24px", fontWeight: 500, color: "var(--charcoal)", marginBottom: "10px" }}>Request Received!</h3>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "24px" }}>Thank you, {form.name}. We've received your request for <strong>{unit.name}</strong> and will get back to you within 24 hours.</p>
            <button className="book-btn" onClick={onClose}>Close</button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

function UnitCard({ unit, index, onBook }) {
  const [ref, visible] = useInView(0.08);
  return (
    <motion.div ref={ref} className="unit-card" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}>
      <div className="unit-card-img-wrap">
        <img src={unit.img} alt={unit.name} className="unit-card-img" />
        <span className={`badge ${unit.available ? "badge-available" : "badge-booked"}`}>{unit.available ? "Available" : "Booked"}</span>
      </div>
      <div style={{ padding: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--warm-brown)" }}>{unit.type}</span>
          <span className="serif" style={{ fontSize: "17px", fontWeight: 500, color: "var(--charcoal)" }}>₦{unit.price.toLocaleString()}<span style={{ fontSize: "10px", color: "var(--text-muted)", fontFamily: "'DM Sans',sans-serif", fontWeight: 400 }}>/night</span></span>
        </div>
        <h3 className="serif" style={{ fontSize: "18px", fontWeight: 500, color: "var(--charcoal)", marginBottom: "8px", lineHeight: 1.2 }}>{unit.name}</h3>
        <div style={{ display: "flex", gap: "14px", marginBottom: "10px", flexWrap: "wrap" }}>
          {[{ icon: "🛏", label: `${unit.beds} Bed${unit.beds > 1 ? "s" : ""}` }, { icon: "🚿", label: `${unit.baths} Bath${unit.baths > 1 ? "s" : ""}` }, { icon: "📐", label: `${unit.sqft} sqft` }].map(({ icon, label }) => (
            <span key={label} style={{ fontSize: "12px", color: "var(--text-muted)" }}>{icon} {label}</span>
          ))}
        </div>
        <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "14px" }}>{unit.description}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "18px" }}>
          {unit.amenities.map(a => <span key={a} className="amenity-tag">{a}</span>)}
        </div>
        <button className={`book-btn ${!unit.available ? "book-btn-outline" : ""}`} onClick={() => unit.available && onBook(unit)} disabled={!unit.available}>
          {unit.available ? "Book This Unit" : "Currently Unavailable"}
        </button>
      </div>
    </motion.div>
  );
}

function ApartmentsHero() {
  return (
    <section className="apt-hero" style={{ position: "relative", width: "100%", height: "400px", overflow: "hidden", display: "flex", alignItems: "center" }}>
      <img src="/apt-hero.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,10,5,0.78) 0%, rgba(15,10,5,0.35) 100%)" }} />
      <div className="apt-hero-content" style={{ position: "relative", zIndex: 2, padding: "0 64px", paddingTop: "72px" }}>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
          <span style={{ width: "24px", height: "1px", background: "var(--warm-gold)" }} />
          <span style={{ fontSize: "10px", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--warm-gold)" }}>Est. 2022 · Kubwa, Abuja</span>
        </motion.div>
        <motion.h1 className="serif" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
          style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.08, fontWeight: 500, color: "var(--cream)", marginBottom: "14px", letterSpacing: "-0.02em" }}>
          Spaces worth living in
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }}
          style={{ fontSize: "15px", color: "rgba(245,240,232,0.7)", maxWidth: "420px", lineHeight: 1.72, fontWeight: 300 }}>
          From intimate studios to a rooftop penthouse — every unit at Akrafthaus was designed to feel like somewhere you'd actually choose to be.
        </motion.p>
      </div>
    </section>
  );
}

export default function ApartmentsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [bookingUnit, setBookingUnit] = useState(null);
  const filtered = activeFilter === "All" ? UNITS : UNITS.filter(u => u.type === activeFilter);

  return (
    <>
      <FontLoader />
      <ApartmentsHero />

      <section className="apt-section" style={{ background: "var(--sand)", padding: "56px 64px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ marginBottom: "32px" }}>
            <p className="eyebrow" style={{ marginBottom: "8px" }}>Our Units</p>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
              <h2 className="serif" style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 500, color: "var(--charcoal)", lineHeight: 1.1 }}>Find your space</h2>
              <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>{filtered.length} unit{filtered.length !== 1 ? "s" : ""} shown</span>
            </div>
          </motion.div>

          <div style={{ display: "flex", gap: "8px", marginBottom: "36px", overflowX: "auto", paddingBottom: "6px", WebkitOverflowScrolling: "touch" }}>
            {FILTERS.map(f => (
              <button key={f} className={`filter-btn ${activeFilter === f ? "active" : ""}`} onClick={() => setActiveFilter(f)}>{f}</button>
            ))}
          </div>

          <div className="apartments-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {filtered.map((unit, i) => <UnitCard key={unit.id} unit={unit} index={i} onBook={setBookingUnit} />)}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text-muted)" }}>
              <p className="serif" style={{ fontSize: "20px", marginBottom: "8px" }}>No units found</p>
              <p style={{ fontSize: "14px" }}>Try a different filter.</p>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {bookingUnit && <BookingModal unit={bookingUnit} onClose={() => setBookingUnit(null)} />}
      </AnimatePresence>

      <div style={{ background: "var(--cream)", borderTop: "1px solid rgba(139,107,71,0.12)", padding: "20px 24px", textAlign: "center" }}>
        <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
          © 2026 Akrafthaus. All rights reserved. · Built in Kubwa, Abuja ·{" "}
          <Link href="/" style={{ color: "var(--warm-brown)", textDecoration: "none" }}>Back to Home</Link>
        </span>
      </div>

      <a href="https://wa.me/2347033869555" target="_blank" rel="noopener noreferrer" className="whatsapp-btn" aria-label="WhatsApp">
        <div className="whatsapp-pulse" />
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white" style={{ position: "relative", zIndex: 1 }}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}