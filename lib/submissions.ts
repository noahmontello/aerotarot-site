import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

type SubmissionRecord = {
  submittedAt: string;
  source: string;
} & Record<string, string>;

async function appendSubmission(
  filename: string,
  payload: SubmissionRecord,
) {
  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, filename);

  await mkdir(dataDir, { recursive: true });
  await appendFile(filePath, `${JSON.stringify(payload)}\n`, "utf8");
}

export async function saveWaitlistSubmission(payload: SubmissionRecord) {
  await appendSubmission("waitlist.ndjson", payload);
}

export async function saveContactSubmission(payload: SubmissionRecord) {
  await appendSubmission("contact.ndjson", payload);
}
