"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { MajorArcanaCard } from "../cards/data";
import { ScrollReveal } from "./home-scroll";

export function MajorArcanaGallery({
  cards,
}: {
  cards: readonly MajorArcanaCard[];
}) {
  const [activeCard, setActiveCard] = useState<MajorArcanaCard | null>(null);
  const handleClose = () => setActiveCard(null);

  useEffect(() => {
    if (!activeCard) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeCard]);

  return (
    <>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, index) => (
          <ScrollReveal
            key={card.slug}
            delay={(index % 3) * 90}
            threshold={0.03}
            rootMargin="0px 0px 10% 0px"
            className="h-full"
          >
            <button
              type="button"
              onClick={() => {
                setActiveCard(card);
              }}
              className="group h-full w-full rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.012))] p-6 text-left shadow-[0_22px_70px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-1 hover:border-white/18"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-[0.68rem] uppercase tracking-[0.34em] text-amber-100/55">
                  {card.number.toString().padStart(2, "0")}
                </p>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.26em] text-white/38 transition group-hover:border-amber-100/18 group-hover:text-amber-100/65">
                  Open
                </span>
              </div>
              <h3 className="mt-8 text-2xl text-white">{card.name}</h3>
              <p className="mt-3 text-base leading-7 text-white/68">
                {card.meaning}
              </p>
              <p className="mt-5 border-t border-white/8 pt-5 text-sm leading-7 text-white/46">
                {card.note}
              </p>
              <p className="mt-6 text-[0.68rem] uppercase tracking-[0.24em] text-white/34">
                Tap for full breakdown
              </p>
            </button>
          </ScrollReveal>
        ))}
      </div>

      {typeof document !== "undefined" && activeCard
        ? createPortal(
            <div
              className="major-arcana-overlay is-open"
              onClick={handleClose}
            >
              <div className="major-arcana-overlay-backdrop" />
              <div
                className="major-arcana-overlay-shell"
                role="dialog"
                aria-modal="true"
                aria-labelledby={`major-card-title-${activeCard.slug}`}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="major-arcana-panel is-open">
                  <div className="grid gap-6 lg:grid-cols-[minmax(240px,0.78fr)_minmax(0,1.22fr)] lg:gap-8">
                    <div className="rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(121,77,255,0.22),transparent_32%),linear-gradient(180deg,rgba(18,14,31,0.98),rgba(7,7,10,0.98))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                      <p className="text-[0.68rem] uppercase tracking-[0.34em] text-amber-100/55">
                        Major Arcana{" "}
                        {activeCard.number.toString().padStart(2, "0")}
                      </p>
                      <h3
                        id={`major-card-title-${activeCard.slug}`}
                        className="mt-8 text-3xl text-white sm:text-4xl"
                      >
                        {activeCard.name}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-white/68">
                        {activeCard.meaning}
                      </p>
                      <div className="mt-8 rounded-[1.25rem] border border-white/8 bg-black/30 p-4">
                        <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/38">
                          Core note
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/58">
                          {activeCard.note}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/42">
                            Full breakdown
                          </p>
                          <h4 className="mt-3 text-2xl text-white">
                            A deeper reading of {activeCard.name}
                          </h4>
                        </div>
                        <button
                          type="button"
                          onClick={handleClose}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/58 transition hover:border-white/24 hover:text-white"
                          aria-label="Close card overlay"
                        >
                          ×
                        </button>
                      </div>

                      <div className="mt-8 space-y-7">
                        <section>
                          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-amber-100/55">
                            Meaning
                          </p>
                          <p className="mt-3 text-base leading-8 text-white/66">
                            {activeCard.expandedMeaning}
                          </p>
                        </section>
                        <section className="border-t border-white/8 pt-7">
                          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-amber-100/55">
                            Symbolic layer
                          </p>
                          <p className="mt-3 text-base leading-8 text-white/66">
                            {activeCard.symbolism}
                          </p>
                        </section>
                        <section className="border-t border-white/8 pt-7">
                          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-amber-100/55">
                            Reflection
                          </p>
                          <p className="mt-3 text-base leading-8 text-white/66">
                            {activeCard.reflection}
                          </p>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
