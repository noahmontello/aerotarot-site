import Link from "next/link";
import type { Metadata } from "next";
import { ScrollReveal } from "../_components/home-scroll";
import { MajorArcanaGallery } from "../_components/major-arcana-gallery";
import { MinorArcanaGallery } from "../_components/minor-arcana-gallery";
import {
  FloatingSection,
  MarketingPage,
  SectionIntro,
  WaitlistCard,
  displayFontClass,
} from "../_components/marketing";
import { deckBreakdown, majorArcana, minorSuits } from "./data";

export const metadata: Metadata = {
  title: "Tarot Card Meanings | AeroTarot",
  description:
    "Explore the 78 tarot cards through AeroTarot's modern guide to the Major Arcana, Minor Arcana, suits, and symbolic meanings.",
};

export default function CardsPage() {
  return (
    <MarketingPage current="cards">
      <section className="relative -mt-16 overflow-hidden pt-16">
        <ScrollReveal
          topFade={false}
          className="page-lead-grid mx-auto max-w-7xl px-6 sm:px-8 lg:px-12"
        >
          <SectionIntro
            eyebrow="Deck breakdown"
            title="Explore the 78 tarot cards through a calmer, more luminous guide."
            body="Browse the full deck, move through the Major Arcana, and explore the suits of the Minor Arcana with AeroTarot&apos;s modern, intuitive card library."
          />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/waitlist"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-amber-200/35 bg-[linear-gradient(135deg,rgba(255,233,173,0.24),rgba(149,110,255,0.22))] px-6 text-sm font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:border-amber-100/60 hover:bg-[linear-gradient(135deg,rgba(255,233,173,0.34),rgba(149,110,255,0.3))]"
            >
              Start a Reading
            </Link>
            <Link
              href="#major-arcana"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 px-6 text-sm uppercase tracking-[0.2em] text-white/78 transition hover:border-white/26 hover:text-white"
            >
              Browse Major Arcana
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {deckBreakdown.map((group) => (
              <div
                key={group.id}
                className="group rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-amber-100/28 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.016))]"
              >
                <a href={`#${group.id}`} className="block">
                  <p className="text-[0.68rem] uppercase tracking-[0.38em] text-white/42">
                    {group.count} cards
                  </p>
                  <h2 className="mt-6 text-2xl text-white">{group.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/58 sm:text-base">
                    {group.description}
                  </p>
                  <p className="mt-6 text-sm uppercase tracking-[0.24em] text-amber-100/55 transition group-hover:text-amber-100/78">
                    Jump to section
                  </p>
                </a>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <FloatingSection className="cards-library-section scroll-mt-28">
        <div id="major-arcana" />
        <ScrollReveal
          className="mx-auto max-w-7xl"
          threshold={0.03}
          rootMargin="0px 0px 8% 0px"
        >
          <SectionIntro
            eyebrow="Major Arcana"
            title="Twenty-two archetypal cards that shape the emotional and spiritual architecture of a reading."
            body="These cards often signal thresholds, deeper lessons, and larger movements of identity, meaning, and transformation."
          />
          <MajorArcanaGallery cards={majorArcana} />
        </ScrollReveal>
      </FloatingSection>

      <FloatingSection className="cards-library-section scroll-mt-28">
        <div id="minor-arcana" />
        <ScrollReveal
          className="mx-auto max-w-7xl"
          threshold={0.03}
          rootMargin="0px 0px 8% 0px"
        >
          <SectionIntro
            eyebrow="Minor Arcana"
            title="Four suits that translate tarot from archetype into daily experience."
            body="The Minor Arcana holds the recurring textures of ordinary life: desire, emotion, thought, and material reality as they play out over time."
          />
          <MinorArcanaGallery suits={minorSuits} />
          <ScrollReveal
            id="court-cards"
            delay={120}
            topFade={false}
            className="mt-10 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01))] px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.3)] sm:px-8"
          >
            <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/50">
              Court Cards
            </p>
            <h3 className="mt-4 text-3xl leading-tight text-white sm:text-4xl">
              Pages, Knights, Queens, and Kings give the deck its human texture.
            </h3>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/62">
              Court cards can describe people, dynamics, relational roles, or
              qualities the reading is asking you to embody. Across the four
              suits, they create sixteen nuanced expressions of attitude,
              maturity, instinct, and emotional style.
            </p>
          </ScrollReveal>
        </ScrollReveal>
      </FloatingSection>

      <FloatingSection className="cards-library-section">
        <ScrollReveal className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01))] px-6 py-10 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/50">
                The AeroTarot approach
              </p>
              <h2 className="mt-4 max-w-xl text-3xl leading-tight text-white sm:text-4xl">
                Card exploration should feel immersive, intelligent, and emotionally honest.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-7 text-white/62">
              <p>
                AeroTarot treats the deck as more than a list of meanings. Each
                card is part of a wider symbolic atmosphere, one that becomes
                clearer through visual language, ritual context, and a slower,
                more intuitive style of interpretation.
              </p>
              <p>
                This library is designed to be both practical and evocative:
                useful enough for browsing, calm enough for reflection, and
                structured in a way that can later expand into richer individual
                card pages and app-linked reading experiences.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </FloatingSection>

      <FloatingSection className="cards-library-section">
        <ScrollReveal className="mx-auto max-w-7xl rounded-[2rem] border border-amber-100/18 bg-[radial-gradient(circle_at_top,rgba(121,77,255,0.18),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] px-6 py-12 text-center shadow-[0_30px_100px_rgba(0,0,0,0.42)] sm:px-8">
          <p className="text-[0.68rem] uppercase tracking-[0.42em] text-amber-100/58">
            Begin with the deck
          </p>
          <h2
            className={`${displayFontClass} mx-auto mt-4 max-w-3xl text-4xl leading-tight font-medium tracking-[-0.03em] text-white sm:text-5xl`}
          >
            Discover meaning through the cards, then carry it into a reading.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/62">
            Move from browsing into ritual with a deck experience designed to
            feel tactile, modern, and worth returning to.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/waitlist"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-amber-200/35 bg-[linear-gradient(135deg,rgba(255,233,173,0.24),rgba(149,110,255,0.22))] px-6 text-sm font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:border-amber-100/60 hover:bg-[linear-gradient(135deg,rgba(255,233,173,0.34),rgba(149,110,255,0.3))]"
            >
              Download the App
            </Link>
            <Link
              href="/deck"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 px-6 text-sm uppercase tracking-[0.2em] text-white/78 transition hover:border-white/26 hover:text-white"
            >
              Explore the Decks
            </Link>
          </div>
        </ScrollReveal>
      </FloatingSection>

      <FloatingSection>
        <ScrollReveal>
          <WaitlistCard source="cards-page" />
        </ScrollReveal>
      </FloatingSection>
    </MarketingPage>
  );
}
