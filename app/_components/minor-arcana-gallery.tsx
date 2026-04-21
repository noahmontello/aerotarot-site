"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { MinorSuit } from "../cards/data";

export function MinorArcanaGallery({
  suits,
}: {
  suits: readonly MinorSuit[];
}) {
  const [activeSuit, setActiveSuit] = useState<MinorSuit | null>(null);

  const handleClose = () => setActiveSuit(null);

  useEffect(() => {
    if (!activeSuit) {
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
  }, [activeSuit]);

  return (
    <>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {suits.map((suit) => (
          <div key={suit.slug} className="h-full">
            <button
              type="button"
              onClick={() => setActiveSuit(suit)}
              className="group h-full w-full rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] p-6 text-left shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-amber-100/26"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl text-white">{suit.name}</h3>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.26em] text-amber-100/60">
                  {suit.element}
                </span>
              </div>
              <p className="mt-4 text-sm uppercase tracking-[0.24em] text-white/38">
                {suit.range}
              </p>
              <p className="mt-5 text-base leading-7 text-white/64">
                {suit.atmosphere}
              </p>
              <div className="mt-6 border-t border-white/8 pt-5">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/40">
                  Core themes
                </p>
                <p className="mt-3 text-sm leading-7 text-white/58">
                  {suit.themes}
                </p>
              </div>
              <p className="mt-6 text-[0.68rem] uppercase tracking-[0.24em] text-white/34">
                Tap for deeper overview
              </p>
            </button>
          </div>
        ))}
      </div>

      {typeof document !== "undefined" && activeSuit
        ? createPortal(
            <div
              className="fixed inset-0 z-[220] flex items-center justify-center p-4 sm:p-6"
              onClick={handleClose}
            >
              <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
              <div
                className="relative w-full max-w-5xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,14,26,0.96),rgba(7,7,10,0.98))] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.58)] animate-[major-arcana-flip-in_520ms_cubic-bezier(0.2,0.9,0.22,1)] sm:p-8"
                role="dialog"
                aria-modal="true"
                aria-labelledby={`minor-suit-title-${activeSuit.slug}`}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="grid gap-6 lg:grid-cols-[minmax(240px,0.74fr)_minmax(0,1.26fr)] lg:gap-8">
                  <div className="rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(121,77,255,0.22),transparent_32%),linear-gradient(180deg,rgba(18,14,31,0.98),rgba(7,7,10,0.98))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                    <p className="text-[0.68rem] uppercase tracking-[0.34em] text-amber-100/55">
                      Minor Arcana
                    </p>
                    <h3
                      id={`minor-suit-title-${activeSuit.slug}`}
                      className="mt-8 text-3xl text-white sm:text-4xl"
                    >
                      {activeSuit.name}
                    </h3>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <span className="rounded-full border border-white/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.26em] text-amber-100/60">
                        {activeSuit.element}
                      </span>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.26em] text-white/45">
                        {activeSuit.range}
                      </span>
                    </div>
                    <div className="mt-8 rounded-[1.25rem] border border-white/8 bg-black/30 p-4">
                      <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/38">
                        Core themes
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/58">
                        {activeSuit.themes}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/42">
                          Suit breakdown
                        </p>
                        <h4 className="mt-3 text-2xl text-white">
                          Reading {activeSuit.name} in context
                        </h4>
                      </div>
                      <button
                        type="button"
                        onClick={handleClose}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/58 transition hover:border-white/24 hover:text-white"
                        aria-label="Close suit overlay"
                      >
                        ×
                      </button>
                    </div>

                    <div className="mt-8 space-y-7">
                      <section>
                        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-amber-100/55">
                          Suit meaning
                        </p>
                        <p className="mt-3 text-base leading-8 text-white/66">
                          {activeSuit.expandedMeaning}
                        </p>
                      </section>
                      <section className="border-t border-white/8 pt-7">
                        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-amber-100/55">
                          Reading focus
                        </p>
                        <p className="mt-3 text-base leading-8 text-white/66">
                          {activeSuit.readingFocus}
                        </p>
                      </section>
                      <section className="border-t border-white/8 pt-7">
                        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-amber-100/55">
                          Court energy
                        </p>
                        <p className="mt-3 text-base leading-8 text-white/66">
                          {activeSuit.courtEnergy}
                        </p>
                      </section>
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
