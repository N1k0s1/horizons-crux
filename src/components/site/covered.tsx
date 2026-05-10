import Image from "next/image";
import { asset } from "@/lib/asset";

const ITEMS = [
  {
    emoji: "",
    label: "All meals & snacks",
    detail: "Free meals and unlimited snacks for the event!",
  },
  {
    emoji: "",
    label: "Flight stipends",
    detail: "At a rate of $8.50USD/hr",
  },
  {
    emoji: "",
    label: "Local transport",
    detail: "Opal fares and fuel costs covered!",
  },
  {
    emoji: "",
    label: "Event swag",
    detail: "Free Hoodies, Hats, PCB Lanyards, Everything you can think of.",
  },
];

export default function Covered() {
  return (
    <section
      id="covered"
      className="relative overflow-hidden py-[80px] lg:py-[120px]"
      style={{
        background: "#161424",
      }}
    >
      {/* Jellyfish deco */}
      <Image
        src={asset("/art/jellyfish-pink.png")}
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

      <div
        className="relative mx-auto max-w-[1180px] px-7"
        style={{ zIndex: 2 }}
      >
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Left — quote */}
          <div>
            <p
              className="mb-[14px] flex items-center gap-[10px] text-[12px] uppercase tracking-[0.22em]"
              style={{ color: "#B9FFFF", fontWeight: 500 }}
            >
              What&apos;s covered
            </p>
            <h2
              className="font-serif mb-6 font-bold leading-[1.05]"
              style={{
                fontSize: "clamp(40px,5vw,60px)",
                letterSpacing: "-0.02em",
              }}
            >
              What&apos;s that?
              <br />
              Free food, merch, and travel?!
            </h2>
            <p
              className="text-[18px] leading-relaxed"
              style={{ color: "#C1B3F7", maxWidth: "44ch" }}
            >
              Free food and merch, plus, work for flight stipends!
            </p>
          </div>

          {/* Right — emoji list */}
          <ul className="m-0 flex list-none flex-col gap-[14px] p-0">
            {ITEMS.map(({ emoji, label, detail }) => (
              <li
                key={label}
                className="rounded-[20px] px-[22px] py-[18px]"
                style={{
                  background: "rgba(13, 17, 23, 0.7)",
                  border: "1px solid rgba(193,178,247,0.18)",
                }}
              >
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
