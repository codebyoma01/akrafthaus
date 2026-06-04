import Link from "next/link";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
};

export default function TextLink({ href, children, variant = "light" }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={`home-text-link${variant === "dark" ? " home-text-link--dark" : ""}`}
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
