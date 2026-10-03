import Link from "next/link";
import { AreaMap } from "@/components/AreaMap";
import { CallButton } from "@/components/CallButton";
import { FinalCta, JsonLd, PageHero, TownList } from "@/components/sections";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Areas We Cover – Crieff, Auchterarder, Comrie & Perthshire",
  description:
    "A2B covers Crieff, Perth, Stirling, Auchterarder, Braco, Comrie, St Fillans, Blackford and Dunblane, plus Scotland's airports, stations and ports.",
  path: "/areas",
});

export default function Areas() {
  return (
    <>
      <PageHero
        title="Areas we cover"
        lede="Based in Crieff. On the road across Strathearn, Perthshire and the rest of Scotland."
        image="areas"
        crumbs={[{ href: "/", label: "Home" }, { label: "Areas we cover" }]}
      >
        <div className="btns"><CallButton label="Call to book" /></div>
      </PageHero>

      <section className="band">
        <div className="wrap split wide-left">
          <AreaMap />
          <div>
            <h2 className="display d2">Strathearn and Perthshire</h2>
            <p className="lede" style={{ margin: "24px 0 32px" }}>Our regular journeys run between Crieff and these towns and villages.</p>
            <TownList />
          </div>
        </div>
      </section>

      <section className="band band-alt">
        <div className="wrap split">
          <div>
            <h2 className="display d2">Airports, stations and ports</h2>
          </div>
          <div className="prose">
            <p className="lede">Transfers are available to Scotland&rsquo;s airports, railway stations and ports.</p>
            <p>
              Edinburgh and Glasgow airports and stations are about 70 to 90 minutes from Crieff. See{" "}
              <Link className="textlink" href="/services/airport-transfers">airport transfers</Link> and{" "}
              <Link className="textlink" href="/services/railway-station-transfers">railway station transfers</Link> for how these journeys work.
            </p>
            <p>
              The places on this page are where we travel most often, not the only places we go. If your pick-up or destination is not listed,
              call and ask.
            </p>
          </div>
        </div>
      </section>

      <FinalCta heading="Tell us where you need to be." text="Call to check your route and arrange your journey." />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Areas we cover", path: "/areas" }])} />
    </>
  );
}
