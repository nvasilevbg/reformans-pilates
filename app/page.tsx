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
        {/* Full-bleed Photo Layer */}
        <div className="hero-bg">
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            style={{ objectFit: "cover", objectPosition: "center center" }}
            fetchPriority="high"
          />
        </div>

        {/* Dual Scrim Overlays (Bottom for text, Top for Nav) */}
        <div className="hero-scrim-top" />
        <div className="hero-scrim-bottom" />

        {/* Hero Content Aligned Bottom-Left */}
        <div className="shell hero-fullscreen-content">
          <div className="animate-entrance hero-text-wrapper">
            <p className="hero-eyebrow">Лозенец · София</p>
            <h1 className="hero-title">
              Шест реформъра. <br />
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
