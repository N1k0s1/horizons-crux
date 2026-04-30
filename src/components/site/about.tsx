import Image from "next/image";
import { asset } from "@/lib/asset";

const STEPS = [
  {
    num: "01",
    title: "Sign up for Horizons.",
    body: (
      <>
        Join <a href="https://horizons.hackclub.com" target="_blank" rel="noopener noreferrer" style={{ color: "#B9FFFF", fontWeight: 600 }}>Hack Club Horizons</a> to start your journey towards Horizons Crux. Doesn't matter how much coding experience you have, just sign up and start building. It’s free and open to all high school students.
      </>
    ),
  },
  {
    num: "02",
    title: "Build Cool Projects.",
    body: (
      <>
        Log <b style={{ color: "#B9FFFF", fontWeight: 600 }}>35 hours</b> in <a href="https://horizons.hackclub.com" target="_blank" rel="noopener noreferrer" style={{ color: "#B9FFFF", fontWeight: 600 }}>Hack Club Horizons</a> building whatever you desire. A game, a website, a synth, a robot... every hour is another step closer towards the Horizons.
      </>
    ),
  },
  {
    num: "03",
    title: "Fly out to Sydney.",
    body: (
      <>
        Once you&apos;ve cleared <b style={{ color: "#B9FFFF", fontWeight: 600 }}>35 hours</b>,
        you&apos;re in. We fly you out to Sydney, Australia for a weekend under the
        Southern Cross. Bring a laptop.
      </>
    ),
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-[80px] lg:py-[120px]"
      style={{ background: "linear-gradient(180deg, #0D1117 0%, #0a0b0f 100%)" }}
    >
      <div className="relative mx-auto flex max-w-[1180px] gap-0 px-[22px] lg:items-start lg:px-7">
        {/* Anchor chain — full-viewport sticky rail on desktop */}
        <div className="pointer-events-none hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[170px] lg:shrink-0 lg:items-center lg:justify-center">
          <Image
            src={asset("/art/anchor-chain.png")}
            alt=""
            width={549}
            height={1537}
            className="h-screen w-auto max-w-none object-contain object-top"
            style={{
              transformOrigin: "top center",
              filter: "drop-shadow(0 12px 40px rgba(255,122,226,0.25))",
              animation: "anchorSway 7s ease-in-out infinite alternate",
            }}
          />
        </div>

        {/* Right column */}
        <div className="relative flex-1 lg:pl-10 lg:pr-7" style={{ zIndex: 2 }}>
          {/* Head */}
          <div className="mb-8 max-w-[60ch] lg:mb-14">
            <p
              className="mb-[14px] flex items-center gap-[10px] text-[12px] uppercase tracking-[0.22em]"
              style={{ color: "#B9FFFF", fontWeight: 500 }}
            >
              About the event
            </p>
            <h2
              className="font-serif mb-5 text-4xl font-bold leading-[1.05] tracking-[-0.015em] lg:text-5xl"
              style={{ letterSpacing: "-0.015em" }}
            >
              A weekend in the deep end.
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#C1B3F7" }}>
              Three steps from your bedroom to the Southern Cross. Horizons Crux is a 3-day
              hackathon in Sydney, fully funded by Hack Club, a 501(c)(3) nonprofit.
            </p>
          </div>

          {/* Steps */}
          <ol className="m-0 list-none p-0">
            {STEPS.map((step, i) => (
              <li
                key={step.num}
                className="grid items-start gap-2 py-7 lg:grid-cols-[120px_1fr] lg:gap-10 lg:py-10"
                style={{
                  borderTop: "1px solid rgba(193,178,247,0.18)",
                  borderBottom: i === STEPS.length - 1 ? "1px solid rgba(193,178,247,0.18)" : undefined,
                }}
              >
                <span
                  className="font-serif text-4xl font-bold italic leading-none lg:text-[56px]"
                  style={{ color: "#FF7AE2", letterSpacing: "-0.02em" }}
                >
                  {step.num}
                </span>
                <div>
                  <h3
                    className="font-serif mt-1 mb-3 text-2xl font-bold leading-[1.1] lg:text-3xl"
                    style={{ letterSpacing: "-0.01em", color: "#fff" }}
                  >
                    {step.title}
                  </h3>
                  <p className="m-0 text-[18px] leading-[1.65]" style={{ color: "#C1B3F7", maxWidth: "60ch" }}>
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
