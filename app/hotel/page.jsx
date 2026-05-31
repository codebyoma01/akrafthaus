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

    .btn-gold { display: inline-flex; align-items: center; gap: 8px; padding: 13px 28px; background: var(--warm-brown); color: var(--cream); font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none; font-weight: 500; transition: opacity 0.25s; white-space: nowrap; cursor: pointer; border: none; font-family: 'DM Sans', sans-serif; }
    .btn-gold:hover { opacity: 0.82; }
    .btn-outline { display: inline-flex; align-items: center; gap: 8px; padding: 13px 28px; border: 1px solid var(--warm-brown); color: var(--warm-brown); font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none; font-weight: 500; background: none; transition: background 0.25s, color 0.25s; white-space: nowrap; cursor: pointer; font-family: 'DM Sans', sans-serif; }
    .btn-outline:hover { background: var(--warm-brown); color: var(--cream); }

    .room-card { background: #fff; overflow: hidden; border: 1px solid rgba(139,107,71,0.08); transition: box-shadow 0.3s ease, transform 0.3s ease; }
    .room-card:hover { box-shadow: 0 12px 40px rgba(139,107,71,0.12); transform: translateY(-4px); }
    .room-card-img { width: 100%; height: 240px; object-fit: cover; display: block; transition: transform 0.7s ease; }
    .room-card:hover .room-card-img { transform: scale(1.04); }

    .amenity-item { display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 24px 12px; background: var(--cream); border: 1px solid rgba(139,107,71,0.08); transition: all 0.25s; text-align: center; }
    .amenity-item:hover { background: #fff; border-color: rgba(139,107,71,0.2); transform: translateY(-3px); }

    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-label { font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); font-weight: 500; }
    .form-input { padding: 12px 14px; border: 1px solid rgba(139,107,71,0.2); background: #fff; font-size: 13px; color: var(--charcoal); font-family: 'DM Sans', sans-serif; outline: none; transition: border-color 0.2s; border-radius: 2px; width: 100%; }
    .form-input:focus { border-color: var(--warm-brown); }
    .form-select { padding: 12px 14px; border: 1px solid rgba(139,107,71,0.2); background: #fff; font-size: 13px; color: var(--charcoal); font-family: 'DM Sans', sans-serif; outline: none; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238B6B47' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; cursor: pointer; transition: border-color 0.2s; border-radius: 2px; width: 100%; }
    .form-select:focus { border-color: var(--warm-brown); }

    .gal-item { overflow: hidden; cursor: pointer; border-radius: 4px; }
    .gal-item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.7s ease; }
    .gal-item:hover img { transform: scale(1.06); }

    .footer-link { color: var(--text-muted); font-size: 12.5px; text-decoration: none; line-height: 2; display: block; transition: color 0.2s; }
    .footer-link:hover { color: var(--warm-brown); }
    .social-icon-btn { width: 36px; height: 36px; border-radius: 50%; border: 1px solid rgba(139,107,71,0.25); display: flex; align-items: center; justify-content: center; color: var(--text-muted); text-decoration: none; transition: all 0.2s; flex-shrink: 0; }
    .social-icon-btn:hover { border-color: var(--warm-brown); color: var(--warm-brown); }

    .whatsapp-btn { position: fixed; bottom: 24px; right: 24px; z-index: 999; width: 54px; height: 54px; border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(37,211,102,0.4); text-decoration: none; transition: transform 0.2s ease; }
    .whatsapp-btn:hover { transform: scale(1.1); }
    .whatsapp-pulse { position: absolute; inset: 0; border-radius: 50%; background: #25D366; animation: waPulse 2s ease-out infinite; }
    @keyframes waPulse { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(1.7); opacity: 0; } }

    /* ══════════════════════════════
       GALLERY GRID
    ══════════════════════════════ */
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 200px);
      gap: 10px;
    }
    .gallery-grid .gal-item-featured {
      grid-column: span 2;
      grid-row: span 2;
    }
    .gallery-grid .gal-item img {
      height: 100%;
    }

    @media (max-width: 1024px) {
      .rooms-grid { grid-template-columns: 1fr 1fr !important; }
      .amenities-grid { grid-template-columns: repeat(4, 1fr) !important; }
      .booking-grid-3 { grid-template-columns: 1fr 1fr !important; }
    }
    @media (max-width: 768px) {
      .hotel-hero { min-height: 100svh !important; }
      .hotel-hero-content { padding: 0 24px !important; max-width: 100% !important; }
      .hotel-hero-content h1 { font-size: clamp(36px, 10vw, 60px) !important; }
      .hotel-section { padding: 52px 20px !important; }
      .rooms-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
      .room-card-img { height: 220px !important; }
      .room-features-grid { grid-template-columns: 1fr 1fr !important; }
      .room-cta-row { flex-direction: column !important; gap: 10px !important; }
      .room-cta-row a, .room-cta-row button { flex: none !important; width: 100% !important; justify-content: center !important; }
      .amenities-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
      .booking-grid-3 { grid-template-columns: 1fr !important; gap: 14px !important; }
      .booking-form-box { padding: 28px 20px !important; }
      .booking-submit-row { flex-direction: column !important; align-items: stretch !important; }
      .booking-submit-row button { width: 100% !important; justify-content: center !important; }
      .booking-contact-row { flex-direction: column !important; gap: 12px !important; }

      /* Gallery — remove fixed row heights, stack naturally */
      .gallery-grid {
        grid-template-columns: 1fr 1fr !important;
        grid-template-rows: auto !important;
      }
      .gallery-grid .gal-item-featured {
        grid-column: span 2 !important;
        grid-row: span 1 !important;
      }
      .gallery-grid .gal-item img,
      .gallery-grid .gal-item-featured img {
        height: 180px !important;
      }

      .footer-wrap { padding: 48px 20px 24px !important; }
      .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
      .footer-brand-col { grid-column: 1 / -1 !important; }
      .hotel-cta-banner h2 { font-size: clamp(28px, 8vw, 48px) !important; }
      .hero-cta-row { flex-direction: column !important; }
      .hero-cta-row a { width: 100% !important; justify-content: center !important; }
    }
    @media (max-width: 480px) {
      .amenities-grid { grid-template-columns: repeat(2, 1fr) !important; }
      .gallery-grid {
        grid-template-columns: 1fr !important;
      }
      .gallery-grid .gal-item-featured {
        grid-column: span 1 !important;
      }
      .gallery-grid .gal-item img,
      .gallery-grid .gal-item-featured img {
        height: 200px !important;
      }
      .footer-grid { grid-template-columns: 1fr !important; }
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

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function HotelHero() {
  return (
    <section className="hotel-hero" style={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}>
      <img src="/hotel-hero.jpg" alt="Akrafthaus Boutique Hotel" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,10,5,0.78) 0%, rgba(15,10,5,0.4) 60%, rgba(15,10,5,0.15) 100%)" }} />
      <div className="hotel-hero-content" style={{ position: "relative", zIndex: 2, height: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 72px", maxWidth: "760px", paddingTop: "72px" }}>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
          <span style={{ width: "26px", height: "1px", background: "var(--warm-gold)" }} />
          <span style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--warm-gold)" }}>Boutique Hotel · Kubwa, Abuja</span>
        </motion.div>
        <motion.h1 className="serif" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: "clamp(40px, 7vw, 88px)", lineHeight: 1.05, fontWeight: 500, color: "var(--cream)", marginBottom: "20px", letterSpacing: "-0.02em" }}>
          Rest in<br />Refined<br />Luxury
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.38 }}
          style={{ fontSize: "15px", lineHeight: 1.78, color: "rgba(245,240,232,0.72)", maxWidth: "420px", marginBottom: "40px", fontWeight: 300 }}>
          42 uniquely designed rooms and suites, each crafted to deliver an experience that blends warmth, elegance, and genuine Nigerian hospitality.
        </motion.p>
        <motion.div className="hero-cta-row" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }}
          style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="#booking" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "15px 28px", background: "var(--warm-brown)", color: "#fff", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", fontWeight: 500, transition: "opacity 0.25s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.82")} onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
            Reserve a Room
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="#rooms" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "15px 28px", border: "1px solid rgba(245,240,232,0.4)", color: "rgba(245,240,232,0.88)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", fontWeight: 500 }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(245,240,232,0.1)")} onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
            View Rooms
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.75 }}
          style={{ display: "flex", gap: "36px", marginTop: "52px", paddingTop: "32px", borderTop: "1px solid rgba(245,240,232,0.15)", flexWrap: "wrap" }}>
          {[["42", "Unique Rooms"], ["5★", "Rated Hotel"], ["24/7", "Concierge"], ["₦50k", "From / Night"]].map(([num, label]) => (
            <div key={label}>
              <div className="serif" style={{ fontSize: "20px", fontWeight: 500, color: "var(--warm-gold)", lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(245,240,232,0.5)", marginTop: "5px" }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{ position: "absolute", bottom: "40px", left: "72px", zIndex: 3, display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ width: "1px", height: "44px", background: "rgba(245,240,232,0.2)", position: "relative", overflow: "hidden" }}>
          <motion.div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "50%", background: "var(--warm-gold)" }}
            animate={{ y: ["0%", "200%"] }} transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }} />
        </div>
        <span style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,240,232,0.38)" }}>Scroll</span>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ROOMS
───────────────────────────────────────────── */
const ROOMS = [
  { type: "Standard Room", price: "₦50,000", size: "28 sqm", guests: "2 Guests", img: "/room-standard.jpg", features: ["King Bed", "City View", "Free WiFi", "Air Conditioning", "Smart TV", "En-suite Bathroom"], badge: null },
  { type: "Deluxe Room", price: "₦70,000", size: "36 sqm", guests: "2 Guests", img: "/room-deluxe.jpg", features: ["King Bed", "Garden View", "Free WiFi", "Mini Bar", "Smart TV", "Rain Shower"], badge: "Most Popular" },
  { type: "Suite", price: "₦85,000", size: "52 sqm", guests: "2–3 Guests", img: "/room-suite.jpg", features: ["King Bed", "Sitting Area", "Panoramic View", "Mini Bar", "Jacuzzi", "Butler Service"], badge: null },
  { type: "Presidential Suite", price: "₦100,000", size: "90 sqm", guests: "4 Guests", img: "/room-presidential.jpg", features: ["2 King Beds", "Private Lounge", "Panoramic View", "Full Kitchen", "Private Jacuzzi", "24/7 Butler"], badge: "Premium" },
];

function Rooms() {
  const [ref, visible] = useInView(0.05);
  return (
    <section ref={ref} id="rooms" className="hotel-section" style={{ background: "var(--sand)", padding: "80px 64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ marginBottom: "48px" }}>
          <p className="eyebrow" style={{ marginBottom: "14px" }}>Accommodation</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
            <h2 className="serif" style={{ fontSize: "clamp(26px, 3.5vw, 48px)", lineHeight: 1.1, fontWeight: 500, color: "var(--charcoal)" }}>Our Rooms & Suites</h2>
            <p style={{ fontSize: "14px", lineHeight: 1.75, color: "var(--text-muted)", maxWidth: "340px" }}>Every room is a carefully considered sanctuary blending local craft, premium comfort, and timeless design.</p>
          </div>
        </motion.div>
        <div className="rooms-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
          {ROOMS.map(({ type, price, size, guests, img, features, badge }, i) => (
            <motion.div key={type} className="room-card" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.1 }}>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img src={img} alt={type} className="room-card-img" />
                {badge && <div style={{ position: "absolute", top: "14px", left: "14px", background: "var(--warm-brown)", color: "#fff", fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", padding: "5px 12px" }}>{badge}</div>}
                <div style={{ position: "absolute", bottom: "14px", right: "14px", background: "rgba(15,10,5,0.75)", backdropFilter: "blur(8px)", padding: "7px 14px" }}>
                  <span className="serif" style={{ fontSize: "17px", fontWeight: 500, color: "var(--warm-gold)" }}>{price}</span>
                  <span style={{ fontSize: "10px", color: "rgba(245,240,232,0.6)", marginLeft: "4px" }}>/night</span>
                </div>
              </div>
              <div style={{ padding: "24px" }}>
                <h3 className="serif" style={{ fontSize: "19px", fontWeight: 500, color: "var(--charcoal)", marginBottom: "6px" }}>{type}</h3>
                <div style={{ display: "flex", gap: "14px", marginBottom: "14px" }}>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>📐 {size}</span>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>👤 {guests}</span>
                </div>
                <div className="room-features-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px", marginBottom: "20px" }}>
                  {features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                      <span style={{ color: "var(--warm-gold)", fontSize: "9px" }}>✦</span>
                      <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="room-cta-row" style={{ display: "flex", gap: "10px" }}>
                  <a href="#booking" className="btn-gold" style={{ flex: 1, justifyContent: "center", fontSize: "9px" }}>Book This Room</a>
                  <a href="#" className="btn-outline" style={{ padding: "13px 18px", fontSize: "9px" }}>Details</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   AMENITIES
───────────────────────────────────────────── */
const AMENITIES = [
  { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11V7a5 5 0 0 1 10 0v4"/><path d="M3 11h18v4a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-4z"/></svg>, label: "Swimming Pool" },
  { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>, label: "Fine Dining" },
  { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, label: "High-Speed WiFi" },
  { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, label: "Spa & Wellness" },
  { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label: "24/7 Concierge" },
  { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>, label: "Airport Transfer" },
  { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, label: "Secure Parking" },
  { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.06 6.06l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, label: "Room Service" },
];

function Amenities() {
  const [ref, visible] = useInView(0.1);
  return (
    <section ref={ref} className="hotel-section" style={{ background: "#fff", padding: "80px 64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: "48px" }}>
          <p className="eyebrow" style={{ marginBottom: "14px" }}>Hotel Facilities</p>
          <h2 className="serif" style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 500, color: "var(--charcoal)", marginBottom: "14px" }}>Everything You Need</h2>
          <p style={{ fontSize: "14px", color: "var(--text-muted)", maxWidth: "440px", margin: "0 auto", lineHeight: 1.8 }}>From world-class dining to holistic wellness, every amenity is designed to make your stay exceptional.</p>
        </motion.div>
        <div className="amenities-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "14px" }}>
          {AMENITIES.map(({ icon, label }, i) => (
            <motion.div key={label} className="amenity-item" initial={{ opacity: 0, y: 18 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.07 }}>
              <div style={{ color: "var(--warm-brown)", lineHeight: 0 }}>{icon}</div>
              <span style={{ fontSize: "12px", fontWeight: 500, color: "var(--charcoal)" }}>{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   BOOKING FORM
───────────────────────────────────────────── */
function BookingForm() {
  const [ref, visible] = useInView(0.1);
  const [formData, setFormData] = useState({ checkIn: "", checkOut: "", roomType: "", guests: "1", name: "", email: "", phone: "", requests: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <section ref={ref} id="booking" className="hotel-section" style={{ background: "var(--sand)", padding: "80px 64px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: "44px" }}>
          <p className="eyebrow" style={{ marginBottom: "14px" }}>Reservations</p>
          <h2 className="serif" style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 500, color: "var(--charcoal)", marginBottom: "12px" }}>Reserve Your Room</h2>
          <p style={{ fontSize: "14px", color: "var(--text-muted)", maxWidth: "380px", margin: "0 auto", lineHeight: 1.8 }}>Fill in the form and our team will confirm within 2 hours.</p>
        </motion.div>
        <motion.div className="booking-form-box" initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.15 }}
          style={{ background: "#fff", padding: "44px", border: "1px solid rgba(139,107,71,0.1)" }}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "32px 0" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "rgba(139,107,71,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--warm-brown)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="serif" style={{ fontSize: "24px", fontWeight: 500, color: "var(--charcoal)", marginBottom: "10px" }}>Reservation Received</h3>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.8, maxWidth: "340px", margin: "0 auto 24px" }}>
                  We'll contact you at <strong style={{ color: "var(--charcoal)" }}>{formData.email}</strong> within 2 hours to confirm.
                </p>
                <button className="btn-outline" onClick={() => setSubmitted(false)}>Make Another Booking</button>
              </motion.div>
            ) : (
              <motion.div key="form">
                <div className="booking-grid-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div className="form-group"><label className="form-label">Check-in</label><input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} className="form-input" required /></div>
                  <div className="form-group"><label className="form-label">Check-out</label><input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} className="form-input" required /></div>
                  <div className="form-group"><label className="form-label">Guests</label>
                    <select name="guests" value={formData.guests} onChange={handleChange} className="form-select">
                      {["1","2","3","4"].map(n => <option key={n} value={n}>{n} Guest{n !== "1" ? "s" : ""}</option>)}
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <div className="form-group"><label className="form-label">Room Type</label>
                    <select name="roomType" value={formData.roomType} onChange={handleChange} className="form-select" required>
                      <option value="">Select a room type</option>
                      {ROOMS.map(r => <option key={r.type} value={r.type}>{r.type} — {r.price}/night</option>)}
                    </select>
                  </div>
                </div>
                <div className="booking-grid-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div className="form-group"><label className="form-label">Full Name</label><input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="Your full name" required /></div>
                  <div className="form-group"><label className="form-label">Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="your@email.com" required /></div>
                  <div className="form-group"><label className="form-label">Phone</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input" placeholder="+234 000 000 0000" /></div>
                </div>
                <div className="form-group" style={{ marginBottom: "28px" }}>
                  <label className="form-label">Special Requests <span style={{ color: "var(--text-muted)", textTransform: "none", letterSpacing: 0, fontSize: "11px" }}>(optional)</span></label>
                  <textarea name="requests" value={formData.requests} onChange={handleChange} className="form-input" placeholder="Dietary requirements, accessibility needs..." rows={3} style={{ resize: "vertical", fontFamily: "inherit" }} />
                </div>
                <div className="booking-submit-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "14px" }}>
                  <p style={{ fontSize: "11px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                    By submitting, you agree to our <a href="#" style={{ color: "var(--warm-brown)", textDecoration: "underline" }}>booking policy</a>.
                  </p>
                  <button className="btn-gold" style={{ fontSize: "10px" }} onClick={() => { if (formData.name && formData.email && formData.checkIn && formData.checkOut && formData.roomType) setSubmitted(true); }}>
                    Submit Reservation
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div className="booking-contact-row" initial={{ opacity: 0, y: 10 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", justifyContent: "center", gap: "36px", marginTop: "28px", flexWrap: "wrap" }}>
          {[{ icon: "📞", text: "+234 703 386 9555" }, { icon: "✉️", text: "hello@akrafthaus.ng" }, { icon: "💬", text: "WhatsApp Us" }].map(({ icon, text }) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "14px" }}>{icon}</span>
              <span style={{ fontSize: "12.5px", color: "var(--text-muted)" }}>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   GALLERY
───────────────────────────────────────────── */
const GALLERY = [
  { src: "/hotel-gallery1.jpg", featured: true },
  { src: "/hotel-gallery2.jpg", featured: false },
  { src: "/hotel-gallery3.jpg", featured: false },
  { src: "/hotel-gallery4.jpg", featured: false },
  { src: "/hotel-gallery5.jpg", featured: false },
  { src: "/hotel-gallery6.jpg", featured: false },
];

function HotelGallery() {
  const [ref, visible] = useInView(0.05);
  const [lightbox, setLightbox] = useState(null);
  return (
    <section ref={ref} className="hotel-section" style={{ background: "var(--charcoal)", padding: "80px 64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ marginBottom: "40px" }}>
          <p className="eyebrow" style={{ marginBottom: "14px", color: "rgba(201,169,110,0.8)" }}>Photo Gallery</p>
          <h2 className="serif" style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 500, color: "var(--cream)" }}>See the Space</h2>
        </motion.div>
        <div className="gallery-grid">
          {GALLERY.map(({ src, featured }, i) => (
            <motion.div key={i} className={`gal-item${featured ? " gal-item-featured" : ""}`} onClick={() => setLightbox(src)}
              initial={{ opacity: 0, scale: 0.96 }} animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}>
              <img src={src} alt={`Gallery ${i + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", cursor: "zoom-out" }}>
            <motion.img src={lightbox} alt="" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain", borderRadius: "4px" }} />
            <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: "20px", right: "20px", background: "rgba(255,255,255,0.12)", border: "none", color: "#fff", width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CTA BANNER
───────────────────────────────────────────── */
function CTABanner() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} className="hotel-cta-banner" style={{ position: "relative", overflow: "hidden", minHeight: "360px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img src="/cta-bg.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(14,10,6,0.72)" }} />
      <motion.div initial={{ opacity: 0, y: 28 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9 }}
        style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "48px 24px" }}>
        <h2 className="serif" style={{ fontSize: "clamp(28px, 5vw, 64px)", fontWeight: 500, color: "var(--cream)", lineHeight: 1.1, marginBottom: "28px", letterSpacing: "-0.01em" }}>
          Your stay awaits.<br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Book today.</em>
        </h2>
        <a href="#booking" className="btn-gold" style={{ fontSize: "11px" }}>Reserve a Room</a>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer-wrap" style={{ background: "var(--cream)", padding: "56px 64px 24px", borderTop: "1px solid rgba(139,107,71,0.12)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1.2fr", gap: "40px", marginBottom: "40px", alignItems: "start" }}>
          <div className="footer-brand-col">
            <img src="/logo.png" alt="AKRAFTHAUS" style={{ height: "40px", marginBottom: "14px", objectFit: "contain" }} />
            <p style={{ fontSize: "12.5px", lineHeight: 1.75, color: "var(--text-muted)", maxWidth: "200px" }}>A luxury lifestyle destination where hospitality, creativity, and innovation come together.</p>
          </div>
          {[
            { heading: "Explore", links: [["Apartments", "/apartments"], ["Hotel", "/hotel"], ["Restaurant", "/restaurant"], ["Creative Studio", "/creative-studio"], ["Tech Hub", "/tech-hub"], ["Language School", "/language-school"], ["Gallery", "/gallery"]] },
            { heading: "Company", links: [["About Us", "#"], ["Careers", "#"], ["Press", "#"], ["Blog", "#"], ["Contact", "#"]] },
            { heading: "Support", links: [["FAQs", "#"], ["Privacy Policy", "#"], ["Terms & Conditions", "#"], ["Booking Policy", "#"]] },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.06em", color: "var(--charcoal)", marginBottom: "16px" }}>{heading}</div>
              {links.map(([l, href]) => <Link key={l} href={href} className="footer-link">{l}</Link>)}
            </div>
          ))}
          <div>
            <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.06em", color: "var(--charcoal)", marginBottom: "16px" }}>Connect</div>
            <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
              <a href="#" className="social-icon-btn" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://wa.me/2347033869555" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="WhatsApp">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["+234 703 386 9555", "hello@akrafthaus.ng", "Kubwa, Abuja, Nigeria"].map(t => (
                <span key={t} style={{ fontSize: "12px", color: "var(--text-muted)" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(139,107,71,0.12)", paddingTop: "20px", textAlign: "center" }}>
          <span style={{ fontSize: "11.5px", color: "var(--text-muted)" }}>© 2026 Akrafthaus. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default function HotelPage() {
  return (
    <>
      <FontLoader />
      <HotelHero />
      <Rooms />
      <Amenities />
      <BookingForm />
      <HotelGallery />
      <CTABanner />
      <Footer />
      <a href="https://wa.me/2347033869555" target="_blank" rel="noopener noreferrer" className="whatsapp-btn" aria-label="WhatsApp">
        <div className="whatsapp-pulse" />
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white" style={{ position: "relative", zIndex: 1 }}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}