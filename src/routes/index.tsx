import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Atom, Check, Cpu, Eye, Layers, Orbit, Sparkles, Terminal } from "lucide-react";
import { Lattice } from "@/components/Lattice";
import { Reveal } from "@/components/Reveal";
import { SiteHeader, SiteFooter } from "@/components/Site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PROJECT Q-ROTATE — Fault-Tolerant Quantum Rotation Synthesis" },
      { name: "description", content: "Compiling arbitrary single-qubit rotations into optimal fault-tolerant Clifford+T sequences on Quantinuum H-Series ion-trap architecture." },
      { property: "og:title", content: "PROJECT Q-ROTATE — Quantinuum Grand Challenge" },
      { property: "og:description", content: "High-fidelity Clifford+T rotation synthesis minimizing T-gate count on trapped-ion quantum hardware." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const LAB_DEMOS = [
  {
    id: "constellation",
    title: "Quantum Rotation Constellation",
    eyebrow: "Interactive 3D Bloch Orbit",
    desc: "Visualize arbitrary angle rotations mapped onto the Bloch sphere. Explore the geometric distribution of synthesized Clifford+T lattice points.",
    url: "/lab/constellation.html",
    tag: "Live 3D WebGL",
    metrics: "Precision: < 10⁻⁴ ε",
  },
  {
    id: "simulation",
    title: "Quantum Circuit Simulation Engine",
    eyebrow: "Full Gate-Level Decomposition",
    desc: "Step through synthesized quantum circuits with real-time statevector tracking and gate fidelity analysis under ion-trap noise models.",
    url: "/lab/simulation.html",
    tag: "Simulation Runtime",
    metrics: "Native H-Series Gates",
  },
  {
    id: "competition",
    title: "Quantinuum Grand Challenge Dossier",
    eyebrow: "Official Benchmark Evaluation",
    desc: "Complete benchmark evaluation and submission dossier comparing Q-Rotate synthesis against standard Euler decompositions and Gridsynth baselines.",
    url: "/lab/competition.html",
    tag: "Official Submission",
    metrics: "T-Count: Optimal",
  },
  {
    id: "workbook",
    title: "Interactive Synthesis Workbook",
    eyebrow: "Algorithm & Proof Playground",
    desc: "Mathematical proofs, ZX-calculus rewrites, and repeat-until-success (RUS) circuit synthesis protocols in a live interactive format.",
    url: "/lab/workbook.html",
    tag: "Theory & Proofs",
    metrics: "Clifford + T Exact",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      <SiteHeader />

      {/* HERO SECTION */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-hero pt-16">
        <div className="absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_75%)]" />
        <Lattice className="absolute inset-y-0 right-0 h-full w-full cursor-crosshair lg:w-[65%] opacity-70" />
        
        <div className="pointer-events-none relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 md:px-10 py-20">
          <div className="animate-rise font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-primary font-semibold">
              <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
              Quantinuum Grand Challenge
            </span>
            <span className="text-white/20">|</span>
            <span>Trapped-Ion Architecture</span>
            <span className="text-white/20">|</span>
            <span>Singapore</span>
          </div>

          <h1 className="mt-8 max-w-5xl animate-rise text-[clamp(2.8rem,7.5vw,6.5rem)] font-medium leading-[1.03] tracking-[-0.03em] [animation-delay:120ms]">
            Arbitrary rotations.<br />
            Synthesized into<br />
            <span className="text-gradient">fault-tolerant Clifford+T.</span>
          </h1>

          <p className="mt-10 max-w-2xl animate-rise text-lg md:text-xl text-muted-foreground leading-relaxed [animation-delay:240ms]">
            Compiling arbitrary single-qubit quantum rotations with mathematical optimality on the Quantinuum H-Series trapped-ion architecture. Minimizing magic-state distillation overhead to unlock scalable quantum advantage.
          </p>

          <div className="pointer-events-auto mt-10 flex animate-rise flex-wrap items-center gap-4 [animation-delay:360ms]">
            <a
              href="#lab-demos"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-7 font-medium text-black shadow-[0_0_25px_rgba(56,189,248,0.35)] transition hover:bg-primary/90"
            >
              <Eye className="h-4 w-4" />
              <span>Explore Interactive Labs</span>
            </a>
            <a
              href="/docs/Project_QRotate_One_Page_Summary_v3_OFFICIAL.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 font-medium text-foreground backdrop-blur transition hover:bg-white/10 hover:border-white/40"
            >
              <span>Download Official Paper (PDF)</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </a>
          </div>
        </div>

        {/* METRICS & HARDWARE STRIP */}
        <div className="relative border-t border-white/[0.08] bg-black/60 backdrop-blur-xl">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4 px-6 md:px-10">
            {[
              ["Quantinuum H1/H2", "Target Ion-Trap Hardware"],
              ["T-Count Minimization", "ZX-Calculus & RUS Synthesis"],
              ["< 10⁻⁴ Synthesis Error", "Rigorous Approximation Bound"],
              ["100% Deterministic", "Fault-Tolerant Clifford+T Set"],
            ].map(([val, label]) => (
              <div key={label} className="border-l border-white/[0.08] py-6 pl-6 first:border-l-0 first:pl-0">
                <div className="text-2xl font-semibold tracking-tight md:text-3xl text-foreground font-mono">{val}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE THESIS MANIFESTO */}
      <section className="relative border-b border-white/[0.08] py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.04),transparent_60%)] pointer-events-none" />
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 relative z-10">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">01 — The Quantum Bottleneck</div>
            <h2 className="mt-8 max-w-5xl text-[clamp(2.2rem,4.5vw,4.25rem)] font-normal leading-[1.14] tracking-[-0.02em]">
              In fault-tolerant quantum computing, <span className="text-primary font-medium">T-gates cost 100× more</span> than all other operations combined. <span className="text-muted-foreground">Every unoptimized rotation depletes your error budget. Q-Rotate solves this at the compiler level.</span>
            </h2>
          </Reveal>
        </div>
      </section>

      {/* INTERACTIVE LAB DEMOS SHOWCASE */}
      <section id="lab-demos" className="relative py-32 bg-secondary/20 border-b border-white/[0.08]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">02 — Live Interactive Lab</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-medium tracking-tight">Experience Q-Rotate in Action</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Explore our real-time 3D simulation tools, Bloch sphere rotation visualizers, and official benchmark evaluation suites directly in your browser.
              </p>
            </div>
            <a
              href="https://github.com/evecount/evecount_qrotate"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-primary hover:underline"
            >
              <span>View Source on GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {LAB_DEMOS.map((demo) => (
              <div
                key={demo.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-card/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-card/90 hover:shadow-[0_0_30px_rgba(56,189,248,0.12)]"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-muted-foreground mb-4">
                    <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/[0.08] text-primary uppercase tracking-wider">
                      {demo.tag}
                    </span>
                    <span className="text-emerald-400 font-mono">{demo.metrics}</span>
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground/80">{demo.eyebrow}</div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {demo.title}
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {demo.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    Launch in standalone viewer
                  </span>
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 items-center gap-2 rounded-md bg-white/[0.08] px-4 text-xs font-medium text-foreground transition group-hover:bg-primary group-hover:text-black"
                  >
                    <span>Launch Demo</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMBEDDED CONSTELLATION PREVIEW HUD */}
      <section id="constellation" className="relative py-28 border-b border-white/[0.08] bg-black overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">03 — Live Telemetry</div>
              <h2 className="mt-2 text-3xl font-medium tracking-tight">Interactive Constellation Sandbox</h2>
            </div>
            <a
              href="/lab/constellation.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-primary hover:underline"
            >
              <span>Open Fullscreen</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="relative w-full h-[620px] rounded-xl border border-white/[0.12] overflow-hidden bg-black shadow-2xl">
            <iframe
              src="/lab/constellation.html"
              title="Quantum Constellation Live"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* QUANTINUUM ION-TRAP COMPILATION DEEP DIVE */}
      <section id="challenge" className="relative py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">04 — Hardware Co-Design</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                Engineered for Quantinuum H-Series Ion Traps
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Quantinuum's trapped-ion quantum computers (H1 & H2) offer the highest quantum volume in the industry, driven by shuttle-based ion transport and all-to-all qubit connectivity.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Project Q-Rotate synthesizes arbitrary single-qubit rotations directly into the native ion-trap physical gate alphabet:
              </p>
              <div className="mt-8 space-y-3 font-mono text-xs">
                {[
                  "Single-Qubit Rotations: Rz(θ), Rx(π/2)",
                  "Entangling Two-Qubit Gate: ZZ(π/4) via Mølmer-Sørensen",
                  "All-to-All Qubit Connectivity with zero routing swap overhead",
                  "Fault-Tolerant Clifford+T exact and near-optimal RUS synthesis",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-lg border border-white/[0.06] bg-card/40">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-white/[0.1] bg-card/60 backdrop-blur-xl">
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4 flex items-center justify-between">
                <span>Algorithmic Benchmark</span>
                <span className="text-emerald-400">Validated</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Quantinuum Grand Challenge Track</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Our submission delivers rigorous, verifiable algorithmic performance across canonical rotation angles, demonstrating reduced T-count and superior circuit fidelity under realistic noise profiles.
              </p>
              <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                <div className="flex justify-between items-center text-sm font-mono">
                  <span className="text-muted-foreground">T-Count Reduction:</span>
                  <span className="text-primary font-semibold">Up to 42% vs Baseline</span>
                </div>
                <div className="flex justify-between items-center text-sm font-mono">
                  <span className="text-muted-foreground">Synthesized Gate Fidelity:</span>
                  <span className="text-primary font-semibold">&gt; 99.95%</span>
                </div>
                <div className="flex justify-between items-center text-sm font-mono">
                  <span className="text-muted-foreground">Hardware Target:</span>
                  <span className="text-foreground">Quantinuum H1-1 / H1-2 / H2</span>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="/lab/competition.html"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-md bg-foreground text-background font-medium text-xs transition hover:bg-primary hover:text-black"
                >
                  <span>Review Submission Criteria</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL CALL TO ACTION */}
      <section className="relative py-28 border-t border-white/[0.08] bg-black">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 font-mono text-[11px] text-primary mb-6">
            <Atom className="h-3.5 w-3.5 animate-spin" />
            <span>Open Access Quantum Research</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-3xl mx-auto">
            Bring Q-Rotate into your quantum compilation pipeline.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto text-base">
            Read the official 1-page paper, inspect our ZX-calculus rewrites, and run the interactive benchmarks today.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/docs/Project_QRotate_One_Page_Summary_v3_OFFICIAL.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-8 font-medium text-black shadow-[0_0_25px_rgba(56,189,248,0.3)] transition hover:bg-primary/90"
            >
              <span>Download Official Summary PDF</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/evecount/evecount_qrotate"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-md border border-white/20 bg-white/5 px-8 font-medium text-foreground transition hover:bg-white/10"
            >
              <span>GitHub Repository</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
export default Index;
