import StudioImage from "@/components/StudioImage";
import { StudioImageKey } from "@/lib/images";

export const metadata = { title: "Инструктори — Пилатес Реформър" };

const TEAM: {
  name: string;
  role: string;
  since: string;
  bio: string;
  focus: string[];
  imageKey: StudioImageKey;
}[] = [
  {
    name: "Мира Дянкова",
    role: "Основател",
    since: "води от 2016",
    bio: "Кинезитерапевт по образование, реформър инструктор по стечение на обстоятелствата — след операция на коляното. Води основите и рехабилитационните сесии. Ако си след травма, започваш при нея.",
    focus: ["Рехабилитация", "Основи", "Постурална корекция"],
    imageKey: "instructorMira",
  },
  {
    name: "Ния Стоилова",
    role: "Старши инструктор",
    since: "води от 2019",
    bio: "Бивша състезателка по спортна гимнастика. Води Jumpboard и по-натоварените часове, но е известна с това, че спира класа, за да оправи нечие рамо. Сертифицирана по BASI Pilates.",
    focus: ["Jumpboard", "Напреднали", "Пред- и следродилно"],
    imageKey: "instructorNiya",
  },
  {
    name: "Калина Терзиева",
    role: "Инструктор",
    since: "води от 2022",
    bio: "Дойде като клиент с болки във врата от осем часа пред монитор, остана като инструктор. Води обедните и вечерните разтоварващи часове — тези за хора, които седят по цял ден.",
    focus: ["Гръбначен стълб", "Стречинг", "Начинаещи"],
    imageKey: "instructorKalina",
  },
];

export default function Instruktori() {
  return (
    <div className="shell page-container animate-entrance">
      <header className="page-head">
        <p className="eyebrow">Екип</p>
        <h2>Трима души, които ще знаят името ти до второто посещение</h2>
        <p>
          Няма ротация на инструктори. Ако си свикнал(а) с някой, ще го виждаш —
          графикът показва кой води всеки час предварително.
        </p>
      </header>

      <div style={{ display: "grid", gap: "var(--space-6)", paddingBottom: "var(--space-12)" }}>
        {TEAM.map((p, i) => (
          <article
            key={p.name}
            className="card"
            style={{
              display: "grid",
              gridTemplateColumns: "220px 1fr",
              gap: "var(--space-8)",
              padding: "var(--space-6)",
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative" }}>
              <StudioImage
                imageKey={p.imageKey}
                aspectRatio="3/4"
                sizes="(max-width: 760px) 100vw, 220px"
                style={{
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "var(--shadow-md)",
                  border: "var(--edge)",
                }}
              />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "1.25rem",
                  color: "var(--plum-dark)",
                  lineHeight: 1,
                  marginBottom: "var(--space-1)",
                }}
              >
                0{i + 1}
              </div>
              <h3 style={{ fontSize: "1.75rem", color: "var(--ink)", marginTop: 0 }}>{p.name}</h3>
              <p className="eyebrow" style={{ marginTop: "var(--space-1)", color: "var(--plum-dark)" }}>
                {p.role} · {p.since}
              </p>
              <p style={{ color: "var(--ink-soft)", marginTop: "var(--space-3)", lineHeight: "1.65" }}>
                {p.bio}
              </p>
              <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginTop: "var(--space-4)" }}>
                {p.focus.map((f) => (
                  <span
                    key={f}
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      padding: "var(--space-1) var(--space-3)",
                      borderRadius: "var(--radius-full)",
                      background: "var(--rose-wash)",
                      color: "var(--plum-dark)",
                      border: "var(--edge-rose)",
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
          article.card { grid-template-columns: 1fr !important; gap: var(--space-4) !important; }
        }
      `}</style>
    </div>
  );
}
