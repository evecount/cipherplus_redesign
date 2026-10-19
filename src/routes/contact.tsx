import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section, meta } from "@/components/Site";
import { InquiryForm } from "@/components/InquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact Sales — CIPHERPLUS", "Talk to CIPHERPLUS about post-quantum readiness assessments, enterprise deployment and licensing."),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="Contact" title={<>Talk to the team<br /><span className="text-gradient">behind A7970.</span></>} intro="Enterprise licensing, readiness assessments, deployments or product support — we respond within one business day.">
      <Section label="Enquiry">
        <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
          <InquiryForm kind="contact" cta="Send enquiry" />
          <div className="space-y-10 text-sm">
            {[["Email", "support@cipherplus.io"], ["Headquarters", "Singapore"], ["Product support", "CipherKem and CipherSign customers: include your Microsoft Store order ID."]].map(([k, v]) => (
              <div key={k} className="border-t pt-5"><div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{k}</div><p className="mt-3 leading-relaxed">{v}</p></div>
            ))}
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
