import { useEffect, useState } from "react";
import { ml_kem768 } from "@noble/post-quantum/ml-kem.js";

const hex = (b: Uint8Array, n = 999) => Array.from(b.slice(0, n), (x) => x.toString(16).padStart(2, "0")).join("");

type Line = { k: string; v: string; tone?: "ok" | "dim" };

/** Real in-browser ML-KEM-768 key encapsulation + AES-256-GCM, rendered as a terminal. */
export function EncryptDemo() {
  const [text, setText] = useState("Classified: Operation Lattice briefing 0900h");
  const [lines, setLines] = useState<Line[]>([]);
  const [busy, setBusy] = useState(false);

  const run = async () => {
    setBusy(true); setLines([]);
    const out: Line[] = [];
    const push = async (l: Line) => { out.push(l); setLines([...out]); await new Promise((r) => setTimeout(r, 280)); };
    const t0 = performance.now();
    const { publicKey, secretKey } = ml_kem768.keygen();
    await push({ k: "$ keygen", v: `ML-KEM-768 · pk ${publicKey.length} B · sk ${secretKey.length} B`, tone: "dim" });
    await push({ k: "pk", v: hex(publicKey, 24) + "…" });
    const { cipherText, sharedSecret } = ml_kem768.encapsulate(publicKey);
    await push({ k: "$ encaps", v: `ciphertext ${cipherText.length} B`, tone: "dim" });
    await push({ k: "ct", v: hex(cipherText, 24) + "…" });
    const key = await crypto.subtle.importKey("raw", sharedSecret as BufferSource, "AES-GCM", false, ["encrypt"]);
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const enc = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(text)));
    await push({ k: "$ seal", v: "AES-256-GCM with ML-KEM shared secret", tone: "dim" });
    await push({ k: "msg", v: hex(enc) });
    const ss2 = ml_kem768.decapsulate(cipherText, secretKey);
    const ok = hex(ss2) === hex(sharedSecret);
    await push({ k: "$ decaps", v: ok ? `shared secret match ✓  ·  ${(performance.now() - t0).toFixed(0)} ms` : "mismatch", tone: "ok" });
    setBusy(false);
  };

  useEffect(() => { run(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, []);

  return (
    <div className="overflow-hidden rounded-lg border bg-card shadow-glow">
      <div className="flex items-center justify-between border-b bg-surface px-4 py-2.5">
        <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-border" /><span className="h-2.5 w-2.5 rounded-full bg-border" /><span className="h-2.5 w-2.5 rounded-full bg-border" /></div>
        <span className="font-mono text-[11px] text-muted-foreground">cipherplus://fips-203/live</span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-success"><span className="live-dot" /> LIVE</span>
      </div>
      <div className="p-5">
        <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Plaintext</label>
        <div className="mt-2 flex gap-2">
          <input value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === "Enter" && !busy && run()}
            className="h-11 flex-1 rounded-sm border bg-background px-3 font-mono text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          <button onClick={run} disabled={busy} className="h-11 rounded-sm bg-primary px-5 text-sm font-medium text-primary-foreground transition hover:shadow-glow disabled:opacity-60">
            {busy ? "Encrypting…" : "Encrypt"}
          </button>
        </div>
        <div className="mt-5 min-h-[260px] space-y-2 rounded-md bg-ink p-4 font-mono text-[12px] leading-relaxed text-ink-foreground">
          {lines.map((l, i) => (
            <div key={i} className="animate-rise break-all">
              <span className="mr-3 text-primary-glow">{l.k}</span>
              <span className={l.tone === "ok" ? "text-success" : l.tone === "dim" ? "opacity-60" : ""}>{l.v}</span>
            </div>
          ))}
          {busy && <span className="inline-block h-4 w-2 animate-pulse bg-primary-glow" />}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Runs real ML-KEM-768 (FIPS 203) in your browser. Nothing leaves your device.</p>
      </div>
    </div>
  );
}
