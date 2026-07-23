import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <h3 style={{ fontSize: "1.4rem" }}>Реформанс</h3>
            <p style={{ maxWidth: "34ch", color: "rgba(247,235,233,0.75)", marginTop: "0.75rem", lineHeight: 1.55 }}>
              Бутиково студио за пилатес реформър в София, кв. Лозенец. Работим с малки групи до 6 души за прецизна кинезитерапевтична грижа.
            </p>
          </div>

          <div>
            <p className="eyebrow" style={{ color: "var(--rose)" }}>
              Студио
            </p>
            <div style={{ display: "grid", gap: "0.4rem", marginTop: "0.9rem", fontSize: "0.92rem" }}>
              <Link href="/rezervacii">График & Резервации</Link>
              <Link href="/ceni">Цени и карти</Link>
              <Link href="/instruktori">Инструктори</Link>
              <Link href="/galeriya">Галерия</Link>
              <Link href="/za-nas">За нас</Link>
            </div>
          </div>

          <div>
            <p className="eyebrow" style={{ color: "var(--rose)" }}>
              Контакт
            </p>
            <div style={{ display: "grid", gap: "0.4rem", marginTop: "0.9rem", fontSize: "0.92rem" }}>
              <a href="tel:+35928001420">02 800 1420</a>
              <a href="tel:+359888104220">0888 104 220 (Viber)</a>
              <a href="mailto:zdravei@pilatesreformer.bg">zdravei@pilatesreformer.bg</a>
              <span style={{ color: "rgba(247,235,233,0.75)", marginTop: "0.25rem" }}>
                ул. „Кричим“ 42, кв. Лозенец
                <br />
                София 1407
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Реформанс Пилатес ЕООД · София</span>
          <span>Пон–Пет 07:00–21:00 · Съб 08:00–15:00 · Нед 09:00–13:00</span>
        </div>
      </div>
    </footer>
  );
}
