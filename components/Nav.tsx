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
          ? "border-b border-rule bg-field/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#top"
          className="font-display text-lg font-medium tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {site.brand}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-quiet transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={links.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-signal px-4 py-2 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-signal-strong"
          >
            Book a call
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center border border-rule px-3 py-2 text-sm text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-rule bg-field px-5 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1 text-base text-quiet hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={links.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-signal px-4 py-2.5 text-center text-sm font-medium text-white"
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
