"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Никога не съм стъпвал/а на реформър. Подходящо ли е за абсолютно начинаещи?",
    a: "Да, над 80% от новите ни клиенти започват от нулата! В първото посещение инструкторът прави кратък оглед на стойката, показва как функционира уредът и настройва съпротивлението на пружините спрямо вашите възможности.",
  },
  {
    q: "Имам болки в кръста / дискова херния. Безопасно ли е да тренирам?",
    a: "Напълно безопасно. Основателите и инструкторите в Реформанс са с магистърска степен по кинезитерапия. Преди началото на часа уточняваме вашите специфики и адаптираме всяко движение така, че да декомпресираме гръбначния стълб без риск от травми.",
  },
  {
    q: "Защо има само 6 реформъра в залата?",
    a: "Защото това е оптималният брой хората, при който един инструктор може да следи всяко повторение на всеки трениращ. При нас няма масови класове от 15-20 души — тук получавате персонално внимание през всички 50 минути.",
  },
  {
    q: "Какво облекло и оборудване са ми необходими за първия час?",
    a: "Носете удобно спортно облекло (клин/долнище и тениска) и чорапи с противоплъзгащи грайфери. Ако нямате такива чорапи, предлагаме висококачествени на рецепция. Всичко останало (вода, кърпи, шкафчета с заключване) е осигурено в студиото.",
  },
  {
    q: "Как мога да откажа или премести час, ако ми изскочи ангажимент?",
    a: "Отказването или преместването е 100% безплатно до 12 часа преди началния час директно през системата Fitsys или с кратко съобщение по Viber. Без излишни такси или неустойки.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="faq-wrapper" style={{ marginTop: "var(--space-8)" }}>
      {FAQS.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="faq-item card"
            style={{
              marginBottom: "var(--space-3)",
              padding: "var(--space-4) var(--space-6)",
              cursor: "pointer",
              transition: "border-color 160ms cubic-bezier(0, 0, 0.2, 1)",
              borderColor: isOpen ? "var(--rose-soft)" : "var(--edge)",
              background: isOpen ? "var(--surface-card)" : "var(--surface-base)",
            }}
            onClick={() => toggle(i)}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "var(--space-4)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  margin: 0,
                  color: isOpen ? "var(--plum-dark)" : "var(--ink)",
                  fontWeight: 600,
                }}
              >
                {faq.q}
              </h3>
              <span
                style={{
                  fontSize: "1.2rem",
                  color: "var(--plum-dark)",
                  fontWeight: 400,
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 200ms cubic-bezier(0, 0, 0.2, 1)",
                  userSelect: "none",
                }}
              >
                ▾
              </span>
            </div>
            {isOpen && (
              <p
                style={{
                  color: "var(--ink-soft)",
                  marginTop: "var(--space-3)",
                  marginBottom: 0,
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
                {faq.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
