import { ContactForm } from "@/components/ContactForm";
import { contact, links } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="px-5 pb-20 md:px-8 md:pb-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
        <div>
          <h2 className="max-w-[14ch] font-display text-[clamp(2.1rem,4vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.03em] text-ink">
            {contact.heading}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-quiet md:text-lg">
            {contact.body}
          </p>

          <ul className="mt-8 space-y-3 text-base">
            <li>
              <a
                href={links.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-rule underline-offset-[5px] hover:decoration-ink"
              >
                Book a call
              </a>
            </li>
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-rule underline-offset-[5px] hover:decoration-ink"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={links.emailHref}
                className="text-ink underline decoration-rule underline-offset-[5px] hover:decoration-ink"
              >
                {links.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-sheet px-5 py-6 sm:px-7 sm:py-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
