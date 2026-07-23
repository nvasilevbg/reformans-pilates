import Link from "next/link";
import StudioImage from "@/components/StudioImage";

export const metadata = { title: "За нас — Пилатес Реформър" };

export default function ZaNas() {
  return (
    <div className="shell page-container animate-entrance">
      <header className="page-head">
        <p className="eyebrow">За студиото</p>
        <h2>Реформанс — бутиково студио за пилатес реформър в София</h2>
        <p>
          Създадохме студиото с ясно намерение: да съчетаем анатомичната прецизност
          на кинезитерапията с ефективността и елегантността на пилатес реформър.
        </p>
      </header>

      {/* Studio atmosphere photo */}
      <div style={{ marginBottom: "var(--space-12)" }}>
        <StudioImage
          imageKey="aboutDetail"
          aspectRatio="16/9"
          sizes="100vw"
          style={{
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-md)",
            border: "var(--edge)",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "var(--space-8)",
          paddingBottom: "var(--space-12)",
        }}
      >
        <div>
          <h3>Защо точно 6 уреда</h3>
          <p style={{ color: "var(--ink-soft)", lineHeight: "1.65" }}>
            Това е оптималният брой трениращи, при който инструкторът може да обърне
            лично внимание на всеки, да коригира стойката и да настрои пружините
            спрямо индивидуалното ниво.
          </p>
        </div>
        <div>
          <h3>Нашата философия</h3>
          <p style={{ color: "var(--ink-soft)", lineHeight: "1.65" }}>
            Спокойно пространство без излишен шум, силна музика или бързане.
            Наблягаме на правилното дишане, контрола върху мускулатурата и безопасното
            изпълнение на всяко движение.
          </p>
        </div>
        <div>
          <h3>За кого са нашите часове</h3>
          <p style={{ color: "var(--ink-soft)", lineHeight: "1.65" }}>
            Както за начинаещи, така и за хора с дискомфорт в гърба от седяща работа,
            майки в период на възстановяване след раждане или спортисти, търсещи мобилност и баланс.
          </p>
        </div>
      </div>

      <section className="section">
        <h2>Първото ви посещение — стъпка по стъпка</h2>
        <ol
          style={{
            listStyle: "none",
            padding: 0,
            margin: "var(--space-8) 0 0",
            display: "grid",
            gap: 0,
            counterReset: "step",
          }}
        >
          {[
            ["Онлайн запазване на час", "Избирате удобен ден и час от графика. За първи път препоръчваме „Reformer Основи“ или индивидуална сесия."],
            ["Идване 15 минути по-рано", "Попълвате кратък въпросник за физическото състояние и евентуални предишни травми."],
            ["Персонална настройка на уреда", "Регулираме височината на футбара, дължината на ремъците и съпротивлението на пружините спрямо вашата височина."],
            ["Основната тренировка", "Петдесет минути осъзнати движения. Темпото е прецизно, с фокус върху правилното дишане и задействане на дълбоките мускули."],
            ["Препоръка за последваща практика", "След часа инструкторът ви дава обратна връзка дали за вас са подходящи груповите часове или индивидуалната работа."],
          ].map(([title, body], i) => (
            <li
              key={title}
              style={{
                display: "grid",
                gridTemplateColumns: "70px 1fr",
                gap: "var(--space-6)",
                padding: "var(--space-6) 0",
                borderTop: "var(--edge)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "1.8rem",
                  color: "var(--plum-dark)",
                }}
              >
                0{i + 1}
              </span>
              <div>
                <h3 style={{ fontSize: "1.15rem", marginTop: 0, marginBottom: "var(--space-1)" }}>{title}</h3>
                <p style={{ color: "var(--ink-soft)", margin: 0 }}>{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div style={{ paddingBottom: "var(--space-8)" }}>
        <Link href="/rezervacii" className="btn btn-primary">
          Запазете своя час
        </Link>
      </div>
    </div>
  );
}
