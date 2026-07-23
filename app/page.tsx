import Link from "next/link";
import StudioImage from "@/components/StudioImage";
import "./home.css";

export default function Home() {
  return (
    <>
      {/* Hero Section with Split Layout & Studio Real Photo */}
      <section className="hero">
        <div className="shell hero-inner">
          <div className="animate-entrance">
            <p className="eyebrow">Пилатес реформър студио · ул. Кричим 42, Лозенец</p>
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

          <div className="hero-panel animate-entrance" style={{ animationDelay: "0.15s" }}>
            <StudioImage
              imageKey="heroStudio"
              priority
              aspectRatio="3/2"
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)" }}
            />
            <p className="hero-panel-note">
              Всеки реформър в залата е номериран. Като резервираш, виждаш точно
              колко от шестте са свободни за този час.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="pillars">
          <div className="animate-entrance" style={{ animationDelay: "0.1s" }}>
            <StudioImage
              imageKey="pillarGroup"
              aspectRatio="16/10"
              style={{ borderRadius: "var(--radius-md)", marginBottom: "1.25rem" }}
            />
            <p className="eyebrow">Групови часове</p>
            <h3>Максимум шест</h3>
            <p>
              Петдесет минути на уред, с инструктор, който минава през всички.
              Ниво се обявява предварително, за да не попаднеш в час, който не
              ти пасва.
            </p>
          </div>
          <div className="animate-entrance" style={{ animationDelay: "0.2s" }}>
            <StudioImage
              imageKey="pillarPrivate"
              aspectRatio="16/10"
              style={{ borderRadius: "var(--radius-md)", marginBottom: "1.25rem" }}
            />
            <p className="eyebrow">Индивидуално</p>
            <h3>Един на един</h3>
            <p>
              За старт след пауза, след раждане или след травма. Първата сесия е
              оценка на движение — без пружини, само наблюдение и разговор.
            </p>
          </div>
          <div className="animate-entrance" style={{ animationDelay: "0.3s" }}>
            <StudioImage
              imageKey="pillarRehab"
              aspectRatio="16/10"
              style={{ borderRadius: "var(--radius-md)", marginBottom: "1.25rem" }}
            />
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
        <div className="cta-block animate-entrance">
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
