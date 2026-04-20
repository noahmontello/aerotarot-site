const steps = [
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

const features = [
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

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      <BackgroundAura />
      <div className="relative">
        <Hero />
        <HowItWorks />
        <Features />
        <DeckSection />
        <WaitlistSection />
        <Footer />
      </div>
    </main>
  );
}

const displayFontClass =
  "[font-family:'Iowan_Old_Style','Palatino_Linotype','Book_Antiqua','Times_New_Roman',serif]";

function Hero() {
  return (
    <section className="relative isolate min-h-screen">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-16 px-6 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:px-12">
        <div className="max-w-xl self-center pt-12 sm:pt-16 lg:pt-10">
          <p className="mb-5 text-[0.68rem] uppercase tracking-[0.42em] text-white/55">
            AeroTarot
          </p>
          <h1
            className={`${displayFontClass} max-w-lg text-5xl leading-none font-medium tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl`}
          >
            Tarot, reimagined through technology.
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-white/70 sm:text-lg">
            AeroTarot pairs the ritual of physical cards with a luminous digital
            layer, turning every draw into a deeper, more personal source of
            insight.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#waitlist"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-amber-200/35 bg-[linear-gradient(135deg,rgba(255,233,173,0.26),rgba(149,110,255,0.24))] px-6 text-sm font-medium tracking-[0.2em] uppercase text-white transition duration-300 hover:border-amber-100/60 hover:bg-[linear-gradient(135deg,rgba(255,233,173,0.36),rgba(149,110,255,0.3))]"
            >
              Join the Waitlist
            </a>
            <p className="text-sm leading-6 text-white/45">
              Crafted for seekers who want ritual, memory, and meaning in one
              experience.
            </p>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-6 lg:max-w-none lg:justify-end">
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
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="border-t border-white/8 px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="How it works"
          title="A ritual that begins in your hands and unfolds with intelligent guidance."
          body="Every reading keeps the tactile beauty of the deck while adding a calm, modern interpretation flow."
        />
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-t border-white/12 pt-5 md:pt-6"
            >
              <p className="text-xs tracking-[0.35em] text-amber-100/55 uppercase">
                {step.number}
              </p>
              <h3 className="mt-4 text-2xl font-medium text-white">
                {step.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/62 sm:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <SectionIntro
          eyebrow="Features"
          title="Designed to feel intimate, insightful, and quietly powerful."
          body="AeroTarot combines premium objects and thoughtful software without losing the mystery that makes tarot meaningful."
        />

        <div className="space-y-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border-t border-white/10 pt-5 sm:pt-6"
            >
              <h3 className="text-xl font-medium text-white sm:text-2xl">
                {feature.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/62 sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeckSection() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] px-6 py-8 shadow-[0_35px_120px_rgba(0,0,0,0.55)] sm:px-8 sm:py-10 lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.1fr)] lg:px-10">
        <div className="relative min-h-80">
          <div className="absolute inset-x-6 top-10 h-24 rounded-full bg-[radial-gradient(circle,rgba(243,198,102,0.25),transparent_72%)] blur-3xl" />
          <div className="absolute left-4 top-12 h-64 w-44 rounded-[1.8rem] border border-amber-100/22 bg-[linear-gradient(180deg,rgba(21,17,34,0.98),rgba(8,8,12,0.99))] p-3 shadow-[0_25px_70px_rgba(0,0,0,0.65)] sm:left-10">
            <TarotCard />
          </div>
          <div className="absolute right-5 top-24 h-64 w-44 rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,12,27,0.96),rgba(7,7,10,0.98))] shadow-[0_25px_80px_rgba(0,0,0,0.65)] sm:right-10" />
        </div>

        <div className="self-center">
          <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/50">
            The deck
          </p>
          <h2
            className={`${displayFontClass} mt-4 max-w-xl text-4xl leading-tight font-medium tracking-[-0.03em] text-white sm:text-5xl`}
          >
            A premium deck built as a ritual object, then extended into the app.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
            AeroTarot is designed with a collector’s sensibility: tactile
            finishes, intentional symbolism, and a presence that feels worthy of
            daily ritual. Each deck is made to work beautifully on its own, then
            connect effortlessly with the AeroTarot app for richer,
            AI-assisted interpretation.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/52">
            The result is a product that feels luxurious on the table and
            intelligent in motion, keeping the mystique of tarot while opening a
            more personal, modern reading experience.
          </p>
        </div>
      </div>
    </section>
  );
}

function WaitlistSection() {
  return (
    <section id="waitlist" className="px-6 py-20 sm:px-8 lg:px-12">
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

        <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="min-h-12 flex-1 rounded-full border border-white/12 bg-black/55 px-5 text-base text-white outline-none transition placeholder:text-white/28 focus:border-amber-100/45"
          />
          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-amber-200/30 bg-[linear-gradient(135deg,rgba(255,231,173,0.24),rgba(124,92,255,0.22))] px-6 text-sm font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:border-amber-100/55 hover:bg-[linear-gradient(135deg,rgba(255,231,173,0.34),rgba(124,92,255,0.3))]"
          >
            Join the Waitlist
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/8 px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
        <p className="tracking-[0.26em] uppercase text-white/62">AeroTarot</p>
        <nav className="flex items-center gap-6">
          <a href="#" className="transition hover:text-white">
            About
          </a>
          <a href="#" className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
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
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(80,51,185,0.26),transparent_28%),radial-gradient(circle_at_15%_20%,rgba(205,160,86,0.13),transparent_18%),linear-gradient(180deg,#070709_0%,#050507_42%,#030304_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute left-[8%] top-24 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(249,211,134,0.18),transparent_70%)] blur-3xl" />
      <div className="absolute right-[10%] top-[24rem] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(96,65,223,0.2),transparent_72%)] blur-3xl" />
    </div>
  );
}
