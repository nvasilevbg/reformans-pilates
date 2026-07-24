export const metadata = { title: "Правила на залата — Пилатес Реформър" };

export default function PravilaNaZalata() {
  return (
    <div className="shell page-container animate-entrance">
      <header className="page-head">
        <p className="eyebrow">За залата</p>
        <h2>Правила за безопасност и комфорт в студиото</h2>
        <p>За да осигурим спокойна и хигиенична среда за всеки трениращ.</p>
      </header>

      <div className="card" style={{ padding: "var(--space-8)", maxWidth: "800px", lineHeight: "1.65" }}>
        <h3>1. Точност и пристигане</h3>
        <p style={{ color: "var(--ink-soft)" }}>
          Моля, пристигайте 5-10 минути преди започването на часа. Закъснения над 10 минути не се допускат с оглед на безопасността.
        </p>

        <h3 style={{ marginTop: "var(--space-6)" }}>2. Чорапи с грайфери</h3>
        <p style={{ color: "var(--ink-soft)" }}>
          От хигиенна гледна точка и за добро сцепление на уреда реформър, тренировките се провеждат задължително с чорапи с противоплъзгащи грайфери.
        </p>
      </div>
    </div>
  );
}
