"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import OrnamentalDivider from "./OrnamentalDivider";

const textReveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: {
      delay: 0.4 + i * 0.18,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function RitualSection() {
  const { ritual } = weddingData;

  return (
    <section className="section-wrapper relative" id="ritual-section"
      >

      {/* Rotating Mandala */}
      <div className="mandala-bg text-[#c9a029] top-[5%] left-[-8%]" style={{ width: 450, height: 450, animationDuration: "90s" }} />
      <div className="mandala-bg text-[#c9a029] bottom-[5%] right-[-8%]" style={{ width: 350, height: 350, animationDirection: "reverse" as const }} />

      {/* Light blooms */}
      <div className="light-bloom" style={{ width: 400, height: 400, top: "30%", right: "-10%" }} />
      <div className="light-bloom" style={{ width: 300, height: 300, bottom: "20%", left: "5%" }} />

      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-0">
        <div className="max-w-3xl md:ml-0 md:mr-auto md:pl-12 lg:pl-24">
        {/* Sacred heading with glow */}
        <motion.div className="text-center mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          {/* Om symbol */}
          <motion.span className="text-3xl md:text-4xl text-[#c9a029] block mb-4"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            🙏
          </motion.span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-wider"
            style={{ fontFamily: "var(--font-heading)" }}>
            <span className="text-shimmer">{ritual.heading}</span>
          </h2>
          <div className="gold-divider mt-4" />
        </motion.div>

        {/* Sacred card with glow pulse */}
        <motion.div className="royal-card"
          initial={{ opacity: 0, y: 50, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{ animation: "glowPulse 5s ease-in-out infinite" }}
        >
          <div className="border border-[#c9a02925] rounded-xl p-6 md:p-10"
            >
            <div className="text-center space-y-4">
              {/* Preamble */}
              <motion.p custom={0} variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-sm md:text-base leading-[2] italic"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-royal-teal)" }}>
                {ritual.preamble}
              </motion.p>

              {/* Date highlight with glow */}
              <motion.div custom={1} variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.p className="text-xl md:text-2xl font-bold my-4"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-gold-shimmer)" }}
                  animate={{ textShadow: ["0 0 0px transparent", "0 0 20px rgba(201,160,41,0.2)", "0 0 0px transparent"] }}
                  transition={{ duration: 3, repeat: Infinity }}>
                  {ritual.date}
                </motion.p>
              </motion.div>

              {/* Main text */}
              <motion.p custom={2} variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-base md:text-lg"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-ivory)" }}>
                {ritual.mainText}
              </motion.p>

              <OrnamentalDivider variant="simple" />

              {/* Closing lines */}
              {ritual.closingLines.map((line, i) => (
                <motion.p key={i} custom={3 + i} variants={textReveal}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className={`text-sm md:text-base leading-[2] ${line === "" ? "h-3" : ""}`}
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-ivory)" }}>
                  {line}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
