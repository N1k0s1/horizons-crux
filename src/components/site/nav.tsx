"use client";

import { useState } from "react";
import Image from "next/image";
import { EVENT } from "@/lib/content";
import { asset } from "@/lib/asset";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "past", label: "Past events" },
  { id: "qualify", label: "Qualify" },
  { id: "schedule", label: "Schedule" },
  { id: "sponsors", label: "Sponsors" },
  { id: "faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  function scrollTo(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header
      className="relative z-50 border-b border-[rgba(193,178,247,0.18)]"
      style={{ background: "#0D1117" }}
    >
      <div className="relative mx-auto flex max-w-[1280px] items-center gap-6 px-7 py-[14px]">

        {/* Brand */}
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); scrollTo("top"); }}
          className="flex shrink-0 items-center gap-3 text-white"
          style={{ textDecoration: "none", borderBottom: "none" }}
        >
          <Image
            src={asset("/art/icon.png")}
            alt=""
            width={38}
            height={28}
            className="object-contain"
            style={{ height: 28, width: "auto" }}
          />
          <span className="font-serif text-lg font-semibold tracking-[-0.01em]">
            Horizons <b style={{ color: "#FF7AE2" }}>Crux</b>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="m-0 hidden flex-1 list-none justify-center gap-2 p-0 md:flex">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className="cursor-pointer border-none bg-transparent px-[14px] py-2 text-sm transition-colors"
                style={{ color: "#C1B3F7", fontFamily: "var(--font-sans)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#C1B3F7"; }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={EVENT.applyUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden shrink-0 items-center justify-center rounded-full px-[18px] py-[9px] text-sm font-semibold transition-transform hover:-translate-y-0.5 md:inline-flex"
          style={{
            background: "#FF7AE2",
            color: "#0D1117",
            textDecoration: "none",
            borderBottom: "none",
            boxShadow: "none",
          }}
        >
          Start qualifying
        </a>

        {/* Mobile toggle */}
        <button
          className="ml-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] bg-transparent text-white md:hidden"
          style={{ border: "1px solid rgba(193,178,247,0.35)" }}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="h-[18px] w-[18px]">
              <path d="M5 5l14 14" /><path d="M19 5L5 19" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="h-[18px] w-[18px]">
              <path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="absolute inset-x-0 border-b border-[rgba(193,178,247,0.12)] px-5 pb-5 pt-3 md:hidden"
          style={{ background: "#0D1117" }}
        >
          <ul className="m-0 flex list-none flex-col gap-1 p-0">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="w-full cursor-pointer rounded-lg border-none bg-transparent px-4 py-[14px] text-left text-base transition-colors"
                  style={{ color: "#C1B3F7", fontFamily: "var(--font-sans)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(193,178,247,0.08)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#C1B3F7"; e.currentTarget.style.background = "transparent"; }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
