// Validation shared by the browser form and the server route, so the rules cannot drift apart.
// The browser check is for fast feedback; the server check is the one that counts.

export type Enquiry = {
  name: string;
  phone: string;
  email: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: string;
  returnJourney: boolean;
  returnDetails: string;
  notes: string;
};

export const emptyEnquiry: Enquiry = {
  name: "", phone: "", email: "", pickup: "", destination: "", date: "", time: "",
  passengers: "", returnJourney: false, returnDetails: "", notes: "",
};

export type Errors = Partial<Record<keyof Enquiry, string>>;

export function validateEnquiry(e: Enquiry, today = new Date().toISOString().slice(0, 10)): Errors {
  const errors: Errors = {};
  const s = (v: unknown) => (typeof v === "string" ? v.trim() : "");

  if (s(e.name).length < 2) errors.name = "Enter your full name.";
  const digits = s(e.phone).replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15 || !/^[\d\s+()-]+$/.test(s(e.phone)))
    errors.phone = "Enter a telephone number we can reach you on, for example 07700 900123.";
  if (s(e.email) && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s(e.email)))
    errors.email = "Enter an email address like name@example.com, or leave this blank.";
  if (s(e.pickup).length < 3) errors.pickup = "Enter where you would like to be picked up.";
  if (s(e.destination).length < 3) errors.destination = "Enter where you are travelling to.";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s(e.date))) errors.date = "Choose the date of your journey.";
  else if (s(e.date) < today) errors.date = "Choose a date that is today or later.";
  if (!/^\d{2}:\d{2}$/.test(s(e.time))) errors.time = "Choose a pick-up time.";
  const n = Number(s(e.passengers));
  if (!Number.isInteger(n) || n < 1 || n > 99) errors.passengers = "Enter how many passengers are travelling.";
  if (s(e.returnDetails).length > 300) errors.returnDetails = "Keep the return details under 300 characters.";
  if (s(e.notes).length > 2000) errors.notes = "Keep additional information under 2,000 characters.";
  for (const k of ["name", "pickup", "destination"] as const)
    if (s(e[k]).length > 200) errors[k] = "This is too long. Keep it under 200 characters.";
  return errors;
}
