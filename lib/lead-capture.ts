import { getStripe } from "./stripe";

function trimMetadataValue(value: string, maxLength = 400) {
  return value.trim().slice(0, maxLength);
}

async function findCustomerByEmail(email: string) {
  const stripe = getStripe();
  const customers = await stripe.customers.list({
    email,
    limit: 1,
  });

  return customers.data[0] ?? null;
}

export async function captureWaitlistLead({
  email,
  source,
  submittedAt,
}: {
  email: string;
  source: string;
  submittedAt: string;
}) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return null;
  }

  const stripe = getStripe();
  const existingCustomer = await findCustomerByEmail(email);
  const metadata = {
    aerotarot_waitlist: "true",
    aerotarot_latest_source: trimMetadataValue(source, 100),
    aerotarot_latest_submitted_at: trimMetadataValue(submittedAt, 100),
  };

  if (existingCustomer) {
    return stripe.customers.update(existingCustomer.id, {
      metadata: {
        ...existingCustomer.metadata,
        ...metadata,
      },
    });
  }

  return stripe.customers.create({
    email,
    description: "AeroTarot waitlist signup",
    metadata,
  });
}

export async function captureContactLead({
  name,
  email,
  inquiryType,
  message,
  source,
  submittedAt,
}: {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
  source: string;
  submittedAt: string;
}) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return null;
  }

  const stripe = getStripe();
  const existingCustomer = await findCustomerByEmail(email);
  const metadata = {
    aerotarot_contact: "true",
    aerotarot_latest_source: trimMetadataValue(source, 100),
    aerotarot_inquiry_type: trimMetadataValue(inquiryType || "general", 100),
    aerotarot_latest_submitted_at: trimMetadataValue(submittedAt, 100),
    aerotarot_message_excerpt: trimMetadataValue(message),
  };

  if (existingCustomer) {
    return stripe.customers.update(existingCustomer.id, {
      name: name || existingCustomer.name || undefined,
      description: "AeroTarot contact form lead",
      metadata: {
        ...existingCustomer.metadata,
        ...metadata,
      },
    });
  }

  return stripe.customers.create({
    name,
    email,
    description: "AeroTarot contact form lead",
    metadata,
  });
}
