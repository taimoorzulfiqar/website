import { Reveal } from "@/components/Reveal";
import { about } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-16">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
              About
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
              {about.heading}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-fg-muted md:text-lg">
              {about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-fg-muted">
                  Product
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {about.skills.product.map((skill) => (
                    <li
                      key={skill}
                      className="border border-line px-3 py-1.5 text-sm text-fg"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-fg-muted">
                  AI & automation
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {about.skills.automation.map((skill) => (
                    <li
                      key={skill}
                      className="border border-line px-3 py-1.5 text-sm text-fg"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
