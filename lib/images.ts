export interface StudioImageDef {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit?: string;
  aspectRatio?: string;
  caption?: string;
}

export const STUDIO_IMAGES = {
  // Homepage Hero & Features
  heroStudio: {
    src: "/images/hero.jpg",
    alt: "Инструктор изпълнява страничен планк на пилатес реформър в студиото",
    width: 1200,
    height: 800,
    aspectRatio: "3/2",
  },
  pillarGroup: {
    src: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=600&q=80&auto=format",
    alt: "Детайл на пружини и каретка на пилатес реформър",
    width: 600,
    height: 400,
    aspectRatio: "16/10",
  },
  pillarPrivate: {
    src: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=600&q=80&auto=format",
    alt: "Индивидуална работа с инструктор и корекция на стойката",
    width: 600,
    height: 400,
    aspectRatio: "16/10",
  },
  pillarRehab: {
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80&auto=format",
    alt: "Рехабилитационни и щадящи движения за гръбнака",
    width: 600,
    height: 400,
    aspectRatio: "16/10",
  },

  // Testimonials Portraits
  testimonialRadostina: {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80&auto=format",
    alt: "Портрет на Радостина Стоянова — клиент",
    width: 400,
    height: 400,
    aspectRatio: "1/1",
  },
  testimonialElena: {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format",
    alt: "Портрет на Елена Петрова — клиент",
    width: 400,
    height: 400,
    aspectRatio: "1/1",
  },
  testimonialViktor: {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format",
    alt: "Портрет на Виктор Маринов — клиент",
    width: 400,
    height: 400,
    aspectRatio: "1/1",
  },

  // Team Instructors
  instructorMira: {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format",
    alt: "Портрет на Мира Дянкова — основател и кинезитерапевт",
    width: 600,
    height: 800,
    aspectRatio: "3/4",
  },
  instructorNiya: {
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format",
    alt: "Портрет на Ния Стоилова — старши инструктор по Jumpboard",
    width: 600,
    height: 800,
    aspectRatio: "3/4",
  },
  instructorKalina: {
    src: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&q=80&auto=format",
    alt: "Портрет на Калина Терзиева — инструктор по стречинг и гръб",
    width: 600,
    height: 800,
    aspectRatio: "3/4",
  },

  // Gallery
  gallery1: {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1000&q=80&auto=format",
    alt: "Залата в 7:20 сутринта, преди първия час",
    caption: "Залата в 7:20, преди първия час",
    width: 1000,
    height: 750,
    aspectRatio: "4/3",
  },
  gallery2: {
    src: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=1000&q=80&auto=format",
    alt: "Реформър №3 до прозореца",
    caption: "Реформър №3 — най-търсеният, до прозореца",
    width: 800,
    height: 800,
    aspectRatio: "1/1",
  },
  gallery3: {
    src: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=1000&q=80&auto=format",
    alt: "Реформър пружини: жълта, синя, червена, зелена",
    caption: "Пружините: жълта, синя, червена, зелена",
    width: 1000,
    height: 750,
    aspectRatio: "4/3",
  },
  gallery4: {
    src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1000&q=80&auto=format",
    alt: "Jumpboard приставка в действие",
    caption: "Jumpboard в действие",
    width: 800,
    height: 1000,
    aspectRatio: "4/5",
  },
  gallery5: {
    src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1000&q=80&auto=format",
    alt: "Кът за билков чай след час",
    caption: "Кът за чай след час",
    width: 1000,
    height: 750,
    aspectRatio: "4/3",
  },
  gallery6: {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1000&q=80&auto=format",
    alt: "Съблекалня с шест индивидуални шкафчета",
    caption: "Съблекалня, шест шкафчета",
    width: 800,
    height: 800,
    aspectRatio: "1/1",
  },

  // Contact & About
  contactBuilding: {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format",
    alt: "Входът на сградата на ул. Кричим 42 от вътрешния двор",
    width: 800,
    height: 600,
    aspectRatio: "4/3",
  },
  aboutDetail: {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1000&q=80&auto=format",
    alt: "Атмосфера в студиото и пространство около уредите",
    width: 1000,
    height: 562,
    aspectRatio: "16/9",
  },
} as const;

export type StudioImageKey = keyof typeof STUDIO_IMAGES;
