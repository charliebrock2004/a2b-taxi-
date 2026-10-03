import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { Inset, Photo } from "@/components/Photo";
import { AreaMap } from "@/components/AreaMap";
import { InView } from "@/components/InView";
import { TickIcon } from "@/components/icons";
import { FinalCta, ServiceList, Testimonials, TownList } from "@/components/sections";
import { pageMeta } from "@/lib/seo";

export const metadata = {
  ...pageMeta({
    title: "Crieff Taxi & Private Hire",
    description:
      "A2B Private Hire, Crieff. Local private hire and airport transfers across Perthshire with council-approved drivers. Call 07708 010432 to book.",
    path: "/",
  }),
  title: { absolute: "Crieff Taxi & Private Hire | A2B Private Hire" },
};

const delay = (d: string) => ({ "--d": d }) as React.CSSProperties;

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <Photo name="hero" alt="" priority />
        </div>
        <div className="wrap hero-in has-inset">
          <div className="hero-head">
            <div className="route" aria-hidden="true">
              <b>A</b>
              <i />
              <b>B</b>
            </div>
            <h1>
              <span className="display d1 rise">Your journey.</span>
              <span className="display d1 rise" style={delay(".12s")}>Our priority.</span>
              <span className="hero-sub rise" style={delay(".3s")}>
                Professional private hire &amp; airport transfers in Crieff and across Perthshire.
              </span>
            </h1>
          </div>
          <div className="hero-body">
            <p className="hero-copy rise" style={delay(".4s")}>
              Wherever you need to be, A2B Private Hire is here to help. Reliable, comfortable and professional journeys, from local trips to
              airport transfers and beyond.
            </p>
            <div className="btns rise" style={delay(".5s")}>
              <CallButton label="Call to book" />
              <Link href="/services" className="btn btn-line">Explore our services</Link>
            </div>
          </div>
          <Inset
            name="a2b-taxi-vehicle"
            alt="A2B Private Hire's white Skoda saloon parked beside a Perthshire field"
            caption="The A2B Skoda"
            width={400}
            priority
            className="rise hero-photo"
          />
        </div>
        <a href="#about" className="scroll" aria-label="Scroll to content" />
      </section>

      <section id="about" className="band">
        <div className="wrap split wide-left">
          <div>
            <h2 className="statement">
              A2B is Crieff&rsquo;s local private hire firm. We have been taking people from place to place in Perthshire for many years, and
              we know these roads very well.
            </h2>
            <p className="lede" style={{ marginTop: 28 }}>
              Whether you are popping out for the shopping in Crieff or need to be at Glasgow Airport at 6am, we are the people who can get
              you there.
            </p>
            <p style={{ marginTop: 28 }}>
              <Link href="/about" className="textlink">About A2B</Link>
            </p>
          </div>
          <ul className="facts">
            {[
              "Drivers approved by the local council",
              "Card and contactless payments accepted",
              "A professional service, on time",
              "Local knowledge of Strathearn and Perthshire",
              "Comfortable journeys, near or far",
            ].map((f) => (
              <li key={f}>
                <TickIcon />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band-alt">
        <div className="wrap">
          <div className="head">
            <h2 className="display d2">Our services</h2>
            <p className="lede">From a short hop across town to a transfer the length of Scotland. Choose a service to see how it works, or call and tell us what you need.</p>
          </div>
          <ServiceList />
        </div>
      </section>

      <section className="band">
        <div className="wrap split">
          <div className="stick">
            <h2 className="display d2">Why choose A2B?</h2>
            <p className="lede" style={{ marginTop: 24 }}>The reasons below are in our customers&rsquo; words as much as ours.</p>
            <InView className="reveal" >
              <Inset
                name="a2b-taxi-minibus"
                alt="A2B Private Hire's minibus parked on open hillside"
                caption="The A2B minibus"
                width={560}
                className="why-photo"
              />
            </InView>
          </div>
          <div className="why">
            <div>
              <h3>Reliability</h3>
              <p>On time, all the time, is what A2B is built on.</p>
              <q>Always punctual, well mannered, reasonably priced and all round professional service.</q>
              <cite>Alan Roger</cite>
            </div>
            <div>
              <h3>Local knowledge</h3>
              <p>Perthshire is our patch.</p>
              <q>Graham was full of local knowledge and pointed out things to see and do during our weeks holiday.</q>
              <cite>David McNair</cite>
            </div>
            <div>
              <h3>Professional drivers</h3>
              <p>Every A2B driver is approved by the local council.</p>
            </div>
            <div>
              <h3>Clean and comfortable vehicles</h3>
              <q>Cars are always immaculate inside and out.</q>
              <cite>Alan Roger</cite>
            </div>
            <div>
              <h3>Convenient booking</h3>
              <p>One call arranges your journey. We only charge from the point of pick-up and are happy to give you a fixed price.</p>
            </div>
            <div>
              <h3>Card and contactless payments</h3>
              <p>Pay by card in the vehicle, including contactless.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band-alt">
        <div className="wrap split wide-left">
          <AreaMap />
          <div>
            <h2 className="display d2">Areas we cover</h2>
            <p className="lede" style={{ margin: "24px 0 32px" }}>
              Based in Crieff and covering Strathearn and Perthshire, with transfers to Scotland&rsquo;s airports, railway stations and ports.
            </p>
            <TownList />
            <p style={{ marginTop: 28 }}>
              Going somewhere else? These are our regular destinations, not the limit.{" "}
              <Link href="/areas" className="textlink">See the areas we cover</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="head">
            <h2 className="display d2">What people say</h2>
          </div>
          <Testimonials />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
