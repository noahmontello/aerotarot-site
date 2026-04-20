import Link from "next/link";
import { ScrollReveal } from "../_components/home-scroll";
import {
  MarketingPage,
  SectionIntro,
  WaitlistCard,
  displayFontClass,
} from "../_components/marketing";

type StoreState = "purchase" | "coming-soon" | "sold-out";

const productHighlights = [
  "Premium NFC-enabled AeroTarot collection cards",
  "Designed to connect instantly with the companion app",
  "Made for collecting, gifting, display, and ritual use",
] as const;

const purchaseNotes = [
  { label: "Collection", value: "NFC AeroTarot Cards" },
  { label: "Edition", value: "Founding release" },
  { label: "Status", value: "Launching soon" },
  { label: "Access", value: "Waitlist first" },
] as const;

const included = [
  {
    title: "NFC-enabled cards",
    body: "Each card is embedded with NFC functionality so a physical tap can unlock a connected digital experience.",
  },
  {
    title: "App connection",
    body: "Cards pair naturally with the AeroTarot app, letting each object carry both physical presence and digital identity.",
  },
  {
    title: "Collector presentation",
    body: "The collection is imagined as a premium release with tactile materials, display-worthy design, and a product feel closer to an art object than a novelty gadget.",
  },
] as const;

const nfcFlow = [
  {
    step: "01",
    title: "Tap the card",
    body: "Bring your phone to the NFC card to open its connected AeroTarot experience.",
  },
  {
    step: "02",
    title: "Unlock the layer",
    body: "Each card can reveal content, identity, or interpretation inside the AeroTarot ecosystem.",
  },
  {
    step: "03",
    title: "Collect and return",
    body: "Your physical collection becomes something you can revisit, archive, and build meaning around over time.",
  },
] as const;

const storeDetails = [
  "Premium materials and collector-minded presentation",
  "NFC technology built into the physical card experience",
  "Seamless connection to the AeroTarot app",
  "Created for launch drops, collecting, and ritual use",
] as const;

export default function DeckPage() {
  const configuredState = process.env.NEXT_PUBLIC_DECK_STORE_STATE;
  const storeState: StoreState =
    configuredState === "sold-out" || configuredState === "coming-soon"
      ? configuredState
      : process.env.STRIPE_SECRET_KEY &&
          process.env.STRIPE_NFC_COLLECTION_PRICE_ID
        ? "purchase"
        : "coming-soon";
  const checkoutConfigured = Boolean(
    process.env.STRIPE_SECRET_KEY && process.env.STRIPE_NFC_COLLECTION_PRICE_ID,
  );

  return (
    <MarketingPage current="deck">
      <section className="relative -mt-16 overflow-hidden pt-16">
        <ScrollReveal className="mx-auto grid max-w-7xl gap-16 px-6 py-24 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:px-12 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/50">
              The deck store
            </p>
            <h1
              className={`${displayFontClass} mt-6 max-w-3xl text-5xl leading-[0.94] font-medium tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl`}
            >
              The online store for the NFC AeroTarot collection cards.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
              AeroTarot collection cards are designed as premium physical
              objects with embedded NFC technology, giving each card a presence
              in your hands and a connected life inside the app.
            </p>
            {checkoutConfigured ? (
              <form
                action="/api/checkout"
                method="POST"
                className="mt-10 flex max-w-lg flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-end"
              >
                <div className="flex-1">
                  <label
                    htmlFor="quantity"
                    className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42"
                  >
                    Quantity
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    defaultValue="1"
                    className="mt-3 min-h-12 w-full rounded-full border border-white/12 bg-black/55 px-4 text-base text-white outline-none transition focus:border-amber-100/45"
                  >
                    {Array.from({ length: 10 }, (_, index) => index + 1).map(
                      (quantity) => (
                        <option key={quantity} value={quantity}>
                          {quantity}
                        </option>
                      ),
                    )}
                  </select>
                </div>
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-amber-200/35 bg-[linear-gradient(135deg,rgba(255,233,173,0.24),rgba(149,110,255,0.22))] px-6 text-sm font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:border-amber-100/60 hover:bg-[linear-gradient(135deg,rgba(255,233,173,0.34),rgba(149,110,255,0.3))]"
                >
                  Buy with Stripe
                </button>
              </form>
            ) : (
              <div className="mt-10 max-w-lg rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm leading-7 text-white/65">
                  Stripe checkout is ready in code, but this environment still
                  needs live Stripe keys and a price ID before purchases can be
                  completed.
                </p>
                <div className="mt-4">
                  <Link
                    href="/waitlist"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-amber-200/35 bg-[linear-gradient(135deg,rgba(255,233,173,0.24),rgba(149,110,255,0.22))] px-6 text-sm font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:border-amber-100/60 hover:bg-[linear-gradient(135deg,rgba(255,233,173,0.34),rgba(149,110,255,0.3))]"
                  >
                    Join the Waitlist
                  </Link>
                </div>
              </div>
            )}
            <div className="mt-10 flex flex-col gap-3 text-sm text-white/50">
              {productHighlights.map((item) => (
                <span key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-100/75" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(119,79,255,0.28),transparent_72%)] blur-3xl" />
            <div className="absolute bottom-8 right-6 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(241,194,111,0.18),transparent_72%)] blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.46)] sm:p-6">
              <div className="relative h-[28rem] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(122,78,255,0.18),transparent_32%),linear-gradient(180deg,rgba(18,14,31,0.96),rgba(7,7,10,0.98))]">
                <div className="absolute left-[12%] top-[11%] h-[68%] w-[34%] rounded-[1.7rem] border border-amber-100/18 bg-[linear-gradient(180deg,rgba(20,16,34,1),rgba(8,8,12,1))] shadow-[0_25px_60px_rgba(0,0,0,0.55)]" />
                <div className="absolute left-[29%] top-[18%] h-[68%] w-[34%] rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(16,13,28,0.98),rgba(7,7,10,1))] shadow-[0_25px_60px_rgba(0,0,0,0.55)]" />
                <div className="absolute left-[46%] top-[25%] h-[68%] w-[34%] rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(24,19,42,0.98),rgba(9,9,12,1))] shadow-[0_25px_60px_rgba(0,0,0,0.55)]" />
                <div className="absolute inset-x-8 bottom-6 flex items-end justify-between">
                  <div>
                    <p className="text-[0.62rem] uppercase tracking-[0.34em] text-white/35">
                      AeroTarot
                    </p>
                    <p className="mt-2 text-lg text-white/85">
                      NFC Collection Cards
                    </p>
                  </div>
                  <div className="rounded-full border border-amber-100/18 bg-amber-100/8 px-4 py-2 text-[0.62rem] uppercase tracking-[0.28em] text-amber-100/72">
                    NFC
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {purchaseNotes.map((note) => (
                  <div
                    key={note.label}
                    className="border-t border-white/10 pt-3 text-sm"
                  >
                    <p className="uppercase tracking-[0.26em] text-white/34">
                      {note.label}
                    </p>
                    <p className="mt-2 text-white/74">{note.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="px-6 pb-10 sm:px-8 lg:px-12">
        <ScrollReveal className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-t border-white/10 pt-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(320px,0.72fr)]">
            <div className="max-w-2xl">
              <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/50">
                Purchase
              </p>
              <h2
                className={`${displayFontClass} mt-4 text-4xl leading-tight font-medium tracking-[-0.03em] text-white sm:text-5xl`}
              >
                NFC AeroTarot Collection Cards
              </h2>
              <div className="mt-5 flex items-end gap-3">
                <p className="text-4xl text-white sm:text-5xl">$99</p>
                <p className="pb-1 text-sm uppercase tracking-[0.24em] text-white/42">
                  USD
                </p>
              </div>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/62">
                A premium connected card collection designed for launch drops,
                collecting, gifting, and app-linked interaction.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.38)]">
              <div className="flex flex-wrap gap-2">
                <StatusPill
                  label="Purchase"
                  active={storeState === "purchase"}
                />
                <StatusPill
                  label="Coming Soon"
                  active={storeState === "coming-soon"}
                />
                <StatusPill
                  label="Sold Out"
                  active={storeState === "sold-out"}
                />
              </div>

              {storeState === "purchase" ? (
                <form action="/api/checkout" method="POST" className="mt-6">
                  <label
                    htmlFor="quantity"
                    className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42"
                  >
                    Quantity
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    defaultValue="1"
                    className="mt-3 min-h-12 w-full rounded-full border border-white/12 bg-black/55 px-4 text-base text-white outline-none transition focus:border-amber-100/45"
                  >
                    {Array.from({ length: 10 }, (_, index) => index + 1).map(
                      (quantity) => (
                        <option key={quantity} value={quantity}>
                          {quantity}
                        </option>
                      ),
                    )}
                  </select>
                  <button
                    type="submit"
                    className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-amber-200/35 bg-[linear-gradient(135deg,rgba(255,233,173,0.24),rgba(149,110,255,0.22))] px-6 text-sm font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:border-amber-100/60 hover:bg-[linear-gradient(135deg,rgba(255,233,173,0.34),rgba(149,110,255,0.3))]"
                  >
                    Buy with Stripe
                  </button>
                  <p className="mt-4 text-sm leading-6 text-white/48">
                    Secure hosted checkout powered by Stripe test mode.
                  </p>
                </form>
              ) : null}

              {storeState === "coming-soon" ? (
                <div className="mt-6">
                  <p className="text-base leading-7 text-white/64">
                    Purchases are almost ready. The product price is set, but
                    the local Stripe secret key still needs to be added before
                    checkout can launch from this environment.
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/waitlist"
                      className="inline-flex min-h-12 items-center justify-center rounded-full border border-amber-200/35 bg-[linear-gradient(135deg,rgba(255,233,173,0.24),rgba(149,110,255,0.22))] px-6 text-sm font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:border-amber-100/60 hover:bg-[linear-gradient(135deg,rgba(255,233,173,0.34),rgba(149,110,255,0.3))]"
                    >
                      Join the Waitlist
                    </Link>
                    <div className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 px-5 text-sm text-white/62">
                      Test checkout pending key
                    </div>
                  </div>
                </div>
              ) : null}

              {storeState === "sold-out" ? (
                <div className="mt-6">
                  <p className="text-base leading-7 text-white/64">
                    This release is currently sold out. Join the waitlist to be
                    first in line for the next collection drop.
                  </p>
                  <div className="mt-5">
                    <Link
                      href="/waitlist"
                      className="inline-flex min-h-12 items-center justify-center rounded-full border border-amber-200/35 bg-[linear-gradient(135deg,rgba(255,233,173,0.24),rgba(149,110,255,0.22))] px-6 text-sm font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:border-amber-100/60 hover:bg-[linear-gradient(135deg,rgba(255,233,173,0.34),rgba(149,110,255,0.3))]"
                    >
                      Join the Waitlist
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <ScrollReveal className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <SectionIntro
            eyebrow="Store overview"
            title="A premium collection page designed around the product itself."
            body="This page introduces the NFC AeroTarot collection as an object people can want, understand, and eventually purchase. The emphasis is on the cards, how they work, and why they feel special."
          />
          <div className="space-y-8">
            {storeDetails.map((detail, index) => (
              <ScrollReveal
                key={detail}
                delay={index * 80}
                className="flex items-start gap-4 border-t border-white/10 pt-5 text-base leading-7 text-white/62"
              >
                <span className="mt-3 h-1.5 w-1.5 rounded-full bg-amber-100/70" />
                <p>{detail}</p>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <ScrollReveal className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <SectionIntro
            eyebrow="What&apos;s included"
            title="More than a tarot object. More than a digital collectible."
            body="The AeroTarot NFC collection is meant to sit between beautiful product design and connected interaction, giving each card both physical and digital value."
          />
          <div className="space-y-8">
            {included.map((item, index) => (
              <ScrollReveal
                key={item.title}
                delay={index * 80}
                className="border-t border-white/10 pt-5 sm:pt-6"
              >
                <h3 className="text-xl font-medium text-white sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/62 sm:text-base">
                  {item.body}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <ScrollReveal className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01))] px-6 py-10 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.42em] text-white/50">
                How NFC works
              </p>
              <h2
                className={`${displayFontClass} mt-4 max-w-xl text-4xl leading-tight font-medium tracking-[-0.03em] text-white sm:text-5xl`}
              >
                Tap the physical card and unlock its digital layer.
              </h2>
            </div>
            <div className="space-y-8">
              {nfcFlow.map((item, index) => (
                <ScrollReveal
                  key={item.step}
                  delay={index * 90}
                  className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
                >
                  <p className="text-sm uppercase tracking-[0.28em] text-amber-100/55">
                    {item.step}
                  </p>
                  <div className="max-w-xl">
                    <h3 className="text-xl text-white sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/62 sm:text-base">
                      {item.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <ScrollReveal>
          <WaitlistCard source="deck-page" />
        </ScrollReveal>
      </section>
    </MarketingPage>
  );
}

function StatusPill({
  label,
  active,
}: {
  label: string;
  active: boolean;
}) {
  return (
    <span
      className={`rounded-full border px-3 py-2 text-[0.68rem] uppercase tracking-[0.2em] transition ${
        active
          ? "border-amber-100/30 bg-amber-100/10 text-amber-100/80"
          : "border-white/10 text-white/36"
      }`}
    >
      {label}
    </span>
  );
}
