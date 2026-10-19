import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, Section, CtaBand, meta } from "@/components/Site";
import { industries } from "@/lib/content";

export const Route = createFileRoute("/industries")({
  head: () => meta("Industries — CIPHERPLUS Post-Quantum Security", "Post-quantum cryptography for financial services, defense and CII, telecom, healthcare and advanced manufacturing."),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="Industries" title={<>Built for sectors where<br /><span className="text-gradient">data must outlive decades.</span></>} intro="Five regulated sectors face immediate exposure to “harvest now, decrypt later” attacks. Each needs a different migration path.">
      <Section label="Sector playbooks">
        <div className="divide-y border-y">
          {industries.map((i) => (
            <Link key={i.slug} to="/industries/$slug" params={{ slug: i.slug }} className="group grid gap-8 py-12 transition hover:bg-secondary/40 lg:grid-cols-[80px_1.2fr_2fr_40px]">
              <span className="font-mono text-xs text-muted-foreground">{i.n}</span>
              <h3 className="text-2xl font-medium tracking-tight md:text-3xl">{i.name}</h3>
              <dl className="grid gap-6 text-sm sm:grid-cols-3">
                {[["Mandate", i.mandate], ["Exposure", i.risk], ["CIPHERPLUS", i.fix]].map(([k, v]) => (
                  <div key={k}><dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{k}</dt><dd className={`mt-3 leading-relaxed ${k === "CIPHERPLUS" ? "text-foreground" : "text-muted-foreground"}`}>{v}</dd></div>
                ))}
              </dl>
              <ArrowRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand title="See where your sector stands on the NIST timeline." />
    </PageShell>
  );
}
