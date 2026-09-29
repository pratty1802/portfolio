import { highlights, work } from "@/content/content";
import { Reveal } from "@/components/Reveal";

export function Work() {
  return (
    <section id="work" className="relative border-t border-line px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.22em] text-mint uppercase sm:text-xs">
            Selected work
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-paper sm:text-5xl">
            Systems that scale.
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {work.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="group relative py-10 transition-colors sm:py-12">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -mx-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:-mx-8"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(61,255,200,0.06), transparent 55%)",
                  }}
                />
                <div className="relative grid gap-6 lg:grid-cols-[1fr_1.35fr] lg:gap-12">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.16em] text-fog uppercase">
                      {String(index + 1).padStart(2, "0")} · {item.subtitle}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-paper transition-colors group-hover:text-mint sm:text-3xl">
                      {item.title}
                    </h3>
                    {item.links && item.links.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-4">
                        {item.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs tracking-[0.14em] text-mist uppercase link-draw"
                          >
                            {link.label} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-base leading-relaxed text-fog sm:text-lg">
                      {item.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="font-mono text-[11px] tracking-wide text-mist/80"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <p className="font-mono text-[11px] tracking-[0.22em] text-fog uppercase">
            Also
          </p>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="border-t border-line pt-5">
                <h3 className="font-display text-xl font-semibold text-paper">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fog sm:text-base">
                  {item.description}
                </p>
                {item.links && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs tracking-[0.14em] text-mist uppercase link-draw"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
