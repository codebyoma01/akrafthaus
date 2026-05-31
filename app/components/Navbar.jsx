"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Apartments",      href: "/apartments" },
  { label: "Hotel",           href: "/hotel" },
  { label: "Creative Studio", href: "/creative-studio" },
  { label: "Restaurant",      href: "/restaurant" },
  { label: "Tech Hub",        href: "/tech-hub" },
  { label: "Language School", href: "/language-school" },
  { label: "Gallery",         href: "/gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        .akraft-navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          height: 72px; padding: 0 48px;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
          background: transparent;
          transition: background 0.35s ease, box-shadow 0.35s ease, height 0.35s ease;
        }
        .akraft-navbar.scrolled {
          background: rgba(255,255,255,0.97);
          box-shadow: 0 1px 0 rgba(139,107,71,0.12);
          height: 64px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .akraft-navbar.menu-open { background: rgba(255,255,255,0.99); }
        .akraft-navbar.on-subpage { background: rgba(255,255,255,0.97); box-shadow: 0 1px 0 rgba(139,107,71,0.12); }

        .nav-links-list { display: flex; gap: 24px; list-style: none; align-items: center; }

        .nav-link {
          font-size: 13px; font-weight: 400; letter-spacing: 0.02em;
          text-decoration: none; padding-bottom: 4px;
          color: var(--text-muted, #7A6E64);
          border-bottom: 1.5px solid transparent;
          transition: color 0.2s, border-color 0.2s;
        }
        .nav-link.active { color: #1C1A17; font-weight: 500; border-bottom-color: #C9A96E; }
        .nav-link:hover { color: #1C1A17; }

        .nav-book-btn {
          flex-shrink: 0; padding: 10px 24px;
          background: #8B6B47; color: #fff;
          font-size: 12px; letter-spacing: 0.06em;
          text-decoration: none; font-weight: 500;
          border-radius: 6px; transition: opacity 0.2s;
          white-space: nowrap;
        }
        .nav-book-btn:hover { opacity: 0.85; }

        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          cursor: pointer; background: none; border: none; padding: 4px;
        }
        .hamburger span {
          display: block; width: 22px; height: 1.5px;
          background: #1C1A17; transition: all 0.3s ease; transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        .mobile-menu {
          position: fixed; top: 0; left: 0; right: 0; z-index: 199;
          background: #fff; padding: 90px 32px 40px;
          display: flex; flex-direction: column;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          max-height: 100dvh; overflow-y: auto;
        }
        .mobile-menu a {
          display: block; padding: 16px 0; font-size: 17px;
          color: #1C1A17; text-decoration: none;
          border-bottom: 1px solid rgba(139,107,71,0.1);
          font-weight: 400; transition: color 0.2s;
        }
        .mobile-menu a:hover { color: #8B6B47; }
        .mobile-menu .mobile-cta {
          margin-top: 28px; border-bottom: none !important;
          display: inline-flex !important; align-items: center;
          justify-content: center; gap: 10px;
          padding: 15px 32px !important;
          background: #8B6B47; color: #fff !important;
          font-size: 11px; letter-spacing: 0.14em;
          text-transform: uppercase; font-weight: 500; border-radius: 4px;
        }

        @media (max-width: 768px) {
          .akraft-navbar { padding: 0 20px; }
          .nav-links-list { display: none !important; }
          .nav-book-btn { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>

      <motion.nav
        className={[
          "akraft-navbar",
          scrolled ? "scrolled" : "",
          menuOpen ? "menu-open" : "",
          activePath !== "/" ? "on-subpage" : "",
        ].filter(Boolean).join(" ")}
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo */}
        <Link href="/" style={{ flexShrink: 0 }} onClick={closeMenu}>
          <img src="/logo.png" alt="AKRAFTHAUS" style={{ height: "40px", width: "auto", objectFit: "contain" }} />
        </Link>

        {/* Desktop links */}
        <ul className="nav-links-list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className={`nav-link ${activePath === href ? "active" : ""}`}
                onClick={() => setActivePath(href)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Book Now */}
        <Link href="/#contact" className="nav-book-btn">Book Now</Link>

        {/* Hamburger */}
        <button
          className={"hamburger" + (menuOpen ? " open" : "")}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={label} href={href} onClick={closeMenu}>{label}</Link>
            ))}
            <Link href="/#contact" className="mobile-cta" onClick={closeMenu}>
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