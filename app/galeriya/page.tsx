import GalleryGrid from "@/components/GalleryGrid";

export const metadata = { title: "Галерия — Пилатес Реформър" };

export default function Galeriya() {
  return (
    <div className="shell page-container animate-entrance">
      <header className="page-head">
        <p className="eyebrow">Галерия</p>
        <h2>Залата в детайли — атмосфера, уреди и светлина</h2>
        <p>
          Снимките са от ежедневния живот в студиото. Натиснете върху снимка за пълен преглед.
          За запознаване със залата на място можете да се свържете с нас за посещение.
        </p>
      </header>

      <GalleryGrid />
    </div>
  );
}
