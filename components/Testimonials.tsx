import StudioImage from "@/components/StudioImage";
import { StarIcon } from "@/components/Icons";

const TESTIMONIALS = [
  {
    name: "Радостина Стоянова",
    role: "Клиент от 2023 г.",
    imageKey: "testimonialRadostina" as const,
    quote:
      "Дойдох заради постоянни болки в кръста от 8 часа пред лаптопа. След третия месец болката изчезна, а стойката ми се промени изцяло. За първи път някой ми обясни как функционира тялото ми.",
  },
  {
    name: "Елена Петрова",
    role: "Клиент от 2022 г.",
    imageKey: "testimonialElena" as const,
    quote:
      "Търсех място след раждането, където да не ме притискат за бързи резултати. В Реформанс залата е изключително спокойна, групите са наистина от 6 души и Мира следи всяко движение.",
  },
  {
    name: "Виктор Маринов",
    role: "Клиент от 2023 г.",
    imageKey: "testimonialViktor" as const,
    quote:
      "Като мъж бях скептичен към пилатес, но реформърът се оказа изключително здраво и прецизно натоварване. Мускулатурата на коремния ми корсет се стегна повече от години във фитнеса.",
  },
];

export default function Testimonials() {
  return (
    <section className="section shell">
      <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
        <p className="eyebrow">Отзиви от залата</p>
        <h2>Истории на наши клиенти</h2>
        <p style={{ color: "var(--ink-soft)", maxWidth: "56ch", margin: "var(--space-2) auto 0" }}>
          Хора със седящи професии, спортисти и майки, които откриха прецизното движение на реформър.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "var(--space-6)",
        }}
      >
        {TESTIMONIALS.map((t, i) => (
          <div
            key={t.name}
            className="card animate-entrance"
            style={{
              animationDelay: `${0.1 * (i + 1)}s`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "var(--space-6)",
              background: "var(--surface-card)",
              border: "var(--edge)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div>
              {/* 5-star rating */}
              <div style={{ display: "flex", gap: "2px", color: "var(--rose-soft)", marginBottom: "var(--space-4)" }}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <StarIcon key={idx} size={16} />
                ))}
              </div>

              <blockquote
                style={{
                  margin: 0,
                  fontSize: "0.98rem",
                  lineHeight: "1.65",
                  color: "var(--ink)",
                  fontStyle: "normal",
                }}
              >
                „{t.quote}“
              </blockquote>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-4)",
                marginTop: "var(--space-6)",
                paddingTop: "var(--space-4)",
                borderTop: "var(--edge)",
              }}
            >
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                <StudioImage
                  imageKey={t.imageKey}
                  aspectRatio="1/1"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: "1rem", color: "var(--ink)", fontWeight: 600 }}>{t.name}</h4>
                <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--ink-soft)" }}>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
