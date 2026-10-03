import { AreaMap } from "@/components/AreaMap";
import { CallButton } from "@/components/CallButton";
import { MailIcon } from "@/components/icons";
import { EnquiryForm } from "@/components/EnquiryForm";
import { JsonLd, PageHero, TownList } from "@/components/sections";
import { enquiryConfig } from "@/lib/enquiry-config";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact & Book – Call 07708 010432",
  description: "Book a journey with A2B Private Hire, Crieff. Call 07708 010432, email agbrown1@hotmail.co.uk or send a journey request online.",
  path: "/contact",
});

export default function Contact() {
  const enabled = enquiryConfig() !== null;
  return (
    <>
      <PageHero
        title="Contact A2B"
        lede="The quickest way to book is to call. Give us a ring and let's find out how we can help."
        image="contact"
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
      >
        <div className="btns"><CallButton /></div>
      </PageHero>

      <section className="band">
        <div className="wrap split">
          <div>
            <h2 className="display d2">Book by phone or email</h2>
            <address style={{ fontStyle: "normal", marginTop: 28 }}>
              <p className="statement">{site.name}</p>
              <p className="lede">Crieff, Perthshire</p>
              <p style={{ marginTop: 20 }}>
                Telephone: <a className="textlink" href={site.phoneHref}>{site.phoneDisplay}</a>
              </p>
              <p style={{ marginTop: 8 }}>
                Email: <a className="textlink email" href={site.emailHref}>{site.email}</a>
              </p>
            </address>
            <div className="btns" style={{ marginTop: 32 }}>
              <CallButton label="Call to book" />
              <a href={site.emailHref} className="btn btn-line">
                <MailIcon />
                <span>Email us</span>
              </a>
            </div>
            <p className="muted" style={{ marginTop: 32, maxWidth: "32em" }}>
              Have your pick-up address, destination, date and time ready. For airport and station journeys, your flight or train number helps
              us meet you at arrivals.
            </p>
          </div>
          <div className="panel" id="enquiry">
            <h2 className="display d3" style={{ marginBottom: 8 }}>Request a journey</h2>
            <p className="muted" style={{ marginBottom: 28 }}>Send us the details and we will come back to you to confirm.</p>
            <EnquiryForm enabled={enabled} />
          </div>
        </div>
      </section>

      <section className="band band-alt">
        <div className="wrap split wide-left">
          <AreaMap />
          <div>
            <h2 className="display d2">Where we operate</h2>
            <p className="lede" style={{ margin: "24px 0 32px" }}>
              Based in Crieff, covering Strathearn and Perthshire, with transfers to Scotland&rsquo;s airports, railway stations and ports.
            </p>
            <TownList />
            <p style={{ marginTop: 28 }}>
              <a className="textlink" href="https://www.google.com/maps/search/?api=1&query=Crieff%2C+Perthshire" target="_blank" rel="noopener noreferrer">
                Open Crieff in Google Maps (new tab)
              </a>
            </p>
          </div>
        </div>
      </section>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
    </>
  );
}
