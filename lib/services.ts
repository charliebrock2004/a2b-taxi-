// Service copy. Sourced from the existing A2B website; nothing here states a price,
// a vehicle make, opening hours or a qualification the business has not published itself.

import type { InsetPhoto } from "@/components/Photo";

export type Service = {
  slug: string;
  name: string;
  /** Photo file in public/images (without extension), shown in the page hero and service lists. */
  image: string;
  photo?: InsetPhoto;
  /** Further photographs shown beneath the page copy. */
  gallery?: InsetPhoto[];
  card: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  sections: { heading: string; body: string[]; id?: string }[];
  booking: string[];
  faqs?: { q: string; a: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "local-private-hire",
    name: "Local private hire",
    image: "local-scenic-transfers",
    photo: { name: "local-scenic-transfers", alt: "A quiet road winding through wooded Perthshire countryside" },
    card: "Everyday journeys around Crieff and the surrounding area.",
    metaTitle: "Crieff Taxi & Local Private Hire",
    metaDescription:
      "Local private hire in Crieff and across Strathearn. Council-approved drivers, card and contactless payment. Call A2B Private Hire on 07708 010432.",
    headline: "Local journeys around Crieff",
    intro:
      "Popping out for the shopping, heading to an appointment or getting home after an evening out. A2B is Crieff's local private hire firm, and short journeys are as welcome as long ones.",
    sections: [
      {
        heading: "A local firm that knows the roads",
        body: [
          "A2B has been taking people from place to place in Perthshire for many years. It is our patch and we know it very well.",
          "Our drivers are all approved by the local council, and every vehicle carries up-to-date satellite navigation for the journeys that go further afield.",
        ],
      },
      {
        heading: "Pay the way that suits you",
        body: ["We accept payment by card, including contactless, in the vehicle."],
      },
      {
        heading: "Across Strathearn and Perthshire",
        body: [
          "Regular journeys run between Crieff and Perth, Stirling, Auchterarder, Braco, Comrie, St Fillans, Blackford and Dunblane. If your destination is not on that list, call and ask.",
        ],
      },
    ],
    booking: [
      "Call 07708 010432 and tell us where you are and where you need to be.",
      "Private hire journeys are booked in advance, so a little notice helps us be there on time.",
      "Pay by card or contactless when you arrive.",
    ],
    related: ["hospital-transfers", "railway-station-transfers", "airport-transfers"],
  },
  {
    slug: "airport-transfers",
    name: "Airport transfers",
    image: "airport-transfers-departures",
    photo: { name: "airport-transfers-departures", alt: "An airport departures board listing Dublin, Glasgow and London" },
    card: "Transfers to and from Scotland's airports, with advance bookings encouraged.",
    metaTitle: "Crieff Airport Transfers to Edinburgh & Glasgow",
    metaDescription:
      "Airport transfers from Crieff and Perthshire to Edinburgh, Glasgow and Scotland's other airports. Fixed price quoted when you book. Call A2B on 07708 010432.",
    headline: "Airport transfers from Crieff and Perthshire",
    intro:
      "Whether you need to be at Glasgow Airport at 6am or you are landing in Edinburgh late in the evening, A2B will take you door to door.",
    sections: [
      {
        heading: "Edinburgh, Glasgow and Scotland's other airports",
        body: [
          "Edinburgh and Glasgow airports are each about 70 to 90 minutes from Crieff. Journey times vary with the route and the time of day, so check with us when you book.",
          "We only charge from the point of pick-up, and we are happy to give you a fixed price before you travel.",
        ],
      },
      {
        heading: "Met at arrivals",
        body: [
          "Tell us which flight you are arriving on. Knowing your flight means we can be at arrivals when you are.",
        ],
      },
      {
        heading: "Luggage and group size",
        body: [
          "There is plenty of room in the vehicles for luggage. If you are bringing anything especially bulky, let us know when you book.",
          "Travelling with friends or colleagues? Tell us how many of you there are in advance and we will arrange transport to suit.",
        ],
      },
      {
        id: "crieff-hydro",
        heading: "Staying at Crieff Hydro?",
        body: [
          "Many of our airport and station journeys start or finish at Crieff Hydro. We can collect you from Edinburgh Airport, Edinburgh Waverley, Glasgow Airport or the stations in between and bring you straight to the door.",
        ],
      },
    ],
    booking: [
      "Call 07708 010432 with your travel date, flight time and pick-up address.",
      "We confirm a fixed price for the journey.",
      "Book as far ahead as you can. Advance booking is how we make sure a driver is set aside for you.",
    ],
    faqs: [
      {
        q: "How long does the journey take?",
        a: "Edinburgh and Glasgow airports are about 70 to 90 minutes from Crieff. Please check with us for your particular route.",
      },
      {
        q: "How is the fare worked out?",
        a: "We only charge from pick-up and are happy to give you a fixed price. Call for a quote for your journey.",
      },
      {
        q: "Do I need to book in advance?",
        a: "Yes please. If we know which train or plane you are arriving on, we can be sure to be there at arrivals for you.",
      },
      {
        q: "What about luggage?",
        a: "There is plenty of room in the vehicles. If you are bringing anything especially bulky, please let us know.",
      },
      {
        q: "How many passengers can you take?",
        a: "Tell us how many are travelling when you book. As long as we know in advance, we can bring you and your friends or colleagues.",
      },
    ],
    related: ["railway-station-transfers", "golf-trips", "local-private-hire"],
  },
  {
    slug: "railway-station-transfers",
    name: "Railway station transfers",
    image: "railway-transfers-gleneagles",
    photo: { name: "railway-transfers-gleneagles", alt: "A train arriving at Gleneagles railway station", caption: "Gleneagles station" },
    card: "Convenient transfers to railway stations throughout Scotland.",
    metaTitle: "Railway Station Transfers from Crieff",
    metaDescription:
      "Station transfers from Crieff and Perthshire to Edinburgh Waverley and railway stations across Scotland. Call A2B Private Hire on 07708 010432.",
    headline: "Railway station transfers",
    intro:
      "Crieff has no railway station of its own, so the first and last leg of a train journey is by road. A2B makes that part simple.",
    sections: [
      {
        heading: "Stations across Scotland",
        body: [
          "We run transfers to and from Edinburgh Waverley, Glasgow and the stations in between, as well as railway stations elsewhere in Scotland.",
          "Edinburgh and Glasgow stations are about 70 to 90 minutes from Crieff. Ask us about your particular route.",
        ],
      },
      {
        heading: "Met from your train",
        body: [
          "Tell us which train you are arriving on and we will be there to meet it. There is plenty of room for luggage; just mention anything bulky.",
        ],
      },
    ],
    booking: [
      "Call 07708 010432 with your station, train time and where you are travelling to or from.",
      "We give you a fixed price, charged from the point of pick-up.",
      "Book ahead so we can meet your train.",
    ],
    related: ["airport-transfers", "local-private-hire", "day-trips-and-events"],
  },
  {
    slug: "wedding-transport",
    name: "Wedding transport",
    image: "wedding-transfers",
    photo: { name: "wedding-transfers", alt: "A bride and groom holding hands beside the wedding bouquet" },
    card: "Reliable transport for weddings and special occasions.",
    metaTitle: "Wedding Transport in Crieff & Perthshire",
    metaDescription:
      "Wedding transfers in Crieff and across Perthshire for couples and guests. Talk through your day with A2B Private Hire on 07708 010432.",
    headline: "Wedding transport in Perthshire",
    intro:
      "On a wedding day, timing matters more than anything. A2B provides wedding transfers in Crieff and across Perthshire, so the people who need to be there arrive when they should.",
    sections: [
      {
        heading: "Transfers for the day",
        body: [
          "Tell us the venues, the timings and who needs to be where. We will plan the journeys around your day.",
          "Guests coming from further away can be collected from airports and railway stations too.",
        ],
      },
      {
        heading: "Hen nights and stag dos",
        body: [
          "Customers also book A2B for the celebrations either side of the wedding. Let us know the numbers and the plan when you call.",
        ],
      },
    ],
    booking: [
      "Call 07708 010432 as early as you can.",
      "Have the date, venues, timings and number of passengers to hand.",
      "We confirm the arrangements and a price with you directly.",
    ],
    related: ["day-trips-and-events", "airport-transfers", "local-private-hire"],
  },
  {
    slug: "hospital-transfers",
    name: "Hospital transfers",
    image: "perth-royal-infirmary",
    photo: { name: "perth-royal-infirmary", alt: "The main entrance of Perth Royal Infirmary", caption: "Perth Royal Infirmary" },
    gallery: [
      { name: "hospital-appointments", alt: "A nurse going through appointment details with an older patient", caption: "Medical appointments" },
    ],
    card: "Transport to hospital appointments and medical visits.",
    metaTitle: "Hospital & Appointment Transfers from Crieff",
    metaDescription:
      "Private hire from Crieff and Strathearn to hospital and medical appointments, with a booked return. Call A2B Private Hire on 07708 010432.",
    headline: "Hospital and appointment transfers",
    intro:
      "Getting to an appointment should be the easy part. A2B takes people from Crieff and the surrounding villages to hospital appointments and medical visits, and brings them home again.",
    sections: [
      {
        heading: "There on time, and home afterwards",
        body: [
          "Tell us the time of your appointment and we will work back from it. If you would like a return journey, arrange it when you book.",
        ],
      },
      {
        heading: "Tell us what you need",
        body: [
          "If you have a mobility aid, or need a little more time getting in and out of the vehicle, mention it when you call so we can advise on the right arrangements.",
        ],
      },
    ],
    booking: [
      "Call 07708 010432 with the hospital or clinic, the appointment time and your pick-up address.",
      "Let us know if you need a return journey.",
      "Pay by card or contactless.",
    ],
    related: ["local-private-hire", "railway-station-transfers", "airport-transfers"],
  },
  {
    slug: "day-trips-and-events",
    name: "Day trips and events",
    image: "castle-and-heritage-trips",
    photo: { name: "castle-and-heritage-trips", alt: "A Scottish castle above a harvested field", caption: "Local history" },
    gallery: [
      { name: "whisky-tasting-transfers", alt: "Whisky being poured into a tasting glass", caption: "Whisky tastings" },
      { name: "fine-dining-transfers", alt: "A restaurant table laid with wine glasses", caption: "Fine dining" },
      { name: "day-at-the-races", alt: "Racehorses and jockeys galloping on a turf course", caption: "A day at the races" },
    ],
    card: "Personalised transport for days out, special occasions and events.",
    metaTitle: "Day Trips & Event Transport from Crieff",
    metaDescription:
      "Private hire for days out from Crieff: whisky tastings, fine dining, local history and a day at the races. Call A2B Private Hire on 07708 010432.",
    headline: "Day trips and events",
    intro:
      "Leave the car at home. A2B takes care of the driving for days out and occasions across Perthshire and beyond.",
    sections: [
      {
        heading: "Ideas for a day out",
        body: [
          "Whisky tastings, where nobody has to be the driver. Fine dining, with the journey home taken care of. Local history, and a day at the races.",
          "Have somewhere else in mind? Tell us the plan and we will arrange transport around it.",
        ],
      },
      {
        heading: "Local knowledge comes as standard",
        body: [
          "Visitors often tell us the journey was part of the holiday. One customer wrote that his driver \"was full of local knowledge and pointed out things to see and do\" during their week in the area.",
        ],
      },
    ],
    booking: [
      "Call 07708 010432 with the date, where you would like to go and how many of you are travelling.",
      "Agree pick-up and return times that suit your day.",
      "We give you a price for the trip before you travel.",
    ],
    related: ["golf-trips", "wedding-transport", "local-private-hire"],
  },
  {
    slug: "golf-trips",
    name: "Golf trips",
    image: "golf",
    card: "Transport for golfers visiting the courses of Perthshire and beyond.",
    metaTitle: "Golf Trip Transport in Perthshire",
    metaDescription:
      "Private hire for golfers in Perthshire: transport to the course and back, and airport transfers for visiting players. Call A2B on 07708 010432.",
    headline: "Golf trips in Perthshire",
    intro:
      "Perthshire is golfing country. A2B takes golfers to the course and back, so everyone in the group can enjoy the round and whatever follows it.",
    sections: [
      {
        heading: "To the first tee and home again",
        body: [
          "Tell us the courses and tee times and we will plan the pick-ups around them. Visiting players can be collected from the airport or railway station at the start of the trip.",
        ],
      },
      {
        heading: "Clubs and kit",
        body: [
          "Let us know how many golfers and how many sets of clubs are travelling, so the right amount of space is arranged in advance.",
        ],
      },
    ],
    booking: [
      "Call 07708 010432 with your dates, courses and tee times.",
      "Tell us the size of your group and how many sets of clubs you are bringing.",
      "We confirm the arrangements and a price before you travel.",
    ],
    related: ["airport-transfers", "day-trips-and-events", "railway-station-transfers"],
  },
];

// Shown on the homepage alongside the services above. The existing site mentions port
// transfers in a single line, which is not enough to write a full page honestly.
export const portTransfers = {
  name: "Port transfers",
  image: "ports",
  card: "Transport to and from Scottish ports.",
  href: "/contact?service=Port+transfer#enquiry",
};

export const getService = (slug: string) => services.find((s) => s.slug === slug);
