import { links, site } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export const seo = {
  title: "Taimoor Zulfiqar — Product Manager & Automation Consultant",
  description:
    "I’m Taimoor Zulfiqar, a product manager and AI builder. I help teams with product management consulting and automation — from roadmaps and onboarding to AI workflows that ship.",
  keywords: [
    "Taimoor Zulfiqar",
    "product manager",
    "product management consultant",
    "automation consultant",
    "AI product development",
    "AI automation",
    "n8n automation",
    "LLM integrations",
    "product strategy",
    "freelance product manager",
  ],
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: site.brand,
  givenName: "Taimoor",
  familyName: "Zulfiqar",
  url: siteUrl,
  email: links.email,
  image: `${siteUrl}/favicon.ico`,
  sameAs: [links.linkedin],
  jobTitle: ["Product Manager", "AI Builder", "Automation Consultant"],
  description: seo.description,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Institute of Business Administration, Karachi",
  },
  knowsAbout: [
    "Product management",
    "Product strategy",
    "User research",
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
        name: "Product management consulting",
        description:
          "Roadmaps, research, onboarding, experiments, and growth systems.",
        provider: { "@id": `${siteUrl}/#person` },
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Automation services",
        description:
          "AI workflows, n8n/MCP pipelines, and LLM tools that cut manual work.",
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
