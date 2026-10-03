import { CallButton } from "@/components/CallButton";
import { FinalCta, JsonLd, PageHero, ServiceList } from "@/components/sections";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Private Hire Services in Crieff & Perthshire",
  description:
    "Local private hire, airport and station transfers, wedding transport, hospital appointments, golf trips and days out from Crieff. Call A2B on 07708 010432.",
  path: "/services",
});

export default function Services() {
  return (
    <>
      <PageHero
        title="Our services"
        lede="Everything A2B does, from everyday journeys around Crieff to transfers across Scotland."
        image="services"
        crumbs={[{ href: "/", label: "Home" }, { label: "Our services" }]}
      >
        <div className="btns"><CallButton label="Call to book" /></div>
      </PageHero>
      <section className="band">
        <div className="wrap">
          <ServiceList />
        </div>
      </section>
      <FinalCta heading="Not sure which service you need?" text="Tell us where you are going and when. We will take care of the rest." />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Our services", path: "/services" }])} />
    </>
  );
}
