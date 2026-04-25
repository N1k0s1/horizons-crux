import { QUALIFY_STEPS, EVENT } from "@/lib/content";

export default function Qualify() {
  return (
    <section
      id="qualify"
      className="relative py-[80px] lg:py-[120px]"
      style={{
        background:
          "radial-gradient(ellipse at 80% 0%, rgba(82,88,228,0.18) 0%, transparent 50%), #06062E",
      }}
    >
      <div className="mx-auto max-w-[1180px] px-7">
        <p
          className="mb-[14px] flex items-center gap-[10px] text-[12px] uppercase tracking-[0.22em]"
          style={{ color: "#B9FFFF", fontWeight: 500 }}
        >
          <span className="inline-block shrink-0" style={{ width: 24, height: 1, background: "#B9FFFF" }} />
          How to qualify
        </p>
        <h2
          className="font-serif mb-5 text-4xl font-bold leading-[1.05] tracking-[-0.015em] lg:text-[clamp(34px,4.4vw,56px)]"
          style={{ maxWidth: "22ch" }}
        >
          Five steps to the Cross.
        </h2>
        <p className="mb-14 text-lg leading-relaxed" style={{ color: "#C1B3F7", maxWidth: "60ch" }}>
          Spend{" "}
          <b style={{ color: "#B9FFFF", fontWeight: 600 }}>{EVENT.hoursRequired} hours</b> building
          real projects on Hack Club. No GPA, no essays, no résumé. The work is the code.
        </p>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {QUALIFY_STEPS.map((step) => (
            <div
              key={step.number}
              className="group flex flex-col rounded-[20px] border border-[rgba(193,178,247,0.18)] px-[22px] py-7 transition-all hover:-translate-y-1 hover:border-[#FF7AE2]"
              style={{
                background: "rgba(30, 30, 92, 0.3)",
                backdropFilter: "blur(6px)",
                minHeight: 220,
              }}
            >
              <div
                className="mb-6 font-serif text-sm font-bold tracking-[0.1em]"
                style={{ color: "#FF7AE2" }}
              >
                Step {step.number}
              </div>
              <h3
                className="font-serif mb-[10px] text-[19px] font-semibold leading-[1.2]"
                style={{ letterSpacing: "-0.005em" }}
              >
                {step.title}
              </h3>
              <p className="m-0 text-sm leading-[1.55]" style={{ color: "#C1B3F7" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
