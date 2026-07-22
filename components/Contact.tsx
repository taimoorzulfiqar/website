import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { contact, links } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-16">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
              {contact.heading}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-fg-muted md:text-lg">
              {contact.body}
            </p>

            <ul className="mt-8 space-y-4 text-base">
              <li>
                <a
                  href={links.calendar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg transition-colors hover:text-accent-strong"
                >
                  Book a call
                </a>
              </li>
              <li>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg transition-colors hover:text-accent-strong"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={links.emailHref}
                  className="text-fg transition-colors hover:text-accent-strong"
                >
                  {links.email}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delayMs={90}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
