import Link from "next/link";
import StudioImage from "@/components/StudioImage";
import { STUDIO_IMAGES } from "@/lib/images";
import "./home.css";

export default function Home() {
  const heroImage = STUDIO_IMAGES.heroStudio;

  return (
    <>
      {/* Full-Screen Background Photo Hero (100svh) */}
      <section className="hero-fullscreen">
        {/* Full-bleed Photo Layer (Shifted 68% X to position instructor on right) */}
        <div className="hero-bg">
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            style={{ objectFit: "cover", objectPosition: "68% 50%" }}
            fetchPriority="high"
          />
        </div>

        {/* Directional Scrim Overlays (Solid Bottom-Left for Text, Luminous Top-Right for Studio) */}
        <div className="hero-scrim-top" />
        <div className="hero-scrim-directional" />

        {/* Hero Content Aligned Bottom-Left within Shell Container */}
        <div className="hero-fullscreen-content">
          <div className="animate-entrance hero-text-wrapper">
            <p className="hero-eyebrow">Лозенец · София</p>
            <h1 className="hero-title">
              Шест реформъра. <br className="desktop-break" />
              <em className="hero-accent">Нито един</em> излишен.
            </h1>
            <p className="hero-lede">
              Работим с групи до шест души, защото на седмия човек инструкторът
              спира да гледа и започва да брои.
            </p>
            <div className="hero-actions">
              <Link href="/rezervacii" className="btn btn-primary">
                Виж свободните часове
              </Link>
              <Link href="/za-nas" className="btn btn-ghost-hero">
                Как работим
              </Link>
            </div>
          </div>
        </div>

        {/* Discrete Scroll Indicator */}
        <div className="hero-scroll-indicator" aria-hidden="true">
          <span className="scroll-arrow">↓</span>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section shell">
        <div className="pillars">
          <div className="animate-entrance" style={{ animationDelay: "0.1s" }}>
            <StudioImage
              imageKey="pillarGroup"
              aspectRatio="16/10"
              style={{ borderRadius: "var(--radius-md)", marginBottom: "var(--space-4)" }}
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
              style={{ borderRadius: "var(--radius-md)", marginBottom: "var(--space-4)" }}
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
              style={{ borderRadius: "var(--radius-md)", marginBottom: "var(--space-4)" }}
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

      {/* Studio Space & Atmosphere Section */}
      <section className="section shell">
        <div className="home-studio-grid animate-entrance">
          <div>
            <p className="eyebrow">За залата в Лозенец</p>
            <h2>Студио, създадено за точност и внимание</h2>
            <p style={{ color: "var(--ink-soft)", marginTop: "var(--space-3)" }}>
              Отворихме врати на ул. Кричим 42 с една яснa цел: да предложим пространство,
              в което всеки човек получава перфектно настройване на уреда, корекция на стойката
              и персонално внимание от опитен кинезитерапевт.
            </p>
            <p style={{ color: "var(--ink-soft)", marginTop: "var(--space-2)" }}>
              Залата разполага с 6 оригинални реформъра, естествена светлина, самостоятелни
              шкафчета и кът за билков чай след тренировка.
            </p>
            <div style={{ marginTop: "var(--space-6)" }}>
              <Link href="/za-nas" className="btn btn-ghost">
                Научи повече за нас
              </Link>
            </div>
          </div>
          <div>
            <StudioImage
              imageKey="aboutDetail"
              aspectRatio="16/10"
              style={{
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-md)",
                border: "var(--edge)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Quote Band */}
      <section className="quote-band">
        <div className="shell">
          <blockquote>
            Дойдох заради кръста. Останах, защото за първи път някой ми обясни
            какво точно правя, вместо да ми брои повторения.
          </blockquote>
          <cite>Радостина, клиент от 2023</cite>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="section shell">
        <div style={{ textAlign: "left", marginBottom: "var(--space-8)" }}>
          <p className="eyebrow">Екип</p>
          <h2>Инструкторите в Реформанс</h2>
          <p style={{ color: "var(--ink-soft)", maxWidth: "60ch" }}>
            Трима сертифицирани специалисти, които знаят името ти и спецификите на тялото ти още от второто посещение.
          </p>
        </div>

        <div className="team-preview-grid">
          <div className="card team-card animate-entrance" style={{ animationDelay: "0.1s" }}>
            <StudioImage
              imageKey="instructorMira"
              aspectRatio="3/4"
              style={{ borderRadius: "var(--radius-md)", marginBottom: "var(--space-4)" }}
            />
            <p className="eyebrow" style={{ color: "var(--plum-dark)" }}>Основател</p>
            <h3 style={{ marginTop: 0 }}>Мира Дянкова</h3>
            <p style={{ fontSize: "0.88rem", color: "var(--ink-soft)", margin: 0 }}>
              Кинезитерапевт с над 8 години опит. Води основите и рехабилитационните сесии.
            </p>
          </div>

          <div className="card team-card animate-entrance" style={{ animationDelay: "0.2s" }}>
            <StudioImage
              imageKey="instructorNiya"
              aspectRatio="3/4"
              style={{ borderRadius: "var(--radius-md)", marginBottom: "var(--space-4)" }}
            />
            <p className="eyebrow" style={{ color: "var(--plum-dark)" }}>Старши инструктор</p>
            <h3 style={{ marginTop: 0 }}>Ния Стоилова</h3>
            <p style={{ fontSize: "0.88rem", color: "var(--ink-soft)", margin: 0 }}>
              Бивша състезателка по гимнастика, сертифицирана по BASI Pilates. Води Jumpboard.
            </p>
          </div>

          <div className="card team-card animate-entrance" style={{ animationDelay: "0.3s" }}>
            <StudioImage
              imageKey="instructorKalina"
              aspectRatio="3/4"
              style={{ borderRadius: "var(--radius-md)", marginBottom: "var(--space-4)" }}
            />
            <p className="eyebrow" style={{ color: "var(--plum-dark)" }}>Инструктор</p>
            <h3 style={{ marginTop: 0 }}>Калина Терзиева</h3>
            <p style={{ fontSize: "0.88rem", color: "var(--ink-soft)", margin: 0 }}>
              Специалист по корекция на гръбначния стълб и стречинг за работещи пред монитор.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "var(--space-8)", textAlign: "center" }}>
          <Link href="/instruktori" className="btn btn-ghost">
            Виж целия екип и биографии
          </Link>
        </div>
      </section>

      {/* CTA Block */}
      <section className="section shell">
        <div className="cta-block animate-entrance">
          <div>
            <h2>Графикът се обновява всяка неделя вечер</h2>
            <p style={{ color: "var(--ink-soft)", maxWidth: "48ch", marginTop: "var(--space-2)" }}>
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
