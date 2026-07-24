export const metadata = { title: "Политика за бисквитки — Пилатес Реформър" };

export default function Biskvitki() {
  return (
    <div className="shell page-container animate-entrance">
      <header className="page-head">
        <p className="eyebrow">Правни условия</p>
        <h2>Политика за бисквитки (Cookies)</h2>
        <p>Информация за бисквитките, използвани на сайта.</p>
      </header>

      <div className="card" style={{ padding: "var(--space-8)", maxWidth: "800px", lineHeight: "1.65" }}>
        <h3>Какви бисквитки използваме</h3>
        <p style={{ color: "var(--ink-soft)" }}>
          Използваме единствено анонимни технически и функционални бисквитки за запазване на сесията и правилното функциониране на онлайн графика.
        </p>
      </div>
    </div>
  );
}
