# Google Sheets Lead Capture

Use this if you want waitlist and contact form submissions to land in a Google Sheet.

## 1. Create the sheet

Create a Google Sheet with two tabs:

- `waitlist`
- `contact`

Use these headers:

### `waitlist`

`submittedAt | source | email`

### `contact`

`submittedAt | source | name | email | inquiryType | message`

## 2. Add the Apps Script

In the Google Sheet:

1. Open `Extensions` -> `Apps Script`
2. Replace the script contents with this:

```javascript
const SECRET = "replace-with-your-shared-secret";

function doPost(e) {
  try {
    const headerSecret =
      e?.postData?.type === "application/json"
        ? e.parameter.secret || ""
        : "";
    const request = JSON.parse(e.postData.contents || "{}");
    const incomingSecret =
      e?.parameter?.secret ||
      request.secret ||
      (e?.headers && e.headers["x-aerotarot-secret"]) ||
      "";

    if (SECRET && incomingSecret !== SECRET) {
      return jsonResponse({ ok: false, error: "unauthorized" }, 401);
    }

    const sheetName = request.sheet;
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(sheetName);

    if (!sheet) {
      return jsonResponse({ ok: false, error: "missing-sheet" }, 404);
    }

    if (sheetName === "waitlist") {
      sheet.appendRow([
        request.submittedAt || "",
        request.source || "",
        request.email || "",
      ]);
    } else if (sheetName === "contact") {
      sheet.appendRow([
        request.submittedAt || "",
        request.source || "",
        request.name || "",
        request.email || "",
        request.inquiryType || "",
        request.message || "",
      ]);
    } else {
      return jsonResponse({ ok: false, error: "invalid-sheet" }, 400);
    }

    return jsonResponse({ ok: true }, 200);
  } catch (error) {
    return jsonResponse(
      { ok: false, error: String(error && error.message ? error.message : error) },
      500,
    );
  }
}

function jsonResponse(payload, status) {
  return ContentService.createTextOutput(
    JSON.stringify({ status, ...payload }),
  ).setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Deploy the script

1. Click `Deploy`
2. Choose `New deployment`
3. Select `Web app`
4. Set:
   - Execute as: `Me`
   - Who has access: `Anyone`
5. Copy the web app URL

## 4. Add your local env vars

In `.env.local`:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/your-web-app-id/exec
GOOGLE_SHEETS_WEBHOOK_SECRET=replace-with-your-shared-secret
```

## 5. Restart the dev server

Restart `npm run dev` after adding the env vars.

The site will then:

- save a local backup in `data/waitlist.ndjson` or `data/contact.ndjson`
- send the same submission to Google Sheets
- also mirror into Stripe customers if `STRIPE_SECRET_KEY` is configured
