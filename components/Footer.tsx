import { links, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-fg">
            {site.brand}
          </p>
          <p className="mt-1 text-sm text-fg-muted">
            Product management consulting & automation
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          <a
            href={links.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-muted transition-colors hover:text-fg"
          >
            Book a call
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-muted transition-colors hover:text-fg"
          >
            LinkedIn
          </a>
          <a
            href={links.emailHref}
            className="text-fg-muted transition-colors hover:text-fg"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
