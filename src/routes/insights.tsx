import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, Section, CtaBand, meta } from "@/components/Site";
import { articles } from "@/lib/content";

export const Route = createFileRoute("/insights")({
  head: () => meta("Insights — Post-Quantum Briefings | CIPHERPLUS", "Plain-English briefings on quantum risk, the NIST migration timeline and MAS TRM for security leaders."),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="Insights" title={<>Quantum risk,<br /><span className="text-gradient">in plain English.</span></>} intro="Short briefings for CISOs, CTOs and boards.">
      <Section label="Latest">
        <div className="divide-y border-y">
          {articles.map((a) => (
            <Link key={a.slug} to="/insights/$slug" params={{ slug: a.slug }} className="group grid gap-4 py-10 md:grid-cols-[140px_1fr_40px]">
              <span className="font-mono text-xs text-muted-foreground">{new Date(a.date).toLocaleDateString("en-SG", { day: "numeric", month: "short", year: "numeric" })} · {a.read}</span>
              <div><h3 className="text-2xl font-medium tracking-tight transition group-hover:text-primary md:text-3xl">{a.title}</h3><p className="mt-2 text-muted-foreground">{a.dek}</p></div>
              <ArrowRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand title="Want this briefing in person?" to="/briefings" label="Request a briefing" />
    </PageShell>
  );
}
