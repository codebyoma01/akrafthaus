import Link from "next/link";

const NAV = [
  ["Home", "/"],
  ["About", "/about"],
  ["Rooms", "/rooms"],
  ["Gallery", "/gallery"],
  ["Franchise", "/franchise"],
  ["Contact", "/contact"],
] as const;

const SPACES = [
  ["Hotel & suites", "/rooms"],
  ["Apartments", "/rooms"],
  ["Restaurant", "/contact"],
  ["Studio", "/contact"],
  ["Co-working", "/contact"],
] as const;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <img src="/logo.png" alt="Akrafthaus" className="site-footer__logo" />
            <p className="site-footer__tagline">
              Boutique hotel and creative address in Kubwa, Abuja.
            </p>
          </div>

          <div>
            <p className="site-footer__label">Navigate</p>
            <nav aria-label="Footer">
              {NAV.map(([label, href]) => (
                <Link key={href} href={href} className="site-footer__link">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="site-footer__label">Spaces</p>
            {SPACES.map(([label, href]) => (
              <Link key={label} href={href} className="site-footer__link">
                {label}
              </Link>
            ))}
          </div>

          <div>
            <p className="site-footer__label">Contact</p>
            <a href="tel:+2347033869555" className="site-footer__link">
              +234 703 386 9555
            </a>
            <a href="mailto:hello@akrafthaus.ng" className="site-footer__link">
              hello@akrafthaus.ng
            </a>
            <p className="site-footer__muted">Kubwa, Abuja</p>
          </div>
        </div>

        <div className="site-footer__bar">
          <span>© {new Date().getFullYear()} Akrafthaus</span>
          <div className="site-footer__legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
