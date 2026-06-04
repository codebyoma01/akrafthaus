"use client";

import { useState } from "react";
import PageHero from "../components/PageHero";

const GALLERY_ITEMS = [
  { src: "/gallery1.jpg", category: "Rooms", caption: "Guest room" },
  { src: "/gallery2.jpg", category: "Dining", caption: "Restaurant" },
  { src: "/gallery3.jpg", category: "Studio", caption: "Studio" },
  { src: "/gallery4.jpg", category: "Rooms", caption: "Suite" },
  { src: "/about1.jpg", category: "Common", caption: "Lounge" },
  { src: "/about2.jpg", category: "Dining", caption: "Dining room" },
  { src: "/about3.jpg", category: "Rooms", caption: "Bedroom detail" },
  { src: "/studio.jpg", category: "Studio", caption: "Recording space" },
  { src: "/akraft-studio.webp", category: "Studio", caption: "Production" },
  { src: "/kavkanz-art.webp", category: "Art", caption: "Art wall" },
];

const FILTERS = ["All", "Rooms", "Dining", "Studio", "Art", "Common"] as const;

export default function GalleryPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    filter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((g) => g.category === filter);

  return (
    <main>
      <PageHero
        image="/gallery1.jpg"
        imageAlt="Akrafthaus gallery"
        label="Gallery"
        title="Inside the building"
        subtitle="Rooms, restaurant, studio, and shared spaces — photographed as they are used."
      />

      <section className="section section-white">
        <div className="wrap">
          <div className="gallery-filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={`gallery-filter${filter === f ? " is-active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <ul className="gallery-grid">
            {filtered.map((item) => (
              <li key={item.src}>
                <button
                  type="button"
                  className="gallery-item"
                  onClick={() => setLightbox(item.src)}
                >
                  <img src={item.src} alt={item.caption} loading="lazy" />
                  <span className="gallery-item__caption">{item.caption}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {lightbox ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="gallery-lightbox__close"
            aria-label="Close"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <img src={lightbox} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      ) : null}

      <style jsx global>{`
        .gallery-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 40px;
        }
        .gallery-filter {
          padding: 9px 18px;
          border: 1px solid var(--border);
          background: transparent;
          font-family: var(--sans);
          font-size: 12px;
          color: var(--muted);
          cursor: pointer;
        }
        .gallery-filter.is-active,
        .gallery-filter:hover {
          background: var(--primary);
          border-color: var(--primary);
          color: var(--cream);
        }
        .gallery-grid {
          list-style: none;
          margin: 0;
          padding: 0;
          columns: 3;
          column-gap: 16px;
        }
        .gallery-grid li {
          break-inside: avoid;
          margin-bottom: 16px;
        }
        .gallery-item {
          display: block;
          width: 100%;
          padding: 0;
          border: none;
          background: none;
          cursor: pointer;
          position: relative;
          text-align: left;
        }
        .gallery-item img {
          width: 100%;
          display: block;
        }
        .gallery-item__caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 12px 14px;
          font-size: 12px;
          letter-spacing: 0.04em;
          color: #fff;
          background: linear-gradient(transparent, rgba(12, 6, 3, 0.75));
          opacity: 0;
          transition: opacity 0.2s;
        }
        .gallery-item:hover .gallery-item__caption,
        .gallery-item:focus-visible .gallery-item__caption {
          opacity: 1;
        }
        .gallery-lightbox {
          position: fixed;
          inset: 0;
          z-index: 500;
          background: rgba(12, 6, 3, 0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .gallery-lightbox img {
          max-width: min(1100px, 100%);
          max-height: 90vh;
          object-fit: contain;
        }
        .gallery-lightbox__close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: transparent;
          color: #fff;
          font-size: 24px;
          cursor: pointer;
        }
        @media (max-width: 900px) {
          .gallery-grid {
            columns: 2;
          }
        }
        @media (max-width: 560px) {
          .gallery-grid {
            columns: 1;
          }
        }
      `}</style>
    </main>
  );
}
