"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
   FONTS & GLOBAL STYLES
───────────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --cream:       #F5F0E8;
      --off-white:   #EDE8DF;
      --charcoal:    #1C1A17;
      --charcoal2:   #2A2520;
      --warm-gold:   #C9A96E;
      --warm-brown:  #8B6B47;
      --gold-dim:    rgba(201,169,110,0.3);
      --sand:        #F0EAE0;
      --text-muted:  #7A6E64;
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
      display: inline-block;
      padding: 13px 32px;
      background: var(--warm-brown);
      color: var(--cream);
      font-size: 10px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.25s;
      white-space: nowrap;
    }
    .btn-gold:hover { opacity: 0.82; }

    .btn-outline {
      display: inline-block;
      padding: 13px 32px;
      border: 1px solid var(--warm-brown);
      color: var(--warm-brown);
      font-size: 10px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 500;
      transition: background 0.25s, color 0.25s;
      white-space: nowrap;
    }
    .btn-outline:hover { background: var(--warm-brown); color: var(--cream); }

    .eyebrow {
      font-size: 10px;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: var(--warm-brown);
      font-weight: 400;
    }

    .card-img { transition: transform 0.7s ease; }
    .card-wrap:hover .card-img { transform: scale(1.04); }

    .gal-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
      transition: transform 0.6s ease;
    }
    .gal-wrap:hover .gal-img { transform: scale(1.06); }
    .gal-wrap { overflow: hidden; }

    .footer-link {
      color: var(--text-muted);
      font-size: 12.5px;
      text-decoration: none;
      line-height: 2;
      display: block;
      transition: color 0.2s;
    }
    .footer-link:hover { color: var(--warm-brown); }

    .testi-card {
      background: var(--sand);
      padding: 32px;
      border: 1px solid rgba(139,107,71,0.1);
      border-radius: 4px;
    }

    .dot-btn {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      padding: 0;
      transition: background 0.2s;
    }

    .social-icon-btn {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid rgba(139,107,71,0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
      text-decoration: none;
      transition: all 0.2s;
      flex-shrink: 0;
    }
    .social-icon-btn:hover {
      border-color: var(--warm-brown);
      color: var(--warm-brown);
    }
  `}</style>
);

/* ─────────────────────────────────────────────
   ANIMATION HELPERS
───────────────────────────────────────────── */
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
   NAVBAR
───────────────────────────────────────────── */
const NAV_LINKS = ["Apartments", "Hotel", "Creative Studio", "Restaurant", "Tech Hub", "Gallery"];

function Navbar() {
  const [activeLink, setActiveLink] = useState("Apartments");

  return (
    <motion.nav
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "relative",
        zIndex: 100,
        height: "72px",
        padding: "0 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
        background: "#fff",
        borderBottom: "1px solid rgba(139,107,71,0.1)",
      }}
    >
      <div style={{ flexShrink: 0 }}>
        <img
          src="/logo.png"
          alt="AKRAFTHAUS"
          style={{ height: "40px", width: "auto", objectFit: "contain" }}
        />
      </div>

      <ul style={{ display: "flex", gap: "28px", listStyle: "none", alignItems: "center", flexShrink: 1 }}>
        {NAV_LINKS.map(l => (
          <li key={l} style={{ flexShrink: 0 }}>
            <a
              href="#"
              onClick={e => { e.preventDefault(); setActiveLink(l); }}
              style={{
                color: activeLink === l ? "var(--charcoal)" : "var(--text-muted)",
                fontSize: "13px",
                fontWeight: activeLink === l ? 500 : 400,
                letterSpacing: "0.02em",
                textDecoration: "none",
                paddingBottom: "4px",
                borderBottom: activeLink === l
                  ? "1.5px solid var(--warm-gold)"
                  : "1.5px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        style={{
          flexShrink: 0,
          padding: "10px 24px",
          background: "var(--warm-brown)",
          color: "#fff",
          fontSize: "12px",
          letterSpacing: "0.06em",
          textDecoration: "none",
          fontWeight: 500,
          borderRadius: "6px",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
      >
        Book Now
      </a>
    </motion.nav>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function Hero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "580px",
        overflow: "hidden",
        background: "var(--charcoal)",
        display: "flex",
        alignItems: "flex-end",
        paddingBottom: "120px",
      }}
    >
      <img
        src="/hero.jpg"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 30%",
          display: "block",
        }}
      />
      <div style={{ position: "absolute", inset: 0, background: "rgba(16,12,8,0.38)", zIndex: 1 }} />
      <div
        style={{
          position: "relative",
          zIndex: 3,
          paddingLeft: "72px",
          paddingRight: "56px",
          width: "100%",
          maxWidth: "680px",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: "10px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--warm-gold)",
            marginBottom: "20px",
            fontWeight: 400,
          }}
        >
          Excellence in Living
        </motion.p>

        <motion.h1
          className="serif"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(44px, 5.5vw, 76px)",
            lineHeight: 1.08,
            fontWeight: 500,
            color: "var(--cream)",
            marginBottom: "22px",
            letterSpacing: "-0.01em",
          }}
        >
          Where Luxury Meets<br />Creativity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          style={{
            fontSize: "15px",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.88)",
            maxWidth: "460px",
            marginBottom: "40px",
            fontWeight: 300,
          }}
        >
          Akrafthaus is a luxury lifestyle destination where hospitality, creativity,
          and innovation come together to inspire, connect, and elevate every experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}
        >
          <a href="#about" className="btn-gold">Explore Akrafthaus</a>
          <a
            href="#gallery"
            className="btn-outline"
            style={{ borderColor: "rgba(245,240,232,0.38)", color: "rgba(245,240,232,0.92)" }}
          >
            View Gallery
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FEATURE STRIP
───────────────────────────────────────────── */
const FEATURES = [
  {
    label: "Luxury Living",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="10" height="10" rx="1"/>
        <rect x="18" y="4" width="10" height="10" rx="1"/>
        <rect x="4" y="18" width="10" height="10" rx="1"/>
        <rect x="18" y="18" width="10" height="10" rx="1"/>
      </svg>
    ),
  },
  {
    label: "Boutique Hotel",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 28V13L16 4l12 9v15"/>
        <path d="M4 28h24"/>
        <rect x="12" y="18" width="8" height="10" rx="1"/>
      </svg>
    ),
  },
  {
    label: "Creative Spaces",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6l6 6-12 12-7 1 1-7L20 6z"/>
        <circle cx="20" cy="12" r="2" fill="currentColor" stroke="none"/>
        <path d="M6 26h6"/>
      </svg>
    ),
  },
  {
    label: "Fine Dining",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="16" y1="4" x2="16" y2="28"/>
        <line x1="10" y1="4" x2="10" y2="14"/>
        <line x1="22" y1="4" x2="22" y2="14"/>
        <path d="M10 14 a6 6 0 0 0 12 0"/>
      </svg>
    ),
  },
  {
    label: "Tech Innovation",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="26" height="17" rx="2"/>
        <line x1="11" y1="28" x2="21" y2="28"/>
        <line x1="16" y1="22" x2="16" y2="28"/>
      </svg>
    ),
  },
  {
    label: "Art & Culture",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12"/>
        <path d="M11 19c1 2 3 3 5 3s4-1 5-3"/>
        <circle cx="11.5" cy="13.5" r="1.5" fill="currentColor" stroke="none"/>
        <circle cx="20.5" cy="13.5" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
];

function FeatureStrip() {
  const [ref, visible] = useInView(0.1);
  return (
    <div style={{ background: "var(--sand)", paddingBottom: "0" }}>
      <div
        ref={ref}
        style={{
          position: "relative",
          zIndex: 10,
          margin: "0 80px",
          marginTop: "-36px",
          background: "rgba(240,234,224,0.72)",
          border: "1px solid rgba(139,107,71,0.07)",
          borderRadius: "6px",
          padding: "20px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
          backdropFilter: "blur(10px)",
        }}
      >
        {FEATURES.map(({ label, icon }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 14 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.18 } }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              padding: "4px 10px",
              cursor: "pointer",
              borderRight: i < 5 ? "1px solid rgba(139,107,71,0.07)" : "none",
            }}
          >
            <div style={{ color: "rgba(139,107,71,0.65)", lineHeight: 0, transform: "scale(0.72)", transformOrigin: "center" }}>{icon}</div>
            <span style={{ fontSize: "11px", color: "rgba(28,26,23,0.5)", textAlign: "center", fontWeight: 400, letterSpacing: "0.01em", lineHeight: 1.3 }}>
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DESIGNED FOR SECTION
───────────────────────────────────────────── */
function DesignedFor() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} id="about" style={{ background: "var(--sand)", padding: "100px 64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
        <div>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ marginBottom: "20px" }}>
            Fine Living Spaces
          </motion.p>
          <motion.h2 className="serif" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} style={{ fontSize: "clamp(32px, 3.5vw, 52px)", lineHeight: 1.1, fontWeight: 500, color: "var(--charcoal)", marginBottom: "28px" }}>
            Designed for<br />extraordinary<br />experiences
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--text-muted)", maxWidth: "420px", marginBottom: "36px" }}>
            Discover thoughtfully curated interior spaces that blend artistry and function.
            Luxury, creativity, and comfort woven into every corner.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} style={{ display: "flex", gap: "16px" }}>
            <a href="#" className="btn-gold">Find Out More</a>
            <a href="#" className="btn-outline">View Packages</a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, delay: 0.15 }} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          {["/project1.jpg", "/project2.jpg", "/project3.jpg", "/about.jpg"].map((src, i) => (
            <div key={i} className="card-wrap" style={{ overflow: "hidden", borderRadius: "2px" }}>
              <img src={src} alt="" className="card-img" style={{ width: "100%", height: i === 0 ? "280px" : "180px", objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </motion.div>
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
    <section ref={ref} style={{ background: "#fff", padding: "100px 64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
        <motion.div initial={{ opacity: 0, x: -30 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9 }} className="card-wrap" style={{ overflow: "hidden" }}>
          <img src="/studio.jpg" alt="Creative Studio" className="card-img" style={{ width: "100%", height: "520px", objectFit: "cover", display: "block" }} />
        </motion.div>

        <div>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ marginBottom: "20px" }}>
            Powered by Creativity
          </motion.p>
          <motion.h2 className="serif" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} style={{ fontSize: "clamp(28px, 3vw, 46px)", lineHeight: 1.15, fontWeight: 500, color: "var(--charcoal)", marginBottom: "24px" }}>
            Creative Studio
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "32px" }}>
            A sanctuary for the innovative. Our studio provides state-of-the-art technology
            and flexible formats, transforming ideas into seamless productions.
          </motion.p>
          {[
            { icon: "✦", text: "Privacy-first design environment" },
            { icon: "✦", text: "Collaborative workspace for all creatives" },
          ].map(({ icon, text }) => (
            <motion.div key={text} initial={{ opacity: 0, x: -12 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
              <span style={{ color: "var(--warm-gold)", fontSize: "10px", marginTop: "5px" }}>{icon}</span>
              <span style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6 }}>{text}</span>
            </motion.div>
          ))}
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
    <section ref={ref} style={{ background: "var(--sand)", padding: "100px 64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
        <div>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ marginBottom: "20px" }}>
            Our Boutique Hotel
          </motion.p>
          <motion.h2 className="serif" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} style={{ fontSize: "clamp(28px, 3vw, 46px)", lineHeight: 1.15, fontWeight: 500, color: "var(--charcoal)", marginBottom: "24px" }}>
            Boutique Hotel
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "36px" }}>
            An intentional luxury. Our hotel is crafted to provide a serene escape from the city,
            blending character, hospitality, and a genuine warmth that will have you returning repeatedly.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={visible ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.3 }} style={{ display: "flex", gap: "48px", marginBottom: "36px" }}>
            <div>
              <div className="serif" style={{ fontSize: "32px", fontWeight: 500, color: "var(--warm-brown)" }}>42</div>
              <div style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>Unique Rooms</div>
            </div>
            <div>
              <div className="serif" style={{ fontSize: "32px", fontWeight: 500, color: "var(--warm-brown)" }}>24/7</div>
              <div style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>Concierge Service</div>
            </div>
          </motion.div>
          <a href="#" className="btn-gold">Make Your Stay</a>
        </div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, delay: 0.1 }} className="card-wrap" style={{ overflow: "hidden" }}>
          <img src="/hotel.jpg" alt="Boutique Hotel" className="card-img" style={{ width: "100%", height: "520px", objectFit: "cover", display: "block" }} />
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    quote: "Akrafthaus is more than a place to stay — it's a complete experience. Luxury, creativity, and comfort in perfect harmony.",
    name: "Sarah M.",
    role: "Guest",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    quote: "The creative studio and ambiance are unmatched. It's where ideas come alive and collaborations happen effortlessly.",
    name: "Daniel K.",
    role: "Creative Director",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    quote: "Exceptional service, stunning spaces, and an atmosphere that makes you want to stay longer than planned.",
    name: "James T.",
    role: "Entrepreneur",
    avatar: "https://i.pravatar.cc/80?img=33",
  },
  {
    quote: "Every detail has been thoughtfully considered. A truly extraordinary place that redefines what hospitality means.",
    name: "Priya K.",
    role: "Designer",
    avatar: "https://i.pravatar.cc/80?img=21",
  },
];

function Testimonials() {
  const [ref, visible] = useInView(0.1);
  const [active, setActive] = useState(0);

  const visible3 = Array.from({ length: 3 }, (_, i) => TESTIMONIALS[(active + i) % TESTIMONIALS.length]);

  return (
    <section ref={ref} style={{ background: "#fff", padding: "100px 64px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "52px" }}
        >
          <p className="eyebrow" style={{ marginBottom: "16px" }}>Guest Reviews</p>
          <h2 className="serif" style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 500, color: "var(--charcoal)" }}>
            What Our Guests Say
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "36px" }}>
          {visible3.map(({ quote, name, role, avatar }, i) => (
            <motion.div
              key={name + active}
              className="testi-card"
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div style={{ fontSize: "32px", color: "var(--warm-gold)", lineHeight: 1, marginBottom: "18px", fontFamily: "'Playfair Display', serif" }}>
                "
              </div>
              <p style={{ fontSize: "13.5px", lineHeight: 1.78, color: "var(--text-muted)", marginBottom: "28px", fontStyle: "italic" }}>
                {quote}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img
                  src={avatar}
                  alt={name}
                  style={{ width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                />
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
            <button
              key={i}
              className="dot-btn"
              onClick={() => setActive(i)}
              style={{ background: i === active ? "var(--warm-gold)" : "rgba(139,107,71,0.2)" }}
              aria-label={"Show testimonial " + (i + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   GALLERY
───────────────────────────────────────────── */
const GALLERY_IMGS = [
  "/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg",
  "/gallery4.jpg", "/gallery5.jpg", "/gallery6.jpg",
];

function Gallery() {
  const [ref, visible] = useInView(0.1);
  return (
    <section ref={ref} style={{ background: "var(--sand)", padding: "100px 64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: "52px" }}>
          <p className="eyebrow" style={{ marginBottom: "16px" }}>Photo Showcase</p>
          <h2 className="serif" style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 500, color: "var(--charcoal)" }}>Gallery</h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
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
    <section ref={ref} style={{ position: "relative", overflow: "hidden", minHeight: "480px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img src="/cta-bg.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(14,10,6,0.7)" }} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px" }}
      >
        <h2 className="serif" style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 500, color: "var(--cream)", lineHeight: 1.1, marginBottom: "36px", letterSpacing: "-0.01em" }}>
          Stay. Create.<br />
          <em style={{ fontStyle: "italic", fontWeight: 400 }}>Build. Belong.</em>
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
    <footer style={{ background: "var(--cream)", padding: "64px 64px 28px", borderTop: "1px solid rgba(139,107,71,0.12)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1.2fr", gap: "48px", marginBottom: "48px", alignItems: "start" }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: "16px" }}>
              <img src="/logo.png" alt="AKRAFTHAUS" style={{ height: "44px", width: "auto", objectFit: "contain" }} />
            </div>
            <p style={{ fontSize: "12.5px", lineHeight: 1.75, color: "var(--text-muted)", maxWidth: "210px" }}>
              A luxury lifestyle destination where hospitality, creativity, and innovation come together.
            </p>
          </div>

          {/* Explore */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.06em", color: "var(--charcoal)", marginBottom: "18px" }}>Explore</div>
            {["Apartments", "Hotel", "Restaurant", "Creative Studio", "Tech Hub", "Gallery"].map(l => (
              <a key={l} href="#" className="footer-link">{l}</a>
            ))}
          </div>

          {/* Company */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.06em", color: "var(--charcoal)", marginBottom: "18px" }}>Company</div>
            {["About Us", "Careers", "Press", "Blog", "Contact"].map(l => (
              <a key={l} href="#" className="footer-link">{l}</a>
            ))}
          </div>

          {/* Support */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.06em", color: "var(--charcoal)", marginBottom: "18px" }}>Support</div>
            {["FAQs", "Privacy Policy", "Terms & Conditions", "Booking Policy"].map(l => (
              <a key={l} href="#" className="footer-link">{l}</a>
            ))}
          </div>

          {/* Connect */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.06em", color: "var(--charcoal)", marginBottom: "18px" }}>Connect With Us</div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>

              {/* Instagram */}
              <a href="#" className="social-icon-btn" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" className="social-icon-btn" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="social-icon-btn" aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" className="social-icon-btn" aria-label="YouTube">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--warm-brown)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.06 6.06l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span style={{ fontSize: "12.5px", color: "var(--text-muted)" }}>+234 703 386 9555</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--warm-brown)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span style={{ fontSize: "12.5px", color: "var(--text-muted)" }}>hello@akrafthaus.ng</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--warm-brown)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span style={{ fontSize: "12.5px", color: "var(--text-muted)" }}>Abuja, Nigeria</span>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(139,107,71,0.12)", paddingTop: "24px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <span style={{ fontSize: "11.5px", color: "var(--text-muted)" }}>© 2025 Akrafthaus. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   ROOT
───────────────────────────────────────────── */
export default function AkrafthausPage() {
  return (
    <>
      <FontLoader />
      <Navbar />
      <Hero />
      <FeatureStrip />
      <DesignedFor />
      <CreativeStudio />
      <BoutiqueHotel />
      <Testimonials />
      <Gallery />
      <CTABanner />
      <Footer />
    </>
  );
}