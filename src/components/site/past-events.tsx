"use client";

import { useRef, useEffect } from "react";
import { asset } from "@/lib/asset";
import { PAST_EVENTS } from "@/lib/content";

const CARD_STYLES: Record<string, { image: string }> = {
  Campfire: { image: asset("/art/art-1.png") },
  Daydream: { image: asset("/art/art-2.png") },
  Midnight: { image: asset("/art/hero-bg.png") },
  Undercity: { image: asset("https://undercity.hackclub.com/undercitylogo.svg") },
  Scrapyard: { image: asset("/art/shark.png") },
};

export default function PastEvents() {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    const updateHeight = () => {
      const scrollable = track.scrollWidth - window.innerWidth;
      outer.style.height = `calc(100vh + ${Math.max(0, scrollable)}px)`;
    };

    const onScroll = () => {
      if (!outer || !track) return;
      const scrolled = Math.max(0, -outer.getBoundingClientRect().top);
      const scrollable = track.scrollWidth - window.innerWidth;
      track.style.transform = `translateX(-${Math.min(scrolled, scrollable)}px)`;
    };

    updateHeight();
    window.addEventListener("resize", updateHeight, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={outerRef} id="past">
      <div
        className="sticky top-0 overflow-hidden"
        style={{ height: "100vh", background: "#0D1117" }}
      >
        {/* Header */}
        <div className="px-7 pt-16 pb-8 lg:px-14 lg:pt-20">
          <p
            className="mb-[14px] flex items-center gap-[10px] text-[12px] uppercase tracking-[0.22em]"
            style={{ color: "#B9FFFF", fontWeight: 500 }}
          >
            <span className="inline-block shrink-0" style={{ width: 24, height: 1, background: "#B9FFFF" }} />
            Previous editions
          </p>
          <h2
            className="font-serif text-4xl font-bold leading-[1.05] tracking-[-0.015em] lg:text-[clamp(34px,4.4vw,56px)]"
            style={{ maxWidth: "22ch" }}
          >
            We&apos;ve done this before.
          </h2>
        </div>

        {/* Cards track */}
        <div
          ref={trackRef}
          className="flex"
          style={{
            gap: 20,
            paddingLeft: 56,
            paddingRight: 56,
            height: "calc(100vh - 196px)",
            willChange: "transform",
          }}
        >
          {PAST_EVENTS.map((event) => {
            const cardStyle = CARD_STYLES[event.name] ?? CARD_STYLES.Campfire;
            return (
              <a
                key={event.name}
                href={event.href}
                target="_blank"
                rel="noreferrer"
                className="group flex shrink-0 flex-col overflow-hidden rounded-[20px] border border-[rgba(193,178,247,0.18)] transition-all hover:-translate-y-1 hover:border-[#FF7AE2] hover:shadow-[0_30px_60px_-20px_rgba(255,122,226,0.25)]"
                style={{
                  width: "clamp(320px, 38vw, 500px)",
                  background: "#1c1a28",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {/* Gradient header */}
                <div
                  className="relative flex flex-1 items-center justify-center overflow-hidden"
                  style={{
                    backgroundImage: `url(${cardStyle.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <span
                    className="font-serif relative z-10 font-bold italic"
                    style={{
                      fontSize: "clamp(40px, 5vw, 64px)",
                      color: "rgba(255,255,255,0.92)",
                      letterSpacing: "-0.03em",
                      textShadow: "0 4px 30px rgba(0,0,0,0.3)",
                    }}
                  >
                    {event.name}
                  </span>
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25) 0%, transparent 40%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.3) 0%, transparent 50%)",
                    }}
                  />
                </div>

                {/* Body */}
                <div className="flex flex-col justify-between p-7" style={{ flexShrink: 0 }}>
                  <p
                    className="mb-[10px] font-mono text-[11px] uppercase tracking-[0.18em]"
                    style={{ color: "#B9FFFF" }}
                  >
                    {event.tagline}
                  </p>
                  <p
                    className="mb-[18px] text-[15px] leading-relaxed"
                    style={{ color: "#C1B3F7" }}
                  >
                    {event.blurb}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: "#FF7AE2" }}
                  >
                    {event.href.replace("https://", "")}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
