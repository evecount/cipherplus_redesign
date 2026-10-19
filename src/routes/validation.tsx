import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageShell, Section, CtaBand, meta } from "@/components/Site";
import { NistBadge } from "@/components/NistBadge";
import { NIST_URL } from "@/lib/content";

export const Route = createFileRoute("/validation")({
  head: () => meta("NIST CAVP Certificate A7970 — CIPHERPLUS Validation", "Independent NIST validation of CIPHERPLUS ML-KEM and ML-DSA implementations, and what it means for your auditors."),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="Validation" title={<>Certificate A7970.<br /><span className="text-gradient">Check it yourself.</span></>} intro="Our ML-KEM and ML-DSA implementations were independently tested under the NIST Cryptographic Algorithm Validation Program.">
      <Section label="The record">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border">
            {[["Certificate", "A7970"], ["Program", "NIST CAVP"], ["Validated", "28 Jan 2026"], ["Algorithms", "ML-KEM · ML-DSA"], ["Standards", "FIPS 203 · FIPS 204"], ["Recognition", "First in ASEAN"]].map(([k, v]) => (
              <div key={k} className="bg-background p-6"><dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{k}</dt><dd className="mt-2 text-lg font-medium">{v}</dd></div>
            ))}
          </dl>
          <div className="flex flex-col justify-between gap-8 border-t pt-6">
            <NistBadge size="lg" />
            <p className="leading-relaxed text-muted-foreground">The certificate is published by NIST, not by us. Anyone — your auditors, procurement or regulator — can verify it on the official NIST website.</p>
            <a href={NIST_URL} target="_blank" rel="noreferrer" className="inline-flex h-12 w-fit items-center gap-2 rounded-sm bg-foreground px-6 text-sm font-medium text-background transition hover:bg-primary">View on nist.gov <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
      </Section>
      <Section label="Plain English" title="What CAVP validation means for your auditors.">
        <div className="grid gap-10 md:grid-cols-3">
          {[["What it is", "NIST tests a specific implementation against its published standard using thousands of known-answer vectors, then lists it publicly."], ["What it proves", "That our ML-KEM and ML-DSA code computes the algorithms exactly as FIPS 203 and FIPS 204 specify — not an approximation."], ["Why it matters", "Algorithm validation is the foundation regulated buyers look for, and a prerequisite on the path to module-level certification."]].map(([k, v]) => (
            <div key={k} className="border-t pt-6"><h3 className="text-xl font-medium">{k}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{v}</p></div>
          ))}
        </div>
        <ul className="mt-14 grid gap-3 text-sm sm:grid-cols-2">
          {["Cite certificate A7970 in vendor risk questionnaires", "Link the nist.gov record in procurement files", "Map to FIPS 203 / FIPS 204 in your migration roadmap", "Ask us for the validated configuration details"].map((t) => <li key={t} className="flex gap-2.5"><Check className="h-4 w-4 text-success" />{t}</li>)}
        </ul>
      </Section>
      <CtaBand title="Need validation evidence for procurement?" label="Request documents" />
    </PageShell>
  );
}
