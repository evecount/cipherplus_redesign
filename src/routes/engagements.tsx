import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageShell, Section, CtaBand, meta } from "@/components/Site";

export const Route = createFileRoute("/engagements")({
  head: () => meta("Enterprise Engagements — CIPHERPLUS", "From cryptographic risk audit to production post-quantum deployment in twelve weeks, delivered by forward-deployed engineers."),
  component: Page,
});

const stages = [
  { n: "Stage 01", weeks: "Weeks 1–4", name: "Cryptographic risk audit", desc: "Discovery and inventory of your legacy RSA and ECC cryptography, mapped against the NIST post-quantum timeline.", out: ["Enterprise threat-vector report", "NIST migration roadmap", "Board-ready executive presentation"], gate: "You sign off the proof-of-concept scope to advance." },
  { n: "Stage 02", weeks: "Weeks 5–12", name: "Forward-deployed production integration", desc: "Our engineers embed CipherSign and CIPHERPLUS post-quantum libraries into your staging and production environments.", out: ["Hardened cryptographic microservices", "Hardware or software HSM integration", "Trained internal security team"], gate: "Ongoing maintenance and support thereafter." },
];

function Page() {
  return (
    <PageShell eyebrow="Engagements" title={<>From risk map to<br /><span className="text-gradient">production in 12 weeks.</span></>} intro="Not a licence and a manual. A two-stage programme delivered by our scientists and forward-deployed engineers inside your environment.">
      <Section label="Two-stage programme">
        <div className="grid gap-px overflow-hidden rounded-lg border bg-border lg:grid-cols-2">
          {stages.map((s) => (
            <article key={s.n} className="flex flex-col bg-background p-10">
              <div className="flex justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground"><span className="text-primary">{s.n}</span><span>{s.weeks}</span></div>
              <h3 className="mt-6 text-3xl font-medium tracking-tight">{s.name}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Deliverables</div>
              <ul className="mt-4 space-y-2.5 text-sm">{s.out.map((o) => <li key={o} className="flex gap-2.5"><Check className="h-4 w-4 text-success" strokeWidth={1.5} />{o}</li>)}</ul>
              <p className="mt-auto pt-10 text-sm text-muted-foreground">→ {s.gate}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section label="Architect certification" title="Hands-on training for your senior security architects.">
        <div className="grid gap-10 md:grid-cols-3">
          {[["Format", "3–5 day immersion or 4-week hybrid lab, 5–10 architects per cohort."], ["Curriculum", "Integrating ML-KEM key encapsulation and ML-DSA signatures into existing PKI, TLS and data-at-rest pipelines."], ["Led by", "Curriculum designed by our founder and lead scientist, delivered with our engineering team."]].map(([k, v]) => (
            <div key={k} className="border-t pt-6"><div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{k}</div><p className="mt-4 leading-relaxed">{v}</p></div>
          ))}
        </div>
      </Section>
      <CtaBand title="Scope your readiness assessment." />
    </PageShell>
  );
}
