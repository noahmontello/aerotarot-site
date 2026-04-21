import {
  FloatingSection,
  MarketingPage,
  WaitlistCard,
  displayFontClass,
} from "../_components/marketing";
import { ScrollReveal } from "../_components/home-scroll";

const benefits = [
  "First access to the NFC AeroTarot collection cards",
  "Launch updates for the companion app",
  "Early notice on product drops and availability",
] as const;

const timeline = [
  {
    label: "Step 1",
    body: "Join the list and reserve your place close to the launch.",
  },
  {
    label: "Step 2",
    body: "Receive early product updates as the collection and website evolve.",
  },
  {
    label: "Step 3",
    body: "Get first notice when purchases and broader access officially open.",
  },
] as const;

export default function WaitlistPage() {
  return (
    <MarketingPage current="waitlist">
      <section className="relative -mt-16 overflow-hidden pt-16">
        <ScrollReveal
          topFade={false}
          className="page-lead-grid mx-auto max-w-7xl gap-16 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:px-12"
        >
          <div className="max-w-2xl">
            <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/50">
              Waitlist
            </p>
            <h1
              className={`${displayFontClass} mt-6 max-w-3xl text-5xl leading-[0.94] font-medium tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl`}
            >
              Stay close to the launch and hear first when AeroTarot opens.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
              The waitlist is the first doorway into the project, giving early
              supporters a way to stay connected as the collection, app, and
              website move toward release.
            </p>
            <div className="mt-10 flex flex-col gap-3 text-sm text-white/50">
              {benefits.map((benefit) => (
                <span key={benefit} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-100/75" />
                  {benefit}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.42)] sm:p-8">
            <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/42">
              What to expect
            </p>
            <div className="mt-6 space-y-6">
              {timeline.map((item, index) => (
                <ScrollReveal
                  key={item.label}
                  delay={index * 90}
                  className="flex flex-col gap-2 border-t border-white/10 pt-5"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-amber-100/55">
                    {item.label}
                  </p>
                  <p className="text-base leading-7 text-white/64">
                    {item.body}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <FloatingSection className="py-8 sm:py-10">
        <ScrollReveal>
          <WaitlistCard source="waitlist-page" />
        </ScrollReveal>
      </FloatingSection>
    </MarketingPage>
  );
}
