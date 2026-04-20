import Link from "next/link";
import { Suspense, type ReactNode } from "react";
import { WaitlistFeedback } from "./form-feedback";

type NavKey = "home" | "about" | "cards" | "deck" | "contact" | "waitlist";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body: string;
};

type MarketingPageProps = {
  current: NavKey;
  children: ReactNode;
  showHeader?: boolean;
};

const navItems = [
  { href: "/", label: "Home", key: "home" },
  { href: "/about", label: "About", key: "about" },
  { href: "/cards", label: "Cards", key: "cards" },
  { href: "/deck", label: "Deck", key: "deck" },
  { href: "/contact", label: "Contact", key: "contact" },
  { href: "/waitlist", label: "Waitlist", key: "waitlist" },
] as const;

export const steps = [
  {
    number: "01",
    title: "Draw your cards",
    description:
      "Begin with the AeroTarot deck and let the tactile ritual shape the energy of your reading.",
  },
  {
    number: "02",
    title: "Scan or connect them",
    description:
      "Link the physical spread to the app in seconds, preserving every card and position with clarity.",
  },
  {
    number: "03",
    title: "Receive AI-powered interpretation",
    description:
      "Get thoughtful guidance that blends symbolic depth, pattern recognition, and your personal context.",
  },
] as const;

export const features = [
  {
    title: "Physical + digital experience",
    description:
      "A grounded ritual in your hands, expanded by a digital layer designed to feel seamless and intentional.",
  },
  {
    title: "Personalized readings",
    description:
      "Interpretations adapt to your spread, your history, and the questions that keep returning.",
  },
  {
    title: "Journal & track insights",
    description:
      "Save readings, revisit themes, and notice the patterns that emerge across time.",
  },
] as const;

export const principles = [
  {
    label: "Ritual-first",
    value:
      "Built to preserve the tactile and emotional gravity of the cards.",
  },
  {
    label: "Calm intelligence",
    value:
      "Technology supports interpretation without overwhelming the mystique.",
  },
  {
    label: "Personal memory",
    value:
      "Every reading becomes part of a living archive you can return to.",
  },
] as const;

export const heroNotes = [
  "Premium physical deck",
  "Companion interpretation app",
  "Private journal of readings",
] as const;

export const displayFontClass =
  "[font-family:'Iowan_Old_Style','Palatino_Linotype','Book_Antiqua','Times_New_Roman',serif]";

export function MarketingPage({
  current,
  children,
  showHeader = true,
}: MarketingPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundAura />
      <div className="relative">
        {showHeader ? <SiteHeader current={current} /> : null}
        {children}
        <Footer />
      </div>
    </main>
  );
}

function SiteHeader({ current }: { current: NavKey }) {
  return (
    <header className="sticky top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="text-[0.72rem] uppercase tracking-[0.38em] text-white/72"
        >
          AeroTarot
        </Link>
        <details className="relative sm:hidden">
          <summary className="flex min-h-10 min-w-10 cursor-pointer list-none items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-sm text-white/72 transition hover:text-white">
            Menu
          </summary>
          <div className="absolute right-0 top-13 w-56 rounded-[1.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,14,26,0.96),rgba(7,7,10,0.98))] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
            <nav className="flex flex-col">
              {navItems.map((item) => {
                const isActive = item.key === current;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-white/7 text-white"
                        : "text-white/60 hover:bg-white/4 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </details>
        <nav className="hidden items-center gap-2 text-sm sm:flex">
          {navItems.map((item) => {
            const isActive = item.key === current;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 transition ${
                  isActive
                    ? "border border-white/12 bg-white/6 text-white"
                    : "text-white/52 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  ctaLabel,
  ctaHref,
  secondary,
  visual,
}: {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondary?: string;
  visual?: ReactNode;
}) {
  return (
    <section className="relative isolate -mt-16 min-h-[78svh] pt-16">
      <div className="mx-auto grid min-h-[78svh] w-full max-w-7xl items-center gap-16 px-6 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:px-12">
        <div className="max-w-xl self-center pt-16 sm:pt-20 lg:pt-12">
          <p className="mb-5 text-[0.68rem] uppercase tracking-[0.42em] text-white/55">
            {eyebrow}
          </p>
          <h1
            className={`${displayFontClass} max-w-lg text-5xl leading-none font-medium tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl`}
          >
            {title}
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-white/70 sm:text-lg">
            {body}
          </p>
          {(ctaLabel || secondary) && (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              {ctaLabel && ctaHref ? (
                <Link
                  href={ctaHref}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-amber-200/35 bg-[linear-gradient(135deg,rgba(255,233,173,0.26),rgba(149,110,255,0.24))] px-6 text-sm font-medium tracking-[0.2em] uppercase text-white transition duration-300 hover:border-amber-100/60 hover:bg-[linear-gradient(135deg,rgba(255,233,173,0.36),rgba(149,110,255,0.3))]"
                >
                  {ctaLabel}
                </Link>
              ) : null}
              {secondary ? (
                <p className="text-sm leading-6 text-white/45">{secondary}</p>
              ) : null}
            </div>
          )}
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-6 lg:max-w-none lg:justify-end">
          {visual ?? <HeroVisual />}
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <>
      <div className="absolute inset-x-10 top-8 h-40 rounded-full bg-[radial-gradient(circle,rgba(246,200,112,0.26),transparent_70%)] blur-3xl" />
      <div className="absolute bottom-4 right-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(116,71,255,0.28),transparent_72%)] blur-3xl" />

      <div className="relative h-[26rem] w-full max-w-[24rem] sm:h-[31rem] sm:max-w-[28rem]">
        <div className="absolute inset-[14%_8%_8%_18%] rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
        <div className="absolute inset-0 rounded-[2.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_40px_120px_rgba(0,0,0,0.7)]" />
        <div className="absolute left-[10%] top-[8%] h-[78%] w-[38%] rounded-[1.8rem] border border-amber-100/20 bg-[linear-gradient(180deg,rgba(24,18,40,0.98),rgba(8,8,12,0.98))] p-3 shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
          <TarotCard />
        </div>
        <div className="absolute left-[33%] top-[17%] h-[78%] w-[38%] rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,15,32,0.95),rgba(6,6,10,0.96))] p-3 shadow-[0_30px_70px_rgba(0,0,0,0.58)]" />
        <div className="absolute left-[56%] top-[26%] h-[78%] w-[38%] rounded-[1.8rem] border border-white/12 bg-[linear-gradient(180deg,rgba(26,20,46,0.98),rgba(7,7,10,0.98))] p-3 shadow-[0_35px_80px_rgba(0,0,0,0.62)]">
          <AppPanel />
        </div>
      </div>
    </>
  );
}

export function SectionIntro({ eyebrow, title, body }: SectionIntroProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/50">
        {eyebrow}
      </p>
      <h2
        className={`${displayFontClass} mt-4 text-4xl leading-tight font-medium tracking-[-0.03em] text-white sm:text-5xl`}
      >
        {title}
      </h2>
      <p className="mt-5 max-w-xl text-base leading-7 text-white/62">{body}</p>
    </div>
  );
}

export function WaitlistCard({
  source = "website",
}: {
  source?: string;
}) {
  const inputId = `waitlist-email-${source.replace(/[^a-z0-9-]/gi, "-").toLowerCase()}`;

  return (
    <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] px-6 py-10 text-center shadow-[0_30px_120px_rgba(0,0,0,0.5)] sm:px-10">
      <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/50">
        Waitlist
      </p>
      <h2
        className={`${displayFontClass} mt-4 text-4xl leading-tight font-medium tracking-[-0.03em] text-white sm:text-5xl`}
      >
        Be first to experience the next chapter of tarot.
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/65">
        Join the list for early access, product updates, and launch news as
        AeroTarot comes to life.
      </p>

      <Suspense fallback={null}>
        <WaitlistFeedback />
      </Suspense>

      <form
        action="/api/waitlist"
        method="POST"
        className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row"
      >
        <input type="hidden" name="source" value={source} />
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          className="min-h-12 flex-1 rounded-full border border-white/12 bg-black/55 px-5 text-base text-white outline-none transition placeholder:text-white/28 focus:border-amber-100/45"
        />
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-amber-200/30 bg-[linear-gradient(135deg,rgba(255,231,173,0.24),rgba(124,92,255,0.22))] px-6 text-sm font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:border-amber-100/55 hover:bg-[linear-gradient(135deg,rgba(255,231,173,0.34),rgba(124,92,255,0.3))]"
        >
          Join the Waitlist
        </button>
      </form>
      <p className="mt-4 text-sm text-white/35">
        No spam. Just thoughtful updates as AeroTarot nears launch.
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/8 px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 py-6 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_minmax(0,0.8fr)]">
        <div className="max-w-sm">
          <p className="tracking-[0.26em] uppercase text-white/62">AeroTarot</p>
          <p className="mt-4 text-sm leading-7 text-white/46">
            A premium tarot experience built around physical ritual, connected
            cards, and a calmer relationship with technology.
          </p>
        </div>
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.32em] text-white/40">
            Explore
          </p>
          <nav className="mt-4 flex flex-col gap-3 text-sm text-white/52">
            <Link href="/about" className="transition hover:text-white">
              About
            </Link>
            <Link href="/deck" className="transition hover:text-white">
              Deck Store
            </Link>
            <Link href="/cards" className="transition hover:text-white">
              Card Meanings
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
            <Link href="/waitlist" className="transition hover:text-white">
              Waitlist
            </Link>
          </nav>
        </div>
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.32em] text-white/40">
            Status
          </p>
          <div className="mt-4 space-y-3 text-sm text-white/46">
            <p>Launching in stages with early access through the waitlist.</p>
            <p>NFC collection cards and companion app currently in active build.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TarotCard() {
  return (
    <div className="flex h-full flex-col rounded-[1.25rem] border border-amber-100/18 bg-[radial-gradient(circle_at_top,rgba(123,79,255,0.26),transparent_38%),linear-gradient(180deg,rgba(12,10,22,0.98),rgba(6,6,10,1))] px-4 py-5">
      <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.35em] text-amber-100/55">
        <span>Aero</span>
        <span>XVII</span>
      </div>
      <div className="relative mt-5 flex-1 overflow-hidden rounded-[1rem] border border-white/8 bg-[radial-gradient(circle_at_50%_32%,rgba(255,215,132,0.28),transparent_16%),radial-gradient(circle_at_50%_36%,rgba(136,94,255,0.62),transparent_34%),linear-gradient(180deg,rgba(18,12,34,0.92),rgba(8,8,12,0.98))]">
        <div className="absolute inset-x-[24%] top-[17%] h-[38%] rounded-full border border-white/10" />
        <div className="absolute inset-x-[38%] top-[10%] h-10 rounded-full bg-amber-100/80 blur-xl" />
        <div className="absolute left-1/2 top-[28%] h-[38%] w-px -translate-x-1/2 bg-white/20" />
        <div className="absolute inset-x-[18%] bottom-[16%] h-px bg-white/14" />
      </div>
      <div className="mt-5">
        <p className="text-[0.62rem] uppercase tracking-[0.35em] text-white/38">
          The Star
        </p>
      </div>
    </div>
  );
}

function AppPanel() {
  return (
    <div className="flex h-full flex-col rounded-[1.25rem] border border-white/8 bg-[linear-gradient(180deg,rgba(14,12,22,0.95),rgba(8,8,12,0.98))] p-4">
      <div className="flex items-center justify-between text-[0.58rem] uppercase tracking-[0.3em] text-white/35">
        <span>Reading</span>
        <span>Live</span>
      </div>
      <div className="mt-5 space-y-3">
        <div className="h-2 rounded-full bg-white/10" />
        <div className="h-2 w-5/6 rounded-full bg-white/8" />
      </div>
      <div className="mt-6 rounded-[1rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(113,76,255,0.32),transparent_40%),rgba(255,255,255,0.02)] p-4">
        <div className="text-[0.58rem] uppercase tracking-[0.32em] text-white/40">
          Interpretation
        </div>
        <p className="mt-3 text-sm leading-6 text-white/70">
          A cycle is closing gently. What looked uncertain is becoming
          directional, asking for trust and disciplined openness.
        </p>
      </div>
      <div className="mt-4 flex gap-2">
        <div className="h-9 flex-1 rounded-full border border-white/8 bg-white/4" />
        <div className="h-9 w-10 rounded-full border border-amber-100/18 bg-amber-100/10" />
      </div>
    </div>
  );
}

function BackgroundAura() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(80,51,185,0.26),transparent_28%),radial-gradient(circle_at_15%_20%,rgba(205,160,86,0.13),transparent_18%),linear-gradient(180deg,#070709_0%,#050507_42%,#030304_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute left-[8%] top-24 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(249,211,134,0.18),transparent_70%)] blur-3xl" />
      <div className="absolute right-[10%] top-[24rem] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(96,65,223,0.2),transparent_72%)] blur-3xl" />
    </div>
  );
}
