import { PAST_EVENTS } from "@/lib/content";

const CARD_STYLES: Record<string, { bg: string; gradient: string }> = {
  Campfire: {
    bg: "linear-gradient(135deg, #FF7AE2 0%, #FFB37A 60%, #FFE07A 100%)",
    gradient: "",
  },
  Daydream: {
    bg: "linear-gradient(135deg, #64B8FE 0%, #5258E4 50%, #6A33DA 100%)",
    gradient: "",
  },
};

export default function PastEvents() {
  return (
    <section
      id="past"
      className="py-[80px] lg:py-[120px]"
      style={{ background: "#06062E" }}
    >
      <div className="mx-auto max-w-[1180px] px-7">
        <p
          className="mb-[14px] flex items-center gap-[10px] text-[12px] uppercase tracking-[0.22em]"
          style={{ color: "#B9FFFF", fontWeight: 500 }}
        >
          <span className="inline-block shrink-0" style={{ width: 24, height: 1, background: "#B9FFFF" }} />
          Previous editions
        </p>
        <h2
          className="font-serif mb-5 text-4xl font-bold leading-[1.05] tracking-[-0.015em] lg:text-[clamp(34px,4.4vw,56px)]"
          style={{ maxWidth: "22ch" }}
        >
          We&apos;ve done this before.
        </h2>
        <p className="mb-14 text-lg leading-relaxed" style={{ color: "#C1B3F7", maxWidth: "60ch" }}>
          Crux is the third Hack Club Horizons event. The first two brought together hundreds of
          teen builders from around the world.
        </p>

        <div className="grid gap-7 lg:grid-cols-2">
          {PAST_EVENTS.map((event) => {
            const style = CARD_STYLES[event.name] ?? CARD_STYLES.Campfire;
            return (
              <a
                key={event.name}
                href={event.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-[20px] border border-[rgba(193,178,247,0.18)] transition-all hover:-translate-y-1 hover:border-[#FF7AE2] hover:shadow-[0_30px_60px_-20px_rgba(255,122,226,0.25)]"
                style={{
                  background: "#1E1E5C",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {/* Image area */}
                <div
                  className="relative flex aspect-[16/10] items-center justify-center overflow-hidden"
                  style={{ background: style.bg }}
                >
                  <span
                    className="font-serif relative z-10 font-bold italic"
                    style={{
                      fontSize: 64,
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
                <div className="p-7">
                  <p
                    className="mb-[10px] font-mono text-[11px] uppercase tracking-[0.18em]"
                    style={{ color: "#B9FFFF" }}
                  >
                    {event.tagline}
                  </p>
                  <h3
                    className="font-serif mb-[10px] text-[28px] font-bold"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {event.name}
                  </h3>
                  <p className="mb-[18px] text-[15px] leading-relaxed" style={{ color: "#C1B3F7" }}>
                    {event.blurb}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-transform"
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
    </section>
  );
}
