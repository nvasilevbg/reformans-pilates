export const metadata = { title: "Политика за поверителност — Пилатес Реформър" };

export default function Poveritelnost() {
  return (
    <div className="shell page-container animate-entrance">
      <header className="page-head">
        <p className="eyebrow">Правни условия</p>
        <h2>Политика за поверителност на личните данни</h2>
        <p>Защитата на вашите данни е приоритет за нас (GDPR съвместимост).</p>
      </header>

      <div className="card" style={{ padding: "var(--space-8)", maxWidth: "800px", lineHeight: "1.65" }}>
        <h3>1. Защо събираме данни</h3>
        <p style={{ color: "var(--ink-soft)" }}>
          Събираме единствено необходимите данни (име, телефон, имейл) за целите на обработка на резервациите,
          връзка при промяна в графика и издаване на платежни документи.
        </p>

        <h3 style={{ marginTop: "var(--space-6)" }}>2. Сигурност на данните</h3>
        <p style={{ color: "var(--ink-soft)" }}>
          Вашите данни се обработват при спазване на регламента GDPR и не се предоставят на трети лица за маркетингови цели.
        </p>
      </div>
    </div>
  );
}
