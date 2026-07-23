import Link from "next/link";
import StudioImage from "@/components/StudioImage";

export const metadata = { title: "За нас — Пилатес Реформър" };

export default function ZaNas() {
  return (
    <div className="shell animate-entrance">
      <header className="page-head">
        <p className="eyebrow">За студиото</p>
        <h2>Отворихме, защото Мира не намери зала, в която да се възстанови</h2>
        <p>
          2016-та, след операция на предна кръстна връзка. Големите фитнеси
          предлагаха групи от петнайсет души, а рехабилитационните кабинети —
          двайсет минути на маса. Между двете нямаше нищо.
        </p>
      </header>

      {/* Studio atmosphere photo */}
      <div style={{ marginBottom: "3.5rem" }}>
        <StudioImage
          imageKey="aboutDetail"
          aspectRatio="16/9"
          sizes="100vw"
          style={{
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-md)",
            border: "var(--edge-rose)",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.5rem",
          paddingBottom: "3rem",
        }}
      >
        <div>
          <h3 style={{ marginBottom: "0.75rem" }}>Защо шест уреда</h3>
          <p style={{ color: "var(--ink-soft)", lineHeight: "1.65" }}>
            Защото толкова души един инструктор може да наблюдава едновременно,
            без да превърне часа в аеробика. Пробвахме с осем през 2018-та.
            Върнахме се на шест след три месеца.
          </p>
        </div>
        <div>
          <h3 style={{ marginBottom: "0.75rem" }}>Какво няма тук</h3>
          <p style={{ color: "var(--ink-soft)", lineHeight: "1.65" }}>
            Огледални стени, музика над 70 децибела, класации, снимки в час,
            договори за година. Ако търсиш енергия и високо темпо, има по-добри
            зали в квартала и ще ти ги препоръчаме честно.
          </p>
        </div>
        <div>
          <h3 style={{ marginBottom: "0.75rem" }}>Кой идва при нас</h3>
          <p style={{ color: "var(--ink-soft)", lineHeight: "1.65" }}>
            Средната възраст е 38. Половината идват заради гръб или врат от
            седяща работа. Една четвърт са след раждане. Останалите просто са
            открили, че им харесва.
          </p>
        </div>
      </div>

      <hr className="rule" />

      <section className="section">
        <h2>Първото ти посещение, стъпка по стъпка</h2>
        <ol
          style={{
            listStyle: "none",
            padding: 0,
            margin: "2.5rem 0 0",
            display: "grid",
            gap: "0",
            counterReset: "step",
          }}
        >
          {[
            ["Записваш се онлайн", "Избираш ден и час от графика. За първи път препоръчваме „Reformer Основи“ или индивидуална сесия."],
            ["Идваш 15 минути по-рано", "Попълваш кратък въпросник за здравословно състояние. Отнема три минути."],
            ["Настройваме уреда за теб", "Височина на футбара, дължина на ремъците, тежест на пружините. Записваме ги, за да не се повтаря всеки път."],
            ["Часът", "Петдесет минути. Спираме, ако нещо боли. Болка и усилие не са едно и също и ще научиш разликата."],
            ["След това", "Казваме ти честно дали ти трябва групов час или индивидуална работа. Понякога отговорът е физиотерапевт, не пилатес."],
          ].map(([title, body], i) => (
            <li
              key={title}
              style={{
                display: "grid",
                gridTemplateColumns: "70px 1fr",
                gap: "1.5rem",
                padding: "1.75rem 0",
                borderTop: "var(--edge)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "1.8rem",
                  color: "var(--rose-deep)",
                }}
              >
                {i + 1}
              </span>
              <div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.4rem" }}>{title}</h3>
                <p style={{ color: "var(--ink-soft)", margin: 0 }}>{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div style={{ paddingBottom: "2rem" }}>
        <Link href="/rezervacii" className="btn btn-primary">
          Запази първия си час
        </Link>
      </div>
    </div>
  );
}
