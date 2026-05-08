import Image from "next/image";
import { asset } from "@/lib/asset";

const SECTIONS = [
  {
    title: "Who can attend.",
    body: (
      <>
        Any high school student who&apos;s logged{" "}
        <b style={{ color: "#B9FFFF", fontWeight: 600 }}>35 hours</b> building
        projects on{" "}
        <a
          href="https://horizons.hackclub.com/?utm_source=crux-site"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#B9FFFF", fontWeight: 600 }}
        >
          Horizons
        </a>
        . No experience cap — beginners who just shipped their first project are
        just as welcome as seasoned coders. If you&apos;re in high school and
        you&apos;ve put in the hours, you&apos;re in.
      </>
    ),
  },
  {
    title: "What is a hackathon.",
    body: (
      <>
        A hackathon is a weekend-long event where you build something from
        scratch with a group of strangers who quickly become friends. At
        Horizons Crux, you&apos;ll have around 36 hours to take an idea from
        zero to shipped — then show the room what you made. No polished demos,
        no slides. Just a thing that works (or hilariously doesn&apos;t) that
        you built yourself.
      </>
    ),
  },
  {
    title: "What you can get.",
    body: (
      <>
        Your flights and accommodation are{" "}
        <b style={{ color: "#B9FFFF", fontWeight: 600 }}>fully covered </b>by
        Hack Club, a 501(c)(3) nonprofit. You&apos;ll leave with a project
        you&apos;re proud of, a network of teenage builders from across the
        globe, and the experience of shipping something real under pressure in
        one of the world&apos;s most beautiful cities.
      </>
    ),
  },
];

export default function About() {
  return (
    <>
      {/* Big sentence */}
      <section
        id="about"
        className="relative overflow-hidden py-[100px] lg:py-[140px]"
        style={{ background: "linear-gradient(180deg, #0D1117 0%, #0D1117 100%)" }}
      >
        <div className="mx-auto max-w-[860px] px-6 text-center">
          <h2
            className="font-serif text-[2.4rem] font-bold leading-[1.2] sm:text-5xl lg:text-[3.5rem]"
            style={{ color: "#f0ede6", letterSpacing: "-0.02em" }}
          >
            Horizons Crux is Hack Club&apos;s{" "}
            <mark
              style={{
                background: "rgba(185, 255, 255, 0.15)",
                color: "#B9FFFF",
                padding: "2px 0",
                borderRadius: "3px",
              }}
            >
              free, fully-funded hackathon
            </mark>{" "}
            for high schoolers who are ready to{" "}
            <mark
              style={{
                background: "rgba(185, 255, 255, 0.15)",
                color: "#B9FFFF",
                padding: "2px 0",
                borderRadius: "3px",
              }}
            >
              ship something real.
            </mark>
          </h2>
        </div>
      </section>

      {/* About section */}
      <section
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

          {/* Right column — shifted toward the centerline */}
          <div
            className="relative flex-1 lg:pl-32 lg:pr-7"
            style={{ zIndex: 2 }}
          >
            <ol className="m-0 list-none p-0">
              {SECTIONS.map((section, i) => (
                <li
                  key={section.title}
                  className="py-7 lg:py-10"
                  style={{
                    borderTop: "1px solid rgba(193,178,247,0.18)",
                    borderBottom:
                      i === SECTIONS.length - 1
                        ? "1px solid rgba(193,178,247,0.18)"
                        : undefined,
                  }}
                >
                  <h3
                    className="font-serif mt-1 mb-3 text-2xl font-bold leading-[1.1] lg:text-3xl"
                    style={{ letterSpacing: "-0.01em", color: "#fff" }}
                  >
                    {section.title}
                  </h3>
                  <p
                    className="m-0 text-[18px] leading-[1.65]"
                    style={{ color: "#C1B3F7", maxWidth: "60ch" }}
                  >
                    {section.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
