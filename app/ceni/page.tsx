import Link from "next/link";

export const metadata = { title: "Цени — Пилатес Реформър" };

const CARDS = [
  {
    name: "Единично посещение",
    price: "45 лв",
    unit: "групов час",
    lines: ["Валидно за всеки групов час", "Без ангажимент", "Плащане на място или онлайн"],
  },
  {
    name: "Карта 8 посещения",
    price: "320 лв",
    unit: "40 лв / час",
    lines: ["Валидност 2 месеца", "Прехвърля се на приятел веднъж", "Замразяване до 14 дни"],
    featured: true,
  },
  {
    name: "Карта 12 посещения",
    price: "432 лв",
    unit: "36 лв / час",
    lines: ["Валидност 3 месеца", "Приоритет при пълни часове", "Замразяване до 21 дни"],
  },
  {
    name: "Индивидуална сесия",
    price: "90 лв",
    unit: "50 минути",
    lines: ["Пакет от 5: 410 лв", "Оценка на движение в първата сесия", "Рехабилитационни сесии по договаряне"],
  },
];

export default function Ceni() {
  return (
    <div className="shell page-container animate-entrance">
      <header className="page-head">
        <p className="eyebrow">Цени</p>
        <h2>Без такса членство и без записване за година</h2>
        <p>
          Плащаш часове, не абонамент. Картите имат срок, защото залата е малка и
          местата трябва да се въртят, но замразяване се дава при болест или
          пътуване — просто пиши.
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "var(--space-6)",
          marginBottom: "var(--space-16)",
          alignItems: "stretch",
        }}
      >
        {CARDS.map((c) => (
          <div
            key={c.name}
            className="card"
            style={
              c.featured
                ? {
                    background: "var(--rose-wash)",
                    border: "2px solid var(--rose-soft)",
                    boxShadow: "var(--shadow-md)",
                    position: "relative",
                  }
                : undefined
            }
          >
            {c.featured && (
              <span
                style={{
                  position: "absolute",
                  top: "-12px",
                  right: "var(--space-4)",
                  background: "var(--rose-baby)",
                  color: "var(--plum-dark)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "var(--space-1) var(--space-3)",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid var(--rose-soft)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                Най-популярен
              </span>
            )}
            <p className="eyebrow" style={{ color: c.featured ? "var(--plum-dark)" : undefined }}>
              {c.name}
            </p>
            <div
              style={{
                fontFamily: "var(--f-display)",
                fontSize: "2.4rem",
                lineHeight: 0.98,
                letterSpacing: "-0.03em",
                marginTop: "var(--space-2)",
                marginBottom: "var(--space-1)",
                color: "var(--plum-dark)",
              }}
            >
              {c.price}
            </div>
            <div
              style={{
                fontSize: "0.84rem",
                color: "var(--ink-soft)",
                marginBottom: "var(--space-4)",
              }}
            >
              {c.unit}
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gap: "var(--space-2)",
                fontSize: "0.9rem",
                color: "var(--ink)",
              }}
            >
              {c.lines.map((l) => (
                <li key={l} style={{ paddingLeft: "var(--space-3)", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--rose-soft)", fontWeight: "bold" }}>✓</span>
                  {l}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="section">
        <h2>Дребният шрифт, който всъщност има значение</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-8)",
            color: "var(--ink-soft)",
            fontSize: "0.95rem",
          }}
        >
          <div>
            <h3>Отказ на час</h3>
            <p>
              До 12 часа преди началото — безплатно. По-късно посещението се
              приспада. Не е наказание, просто мястото вече не може да се даде на
              друг.
            </p>
          </div>
          <div>
            <h3>Първо посещение</h3>
            <p>
              Ела 15 минути по-рано. Показваме уреда, настройваме пружините и
              питаме за травми. Носи чорапи с грайфер — имаме и за продажба, 12
              лв.
            </p>
          </div>
          <div>
            <h3>Плащане</h3>
            <p>
              Карта, кеш или банков превод. Издаваме фактура при поискване. Не
              работим със спортни ваучери.
            </p>
          </div>
        </div>
      </section>

      <div style={{ paddingBottom: "var(--space-8)" }}>
        <Link href="/rezervacii" className="btn btn-primary">
          Виж графика
        </Link>
      </div>
    </div>
  );
}
