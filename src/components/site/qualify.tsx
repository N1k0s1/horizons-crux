"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { QUALIFY_STEPS, EVENT } from "@/lib/content";
import { asset } from "@/lib/asset";

const N           = QUALIFY_STEPS.length;
const STEP_W      = 320;
const STEP_H      = 170;
const ROW_H       = 280;
const TRACK_W     = 880;
const TRACK_H     = (N - 1) * ROW_H + STEP_H;
const JW          = 76;
const JH          = 78;
const SMOOTH      = 0.10;
const FADE_AT_END = 0.08;

function stepBox(i: number) {
  const isLeft = i % 2 === 0;
  return { x: isLeft ? 0 : TRACK_W - STEP_W, y: i * ROW_H, isLeft };
}

function stepNode(i: number) {
  const b = stepBox(i);
  return { x: b.isLeft ? b.x + STEP_W : b.x, y: b.y + STEP_H / 2 };
}

export default function Qualify() {
  const sectionRef      = useRef<HTMLElement>(null);
  const containerRef    = useRef<HTMLDivElement>(null);
  const zigzagRef       = useRef<HTMLDivElement>(null);
  const jfRef           = useRef<HTMLDivElement>(null);
  const mobileNodeRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const targetRef       = useRef({ x: 0, y: 0, opacity: 0 });
  const currentRef      = useRef({ x: 0, y: 0, opacity: 0 });
  const rafRef          = useRef<number>(0);

  useEffect(() => {
    const section   = sectionRef.current;
    const jf        = jfRef.current;
    if (!section || !jf) return;

    const getNodePositions = () => {
      const container = containerRef.current;
      if (!container) return null;
      const cr = container.getBoundingClientRect();

      if (window.innerWidth < 1024) {
        // Mobile: read each node circle's screen position relative to container
        return mobileNodeRefs.current.map(el => {
          if (!el) return { x: 13, y: 13 };
          const r = el.getBoundingClientRect();
          return { x: r.left - cr.left + 13, y: r.top - cr.top + 13 };
        });
      } else {
        // Desktop: offset zigzag coordinate system into container space
        const zigzag = zigzagRef.current;
        if (!zigzag) return null;
        const zr = zigzag.getBoundingClientRect();
        const ox = zr.left - cr.left;
        const oy = zr.top  - cr.top;
        return QUALIFY_STEPS.map((_, i) => {
          const n = stepNode(i);
          return { x: ox + n.x, y: oy + n.y };
        });
      }
    };

    const updateTarget = () => {
      const rect     = section.getBoundingClientRect();
      const scrolled = -rect.top;
      const total    = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.max(0, Math.min(1, scrolled / total));

      const sp     = progress * (N - 1);
      const segIdx = Math.min(Math.floor(sp), N - 2);
      const t      = sp - segIdx;

      const positions = getNodePositions();
      if (!positions) return;

      const a = positions[segIdx];
      const b = positions[segIdx + 1];
      const x = a.x + (b.x - a.x) * t;
      const y = a.y + (b.y - a.y) * t;

      const inView  = rect.bottom > 0 && rect.top < window.innerHeight;
      const edge    = Math.min(t, 1 - t);
      const segFade = edge < FADE_AT_END ? 0.25 + (edge / FADE_AT_END) * 0.75 : 1;

      targetRef.current = { x, y, opacity: inView ? segFade : 0 };
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
      <div ref={containerRef} className="relative mx-auto max-w-[1180px] px-7">
        {/* Jellyfish — absolute within container, tracks both mobile and desktop paths */}
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

        {/* ── Centered header ── */}
        <div className="mx-auto mb-[80px] max-w-[680px] text-center lg:mb-[100px]">
          <p
            className="mb-[14px] flex items-center justify-center gap-[10px] text-[12px] uppercase tracking-[0.22em]"
            style={{ color: "#B9FFFF", fontWeight: 500 }}
          >
            How to qualify
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
          ref={zigzagRef}
          className="relative mx-auto hidden lg:block"
          style={{ width: TRACK_W, height: TRACK_H }}
        >
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
                  <circle cx={n.x} cy={n.y} r={16} fill="rgba(255,122,226,0.12)" />
                  <circle cx={n.x} cy={n.y} r={9}  fill="#0D1117" />
                  <circle cx={n.x} cy={n.y} r={5.5} fill="#FF7AE2" />
                </g>
              );
            })}
          </svg>

          {/* light-crux-decal opposite step 1 */}
          <div
            className="absolute z-0"
            style={{
              right: 0,
              top: 2 * ROW_H,
              width: 240,
              height: 240,
            }}
          >
            <Image
              src={asset("/art/light-crux-decal.png")}
              alt=""
              width={240}
              height={240}
              style={{ display: "block", height: "auto", width: "auto" }}
            />
          </div>

          {/* light canoe opposite step 2 */}
          <div
            className="absolute z-0"
            style={{
              left: 0,
              top: ROW_H,
              width: 240,
              height: 240,
            }}
          >
            <Image
              src={asset("/art/light-canoe-decal.png")}
              alt=""
              width={240}
              height={240}
              style={{ display: "block", height: "auto", width: "auto" }}
            />
          </div>

          {/* light possum opposite step 3 */}
          <div
            className="absolute z-0"
            style={{
              left: 0,
              top: 3 * ROW_H,
              width: 240,
              height: 240,
            }}
          >
            <Image
              src={asset("/art/light-possum-decal.png")}
              alt=""
              width={240}
              height={240}
              style={{ display: "block", height: "auto", width: "auto" }}
            />
          </div>

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

        {/* ── Mobile: vertical list with dotted connector lines ── */}
        <div className="relative mx-auto max-w-[480px] lg:hidden">
          {/* Vertical dotted track */}
          <div
            className="absolute top-[13px] bottom-[13px]"
            style={{
              left: 12,
              width: 2,
              background:
                "repeating-linear-gradient(to bottom, rgba(193,178,247,0.45) 0px, rgba(193,178,247,0.45) 3px, transparent 3px, transparent 13px)",
            }}
          />

          <div className="flex flex-col gap-10">
            {QUALIFY_STEPS.map((step, i) => (
              <div key={step.number} className="relative pl-12">
                {/* Node: glow halo + bg fill + pink dot */}
                <div
                  ref={el => { mobileNodeRefs.current[i] = el; }}
                  className="absolute left-0 top-[1px]"
                  style={{ width: 26, height: 26 }}
                >
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ background: "rgba(255,122,226,0.12)" }}
                  />
                  <div
                    className="absolute inset-0 m-auto rounded-full"
                    style={{ width: 18, height: 18, background: "#0D1117" }}
                  />
                  <div
                    className="absolute inset-0 m-auto rounded-full"
                    style={{ width: 11, height: 11, background: "#FF7AE2" }}
                  />
                </div>

                <div
                  className="font-serif mb-1 text-[12px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: "#FF7AE2" }}
                >
                  Step {step.number}
                </div>
                <h3
                  className="font-serif mb-2 text-xl font-bold"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {step.title}
                </h3>
                <p className="m-0 text-[15px] leading-relaxed" style={{ color: "#C1B3F7" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
