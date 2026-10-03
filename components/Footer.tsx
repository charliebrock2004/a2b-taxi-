import Link from "next/link";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";
import { PhoneIcon } from "./icons";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <Link href="/" className="logo" aria-label="A2B Private Hire — home">
                <span className="logo-mark">A2B</span>
                <span className="logo-sub">
                  Private hire
                  <br />
                  Crieff
                </span>
              </Link>
              <p className="muted" style={{ marginTop: 20, maxWidth: "26em" }}>
                Private hire and airport transfers from Crieff, across Strathearn and Perthshire.
              </p>
              <a href={site.phoneHref} className="footer-phone">
                {site.phoneDisplay}
              </a>
            </div>
            <nav aria-label="Services">
              <h2>Services</h2>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`}>{s.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Footer">
              <h2>A2B</h2>
              <ul>
                {nav.filter((n) => n.href !== "/services/airport-transfers").map((n) => (
                  <li key={n.href}>
                    <Link href={n.href}>{n.label}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/privacy">Privacy</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-base">
            <span>
              © {new Date().getFullYear()} {site.name}, {site.locality}, {site.region}
            </span>
            <span>Drivers approved by the local council</span>
          </div>
        </div>
      </footer>
      {!site.live && (
        <p className="concept">
          Design concept prepared for A2B Private Hire. Not yet the official website; to book, call {site.phoneDisplay}.
        </p>
      )}
      <div className="callbar">
        <a href={site.phoneHref} className="btn btn-silver">
          <PhoneIcon />
          <span>Call to book</span>
        </a>
        <Link href="/contact#enquiry" className="btn btn-line">
          Enquire
        </Link>
      </div>
    </>
  );
}
