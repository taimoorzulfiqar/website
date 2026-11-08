import { links, site } from "@/lib/content";
import { asset, siteUrl } from "@/lib/site";

export const seo = {
  title: "Taimoor Zulfiqar — Product Manager & Fractional Consultant",
  description:
    "Taimoor Zulfiqar is a product manager and fractional consultant based in Karachi. He ships AI products, automations, and MVPs across SaaS, e-commerce, and fintech — currently Product Owner at ExpoPlatform.",
  keywords: [
    "Taimoor Zulfiqar",
    "product manager",
    "fractional product manager",
    "product management consultant",
    "automation consultant",
    "AI product development",
    "freelance product manager",
    "Karachi",
    "n8n automation",
    "LLM integrations",
    "MCP",
  ],
};

export const openGraphImage = asset("/images/hero-lane.jpg");

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: site.brand,
  givenName: "Taimoor",
  familyName: "Zulfiqar",
  url: siteUrl,
  email: links.email,
  image: `${siteUrl}${asset("/images/hero-lane.jpg")}`,
  sameAs: [links.linkedin],
  jobTitle: ["Product Owner", "Product Manager", "Fractional Consultant"],
  description: seo.description,
  homeLocation: {
    "@type": "Place",
    name: "Karachi, Pakistan",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Institute of Business Administration, Karachi",
  },
  knowsAbout: [
    "Product management",
    "AI product development",
    "Automation",
    "n8n",
    "MCP",
    "LLM integrations",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Fractional & freelance product builds",
        description:
          "MVPs, internal tools, AI features, and automations delivered end to end.",
        provider: { "@id": `${siteUrl}/#person` },
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Product management",
        description:
          "Full-time and fractional product leadership — remote or with visa sponsorship.",
        provider: { "@id": `${siteUrl}/#person` },
      },
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: site.brand,
  url: siteUrl,
  description: seo.description,
  inLanguage: "en",
  publisher: { "@id": `${siteUrl}/#person` },
};
