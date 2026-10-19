import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageShell, Section, CtaBand } from "@/components/Site";
import { industries } from "@/lib/content";

export const Route = createFileRoute("/industries_/$slug")({
  loader: ({ params }) => {
    const item = industries.find((i) => i.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.short} — Post-Quantum Security | CIPHERPLUS` : "Industry — CIPHERPLUS";
    const d = loaderData ? `${loaderData.risk} ${loaderData.fix}` : "Post-quantum security by industry.";
    return { meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" }] };
  },
  notFoundComponent: () => <div className="p-20 text-center">Industry not found. <Link to="/industries" className="text-primary">See all industries</Link></div>,
  component: Page,
});

function Page() {
  const i = Route.useLoaderData();
  return (
    <PageShell eyebrow={`Industries · ${i.n}`} title={i.name} intro={i.risk}>
      <Section label="At a glance">
        <div className="grid gap-10 md:grid-cols-3">
          {[["Mandate", i.mandate], ["Exposure", i.risk], ["CIPHERPLUS answer", i.fix]].map(([k, v]) => (
            <div key={k} className="border-t pt-6"><div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{k}</div><p className="mt-4 leading-relaxed">{v}</p></div>
          ))}
        </div>
      </Section>
      <Section label="Example scenario" title={i.scenario.title}>
        <ol className="grid gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-4">
          {i.scenario.steps.map((s, n) => (
            <li key={s} className="bg-background p-8"><span className="font-mono text-xs text-primary">Step 0{n + 1}</span><p className="mt-4 leading-relaxed">{s}</p></li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-muted-foreground">Illustrative scenario. Every engagement starts with a risk audit tailored to your environment.</p>
      </Section>
      <CtaBand title={`Start your ${i.short.toLowerCase()} readiness audit.`} />
    </PageShell>
  );
}
