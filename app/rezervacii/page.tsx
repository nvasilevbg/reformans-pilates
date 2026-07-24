import BookingSystem from "@/components/Booking";

export const metadata = { title: "График & Резервации — Пилатес Реформър" };

export default function Rezervacii() {
  return (
    <div className="shell page-container animate-entrance">
      <header className="page-head">
        <p className="eyebrow">График & Онлайн Резервации</p>
        <h2>Запазете своя час онлайн</h2>
        <p>
          Изберете удобен ден и час от графика по-долу. Свободните места за всеки час
          се обновяват в реално време.
        </p>
      </header>

      <BookingSystem />
      <div style={{ height: "var(--space-8)" }} />
    </div>
  );
}
