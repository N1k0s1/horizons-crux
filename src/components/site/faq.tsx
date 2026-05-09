"use client";

import Image from "next/image";
import { asset } from "@/lib/asset";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS, EVENT } from "@/lib/content";
import Link from "next/link";
import { ReactNode } from "react";

function parseMarkdownLinks(text: string) {
  const parts: (string | ReactNode)[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={`link-${match.index}`}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#FF7AE2", borderBottom: "1px dashed rgba(255,122,226,0.4)" }}
      >
        {match[1]}
      </a>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden py-[80px] lg:py-[120px]"
      style={{ background: "#0D1117" }}
    >
      {/* Jellyfish deco */}
      <Image
        src={asset("/art/jellyfish-cyan.png")}
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
      <Image
        src={asset("/art/jellyfish-yellow.png")}
        alt=""
        aria-hidden="true"
        width={120}
        height={160}
        className="pointer-events-none absolute top-[12%] right-[6%] hidden select-none lg:block"
        style={{
          zIndex: 1,
          opacity: 0.85,
          width: "150px",
          height: "auto",
          animation: "bob 11s ease-in-out infinite alternate-reverse",
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
                {parseMarkdownLinks(item.a)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
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
              boxShadow: "none",
            }}
          >
            Get Started! →
          </a>
        </div>
      </div>
    </section>
  );
}
