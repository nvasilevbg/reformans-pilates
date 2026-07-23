export const metadata = { title: "Галерия — Реформанс" };

const SHOTS = [
  { caption: "Залата в 7:20, преди първия час", tall: true, tone: "var(--rose)" },
  { caption: "Реформър №3 — най-търсеният, до прозореца", tall: false, tone: "var(--sand)" },
  { caption: "Пружините: жълта, синя, червена, зелена", tall: false, tone: "var(--rose-deep)" },
  { caption: "Съблекалня, шест шкафчета", tall: false, tone: "var(--sand)" },
  { caption: "Jumpboard в действие", tall: true, tone: "var(--rose)" },
  { caption: "Кът за чай след час", tall: false, tone: "var(--rose-wash)" },
];

export default function Galeriya() {
  return (
    <div className="shell">
      <header className="page-head">
        <p className="eyebrow">Галерия</p>
        <h2>Залата, без филтри и без наети модели</h2>
        <p>
          Снимките са от обикновени дни. Ако искаш да видиш мястото на живо преди
          да се запишеш, отбий се между 13:00 и 16:00 — обикновено е празно.
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gridAutoRows: "200px",
          gap: "1rem",
          paddingBottom: "2rem",
        }}
      >
        {SHOTS.map((s) => (
          <figure
            key={s.caption}
            style={{
              margin: 0,
              gridRow: s.tall ? "span 2" : "span 1",
              borderRadius: "18px",
              overflow: "hidden",
              border: "var(--edge)",
              background: s.tone,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              position: "relative",
            }}
          >
            {/* Заменете с <Image src="/galeriya/…" fill alt={s.caption} /> */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(255,255,255,0.35) 0 2px, transparent 2px 14px)",
              }}
            />
            <figcaption
              style={{
                position: "relative",
                padding: "0.9rem 1.1rem",
                background: "rgba(255,252,251,0.92)",
                fontSize: "0.85rem",
                color: "var(--ink-soft)",
              }}
            >
              {s.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
