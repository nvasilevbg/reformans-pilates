export type SessionType = "group" | "private";

export interface Slot {
  id: string;
  date: string; // YYYY-MM-DD
  start: string; // HH:MM
  end: string;
  type: SessionType;
  title: string;
  instructor: string;
  capacity: number;
  booked: number;
  level: "Начинаещи" | "Средно ниво" | "Напреднали" | "Всички нива";
}

export interface Booking {
  slotId: string;
  name: string;
  phone: string;
  email: string;
  note: string;
  createdAt: string;
}

const INSTRUCTORS = ["Мира Дянкова", "Ния Стоилова", "Калина Терзиева"];

const GROUP_TEMPLATE = [
  { start: "07:30", end: "08:20", title: "Ранен Reformer Flow", level: "Всички нива" as const, capacity: 6 },
  { start: "09:00", end: "09:50", title: "Reformer Основи", level: "Начинаещи" as const, capacity: 6 },
  { start: "10:15", end: "11:05", title: "Jumpboard Cardio", level: "Средно ниво" as const, capacity: 6 },
  { start: "12:00", end: "12:50", title: "Обедна разтоварваща", level: "Всички нива" as const, capacity: 6 },
  { start: "17:30", end: "18:20", title: "Reformer Sculpt", level: "Средно ниво" as const, capacity: 6 },
  { start: "18:45", end: "19:35", title: "Deep Core & Spine", level: "Напреднали" as const, capacity: 6 },
  { start: "20:00", end: "20:50", title: "Вечерен Stretch", level: "Всички нива" as const, capacity: 6 },
];

const PRIVATE_TEMPLATE = [
  { start: "08:30", end: "09:20", title: "Индивидуална тренировка" },
  { start: "11:15", end: "12:05", title: "Индивидуална тренировка" },
  { start: "13:00", end: "13:50", title: "Рехабилитационна сесия" },
  { start: "16:30", end: "17:20", title: "Индивидуална тренировка" },
  { start: "19:45", end: "20:35", title: "Индивидуална тренировка" },
];

// Deterministic pseudo-random so server and client agree.
function seeded(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 1000) / 1000;
}

export function isoDate(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

export function generateSlots(days = 14, from = new Date()): Slot[] {
  const out: Slot[] = [];
  const base = new Date(from.getFullYear(), from.getMonth(), from.getDate());

  for (let i = 0; i < days; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    const date = isoDate(d);
    const dow = d.getDay();
    const isSunday = dow === 0;
    const isSaturday = dow === 6;

    const groups = isSunday
      ? GROUP_TEMPLATE.slice(1, 4)
      : isSaturday
      ? GROUP_TEMPLATE.slice(0, 5)
      : GROUP_TEMPLATE;

    groups.forEach((g, gi) => {
      const r = seeded(`${date}-${g.start}-g`);
      const booked = Math.min(g.capacity, Math.floor(r * (g.capacity + 1)));
      out.push({
        id: `${date}-${g.start}`,
        date,
        start: g.start,
        end: g.end,
        type: "group",
        title: g.title,
        instructor: INSTRUCTORS[(gi + i) % INSTRUCTORS.length],
        capacity: g.capacity,
        booked,
        level: g.level,
      });
    });

    if (!isSunday) {
      const privates = isSaturday ? PRIVATE_TEMPLATE.slice(0, 3) : PRIVATE_TEMPLATE;
      privates.forEach((p, pi) => {
        const r = seeded(`${date}-${p.start}-p`);
        out.push({
          id: `${date}-${p.start}`,
          date,
          start: p.start,
          end: p.end,
          type: "private",
          title: p.title,
          instructor: INSTRUCTORS[(pi + i + 1) % INSTRUCTORS.length],
          capacity: 1,
          booked: r > 0.55 ? 1 : 0,
          level: "Всички нива",
        });
      });
    }
  }

  return out.sort((a, b) =>
    a.date === b.date ? a.start.localeCompare(b.start) : a.date.localeCompare(b.date)
  );
}

export const WEEKDAYS = ["нд", "пн", "вт", "ср", "чт", "пт", "сб"];
export const WEEKDAYS_LONG = [
  "неделя",
  "понеделник",
  "вторник",
  "сряда",
  "четвъртък",
  "петък",
  "събота",
];
export const MONTHS = [
  "януари", "февруари", "март", "април", "май", "юни",
  "юли", "август", "септември", "октомври", "ноември", "декември",
];

export function formatDayLabel(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  return `${WEEKDAYS_LONG[dt.getDay()]}, ${d} ${MONTHS[m - 1]}`;
}

export function freeSeats(s: Slot): number {
  return Math.max(0, s.capacity - s.booked);
}

export function slotStatus(s: Slot): "free" | "filling" | "last" | "full" {
  const free = freeSeats(s);
  if (free === 0) return "full";
  if (s.type === "private") return "free";
  if (free === 1) return "last";
  if (free <= s.capacity / 2) return "filling";
  return "free";
}
