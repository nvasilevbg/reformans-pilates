import Link from "next/link";

export const metadata = { title: "Цени — Реформанс" };

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
    <div className="shell">
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
          gap: "1.25rem",
          marginBottom: "4rem",
        }}
      >
        {CARDS.map((c) => (
          <div
            key={c.name}
            className="card"
            style={
              c.featured
                ? { background: "var(--plum)", color: "var(--rose-wash)", borderColor: "var(--plum)" }
                : undefined
            }
          >
            <p className="eyebrow" style={c.featured ? { color: "var(--rose)" } : undefined}>
              {c.name}
            </p>
            <div
              style={{
                fontFamily: "var(--f-display)",
                fontSize: "2.5rem",
                lineHeight: 1.1,
                margin: "0.85rem 0 0.2rem",
              }}
            >
              {c.price}
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                color: c.featured ? "rgba(247,235,233,0.7)" : "var(--ink-soft)",
                marginBottom: "1.25rem",
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
                gap: "0.5rem",
                fontSize: "0.88rem",
                color: c.featured ? "rgba(247,235,233,0.85)" : "var(--ink-soft)",
              }}
            >
              {c.lines.map((l) => (
                <li key={l} style={{ paddingLeft: "0.9rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0 }}>·</span>
                  {l}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="rule" />

      <section className="section">
        <h2 style={{ marginBottom: "2rem" }}>Дребният шрифт, който всъщност има значение</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2.5rem",
            color: "var(--ink-soft)",
            fontSize: "0.95rem",
          }}
        >
          <div>
            <h3 style={{ color: "var(--ink)", marginBottom: "0.6rem" }}>Отказ на час</h3>
            <p>
              До 12 часа преди началото — безплатно. По-късно посещението се
              приспада. Не е наказание, просто мястото вече не може да се даде на
              друг.
            </p>
          </div>
          <div>
            <h3 style={{ color: "var(--ink)", marginBottom: "0.6rem" }}>Първо посещение</h3>
            <p>
              Ела 15 минути по-рано. Показваме уреда, настройваме пружините и
              питаме за травми. Носи чорапи с грайфер — имаме и за продажба, 12
              лв.
            </p>
          </div>
          <div>
            <h3 style={{ color: "var(--ink)", marginBottom: "0.6rem" }}>Плащане</h3>
            <p>
              Карта, кеш или банков превод. Издаваме фактура при поискване. Не
              работим със спортни ваучери.
            </p>
          </div>
        </div>
      </section>

      <div style={{ paddingBottom: "2rem" }}>
        <Link href="/rezervacii" className="btn btn-primary">
          Виж графика
        </Link>
      </div>
    </div>
  );
}
