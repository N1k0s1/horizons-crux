import Image from "next/image";
import { EVENT, HACKCLUB } from "@/lib/content";
import { asset } from "@/lib/asset";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pb-10 pt-24"
      style={{
        backgroundImage: `url(${asset("/art/body-bg.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Subtle dark overlay so text stays readable */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "rgba(5,6,10,0.45)" }}
      />

      {/* Fade in from the dark section above */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{
          height: "180px",
          background: "linear-gradient(180deg, #0D1117 0%, rgba(13,17,23,0) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1180px] px-7" style={{ zIndex: 2 }}>
        <div className="mb-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Image
              src={asset("/art/logo-crux.png")}
              alt="Horizons Crux"
              width={200}
              height={60}
              className="mb-[22px]"
              style={{ width: 200, maxWidth: "70%", height: "auto" }}
            />
            <p className="m-0 text-[15px] leading-relaxed" style={{ color: "#C1B3F7", maxWidth: "36ch" }}>
              A 3-day hackathon under the Southern Cross. Sydney, Australia · July 10–12, 2026.
              Organized by {HACKCLUB.name}, a {HACKCLUB.nonprofit}.
            </p>
          </div>

          {/* Event links */}
          <div>
            <h5
              className="mb-[18px] font-serif text-[13px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "#B9FFFF" }}
            >
              Event
            </h5>
            <ul className="m-0 flex list-none flex-col gap-[10px] p-0">
              {[
                { label: "About", href: "#about" },
                { label: "How to qualify", href: "#qualify" },
                { label: "Schedule", href: "#schedule" },
                { label: "FAQ", href: "#faq" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[15px] transition-colors hover:text-white"
                    style={{ color: "#C1B3F7", textDecoration: "none", borderBottom: "none" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hack Club links */}
          <div>
            <h5
              className="mb-[18px] font-serif text-[13px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "#B9FFFF" }}
            >
              Hack Club
            </h5>
            <ul className="m-0 flex list-none flex-col gap-[10px] p-0">
              {[
                { label: "Philosophy", href: "https://hackclub.com/philosophy" },
                { label: "Team & Board", href: "https://hackclub.com/team" },
                { label: "Donate", href: "https://hackclub.com/philanthropy/" },
                { label: "Conduct", href: "https://hackclub.com/conduct" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[15px] transition-colors hover:text-white"
                    style={{ color: "#C1B3F7", textDecoration: "none", borderBottom: "none" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h5
              className="mb-[18px] font-serif text-[13px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "#B9FFFF" }}
            >
              Get in touch
            </h5>
            <ul className="m-0 flex list-none flex-col gap-[10px] p-0">
              <li>
                <a
                  href={`mailto:${EVENT.email}`}
                  className="text-[15px] transition-colors hover:text-white"
                  style={{ color: "#C1B3F7", textDecoration: "none", borderBottom: "none" }}
                >
                  {EVENT.email}
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  className="text-[15px] transition-colors hover:text-white"
                  style={{ color: "#C1B3F7", textDecoration: "none", borderBottom: "none" }}
                >
                  Sponsor us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-wrap items-center justify-between gap-5 pt-7 text-[13px]"
          style={{
            borderTop: "1px solid rgba(193,178,247,0.18)",
            color: "#8689C7",
          }}
        >
          <span>© 2026 {HACKCLUB.name}</span>
        </div>
      </div>
    </footer>
  );
}
