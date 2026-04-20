import Link from "next/link";
import {
  MarketingPage,
  displayFontClass,
} from "../../_components/marketing";

export default function CheckoutSuccessPage() {
  return (
    <MarketingPage current="deck">
      <section className="px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] px-6 py-10 text-center shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:px-10">
          <p className="text-[0.68rem] uppercase tracking-[0.42em] text-amber-100/60">
            Checkout complete
          </p>
          <h1
            className={`${displayFontClass} mt-6 text-4xl leading-tight font-medium tracking-[-0.03em] text-white sm:text-5xl`}
          >
            Your AeroTarot order has been placed.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65">
            Stripe has confirmed your purchase. This page can be expanded later
            with order details, fulfillment steps, and account onboarding.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/deck"
              className="rounded-full border border-white/12 px-5 py-3 text-sm text-white/85 transition hover:border-white/25 hover:text-white"
            >
              Back to Deck
            </Link>
            <Link
              href="/"
              className="rounded-full border border-amber-200/30 bg-[linear-gradient(135deg,rgba(255,231,173,0.24),rgba(124,92,255,0.22))] px-5 py-3 text-sm uppercase tracking-[0.16em] text-white transition hover:border-amber-100/55"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
