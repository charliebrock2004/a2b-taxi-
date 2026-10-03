// Server-only: whether the enquiry form has somewhere to send to.
export function enquiryConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL;
  return apiKey && to && from ? { apiKey, to, from } : null;
}
