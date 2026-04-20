import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { saveWaitlistSubmission } from "../../../lib/submissions";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim();
  const source = String(formData.get("source") ?? "website").trim();

  if (!email) {
    return NextResponse.redirect(
      new URL("/waitlist?error=missing-email", request.url),
      { status: 303 },
    );
  }

  await saveWaitlistSubmission({
    submittedAt: new Date().toISOString(),
    source,
    email,
  });

  return NextResponse.redirect(new URL("/waitlist?submitted=1", request.url), {
    status: 303,
  });
}
