import { NextResponse } from "next/server";
import { enquiryConfig } from "@/lib/enquiry-config";
import { emptyEnquiry, validateEnquiry, type Enquiry } from "@/lib/enquiry";

// INTEGRATION POINT — enquiry delivery.
// This route emails the enquiry to the business through Resend (https://resend.com).
// It needs three environment variables: RESEND_API_KEY, ENQUIRY_TO_EMAIL, ENQUIRY_FROM_EMAIL.
// Until they are set it answers 503 "not_configured" and the form tells the visitor to phone.
// It never reports success unless Resend has accepted the message.
// To use a different provider, replace only the deliver() function below.

async function deliver(e: Enquiry, cfg: { apiKey: string; to: string; from: string }) {
  const lines = [
    `Name: ${e.name}`,
    `Telephone: ${e.phone}`,
    `Email: ${e.email || "not given"}`,
    `Pick-up: ${e.pickup}`,
    `Destination: ${e.destination}`,
    `Date: ${e.date}`,
    `Pick-up time: ${e.time}`,
    `Passengers: ${e.passengers}`,
    `Return journey: ${e.returnJourney ? `Yes${e.returnDetails ? ` — ${e.returnDetails}` : ""}` : "No"}`,
    "",
    "Additional information:",
    e.notes || "None",
  ];
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${cfg.apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: cfg.from,
      to: [cfg.to],
      subject: `Journey enquiry: ${e.pickup} to ${e.destination}, ${e.date}`,
      text: lines.join("\n"),
      ...(e.email ? { reply_to: e.email } : {}),
    }),
  });
  return res.ok;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ code: "bad_request" }, { status: 400 });
  }

  // Spam protection 1: a hidden field people never see. Anything that fills it in is a bot,
  // which gets a quiet "ok" so it has no reason to try again.
  if (typeof body.website === "string" && body.website !== "") return NextResponse.json({ code: "ok" });
  // Spam protection 2: nobody completes ten fields in under three seconds.
  if (typeof body.elapsed !== "number" || body.elapsed < 3000) return NextResponse.json({ code: "too_fast" }, { status: 400 });

  const enquiry: Enquiry = { ...emptyEnquiry };
  for (const key of Object.keys(emptyEnquiry) as (keyof Enquiry)[]) {
    const v = body[key];
    if (key === "returnJourney") enquiry.returnJourney = v === true;
    else if (typeof v === "string") enquiry[key] = v.trim().slice(0, 2100);
  }

  const errors = validateEnquiry(enquiry);
  if (Object.keys(errors).length) return NextResponse.json({ code: "invalid", errors }, { status: 422 });

  const cfg = enquiryConfig();
  if (!cfg) return NextResponse.json({ code: "not_configured" }, { status: 503 });

  try {
    if (await deliver(enquiry, cfg)) return NextResponse.json({ code: "ok" });
  } catch {
    // fall through to the failure response
  }
  return NextResponse.json({ code: "send_failed" }, { status: 502 });
}
