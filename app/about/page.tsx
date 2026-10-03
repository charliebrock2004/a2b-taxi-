import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { InView } from "@/components/InView";
import { Photo } from "@/components/Photo";
import { FinalCta, JsonLd, PageHero, Testimonials } from "@/components/sections";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About A2B Private Hire, Crieff",
  description:
    "A2B is Crieff's local private hire firm, with council-approved drivers and many years on the roads of Perthshire. Call 07708 010432.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <PageHero
        title="About A2B"
        lede="A local private hire firm, getting people from A to B across Perthshire for many years."
        image="about"
        crumbs={[{ href: "/", label: "Home" }, { label: "About us" }]}
      >
        <div className="btns"><CallButton label="Call to book" /></div>
      </PageHero>

      <section className="band">
        <div className="wrap split">
          <div>
            <h2 className="statement">Wherever you need to be, and whenever you need to be there, we can help.</h2>
            <InView className="reveal">
              <Photo name="about-detail" alt="" className="r-43" sizes="(min-width: 900px) 50vw, 100vw" fallback="none" />
            </InView>
          </div>
          <div className="prose">
            <p>
              A2B Private Hire is based in Crieff. We have been helping people get from place to place in Perthshire for many years. It is our
              patch, and we know it very well indeed.
            </p>
            <p>
              Our drivers are all approved by the local council. Our vehicles carry the latest satellite navigation, and we accept payment by
              card, including contactless.
            </p>
            <p>
              Most of our work is local: journeys around Crieff and Strathearn, appointments, and evenings out. The rest takes us further, to
              Scotland&rsquo;s airports, railway stations and ports, and on days out across the country.
            </p>
            <p>
              Whatever the journey, the aim is the same one the business was named for: getting you from A to B, on time.
            </p>
            <p>
              <Link className="textlink" href="/services">See our services</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="band band-alt">
        <div className="wrap">
          <div className="head"><h2 className="display d2">What people say</h2></div>
          <Testimonials />
        </div>
      </section>

      <FinalCta />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "About us", path: "/about" }])} />
    </>
  );
}
