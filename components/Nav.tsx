"use client";

import { useEffect, useState } from "react";
import { links, nav, site } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open
          ? "border-b border-line bg-bg/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-fg"
          onClick={() => setOpen(false)}
        >
          {site.brand}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <a
            href={links.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent-strong"
          >
            Book a call
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-line px-3 py-2 text-sm text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-bg/95 px-5 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1 text-base text-fg-muted hover:text-fg"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={links.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-sm bg-accent px-4 py-2.5 text-center text-sm font-medium text-bg"
              onClick={() => setOpen(false)}
            >
              Book a call
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
