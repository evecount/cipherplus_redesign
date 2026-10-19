import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Atom, BookOpen, Cpu, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import logo from "@/assets/qrotate_logo.svg";
import { Lattice } from "@/components/Lattice";

const nav = [
  ["Architecture", "/products"],
  ["Interactive Lab", "/#lab-demos"],
  ["Benchmarks", "/validation"],
  ["Constellation", "/#constellation"],
  ["Grand Challenge", "/#challenge"],
  ["Whitepaper", "/brief"],
] as const;

export function SiteHeader() {
  return (
    <header className="print:hidden fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-background/85 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Project Q-Rotate Logo" className="h-8 w-auto transition-transform duration-500 group-hover:rotate-45" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.25em] text-foreground flex items-center gap-2">
              Q-ROTATE <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">QUANTUM</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-muted-foreground uppercase">Quantinuum Ion-Trap Synthesis</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground md:flex">
          {nav.map(([l, h]) => (
            <a key={h} href={h} className="transition-colors hover:text-primary">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/docs/Project_QRotate_One_Page_Summary_v3_OFFICIAL.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-4 text-xs font-medium text-primary shadow-[0_0_15px_rgba(56,189,248,0.2)] transition hover:bg-primary hover:text-background"
          >
            <span>Official Summary</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

const cols: { title: string; links: [string, string, boolean?][] }[] = [
  {
    title: "Quantum Compiler",
    links: [
      ["Clifford+T Decomposition", "/products"],
      ["Arbitrary Angle Synthesis", "/products"],
      ["ZX-Calculus Optimization", "/validation"],
      ["Trapped-Ion Native Gate Set", "/products"],
    ],
  },
  {
    title: "Interactive Labs",
    links: [
      ["Rotation Constellation", "/lab/constellation.html", true],
      ["Circuit Simulation Engine", "/lab/simulation.html", true],
      ["Grand Challenge Dossier", "/lab/competition.html", true],
      ["Interactive Workbook", "/lab/workbook.html", true],
      ["Pitch Interactive Demo", "/lab/pitch.html", true],
    ],
  },
  {
    title: "Research & Benchmarks",
    links: [
      ["Official One-Pager (PDF)", "/docs/Project_QRotate_One_Page_Summary_v3_OFFICIAL.pdf", true],
      ["T-Count Minimization", "/validation"],
      ["Error Budget & Fidelity", "/validation"],
      ["Quantinuum H1/H2 Specs", "/brief"],
    ],
  },
  {
    title: "Consortium & Access",
    links: [
      ["Masterclass & Executive Lab", "/company"],
      ["Institutional Partnerships", "/contact"],
      ["IEEE Lecture Notes", "/insights"],
      ["GitHub Repository", "https://github.com/evecount/evecount_qrotate", true],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="print:hidden border-t border-white/[0.08] bg-black/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(56,189,248,0.06),transparent_70%)] pointer-events-none" />
      <div className="mx-auto max-w-[1440px] px-6 pt-20 md:px-10 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Q-Rotate" className="h-8 w-auto" />
              <span className="text-sm font-semibold tracking-[0.25em]">Q-ROTATE</span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Fault-tolerant quantum rotation synthesis for trapped-ion architectures. Minimizing $T$-count, eliminating gate overhead, and scaling quantum algorithms to sovereign utility.
            </p>
            <div className="mt-6 flex items-center gap-2 font-mono text-[11px] text-emerald-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Quantinuum Grand Challenge Submission
            </div>
            <a
              href="/docs/Project_QRotate_One_Page_Summary_v3_OFFICIAL.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex h-10 items-center gap-2 rounded-md bg-foreground px-4 text-xs font-medium text-background transition hover:bg-primary hover:text-black"
            >
              Download Official Paper <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">{c.title}</div>
              <ul className="mt-5 space-y-3 text-sm">
                {c.links.map(([l, h, ext]) => (
                  <li key={l}>
                    <a
                      href={h}
                      target={ext ? "_blank" : undefined}
                      rel={ext ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-foreground"
                    >
                      {l}
                      {ext && <ArrowUpRight className="h-3 w-3 text-muted-foreground/60" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-6 border-t border-white/[0.08] py-8 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:grid-cols-3">
          <div>PROJECT Q-ROTATE · Singapore</div>
          <div className="md:text-center">Quantinuum Ion-Trap H-Series Compilation</div>
          <div className="flex gap-6 md:justify-end">
            <span>Clifford + T</span>
            <span>© 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="relative overflow-hidden border-b bg-hero pt-14 print:hidden">
        <div className="absolute inset-0 grid-lines opacity-50 [mask-image:radial-gradient(ellipse_at_80%_30%,black,transparent_70%)]" />
        <Lattice className="absolute inset-y-0 right-0 h-full w-full opacity-70 lg:w-[55%]" />
        <div className="pointer-events-none relative mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-36">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{eyebrow}</div>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.6rem,6vw,5.5rem)] font-medium leading-[1.04] tracking-[-0.02em]">{title}</h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">{intro}</p>
        </div>
      </section>
      {children}
      <SiteFooter />
    </div>
  );
}

export function Section({ label, title, children }: { label: string; title?: ReactNode; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10">
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
      {title && <h2 className="mt-5 max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.02em]">{title}</h2>}
      <div className="mt-14">{children}</div>
    </section>
  );
}

export function CtaBand({ title = "Start with a cryptographic risk audit.", to = "/contact", label = "Talk to our team" }: { title?: string; to?: "/contact" | "/briefings"; label?: string }) {
  return (
    <section className="px-4 pb-4 md:px-6 md:pb-6">
      <div className="relative overflow-hidden rounded-xl bg-ink px-8 py-20 text-ink-foreground md:px-16">
        <Lattice className="absolute inset-0 h-full w-full opacity-40" />
        <div className="pointer-events-none relative flex flex-wrap items-end justify-between gap-8">
          <h2 className="max-w-2xl text-[clamp(2rem,4.5vw,4rem)] font-medium leading-[1.05] tracking-[-0.02em]">{title}</h2>
          <Link to={to} className="pointer-events-auto inline-flex h-12 items-center gap-2 rounded-sm bg-primary px-6 font-medium text-primary-foreground shadow-glow">{label} <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
