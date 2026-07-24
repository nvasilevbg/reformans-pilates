import Link from "next/link";
import { InstagramIcon, FacebookIcon, PhoneIcon, MailIcon, MapPinIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          {/* Column 1: Brand & Socials */}
          <div>
            <Link href="/" className="brand" style={{ color: "var(--plum-dark)", textDecoration: "none" }}>
              Реформанс <span style={{ color: "var(--ink-soft)" }}>Лозенец</span>
            </Link>
            <p style={{ maxWidth: "34ch", color: "var(--ink-soft)", marginTop: "var(--space-3)", lineHeight: 1.6, fontSize: "0.92rem" }}>
              Бутиково студио за пилатес реформър в София, кв. Лозенец. Групи до 6 души за прецизна кинезитерапевтична грижа.
            </p>

            {/* Social Links */}
            <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram страница"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "var(--surface-card)",
                  border: "var(--edge)",
                  color: "var(--plum-dark)",
                  transition: "transform 160ms ease, border-color 160ms ease",
                }}
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook страница"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "var(--surface-card)",
                  border: "var(--edge)",
                  color: "var(--plum-dark)",
                  transition: "transform 160ms ease, border-color 160ms ease",
                }}
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="eyebrow" style={{ color: "var(--plum-dark)" }}>
              Студио
            </p>
            <div style={{ display: "grid", gap: "var(--space-2)", marginTop: "var(--space-3)", fontSize: "0.92rem" }}>
              <Link href="/rezervacii">График & Резервации</Link>
              <Link href="/ceni">Цени и карти</Link>
              <Link href="/instruktori">Инструктори</Link>
              <Link href="/galeriya">Галерия</Link>
              <Link href="/za-nas">За нас</Link>
            </div>
          </div>

          {/* Column 3: Legal Pages */}
          <div>
            <p className="eyebrow" style={{ color: "var(--plum-dark)" }}>
              Правни условия
            </p>
            <div style={{ display: "grid", gap: "var(--space-2)", marginTop: "var(--space-3)", fontSize: "0.92rem" }}>
              <Link href="/obshti-usloviya">Общи условия</Link>
              <Link href="/poveritelnost">Политика за поверителност</Link>
              <Link href="/biskvitki">Политика за бисквитки</Link>
              <Link href="/pravila-na-zalata">Правила на залата</Link>
            </div>
          </div>

          {/* Column 4: Contacts & Address */}
          <div>
            <p className="eyebrow" style={{ color: "var(--plum-dark)" }}>
              Контакт
            </p>
            <div style={{ display: "grid", gap: "var(--space-3)", marginTop: "var(--space-3)", fontSize: "0.92rem" }}>
              <a href="tel:+35928001420" style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)" }}>
                <PhoneIcon size={16} color="var(--rose-soft)" /> 02 800 1420
              </a>
              <a href="tel:+359888104220" style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)" }}>
                <PhoneIcon size={16} color="var(--rose-soft)" /> 0888 104 220 (Viber)
              </a>
              <a href="mailto:zdravei@pilatesreformer.bg" style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)" }}>
                <MailIcon size={16} color="var(--rose-soft)" /> zdravei@pilatesreformer.bg
              </a>
              <div style={{ display: "inline-flex", alignItems: "flex-start", gap: "var(--space-2)", color: "var(--ink-soft)" }}>
                <MapPinIcon size={16} color="var(--rose-soft)" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span>
                  ул. „Кричим“ 42, кв. Лозенец
                  <br />
                  София 1407
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Реформанс Пилатес ЕООД · Всички права запазени</span>
          <span>Пон–Пет 07:00–21:00 · Съб 08:00–15:00 · Нед 09:00–13:00</span>
        </div>
      </div>
    </footer>
  );
}
