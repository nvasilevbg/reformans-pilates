import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Контакти — Реформанс" };

export default function Kontakti() {
  return (
    <div className="shell">
      <header className="page-head">
        <p className="eyebrow">Контакти</p>
        <h2>ул. Кричим 42, Лозенец</h2>
        <p>
          Партер, вход от вътрешния двор — вратата с розовата рамка. Паркиране в
          синя зона; след 18:00 обикновено се намира място на Червена стена.
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.15fr)",
          gap: "3rem",
          paddingBottom: "3rem",
        }}
        className="kontakti-grid"
      >
        <div>
          <div className="card" style={{ marginBottom: "1.25rem" }}>
            <p className="eyebrow">Директно</p>
            <div style={{ display: "grid", gap: "0.7rem", marginTop: "1rem", fontSize: "1.02rem" }}>
              <a href="tel:+35928001420">02 800 1420</a>
              <a href="tel:+359888104220">0888 104 220 (Viber, WhatsApp)</a>
              <a href="mailto:zdravei@reformans.bg">zdravei@reformans.bg</a>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)", margin: "1.25rem 0 0" }}>
              Отговаряме между часовете, обикновено до два часа. Ако бързаш —
              пиши на Viber.
            </p>
          </div>

          <div className="card">
            <p className="eyebrow">Работно време</p>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "1rem",
                fontSize: "0.92rem",
              }}
            >
              <tbody>
                {[
                  ["Понеделник – Петък", "07:00 – 21:00"],
                  ["Събота", "08:00 – 15:00"],
                  ["Неделя", "09:00 – 13:00"],
                ].map(([d, h]) => (
                  <tr key={d}>
                    <td style={{ padding: "0.55rem 0", borderBottom: "var(--edge)" }}>{d}</td>
                    <td
                      style={{
                        padding: "0.55rem 0",
                        borderBottom: "var(--edge)",
                        textAlign: "right",
                        color: "var(--ink-soft)",
                      }}
                    >
                      {h}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)", margin: "1.25rem 0 0" }}>
              Рецепцията не е постоянно заета — ако идваш само за да разгледаш,
              обади се предварително.
            </p>
          </div>

          <div
            style={{
              marginTop: "1.25rem",
              borderRadius: "20px",
              overflow: "hidden",
              border: "var(--edge)",
              height: "260px",
            }}
          >
            <iframe
              title="Карта до студиото"
              src="https://www.openstreetmap.org/export/embed.html?bbox=23.3230%2C42.6710%2C23.3390%2C42.6790&layer=mapnik&marker=42.6750%2C23.3310"
              style={{ width: "100%", height: "100%", border: 0 }}
              loading="lazy"
            />
          </div>
        </div>

        <ContactForm />
      </div>

      <style>{`
        @media (max-width: 860px) {
          .kontakti-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
