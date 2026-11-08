import { ContactForm } from "@/components/ContactForm";
import { contact, links } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="px-5 pb-20 md:px-8 md:pb-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-16">
        <div>
          <p className="text-sm font-medium tracking-wide text-signal uppercase">
            Contact
          </p>
          <h2 className="mt-3 max-w-[16ch] font-display text-[clamp(2.1rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-ink">
            {contact.heading}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-quiet md:text-lg">
            {contact.body}
          </p>

          <ul className="mt-8 space-y-4 text-base">
            <li>
              <a
                href={links.emailHref}
                className="font-medium text-ink underline decoration-rule underline-offset-[5px] hover:decoration-ink"
              >
                {links.email}
              </a>
            </li>
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline decoration-rule underline-offset-[5px] hover:decoration-ink"
              >
                linkedin.com/in/taimoor-zulfiqar
              </a>
            </li>
            <li>
              <a
                href={links.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-quiet underline decoration-rule underline-offset-[5px] transition-colors hover:text-ink hover:decoration-ink"
              >
                Book a call (optional)
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-sheet p-5 ring-1 ring-rule/90 sm:p-7 sm:py-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
