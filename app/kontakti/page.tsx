import ContactForm from "@/components/ContactForm";
import StudioImage from "@/components/StudioImage";

export const metadata = { title: "Контакти — Пилатес Реформър" };

export default function Kontakti() {
  return (
    <div className="shell page-container animate-entrance">
      <header className="page-head">
        <p className="eyebrow">Контакти</p>
        <h2>Студио Реформанс — ул. „Кричим“ 42, кв. Лозенец</h2>
        <p>
          Партерен етаж, с удобен вход от вътрешния двор. Улицата попада в Синя зона
          за паркиране; в близост има и възможност за паркиране по съседните улици.
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.05fr",
          gap: "var(--space-6)",
          alignItems: "start",
          paddingBottom: "var(--space-12)",
        }}
        className="kontakti-grid"
      >
        {/* Left Column: Direct Info, Working Hours, & Entrance Photo */}
        <div style={{ display: "grid", gap: "var(--space-4)" }}>
          <div className="card">
            <p className="eyebrow">Директен контакт</p>
            <div style={{ display: "grid", gap: "var(--space-2)", marginTop: "var(--space-2)", fontSize: "1.02rem" }}>
              <a href="tel:+35928001420">02 800 1420</a>
              <a href="tel:+359888104220">0888 104 220 (Viber, WhatsApp)</a>
              <a href="mailto:zdravei@pilatesreformer.bg">zdravei@pilatesreformer.bg</a>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)", margin: "var(--space-3) 0 0" }}>
              Отговаряме между часовете, обикновено в рамките на 2 часа. За спешни въпроси ни пишете по Viber.
            </p>
          </div>

          <div className="card">
            <p className="eyebrow">Работно време</p>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "var(--space-2)",
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
                    <td style={{ padding: "var(--space-2) 0", borderBottom: "var(--edge)" }}>{d}</td>
                    <td
                      style={{
                        padding: "var(--space-2) 0",
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
            <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)", margin: "var(--space-3) 0 0" }}>
              За посещение за разглеждане на залата, моля да се свържете с нас предварително.
            </p>
          </div>

          {/* Building entrance photo card */}
          <div className="card" style={{ padding: "var(--space-4)" }}>
            <p className="eyebrow" style={{ marginBottom: "var(--space-2)" }}>
              Вход на сградата
            </p>
            <StudioImage
              imageKey="contactBuilding"
              aspectRatio="16/9"
              sizes="(max-width: 860px) 100vw, 40vw"
              style={{ borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-sm)" }}
            />
            <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)", margin: "var(--space-2) 0 0" }}>
              Влиза се през вратата към двора, партерен етаж отляво.
            </p>
          </div>
        </div>

        {/* Right Column: Google Maps opposite Working Hours + Contact Form */}
        <div style={{ display: "grid", gap: "var(--space-4)" }}>
          {/* Google Maps Card */}
          <div
            className="card"
            style={{
              padding: 0,
              overflow: "hidden",
              height: "260px",
            }}
          >
            <iframe
              title="Карта в Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.245892185412!2d23.3284!3d42.6750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa850785121b6d%3A0xd68d71239b027d14!2sul.%20%22Krichim%22%2042%2C%201407%20Sofia!5e0!3m2!1sen!2sbg!4v1700000000000!5m2!1sen!2sbg"
              style={{ width: "100%", height: "100%", border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>

          <ContactForm />
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .kontakti-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
