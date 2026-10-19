import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageShell, CtaBand } from "@/components/Site";
import { articles } from "@/lib/content";

export const Route = createFileRoute("/insights_/$slug")({
  loader: ({ params }) => {
    const a = articles.find((x) => x.slug === params.slug);
    if (!a) throw notFound();
    return a;
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.title} | CIPHERPLUS Insights` : "Insight — CIPHERPLUS";
    const d = loaderData?.dek ?? "Post-quantum briefings.";
    return { meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" }] };
  },
  notFoundComponent: () => <div className="p-20 text-center">Article not found. <Link to="/insights" className="text-primary">All insights</Link></div>,
  component: Page,
});

function Page() {
  const a = Route.useLoaderData();
  return (
    <PageShell eyebrow={`Insights · ${a.read}`} title={a.title} intro={a.dek}>
      <article className="mx-auto max-w-2xl px-6 py-24">
        {a.body.map((b, i) => (
          <div key={i} className="mt-10 first:mt-0">
            {b.h && <h2 className="text-2xl font-medium tracking-tight">{b.h}</h2>}
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{b.p}</p>
          </div>
        ))}
        <Link to="/insights" className="mt-16 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-primary">← All insights</Link>
      </article>
      <CtaBand title="Turn this into a roadmap for your organisation." />
    </PageShell>
  );
}
