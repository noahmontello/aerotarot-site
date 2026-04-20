import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { captureWaitlistInGoogleSheets } from "../../../lib/google-sheets";
import { captureWaitlistLead } from "../../../lib/lead-capture";
import { saveWaitlistSubmission } from "../../../lib/submissions";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim();
  const source = String(formData.get("source") ?? "website").trim();
  const submittedAt = new Date().toISOString();

  if (!email) {
    return NextResponse.redirect(
      new URL("/waitlist?error=missing-email", request.url),
      { status: 303 },
    );
  }

  const results = await Promise.allSettled([
    saveWaitlistSubmission({
      submittedAt,
      source,
      email,
    }),
    captureWaitlistInGoogleSheets({
      submittedAt,
      source,
      email,
    }),
    captureWaitlistLead({
      submittedAt,
      source,
      email,
    }),
  ]);

  if (results.every((result) => result.status === "rejected")) {
    console.error("Waitlist capture failed", results);
    return NextResponse.redirect(new URL("/waitlist?error=submit-failed", request.url), {
      status: 303,
    });
  }

  return NextResponse.redirect(new URL("/waitlist?submitted=1", request.url), {
    status: 303,
  });
}
