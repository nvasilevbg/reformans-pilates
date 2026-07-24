"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const LINKS = [
  { href: "/rezervacii", label: "График" },
  { href: "/ceni", label: "Цени" },
  { href: "/instruktori", label: "Инструктори" },
  { href: "/galeriya", label: "Галерия" },
  { href: "/za-nas", label: "За нас" },
  { href: "/kontakti", label: "Контакти" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = path === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className="nav"
      data-transparent={isHome}
      data-scrolled={scrolled}
    >
      <div className="shell nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          Реформанс <span>Лозенец</span>
        </Link>

        <div className="nav-links" data-open={open}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-active={path === l.href}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <a
          href="https://www.fitsys.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary nav-cta"
        >
          Запази час
        </a>

        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Меню"
        >
          <div className="hamburger" data-open={open}>
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>
    </nav>
  );
}
