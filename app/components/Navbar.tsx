"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Rooms", href: "/rooms" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Franchise", href: "/franchise" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isSolid = !isHome || scrolled || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`site-nav${isSolid ? " site-nav--solid" : ""}`}
        role="banner"
      >
        <nav className="site-nav__inner" aria-label="Main">
          <Link href="/" className="site-nav__logo-link" aria-label="Akrafthaus home">
            <img src="/logo.png" alt="" className="site-nav__logo" />
          </Link>

          <ul className="site-nav__links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`site-nav__link${pathname === href ? " is-active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="site-nav__cta">
            Reserve
          </Link>

          <button
            type="button"
            className="site-nav__toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <div
        id="mobile-nav"
        key={pathname}
        className={`site-nav__drawer${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`site-nav__drawer-link${pathname === href ? " is-active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="site-nav__drawer-cta"
          onClick={() => setMenuOpen(false)}
        >
          Reserve
        </Link>
      </div>

      {!isHome && <div className="nav-spacer" aria-hidden />}

      <style jsx global>{`
        .site-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 200;
          height: var(--nav-height);
          transition: background 0.28s ease, border-color 0.28s ease;
          border-bottom: 1px solid transparent;
        }
        .site-nav--solid {
          background: rgba(61, 43, 31, 0.96);
          border-bottom-color: rgba(255, 255, 255, 0.06);
        }
        .site-nav__inner {
          max-width: 1180px;
          margin: 0 auto;
          height: 100%;
          padding: 0 var(--section-x);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .site-nav__logo {
          height: 32px;
          width: auto;
          filter: brightness(0) invert(1);
        }
        .site-nav__links {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 4px;
        }
        .site-nav__link {
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 8px 14px;
          color: rgba(255, 255, 255, 0.62);
          transition: color 0.18s;
        }
        .site-nav__link:hover,
        .site-nav__link.is-active {
          color: #fff;
        }
        .site-nav__cta {
          flex-shrink: 0;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 600;
          text-decoration: none;
          padding: 10px 22px;
          background: var(--primary);
          color: var(--cream);
          transition: background 0.2s;
        }
        .site-nav__cta:hover {
          background: var(--dark);
        }
        .site-nav__toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 44px;
          height: 44px;
          padding: 10px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .site-nav__toggle span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: rgba(255, 255, 255, 0.85);
          transition: transform 0.22s, opacity 0.22s;
        }
        .site-nav__toggle[aria-expanded="true"] span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        .site-nav__toggle[aria-expanded="true"] span:nth-child(2) {
          opacity: 0;
        }
        .site-nav__toggle[aria-expanded="true"] span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }
        .site-nav__drawer {
          position: fixed;
          top: var(--nav-height);
          left: 0;
          right: 0;
          z-index: 199;
          background: rgba(61, 43, 31, 0.98);
          padding: 8px 0 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          max-height: calc(100dvh - var(--nav-height));
          overflow-y: auto;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-6px);
          transition: opacity 0.22s, transform 0.22s, visibility 0.22s;
        }
        .site-nav__drawer.is-open {
          opacity: 1;
          visibility: visible;
          transform: none;
        }
        .site-nav__drawer-link {
          display: block;
          padding: 16px var(--section-x);
          font-size: 15px;
          color: rgba(255, 255, 255, 0.65);
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .site-nav__drawer-link.is-active,
        .site-nav__drawer-link:hover {
          color: #fff;
        }
        .site-nav__drawer-cta {
          display: block;
          margin: 24px var(--section-x) 0;
          padding: 14px;
          text-align: center;
          background: var(--primary);
          color: var(--cream);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 600;
          text-decoration: none;
        }
        @media (max-width: 900px) {
          .site-nav__links,
          .site-nav__cta {
            display: none;
          }
          .site-nav__toggle {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
