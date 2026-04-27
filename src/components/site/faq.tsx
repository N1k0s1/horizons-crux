"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS, EVENT } from "@/lib/content";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden py-[80px] lg:py-[120px]"
      style={{ background: "#0D1117" }}
    >
      {/* Jellyfish deco */}
      <Image
        src="/horizons-crux/art/jellyfish-cyan.png"
        alt=""
        width={130}
        height={180}
        className="pointer-events-none absolute bottom-[12%] left-[4%] hidden lg:block"
        style={{
          opacity: 0.9,
          zIndex: 1,
          animation: "bob 9s ease-in-out infinite alternate-reverse",
        }}
      />

      <div
        className="relative mx-auto max-w-[880px] px-7"
        style={{ zIndex: 2 }}
      >
        <p
          className="mb-[14px] flex items-center gap-[10px] text-[12px] uppercase tracking-[0.22em]"
          style={{ color: "#B9FFFF", fontWeight: 500 }}
        >
          <span className="inline-block shrink-0" style={{ width: 24, height: 1, background: "#B9FFFF" }} />
          Frequently asked
        </p>
        <h2
          className="font-serif mb-5 text-4xl font-bold leading-[1.05] tracking-[-0.015em] lg:text-[clamp(34px,4.4vw,56px)]"
          style={{ maxWidth: "22ch" }}
        >
          Questions, answered.
        </h2>
        <p className="mb-8 text-base" style={{ color: "#C1B3F7" }}>
          Anything else? Email{" "}
          <a
            href={`mailto:${EVENT.email}`}
            style={{ color: "#FF7AE2", borderBottom: "1px dashed rgba(255,122,226,0.4)" }}
          >
            {EVENT.email}
          </a>
        </p>

        <Accordion
          multiple={false}
          className="w-full"
          style={{ borderTop: "1px solid rgba(193,178,247,0.18)" }}
        >
          {FAQ_ITEMS.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              style={{ borderBottom: "1px solid rgba(193,178,247,0.18)" }}
              className="border-0"
            >
              <AccordionTrigger
                className="py-[26px] text-left text-[19px] font-semibold hover:no-underline"
                style={{
                  color: "#fff",
                  fontFamily: "var(--font-serif)",
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                {item.q}
              </AccordionTrigger>
              <AccordionContent
                className="pb-7 text-base leading-relaxed"
                style={{ color: "#C1B3F7", paddingLeft: 4, paddingRight: 4 }}
              >
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
