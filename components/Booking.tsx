"use client";

import { useEffect, useMemo, useState } from "react";
import {
  MONTHS,
  Slot,
  WEEKDAYS,
  formatDayLabel,
  freeSeats,
  generateSlots,
} from "@/lib/schedule";
import "./booking.css";

type Filter = "all" | "group" | "private" | "free";

export default function BookingSystem() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  // Generated on the client so "today" is the visitor's today.
  useEffect(() => {
    const s = generateSlots(14);
    setSlots(s);
    setSelectedDate(s[0]?.date ?? "");
  }, []);

  const days = useMemo(() => {
    const map = new Map<string, Slot[]>();
    slots.forEach((slot) => {
      const arr = map.get(slot.date) ?? [];
      arr.push(slot);
      map.set(slot.date, arr);
    });
    return Array.from(map.entries()).map(([date, items]) => ({ date, items }));
  }, [slots]);

  const activeDaySlots = useMemo(() => {
    const day = days.find((d) => d.date === selectedDate);
    if (!day) return [];
    return day.items.filter((s) => {
      const free = freeSeats(s);
      if (filter === "group") return s.type === "group";
      if (filter === "private") return s.type === "private";
      if (filter === "free") return free > 0;
      return true;
    });
  }, [days, selectedDate, filter]);

  return (
    <div className="bk-wrapper">
      {/* Banner directing to online booking */}
      <div
        className="card"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-4)",
          background: "var(--surface-raised)",
          marginBottom: "var(--space-6)",
          padding: "var(--space-4) var(--space-6)",
          flexWrap: "wrap",
        }}
      >
        <div>
          <span className="eyebrow" style={{ color: "var(--plum-dark)" }}>
            Онлайн резервационна система
          </span>
          <p style={{ margin: "var(--space-1) 0 0", color: "var(--ink-soft)", fontSize: "0.92rem" }}>
            Графикът и онлайн записването се виждат в реално време. Изберете удобен час по-долу.
          </p>
        </div>
        <a
          href="https://www.fitsys.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Отвори графика
        </a>
      </div>

      {/* Date Picker Bar */}
      <div className="bk-daystrip" role="tablist" aria-label="Избор на ден">
        {days.map(({ date, items }) => {
          const [y, m, d] = date.split("-").map(Number);
          const dateObj = new Date(y, m - 1, d);
          const dow = WEEKDAYS[dateObj.getDay()];
          const isSelected = date === selectedDate;
          const totalFree = items.reduce((acc, s) => acc + freeSeats(s), 0);
          const loadLevel = totalFree > 5 ? "high" : totalFree > 0 ? "medium" : "none";

          return (
            <button
              key={date}
              type="button"
              role="tab"
              aria-selected={isSelected}
              data-selected={isSelected}
              className="bk-day"
              onClick={() => setSelectedDate(date)}
            >
              <span className="bk-day-dow">{dow}</span>
              <div className="bk-day-num">{d}</div>
              <div className="bk-day-free">
                <span className="bk-day-dot" data-level={loadLevel} />
                {totalFree > 0 ? `${totalFree} св.` : "Пълен"}
              </div>
            </button>
          );
        })}
      </div>

      {/* Filter Toolbar & Active Day Label */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "var(--space-4)",
          margin: "var(--space-4) 0 var(--space-6)",
        }}
      >
        <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--plum-dark)" }}>
          {selectedDate && formatDayLabel(selectedDate)}
        </div>

        <div className="bk-filters" style={{ margin: 0, border: "none", padding: 0 }}>
          {(
            [
              ["all", "Всички часове"],
              ["group", "Групови (6 уреда)"],
              ["private", "Индивидуални (1:1)"],
              ["free", "Само със свободни"],
            ] as const
          ).map(([fKey, label]) => (
            <button
              key={fKey}
              type="button"
              className="bk-chip"
              data-on={filter === fKey}
              onClick={() => setFilter(fKey)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Slots List */}
      {activeDaySlots.length === 0 ? (
        <div className="bk-empty card">
          <p>Няма намерени часове за избрания ден и филтри.</p>
        </div>
      ) : (
        <div className="bk-list">
          {activeDaySlots.map((s) => {
            const free = freeSeats(s);
            const status = free === 0 ? "full" : free === 1 ? "last" : "available";

            return (
              <div key={s.id} className="bk-slot" data-status={status} data-full={free === 0}>
                <div className="bk-time">
                  {s.start}
                  <small>до {s.end}</small>
                </div>

                <div className="bk-info">
                  <div className="bk-title">
                    <span>{s.title}</span>
                    <span className="bk-tag">{s.level}</span>
                    {free === 1 && <span className="bk-alert-badge">Последно място!</span>}
                  </div>

                  <p className="bk-meta">
                    Инструктор: <strong>{s.instructor}</strong> · 50 минути
                  </p>
                </div>

                <div className="bk-spring">
                  <div className="bk-spring-track" aria-label={`Места: ${s.booked} от ${s.capacity} заети`}>
                    {Array.from({ length: s.capacity }).map((_, i) => {
                      const isBooked = i < s.booked;
                      const isLastSeat = !isBooked && free === 1;

                      return (
                        <span
                          key={i}
                          className="bk-coil"
                          data-taken={isBooked}
                          data-last-open={isLastSeat}
                          title={
                            isBooked
                              ? `Реформър #${i + 1}: Зает`
                              : isLastSeat
                              ? `Реформър #${i + 1}: Последно място!`
                              : `Реформър #${i + 1}: Свободен`
                          }
                        />
                      );
                    })}
                  </div>
                  <div className="bk-spring-label" data-status={free === 0 ? "full" : free === 1 ? "last" : "free"}>
                    {s.type === "private" ? (
                      free === 0 ? (
                        <b>Заето</b>
                      ) : (
                        <b>Свободен слот (1:1)</b>
                      )
                    ) : free === 0 ? (
                      <b>Пълен клас</b>
                    ) : (
                      <>
                        <b>{free}</b> от {s.capacity} свободни уреда
                      </>
                    )}
                  </div>
                </div>

                <div className="bk-action">
                  <a
                    href="https://www.fitsys.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-primary ${free === 0 ? "btn-disabled" : ""}`}
                    style={free === 0 ? { pointerEvents: "none", opacity: 0.5 } : undefined}
                  >
                    {free === 0 ? "Няма места" : "Запази час"}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Legend */}
      <div className="bk-legend">
        <span>
          <i style={{ background: "var(--rose)" }} />
          Свободен реформър
        </span>
        <span>
          <i style={{ background: "var(--plum)" }} />
          Зает реформър
        </span>
        <span>
          <i style={{ background: "var(--accent-warning)" }} />
          Последно място
        </span>
        <span style={{ marginLeft: "auto" }}>Всеки блок = един номериран уред в залата.</span>
      </div>
    </div>
  );
}
