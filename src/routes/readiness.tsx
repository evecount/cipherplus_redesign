import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Section, meta } from "@/components/Site";
import { InquiryForm } from "@/components/InquiryForm";

export const Route = createFileRoute("/readiness")({
  head: () => meta("Q-Day Readiness Self-Check — CIPHERPLUS", "Six questions, two minutes: get an instant post-quantum risk score for your organisation."),
  component: Page,
});

export const questions = [
  { q: "How long must your most sensitive data stay confidential?", a: [["Under 5 years", 0], ["5–15 years", 2], ["15+ years", 3]] },
  { q: "Do you have an inventory of where RSA / ECC cryptography is used?", a: [["Yes, complete", 0], ["Partial", 2], ["No", 3]] },
  { q: "Is there a named owner for post-quantum migration?", a: [["Yes", 0], ["Being discussed", 1], ["No", 3]] },
  { q: "Are you subject to sector regulation (e.g. MAS TRM, CII)?", a: [["No", 0], ["Somewhat", 1], ["Yes, heavily", 3]] },
  { q: "Have you piloted any post-quantum algorithm?", a: [["In production", 0], ["Testing", 1], ["Not yet", 3]] },
  { q: "Do partners or regulators already ask about quantum readiness?", a: [["No", 0], ["Occasionally", 1], ["Frequently", 2]] },
] as const;

export function scoreBand(score: number) {
  if (score >= 11) return { label: "High exposure", text: "Your data shelf-life and current posture suggest harvest-now-decrypt-later risk is material today. Start with a cryptographic risk audit." };
  if (score >= 6) return { label: "Moderate exposure", text: "You have foundations, but gaps in inventory or ownership will slow migration. A focused audit will set priorities." };
  return { label: "Lower exposure", text: "You are ahead of most organisations. Validate your plan and keep your inventory current." };
}

function Page() {
  const [ans, setAns] = useState<(number | null)[]>(questions.map(() => null));
  const done = ans.every((x) => x !== null);
  const score = ans.reduce<number>((s, x) => s + (x ?? 0), 0);
  const band = scoreBand(score);
  const pct = Math.round((score / 17) * 100);
  return (
    <PageShell eyebrow="Self-check" title={<>How exposed are you<br /><span className="text-gradient">to Q-Day?</span></>} intro="Six questions, two minutes. Your answers stay in your browser unless you choose to send them.">
      <Section label="Questions">
        <ol className="space-y-10">
          {questions.map((q, i) => (
            <li key={q.q} className="border-t pt-6">
              <div className="flex gap-4"><span className="font-mono text-xs text-muted-foreground">0{i + 1}</span><h3 className="text-xl font-medium">{q.q}</h3></div>
              <div className="mt-5 flex flex-wrap gap-3 pl-8">
                {q.a.map(([label, v]) => (
                  <button key={label} type="button" onClick={() => setAns((p) => p.map((x, j) => (j === i ? v : x)))}
                    className={`h-11 rounded-sm border px-5 text-sm transition ${ans[i] === v ? "border-foreground bg-foreground text-background" : "hover:border-foreground"}`}>{label}</button>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Section>
      {done && (
        <Section label="Your result" title={band.label}>
          <div className="max-w-3xl">
            <div className="h-2 overflow-hidden rounded-full bg-secondary"><div className="h-full bg-gradient-to-r from-primary to-primary-glow" style={{ width: `${pct}%` }} /></div>
            <p className="mt-3 font-mono text-xs text-muted-foreground">Exposure score {score} / 17</p>
            <p className="mt-8 text-lg leading-relaxed">{band.text}</p>
            <h3 className="mt-14 text-xl font-medium">Get a tailored readout from our team</h3>
            <div className="mt-6"><InquiryForm kind="readiness" cta="Send my result" details={{ score, band: band.label, answers: ans }} /></div>
          </div>
        </Section>
      )}
    </PageShell>
  );
}
