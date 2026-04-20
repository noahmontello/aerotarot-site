import Link from "next/link";
import {
  displayFontClass,
  MarketingPage,
  SectionIntro,
  WaitlistCard,
  principles,
} from "../_components/marketing";

const storyMoments = [
  {
    label: "Why it exists",
    body: "AeroTarot began with a simple frustration: most modern tarot experiences either abandon the beauty of physical ritual or bury it beneath generic technology.",
  },
  {
    label: "What it believes",
    body: "Tarot should still feel tactile, intimate, and personal. Technology should preserve the moment, deepen reflection, and help meaningful patterns emerge over time.",
  },
  {
    label: "What it is becoming",
    body: "A premium deck and companion app shaped as one thoughtful system, designed for people who want spiritual practice to feel modern without becoming cold or mechanical.",
  },
] as const;

const audience = [
  "People who love the ritual of drawing physical cards",
  "Readers who want a calmer, more intentional digital experience",
  "Anyone looking to revisit spreads and track recurring themes over time",
] as const;

export default function AboutPage() {
  return (
    <MarketingPage current="about">
      <section className="relative -mt-16 overflow-hidden pt-16">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:px-12 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/50">
              About AeroTarot
            </p>
            <h1
              className={`${displayFontClass} mt-6 max-w-3xl text-5xl leading-[0.94] font-medium tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl`}
            >
              A brand shaped around ritual, memory, and a quieter use of
              technology.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
              AeroTarot is building a more thoughtful tarot experience, one
              where physical objects still carry emotional weight and the
              digital layer exists to deepen reflection rather than compete for
              attention.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/waitlist"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-amber-200/35 bg-[linear-gradient(135deg,rgba(255,233,173,0.24),rgba(149,110,255,0.2))] px-6 text-sm font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:border-amber-100/60 hover:bg-[linear-gradient(135deg,rgba(255,233,173,0.34),rgba(149,110,255,0.28))]"
              >
                Join the Waitlist
              </Link>
              <p className="text-sm leading-6 text-white/42">
                Less noise, more meaning.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-6 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(120,78,255,0.28),transparent_72%)] blur-3xl" />
            <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(233,191,113,0.18),transparent_72%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-8">
              <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/42">
                Manifesto
              </p>
              <p
                className={`${displayFontClass} mt-6 text-3xl leading-tight text-white sm:text-4xl`}
              >
                Tarot should still feel intimate in the hand, luminous in the
                mind, and personal long after the spread is gone.
              </p>
              <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
                <div className="flex items-start justify-between gap-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-amber-100/55">
                    Physical first
                  </p>
                  <p className="max-w-xs text-right text-sm leading-6 text-white/58">
                    The deck remains the emotional center of the experience.
                  </p>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-amber-100/55">
                    Digital second
                  </p>
                  <p className="max-w-xs text-right text-sm leading-6 text-white/58">
                    The app captures memory, context, and continuity without
                    replacing ritual.
                  </p>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-amber-100/55">
                    Meaning over noise
                  </p>
                  <p className="max-w-xs text-right text-sm leading-6 text-white/58">
                    Everything is designed to feel calm, reflective, and worth
                    returning to.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <SectionIntro
            eyebrow="Our story"
            title="Built from the belief that tarot can feel timeless and forward-looking at once."
            body="AeroTarot is not trying to replace the mystery of tarot with software. It is trying to give that mystery a more elegant container: one that honors the physical ritual while making reflection, memory, and interpretation easier to return to."
          />
          <div className="space-y-8">
            {storyMoments.map((item) => (
              <div
                key={item.label}
                className="border-t border-white/10 pt-5 sm:pt-6"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-amber-100/55">
                  {item.label}
                </p>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/62 sm:text-base">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01))] px-6 py-10 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/50">
                Point of view
              </p>
              <h2 className="mt-4 max-w-xl text-3xl leading-tight text-white sm:text-4xl">
                Technology should support the reading, not become the reading.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-7 text-white/62">
              <p>
                AeroTarot takes a quieter approach than most digital spiritual
                products. The goal is not to overwhelm the moment with features,
                but to design something calm enough that the ritual still feels
                like the center of gravity.
              </p>
              <p>
                The deck remains tactile and ceremonial. The app becomes a
                place to revisit spreads, record insight, and see what keeps
                returning. Together, they create a more reflective and more
                enduring tarot experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <SectionIntro
            eyebrow="What guides us"
            title="The experience is shaped by a few quiet principles."
            body="These ideas influence everything from the deck itself to the tone of the companion app."
          />
          <div className="space-y-8">
            {principles.map((principle) => (
              <div
                key={principle.label}
                className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-amber-100/55">
                  {principle.label}
                </p>
                <p className="max-w-xl text-sm leading-7 text-white/62 sm:text-base">
                  {principle.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/50">
                Who it&apos;s for
              </p>
              <h2 className="mt-4 max-w-xl text-3xl leading-tight text-white sm:text-4xl">
                Designed for readers who want their practice to feel grounded,
                beautiful, and remembered.
              </h2>
            </div>
            <div className="space-y-5">
              {audience.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 border-t border-white/10 pt-5 text-base leading-7 text-white/62"
                >
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-amber-100/70" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <WaitlistCard source="about-page" />
      </section>
    </MarketingPage>
  );
}
