"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { PhoneIcon } from "./icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the menu whenever the route changes, and on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <>
      <header className="header">
        <div className="wrap">
          <Link href="/" className="logo" aria-label="A2B Private Hire, Crieff — home">
            <span className="logo-mark">A2B</span>
            <span className="logo-sub">
              Private hire
              <br />
              Crieff
            </span>
          </Link>
          <nav className="nav" aria-label="Main">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} aria-current={current(n.href)}>
                {n.label}
              </Link>
            ))}
          </nav>
          <a href={site.phoneHref} className="btn btn-silver header-call">
            <PhoneIcon />
            <span>Call {site.phoneDisplay}</span>
          </a>
          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <div>
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </header>
      <div id="menu" className="sheet" data-open={open} inert={!open}>
        <nav aria-label="Mobile">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="sheet-link" aria-current={current(n.href)} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
        </nav>
        <a href={site.phoneHref} className="btn btn-silver">
          <PhoneIcon />
          <span>Call {site.phoneDisplay}</span>
        </a>
      </div>
    </>
  );
}
