import Image from "next/image";
import { EVENT, HACKCLUB } from "@/lib/content";
import { asset } from "@/lib/asset";

export default function Footer() {
  return (
    <>
    <footer
      className="pb-10 pt-24"
    >
      <div className="mx-auto max-w-[1180px] px-7">
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

        
      </div>
    </footer>
      <Image
        src={asset("/art/footer3.png")}
        alt=""
        width={1920}
        height={1080}
        className="w-full"
      />
    </>
  );
}
