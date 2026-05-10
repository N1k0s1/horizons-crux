import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ElementType, SVGProps } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Code2,
  Compass,
  ExternalLink,
  HelpCircle,
  History,
  Home,
  Mail,
  MapPin,
  Plane,
  Sparkles,
  Ticket,
  Users,
} from "lucide-react";
import { EVENT, HACKCLUB } from "@/lib/content";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Horizons Crux Links",
  description:
    "Quick links for Horizons Crux: qualify, get a ticket, read event details, contact the team, and find Hack Club resources.",
};

type LinkIcon = ElementType<SVGProps<SVGSVGElement>>;

function InstagramLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.29 8h4.42v15H.29V8Zm7.36 0h4.24v2.05h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.3 2.94 5.3 6.76V23h-4.42v-7.52c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V23H7.65V8Z" />
    </svg>
  );
}

const quickLinks = [
  {
    label: "Main site",
    href: "/",
    icon: Home,
  },
  {
    label: "Email",
    href: `mailto:${EVENT.email}`,
    icon: Mail,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/horizonscrux/",
    icon: InstagramLogo,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/horizons-crux/",
    icon: LinkedInLogo,
  },
] as const;

type LinkItem = {
  title: string;
  eyebrow: string;
  href: string;
  icon: LinkIcon;
  featured?: boolean;
};

const primaryLinks: LinkItem[] = [
  {
    title: "Start qualifying on Horizons",
    eyebrow: `${EVENT.hoursRequired} hours of building gets you eligible`,
    href: EVENT.applyUrl,
    icon: Sparkles,
    featured: true,
  },
  {
    title: "Claim your Crux ticket",
    eyebrow: "Spend your hours for the Sydney event",
    href: EVENT.applyDirectUrl,
    icon: Ticket,
    featured: true,
  },
  {
    title: "About Horizons Crux",
    eyebrow: "Sydney, Hack Club, and the weekend ahead",
    href: "/#about",
    icon: MapPin,
  },
  {
    title: "Previous Hack Club events",
    eyebrow: "Campfire, Daydream, Midnight, Undercity, and KiwiHacks",
    href: "/#past",
    icon: History,
  },
  {
    title: "How qualifying works",
    eyebrow: EVENT.qualifyPeriod,
    href: "/#qualify",
    icon: Clock3,
  },
  {
    title: "Event schedule",
    eyebrow: `${EVENT.dates} in ${EVENT.city}`,
    href: "/#schedule",
    icon: CalendarDays,
  },
  {
    title: "What's Covered?",
    eyebrow: "Flights, accommodation, meals, transport, swag, awards",
    href: "/#covered",
    icon: Plane,
  },
  {
    title: "Questions and answers",
    eyebrow: "Visas, sleep, teams, packing, and parents",
    href: "/#faq",
    icon: HelpCircle,
  },
  {
    title: "Sponsor Horizons Crux",
    eyebrow: "Help keep the weekend free for every builder",
    href: "/#sponsors",
    icon: Users,
  },
  {
    title: "Follow Horizons Crux on Instagram",
    eyebrow: "Photos, reminders, and weekend updates",
    href: "https://www.instagram.com/horizonscrux/",
    icon: InstagramLogo,
  },
  {
    title: "Horizons Crux on LinkedIn",
    eyebrow: "Updates for partners, sponsors, and the wider community",
    href: "https://www.linkedin.com/company/horizons-crux/",
    icon: LinkedInLogo,
  },
  {
    title: "Track time with Hackatime",
    eyebrow: "The coding clock behind Horizons Crux",
    href: "https://hackatime.hackclub.com",
    icon: Code2,
  },
  {
    title: "Hack Club",
    eyebrow: `${HACKCLUB.students} students from around the world, open-source, nonprofit`,
    href: HACKCLUB.url,
    icon: Compass,
  },
  {
    title: "Email the Crux team",
    eyebrow: EVENT.email,
    href: `mailto:${EVENT.email}`,
    icon: Mail,
  },
] as const;

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export default function LinksPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden px-5 py-8 text-white sm:px-6 lg:px-8"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, rgba(255,122,226,0.28) 0%, rgba(82,88,228,0.18) 28%, transparent 56%), linear-gradient(180deg, #0D1117 0%, #161424 48%, #0D1117 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage: `url(${asset("/art/body-bg.png")})`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      />

      <Image
        src={asset("/art/jellyfish-pink.png")}
        alt=""
        width={120}
        height={130}
        className="pointer-events-none absolute right-[-16px] top-20 hidden opacity-85 sm:block"
        style={{ width: "auto", height: "auto", animation: "bob 8s ease-in-out infinite alternate" }}
      />
      <Image
        src={asset("/art/jellyfish-cyan.png")}
        alt=""
        width={92}
        height={118}
        className="pointer-events-none absolute bottom-12 left-[-20px] hidden opacity-75 sm:block"
        style={{ width: "auto", height: "auto", animation: "bob 9s ease-in-out infinite alternate-reverse" }}
      />

      <section className="relative mx-auto flex w-full max-w-[680px] flex-col items-center">
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-4 grid h-[104px] w-[104px] place-items-center rounded-full border border-[rgba(193,178,247,0.24)] bg-[#0D1117] shadow-[0_18px_60px_rgba(255,122,226,0.24)]">
            <Image
              src={asset("/art/icon.png")}
              alt=""
              width={70}
              height={52}
              className="object-contain"
              style={{ width: 70, height: "auto" }}
              priority
            />
          </div>
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#B9FFFF]">
            {EVENT.dateShort} · {EVENT.city}
          </p>
          <h1 className="mb-3 text-4xl font-bold leading-[1.02] sm:text-5xl">
            Horizons <span className="text-[#FF7AE2]">Crux</span>
          </h1>
          <p className="m-0 max-w-[36rem] text-[16px] leading-relaxed text-[#C1B3F7] sm:text-[17px]">
            Quick links for qualifying, travelling to Sydney, and getting your
            questions answered.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {quickLinks.map(({ label, href, icon: Icon }) => {
            const external = isExternal(href);
            const content = (
              <>
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">{label}</span>
              </>
            );

            return external ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={label}
                title={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(193,178,247,0.28)] bg-white/[0.08] text-white transition hover:-translate-y-0.5 hover:border-[#B9FFFF] hover:bg-[#B9FFFF] hover:text-[#0D1117]"
              >
                {content}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                aria-label={label}
                title={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(193,178,247,0.28)] bg-white/[0.08] text-white transition hover:-translate-y-0.5 hover:border-[#B9FFFF] hover:bg-[#B9FFFF] hover:text-[#0D1117]"
              >
                {content}
              </Link>
            );
          })}
        </div>

        <div className="flex w-full flex-col gap-3">
          {primaryLinks.map(({ title, eyebrow, href, icon: Icon, featured }, index) => {
            const external = isExternal(href);
            const linkClass = [
              "group flex min-h-[78px] w-full items-center gap-4 rounded-lg border p-4 text-left transition duration-200 hover:-translate-y-0.5 sm:p-5",
              featured
                ? "border-[#FF7AE2]/55 bg-[#FF7AE2] text-[#0D1117] shadow-[0_16px_44px_rgba(255,122,226,0.25)] hover:bg-[#ff95e8]"
                : "border-[rgba(193,178,247,0.22)] bg-white/[0.08] text-white hover:border-[#B9FFFF]/65 hover:bg-white/[0.13]",
            ].join(" ");

            const content = (
              <>
                <span
                  className={[
                    "grid h-12 w-12 shrink-0 place-items-center rounded-lg border",
                    featured
                      ? "border-[#0D1117]/10 bg-[#0D1117]/10"
                      : "border-[rgba(193,178,247,0.2)] bg-[#0D1117]/55 text-[#B9FFFF]",
                  ].join(" ")}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[16px] font-bold leading-tight sm:text-[17px]">
                    {title}
                  </span>
                  <span
                    className={[
                      "mt-1 block text-[13px] leading-snug sm:text-sm",
                      featured ? "text-[#241321]/75" : "text-[#C1B3F7]",
                    ].join(" ")}
                  >
                    {eyebrow}
                  </span>
                </span>
                <span
                  className={[
                    "grid h-9 w-9 shrink-0 place-items-center rounded-full transition group-hover:translate-x-0.5",
                    featured ? "bg-[#0D1117]/10" : "bg-white/[0.08] text-[#B9FFFF]",
                  ].join(" ")}
                >
                  {external ? (
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  )}
                </span>
              </>
            );

            return external ? (
              <a
                key={`${href}-${index}`}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                className={linkClass}
              >
                {content}
              </a>
            ) : (
              <Link key={`${href}-${index}`} href={href} className={linkClass}>
                {content}
              </Link>
            );
          })}
        </div>

        <p className="mb-0 mt-8 text-center text-[13px] text-[#8689C7]">
          © {EVENT.year} {HACKCLUB.name} · {HACKCLUB.nonprofit}
        </p>
      </section>
    </main>
  );
}
