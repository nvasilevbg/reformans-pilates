import Link from "next/link";

export const metadata = { title: "Цени — Пилатес Реформър" };

const CARDS = [
  {
    name: "Единично посещение",
    price: "45 лв",
    unit: "за един групов час",
    lines: ["Валидно за всеки групов час", "Без обвързващи договори", "Плащане на място или онлайн"],
  },
  {
    name: "Карта 8 посещения",
    price: "320 лв",
    unit: "40 лв / час",
    lines: ["Валидност 2 месеца", "Възможност за еднократно прехвърляне", "Замразяване до 14 дни при пътуване"],
    featured: true,
  },
  {
    name: "Карта 12 посещения",
    price: "432 лв",
    unit: "36 лв / час",
    lines: ["Валидност 3 месеца", "Приоритетно записване в часовете", "Замразяване до 21 дни при нужда"],
  },
  {
    name: "Индивидуална сесия",
    price: "90 лв",
    unit: "50 минути персонален час",
    lines: ["Пакет от 5 сесии: 410 лв", "Включва първоначална оценка на стойката", "Персонална програма за рехабилитация"],
  },
];

export default function Ceni() {
  return (
    <div className="shell page-container animate-entrance">
      <header className="page-head">
        <p className="eyebrow">Цени и карти</p>
        <h2>Прозрачни цени без скрити такси или обвързващи договори</h2>
        <p>
          Заплащате единични посещения или пакетни карти. При планирано пътуване или
          неразположение предлагаме възможност за удължаване валидността на картите — просто ни пишете.
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
        <h2>Важни детайли и условия</h2>
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
            <h3>Отказване на запазен час</h3>
            <p>
              Отказването на запазен час е безплатно до 12 часа преди началния му час.
              При по-късен отказ посещението се отчита като използвано, тъй като мястото в групата не може да бъде препредоставено навреме.
            </p>
          </div>
          <div>
            <h3>Първо посещение</h3>
            <p>
              За първия ви час заповядайте 15 минути по-рано. Ще направим кратък оглед на стойката,
              ще настроим уреда за вашите показатели и ще обсъдим евентуални предишни травми.
              Изискват се чорапи с противоплъзгащи грайфери (предлагат се и на рецепция).
            </p>
          </div>
          <div>
            <h3>Начини на плащане</h3>
            <p>
              Приемаме плащания с банкова карта, в брой или чрез банков превод.
              При необходимост издаваме фактура.
            </p>
          </div>
        </div>
      </section>

      <div style={{ paddingBottom: "var(--space-8)" }}>
        <Link href="/rezervacii" className="btn btn-primary">
          Виж графика и свободните часове
        </Link>
      </div>
    </div>
  );
}
