"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formId) {
      setStatus("error");
      setErrorMessage(
        "Contact form is not configured yet. Email taimoorzulfiqar97@gmail.com instead.",
      );
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-fg-muted">Name</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="mt-2 w-full rounded-sm border border-line bg-bg px-3 py-3 text-fg placeholder:text-fg-muted/50"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-sm text-fg-muted">Email</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="mt-2 w-full rounded-sm border border-line bg-bg px-3 py-3 text-fg placeholder:text-fg-muted/50"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm text-fg-muted">Company (optional)</span>
        <input
          name="company"
          type="text"
          autoComplete="organization"
          className="mt-2 w-full rounded-sm border border-line bg-bg px-3 py-3 text-fg placeholder:text-fg-muted/50"
          placeholder="Company name"
        />
      </label>

      <label className="block">
        <span className="text-sm text-fg-muted">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full resize-y rounded-sm border border-line bg-bg px-3 py-3 text-fg placeholder:text-fg-muted/50"
          placeholder="What are you trying to ship or automate?"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>

      {status === "success" ? (
        <p className="text-sm text-success" role="status">
          Message sent. I’ll get back to you soon.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="text-sm text-danger" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
