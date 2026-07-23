"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Booking,
  MONTHS,
  Slot,
  WEEKDAYS,
  formatDayLabel,
  freeSeats,
  generateSlots,
  slotStatus,
} from "@/lib/schedule";
import "./booking.css";

type Filter = "all" | "group" | "private" | "free";

export default function BookingSystem() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Slot | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Generated on the client so "today" is the visitor's today.
  useEffect(() => {
    const s = generateSlots(14);
    setSlots(s);
    setSelectedDate(s[0]?.date ?? "");
  }, []);

  const days = useMemo(() => {
    const map = new Map<string, Slot[]>();
    slots.forEach((s) => {
      if (!map.has(s.date)) map.set(s.date, []);
      map.get(s.date)!.push(s);
    });
    return Array.from(map.entries());
  }, [slots]);

  const visible = useMemo(() => {
    const forDay = slots.filter((s) => s.date === selectedDate);
    if (filter === "group") return forDay.filter((s) => s.type === "group");
    if (filter === "private") return forDay.filter((s) => s.type === "private");
    if (filter === "free") return forDay.filter((s) => freeSeats(s) > 0);
    return forDay;
  }, [slots, selectedDate, filter]);

  function confirm(booking: Booking) {
    setSlots((prev) =>
      prev.map((s) => (s.id === booking.slotId ? { ...s, booked: s.booked + 1 } : s))
    );
    setBookings((prev) => [...prev, booking]);
    setActive(null);
  }

  function cancel(slotId: string) {
    setSlots((prev) =>
      prev.map((s) => (s.id === slotId ? { ...s, booked: Math.max(0, s.booked - 1) } : s))
    );
    setBookings((prev) => prev.filter((b) => b.slotId !== slotId));
  }

  if (!slots.length) {
    return <div className="bk-empty">Зареждаме графика…</div>;
  }

  return (
    <>
      {bookings.length > 0 && (
        <div className="bk-mine">
          <p className="eyebrow" style={{ margin: 0 }}>
            Твоите резервации
          </p>
          <ul>
            {bookings.map((b) => {
              const s = slots.find((x) => x.id === b.slotId)!;
              return (
                <li key={b.slotId}>
                  <span>
                    <b>{s.title}</b> — {formatDayLabel(s.date)}, {s.start}
                  </span>
                  <button
                    onClick={() => cancel(b.slotId)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--plum)",
                      cursor: "pointer",
                      textDecoration: "underline",
                      fontFamily: "var(--f-body)",
                      fontSize: "0.85rem",
                    }}
                  >
                    Откажи
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="bk-daystrip">
        {days.map(([date, daySlots]) => {
          const [y, m, d] = date.split("-").map(Number);
          const dow = new Date(y, m - 1, d).getDay();
          const free = daySlots.reduce((n, s) => n + freeSeats(s), 0);
          return (
            <button
              key={date}
              className="bk-day"
              data-selected={date === selectedDate}
              data-none={free === 0}
              onClick={() => setSelectedDate(date)}
            >
              <div className="bk-day-dow">{WEEKDAYS[dow]}</div>
              <div className="bk-day-num">{d}</div>
              <div className="bk-day-free">{free === 0 ? "пълно" : `${free} места`}</div>
            </button>
          );
        })}
      </div>

      <div className="bk-filters">
        <span className="eyebrow" style={{ marginRight: "0.4rem" }}>
          Покажи
        </span>
        {(
          [
            ["all", "Всички"],
            ["group", "Групови"],
            ["private", "Индивидуални"],
            ["free", "Само свободни"],
          ] as [Filter, string][]
        ).map(([key, label]) => (
          <button
            key={key}
            className="bk-chip"
            data-on={filter === key}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
        <span style={{ marginLeft: "auto", fontSize: "0.85rem", color: "var(--ink-soft)" }}>
          {formatDayLabel(selectedDate)}
        </span>
      </div>

      {visible.length === 0 ? (
        <div className="bk-empty">
          Няма часове по този филтър за {formatDayLabel(selectedDate)}. Виж друг ден или
          махни филтъра.
        </div>
      ) : (
        <div className="bk-list">
          {visible.map((s) => {
            const free = freeSeats(s);
            const status = slotStatus(s);
            const mine = bookings.some((b) => b.slotId === s.id);
            return (
              <div key={s.id} className="bk-slot" data-full={free === 0}>
                <div className="bk-time">
                  {s.start}
                  <small>до {s.end}</small>
                </div>

                <div>
                  <div className="bk-title">
                    {s.title}
                    {s.type === "private" && <span className="bk-tag">1:1</span>}
                  </div>
                  <div className="bk-meta">
                    {s.instructor} · {s.level}
                  </div>
                </div>

                <div className="bk-spring">
                  <div className="bk-spring-track" aria-hidden="true">
                    {Array.from({ length: s.capacity }).map((_, i) => (
                      <div
                        key={i}
                        className="bk-coil"
                        data-taken={i < s.booked}
                        style={{ height: i < s.booked ? "22px" : "9px" }}
                      />
                    ))}
                  </div>
                  <div className="bk-spring-label" data-status={status}>
                    {s.type === "private" ? (
                      free === 0 ? (
                        <b>Заето</b>
                      ) : (
                        <b>Свободен слот</b>
                      )
                    ) : free === 0 ? (
                      <b>Пълен клас</b>
                    ) : (
                      <>
                        <b>{free}</b> от {s.capacity} свободни
                      </>
                    )}
                  </div>
                </div>

                <div className="bk-action">
                  {mine ? (
                    <button className="btn btn-ghost" onClick={() => cancel(s.id)}>
                      Записан(а)
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      disabled={free === 0}
                      onClick={() => setActive(s)}
                    >
                      {free === 0 ? "Няма места" : "Запази"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="bk-legend">
        <span>
          <i style={{ background: "var(--rose)" }} />
          свободно място
        </span>
        <span>
          <i style={{ background: "var(--plum)" }} />
          заето място
        </span>
        <span>Всеки блок = един реформър в залата.</span>
      </div>

      {active && <BookingModal slot={active} onClose={() => setActive(null)} onConfirm={confirm} />}
    </>
  );
}

function BookingModal({
  slot,
  onClose,
  onConfirm,
}: {
  slot: Slot;
  onClose: () => void;
  onConfirm: (b: Booking) => void;
}) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", note: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    function esc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [onClose]);

  function submit() {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "Въведи име, за да те посрещнем.";
    if (!/^[0-9+\s()-]{6,}$/.test(form.phone.trim()))
      e.phone = "Телефонът трябва да съдържа поне 6 цифри.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = "Провери имейла — липсва @ или домейн.";
    setErrors(e);
    if (Object.keys(e).length) return;

    onConfirm({ slotId: slot.id, ...form, createdAt: new Date().toISOString() });
  }

  const [y, m, d] = slot.date.split("-").map(Number);

  return (
    <div className="bk-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="bk-modal" onClick={(e) => e.stopPropagation()}>
        <p className="eyebrow">Резервация</p>
        <h3>{slot.title}</h3>

        <div className="bk-summary">
          <div>
            <strong>
              {d} {MONTHS[m - 1]}
            </strong>{" "}
            · {slot.start}–{slot.end}
          </div>
          <div>Инструктор: {slot.instructor}</div>
          <div>
            {slot.type === "private"
              ? "Индивидуална сесия"
              : `Групов час · ${freeSeats(slot)} свободни места`}
          </div>
        </div>

        <label className="bk-field">
          <span>Име</span>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Име и фамилия"
          />
          {errors.name && <div className="bk-error">{errors.name}</div>}
        </label>

        <label className="bk-field">
          <span>Телефон</span>
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="0888 000 000"
          />
          {errors.phone && <div className="bk-error">{errors.phone}</div>}
        </label>

        <label className="bk-field">
          <span>Имейл</span>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="ime@primer.bg"
          />
          {errors.email && <div className="bk-error">{errors.email}</div>}
        </label>

        <label className="bk-field">
          <span>Нещо, което да знаем (по желание)</span>
          <textarea
            value={form.note}
            onChange={(e) => setForm({ ...form, note: e.target.value })}
            placeholder="Травми, бременност, първо посещение…"
          />
        </label>

        <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
          <button className="btn btn-primary" onClick={submit}>
            Потвърди часа
          </button>
          <button className="btn btn-ghost" onClick={onClose}>
            Назад
          </button>
        </div>

        <p style={{ fontSize: "0.78rem", color: "var(--ink-soft)", marginTop: "1.25rem" }}>
          Отказ без такса до 12 часа преди часа. По-късен отказ приспада едно посещение
          от картата.
        </p>
      </div>
    </div>
  );
}
