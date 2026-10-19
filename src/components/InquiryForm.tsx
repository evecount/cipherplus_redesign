import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  title: z.string().trim().max(120),
  org: z.string().trim().max(120),
  email: z.string().trim().email("Enter a valid work email").max(255),
  sector: z.string().max(80),
  message: z.string().trim().max(2000),
});

const fields = [["name", "Full name"], ["title", "Job title"], ["org", "Organisation"], ["email", "Work email"]] as const;

export function InquiryForm({ kind, cta, details, onDone, showMessage = true }: { kind: string; cta: string; details?: Record<string, unknown>; onDone?: () => void; showMessage?: boolean }) {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const raw = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse({ message: "", sector: "", title: "", org: "", ...raw });
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Please check the form"); return; }
    setState("sending");
    const { error: err } = await supabase.from("leads").insert({ kind, ...parsed.data, details: (details ?? null) as never });
    if (err) { setState("idle"); setError("Something went wrong. Please email support@cipherplus.io."); return; }
    setState("sent");
    onDone?.();
  }

  if (state === "sent" && !onDone) {
    return (
      <div className="flex max-w-3xl items-start gap-4 border-t pt-8">
        <Check className="mt-1 h-5 w-5 text-success" />
        <div><h3 className="text-xl font-medium">Received — thank you.</h3><p className="mt-2 text-muted-foreground">Our team will be in touch within one business day.</p></div>
      </div>
    );
  }

  const input = "h-12 w-full rounded-sm border bg-background px-4 text-sm outline-none transition focus:border-primary";
  return (
    <form onSubmit={submit} noValidate className="grid max-w-3xl gap-5 sm:grid-cols-2">
      {fields.map(([n, l]) => (
        <label key={n} className="block"><span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{l}</span>
          <input name={n} required={n === "name" || n === "email"} type={n === "email" ? "email" : "text"} maxLength={n === "email" ? 255 : 120} className={`mt-2 ${input}`} /></label>
      ))}
      <label className="block sm:col-span-2"><span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Sector</span>
        <select name="sector" className={`mt-2 ${input}`}>
          {["Financial services", "Defense & critical infrastructure", "Cloud & telecom", "Healthcare & genomics", "Manufacturing & semiconductors", "Other"].map((s) => <option key={s}>{s}</option>)}
        </select></label>
      {showMessage && (
        <label className="block sm:col-span-2"><span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">What would you like to discuss?</span>
          <textarea name="message" rows={4} maxLength={2000} className="mt-2 w-full rounded-sm border bg-background p-4 text-sm outline-none focus:border-primary" /></label>
      )}
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button disabled={state === "sending"} className="inline-flex h-12 items-center gap-2 rounded-sm bg-foreground px-6 text-sm font-medium text-background transition hover:bg-primary disabled:opacity-60">{state === "sending" ? "Sending…" : cta} <ArrowRight className="h-4 w-4" /></button>
        {error && <span role="alert" className="text-sm text-destructive">{error}</span>}
      </div>
    </form>
  );
}
