"use client";

import { useSearchParams } from "next/navigation";

export function WaitlistFeedback() {
  const searchParams = useSearchParams();
  const submitted = searchParams.get("submitted") === "1";
  const error = searchParams.get("error");

  if (!submitted && !error) {
    return null;
  }

  if (submitted) {
    return (
      <div className="mx-auto mt-8 max-w-2xl rounded-[1.5rem] border border-emerald-200/18 bg-emerald-100/6 px-5 py-4 text-left text-sm leading-7 text-emerald-100/78">
        Your waitlist request was received. You&apos;re on the list for early
        launch updates.
      </div>
    );
  }

  if (error === "missing-email") {
    return (
      <div className="mx-auto mt-8 max-w-2xl rounded-[1.5rem] border border-amber-200/18 bg-amber-100/6 px-5 py-4 text-left text-sm leading-7 text-amber-100/78">
        Please enter an email address so we can add you to the waitlist.
      </div>
    );
  }

  return (
    <div className="mx-auto mt-8 max-w-2xl rounded-[1.5rem] border border-rose-200/18 bg-rose-100/6 px-5 py-4 text-left text-sm leading-7 text-rose-100/78">
      The waitlist submission did not go through. Please try again in a moment.
    </div>
  );
}

export function ContactFeedback() {
  const searchParams = useSearchParams();
  const submitted = searchParams.get("submitted") === "1";
  const error = searchParams.get("error");

  if (!submitted && !error) {
    return null;
  }

  if (submitted) {
    return (
      <div className="rounded-[1.5rem] border border-emerald-200/18 bg-emerald-100/6 px-5 py-4 text-sm leading-7 text-emerald-100/78">
        Your message was received. AeroTarot now has your contact details and
        note saved from the website.
      </div>
    );
  }

  if (error === "missing-fields") {
    return (
      <div className="rounded-[1.5rem] border border-amber-200/18 bg-amber-100/6 px-5 py-4 text-sm leading-7 text-amber-100/78">
        Please fill in your name, email, and message before sending the form.
      </div>
    );
  }

  return (
    <div className="rounded-[1.5rem] border border-rose-200/18 bg-rose-100/6 px-5 py-4 text-sm leading-7 text-rose-100/78">
      The contact form submission did not go through. Please try again in a moment.
    </div>
  );
}
