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
    src: "/images/pillar_group.jpg",
    alt: "Групова тренировка по пилатес реформър за малки групи до 6 души",
    width: 1200,
    height: 800,
    aspectRatio: "16/10",
  },
  pillarPrivate: {
    src: "/images/pillar_private.jpg",
    alt: "Индивидуално внимание от инструктор и прецизна корекция на стойката",
    width: 1200,
    height: 800,
    aspectRatio: "16/10",
  },
  pillarRehab: {
    src: "/images/pillar_exercise.jpg",
    alt: "Прецизно изпълнение на пилатес реформър упражнение за корем и гръб",
    width: 1200,
    height: 800,
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
    alt: "Портрет на Мира Дянкова — основател и инструктор",
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
    src: "/images/pillar_group.jpg",
    alt: "Групов час по реформър в залата",
    caption: "Групов час — 6 уреда с пълна синхронизация",
    width: 1200,
    height: 800,
    aspectRatio: "4/3",
  },
  gallery2: {
    src: "/images/studio_stretch.jpg",
    alt: "Реформър залата и светлата атмосфера",
    caption: "Естествена светлина и уют в студиото",
    width: 1200,
    height: 800,
    aspectRatio: "1/1",
  },
  gallery3: {
    src: "/images/pillar_private.jpg",
    alt: "Персонална настройка на уреда реформър",
    caption: "Персонална настройка на пружините и стойката",
    width: 1200,
    height: 800,
    aspectRatio: "4/3",
  },
  gallery4: {
    src: "/images/pillar_exercise.jpg",
    alt: "Прецизно изпълнение на пилатес реформър упражнение",
    caption: "Странична стабилизация на реформър",
    width: 1200,
    height: 800,
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
    src: "/images/studio_stretch.jpg",
    alt: "Атмосфера в студиото и пространство около уредите",
    width: 1200,
    height: 800,
    aspectRatio: "16/9",
  },
} as const;

export type StudioImageKey = keyof typeof STUDIO_IMAGES;
