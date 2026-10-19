export function NistBadge({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  if (size === "sm")
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-wide text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-success" /> NIST CAVP A7970
      </span>
    );
  const big = size === "lg";
  return (
    <div className={`inline-flex items-center gap-4 ${big ? "gap-5" : ""}`}>
      <div className="border-l-2 border-success pl-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">NIST · CAVP Validated</div>
        <div className={`font-medium tracking-tight text-foreground ${big ? "text-3xl" : "text-xl"}`}>Cert. A7970</div>
        <div className="font-mono text-[11px] text-muted-foreground">ML-KEM · ML-DSA · 28 JAN 2026</div>
      </div>
    </div>
  );
}
