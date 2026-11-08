import { about } from "@/lib/content";

const skillGroups = [
  { title: "Product", items: about.skills.product },
  { title: "AI and automation", items: about.skills.automation },
] as const;

export function About() {
  return (
    <section id="about" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-20">
        <div>
          <h2 className="font-display text-[clamp(2.1rem,4vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.03em] text-ink">
            {about.heading}
          </h2>
          <div className="mt-6 max-w-[38rem] space-y-4 text-base leading-relaxed text-quiet md:text-lg">
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="space-y-10 md:pt-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-base font-medium text-ink">{group.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {group.items.map((skill) => (
                  <li key={skill} className="text-base text-quiet">
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
