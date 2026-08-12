import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { metaDescription } from "@/content/manifest";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} — ${site.tagline} | meskirod.pl`,
    template: `%s | ${site.name}`,
  },
  description: metaDescription,
  keywords: [
    "wsparcie mężczyzn",
    "zdrowie psychiczne mężczyzn",
    "centrum pomocy",
    "psychoterapia mężczyzn",
    "Męski Ród",
    "meskirod",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: site.domain,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: metaDescription,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: metaDescription,
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: site.domain,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
