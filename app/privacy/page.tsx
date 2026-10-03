import { PageHero } from "@/components/sections";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Privacy Notice",
  description: "How A2B Private Hire handles the details you send through this website.",
  path: "/privacy",
});

// This describes what the website itself does. The owner should review it before launch
// and add their formal business details. See README "Needs confirming".
export default function Privacy() {
  return (
    <>
      <PageHero title="Privacy notice" image="privacy" crumbs={[{ href: "/", label: "Home" }, { label: "Privacy" }]} />
      <section className="band">
        <div className="wrap blocks prose">
          <section>
            <h2 className="display d3">What this website collects</h2>
            <p>
              This website does not use tracking or advertising cookies and does not run analytics. The only personal details it handles are
              the ones you choose to type into the journey request form: your name, telephone number, email address if you give one, and the
              details of your journey.
            </p>
          </section>
          <section>
            <h2 className="display d3">What happens to a journey request</h2>
            <p>
              When you send a journey request, the details are emailed to {site.name} so that we can reply and arrange your transport. They
              are used for that purpose only and are not sold or passed to anyone for marketing.
            </p>
          </section>
          <section>
            <h2 className="display d3">Your details</h2>
            <p>
              To ask what details we hold about you, or to have them corrected or deleted, call{" "}
              <a className="textlink" href={site.phoneHref}>{site.phoneDisplay}</a>.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
