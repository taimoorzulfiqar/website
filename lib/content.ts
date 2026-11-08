export const site = {
  brand: "Taimoor Zulfiqar",
  tagline: "Product clarity and automation that ship.",
  support:
    "I help teams decide what to build, then automate the busywork around it.",
};

export const links = {
  calendar: "https://calendar.app.google/oMdE7WfxB1TJmi4b8",
  linkedin: "https://www.linkedin.com/in/taimoor-zulfiqar",
  email: "taimoorzulfiqar97@gmail.com",
  emailHref: "mailto:taimoorzulfiqar97@gmail.com",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    title: "Product management consulting",
    image: "/images/service-product.jpg",
    imageAlt: "Torn paper strips in columns, one of them orange",
    description:
      "Roadmaps, user research, onboarding design, experiments, and growth systems that turn product ideas into shipped outcomes.",
    points: [
      "Roadmapping and prioritization",
      "User research and discovery",
      "Onboarding and funnel optimization",
      "A/B testing and NPS programs",
      "Subscription and billing workflows",
    ],
  },
  {
    title: "Automation services",
    image: "/images/service-automation.jpg",
    imageAlt: "A small paper-and-cord machine with an orange wheel",
    description:
      "AI workflows and integration pipelines that remove manual work — from LLM agents to n8n and MCP systems your team can actually run.",
    points: [
      "LLM integrations and AI agents",
      "n8n and MCP automation pipelines",
      "OCR and document workflows",
      "Sentiment and request triage",
      "Product architecture for AI features",
    ],
  },
] as const;

export const work = [
  {
    company: "Banks Technologies",
    role: "AI Builder",
    image: "/images/work-banks.jpg",
    imageAlt: "Blank folders, a floor plan, a ruler, and an orange seal",
    summary:
      "Building Echo, an appraisal management platform that connects lenders, AMCs, and appraisal firms in one system.",
    outcomes: [
      "Architecting core modules for order management with full audit trails",
      "Designing team and workflow assignment for appraisers, supervisors, and coordinators",
      "Building document management for reports, contracts, and supporting files",
      "Designing reporting, analytics, and USPAP-aware compliance with role-based access",
    ],
  },
  {
    company: "ExpoPlatform",
    role: "Product Manager",
    image: "/images/work-expo.jpg",
    imageAlt: "A blank conference badge crossed by an orange scan line",
    summary:
      "Event SaaS product work focused on lead capture, onboarding, and support efficiency.",
    outcomes: [
      "Launched OCR badge scanning that doubled lead generation capacity",
      "Cut time-to-value by 50% with an AI-assisted onboarding journey",
      "Reduced support calls by 40% through LLM agent workflows",
      "Saved TAMs 40 hours/week with AI sentiment triage",
    ],
  },
  {
    company: "Bazaar Technologies",
    role: "Product Manager",
    image: "/images/work-bazaar.jpg",
    imageAlt: "Parcels on a warehouse conveyor, one tied with an orange ribbon",
    summary:
      "Scaled fulfilment operations and shipped AI tools across warehouse and shopping experiences.",
    outcomes: [
      "Scaled B2C fulfilment from 1,000 to 3,000+ orders/day",
      "Built AI fulfilment workflows that auto-update delivery ETAs",
      "Automated inventory uploads via n8n and MCP pipelines",
      "Boosted CTR and conversion by 50% with an AI shopping assistant",
    ],
  },
  {
    company: "Value Link Connect",
    role: "Associate Product Manager",
    image: "/images/work-value.jpg",
    imageAlt: "Stacks of blank cards, one marked with an orange tab",
    summary:
      "Grew revenue and acquisition through billing, redesign, and continuous experimentation.",
    outcomes: [
      "Drove a 20% revenue uplift with new subscription plans",
      "Improved NPS by 20% through a full UI/UX redesign",
      "Lifted conversion by 15% across 50+ A/B tests",
      "Reached 100% adoption of User Scorecard within 2 months",
    ],
  },
] as const;

export const about = {
  heading: "About me",
  body: [
    "I’m a product manager and AI builder with 5+ years shipping customer-facing features across SaaS, e-commerce, and fintech.",
    "I specialise in AI-powered product development: onboarding automation, intelligent workflow tools, and platform architecture. I drive measurable growth through structured experimentation, user research, and cross-functional collaboration.",
  ],
  skills: {
    product: [
      "Roadmapping",
      "User research",
      "A/B testing",
      "NPS & funnel optimisation",
      "Onboarding design",
      "Subscription & billing",
    ],
    automation: [
      "Claude Code",
      "MCP",
      "AI agents",
      "n8n automation",
      "LLM integrations",
      "OCR & sentiment analysis",
    ],
  },
};

export const contact = {
  heading: "Let’s talk about what to build next",
  body: "Share a bit about your product or workflow. I’ll get back to you — or book a call if you’d rather talk live.",
};
