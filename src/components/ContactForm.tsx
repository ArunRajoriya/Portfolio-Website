import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { sendContactMessage } from "@/lib/portfolio.functions";

const fieldClass =
  "w-full rounded-2xl border border-white/10 bg-bg/50 px-4 py-3 text-sm text-ink placeholder:text-ink/35 outline-none transition focus:border-accent/60";

export function ContactForm() {
  const send = useServerFn(sendContactMessage);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    setSending(true);
    try {
      await send({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          company: String(fd.get("company") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      setSent(true);
      form.reset();
      toast.success("Message sent — Arun will get back to you.");
    } catch (error) {
      toast.error(
        error instanceof Error && error.message
          ? "Please check your details and try again."
          : "Something went wrong. Try again.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="rounded-3xl border border-white/12 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl">
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink/50">
          Direct line
        </span>
        <span className="font-mono text-xs text-accent">● open</span>
      </div>
      {sent ? (
        <div className="py-6">
          <p className="text-lg font-bold text-accent">Message received.</p>
          <p className="mt-2 text-sm text-ink/60">
            Thanks for reaching out — I'll reply to your email shortly.
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="mt-5 rounded-full border border-white/20 px-5 py-2 font-mono text-xs uppercase tracking-widest text-ink/70 transition hover:border-accent/60 hover:text-accent"
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <input name="name" required maxLength={120} placeholder="Your name" className={fieldClass} />
            <input
              name="email"
              type="email"
              required
              maxLength={200}
              placeholder="Work email"
              className={fieldClass}
            />
          </div>
          <input
            name="company"
            maxLength={160}
            placeholder="Company (optional)"
            className={fieldClass}
          />
          <textarea
            name="message"
            required
            minLength={5}
            maxLength={4000}
            rows={4}
            placeholder="Role, team and what you're looking for"
            className={`${fieldClass} resize-none`}
          />
          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-full bg-accent px-7 py-3 font-mono text-sm font-bold uppercase tracking-wider text-bg transition hover:brightness-110 disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send message"}
          </button>
        </form>
      )}
    </div>
  );
}
