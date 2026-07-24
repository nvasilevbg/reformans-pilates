import BookingSystem from "@/components/Booking";

export const metadata = { title: "График & Резервации — Пилатес Реформър" };

export default function Rezervacii() {
  return (
    <div className="shell page-container animate-entrance">
      <header className="page-head">
        <p className="eyebrow">График & Онлайн Резервации</p>
        <h2>Запазете своя час през Fitsys</h2>
        <p>
          Онлайн резервационната система на Реформанс се обслужва директно от Fitsys.
          Изберете удобен час от графика по-долу или влезте директно в Fitsys за бързо запазване.
        </p>
      </header>

      <BookingSystem />
      <div style={{ height: "var(--space-8)" }} />
    </div>
  );
}
