import GalleryGrid from "@/components/GalleryGrid";

export const metadata = { title: "Галерия — Пилатес Реформър" };

export default function Galeriya() {
  return (
    <div className="shell animate-entrance">
      <header className="page-head">
        <p className="eyebrow">Галерия</p>
        <h2>Залата, без филтри и без наети модели</h2>
        <p>
          Снимките са от обикновени дни. Кликни върху коя да е снимка за пълен преглед.
          Ако искаш да видиш мястото на живо преди да се запишеш, отбий се между 13:00 и 16:00.
        </p>
      </header>

      <GalleryGrid />
    </div>
  );
}
