"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import SectionHeading from "./SectionHeading";
import OrnamentalDivider from "./OrnamentalDivider";

const lineReveal = {
  hidden: { opacity: 0, x: -20, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: {
      delay: 0.3 + i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

function PersonCard({
  intro, address, side,
}: { intro: string[]; address: string[]; side: "groom" | "bride" }) {
  return (
    <motion.div className="royal-card flex-1 min-w-[280px]"
      initial={{ opacity: 0, y: 50, rotateY: side === "groom" ? -15 : 15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      style={{ perspective: "1200px" }}
    >
      {/* Label badge */}
      <motion.div className="text-center mb-5"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <span className="inline-block px-5 py-1.5 rounded-full text-xs tracking-[0.2em] font-semibold"
          style={{
            background: "linear-gradient(135deg, rgba(201,160,41,0.1), rgba(201,160,41,0.05))",
            border: "1px solid rgba(201,160,41,0.3)",
            color: "var(--color-gold)",
            fontFamily: "var(--font-heading)",
          }}>
          {side === "groom" ? "वर पक्ष" : "वधू पक्ष"}
        </span>
      </motion.div>

      {/* Intro */}
      <div className="text-center space-y-1.5">
        {intro.map((line, i) => (
          <motion.p key={i} custom={i} variants={lineReveal}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className={i === 0 ? "text-lg md:text-xl font-bold" : "text-sm md:text-base opacity-90"}
            style={{
              fontFamily: "var(--font-body)",
              color: i === 0 ? "var(--color-gold-shimmer)" : "var(--color-ivory)",
            }}>
            {line}
          </motion.p>
        ))}
      </div>

      <motion.div className="w-16 h-[1px] mx-auto my-5"
        style={{ background: "linear-gradient(90deg, transparent, #c9a029, transparent)" }}
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />

      {/* Address */}
      <div className="text-center space-y-1">
        {address.map((line, i) => (
          <motion.p key={i} custom={intro.length + i} variants={lineReveal}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-sm opacity-80"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-teal-light)" }}>
            {line}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

export default function CoupleIntro() {
  const { groom, bride } = weddingData.couple;

  return (
    <section className="section-wrapper relative" id="couple-intro">
      {/* Mandala */}
      <div className="mandala-bg text-[#c9a029] bottom-[10%] left-[5%]" style={{ animationDuration: "70s" }} />
      <div className="light-bloom" style={{ width: 400, height: 400, top: "20%", right: "-5%" }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading>वर-वधू परिचय</SectionHeading>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-4 mt-12 relative">
          <div className="w-full lg:w-[calc(50%-2rem)] max-w-xl lg:mt-0 z-10">
            <PersonCard intro={groom.fullIntro} address={groom.address} side="groom" />
          </div>

          {/* Center rotating ornament - vertical on desktop, horizontal on mobile */}
          <div className="flex lg:flex-col items-center justify-center gap-3 py-4 lg:py-0 w-full lg:w-16 lg:mt-32 z-20">
            <motion.span className="block h-[1px] lg:h-24 w-24 lg:w-[1px] bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-[#c9a029] to-transparent"
              initial={{ scaleX: 0, scaleY: 0 }} whileInView={{ scaleX: 1, scaleY: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <motion.span className="text-3xl md:text-4xl text-[#c9a029] flex-shrink-0"
              animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
              transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity } }}>
              ❁
            </motion.span>
            <motion.span className="block h-[1px] lg:h-24 w-24 lg:w-[1px] bg-gradient-to-l lg:bg-gradient-to-t from-transparent via-[#c9a029] to-transparent"
              initial={{ scaleX: 0, scaleY: 0 }} whileInView={{ scaleX: 1, scaleY: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>

          <div className="w-full lg:w-[calc(50%-2rem)] max-w-xl lg:mt-32 z-10 transition-transform">
            <PersonCard intro={bride.fullIntro} address={bride.address} side="bride" />
          </div>
        </div>

        <OrnamentalDivider variant="floral" className="mt-12" />
      </div>
    </section>
  );
}
