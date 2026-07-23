export const metadata = { title: "Инструктори — Реформанс" };

const TEAM = [
  {
    name: "Мира Дянкова",
    role: "Основател",
    since: "води от 2016",
    bio: "Кинезитерапевт по образование, реформър инструктор по стечение на обстоятелствата — след операция на коляното. Води основите и рехабилитационните сесии. Ако си след травма, започваш при нея.",
    focus: ["Рехабилитация", "Основи", "Постурална корекция"],
  },
  {
    name: "Ния Стоилова",
    role: "Старши инструктор",
    since: "води от 2019",
    bio: "Бивша състезателка по спортна гимнастика. Води Jumpboard и по-натоварените часове, но е известна с това, че спира класа, за да оправи нечие рамо. Сертифицирана по BASI Pilates.",
    focus: ["Jumpboard", "Напреднали", "Пред- и следродилно"],
  },
  {
    name: "Калина Терзиева",
    role: "Инструктор",
    since: "води от 2022",
    bio: "Дойде като клиент с болки във врата от осем часа пред монитор, остана като инструктор. Води обедните и вечерните разтоварващи часове — тези за хора, които седят по цял ден.",
    focus: ["Гръбначен стълб", "Стречинг", "Начинаещи"],
  },
];

export default function Instruktori() {
  return (
    <div className="shell">
      <header className="page-head">
        <p className="eyebrow">Екип</p>
        <h2>Трима души, които ще знаят името ти до второто посещение</h2>
        <p>
          Няма ротация на инструктори. Ако си свикнал(а) с някой, ще го виждаш —
          графикът показва кой води всеки час предварително.
        </p>
      </header>

      <div style={{ display: "grid", gap: "1.5rem", paddingBottom: "2rem" }}>
        {TEAM.map((p, i) => (
          <article
            key={p.name}
            className="card"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) minmax(0,2fr)",
              gap: "2.5rem",
              padding: "2.25rem",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "3.5rem",
                  color: "var(--rose-deep)",
                  lineHeight: 1,
                }}
              >
                0{i + 1}
              </div>
              <h3 style={{ marginTop: "1rem", fontSize: "1.5rem" }}>{p.name}</h3>
              <p className="eyebrow" style={{ marginTop: "0.5rem" }}>
                {p.role} · {p.since}
              </p>
            </div>
            <div>
              <p style={{ color: "var(--ink-soft)" }}>{p.bio}</p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1.25rem" }}>
                {p.focus.map((f) => (
                  <span
                    key={f}
                    style={{
                      fontSize: "0.75rem",
                      padding: "0.3rem 0.8rem",
                      borderRadius: "999px",
                      background: "var(--rose)",
                      color: "var(--plum)",
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        @media (max-width: 760px) {
          article.card { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </div>
  );
}
