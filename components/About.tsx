import { about, site } from "@/lib/content";

const skillGroups = [
  { title: "Product", items: about.skills.product },
  { title: "AI and automation", items: about.skills.automation },
] as const;

export function About() {
  return (
    <section id="about" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-20">
        <div>
          <p className="text-sm font-medium tracking-wide text-signal uppercase">
            About
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.1rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-ink">
            {about.heading}
          </h2>
          <div className="mt-6 max-w-[38rem] space-y-4 text-base leading-relaxed text-quiet md:text-lg">
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 text-sm text-quiet">
            {site.location} · Finance graduate, IBA Karachi
          </p>
        </div>

        <div className="space-y-10 bg-sheet p-6 ring-1 ring-rule/90 md:pt-3 md:p-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-base font-medium text-ink">{group.title}</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {group.items.map((skill) => (
                  <li key={skill} className="text-sm text-quiet md:text-base">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
