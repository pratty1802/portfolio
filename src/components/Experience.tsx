import { experience } from "@/content/content";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-line px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.22em] text-mint uppercase sm:text-xs">
            Experience
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-paper sm:text-5xl">
            Where I’ve shipped.
          </h2>
        </Reveal>

        <ol className="mt-14 space-y-0">
          {experience.map((job, index) => (
            <Reveal key={`${job.company}-${job.role}`} delay={index * 0.05}>
              <li className="grid gap-4 border-t border-line py-10 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-10 sm:py-12">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.14em] text-fog uppercase">
                    {job.dates ?? "Program"}
                  </p>
                  {job.location && (
                    <p className="mt-2 font-mono text-[11px] text-mist/70">
                      {job.location}
                    </p>
                  )}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-paper sm:text-2xl">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-sm text-mint sm:text-base">{job.role}</p>
                  <ul className="mt-5 space-y-3">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm leading-relaxed text-fog sm:text-base"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
