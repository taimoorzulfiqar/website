import { links, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-rule bg-sheet/50 px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl font-medium tracking-tight text-ink">
            {site.brand}
          </p>
          <p className="mt-1 max-w-sm text-sm leading-relaxed text-quiet">
            Fractional product management · AI features · Automations —{" "}
            {site.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href="#contact"
            className="font-medium text-ink transition-colors hover:text-signal"
          >
            Contact
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-quiet transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href={links.emailHref}
            className="text-quiet transition-colors hover:text-ink"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
