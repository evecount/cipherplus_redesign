import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section, CtaBand, meta } from "@/components/Site";
import { ArrowUpRight, Award, BookOpen, Cpu, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/company")({
  head: () =>
    meta(
      "Consortium & Leadership — Project Q-Rotate",
      "Founded by Gwen Lim and Benjamin Lim, Project Q-Rotate compiles arbitrary single-qubit quantum rotations into optimal Clifford+T sequences."
    ),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Consortium"
      title={
        <>
          Pioneering Fault-Tolerant<br />
          <span className="text-gradient">Quantum Synthesis.</span>
        </>
      }
      intro="Project Q-Rotate is a Singapore-led deep-tech initiative developing optimal quantum compilation algorithms for trapped-ion hardware."
    >
      <Section label="Architects" title="Quantum systems engineering & mathematical compilation.">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="border-t border-white/[0.08] pt-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">Founder & Systems Architect</div>
            <h3 className="mt-4 text-3xl font-medium tracking-tight">Gwen Lim</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Founder of EveCount & Sovereign Systems. Pioneering autonomous agent orchestration, hardware-software co-design, and sovereign deep-tech infrastructure. Lead architect behind Project Q-Rotate's Quantinuum Grand Challenge initiative.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px]">
              <span className="rounded-sm border border-white/[0.08] bg-card px-2.5 py-1">EveCount Sovereign OS</span>
              <span className="rounded-sm border border-white/[0.08] bg-card px-2.5 py-1">IEEE Guest Lecturer</span>
              <span className="rounded-sm border border-white/[0.08] bg-card px-2.5 py-1">NTU Hackathon Judge</span>
            </div>
          </div>
          <div className="border-t border-white/[0.08] pt-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">Chief Architect & Quantum Systems</div>
            <h3 className="mt-4 text-3xl font-medium tracking-tight">Benjamin Lim</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Chief Architect at Sedilix. Expert in post-quantum cryptographic primitives, fault-tolerant compiler architectures, and high-assurance sovereign computing pipelines.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px]">
              <span className="rounded-sm border border-white/[0.08] bg-card px-2.5 py-1">Sedilix Cryptographic Systems</span>
              <span className="rounded-sm border border-white/[0.08] bg-card px-2.5 py-1">ZX-Calculus & RUS Synthesis</span>
              <span className="rounded-sm border border-white/[0.08] bg-card px-2.5 py-1">Quantinuum Track Lead</span>
            </div>
          </div>
        </div>
      </Section>

      <Section label="Mission & Sovereign Foundation" title="Accelerating the arrival of fault-tolerant quantum utility.">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-lg border border-white/[0.08] bg-card p-8">
            <div className="font-mono text-[11px] uppercase tracking-widest text-primary mb-3">01 · Minimizing Magic States</div>
            <h4 className="text-xl font-semibold mb-3">T-Count Reduction</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Magic-state distillation consumes up to 99% of surface-code physical qubits. Q-Rotate slashes this overhead at compile time.
            </p>
          </div>
          <div className="rounded-lg border border-white/[0.08] bg-card p-8">
            <div className="font-mono text-[11px] uppercase tracking-widest text-primary mb-3">02 · Hardware Co-Design</div>
            <h4 className="text-xl font-semibold mb-3">Trapped-Ion Native</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tailored for Quantinuum H1 & H2 processors, leveraging shuttle transport, all-to-all connectivity, and virtual Z-phase tracking.
            </p>
          </div>
          <div className="rounded-lg border border-white/[0.08] bg-card p-8">
            <div className="font-mono text-[11px] uppercase tracking-widest text-primary mb-3">03 · Open Reproducibility</div>
            <h4 className="text-xl font-semibold mb-3">Verifiable Science</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every benchmark is backed by open-source code, mathematical proofs, and interactive browser-based simulation sandboxes.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow="Quantum Consortium"
        title="Explore our official submission and research dossiers."
        buttonText="Download Official Summary (PDF)"
        buttonHref="/docs/Project_QRotate_One_Page_Summary_v3_OFFICIAL.pdf"
      />
    </PageShell>
  );
}
export default Page;
