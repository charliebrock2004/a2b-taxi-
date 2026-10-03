# Photographs

Photos live in `public/images/` as JPEG (`.jpg` or `.jpeg`). The site serves them through
`next/image`, which resizes them per screen, converts them to AVIF/WebP and lazy-loads anything
below the fold. A slot with no file shows the charcoal contour texture, or nothing at all.

## In use

These came from the existing a2bcrieff.co.uk site. Most are only 300×200 px, so they are shown as
framed photographs no wider than the file itself (never stretched into full-width backgrounds).
Larger originals of any of them can replace the file of the same name; nothing else needs to change.

| File | Size | Where it appears | Rights |
| --- | --- | --- | --- |
| `a2b-taxi-vehicle.jpeg` | 480×360 | Homepage hero ("The A2B Skoda") | A2B's own vehicle. Confirm A2B took or owns the photo. |
| `a2b-taxi-minibus.jpeg` | 800×519 | Homepage, Why choose A2B ("The A2B minibus") | A2B's own vehicle. Confirm A2B took or owns the photo. |
| `local-scenic-transfers.jpeg` | 300×200 | Local private hire page; service lists | Looks like stock. Needs licence check. |
| `airport-transfers-departures.jpeg` | 300×200 | Airport transfers page; service lists | Looks like stock. Needs licence check. |
| `railway-transfers-gleneagles.jpeg` | 300×200 | Railway station transfers page; service lists | Photo of Gleneagles station. Source unknown; needs check. |
| `wedding-transfers.jpeg` | 300×200 | Wedding transport page; service lists | Looks like stock. Needs licence check. |
| `perth-royal-infirmary.jpeg` | 300×200 | Hospital transfers page; service lists | Photo of NHS Tayside building. Source unknown; needs check. |
| `hospital-appointments.jpeg` | 300×200 | Hospital transfers page, below the copy | Looks like stock. Needs licence check. |
| `castle-and-heritage-trips.jpeg` | 300×200 | Day trips page ("Local history"); service lists | Looks like stock. Needs licence check. |
| `whisky-tasting-transfers.jpeg` | 300×200 | Day trips page, below the copy | Looks like stock. Needs licence check. |
| `fine-dining-transfers.jpeg` | 300×200 | Day trips page, below the copy | Looks like stock. Needs licence check. |
| `day-at-the-races.jpeg` | 300×200 | Day trips page, below the copy | Looks like stock. Needs licence check. |

Which photo belongs to which service is set in `lib/services.ts` (`image`, `photo`, `gallery`).

## Empty slots

Golf trips and port transfers have no photo yet (their thumbnails show the contour texture).
These full-width background slots are also empty and need large images, at least 2000 px wide:

| File | Where it appears |
| --- | --- |
| `hero.jpg` | Homepage hero background (2400 px) |
| `hero-<service-slug>.jpg` | Background of that service page, e.g. `hero-airport-transfers.jpg` |
| `services.jpg`, `areas.jpg`, `about.jpg`, `contact.jpg`, `privacy.jpg` | Background of those pages |
| `about-detail.jpg` | About page, beside the introduction (1400 px) |

Dark, low-saturation images suit the design; text sits over the backgrounds, so keep the lower-left
third of each uncluttered.

Rules that matter for this client:

- Only use images you hold a licence for, and keep a note of where each one came from. Being on
  the old website does not mean A2B holds a licence that covers reuse on a new site.
- If you use stock pictures of cars, pick ones where the make and badge are not identifiable, so
  the site never implies A2B owns a car it does not.
