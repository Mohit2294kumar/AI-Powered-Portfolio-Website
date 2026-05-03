'use client';

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Mail, Send, Loader2 } from "lucide-react";

const initial = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: "idle", text: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", text: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong");

      setForm(initial);
      setStatus({
        type: "success",
        text: data?.message || "Message sent successfully."
      });
    } catch (error) {
      setStatus({
        type: "error",
        text: error.message || "Unable to send message."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Make it easy for recruiters to reach you."
        description="This form stores messages in MongoDB when configured and still works as a graceful UI when no database is attached."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={handleSubmit} className="glass rounded-3xl p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50"
            />
            <input
              required
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50"
            />
          </div>

          <textarea
            required
            rows={6}
            placeholder="Tell me about your project or opportunity..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
            {loading ? "Sending..." : "Send message"}
          </button>

          {status.text ? (
            <p className={`mt-4 text-sm ${status.type === "error" ? "text-rose-300" : "text-emerald-300"}`}>
              {status.text}
            </p>
          ) : null}
        </form>

        <div className="glass rounded-3xl p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15">
              <Mail className="text-blue-300" size={20} />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Direct contact</p>
              <p className="text-sm text-slate-400">Fast response channels</p>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-sm text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-slate-400">Email</p>
              <p className="mt-1 font-medium text-white">K2004mohit@gmail.com</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-slate-400">Phone</p>
              <p className="mt-1 font-medium text-white">+91-9205674026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
