import Link from "next/link";
import "./home.css";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-inner">
          <div>
            <p className="eyebrow">Реформър студио · ул. Кричим 42, Лозенец</p>
            <h1>
              Шест
              <br />
              реформъра.
              <br />
              <em>Нито един</em>
              <br />
              излишен.
            </h1>
            <p className="hero-lede">
              Работим с групи до шест души, защото на седмия човек инструкторът
              спира да гледа и започва да брои. Тук се коригира стойка, не се
              снима съдържание.
            </p>
            <div className="hero-actions">
              <Link href="/rezervacii" className="btn btn-primary">
                Виж свободните часове
              </Link>
              <Link href="/za-nas" className="btn btn-ghost">
                Как работим
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <ReformerDiagram />
            <p className="hero-panel-note">
              Всеки реформър в залата е номериран. Като резервираш, виждаш точно
              колко от шестте са свободни за този час.
            </p>
          </div>
        </div>
      </section>

      <hr className="rule" />

      <section className="section shell">
        <div className="pillars">
          <div>
            <p className="eyebrow">Групови часове</p>
            <h3>Максимум шест</h3>
            <p>
              Петдесет минути на уред, с инструктор, който минава през всички.
              Ниво се обявява предварително, за да не попаднеш в час, който не
              ти пасва.
            </p>
          </div>
          <div>
            <p className="eyebrow">Индивидуално</p>
            <h3>Един на един</h3>
            <p>
              За старт след пауза, след раждане или след травма. Първата сесия е
              оценка на движение — без пружини, само наблюдение и разговор.
            </p>
          </div>
          <div>
            <p className="eyebrow">Рехабилитация</p>
            <h3>Със свидетелство</h3>
            <p>
              Мира и Ния имат следдипломна квалификация по кинезитерапия. Работим
              по направление от лекар, ако имаш такова.
            </p>
          </div>
        </div>
      </section>

      <section className="quote-band">
        <div className="shell">
          <blockquote>
            Дойдох заради кръста. Останах, защото за първи път някой ми обясни
            какво точно правя, вместо да ми брои повторения.
          </blockquote>
          <cite>Радостина, клиент от 2023</cite>
        </div>
      </section>

      <section className="section shell">
        <div className="cta-block">
          <div>
            <h2>Графикът се обновява всяка неделя вечер</h2>
            <p style={{ color: "var(--ink-soft)", maxWidth: "48ch", marginTop: "1rem" }}>
              Две седмици напред, групови и индивидуални. Свободните места се
              виждат в реално време — без обаждане, без чакане за отговор.
            </p>
          </div>
          <Link href="/rezervacii" className="btn btn-primary">
            Запази час
          </Link>
        </div>
      </section>
    </>
  );
}

function ReformerDiagram() {
  return (
    <svg viewBox="0 0 420 250" className="reformer-svg" role="img" aria-label="Схема на реформър">
      <rect x="20" y="95" width="380" height="12" rx="6" fill="var(--rose-deep)" />
      <rect x="20" y="150" width="380" height="12" rx="6" fill="var(--rose-deep)" />
      <rect x="14" y="78" width="14" height="100" rx="5" fill="var(--plum)" />
      <rect x="392" y="78" width="14" height="100" rx="5" fill="var(--plum)" />
      <rect x="140" y="82" width="170" height="88" rx="10" fill="var(--plum)" />
      <rect x="150" y="92" width="150" height="68" rx="6" fill="var(--rose)" />
      <rect x="316" y="70" width="10" height="112" rx="5" fill="var(--ink)" />
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M46 ${100 + i * 16} q8 -7 16 0 q8 7 16 0 q8 -7 16 0 q8 7 16 0 q8 -7 16 0`}
          stroke={i < 2 ? "var(--plum)" : "var(--rose-deep)"}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      ))}
      <circle cx="356" cy="96" r="9" fill="none" stroke="var(--ink)" strokeWidth="3" />
      <circle cx="356" cy="156" r="9" fill="none" stroke="var(--ink)" strokeWidth="3" />
      <text x="20" y="215" fontFamily="var(--f-body)" fontSize="11" fill="var(--ink-soft)" letterSpacing="2">
        КАРЕТКА · ПРУЖИНИ · ФУТБАР · РЕМЪЦИ
      </text>
    </svg>
  );
}
