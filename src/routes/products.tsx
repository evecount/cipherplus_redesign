import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell, Section, CtaBand, meta } from "@/components/Site";
import cipherkemBadge from "@/assets/cipherkem-badge.png.asset.json";
import ciphersignBadge from "@/assets/ciphersign-badge.png.asset.json";

export const Route = createFileRoute("/products")({
  head: () => meta("Products — CipherKem, CipherSign & PQC Libraries | CIPHERPLUS", "NIST-validated ML-KEM and ML-DSA: desktop apps on the Microsoft Store and enterprise post-quantum libraries."),
  component: Page,
});

const apps = [
  { name: "CipherKem", std: "FIPS 203 · ML-KEM", badge: cipherkemBadge.url, desc: "Quantum-safe file and folder encryption for Windows, fully offline.", store: "https://apps.microsoft.com/detail/9p7hgm332pkd?hl=en-US&gl=SG" },
  { name: "CipherSign", std: "FIPS 204 · ML-DSA", badge: ciphersignBadge.url, desc: "Quantum-safe document signing for Windows, with free verification.", store: "https://apps.microsoft.com/detail/9nrv6zr1wffk?hl=en-US&gl=SG" },
];

function Page() {
  return (
    <PageShell eyebrow="Products" title={<>From the desktop<br /><span className="text-gradient">to the data centre.</span></>} intro="Ready-to-use Windows apps for teams today, and validated libraries for enterprise systems tomorrow.">
      <Section label="Desktop apps · Microsoft Store">
        <div className="grid gap-16 md:grid-cols-2">
          {apps.map((a) => (
            <article key={a.name} className="border-t pt-8">
              <div className="flex items-center gap-5"><img src={a.badge} alt={`${a.name} badge`} className="h-20 w-auto" /><div><h3 className="text-3xl font-medium tracking-tight">{a.name}</h3><div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{a.std}</div></div></div>
              <p className="mt-6 text-muted-foreground">{a.desc}</p>
              <a href={a.store} target="_blank" rel="noreferrer" className="mt-8 inline-flex h-11 items-center gap-2 rounded-sm bg-foreground px-5 text-sm font-medium text-background transition hover:bg-primary">Microsoft Store <ArrowUpRight className="h-4 w-4" /></a>
            </article>
          ))}
        </div>
      </Section>
      <Section label="Enterprise" title="Libraries and modules for your infrastructure.">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {[["PQC libraries", "NIST-validated ML-KEM and ML-DSA for integration into your own systems."], ["Post-quantum TLS", "Drop-in quantum-safe transport for existing services."], ["Code & firmware signing", "Quantum-resistant signing and secure-boot verification."], ["Privacy-enhancing tech", "Compute on sensitive data with zero-knowledge and PET techniques."]].map(([k, v]) => (
            <div key={k} className="border-t pt-6"><h3 className="text-lg font-medium">{k}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v}</p></div>
          ))}
        </div>
      </Section>
      <CtaBand title="Need it inside your stack?" label="Talk to engineering" />
    </PageShell>
  );
}
