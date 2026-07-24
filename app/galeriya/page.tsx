import GalleryGrid from "@/components/GalleryGrid";

export const metadata = { title: "Галерия — Пилатес Реформър" };

export default function Galeriya() {
  return (
    <div className="shell page-container animate-entrance">
      <header className="page-head">
        <p className="eyebrow">Галерия & Атмосфера</p>
        <h2>Уют, прецизно оборудване и естествена светлина</h2>
        <p>
          Разгледай нашето бутиково пространство в кв. Лозенец — 6 оригинални реформъра,
          спокойна атмосфера и детайли, създадени за твоя комфорт.
        </p>
      </header>

      <GalleryGrid />
    </div>
  );
}
