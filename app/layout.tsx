import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bodoni-moda";
import "@fontsource-variable/bodoni-moda/wght-italic.css";
import "@fontsource-variable/manrope";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/sections";
import { site } from "@/lib/site";
import { businessLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Crieff Taxi & Private Hire | A2B Private Hire", template: `%s | ${site.name}` },
  description:
    "A2B Private Hire, Crieff. Local private hire and airport transfers across Perthshire with council-approved drivers. Call 07708 010432 to book.",
  // Indexing stays off until SITE_LIVE=true, so a concept deployment never competes with the real site.
  robots: site.live ? { index: true, follow: true } : { index: false, follow: false },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#171719", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={businessLd} />
      </body>
    </html>
  );
}
