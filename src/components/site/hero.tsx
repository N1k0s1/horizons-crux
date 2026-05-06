import Image from "next/image";
import { EVENT } from "@/lib/content";
import { asset } from "@/lib/asset";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden"
      style={{ isolation: "isolate" }}
    >
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage: `url(${asset("/art/hero-bg.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(13,17,23,0.55) 0%, rgba(13,17,23,0) 55%)",
        }}
      />

      {/* Bottom fade to next section */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 -z-10"
        style={{
          height: "40%",
          background:
            "linear-gradient(180deg, rgba(13,17,23,0) 0%, rgba(13,17,23,0.35) 60%, #0D1117 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative mx-auto flex min-h-screen flex-col items-center justify-start px-6 pb-16 pt-[80px] text-center lg:px-12 lg:pb-20 lg:pt-[120px]"
        style={{ maxWidth: 1280 }}
      >
        {/* Logo */}
        <Image
          src={asset("/art/logo.png")}
          alt="Horizons Crux"
          width={360}
          height={120}
          priority
          className="logo-glow mb-[22px] h-auto w-[220px] lg:w-[360px]"
        />

        {/* Eyebrow */}
        <p
          className="mb-[22px] flex items-center gap-[10px] text-[13px] uppercase tracking-[0.22em]"
          style={{
            color: "#B9FFFF",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            margin: "0 0 22px",
          }}
        >
          {EVENT.city} · Jul 10 – 12, {EVENT.year}
        </p>

        <p className="max-w-100 mb-[22px]">
          A Hack Club flagship hackathon, in Sydney Australia. Code for 35 hours
          and come to Australia for 48 hours of learning, teamwork, and fun!
        </p>

        {/* CTA — self-start prevents stretching to full width */}
        <a
          href={EVENT.applyUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-full px-6 py-3 text-[15px] font-semibold transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
          style={{
            background: "#FF7AE2",
            color: "#0D1117",
            textDecoration: "none",
            borderBottom: "none",
            boxShadow: "0 6px 20px rgba(255,122,226,0.25)",
          }}
        >
          Sign up! →
        </a>
      </div>
    </section>
  );
}
