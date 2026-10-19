import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Section, CtaBand, meta } from "@/components/Site";

export const Route = createFileRoute("/security")({
  head: () => meta("Security at CIPHERPLUS — Trust Overview", "How CIPHERPLUS products handle your data, our offline and air-gap design, and how to report a vulnerability."),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="Security" title={<>Your data never<br /><span className="text-gradient">has to leave your machine.</span></>} intro="An overview for security, procurement and risk teams evaluating CIPHERPLUS.">
      <Section label="How our products handle data">
        <div className="grid gap-10 md:grid-cols-3">
          {[["Fully offline", "CipherKem and CipherSign encrypt, sign and verify on the device. Files are not uploaded to us to be processed."], ["Air-gap ready", "Enterprise libraries are designed to run in isolated networks with zero external foreign dependencies."], ["Validated algorithms", "ML-KEM and ML-DSA implementations independently validated by NIST under certificate A7970."]].map(([k, v]) => (
            <div key={k} className="border-t pt-6"><h3 className="text-xl font-medium">{k}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{v}</p></div>
          ))}
        </div>
      </Section>
      <Section label="For procurement" title="Documents available on request.">
        <ul className="divide-y border-y">
          {["Security overview", "Validation certificate details", "Product architecture summary", "Vendor questionnaire responses"].map((d) => (
            <li key={d} className="flex items-center justify-between py-5"><span>{d}</span><Link to="/contact" className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">Request</Link></li>
          ))}
        </ul>
      </Section>
      <Section label="Responsible disclosure" title="Found a vulnerability? Tell us.">
        <div className="max-w-2xl space-y-4 leading-relaxed text-muted-foreground">
          <p>Email <a className="text-foreground underline" href="mailto:support@cipherplus.io?subject=Security%20report">support@cipherplus.io</a> with the subject “Security report”, a description and steps to reproduce.</p>
          <p>Please give us reasonable time to investigate before public disclosure. We will acknowledge your report and keep you updated.</p>
        </div>
      </Section>
      <CtaBand title="Questions from your risk team?" />
    </PageShell>
  );
}
