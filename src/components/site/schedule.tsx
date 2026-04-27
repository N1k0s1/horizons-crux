const DAYS = [
  {
    label: "Day one",
    date: "Friday, July 10",
    items: [
      { time: "1:00pm", event: "Doors open", desc: "Check-in, swag pickup, find your bunk." },
      { time: "3:00pm", event: "Opening ceremony", desc: "Welcome, sponsors, kickoff." },
      { time: "5:00pm", event: "Hacking begins", desc: "Teams form, ideas pitched, code starts shipping." },
      { time: "8:00pm", event: "Dinner + lightning talks", desc: "Eat with friends, learn from peers." },
    ],
  },
  {
    label: "Day two",
    date: "Saturday, July 11",
    items: [
      { time: "8:00am", event: "Breakfast", desc: "Fuel up. Coffee for the brave." },
      { time: "10:00am", event: "Workshops", desc: "Hardware, AI, design — pick your path." },
      { time: "1:00pm", event: "Outdoor block", desc: "Bondi or Harbour, your call. Fresh air mandatory." },
      { time: "7:00pm", event: "Hack night", desc: "The good stuff. Stay up as late as you dare." },
    ],
  },
  {
    label: "Day three",
    date: "Sunday, July 12",
    items: [
      { time: "9:00am", event: "Final stretch", desc: "Polish, deploy, prepare your demo." },
      { time: "12:00pm", event: "Project submissions", desc: "Lock it in." },
      { time: "1:00pm", event: "Demo expo", desc: "Walk the floor, vote for your favorites." },
      { time: "4:00pm", event: "Closing + awards", desc: "Hugs, photos, transport to the airport." },
    ],
  },
];

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="py-[80px] lg:py-[120px]"
      style={{ background: "#0A0A53" }}
    >
      <div className="mx-auto max-w-[1180px] px-7">
        <p
          className="mb-[14px] flex items-center gap-[10px] text-[12px] uppercase tracking-[0.22em]"
          style={{ color: "#B9FFFF", fontWeight: 500 }}
        >
          <span className="inline-block shrink-0" style={{ width: 24, height: 1, background: "#B9FFFF" }} />
          Schedule
        </p>
        <h2
          className="font-serif mb-5 text-4xl font-bold leading-[1.05] tracking-[-0.015em] lg:text-[clamp(34px,4.4vw,56px)]"
          style={{ maxWidth: "22ch" }}
        >
          Three days, plotted on the chart.
        </h2>
        <p className="mb-10 text-lg leading-relaxed" style={{ color: "#C1B3F7", maxWidth: "60ch" }}>
          A rough outline — final schedule lands closer to the event.
        </p>

        <div
          className="mt-10 flex flex-col"
          style={{ borderTop: "1px solid rgba(193,178,247,0.18)", borderBottom: "1px solid rgba(193,178,247,0.18)" }}
        >
          {DAYS.map((day, i) => (
            <div
              key={day.label}
              className="grid grid-cols-1 gap-4 py-8 lg:grid-cols-[200px_1fr] lg:gap-10"
              style={{ background: "#0A0A53", borderTop: i > 0 ? "1px solid rgba(193,178,247,0.18)" : undefined }}
            >
              {/* Day label */}
              <div>
                <span
                  className="mb-1.5 block font-mono text-[12px] uppercase tracking-[0.2em]"
                  style={{ color: "#FF7AE2" }}
                >
                  {day.date}
                </span>
                <span
                  className="font-serif text-[28px] font-bold"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {day.label}
                </span>
              </div>

              {/* Items */}
              <div className="flex flex-col gap-[14px]">
                {day.items.map((item) => (
                  <div
                    key={item.time + item.event}
                    className="grid items-baseline gap-6"
                    style={{ gridTemplateColumns: "90px 1fr" }}
                  >
                    <span
                      className="font-mono text-[13px] tracking-[0.06em]"
                      style={{ color: "#B9FFFF" }}
                    >
                      {item.time}
                    </span>
                    <div>
                      <div className="text-base" style={{ color: "#fff" }}>{item.event}</div>
                      <div className="mt-0.5 text-sm" style={{ color: "#C1B3F7" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
