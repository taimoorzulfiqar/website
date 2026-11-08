import { asset } from "@/lib/site";

export const site = {
  brand: "Taimoor Zulfiqar",
  role: "Product manager & fractional consultant",
  location: "Karachi, Pakistan",
  tagline: "AI products and automations that ship.",
  support:
    "4+ years shipping AI and automation across SaaS, e-commerce, and fintech. I help teams scope what matters, then build MVPs, internal tools, and workflows end to end.",
};

export const highlights = [
  { label: "Experience", value: "4+ years in product" },
  { label: "Experimentation", value: "50+ A/B tests · 15% conversion lift" },
  { label: "Based in", value: "Karachi · open to remote & relocation" },
] as const;

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
    title: "Fractional & freelance builds",
    image: asset("/images/service-product.jpg"),
    imageAlt: "Torn paper strips in columns, one of them orange",
    description:
      "End-to-end delivery of MVPs, internal tools, AI features, and automations — from discovery through launch.",
    points: [
      "MVPs and internal tools",
      "AI features and LLM integrations",
      "n8n and MCP automation pipelines",
      "OCR and document workflows",
      "Payments, onboarding, and core product flows",
    ],
  },
  {
    title: "Product management",
    image: asset("/images/service-automation.jpg"),
    imageAlt: "A small paper-and-cord machine with an orange wheel",
    description:
      "Open to full-time and fractional product roles — remote or with visa sponsorship. Roadmaps, research, and experiments that turn ideas into shipped outcomes.",
    points: [
      "Fractional and full-time PM engagements",
      "Roadmapping and prioritization",
      "Onboarding and time-to-value",
      "A/B testing and growth experiments",
      "Cross-functional delivery with engineering",
    ],
  },
] as const;

export const work = [
  {
    company: "ExpoPlatform",
    role: "Product Owner",
    meta: "London event-tech · Remote from Karachi since Dec 2025",
    current: true,
    image: asset("/images/work-expo.jpg"),
    imageAlt: "A blank conference badge crossed by an orange scan line",
    summary:
      "Event SaaS for organisers and exhibitors — onboarding, support, and lead capture.",
    outcomes: [
      "Cut time-to-value 50% with an LLM-agent-based AI onboarding journey",
      "Reduced support calls 40% through agent-led workflows",
      "Built a Claude-based sentiment tracker that saves account managers 40 hours/week",
      "Shipped OCR features for faster lead capture at events",
    ],
  },
  {
    company: "Banks Technologies",
    role: "Fractional Product Manager",
    meta: "Echo — appraisal management platform",
    image: asset("/images/work-banks.jpg"),
    imageAlt: "Blank folders, a floor plan, a ruler, and an orange seal",
    summary:
      "Building Echo solo end to end with Cursor and Claude Code — connecting lenders, AMCs, and appraisal firms.",
    outcomes: [
      "Owned product and delivery end to end on a greenfield platform",
      "Integrated Stripe payments (Visa/Mastercard) for order and billing flows",
      "Designed order management, workflows, and document handling with audit trails",
      "Built reporting, analytics, and USPAP-aware compliance with role-based access",
    ],
  },
  {
    company: "Bazaar Technologies",
    role: "Product Manager",
    meta: "B2B marketplace",
    image: asset("/images/work-bazaar.jpg"),
    imageAlt: "Parcels on a warehouse conveyor, one tied with an orange ribbon",
    summary:
      "B2B marketplace products and AI features across fulfilment and warehouse operations.",
    outcomes: [
      "Scaled fulfilment from 1,000 to 3,000+ orders/day",
      "Automated inventory uploads with n8n and MCP pipelines — out-of-stock incidents to zero",
      "Built an AI workflow that updates delivery ETAs from real-time warehouse capacity",
      "Shipped an AI invoice parser for operations teams",
    ],
  },
  {
    company: "ValueLink",
    role: "Associate Product Manager",
    meta: "Real-estate appraisal software · 2 years",
    image: asset("/images/work-value.jpg"),
    imageAlt: "Stacks of blank cards, one marked with an orange tab",
    summary:
      "Appraisal management software for lenders and valuation firms.",
    outcomes: [
      "Improved order turnaround time by 20%",
      "Increased development velocity by 30% through clearer specs and delivery rhythm",
      "Delivered integrations with lending systems (LOS)",
      "Ran structured experiments and roadmap work across core ordering flows",
    ],
  },
] as const;

export const about = {
  heading: "About me",
  body: [
    "I’m a product manager with 4+ years shipping AI and automation products across SaaS, e-commerce, and fintech.",
    "I focus on onboarding, intelligent workflows, and features teams can run in production — backed by research, experimentation, and close work with engineering.",
    "I hold a finance degree from IBA, Karachi, and I’m based in Karachi. I also built a project-management tool with Claude Code and MCP for my own delivery stack.",
  ],
  skills: {
    product: [
      "Roadmapping",
      "User research",
      "A/B testing",
      "Onboarding design",
      "Funnel optimisation",
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
  heading: "Get in touch",
  body: "Tell me what you’re building — MVP, internal tool, AI feature, or fractional PM support. I reply by email, or you can reach me on LinkedIn.",
};
