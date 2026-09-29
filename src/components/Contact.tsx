import { site } from "@/content/content";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-line px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.22em] text-mint uppercase sm:text-xs">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-paper sm:text-5xl">
            Let’s talk systems.
          </h2>
          <p className="mt-5 max-w-lg text-base text-fog">
            Open to senior backend and cloud-native roles. Reach out by email,
            phone, or connect on LinkedIn / GitHub / Medium.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-8">
            <a
              href={`mailto:${site.email}`}
              className="font-display text-xl text-paper link-draw sm:text-2xl"
            >
              {site.email}
            </a>
            <a
              href={`tel:+91${site.phone}`}
              className="font-display text-xl text-paper link-draw sm:text-2xl"
            >
              {site.phoneDisplay}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm tracking-[0.14em] text-mist uppercase link-draw"
            >
              LinkedIn ↗
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm tracking-[0.14em] text-mist uppercase link-draw"
            >
              GitHub ↗
            </a>
            <a
              href={site.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm tracking-[0.14em] text-mist uppercase link-draw"
            >
              Medium ↗
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="mx-auto mt-24 max-w-6xl border-t border-line pt-8">
        <p className="font-mono text-[11px] tracking-wide text-fog">
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
      </footer>
    </section>
  );
}
