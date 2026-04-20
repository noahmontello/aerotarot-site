import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { saveContactSubmission } from "../../../lib/submissions";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const inquiryType = String(formData.get("inquiryType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const source = String(formData.get("source") ?? "contact-page").trim();

  if (!name || !email || !message) {
    return NextResponse.redirect(
      new URL("/contact?error=missing-fields", request.url),
      { status: 303 },
    );
  }

  await saveContactSubmission({
    submittedAt: new Date().toISOString(),
    source,
    name,
    email,
    inquiryType,
    message,
  });

  return NextResponse.redirect(new URL("/contact?submitted=1", request.url), {
    status: 303,
  });
}
