"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/rezervacii", label: "Резервации" },
  { href: "/ceni", label: "Цени" },
  { href: "/instruktori", label: "Инструктори" },
  { href: "/galeriya", label: "Галерия" },
  { href: "/za-nas", label: "За нас" },
  { href: "/kontakti", label: "Контакти" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="shell nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          Пилатес Реформър <span>Лозенец</span>
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

        <Link href="/rezervacii" className="btn btn-primary nav-cta">
          Запази час
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Меню"
        >
          {open ? "Затвори" : "Меню"}
        </button>
      </div>
    </nav>
  );
}
