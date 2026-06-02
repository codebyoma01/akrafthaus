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

    .btn-gold {
      display: inline-block; padding: 13px 32px;
      background: var(--warm-brown); color: var(--cream);
      font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
      text-decoration: none; font-weight: 500; transition: opacity 0.25s; white-space: nowrap;
    }
    .btn-gold:hover { opacity: 0.82; }

    .btn-outline {
      display: inline-block; padding: 13px 32px;
      border: 1px solid var(--warm-brown); color: var(--warm-brown);
      font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
      text-decoration: none; font-weight: 500;
      transition: background 0.25s, color 0.25s; white-space: nowrap;
    }
    .btn-outline:hover { background: var(--warm-brown); color: var(--cream); }

    .eyebrow {
      font-size: 10px; letter-spacing: 0.28em;
      text-transform: uppercase; color: var(--warm-brown); font-weight: 400;
    }

    .card-img { transition: transform 0.7s ease; }
    .card-wrap:hover .card-img { transform: scale(1.04); }

    .gal-img { width: 100%; height: 200px; object-fit: cover; display: block; transition: transform 0.6s ease; }
    .gal-wrap:hover .gal-img { transform: scale(1.06); }
    .gal-wrap { overflow: hidden; }

    .footer-link {
      color: var(--text-muted); font-size: 12.5px; text-decoration: none;
      line-height: 2; display: block; transition: color 0.2s;
    }
    .footer-link:hover { color: var(--warm-brown); }

    .testi-card {
      background: var(--sand); padding: 32px;
      border: 1px solid rgba(139,107,71,0.1); border-radius: 4px;
    }
    .dot-btn {
      width: 10px; height: 10px; border-radius: 50%;
      border: none; cursor: pointer; padding: 0; transition: background 0.2s;
    }

    .social-icon-btn {
      width: 36px; height: 36px; border-radius: 50%;
      border: 1px solid rgba(139,107,71,0.25);
      display: flex; align-items: center; justify-content: center;
      color: var(--text-muted); text-decoration: none; transition: all 0.2s; flex-shrink: 0;
    }
    .social-icon-btn:hover { border-color: var(--warm-brown); color: var(--warm-brown); }

    .lang-feature {
      display: flex; flex-direction: column; gap: 8px;
      padding: 24px; background: rgba(240,234,224,0.6);
      border: 1px solid rgba(139,107,71,0.1); border-radius: 6px;
      transition: all 0.25s ease;
    }
    .lang-feature:hover {
      background: rgba(240,234,224,0.95);
      border-color: rgba(139,107,71,0.25);
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(139,107,71,0.08);
    }

    .whatsapp-btn {
      position: fixed; bottom: 28px; right: 28px; z-index: 999;
      width: 56px; height: 56px; border-radius: 50%;
      background: #25D366;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 20px rgba(37,211,102,0.4);
      text-decoration: none; transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .whatsapp-btn:hover { transform: scale(1.1); box-shadow: 0 6px 28px rgba(37,211,102,0.55); }
    .whatsapp-pulse {
      position: absolute; inset: 0; border-radius: 50%;
      background: #25D366; animation: waPulse 2s ease-out infinite;
    }
    @keyframes waPulse {
      0% { transform: scale(1); opacity: 0.6; }
      100% { transform: scale(1.7); opacity: 0; }
    }

    /* ══════════════════════════════
       RESPONSIVE
    ══════════════════════════════ */
    @media (max-width: 768px) {
      .hero-section { min-height: 100svh !important; }
      .feature-strip {
        margin: 0 12px !important; margin-top: -20px !important;
        grid-template-columns: repeat(3, 1fr) !important;
      }
      .feature-strip > div:nth-child(n+4) { border-top: 1px solid rgba(139,107,71,0.07); }
      .feature-strip > div:nth-child(3n) { border-right: none !important; }
      .two-col { grid-template-columns: 1fr !important; gap: 36px !important; }
      .two-col-reverse { grid-template-columns: 1fr !important; gap: 36px !important; }
      .two-col-reverse > *:first-child { order: 2; }
      .two-col-reverse > *:last-child { order: 1; }
      .section-pad { padding: 60px 24px !important; }
      .hotel-img { height: 300px !important; }
      .studio-img { height: 280px !important; }
      .testi-grid { grid-template-columns: 1fr !important; }
      .gal-grid { grid-template-columns: 1fr 1fr !important; }
      .gal-grid img { height: 150px !important; }
      .footer-wrap { padding: 48px 24px 24px !important; }
      .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
      .footer-brand-col { grid-column: 1 / -1; }
      .lang-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
      .lang-features-grid { grid-template-columns: 1fr 1fr !important; }
    }

    @media (max-width: 480px) {
      .feature-strip { grid-template-columns: repeat(2, 1fr) !important; }
      .feature-strip > div:nth-child(2n) { border-right: none !important; }
      .feature-strip > div:nth-child(n+3) { border-top: 1px solid rgba(139,107,71,0.07); }
      .footer-grid { grid-template-columns: 1fr !important; }
      .lang-features-grid { grid-template-columns: 1fr !important; }
    }
  `}</style>
);

const useInView = (threshold = 0.15) => {
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
   HERO
───────────────────────────────────────────── */
const HERO_SLIDES = [
  "/akraft-restaurant.jpg",
  "/akraft-bar.jpg",
  "/akraft-room.jpg",
  "/akraft-reception.jpg",
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(s => (s + 1) % HERO_SLIDES.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ position: "relative", width: "100%", height: "100vh", minHeight: "600px", overflow: "hidden", paddingTop: "72px" }}>
      {HERO_SLIDES.map((src, i) => (
        <img key={src} src={src} alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: i === currentSlide ? 1 : 0, transition: "opacity 1.4s ease-in-out", zIndex: 0 }}
        />
      ))}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(15,10,5,0.72) 0%, rgba(15,10,5,0.45) 55%, rgba(15,10,5,0.2) 100%)" }} />

      <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 72px", maxWidth: "720px" }}>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
          <span style={{ width: "28px", height: "1px", background: "var(--warm-gold)" }} />
          <span style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--warm-gold)", fontWeight: 400 }}>Abuja, Nigeria</span>
        </motion.div>

        <motion.h1 className="serif" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: "clamp(40px, 6vw, 90px)", lineHeight: 1.05, fontWeight: 500, color: "var(--cream)", marginBottom: "24px", letterSpacing: "-0.02em" }}>
          Where Luxury<br />Meets<br />Creativity
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.38 }}
          style={{ fontSize: "16px", lineHeight: 1.78, color: "rgba(245,240,232,0.75)", maxWidth: "440px", marginBottom: "44px", fontWeight: 300 }}>
          Akrafthaus is a luxury lifestyle destination where hospitality, creativity, and innovation come together to inspire, connect, and elevate every experience.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }}
          style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <a href="#about" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "15px 32px", background: "var(--warm-brown)", color: "#fff", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", fontWeight: 500, transition: "opacity 0.25s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.82")} onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
            Explore Akrafthaus
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "15px 32px", border: "1px solid rgba(245,240,232,0.4)", color: "rgba(245,240,232,0.88)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", fontWeight: 500, transition: "all 0.25s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,240,232,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}>
            Book a Stay
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.75 }}
          style={{ display: "flex", gap: "40px", marginTop: "56px", paddingTop: "36px", borderTop: "1px solid rgba(245,240,232,0.15)", flexWrap: "wrap" }}>
          {[["5★", "Rated Hotel"], ["24/7", "Concierge"], ["200+", "Events Hosted"]].map(([num, label]) => (
            <div key={label}>
              <div className="serif" style={{ fontSize: "22px", fontWeight: 500, color: "var(--warm-gold)", lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(245,240,232,0.5)", marginTop: "6px" }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div style={{ position: "absolute", bottom: "36px", left: "72px", display: "flex", gap: "8px", zIndex: 3 }}>
        {HERO_SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrentSlide(i)}
            style={{ width: i === currentSlide ? "28px" : "8px", height: "8px", borderRadius: "4px", border: "none", cursor: "pointer", padding: 0, background: i === currentSlide ? "var(--warm-gold)" : "rgba(245,240,232,0.35)", transition: "all 0.35s ease" }}
            aria-label={"Slide " + (i + 1)} />
        ))}
      </div>

      <div style={{ position: "absolute", bottom: "36px", right: "48px", zIndex: 3, display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ width: "20px", height: "1px", background: "rgba(245,240,232,0.4)" }} />
        <span style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,240,232,0.5)" }}>
          {["Restaurant", "Bar & Lounge", "Bedroom Suite", "Reception"][currentSlide]}
        </span>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FEATURE STRIP
───────────────────────────────────────────── */
const FEATURES = [
  { label: "Luxury Living", icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="10" height="10" rx="1"/><rect x="18" y="4" width="10" height="10" rx="1"/><rect x="4" y="18" width="10" height="10" rx="1"/><rect x="18" y="18" width="10" height="10" rx="1"/></svg> },
  { label: "Boutique Hotel", icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 28V13L16 4l12 9v15"/><path d="M4 28h24"/><rect x="12" y="18" width="8" height="10" rx="1"/></svg> },
  { label: "Creative Spaces", icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6l6 6-12 12-7 1 1-7L20 6z"/><circle cx="20" cy="12" r="2" fill="currentColor" stroke="none"/><path d="M6 26h6"/></svg> },
  { label: "Fine Dining", icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><line x1="16" y1="4" x2="16" y2="28"/><line x1="10" y1="4" x2="10" y2="14"/><line x1="22" y1="4" x2="22" y2="14"/><path d="M10 14 a6 6 0 0 0 12 0"/></svg> },
  { label: "Tech Innovation", icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="26" height="17" rx="2"/><line x1="11" y1="28" x2="21" y2="28"/><line x1="16" y1="22" x2="16" y2="28"/></svg> },
  { label: "German School", icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="24" height="20" rx="2"/><line x1="4" y1="12" x2="28" y2="12"/><circle cx="16" cy="6" r="3"/><line x1="10" y1="18" x2="22" y2="18"/><line x1="10" y1="22" x2="18" y2="22"/></svg> },
  { label: "Art & Culture", icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="16" r="12"/><path d="M11 19c1 2 3 3 5 3s4-1 5-3"/><circle cx="11.5" cy="13.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="20.5" cy="13.5" r="1.5" fill="currentColor" stroke="none"/></svg> },
];

function FeatureStrip() {
  const [ref, visible] = useInView(0.1);
  return (
    <div style={{ background: "var(--sand)" }}>
      <div ref={ref} className="feature-strip"
        style={{ margin: "0 80px", marginTop: "-36px", background: "rgba(240,234,224,0.92)", border: "1px solid rgba(139,107,71,0.07)", borderRadius: "6px", padding: "20px 24px", display: "grid", gridTemplateColumns: "repeat(7, 1fr)", boxShadow: "0 1px 8px rgba(0,0,0,0.05)", backdropFilter: "blur(10px)", position: "relative", zIndex: 10 }}>
        {FEATURES.map(({ label, icon }, i) => (
          <motion.div key={label} initial={{ opacity: 0, y: 14 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: i * 0.07 }} whileHover={{ y: -4, transition: { duration: 0.18 } }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", padding: "4px 10px", cursor: "pointer", borderRight: i < FEATURES.length - 1 ? "1px solid rgba(139,107,71,0.07)" : "none" }}>
            <div style={{ color: "rgba(139,107,71,0.65)", lineHeight: 0, transform: "scale(0.72)", transformOrigin: "center" }}>{icon}</div>
            <span style={{ fontSize: "11px", color: "rgba(28,26,23,0.5)", textAlign: "center", fontWeight: 400, lineHeight: 1.3 }}>{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DESIGNED FOR
───────────────────────────────────────────── */
function DesignedFor() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} id="about" className="section-pad" style={{ background: "var(--sand)", padding: "100px 64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div>
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ marginBottom: "20px" }}>Fine Living Spaces</motion.p>
            <motion.h2 className="serif" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} style={{ fontSize: "clamp(30px, 3.5vw, 52px)", lineHeight: 1.1, fontWeight: 500, color: "var(--charcoal)", marginBottom: "28px" }}>
              Designed for<br />extraordinary<br />experiences
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--text-muted)", maxWidth: "420px", marginBottom: "36px" }}>
              Discover thoughtfully curated spaces that blend luxury, comfort, and creativity — built for the way you live, work, and connect.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="#" className="btn-gold">Find Out More</a>
              <a href="#" className="btn-outline">View Packages</a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, delay: 0.15 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {[{ src: "/about1.jpg", alt: "Living Space" }, { src: "/about2.jpg", alt: "Lounge" }, { src: "/about3.jpg", alt: "Suite" }, { src: "/about4.jpg", alt: "Amenities" }].map(({ src, alt }, i) => (
                <motion.div key={src} className="card-wrap" initial={{ opacity: 0, y: 16 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 + i * 0.08 }} style={{ overflow: "hidden", borderRadius: "6px" }}>
                  <img src={src} alt={alt} className="card-img" style={{ width: "100%", height: "240px", objectFit: "cover", objectPosition: "center", display: "block" }} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CREATIVE STUDIO
───────────────────────────────────────────── */
function CreativeStudio() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} className="section-pad" style={{ background: "#fff", padding: "100px 64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9 }} className="card-wrap" style={{ overflow: "hidden" }}>
            <img src="/studio.jpg" alt="Creative Studio" className="card-img studio-img" style={{ width: "100%", height: "520px", objectFit: "cover", display: "block" }} />
          </motion.div>
          <div>
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ marginBottom: "20px" }}>Powered by Creativity</motion.p>
            <motion.h2 className="serif" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} style={{ fontSize: "clamp(26px, 3vw, 46px)", lineHeight: 1.15, fontWeight: 500, color: "var(--charcoal)", marginBottom: "24px" }}>Creative Studio</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "32px" }}>
              A sanctuary for the innovative. Our studio provides state-of-the-art technology and flexible formats, transforming ideas into seamless productions.
            </motion.p>
            {["Privacy-first design environment", "Collaborative workspace for all creatives"].map(text => (
              <motion.div key={text} initial={{ opacity: 0, x: -12 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                <span style={{ color: "var(--warm-gold)", fontSize: "10px", marginTop: "5px" }}>✦</span>
                <span style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6 }}>{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   BOUTIQUE HOTEL
───────────────────────────────────────────── */
function BoutiqueHotel() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} className="section-pad" style={{ background: "var(--sand)", padding: "100px 64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="two-col-reverse" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div>
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ marginBottom: "20px" }}>Our Boutique Hotel</motion.p>
            <motion.h2 className="serif" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} style={{ fontSize: "clamp(26px, 3vw, 46px)", lineHeight: 1.15, fontWeight: 500, color: "var(--charcoal)", marginBottom: "24px" }}>Boutique Hotel</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "36px" }}>
              An intentional luxury. Our hotel is crafted to provide a serene escape from the city, blending character, hospitality, and a genuine warmth that will have you returning repeatedly.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={visible ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.3 }} style={{ display: "flex", gap: "48px", marginBottom: "36px", flexWrap: "wrap" }}>
              <div>
                <div className="serif" style={{ fontSize: "32px", fontWeight: 500, color: "var(--warm-brown)" }}>42</div>
                <div style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>Unique Rooms</div>
              </div>
              <div>
                <div className="serif" style={{ fontSize: "32px", fontWeight: 500, color: "var(--warm-brown)" }}>24/7</div>
                <div style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>Concierge Service</div>
              </div>
            </motion.div>
            <Link href="/hotel" className="btn-gold">Make Your Stay</Link>
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, delay: 0.1 }} className="card-wrap" style={{ overflow: "hidden" }}>
            <img src="/hotel.jpg" alt="Boutique Hotel" className="card-img hotel-img" style={{ width: "100%", height: "520px", objectFit: "cover", display: "block" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   LANGUAGE SCHOOL
───────────────────────────────────────────── */
const LANG_FEATURES = [
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>, label: "All Levels", desc: "Beginner to advanced — structured courses for every starting point." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label: "Flexible Schedules", desc: "Morning, evening, and weekend classes designed around your lifestyle." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, label: "Native Instructors", desc: "Learn from certified native-speaking German tutors and educators." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, label: "Immersive Learning", desc: "Interactive digital tools, cultural sessions, and real-world practice." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, label: "Certification", desc: "Earn recognised language certificates to support study or work abroad." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, label: "Visa & Study Prep", desc: "Dedicated support for those planning to study or relocate to Germany." },
];

function LanguageSchool() {
  const [ref, visible] = useInView(0.1);
  return (
    <section ref={ref} id="language-school" className="section-pad" style={{ background: "#fff", padding: "100px 64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ marginBottom: "64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px", flexShrink: 0 }}>
              <div style={{ width: "28px", height: "4px", background: "#1C1A17", borderRadius: "2px" }} />
              <div style={{ width: "28px", height: "4px", background: "#D00", borderRadius: "2px" }} />
              <div style={{ width: "28px", height: "4px", background: "#FFCE00", borderRadius: "2px" }} />
            </div>
            <p className="eyebrow">German Language School</p>
          </div>
          <div className="lang-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "flex-end" }}>
            <motion.h2 className="serif" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} style={{ fontSize: "clamp(30px, 3.5vw, 52px)", lineHeight: 1.1, fontWeight: 500, color: "var(--charcoal)" }}>
              Open Doors to<br />Germany & Beyond
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
              <p style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "28px" }}>
                Akrafthaus German Language School brings world-class language education right to Abuja. Whether you're preparing for a career move, academic studies, or simply broadening your horizons — we have a programme for you.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/language-school" className="btn-gold">Enrol Now</Link>
                <Link href="/language-school" className="btn-outline">View Programmes</Link>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="lang-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "64px" }}>
          {LANG_FEATURES.map(({ icon, label, desc }, i) => (
            <motion.div key={label} className="lang-feature" initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}>
              <div style={{ color: "var(--warm-brown)", marginBottom: "4px" }}>{icon}</div>
              <div style={{ fontSize: "13px", fontWeight: 500, color: "var(--charcoal)", marginBottom: "4px" }}>{label}</div>
              <div style={{ fontSize: "12.5px", color: "var(--text-muted)", lineHeight: 1.65 }}>{desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.5 }}
          style={{ display: "flex", gap: "0", flexWrap: "wrap", background: "var(--sand)", border: "1px solid rgba(139,107,71,0.1)", borderRadius: "6px", overflow: "hidden" }}>
          {[["A1–C2", "CEFR Levels Covered"], ["100+", "Graduates"], ["3", "Intakes Per Year"], ["1:1", "Tutoring Available"]].map(([num, label], i, arr) => (
            <div key={label} style={{ flex: "1", minWidth: "140px", padding: "28px 24px", textAlign: "center", borderRight: i < arr.length - 1 ? "1px solid rgba(139,107,71,0.1)" : "none" }}>
              <div className="serif" style={{ fontSize: "28px", fontWeight: 500, color: "var(--warm-brown)", lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: "8px" }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────── */
const TESTIMONIALS = [
  { quote: "Akrafthaus is more than a place to stay — it's a complete experience. Luxury, creativity, and comfort in perfect harmony.", name: "Sarah M.", role: "Guest", avatar: "https://i.pravatar.cc/80?img=47" },
  { quote: "The creative studio and ambiance are unmatched. It's where ideas come alive and collaborations happen effortlessly.", name: "Daniel K.", role: "Creative Director", avatar: "https://i.pravatar.cc/80?img=12" },
  { quote: "The German language programme opened doors I never imagined. Professional tutors and a structured, welcoming environment.", name: "Amaka O.", role: "Language School Student", avatar: "https://i.pravatar.cc/80?img=25" },
  { quote: "Every detail has been thoughtfully considered. A truly extraordinary place that redefines what hospitality means.", name: "Priya K.", role: "Designer", avatar: "https://i.pravatar.cc/80?img=21" },
];

function Testimonials() {
  const [ref, visible] = useInView(0.1);
  const [active, setActive] = useState(0);
  const visible3 = Array.from({ length: 3 }, (_, i) => TESTIMONIALS[(active + i) % TESTIMONIALS.length]);
  return (
    <section ref={ref} className="section-pad" style={{ background: "var(--sand)", padding: "100px 64px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: "52px" }}>
          <p className="eyebrow" style={{ marginBottom: "16px" }}>Guest Reviews</p>
          <h2 className="serif" style={{ fontSize: "clamp(26px, 3vw, 44px)", fontWeight: 500, color: "var(--charcoal)" }}>What Our Guests Say</h2>
        </motion.div>
        <div className="testi-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "36px" }}>
          {visible3.map(({ quote, name, role, avatar }, i) => (
            <motion.div key={name + active} className="testi-card" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.1 }}>
              <div style={{ fontSize: "32px", color: "var(--warm-gold)", lineHeight: 1, marginBottom: "18px", fontFamily: "'Playfair Display',serif" }}>"</div>
              <p style={{ fontSize: "13.5px", lineHeight: 1.78, color: "var(--text-muted)", marginBottom: "28px", fontStyle: "italic" }}>{quote}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img src={avatar} alt={name} style={{ width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 500, color: "var(--charcoal)", marginBottom: "2px" }}>{name}</div>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>{role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} className="dot-btn" onClick={() => setActive(i)} style={{ background: i === active ? "var(--warm-gold)" : "rgba(139,107,71,0.2)" }} aria-label={"Testimonial " + (i + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   GALLERY
───────────────────────────────────────────── */
const GALLERY_IMGS = ["/gallery1.jpg","/gallery2.jpg","/gallery3.jpg","/gallery4.jpg","/gallery5.jpg","/gallery6.jpg"];

function Gallery() {
  const [ref, visible] = useInView(0.1);
  return (
    <section ref={ref} className="section-pad" style={{ background: "#fff", padding: "100px 64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: "52px" }}>
          <p className="eyebrow" style={{ marginBottom: "16px" }}>Photo Showcase</p>
          <h2 className="serif" style={{ fontSize: "clamp(26px, 3vw, 44px)", fontWeight: 500, color: "var(--charcoal)" }}>Gallery</h2>
        </motion.div>
        <div className="gal-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
          {GALLERY_IMGS.map((src, i) => (
            <motion.div key={i} className="gal-wrap" initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.08 }}>
              <img src={src} alt="" className="gal-img" style={{ height: i < 3 ? "220px" : "180px" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CTA BANNER
───────────────────────────────────────────── */
function CTABanner() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ position: "relative", overflow: "hidden", minHeight: "420px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img src="/cta-bg.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(14,10,6,0.7)" }} />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9 }} style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "60px 24px" }}>
        <h2 className="serif" style={{ fontSize: "clamp(32px, 5vw, 72px)", fontWeight: 500, color: "var(--cream)", lineHeight: 1.1, marginBottom: "36px", letterSpacing: "-0.01em" }}>
          Stay. Create.<br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Build. Belong.</em>
        </h2>
        <a href="#contact" className="btn-gold" style={{ fontSize: "11px" }}>Book Your Experience</a>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer-wrap" style={{ background: "var(--cream)", padding: "64px 64px 28px", borderTop: "1px solid rgba(139,107,71,0.12)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1.2fr", gap: "48px", marginBottom: "48px", alignItems: "start" }}>
          <div className="footer-brand-col">
            <div style={{ marginBottom: "16px" }}>
              <img src="/logo.png" alt="AKRAFTHAUS" style={{ height: "44px", width: "auto", objectFit: "contain" }} />
            </div>
            <p style={{ fontSize: "12.5px", lineHeight: 1.75, color: "var(--text-muted)", maxWidth: "210px" }}>A luxury lifestyle destination where hospitality, creativity, and innovation come together.</p>
          </div>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.06em", color: "var(--charcoal)", marginBottom: "18px" }}>Explore</div>
            {[["Apartments", "/apartments"], ["Hotel", "/hotel"], ["Restaurant", "/restaurant"], ["Creative Studio", "/creative-studio"], ["Tech Hub", "/tech-hub"], ["Language School", "/language-school"], ["Gallery", "/gallery"]].map(([l, href]) => (
              <Link key={l} href={href} className="footer-link">{l}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.06em", color: "var(--charcoal)", marginBottom: "18px" }}>Company</div>
            {["About Us","Careers","Press","Blog","Contact"].map(l => <a key={l} href="#" className="footer-link">{l}</a>)}
          </div>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.06em", color: "var(--charcoal)", marginBottom: "18px" }}>Support</div>
            {["FAQs","Privacy Policy","Terms & Conditions","Booking Policy"].map(l => <a key={l} href="#" className="footer-link">{l}</a>)}
          </div>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.06em", color: "var(--charcoal)", marginBottom: "18px" }}>Connect With Us</div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
              <a href="#" className="social-icon-btn" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="TikTok">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
              <a href="https://wa.me/2347033869555" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="WhatsApp">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[{ icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.06 6.06l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>, text: "+234 703 386 9555" }, { icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>, text: "hello@akrafthaus.ng" }, { icon: <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></>, text: "Abuja, Nigeria" }].map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--warm-brown)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>{icon}</svg>
                  <span style={{ fontSize: "12.5px", color: "var(--text-muted)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(139,107,71,0.12)", paddingTop: "24px", display: "flex", justifyContent: "center" }}>
          <span style={{ fontSize: "11.5px", color: "var(--text-muted)" }}>© 2026 Akrafthaus. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   WHATSAPP BUTTON
───────────────────────────────────────────── */
function WhatsAppButton() {
  return (
    <a href="https://wa.me/2347033869555" target="_blank" rel="noopener noreferrer" className="whatsapp-btn" aria-label="Chat on WhatsApp">
      <div className="whatsapp-pulse" />
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white" style={{ position: "relative", zIndex: 1 }}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

/* ─────────────────────────────────────────────
   ROOT — NO <Navbar /> here, it's in layout.tsx
───────────────────────────────────────────── */
export default function AkrafthausPage() {
  return (
    <>
      <FontLoader />
      <Hero />
      <FeatureStrip />
      <DesignedFor />
      <CreativeStudio />
      <BoutiqueHotel />
      <LanguageSchool />
      <Testimonials />
      <Gallery />
      <CTABanner />
      <Footer />
      <WhatsAppButton />
    </>
  );
}