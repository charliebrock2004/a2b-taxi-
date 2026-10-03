# A2B Private Hire, Crieff — website redesign concept

Next.js 16 (App Router) + TypeScript. No CSS framework, no database, no third-party scripts.
This is an independent concept for presentation. It is not connected to a2bcrieff.co.uk.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build
```

## Where things live

| Path | What it is |
| --- | --- |
| `lib/site.ts` | Business facts: phone, email, areas, testimonials. One place to change them. |
| `lib/services.ts` | All service page copy. Each page is generated from this data. |
| `app/` | One folder per page. `app/services/[slug]` builds all seven service pages. |
| `components/` | Header, footer, call button, photo slot, area map, enquiry form. |
| `app/globals.css` | The whole design system: colour tokens at the top, then components. |
| `app/api/enquiry/route.ts` | The enquiry form's server side. The integration point. |
| `IMAGES.md` | Photos in use, where each appears, rights to check, and the empty slots. |

Why it is built this way: the content is data and the pages are templates. Changing the phone
number or adding a service is a one-file edit, and a fact can't be right on one page and wrong on
another.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. In Vercel: Add New > Project > import the repository. The defaults are correct.
3. Add environment variables (Settings > Environment Variables). See `.env.example`.
   - `NEXT_PUBLIC_SITE_URL` — the deployment's address, e.g. `https://a2b-concept.vercel.app`.
   - Leave `SITE_LIVE` unset.
4. Deploy. Do not attach the a2bcrieff.co.uk domain; that is the owner's decision.

While `SITE_LIVE` is not `true` the site sends `noindex`, `robots.txt` blocks all crawlers and a
small concept notice shows at the foot of each page. That is deliberate: a public copy of a real
business's site must not appear in Google beside the real one. Once the owner has approved it and
it is going onto their domain, set `SITE_LIVE=true` and `NEXT_PUBLIC_SITE_URL=https://a2bcrieff.co.uk`.

## Enquiry form

The form validates in the browser and again on the server, using the same rules (`lib/enquiry.ts`).
Spam protection is a hidden honeypot field plus a minimum time-to-submit; no CAPTCHA, no cookies.

It does not send anywhere until three variables are set: `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`,
`ENQUIRY_FROM_EMAIL` (a sender on a domain verified in Resend). Without them the page says so up
front, and a submission returns "Your request was not sent" with the phone number. It never shows
success unless the email provider accepted the message. To use another provider, replace the
`deliver()` function in `app/api/enquiry/route.ts`.

If spam becomes a problem after launch, add Cloudflare Turnstile and rate limiting; both need
accounts, so they are not included.

## Needs confirming with the owner before launch

1. **Logo and brand files.** The wordmark here is typeset, not the supplied A2B branding.
2. **Photography.** Twelve photos from the current site are in use (see `IMAGES.md`). The two vehicle
   photos are A2B's own; the other ten look like stock or third-party images and need a licence check.
   Most are 300×200 px, so larger originals would let them be shown bigger. One photo is still to come.
3. **Enquiry email address.** The public contact address is agbrown1@hotmail.co.uk (set once in `lib/site.ts`).
   Use the same address for `ENQUIRY_TO_EMAIL` if form submissions should go there.
4. **Prices.** The current site says trips from Edinburgh or Glasgow "start around £90" (written
   in 2022). Left out. The site says only that a fixed price is quoted.
5. **Hours.** Not stated anywhere on the current site. Not stated here; no "24/7" claim.
6. **Fleet and capacity.** The current site shows a car and a minibus but gives no makes, seat
   numbers or accessibility details. None are claimed here.
7. **Thin services.** Weddings, golf, ports and hospital transfers are each only a heading or a
   customer's mention on the current site. The copy here is kept general; the owner should check
   it describes what they actually offer. Port transfers has no page of its own for this reason.
8. **"Perth Airport transfers"** was on the keyword list. Perth Airport has no scheduled passenger
   flights, so the site does not target it. Edinburgh and Glasgow are named, as on the current site.
9. **Covid statement.** The current FAQ describes pandemic cleaning measures. Left out as dated.
10. **Driver's name.** "Graham" appears only inside a customer's quote. Not used elsewhere.
11. **Spellings corrected:** "St Fillians" to St Fillans, "Whiskey" to whisky.
12. **Crieff Hydro.** The current site has a Crieff Hydro page. It is kept as a section on the
    airport transfers page, with a redirect from the old address. Confirm no affiliation is implied.
13. **Privacy notice.** Describes what this site does. The owner should add their business
    details and check it against how they handle enquiries.
14. **Testimonials.** Reproduced word for word from the current site. Confirm they may be reused.
