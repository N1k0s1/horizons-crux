import Image from "next/image";

const ITEMS = [
  { emoji: "", label: "Flight stipends", detail: "Get $8.5USD per hour you spend coding after qualifying." },
  { emoji: "", label: "Accommodation", detail: "Sleep at the venue, all 2 nights." },
  { emoji: "", label: "All meals & snacks", detail: "Every dietary restriction handled." },
  { emoji: "", label: "Local transport", detail: "Public transport plans" },
  { emoji: "", label: "Event swag", detail: "Exclusive Merch and project prizes." },
];

export default function Covered() {
  return (
    <section
      id="covered"
      className="relative overflow-hidden py-[80px] lg:py-[120px]"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, rgba(255,122,226,0.10) 0%, transparent 50%), #1B1668",
      }}
    >
      {/* Jellyfish deco */}
      <Image
        src="/horizons-crux/art/jellyfish-yellow.png"
        alt=""
        width={100}
        height={140}
        className="pointer-events-none absolute right-[12%] top-[30%] hidden lg:block"
        style={{
          zIndex: 1,
          opacity: 0.85,
          animation: "bob 8s ease-in-out infinite alternate",
        }}
      />

      <div className="relative mx-auto max-w-[1180px] px-7" style={{ zIndex: 2 }}>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

          {/* Left — quote */}
          <div>
            <p
              className="mb-[14px] flex items-center gap-[10px] text-[12px] uppercase tracking-[0.22em]"
              style={{ color: "#B9FFFF", fontWeight: 500 }}
            >
              <span className="inline-block shrink-0" style={{ width: 24, height: 1, background: "#B9FFFF" }} />
              What&apos;s covered
            </p>
            <h2
              className="font-serif mb-6 font-bold leading-[1.05]"
              style={{
                fontSize: "clamp(40px,5vw,64px)",
                letterSpacing: "-0.02em",
              }}
            >
              You bring a{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FF7AE2 0%, #B9FFFF 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                laptop.
              </span>
              <br />
              We handle the rest.
            </h2>
            <p
              className="text-[18px] leading-relaxed"
              style={{ color: "#C1B3F7", maxWidth: "44ch" }}
            >
              Horizons Crux is fully funded for all hackers. No tickets, no fees, no surprise
              costs. We mean it.
            </p>
          </div>

          {/* Right — emoji list */}
          <ul className="m-0 flex list-none flex-col gap-[14px] p-0">
            {ITEMS.map(({ emoji, label, detail }) => (
              <li
                key={label}
                className="grid items-center gap-[18px] rounded-[20px] px-[22px] py-[18px]"
                style={{
                  gridTemplateColumns: "36px 1fr",
                  background: "rgba(10, 10, 83, 0.6)",
                  border: "1px solid rgba(193,178,247,0.18)",
                }}
              >
                <span style={{ fontSize: 24, lineHeight: 1 }}>{emoji}</span>
                <span className="text-[17px]" style={{ color: "#fff" }}>
                  <b style={{ color: "#fff", fontWeight: 600 }}>{label}</b>
                  {" — "}
                  <span style={{ color: "#C1B3F7" }}>{detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
