import Link from "next/link";
import { notFound } from "next/navigation";
import { CallButton } from "@/components/CallButton";
import { ArrowIcon } from "@/components/icons";
import { FinalCta, JsonLd, PageHero } from "@/components/sections";
import { getService, services } from "@/lib/services";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

// Build one static page per service at build time; any other slug is a 404.
export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMeta({ title: service.metaTitle, description: service.metaDescription, path: `/services/${service.slug}` });
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const path = `/services/${service.slug}`;

  return (
    <>
      <PageHero
        title={service.headline}
        lede={service.intro}
        image={service.image}
        crumbs={[{ href: "/", label: "Home" }, { href: "/services", label: "Our services" }, { label: service.name }]}
      >
        <div className="btns">
          <CallButton label="Call to book" />
          <Link href={`/contact?service=${encodeURIComponent(service.name)}#enquiry`} className="btn btn-line">Request a journey</Link>
        </div>
      </PageHero>

      <section className="band">
        <div className="wrap split wide-left">
          <div className="blocks">
            {service.sections.map((s) => (
              <section key={s.heading} id={s.id}>
                <h2 className="display d3">{s.heading}</h2>
                <div className="prose">
                  {s.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <aside className="panel stick" aria-labelledby="how">
            <h2 className="display d3" id="how" style={{ marginBottom: 20 }}>How to book</h2>
            <ol className="steps">
              {service.booking.map((b) => (
                <li key={b}><span>{b}</span></li>
              ))}
            </ol>
            <div className="btns" style={{ marginTop: 28 }}>
              <CallButton />
            </div>
          </aside>
        </div>
      </section>

      {service.faqs && (
        <section className="band band-alt">
          <div className="wrap split">
            <h2 className="display d2">Questions we are often asked</h2>
            <div className="faq">
              {service.faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: service.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            }}
          />
        </section>
      )}

      <section className="band band-rule">
        <div className="wrap">
          <div className="head"><h2 className="display d2">Related services</h2></div>
          <ul className="related svc">
            {service.related.map((slug) => {
              const r = getService(slug)!;
              return (
                <li key={slug} className="svc-item">
                  <Link href={`/services/${slug}`}>
                    <h3 className="display d3">{r.name}</h3>
                    <span className="go"><ArrowIcon /></span>
                    <p>{r.card}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <FinalCta />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          serviceType: service.name,
          description: service.metaDescription,
          url: `${site.url}${path}`,
          provider: { "@id": `${site.url}/#business` },
          areaServed: { "@type": "AdministrativeArea", name: "Perth and Kinross" },
        }}
      />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Our services", path: "/services" }, { name: service.name, path }])} />
    </>
  );
}
