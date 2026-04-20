import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getStripe } from "../../../lib/stripe";

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 10;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const quantityValue = Number(formData.get("quantity") ?? MIN_QUANTITY);
    const quantity = Number.isFinite(quantityValue)
      ? Math.min(MAX_QUANTITY, Math.max(MIN_QUANTITY, Math.floor(quantityValue)))
      : MIN_QUANTITY;

    if (!process.env.STRIPE_NFC_COLLECTION_PRICE_ID) {
      return NextResponse.json(
        {
          error:
            "Stripe checkout is not configured yet. Add STRIPE_NFC_COLLECTION_PRICE_ID to enable purchases.",
        },
        { status: 500 },
      );
    }

    const stripe = getStripe();
    const origin = request.nextUrl.origin;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: process.env.STRIPE_NFC_COLLECTION_PRICE_ID,
          quantity,
        },
      ],
      billing_address_collection: "auto",
      allow_promotion_codes: true,
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe did not return a checkout URL." },
        { status: 500 },
      );
    }

    return NextResponse.redirect(session.url, { status: 303 });
  } catch (error) {
    console.error("Stripe checkout session error", error);

    return NextResponse.json(
      {
        error:
          "Unable to create Stripe checkout session. Confirm your Stripe keys and product price ID are configured.",
      },
      { status: 500 },
    );
  }
}
