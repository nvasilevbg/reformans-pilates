"use client";

import { useEffect, useState } from "react";
import StudioImage from "./StudioImage";
import { STUDIO_IMAGES, StudioImageKey } from "@/lib/images";

const GALLERY_KEYS: { key: StudioImageKey; caption: string; tall?: boolean }[] = [
  { key: "gallery1", caption: "Залата в 7:20, преди първия час", tall: true },
  { key: "gallery2", caption: "Реформър №3 — най-търсеният, до прозореца", tall: false },
  { key: "gallery3", caption: "Пружините: жълта, синя, червена, зелена", tall: false },
  { key: "gallery4", caption: "Jumpboard в действие", tall: true },
  { key: "gallery5", caption: "Кът за чай след час", tall: false },
  { key: "gallery6", caption: "Съблекалня, шест шкафчета", tall: false },
];

export default function GalleryGrid() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    if (activeIdx === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveIdx(null);
      } else if (e.key === "ArrowRight") {
        setActiveIdx((prev) => (prev !== null ? (prev + 1) % GALLERY_KEYS.length : 0));
      } else if (e.key === "ArrowLeft") {
        setActiveIdx((prev) => (prev !== null ? (prev - 1 + GALLERY_KEYS.length) % GALLERY_KEYS.length : 0));
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx]);

  return (
    <>
      <div className="gallery-masonry">
        {GALLERY_KEYS.map((item, idx) => (
          <figure
            key={item.key}
            className="gallery-card"
            data-tall={item.tall}
            onClick={() => setActiveIdx(idx)}
            role="button"
            tabIndex={0}
            aria-label={`Виж снимка в пълен размер: ${item.caption}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveIdx(idx);
              }
            }}
          >
            <StudioImage imageKey={item.key} alt={item.caption} className="gallery-img" />
            <figcaption className="gallery-caption">{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      {/* Vanilla React Lightbox Dialog */}
      {activeIdx !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setActiveIdx(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Преглед на снимка"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setActiveIdx(null)}
              aria-label="Затвори"
              title="Затвори (Esc)"
            >
              ✕
            </button>

            <button
              className="lightbox-nav lightbox-prev"
              onClick={() => setActiveIdx((prev) => (prev !== null ? (prev - 1 + GALLERY_KEYS.length) % GALLERY_KEYS.length : 0))}
              aria-label="Предишна снимка"
              title="Предишна снимка (←)"
            >
              ‹
            </button>

            <div className="lightbox-image-holder">
              <StudioImage
                imageKey={GALLERY_KEYS[activeIdx].key}
                alt={GALLERY_KEYS[activeIdx].caption}
                priority
                sizes="90vw"
                style={{ maxHeight: "75vh", borderRadius: "var(--radius-lg)" }}
              />
              <div className="lightbox-info">
                <span className="lightbox-counter">
                  {activeIdx + 1} от {GALLERY_KEYS.length}
                </span>
                <span className="lightbox-title">{GALLERY_KEYS[activeIdx].caption}</span>
              </div>
            </div>

            <button
              className="lightbox-nav lightbox-next"
              onClick={() => setActiveIdx((prev) => (prev !== null ? (prev + 1) % GALLERY_KEYS.length : 0))}
              aria-label="Следваща снимка"
              title="Следваща снимка (→)"
            >
              ›
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-masonry {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-auto-rows: 240px;
          gap: 1.25rem;
          padding-bottom: 3rem;
        }

        .gallery-card {
          margin: 0;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: var(--edge-rose);
          background: var(--surface-card);
          display: flex;
          flex-direction: column;
          position: relative;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .gallery-card[data-tall="true"] {
          grid-row: span 2;
        }

        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--plum);
        }

        .gallery-card :global(.studio-img-wrap) {
          width: 100%;
          height: 100%;
          flex: 1;
        }

        .gallery-caption {
          padding: 0.9rem 1.15rem;
          background: var(--surface-card);
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--ink-soft);
          border-top: var(--edge);
        }

        /* Lightbox CSS */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(46, 32, 41, 0.88);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
          padding: 1.5rem;
          animation: fadeIn 0.25s ease-out;
        }

        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-image-holder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .lightbox-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--rose-wash);
          font-size: 0.92rem;
          background: rgba(0, 0, 0, 0.4);
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-full);
          backdrop-filter: blur(8px);
        }

        .lightbox-counter {
          font-weight: 700;
          color: var(--rose);
          letter-spacing: 0.1em;
        }

        .lightbox-close {
          position: absolute;
          top: -2.75rem;
          right: 0;
          background: var(--surface-card);
          color: var(--ink);
          border: none;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-full);
          font-size: 1.1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
          transition: transform 0.2s ease;
        }

        .lightbox-close:hover {
          transform: scale(1.1);
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: var(--surface-card);
          color: var(--ink);
          border: none;
          width: 46px;
          height: 46px;
          border-radius: var(--radius-full);
          font-size: 1.8rem;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
          transition: transform 0.2s ease, background 0.2s ease;
          z-index: 10;
        }

        .lightbox-prev {
          left: -3rem;
        }

        .lightbox-next {
          right: -3rem;
        }

        .lightbox-nav:hover {
          background: var(--plum);
          color: var(--rose-wash);
          transform: translateY(-50%) scale(1.08);
        }

        @media (max-width: 768px) {
          .gallery-masonry {
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
          }
          .gallery-card[data-tall="true"] {
            grid-row: auto;
          }
          .lightbox-prev {
            left: 0.5rem;
          }
          .lightbox-next {
            right: 0.5rem;
          }
          .lightbox-close {
            top: -2.5rem;
            right: 0.5rem;
          }
        }
      `}</style>
    </>
  );
}
