import Link from "next/link";
import { HomeHeroStack } from "./_components/home-hero-stack";
import {
  ParallaxLayer,
  ScrollReveal,
} from "./_components/home-scroll";
import {
  FloatingSection,
  MarketingPage,
  SectionIntro,
  WaitlistCard,
  displayFontClass,
  features,
  steps,
} from "./_components/marketing";

const brandDetails = [
  {
    title: "Premium objects",
    body: "AeroTarot is being shaped as a collectible physical experience first, with presence, tactility, and care in the product itself.",
  },
  {
    title: "Connected ritual",
    body: "NFC-enabled cards and a companion app extend each reading without flattening the mystery that makes tarot meaningful.",
  },
  {
    title: "Designed memory",
    body: "The digital layer is there to help people revisit readings, notice patterns, and build a quieter archive of insight over time.",
  },
] as const;

const earlyInterest = [
  {
    audience: "Collectors",
    signal:
      "Drawn to the object quality of the deck and the idea of limited connected releases.",
  },
  {
    audience: "Readers",
    signal:
      "Interested in a tarot experience that keeps ritual central while giving interpretation more continuity.",
  },
  {
    audience: "Design-minded spiritual practice",
    signal:
      "Responding to a version of tarot that feels modern, restrained, and emotionally grounded rather than loud or gimmicky.",
  },
] as const;

export default function Home() {
  return (
    <MarketingPage current="home">
      <section className="relative -mt-16 overflow-hidden pt-16">
          <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_22%_24%,rgba(121,77,255,0.18),transparent_22%),radial-gradient(circle_at_74%_30%,rgba(244,196,110,0.1),transparent_16%),radial-gradient(circle_at_58%_68%,rgba(84,48,189,0.12),transparent_20%)]" />
          <div className="mx-auto flex min-h-[calc(100svh-4.75rem)] max-w-7xl flex-col justify-center gap-7 px-6 py-10 sm:gap-8 sm:px-8 sm:py-12 lg:gap-9 lg:px-12 lg:py-16">
            <ParallaxLayer
              speed={0.14}
              className="relative flex items-center justify-center"
            >
              <div className="flex flex-col items-center">
                <HomeHeroStack />
                <div className="mt-1 text-center sm:mt-2">
                  <p
                    className={`${displayFontClass} text-[2.9rem] leading-none tracking-[-0.04em] text-white sm:text-[3.6rem]`}
                  >
                    AeroTarot
                  </p>
                  <p className="mt-2 text-sm font-medium tracking-[0.02em] text-white/66 sm:text-base">
                    Intuitive. Guidance. Reimagined.
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer speed={0.08} className="mx-auto w-full max-w-7xl">
              <div className="w-full max-w-3xl">
                <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/50">
                  Physical ritual. Digital depth.
                </p>
                <h1
                  className={`${displayFontClass} mt-6 max-w-4xl text-5xl leading-[0.92] font-medium tracking-[-0.045em] text-white sm:text-6xl lg:text-[5.6rem]`}
                >
                  Tarot, reimagined through technology.
                </h1>
                <p className="mt-8 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
                  AeroTarot pairs the intimacy of a premium physical deck with a
                  calm digital layer that captures, interprets, and remembers your
                  readings.
                </p>
                <p className="mt-5 max-w-lg text-sm leading-7 text-amber-100/48 sm:text-base">
                  A darker, more luminous reading experience where every card feels
                  like an object of ceremony and every interpretation feels drawn
                  from a hidden pattern rather than a screen.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="/waitlist"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-amber-200/35 bg-[linear-gradient(135deg,rgba(255,233,173,0.24),rgba(149,110,255,0.22))] px-6 text-sm font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:border-amber-100/60 hover:bg-[linear-gradient(135deg,rgba(255,233,173,0.34),rgba(149,110,255,0.3))]"
                  >
                    Join the Waitlist
                  </Link>
                  <p className="text-sm leading-6 text-white/42">
                    Crafted for people who want ritual, memory, and meaning in one
                    experience.
                  </p>
                </div>

                <div className="mt-12 grid w-full gap-4 text-sm text-white/48 sm:grid-cols-3 sm:gap-4">
                  <span className="rounded-full border border-white/8 bg-white/[0.02] px-4 py-3">
                    Premium physical deck
                  </span>
                  <span className="rounded-full border border-white/8 bg-white/[0.02] px-4 py-3">
                    Companion interpretation app
                  </span>
                  <span className="rounded-full border border-white/8 bg-white/[0.02] px-4 py-3">
                    Private journal of readings
                  </span>
                </div>
              </div>
            </ParallaxLayer>
          </div>
      </section>

      <FloatingSection className="border-t border-white/8">
          <ScrollReveal className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="How it works"
              title="A ritual that begins in the hand and opens into a more luminous reading."
              body="Each draw keeps the gravity of the physical spread while the digital layer reveals continuity, symbolism, and a quieter form of interpretation."
            />
            <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              {steps.map((step, index) => (
                <ScrollReveal
                  key={step.number}
                  delay={index * 110}
                  className="border-t border-white/12 pt-5 md:pt-6"
                >
                  <p className="text-xs tracking-[0.35em] uppercase text-amber-100/55">
                    {step.number}
                  </p>
                  <h3 className="mt-4 text-2xl font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-white/62 sm:text-base">
                    {step.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
      </FloatingSection>

      <FloatingSection>
          <ScrollReveal className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <SectionIntro
              eyebrow="The experience"
              title="Designed to feel intimate, arcane, and quietly powerful."
              body="AeroTarot combines premium ritual objects and thoughtful software without dissolving the mystique that makes tarot magnetic in the first place."
            />

            <div className="space-y-8">
              {features.map((feature, index) => (
                <ScrollReveal
                  key={feature.title}
                  delay={index * 110}
                  className="border-t border-white/10 pt-5 sm:pt-6"
                >
                  <h3 className="text-xl font-medium text-white sm:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/62 sm:text-base">
                    {feature.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
      </FloatingSection>

      <FloatingSection>
          <ScrollReveal className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <SectionIntro
              eyebrow="The world"
              title="AeroTarot is being built as a world, not just a website."
              body="The site is only one threshold into a broader vision shaped by premium objects, connected cards, symbolic design language, and a darker editorial atmosphere around tarot."
            />
            <div className="space-y-8">
              {brandDetails.map((detail, index) => (
                <ScrollReveal
                  key={detail.title}
                  delay={index * 110}
                  className="border-t border-white/10 pt-5 sm:pt-6"
                >
                  <h3 className="text-xl font-medium text-white sm:text-2xl">
                    {detail.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/62 sm:text-base">
                    {detail.body}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
      </FloatingSection>

      <FloatingSection>
          <ScrollReveal className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01))] px-6 py-10 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="max-w-xl">
                <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/50">
                  Early interest
                </p>
                <h2 className="mt-4 max-w-xl text-3xl leading-tight text-white sm:text-4xl">
                  The project is already gathering a distinct circle of attention.
                </h2>
                <p className="mt-5 text-base leading-7 text-white/62">
                  Even in this early phase, AeroTarot is revealing itself to
                  collectors, readers, and design-minded spiritual practice in a
                  very specific way.
                </p>
              </div>
              <div className="space-y-8">
                {earlyInterest.map((item, index) => (
                  <ScrollReveal
                    key={item.audience}
                    delay={index * 110}
                    className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
                  >
                    <p className="text-sm uppercase tracking-[0.28em] text-amber-100/55">
                      {item.audience}
                    </p>
                    <p className="max-w-xl text-sm leading-7 text-white/62 sm:text-base">
                      {item.signal}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
      </FloatingSection>

      <FloatingSection>
          <ScrollReveal className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/50">
                Explore
              </p>
              <h2 className="mt-4 max-w-xl text-3xl leading-tight text-white sm:text-4xl">
                Move deeper into the world of AeroTarot.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about"
                className="rounded-full border border-white/12 px-5 py-3 text-sm text-white/80 transition hover:border-white/25 hover:text-white"
              >
                About AeroTarot
              </Link>
              <Link
                href="/deck"
                className="rounded-full border border-white/12 px-5 py-3 text-sm text-white/80 transition hover:border-white/25 hover:text-white"
              >
                Explore the Deck
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/12 px-5 py-3 text-sm text-white/80 transition hover:border-white/25 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </ScrollReveal>
      </FloatingSection>

      <FloatingSection>
          <ScrollReveal>
            <WaitlistCard source="home-page" />
          </ScrollReveal>
      </FloatingSection>
    </MarketingPage>
  );
}
