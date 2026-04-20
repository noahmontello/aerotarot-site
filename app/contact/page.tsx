import Link from "next/link";
import { Suspense } from "react";
import { ContactFeedback } from "../_components/form-feedback";
import { ScrollReveal } from "../_components/home-scroll";
import {
  MarketingPage,
  SectionIntro,
  WaitlistCard,
  displayFontClass,
} from "../_components/marketing";

const reasons = [
  {
    title: "Partnerships",
    body: "Collaborations, retail placement, launch opportunities, or collector-focused concepts tied to the AeroTarot world.",
  },
  {
    title: "Press & creative",
    body: "Editorial interest, product features, interviews, or visual storytelling around the deck and connected experience.",
  },
  {
    title: "Early access",
    body: "Collectors, readers, and early supporters who want first notice when the initial release opens.",
  },
] as const;

export default function ContactPage() {
  return (
    <MarketingPage current="contact">
      <section className="relative -mt-16 overflow-hidden pt-16">
        <ScrollReveal className="mx-auto grid max-w-7xl gap-16 px-6 py-24 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:px-12 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/50">
              Contact
            </p>
            <h1
              className={`${displayFontClass} mt-6 max-w-3xl text-5xl leading-[0.94] font-medium tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl`}
            >
              Reach out if you want to be part of what AeroTarot becomes next.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
              The brand is still in its early chapter, which makes this the
              right moment for thoughtful collaborations, press interest, and
              early supporters to get close to the project.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/waitlist"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-amber-200/35 bg-[linear-gradient(135deg,rgba(255,233,173,0.24),rgba(149,110,255,0.2))] px-6 text-sm font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:border-amber-100/60 hover:bg-[linear-gradient(135deg,rgba(255,233,173,0.34),rgba(149,110,255,0.28))]"
              >
                Join the Waitlist
              </Link>
              <p className="text-sm leading-6 text-white/42">
                The easiest way to stay close to launch news.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.42)] sm:p-8">
            <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/42">
              Current contact flow
            </p>
            <div className="mt-6 space-y-5 text-base leading-7 text-white/62">
              <p>
                The site now has a working contact submission flow, giving
                AeroTarot a simple but real way to capture outreach from the
                website while the broader brand is still developing.
              </p>
              <p>
                The next layer can route messages into email or a CRM, but the
                core submission path is already in place and ready to collect
                interest from visitors.
              </p>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm uppercase tracking-[0.28em] text-amber-100/55">
                Best current path
              </p>
              <p className="mt-3 text-base leading-7 text-white/68">
                Use the form for direct outreach, or join the waitlist to stay
                close to launch updates and product releases.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <ScrollReveal className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <SectionIntro
            eyebrow="Get in touch about"
            title="AeroTarot is especially open to a few kinds of conversation."
            body="This page is less about customer support and more about meaningful connection while the brand is still taking shape."
          />
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <ScrollReveal
                key={reason.title}
                delay={index * 90}
                className="border-t border-white/10 pt-5 sm:pt-6"
              >
                <h3 className="text-xl font-medium text-white sm:text-2xl">
                  {reason.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/62 sm:text-base">
                  {reason.body}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <ScrollReveal className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01))] px-6 py-10 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="max-w-xl">
              <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/50">
                Contact form
              </p>
              <h2 className="mt-4 max-w-xl text-3xl leading-tight text-white sm:text-4xl">
                Send a note if you want to talk partnerships, press, or early
                access.
              </h2>
            </div>
            <div>
              <Suspense fallback={null}>
                <ContactFeedback />
              </Suspense>

              <form action="/api/contact" method="POST" className="mt-6 space-y-4">
                <input type="hidden" name="source" value="contact-page" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-3 min-h-12 w-full rounded-[1rem] border border-white/12 bg-black/55 px-4 text-base text-white outline-none transition focus:border-amber-100/45"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-3 min-h-12 w-full rounded-[1rem] border border-white/12 bg-black/55 px-4 text-base text-white outline-none transition focus:border-amber-100/45"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="inquiryType"
                    className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42"
                  >
                    Inquiry type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    className="mt-3 min-h-12 w-full rounded-[1rem] border border-white/12 bg-black/55 px-4 text-base text-white outline-none transition focus:border-amber-100/45"
                    defaultValue="Partnership"
                  >
                    <option>Partnership</option>
                    <option>Press</option>
                    <option>Creative collaboration</option>
                    <option>Early access</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="mt-3 w-full rounded-[1rem] border border-white/12 bg-black/55 px-4 py-3 text-base text-white outline-none transition focus:border-amber-100/45"
                  />
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-amber-200/35 bg-[linear-gradient(135deg,rgba(255,233,173,0.24),rgba(149,110,255,0.2))] px-6 text-sm font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:border-amber-100/60 hover:bg-[linear-gradient(135deg,rgba(255,233,173,0.34),rgba(149,110,255,0.28))]"
                  >
                    Send Message
                  </button>
                  <p className="text-sm leading-6 text-white/42">
                    Messages are currently stored from the site and can be
                    routed into email next.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <ScrollReveal>
          <WaitlistCard source="contact-page" />
        </ScrollReveal>
      </section>
    </MarketingPage>
  );
}
