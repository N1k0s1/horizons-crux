import Image from "next/image";
import { HACKCLUB } from "@/lib/content";

const PLACEHOLDER_COUNT = 8;

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative overflow-hidden py-[80px] lg:py-[120px]"
      style={{ background: "#0D1117" }}
    >
      {/* Shark deco */}
      <Image
        src="/art/shark.png"
        alt=""
        width={280}
        height={200}
        className="pointer-events-none absolute bottom-10 right-[-40px] hidden lg:block"
        style={{
          opacity: 0.95,
          animation: "swim 14s ease-in-out infinite alternate",
          zIndex: 1,
        }}
      />

      <div className="relative mx-auto max-w-[1180px] px-7" style={{ zIndex: 2 }}>

        {/* Header — 2-col on desktop */}
        <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p
              className="mb-[14px] flex items-center gap-[10px] text-[12px] uppercase tracking-[0.22em]"
              style={{ color: "#B9FFFF", fontWeight: 500 }}
            >
              <span className="inline-block shrink-0" style={{ width: 24, height: 1, background: "#B9FFFF" }} />
              Sponsors
            </p>
            <h2
              className="font-serif m-0 text-4xl font-bold leading-[1.05] tracking-[-0.015em] lg:text-[clamp(34px,4.4vw,56px)]"
              style={{ maxWidth: "22ch" }}
            >
              The folks who make it free.
            </h2>
          </div>
          <p className="pb-2 text-[17px] leading-[1.65]" style={{ color: "#C1B3F7" }}>
            {HACKCLUB.name} is a{" "}
            <b style={{ color: "#fff" }}>{HACKCLUB.nonprofit}</b>. Every dollar raised goes
            directly into stipends, accommodation, food, and swag for the hackers in the room.
          </p>
        </div>

        {/* Sponsor grid */}
        <div className="mb-16 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <div
              key={i}
              className="flex h-[120px] items-center justify-center rounded-[12px] border border-[rgba(193,178,247,0.18)] font-serif text-lg font-semibold text-[#C1B3F7] transition-colors hover:border-[#FF7AE2] hover:text-[#FF7AE2]"
              style={{
                background: "rgba(255,255,255,0.03)",
              }}
            >
              Sponsor logo
            </div>
          ))}
        </div>

        {/* Sponsor CTA */}
        <div
          className="grid items-center gap-8 rounded-[20px] px-[48px] py-[44px] lg:grid-cols-[1.4fr_auto]"
          style={{
            border: "1px solid rgba(193,178,247,0.18)",
            background:
              "radial-gradient(ellipse at 100% 100%, rgba(255,122,226,0.15) 0%, transparent 50%), rgba(30,30,92,0.4)",
          }}
        >
          <div>
            <h3
              className="font-serif mb-2 font-bold leading-[1.1]"
              style={{
                fontSize: "clamp(24px,3vw,36px)",
                letterSpacing: "-0.01em",
                color: "#fff",
              }}
            >
              Put your name on the weekend.
            </h3>
            <p className="m-0 text-base" style={{ color: "#C1B3F7" }}>
              Title sponsorship, hardware partnerships, travel underwriting — let&apos;s talk. Every
              contribution is tax-deductible in the US.
            </p>
          </div>
          <a
            href="mailto:crux@hackclub.com"
            className="self-start whitespace-nowrap rounded-full px-6 py-3 text-[15px] font-semibold transition-transform hover:-translate-y-0.5"
            style={{
              background: "#FF7AE2",
              color: "#0D1117",
              textDecoration: "none",
              borderBottom: "none",
              boxShadow: "0 6px 20px rgba(255,122,226,0.25)",
            }}
          >
            Become a sponsor →
          </a>
        </div>
      </div>
    </section>
  );
}
