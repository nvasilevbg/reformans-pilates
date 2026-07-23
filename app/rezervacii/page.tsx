import BookingSystem from "@/components/Booking";

export const metadata = { title: "Резервации — Пилатес Реформър" };

export default function Rezervacii() {
  return (
    <div className="shell page-container animate-entrance">
      <header className="page-head">
        <p className="eyebrow">График · две седмици напред</p>
        <h2>Избери ден, после час</h2>
        <p>
          Свободните места се броят на живо. Групов час тръгва при минимум двама
          записани — ако три часа преди старта няма втори човек, ще ти се обадим
          и часът отпада без да ти се приспада посещение.
        </p>
      </header>
      <BookingSystem />
      <div style={{ height: "var(--space-8)" }} />
    </div>
  );
}
