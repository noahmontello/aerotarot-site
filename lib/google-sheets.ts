type LeadPayload = {
  source: string;
  submittedAt: string;
} & Record<string, string>;

async function postToGoogleSheets(
  sheet: "waitlist" | "contact",
  payload: LeadPayload,
) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return null;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.GOOGLE_SHEETS_WEBHOOK_SECRET
        ? { "x-aerotarot-secret": process.env.GOOGLE_SHEETS_WEBHOOK_SECRET }
        : {}),
    },
    body: JSON.stringify({
      sheet,
      secret: process.env.GOOGLE_SHEETS_WEBHOOK_SECRET ?? "",
      ...payload,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Google Sheets webhook failed with ${response.status}`);
  }

  return response.text();
}

export async function captureWaitlistInGoogleSheets(payload: LeadPayload) {
  return postToGoogleSheets("waitlist", payload);
}

export async function captureContactInGoogleSheets(payload: LeadPayload) {
  return postToGoogleSheets("contact", payload);
}
