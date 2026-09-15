"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
      company: data.get("company"), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  if (status === "sent") {
    return (
      <p className="text-[15px] text-ink-soft">
        Sent. I read every message and will get back to you within a few
        days.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-[46ch]">
      {/* Honeypot field, hidden from real visitors */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-1.5 text-sm">
          Name
          <input
            required
            name="name"
            type="text"
            className="bg-transparent border-b border-line py-1.5 text-[15px] text-ink focus:outline-none focus:border-moss-deep"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm">
          Email
          <input
            required
            name="email"
            type="email"
            className="bg-transparent border-b border-line py-1.5 text-[15px] text-ink focus:outline-none focus:border-moss-deep"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm">
          Message
          <textarea
            required
            name="message"
            rows={4}
            className="bg-transparent border-b border-line py-1.5 text-[15px] text-ink resize-none focus:outline-none focus:border-moss-deep"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 text-sm text-ink border-b border-ink pb-0.5 hover:text-moss-deep hover:border-moss-deep disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-sm text-ink-soft">{errorMessage}</p>
      )}
    </form>
  );
}
