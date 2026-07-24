import Link from "next/link";
import StudioImage from "@/components/StudioImage";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import { SparklesIcon, CheckIcon, StarIcon } from "@/components/Icons";
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
            style={{ objectFit: "cover", objectPosition: "68% 50%" }}
            fetchPriority="high"
          />
        </div>

        {/* Directional Scrim Overlays */}
        <div className="hero-scrim-top" />
        <div className="hero-scrim-directional" />

        {/* Hero Content Aligned Bottom-Left within Shell Container */}
        <div className="hero-fullscreen-content">
          <div className="animate-entrance hero-text-wrapper">
            <p className="hero-eyebrow">Лозенец · София</p>
            <h1 className="hero-title">
              Изваяно, стегнато тяло. <br className="desktop-break" />
              <em className="hero-accent">Без излишно напрежение.</em>
            </h1>
            <p className="hero-lede">
              Дълги, изваяни мускули, стегнат корем и елегантна стойка.
              Тренирай в малки групи до 6 души на реформър с сертифициран инструктор за бързи и видими резултати.
            </p>
            <div className="hero-actions">
              <a
                href="https://www.fitsys.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Запази час за тази седмица
              </a>
              <Link href="/ceni" className="btn btn-ghost-hero">
                Виж цените и картите
              </Link>
            </div>
          </div>
        </div>

        {/* Discrete Scroll Indicator */}
        <div className="hero-scroll-indicator" aria-hidden="true">
          <span className="scroll-arrow">↓</span>
        </div>
      </section>

      {/* Trust & Beginner Guarantee Callout Banner */}
      <section className="shell" style={{ marginTop: "var(--space-8)" }}>
        <div
          className="card animate-entrance"
          style={{
            background: "var(--surface-raised)",
            border: "1px solid var(--rose-soft)",
            padding: "var(--space-6) var(--space-8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-6)",
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "68ch" }}>
            <span className="eyebrow" style={{ color: "var(--plum-dark)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <SparklesIcon size={15} color="var(--plum-dark)" /> 100% Подходящо за начинаещи
            </span>
            <h3 style={{ margin: "var(--space-1) 0 var(--space-2)", fontSize: "1.25rem" }}>
              Никога не си тренирал/а на пилатес реформър?
            </h3>
            <p style={{ margin: 0, color: "var(--ink-soft)", fontSize: "0.95rem" }}>
              Над 80% от новите ни клиенти започват от нулата. Първата ти сесия е с меко темпо,
              с пълна персонална настройка на уреда и внимателно водене стъпка по стъпка.
            </p>
          </div>
          <a
            href="https://www.fitsys.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Пробвай първи час
          </a>
        </div>
      </section>

      {/* 3 Core Benefits Section */}
      <section className="section shell">
        <div className="section-head">
          <p className="eyebrow">Защо Реформанс</p>
          <h2>Три причини да избереш тренировка на реформър при нас</h2>
        </div>

        <div className="pillars">
          <div className="animate-entrance" style={{ animationDelay: "0.1s" }}>
            <div className="pillar-image-wrapper">
              <StudioImage
                imageKey="pillarGroup"
                aspectRatio="16/10"
              />
            </div>
            <span className="pillar-badge">
              <SparklesIcon size={14} color="var(--plum-dark)" /> Изваян корем & Стойка
            </span>
            <h3>Стегната мускулатура и изправена стойка</h3>
            <p>
              Специализирани реформър упражнения, които стягат коремния корсет, оформят бедрата
              и освобождават напрежението в гръбнака от първия час.
            </p>
          </div>

          <div className="animate-entrance" style={{ animationDelay: "0.2s" }}>
            <div className="pillar-image-wrapper">
              <StudioImage
                imageKey="pillarPrivate"
                aspectRatio="16/10"
              />
            </div>
            <span className="pillar-badge">
              <CheckIcon size={14} color="var(--plum-dark)" /> Максимум 6 души
            </span>
            <h3>Персонално внимание във всяко движение</h3>
            <p>
              Без масови класове от 15-20 души. При нас залата разполага с точно 6 уреда,
              за да може инструкторът да следи и коригира стойката ти в реално време.
            </p>
          </div>

          <div className="animate-entrance" style={{ animationDelay: "0.3s" }}>
            <div className="pillar-image-wrapper">
              <StudioImage
                imageKey="pillarRehab"
                aspectRatio="16/10"
              />
            </div>
            <span className="pillar-badge">
              <StarIcon size={14} color="var(--plum-dark)" /> Сертифициран екип
            </span>
            <h3>Безопасност и прецизна техника</h3>
            <p>
              Инструкторите ни са международно сертифицирани пилатес специалисти.
              Изграждаме тонус и гъвкавост без агресивно натоварване или риск от травми.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Space & Atmosphere Section */}
      <section className="section shell">
        <div className="home-studio-grid animate-entrance">
          <div>
            <p className="eyebrow">За залата в Лозенец</p>
            <h2>Студио, създадено за спокойствие и прецизност</h2>
            <p style={{ color: "var(--ink-soft)", marginTop: "var(--space-3)" }}>
              Отворихме врати на ул. „Кричим“ 42 с една основна цел: да предложим уютно пространство,
              в което всеки трениращ получава прецизна настройка на уреда, корекция на стойката
              и персонално внимание от квалифициран инструктор.
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

      {/* 3 Photo Testimonials Section */}
      <Testimonials />

      {/* Team Preview Section */}
      <section className="section shell">
        <div className="section-head">
          <p className="eyebrow">Екип</p>
          <h2>Инструкторите в Реформанс</h2>
          <p>
            Сертифицирани специалисти, които опознават спецификите на тялото ви и следят напредъка ви във всяко движение.
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
              Сертифициран пилатес инструктор с над 8 години опит. Води основните и възстановителните сесии.
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
              Сертифицирана по BASI Pilates и бивша състезателка по гимнастика. Води динамичния Jumpboard.
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
              Специализира в облекчаването на болки в гърба и стойката при хора със седящи професии.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "var(--space-8)", textAlign: "left" }}>
          <Link href="/instruktori" className="btn btn-ghost">
            Виж целия екип и биографии
          </Link>
        </div>
      </section>

      {/* Conversion FAQ Accordion Section */}
      <section className="section shell">
        <div className="section-head">
          <p className="eyebrow">Често задавани въпроси</p>
          <h2>Всичко, което искаш да знаеш преди първия си час</h2>
          <p>
            Имаш притеснения или въпроси? Ето кратки и ясни отговори за нашите часове.
          </p>
        </div>

        <FAQSection />
      </section>

      {/* CTA Block */}
      <section className="section shell">
        <div className="cta-block animate-entrance">
          <div>
            <h2>Готов/а ли си за първия си час?</h2>
            <p style={{ color: "var(--ink-soft)", maxWidth: "48ch", marginTop: "var(--space-2)" }}>
              Местата в залата са ограничени до 6 уреда в час. Графикът за следващите две седмици е активен онлайн.
            </p>
          </div>
          <a
            href="https://www.fitsys.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Запази час за тази седмица
          </a>
        </div>
      </section>
    </>
  );
}
