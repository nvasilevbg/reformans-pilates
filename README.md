# Пилатес Реформър — сайт на пилатес реформър студио

Next.js 14 (App Router) + TypeScript. Чист CSS с токен система и централизирана поддръжка на снимки.

## Стартиране

```bash
npm install
npm run dev      # http://localhost:3000
```

---

## 📸 Ръководство за замяна на снимки (За клиенти)

Всички снимки в сайта се управляват от един единствен файл: [`lib/images.ts`](file:///c:/PROJECTS/pilates/lib/images.ts).  
Няма нужда да търсите къде в кода се намира дадена снимка — променяте само този файл.

---

### Стъпка 1: Подготовка и поставяне на снимките

1. Влезте в папката `public` на проекта и създайте папка `images` със следната структура:

```text
public/
  images/
    hero/          -> hero-studio.jpg
    team/          -> mira.jpg, niya.jpg, kalina.jpg
    pillars/       -> group.jpg, private.jpg, rehab.jpg
    gallery/       -> shot1.jpg, shot2.jpg, shot3.jpg, shot4.jpg, shot5.jpg, shot6.jpg
    contacts/      -> building.jpg
    about/         -> atmosphere.jpg
```

---

### Стъпка 2: Препоръчителни размери и съотношения

Преди да качите снимка, преоразмерете я и я компресирайте, за да зарежда светкавично:

| Слот в `lib/images.ts` | Описание | Препоръчителен размер (в пиксели) | Съотношение (Aspect Ratio) |
| :--- | :--- | :--- | :--- |
| **`heroStudio`** | Залата на началната страница | **1200 × 800 px** | 3:2 |
| **`pillarGroup`** | Кадър за групови часове | **600 × 400 px** | 16:10 |
| **`pillarPrivate`** | Кадър за индивидуални часове | **600 × 400 px** | 16:10 |
| **`pillarRehab`** | Кадър за рехабилитация | **600 × 400 px** | 16:10 |
| **`instructorMira`** | Портрет на Мира | **600 × 800 px** | 3:4 (вертикална) |
| **`instructorNiya`** | Портрет на Ния | **600 × 800 px** | 3:4 (вертикална) |
| **`instructorKalina`** | Портрет на Калина | **600 × 800 px** | 3:4 (вертикална) |
| **`gallery1` ... `gallery6`** | Снимки за галерията | **1000 × 750 px** или **800 × 800 px** | 4:3 / 1:1 |
| **`contactBuilding`** | Снимка на входа / двора | **800 × 600 px** | 4:3 |
| **`aboutDetail`** | Снимка за "За нас" | **1000 × 562 px** | 16:9 |

> 💡 **Препоръка за компресия:** Използвайте безплатния сайт [https://squoosh.app](https://squoosh.app) или [https://tinypng.com](https://tinypng.com). Запазете снимките във формат **WebP** или **JPG** с размер до **150 KB** на снимка.

---

### Стъпка 3: Замяна на Unsplash с вашите лични снимки

Отворете файла `lib/images.ts`. Заменете интернет адреса (URL) с локалния път към вашата снимка в папката `/images/...`.

#### 🔴 ПРЕДИ (Unsplash интернет адрес):
```typescript
heroStudio: {
  src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80&auto=format",
  alt: "Интериор на пилатес реформър студио в Лозенец",
  width: 1200,
  height: 800,
},
```

#### 🟢 СЛЕД (Ваша лична снимка):
```typescript
heroStudio: {
  src: "/images/hero/hero-studio.jpg",
  alt: "Интериор на реформър студио Пилатес Реформър на ул. Кричим 42",
  width: 1200,
  height: 800,
},
```

Повторете същото за останалите ключове (`instructorMira`, `gallery1` и т.н.).  
След като замените всички интернет адреси, Unsplash спира да се използва напълно!

---

## Структура на проекта

```
app/
  page.tsx            начална страница (Split Hero + Трите стълба)
  rezervacii/         динамична резервационна система
  ceni/  instruktori/  galeriya/  za-nas/  kontakti/
components/
  StudioImage.tsx     унифициран компонент за снимки (next/image + blur)
  GalleryGrid.tsx     галерия с Lightbox преглед и клавиатурни стрелки
  Booking.tsx         система за резервации с индикатори за натовареност
  Nav.tsx  Footer.tsx  ContactForm.tsx
lib/
  images.ts           централен каталог на всички снимки в сайта
  schedule.ts         логика за резервациите и мок данни
```
