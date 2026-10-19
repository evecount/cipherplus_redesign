import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section, meta } from "@/components/Site";
import { InquiryForm } from "@/components/InquiryForm";

export const Route = createFileRoute("/briefings")({
  head: () => meta("Private CISO Briefings — CIPHERPLUS", "Invitation-only executive roundtables on post-quantum risk, MAS TRM and NIST migration timelines for CISOs and CTOs."),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="Executive briefings" title={<>Closed-door.<br /><span className="text-gradient">Chatham House Rule.</span></>} intro="Invitation-only 90-minute breakfasts and dinners for 8–10 security leaders, on what quantum risk means for your board.">
      <Section label="Agenda" title="What we cover in the room.">
        <div className="grid gap-10 md:grid-cols-3">
          {[["Board-level liability", "How quantum risk lands on the risk register, and who is accountable."], ["Regulatory timelines", "MAS Technology Risk Management guidelines and NIST post-quantum migration mandates."], ["Harvest now, decrypt later", "How state actors collect encrypted data today, and which of your assets are already exposed."]].map(([k, v], i) => (
            <div key={k} className="border-t pt-6"><span className="font-mono text-xs text-muted-foreground">0{i + 1}</span><h3 className="mt-4 text-xl font-medium">{k}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{v}</p></div>
          ))}
        </div>
      </Section>
      <Section label="Request an invitation" title="For group CISOs, CTOs, risk officers and IT directors.">
        <InquiryForm kind="briefing" cta="Request invitation" />
      </Section>
    </PageShell>
  );
}
