# Реформанс — сайт на пилатес реформър студио

Next.js 14 (App Router) + TypeScript. Без Tailwind, без UI библиотеки — чист CSS с токен система.

## Стартиране

```bash
npm install
npm run dev      # http://localhost:3000
```

## Структура

```
app/
  page.tsx            начало
  rezervacii/         резервационна система
  ceni/  instruktori/  galeriya/  za-nas/  kontakti/
components/
  Booking.tsx         цялата логика по резервациите
  Nav.tsx  Footer.tsx  ContactForm.tsx
lib/
  schedule.ts         генериране на слотове + помощни функции
```

## Резервационна система

Мок данни, генерирани в `lib/schedule.ts` с детерминистичен seed (сървър и клиент
показват едно и също). Слотовете се пазят в React state — при презареждане се
връщат към началното си състояние.

**Какво работи:** избор на ден (14 дни напред), филтри по тип, брой свободни
места на живо, блокиране на пълни часове, форма с валидация, отказ на резервация.

**Групови часове** — 6 места (по един на реформър). **Индивидуални** — 1 място.

### Свързване с истински backend

Три места за смяна:

1. `lib/schedule.ts` → `generateSlots()` замени с `fetch("/api/slots")`
2. `components/Booking.tsx` → `confirm()` — POST към `/api/bookings`, после refetch
3. `components/Booking.tsx` → `cancel()` — DELETE към `/api/bookings/:id`

За реална система трябва и: unique constraint върху (slot_id, user_id),
транзакция при запис за да няма overbooking, и cron за освобождаване на слотове.

## Смяна на цвят

Всички цветове са в `app/globals.css` под `:root`. Основните: `--rose`
(бебешко розово), `--rose-deep`, `--plum` (тъмен акцент), `--rose-wash` (фон).

## Снимки

`app/galeriya/page.tsx` използва CSS плейсхолдъри. Сложи истински снимки в
`public/galeriya/` и замени `<div>`-а с `next/image`.
