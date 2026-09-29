import { site } from "@/content/content";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="relative border-t border-line px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.22em] text-mint uppercase sm:text-xs">
            About
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-paper sm:text-5xl">
            Cloud-native backends. Clear systems thinking.
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-fog sm:text-lg">
            {site.about}
          </p>
          <p className="mt-6 font-mono text-xs tracking-wide text-mist">
            {site.education}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
