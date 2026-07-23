"use client";

import { useState } from "react";
import "./booking.css";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const TOPICS = ["Първо посещение", "Индивидуална сесия", "Рехабилитация", "Друго"];

  function submit() {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "Как да те наричаме?";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = "Провери имейла — липсва @ или домейн.";
    if (form.message.trim().length < 10) e.message = "Напиши поне изречение, за да отговорим по същество.";
    setErrors(e);
    if (Object.keys(e).length) return;
    // TODO: свържете с API route или имейл услуга
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card" style={{ display: "grid", placeContent: "center", textAlign: "center", minHeight: "340px" }}>
        <h3>Получихме съобщението</h3>
        <p style={{ color: "var(--ink-soft)", maxWidth: "34ch", margin: "0.75rem auto 1.5rem" }}>
          Пишем ти на {form.email} до края на работния ден. Ако е спешно, звънни
          на 0888 104 220.
        </p>
        <button className="btn btn-ghost" onClick={() => { setSent(false); setForm({ name: "", email: "", topic: "", message: "" }); }} style={{ justifySelf: "center" }}>
          Изпрати още едно
        </button>
      </div>
    );
  }

  return (
    <div className="card">
      <p className="eyebrow">Пиши ни</p>
      <h3 style={{ margin: "0.75rem 0 1.5rem" }}>Въпрос преди да се запишеш?</h3>

      <label className="bk-field">
        <span>Име</span>
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Име" />
        {errors.name && <div className="bk-error">{errors.name}</div>}
      </label>

      <label className="bk-field">
        <span>Имейл</span>
        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="ime@primer.bg" />
        {errors.email && <div className="bk-error">{errors.email}</div>}
      </label>

      <div className="bk-field">
        <span>Относно</span>
        <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap" }}>
          {TOPICS.map((t) => (
            <button key={t} type="button" className="bk-chip" data-on={form.topic === t} onClick={() => setForm({ ...form, topic: t })}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <label className="bk-field">
        <span>Съобщение</span>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Разкажи ни накратко какво търсиш и дали има травми или състояния, за които да знаем."
          style={{ minHeight: "120px" }}
        />
        {errors.message && <div className="bk-error">{errors.message}</div>}
      </label>

      <button className="btn btn-primary" onClick={submit} style={{ marginTop: "0.5rem" }}>
        Изпрати съобщение
      </button>
    </div>
  );
}
