import { site } from "@/content/content";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-line/60 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-mono text-xs tracking-[0.18em] text-mist uppercase link-draw"
        >
          {site.name.split(" ")[0]}
        </a>
        <nav className="flex items-center gap-5 sm:gap-7">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] tracking-[0.14em] text-fog uppercase link-draw sm:text-xs"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
