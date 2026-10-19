import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Printer } from "lucide-react";
import { PageShell, Section, meta } from "@/components/Site";
import { InquiryForm } from "@/components/InquiryForm";
import { NistBadge } from "@/components/NistBadge";

export const Route = createFileRoute("/brief")({
  head: () => meta("Executive Brief — Post-Quantum Readiness | CIPHERPLUS", "A one-page executive brief on quantum risk, NIST timelines and the CIPHERPLUS readiness programme."),
  component: Page,
});

function Page() {
  const [open, setOpen] = useState(false);
  return (
    <PageShell eyebrow="Executive brief" title={<>The one-page brief<br /><span className="text-gradient">for your board.</span></>} intro="Quantum risk, the NIST timeline and how to start — on a single page you can print or save as PDF.">
      {!open ? (
        <Section label="Get the brief">
          <InquiryForm kind="brief" cta="Open the brief" showMessage={false} onDone={() => setOpen(true)} />
        </Section>
      ) : (
        <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-10">
          <div className="mb-6 flex justify-end print:hidden">
            <button onClick={() => window.print()} className="inline-flex h-11 items-center gap-2 rounded-sm bg-foreground px-5 text-sm font-medium text-background hover:bg-primary"><Printer className="h-4 w-4" /> Print / save as PDF</button>
          </div>
          <article id="brief" className="mx-auto max-w-[800px] rounded-lg border bg-card p-12 print:border-0 print:p-0">
            <div className="flex items-start justify-between"><div className="text-sm font-semibold tracking-[0.2em]">CIPHERPLUS</div><NistBadge size="sm" /></div>
            <h1 className="mt-10 text-4xl font-medium tracking-tight">Post-quantum readiness: executive brief</h1>
            {[["The threat", "Adversaries are collecting encrypted data today to decrypt once quantum computers mature — “harvest now, decrypt later”. Data with a long shelf-life is already exposed."],
              ["The timeline", "NIST finalised FIPS 203 (ML-KEM) and FIPS 204 (ML-DSA) in 2024. RSA and ECC are on a path to deprecation. Large migrations take years."],
              ["The regulatory angle", "Regulators including MAS expect sound cryptographic risk management. A documented post-quantum roadmap is becoming a board-level expectation."],
              ["Our credentials", "CIPHERPLUS holds NIST CAVP certificate A7970 for ML-KEM and ML-DSA — first in ASEAN. Founded by a former A*STAR principal scientist."],
              ["How to start", "Stage 1 (weeks 1–4): cryptographic risk audit, migration roadmap and board presentation. Stage 2 (weeks 5–12): forward-deployed production integration."]].map(([h, p]) => (
              <div key={h} className="mt-8 grid gap-2 border-t pt-5 md:grid-cols-[180px_1fr]"><h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">{h}</h2><p className="leading-relaxed">{p}</p></div>
            ))}
            <p className="mt-10 border-t pt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">support@cipherplus.io · cipherplus.io · Singapore</p>
          </article>
          <p className="mt-8 text-center text-sm text-muted-foreground print:hidden">Want this walked through in person? <Link to="/briefings" className="text-primary">Request a private briefing</Link></p>
        </section>
      )}
    </PageShell>
  );
}
