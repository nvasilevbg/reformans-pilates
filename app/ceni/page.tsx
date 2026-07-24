import Link from "next/link";
import { CheckIcon } from "@/components/Icons";

export const metadata = { title: "Цени — Пилатес Реформър" };

const CARDS = [
  {
    name: "Единично посещение",
    price: "45 лв",
    unit: "за един групов час",
    lines: ["Валидно за всеки групов час", "Без обвързващи договори", "Плащане на място или онлайн"],
    cta: "Пробвай 1 час",
  },
  {
    name: "Карта 8 посещения",
    price: "320 лв",
    unit: "40 лв / час",
    lines: ["Валидност 2 месеца", "Възможност за прехвърляне веднъж", "Замразяване до 14 дни при пътуване"],
    featured: true,
    badge: "НАЙ-ПРЕДПОЧИТАНА ЗА СТАРТ",
    cta: "Запази Карта 8",
  },
  {
    name: "Карта 12 посещения",
    price: "432 лв",
    unit: "36 лв / час",
    lines: ["Валидност 3 месеца", "Приоритетно записване в часовете", "Замразяване до 21 дни при нужда"],
    cta: "Купи Карта 12",
  },
  {
    name: "Индивидуална сесия",
    price: "90 лв",
    unit: "50 минути персонален час",
    lines: ["Пакет от 5 сесии: 410 лв", "Включва първоначална оценка на стойката", "Персонална програма за рехабилитация"],
    cta: "Запази персонален час",
  },
];

export default function Ceni() {
  return (
    <div className="shell page-container animate-entrance">
      <header className="page-head">
        <p className="eyebrow">Пакети & Карти</p>
        <h2>Инвестирай в тялото и стойката си</h2>
        <p>
          Прозрачни цени за групови и индивидуални сесии. Без скрити такси за членство,
          без годишни договори. Всички карти включват опция за замразяване при пътуване.
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
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }
                : {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }
            }
          >
            <div>
              {c.badge && (
                <span
                  style={{
                    position: "absolute",
                    top: "-12px",
                    right: "var(--space-4)",
                    background: "var(--rose-baby)",
                    color: "var(--plum-dark)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "var(--space-1) var(--space-3)",
                    borderRadius: "var(--radius-full)",
                    border: "1px solid var(--rose-soft)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  {c.badge}
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
                  marginBottom: "var(--space-6)",
                }}
              >
                {c.lines.map((l) => (
                  <li key={l} style={{ paddingLeft: "var(--space-6)", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: "2px", color: "var(--rose-soft)" }}>
                      <CheckIcon size={16} />
                    </span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://www.fitsys.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${c.featured ? "btn-primary" : "btn-ghost"}`}
              style={{ width: "100%", textAlign: "center", justifyContent: "center" }}
            >
              {c.cta}
            </a>
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
              Отказването на запазен час е 100% безплатно до 12 часа преди началния му час през онлайн графика.
              При по-късен отказ посещението се отчита като използвано, тъй като мястото в групата от 6 уреда не може да бъде препредоставено навреме.
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

      <div style={{ paddingBottom: "var(--space-8)", textAlign: "left" }}>
        <a
          href="https://www.fitsys.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Запази час за тази седмица
        </a>
      </div>
    </div>
  );
}
