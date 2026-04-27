"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { QUALIFY_STEPS, EVENT } from "@/lib/content";
import { asset } from "@/lib/asset";

const N           = QUALIFY_STEPS.length;     // 5 steps
const STEP_W      = 320;                      // step block width
const STEP_H      = 170;                      // step block height
const ROW_H       = 280;                      // vertical distance between step starts
const TRACK_W     = 880;                      // total zigzag track width
const TRACK_H     = (N - 1) * ROW_H + STEP_H; // total zigzag track height
const JW          = 76;
const JH          = 78;
const SMOOTH      = 0.10;                     // lerp coefficient — lower = smoother/laggier
const FADE_AT_END = 0.08;                     // fraction near segment ends where opacity dips

function stepBox(i: number) {
  const isLeft = i % 2 === 0;
  return {
    x: isLeft ? 0 : TRACK_W - STEP_W,
    y: i * ROW_H,
    isLeft,
  };
}

function stepNode(i: number) {
  const b = stepBox(i);
  return {
    x: b.isLeft ? b.x + STEP_W : b.x,
    y: b.y + STEP_H / 2,
  };
}

export default function Qualify() {
  const sectionRef = useRef<HTMLElement>(null);
  const jfRef      = useRef<HTMLDivElement>(null);
  const targetRef  = useRef({ x: 0, y: 0, opacity: 0 });
  const currentRef = useRef({ x: 0, y: 0, opacity: 0 });
  const rafRef     = useRef<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    const jf      = jfRef.current;
    if (!section || !jf) return;

    const start = stepNode(0);
    currentRef.current = { x: start.x, y: start.y, opacity: 0 };
    targetRef.current  = { x: start.x, y: start.y, opacity: 0 };

    const updateTarget = () => {
      const rect     = section.getBoundingClientRect();
      const scrolled = -rect.top;
      const total    = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.max(0, Math.min(1, scrolled / total));

      // Map global progress → segment index + local t
      const sp     = progress * (N - 1);
      const segIdx = Math.min(Math.floor(sp), N - 2);
      const t      = sp - segIdx;

      const a = stepNode(segIdx);
      const b = stepNode(segIdx + 1);
      const x = a.x + (b.x - a.x) * t;
      const y = a.y + (b.y - a.y) * t;

      // Hide jellyfish before section enters / after it leaves
      const inView = rect.bottom > 0 && rect.top < window.innerHeight;

      // Brief opacity dip at segment boundaries (the "fade transition between lines")
      const edge = Math.min(t, 1 - t);
      const segFade = edge < FADE_AT_END ? 0.25 + (edge / FADE_AT_END) * 0.75 : 1;

      targetRef.current = {
        x,
        y,
        opacity: inView ? segFade : 0,
      };
    };

    const tick = () => {
      const c = currentRef.current;
      const t = targetRef.current;

      c.x       += (t.x - c.x) * SMOOTH;
      c.y       += (t.y - c.y) * SMOOTH;
      c.opacity += (t.opacity - c.opacity) * 0.15;

      jf.style.transform = `translate(${c.x - JW / 2}px, ${c.y - JH / 2}px)`;
      jf.style.opacity   = c.opacity.toFixed(3);

      rafRef.current = requestAnimationFrame(tick);
    };

    updateTarget();
    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
    };
  }, []);

  // Pre-compute line endpoints (4 disconnected straight lines for 5 steps)
  const lines = Array.from({ length: N - 1 }, (_, i) => {
    const a = stepNode(i);
    const b = stepNode(i + 1);
    return { x1: a.x, y1: a.y, x2: b.x, y2: b.y };
  });

  return (
    <section
      ref={sectionRef}
      id="qualify"
      className="relative py-[100px] lg:py-[140px]"
      style={{
        background:
          "radial-gradient(ellipse at 80% 0%, rgba(82,88,228,0.18) 0%, transparent 50%), #0D1117",
      }}
    >
      <div className="mx-auto max-w-[1180px] px-7">
        {/* ── Centered header ── */}
        <div className="mx-auto mb-[80px] max-w-[680px] text-center lg:mb-[100px]">
          <p
            className="mb-[14px] flex items-center justify-center gap-[10px] text-[12px] uppercase tracking-[0.22em]"
            style={{ color: "#B9FFFF", fontWeight: 500 }}
          >
            <span className="inline-block shrink-0" style={{ width: 24, height: 1, background: "#B9FFFF" }} />
            How to qualify
            <span className="inline-block shrink-0" style={{ width: 24, height: 1, background: "#B9FFFF" }} />
          </p>
          <h2 className="font-serif mb-5 text-4xl font-bold leading-[1.05] tracking-[-0.015em] lg:text-[clamp(34px,4.4vw,56px)]">
            Five steps to the Cross.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#C1B3F7" }}>
            Spend{" "}
            <b style={{ color: "#B9FFFF", fontWeight: 600 }}>{EVENT.hoursRequired} hours</b> building
            real projects on Hack Club. No GPA, no essays, no résumé. The work is the application.
          </p>
        </div>

        {/* ── Desktop zigzag — fixed-pixel, mx-auto centered ── */}
        <div
          className="relative mx-auto hidden lg:block"
          style={{ width: TRACK_W, height: TRACK_H }}
        >
          {/* Disconnected dotted line segments + node markers */}
          <svg
            className="pointer-events-none absolute left-0 top-0"
            width={TRACK_W}
            height={TRACK_H}
            viewBox={`0 0 ${TRACK_W} ${TRACK_H}`}
            style={{ overflow: "visible" }}
          >
            {lines.map((L, i) => (
              <line
                key={`line-${i}`}
                x1={L.x1} y1={L.y1} x2={L.x2} y2={L.y2}
                stroke="rgba(193,178,247,0.45)"
                strokeWidth="2"
                strokeDasharray="3 10"
                strokeLinecap="round"
              />
            ))}

            {QUALIFY_STEPS.map((_, i) => {
              const n = stepNode(i);
              return (
                <g key={`node-${i}`}>
                  {/* Glow halo */}
                  <circle cx={n.x} cy={n.y} r={16} fill="rgba(255,122,226,0.12)" />
                  {/* Background-fill ring so dotted line terminates cleanly */}
                  <circle cx={n.x} cy={n.y} r={9} fill="#0D1117" />
                  {/* Pink dot */}
                  <circle cx={n.x} cy={n.y} r={5.5} fill="#FF7AE2" />
                </g>
              );
            })}
          </svg>

          {/* Jellyfish follower */}
          <div
            ref={jfRef}
            className="pointer-events-none absolute left-0 top-0 z-10"
            style={{ willChange: "transform, opacity" }}
          >
            <Image
              src={asset("/art/jellyfish-yellow.png")}
              alt=""
              width={JW}
              height={JH}
              style={{
                animation: "bob 4s ease-in-out infinite alternate",
                display: "block",
                filter: "drop-shadow(0 8px 24px rgba(255, 220, 120, 0.35))",
              }}
            />
          </div>

          {/* Step blocks — absolutely positioned, text aligned toward the path */}
          {QUALIFY_STEPS.map((step, i) => {
            const box = stepBox(i);
            return (
              <div
                key={step.number}
                className="absolute z-[1]"
                style={{
                  left: box.x,
                  top: box.y,
                  width: STEP_W,
                  height: STEP_H,
                  textAlign: box.isLeft ? "right" : "left",
                  paddingLeft: box.isLeft ? 0 : 32,
                  paddingRight: box.isLeft ? 32 : 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  className="font-serif mb-2 text-[13px] font-bold uppercase tracking-[0.16em]"
                  style={{ color: "#FF7AE2" }}
                >
                  Step {step.number}
                </div>
                <h3
                  className="font-serif mb-2 text-[24px] font-bold leading-[1.15]"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {step.title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.55]" style={{ color: "#C1B3F7" }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── Mobile vertical list ── */}
        <div className="mx-auto flex max-w-[480px] flex-col gap-9 lg:hidden">
          {QUALIFY_STEPS.map((step, i) => (
            <div key={step.number} className="relative pl-7">
              <div
                className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full"
                style={{ background: "#FF7AE2", color: "#0D1117", fontWeight: 700, fontSize: 12 }}
              >
                {i + 1}
              </div>
              <div
                className="font-serif mb-1 text-[12px] font-bold uppercase tracking-[0.14em]"
                style={{ color: "#FF7AE2" }}
              >
                Step {step.number}
              </div>
              <h3 className="font-serif mb-2 text-xl font-bold" style={{ letterSpacing: "-0.01em" }}>
                {step.title}
              </h3>
              <p className="m-0 text-[15px] leading-relaxed" style={{ color: "#C1B3F7" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
