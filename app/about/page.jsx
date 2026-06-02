"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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

    .footer-link { color: var(--text-muted); font-size: 12.5px; text-decoration: none; line-height: 2; display: block; transition: color 0.2s; }
    .footer-link:hover { color: var(--warm-brown); }
    .social-icon-btn { width: 36px; height: 36px; border-radius: 50%; border: 1px solid rgba(139,107,71,0.25); display: flex; align-items: center; justify-content: center; color: var(--text-muted); text-decoration: none; transition: all 0.2s; flex-shrink: 0; }
    .social-icon-btn:hover { border-color: var(--warm-brown); color: var(--warm-brown); }

    .value-card { padding: 32px 28px; background: #fff; border-radius: 8px; border: 1px solid rgba(139,107,71,0.08); transition: all 0.25s; }
    .value-card:hover { border-color: rgba(139,107,71,0.2); transform: translateY(-4px); box-shadow: 0 12px 36px rgba(139,107,71,0.1); }

    .pillar-card { padding: 28px; background: rgba(240,234,224,0.6); border: 1px solid rgba(139,107,71,0.1); border-radius: 6px; transition: all 0.25s; }
    .pillar-card:hover { background: rgba(240,234,224,0.95); border-color: rgba(139,107,71,0.25); transform: translateY(-3px); box-shadow: 0 8px 24px rgba(139,107,71,0.08); }

    .whatsapp-btn { position: fixed; bottom: 24px; right: 24px; z-index: 999; width: 54px; height: 54px; border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(37,211,102,0.4); text-decoration: none; transition: transform 0.2s ease; }
    .whatsapp-btn:hover { transform: scale(1.1); }
    .whatsapp-pulse { position: absolute; inset: 0; border-radius: 50%; background: #25D366; animation: waPulse 2s ease-out infinite; }
    @keyframes waPulse { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(1.7); opacity: 0; } }

    @media (max-width: 768px) {
      .about-hero { height: 380px !important; }
      .hero-pad { padding: 0 24px !important; padding-top: 72px !important; }
      .about-section { padding: 60px 24px !important; }
      .two-col { grid-template-columns: 1fr !important; gap: 36px !important; }
      .values-grid { grid-template-columns: 1fr !important; }
      .pillars-grid { grid-template-columns: 1fr 1fr !important; }
      .stats-row { grid-template-columns: 1fr 1fr !important; }
      .footer-wrap { padding: 48px 24px 24px !important; }
      .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
      .footer-brand-col { grid-column: 1 / -1; }
      .locations-grid { grid-template-columns: 1fr 1fr !important; }
    }
    @media (max-width: 480px) {
      .pillars-grid { grid-template-columns: 1fr !important; }
      .footer-grid { grid-template-columns: 1fr !important; }
      .locations-grid { grid-template-columns: 1fr !important; }
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
function AboutHero() {
  return (
    <section className="about-hero" style={{ position: "relative", width: "100%", height: "480px", overflow: "hidden", display: "flex", alignItems: "center" }}>
      <img src="/about-hero.jpg" alt="About Akrafthaus" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,10,5,0.82) 0%, rgba(15,10,5,0.5) 60%, rgba(15,10,5,0.15) 100%)" }} />
      <div className="hero-pad" style={{ position: "relative", zIndex: 2, padding: "0 72px", paddingTop: "72px" }}>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <span style={{ width: "28px", height: "1px", background: "var(--warm-gold)" }} />
          <span style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--warm-gold)", fontWeight: 400 }}>Our Story</span>
        </motion.div>
        <motion.h1 className="serif" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1.08, fontWeight: 500, color: "var(--cream)", marginBottom: "20px", letterSpacing: "-0.02em" }}>
          More Than a Place.<br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>A Movement.</em>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }}
          style={{ fontSize: "15px", color: "rgba(245,240,232,0.72)", maxWidth: "480px", lineHeight: 1.78, fontWeight: 300 }}>
          Akrafthaus is redefining what it means to live, work, create, and connect — building environments that inspire communities and elevate every experience.
        </motion.p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   STATS STRIP
───────────────────────────────────────────── */
function StatsStrip() {
  const [ref, visible] = useInView(0.1);
  return (
    <div ref={ref} className="stats-row" style={{ background: "var(--charcoal)", padding: "32px 64px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
      {[["2020", "Year Founded"], ["5★", "Rated Hospitality"], ["200+", "Events Hosted"], ["42+", "Unique Spaces"]].map(([num, label], i) => (
        <motion.div key={label} initial={{ opacity: 0, y: 12 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.08 }} style={{ textAlign: "center" }}>
          <div className="serif" style={{ fontSize: "32px", fontWeight: 500, color: "var(--warm-gold)", lineHeight: 1, marginBottom: "8px" }}>{num}</div>
          <div style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(245,240,232,0.5)" }}>{label}</div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   INTRODUCTION
───────────────────────────────────────────── */
function Introduction() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} className="about-section" style={{ background: "var(--sand)", padding: "100px 64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div>
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ marginBottom: "20px" }}>Who We Are</motion.p>
            <motion.h2 className="serif" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
              style={{ fontSize: "clamp(28px, 3.5vw, 50px)", lineHeight: 1.1, fontWeight: 500, color: "var(--charcoal)", marginBottom: "28px" }}>
              Pioneering a New Era of Hospitality
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
              style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--text-muted)", marginBottom: "20px" }}>
              Akrafthaus represents a pioneering force in the realm of hospitality and lifestyle innovation. As a rapidly emerging brand, we seek to redefine the interconnectedness of living spaces, studios, technology, and cultural experiences.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}
              style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--text-muted)", marginBottom: "36px" }}>
              Our mission is to create environments that foster comfort, creativity, and community — catering to the evolving needs of modern society by providing seamless solutions that integrate various aspects of daily life.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.4 }}
              style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/apartments" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 28px", background: "var(--warm-brown)", color: "#fff", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", fontWeight: 500, transition: "opacity 0.25s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.82"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                Explore Spaces
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, delay: 0.15 }}
            style={{ overflow: "hidden", borderRadius: "6px" }}>
            <img src="/about-intro.jpg" alt="Akrafthaus Interior" style={{ width: "100%", height: "520px", objectFit: "cover", display: "block", transition: "transform 0.7s ease" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   BRAND CONCEPT
───────────────────────────────────────────── */
function BrandConcept() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} className="about-section" style={{ background: "#fff", padding: "100px 64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9 }}
            style={{ overflow: "hidden", borderRadius: "6px" }}>
            <img src="/about-concept.jpg" alt="Akrafthaus Concept" style={{ width: "100%", height: "520px", objectFit: "cover", display: "block", transition: "transform 0.7s ease" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} />
          </motion.div>
          <div>
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ marginBottom: "20px" }}>The Concept</motion.p>
            <motion.h2 className="serif" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
              style={{ fontSize: "clamp(26px, 3vw, 46px)", lineHeight: 1.15, fontWeight: 500, color: "var(--charcoal)", marginBottom: "24px" }}>
              Merging Lifestyle With Hospitality
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
              style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--text-muted)", marginBottom: "20px" }}>
              Akrafthaus departs from the conventional model of hospitality by integrating elements of living spaces and cultural experiences, redefining what it means to be a guest. Unlike traditional hotels, we cultivate an immersive experience that resonates with modern lifestyle preferences.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}
              style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--text-muted)", marginBottom: "32px" }}>
              Each Akrafthaus location is meticulously curated to echo its surroundings, showcasing regional art, cuisine, and traditions — fostering a deeper connection between guests and their destination.
            </motion.p>
            {["Home comforts with hotel luxury", "Locally curated art and cuisine", "Holistic well-being experiences", "Meaningful community connections"].map(text => (
              <motion.div key={text} initial={{ opacity: 0, x: -12 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.35 }}
                style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
                <span style={{ color: "var(--warm-gold)", fontSize: "10px", marginTop: "5px", flexShrink: 0 }}>✦</span>
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
   CORE VALUES
───────────────────────────────────────────── */
const VALUES = [
  { icon: "🌱", title: "Sustainability", desc: "Energy-efficient operations, local sourcing, and comprehensive waste management practices that support a circular economy and reduce our environmental footprint." },
  { icon: "💡", title: "Innovation", desc: "Cutting-edge technology integration — from mobile check-in to smart room IoT devices — that elevates every aspect of the guest experience." },
  { icon: "🤝", title: "Community", desc: "Deep engagement with local businesses, artisans, and cultural events that enrich both guest experiences and the communities we serve." },
  { icon: "🎨", title: "Creativity", desc: "Spaces designed to inspire — from our creative studio to curated art exhibitions — fostering artistic expression and collaborative energy." },
  { icon: "🌍", title: "Inclusivity", desc: "Environments that welcome everyone, celebrating diversity through cultural programming, multilingual services, and accessible design." },
  { icon: "⭐", title: "Excellence", desc: "Rigorous quality standards, regular assessments, and a dedicated QA team ensure every touchpoint meets our uncompromising commitment to excellence." },
];

function CoreValues() {
  const [ref, visible] = useInView(0.05);
  return (
    <section ref={ref} className="about-section" style={{ background: "var(--sand)", padding: "100px 64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: "60px" }}>
          <p className="eyebrow" style={{ marginBottom: "14px" }}>What We Stand For</p>
          <h2 className="serif" style={{ fontSize: "clamp(26px, 3vw, 48px)", fontWeight: 500, color: "var(--charcoal)", marginBottom: "16px" }}>Our Core Values</h2>
          <p style={{ fontSize: "15px", color: "var(--text-muted)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
            Every decision at Akrafthaus is guided by values that put people, planet, and purpose first.
          </p>
        </motion.div>
        <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {VALUES.map(({ icon, title, desc }, i) => (
            <motion.div key={title} className="value-card" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: i * 0.08 }}>
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>{icon}</div>
              <h4 style={{ fontSize: "16px", fontWeight: 500, color: "var(--charcoal)", marginBottom: "10px" }}>{title}</h4>
              <p style={{ fontSize: "13.5px", color: "var(--text-muted)", lineHeight: 1.75 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PILLARS — TECHNOLOGY + SUSTAINABILITY
───────────────────────────────────────────── */
const PILLARS = [
  { icon: "📱", title: "Mobile Technology", desc: "Digital check-in, room service requests, and instant staff communication through our app." },
  { icon: "🔋", title: "Renewable Energy", desc: "State-of-the-art energy management systems powered by renewable energy sources." },
  { icon: "🌿", title: "Local Sourcing", desc: "Partnerships with local farms and artisans reduce emissions and support regional economies." },
  { icon: "♻️", title: "Waste Management", desc: "Circular economy initiatives — recycling, composting, and waste-reduction education for staff and guests." },
  { icon: "🤖", title: "Data & AI", desc: "Machine learning predicts guest behaviours to personalise offerings and increase satisfaction." },
  { icon: "🏠", title: "Smart Rooms", desc: "IoT devices for lighting, temperature, and entertainment — tailored to individual guest preferences." },
];

function TechAndSustainability() {
  const [ref, visible] = useInView(0.05);
  return (
    <section ref={ref} className="about-section" style={{ background: "#fff", padding: "100px 64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: "60px" }}>
          <p className="eyebrow" style={{ marginBottom: "14px" }}>How We Operate</p>
          <h2 className="serif" style={{ fontSize: "clamp(26px, 3vw, 48px)", fontWeight: 500, color: "var(--charcoal)", marginBottom: "16px" }}>Technology & Sustainability</h2>
          <p style={{ fontSize: "15px", color: "var(--text-muted)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
            Akrafthaus integrates cutting-edge technology with responsible practices to deliver a seamless, future-focused experience.
          </p>
        </motion.div>
        <div className="pillars-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {PILLARS.map(({ icon, title, desc }, i) => (
            <motion.div key={title} className="pillar-card" initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.08 }}>
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>{icon}</div>
              <h4 style={{ fontSize: "14px", fontWeight: 500, color: "var(--charcoal)", marginBottom: "8px" }}>{title}</h4>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.7 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FRANCHISE & EXPANSION
───────────────────────────────────────────── */
function FranchiseExpansion() {
  const [ref, visible] = useInView(0.1);
  return (
    <section ref={ref} className="about-section" style={{ background: "var(--sand)", padding: "100px 64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: "60px" }}>
          <p className="eyebrow" style={{ marginBottom: "14px" }}>Growth & Opportunity</p>
          <h2 className="serif" style={{ fontSize: "clamp(26px, 3vw, 48px)", fontWeight: 500, color: "var(--charcoal)" }}>Franchise Model & Expansion</h2>
        </motion.div>

        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
          {/* Franchise */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ background: "#fff", borderRadius: "8px", padding: "40px", border: "1px solid rgba(139,107,71,0.08)" }}>
            <div style={{ fontSize: "36px", marginBottom: "20px" }}>🤝</div>
            <h3 className="serif" style={{ fontSize: "24px", fontWeight: 500, color: "var(--charcoal)", marginBottom: "16px" }}>Empowering Entrepreneurs</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.85, color: "var(--text-muted)", marginBottom: "20px" }}>
              The Akrafthaus franchise model empowers entrepreneurs and investors with a proven, scalable hospitality concept. Start small — with tech-enabled accommodations or culinary offerings — and expand as you grow.
            </p>
            {["Comprehensive training & support", "Proven and scalable business model", "Ongoing marketing & operational assistance", "Access to cutting-edge technology systems"].map(text => (
              <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                <span style={{ color: "var(--warm-gold)", fontSize: "10px", marginTop: "5px", flexShrink: 0 }}>✦</span>
                <span style={{ fontSize: "13.5px", color: "var(--text-muted)", lineHeight: 1.6 }}>{text}</span>
              </div>
            ))}
          </motion.div>

          {/* Expansion */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ background: "#fff", borderRadius: "8px", padding: "40px", border: "1px solid rgba(139,107,71,0.08)" }}>
            <div style={{ fontSize: "36px", marginBottom: "20px" }}>🌍</div>
            <h3 className="serif" style={{ fontSize: "24px", fontWeight: 500, color: "var(--charcoal)", marginBottom: "16px" }}>Expanding Horizons</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.85, color: "var(--text-muted)", marginBottom: "20px" }}>
              Currently established across Africa, Akrafthaus is actively assessing new locations in Europe, North America, and South America — each market approached with deep cultural sensitivity and local adaptation.
            </p>
            <div className="locations-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[["🇳🇬", "Nigeria", "Current"], ["🌍", "Africa", "Active"], ["🌍", "Europe", "Upcoming"], ["🌎", "Americas", "Planned"]].map(([flag, region, status]) => (
                <div key={region} style={{ padding: "14px 16px", background: "var(--sand)", borderRadius: "6px", border: "1px solid rgba(139,107,71,0.08)" }}>
                  <div style={{ fontSize: "20px", marginBottom: "6px" }}>{flag}</div>
                  <div style={{ fontSize: "13px", fontWeight: 500, color: "var(--charcoal)" }}>{region}</div>
                  <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-brown)", marginTop: "2px" }}>{status}</div>
                </div>
              ))}
            </div>
          </motion.div>
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
    <section ref={ref} style={{ position: "relative", overflow: "hidden", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img src="/cta-bg.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(14,10,6,0.75)" }} />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9 }}
        style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "60px 24px" }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--warm-gold)", marginBottom: "20px" }}>Be Part of the Story</p>
        <h2 className="serif" style={{ fontSize: "clamp(30px, 5vw, 64px)", fontWeight: 500, color: "var(--cream)", lineHeight: 1.1, marginBottom: "20px", letterSpacing: "-0.01em" }}>
          Stay. Create.<br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Build. Belong.</em>
        </h2>
        <p style={{ fontSize: "15px", color: "rgba(245,240,232,0.6)", maxWidth: "420px", margin: "0 auto 36px", lineHeight: 1.75 }}>
          Whether you're a guest, a creative, or an investor — there's a place for you at Akrafthaus.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/#contact" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 30px", background: "var(--warm-brown)", color: "#fff", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", fontWeight: 500, transition: "opacity 0.25s" }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
            Book a Stay
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
          <Link href="/apartments" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 30px", border: "1px solid rgba(245,240,232,0.4)", color: "rgba(245,240,232,0.88)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", fontWeight: 500, transition: "all 0.25s" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(245,240,232,0.1)"} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
            Explore Spaces
          </Link>
        </div>
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
            { heading: "Company", links: [["About Us", "/about"], ["Careers", "#"], ["Press", "#"], ["Blog", "#"], ["Contact", "#"]] },
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

/* ─────────────────────────────────────────────
   ROOT — NO <Navbar /> here, it's in layout.tsx
───────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <FontLoader />
      <AboutHero />
      <StatsStrip />
      <Introduction />
      <BrandConcept />
      <CoreValues />
      <TechAndSustainability />
      <FranchiseExpansion />
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