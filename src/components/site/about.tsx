export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-[100px] lg:py-[140px]"
      style={{
        background:
          "linear-gradient(180deg, #0D1117 0%, #0D1117 100%)",
      }}
    >
      <div className="mx-auto max-w-[860px] px-6 text-center">
        <p
          className="mb-10 text-[11px] font-bold uppercase tracking-[0.28em]"
          style={{ color: "rgba(185,255,255,0.6)" }}
        >
          About
        </p>
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
  );
}
