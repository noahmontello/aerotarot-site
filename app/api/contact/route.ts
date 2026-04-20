import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { captureContactLead } from "../../../lib/lead-capture";
import { saveContactSubmission } from "../../../lib/submissions";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const inquiryType = String(formData.get("inquiryType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const source = String(formData.get("source") ?? "contact-page").trim();
  const submittedAt = new Date().toISOString();

  if (!name || !email || !message) {
    return NextResponse.redirect(
      new URL("/contact?error=missing-fields", request.url),
      { status: 303 },
    );
  }

  const results = await Promise.allSettled([
    saveContactSubmission({
      submittedAt,
      source,
      name,
      email,
      inquiryType,
      message,
    }),
    captureContactLead({
      submittedAt,
      source,
      name,
      email,
      inquiryType,
      message,
    }),
  ]);

  if (results.every((result) => result.status === "rejected")) {
    console.error("Contact capture failed", results);
    return NextResponse.redirect(new URL("/contact?error=submit-failed", request.url), {
      status: 303,
    });
  }

  return NextResponse.redirect(new URL("/contact?submitted=1", request.url), {
    status: 303,
  });
}
