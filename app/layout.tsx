import type { Metadata } from "next";
import { links, site } from "@/lib/content";
import { personJsonLd, seo, websiteJsonLd } from "@/lib/seo";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s — ${site.brand}`,
  },
  description: seo.description,
  applicationName: site.brand,
  keywords: seo.keywords,
  authors: [{ name: site.brand, url: siteUrl }],
  creator: site.brand,
  publisher: site.brand,
  category: "consulting",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: site.brand,
    title: seo.title,
    description: seo.description,
    firstName: "Taimoor",
    lastName: "Zulfiqar",
    username: "taimoor-zulfiqar",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "profile:first_name": "Taimoor",
    "profile:last_name": "Zulfiqar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Schibsted+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="me" href={links.linkedin} />
      </head>
      <body className="min-h-full bg-field font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
