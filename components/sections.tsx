import Link from "next/link";
import { site, testimonials, areas } from "@/lib/site";
import { services, portTransfers } from "@/lib/services";
import { Photo, hasPhoto } from "./Photo";
import { ArrowIcon, PhoneIcon } from "./icons";
import { InView } from "./InView";

export function ServiceList() {
  const items = [
    ...services.map((s) => ({ name: s.name, card: s.card, image: s.image, href: `/services/${s.slug}` })),
    { ...portTransfers },
  ];
  return (
    <ul className="svc">
      {items.map((s) => (
        <li key={s.name} className="svc-item">
          <Link href={s.href}>
            {hasPhoto(s.image) && (
              <InView className="reveal svc-photo">
                <Photo name={s.image} alt="" className="r-169" sizes="(min-width: 800px) 45vw, 100vw" />
              </InView>
            )}
            <h3 className="display d3">{s.name}</h3>
            <span className="go">
              <ArrowIcon />
            </span>
            <p>{s.card}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Testimonials() {
  return (
    <div className="quotes">
      {testimonials.map((t) => (
        <figure key={t.name} className="quote">
          <h3>{t.heading}</h3>
          <blockquote>
            <p>{t.quote}</p>
          </blockquote>
          <figcaption>{t.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function TownList() {
  return (
    <ul className="towns">
      <li>Crieff</li>
      {areas.map((a) => (
        <li key={a.name}>{a.name}</li>
      ))}
    </ul>
  );
}

export function FinalCta({
  heading = "Wherever you need to be, A2B can get you there.",
  text = "Get in touch today to discuss your journey and arrange your transport.",
}: { heading?: string; text?: string }) {
  return (
    <section className="band cta">
      <div className="wrap">
        <h2 className="display d2">{heading}</h2>
        <p className="lede">{text}</p>
        <a href={site.phoneHref} className="btn btn-silver btn-lg" aria-label={`Call ${site.phoneDisplay}`}>
          <PhoneIcon />
          <span>{site.phoneDisplay}</span>
        </a>
      </div>
    </section>
  );
}

export function PageHero({
  title, lede, image, crumbs, children,
}: { title: string; lede?: string; image: string; crumbs: { href?: string; label: string }[]; children?: React.ReactNode }) {
  return (
    <section className="pagehero">
      <div className="hero-bg">
        <Photo name={image} alt="" priority alt2 />
      </div>
      <div className="wrap pagehero-in">
        <nav aria-label="Breadcrumb">
          <ol className="crumbs">
            {crumbs.map((c) => (
              <li key={c.label}>{c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</li>
            ))}
          </ol>
        </nav>
        <h1 className="display d2 rise">{title}</h1>
        {lede && <p className="lede rise" style={{ "--d": ".12s" } as React.CSSProperties}>{lede}</p>}
        {children}
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
