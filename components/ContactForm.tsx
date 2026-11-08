"use client";

import { links } from "@/lib/content";
import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

function configuredFormspreeId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_FORMSPREE_ID?.trim();
  if (!id || id === "your_formspree_id") return undefined;
  return id;
}

async function parseJsonError(response: Response): Promise<string> {
  try {
    const data = (await response.json()) as { error?: string; message?: string };
    return data.error ?? data.message ?? "Something went wrong. Please try again.";
  } catch {
    return "Something went wrong. Please try again.";
  }
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const honey = new FormData(form).get("_honey");
    if (typeof honey === "string" && honey.length > 0) {
      setStatus("success");
      form.reset();
      return;
    }

    const data = new FormData(form);
    data.delete("_honey");
    const formspreeId = configuredFormspreeId();

    try {
      if (formspreeId) {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });

        if (!response.ok) {
          throw new Error(await parseJsonError(response));
        }
      } else {
        data.append("_subject", "New message — Taimoor Zulfiqar website");
        data.append("_template", "table");
        data.append("_captcha", "false");

        const response = await fetch(
          `https://formsubmit.co/ajax/${encodeURIComponent(links.email)}`,
          {
            method: "POST",
            body: data,
            headers: { Accept: "application/json" },
          },
        );

        if (!response.ok) {
          throw new Error(await parseJsonError(response));
        }
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
      <label className="sr-only" aria-hidden>
        Leave empty
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-quiet">Name</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="mt-2 w-full border border-rule bg-sheet px-3 py-3 text-ink placeholder:text-quiet/60"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-sm text-quiet">Email</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="mt-2 w-full border border-rule bg-sheet px-3 py-3 text-ink placeholder:text-quiet/60"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm text-quiet">Company (optional)</span>
        <input
          name="company"
          type="text"
          autoComplete="organization"
          className="mt-2 w-full border border-rule bg-sheet px-3 py-3 text-ink placeholder:text-quiet/60"
          placeholder="Company name"
        />
      </label>

      <label className="block">
        <span className="text-sm text-quiet">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full resize-y border border-rule bg-sheet px-3 py-3 text-ink placeholder:text-quiet/60"
          placeholder="What are you trying to ship or automate?"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center bg-signal px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-signal-strong disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
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
          {errorMessage}{" "}
          <a href={links.emailHref} className="underline">
            Email {links.email}
          </a>{" "}
          if this keeps failing.
        </p>
      ) : null}
    </form>
  );
}
