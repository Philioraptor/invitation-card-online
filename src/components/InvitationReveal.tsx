"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import OrnamentalDivider from "./OrnamentalDivider";

const lineVariants = {
  hidden: { opacity: 0, y: 25, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.6 + i * 0.25,
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function InvitationReveal() {
  return (
    <section className="section-wrapper relative flex items-center justify-center"
      id="invitation-reveal">

      {/* Mandala BG */}
      <div className="mandala-bg text-[#c9a029] top-[15%] right-[-5%]" />

      {/* Light blooms */}
      <div className="light-bloom" style={{ width: 500, height: 500, top: "15%", left: "-10%" }} />
      <div className="light-bloom" style={{ width: 300, height: 300, bottom: "10%", right: "5%" }} />

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(201,160,41,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Animated top ornament */}
        <motion.div className="text-center mb-8"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <motion.span className="text-4xl md:text-5xl text-[#c9a029] inline-block"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
            ❀
          </motion.span>
        </motion.div>

        {/* Ganesh invocation with glow animation */}
        <motion.p className="text-center text-lg md:text-xl tracking-[0.2em] mb-8"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-gold-shimmer)" }}
          initial={{ opacity: 0, filter: "blur(12px)", scale: 0.9 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          ॥ श्री गणेशाय नमः ॥
        </motion.p>

        <OrnamentalDivider variant="floral" />

        {/* Royal Card */}
        <motion.div className="royal-card mt-8"
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{ animation: "glowPulse 5s ease-in-out infinite", perspective: "1000px" }}
        >
          <div className="border border-[#c9a02930] rounded-xl p-6 md:p-10"
            >
            <div className="text-center">
              {weddingData.invitationMessage.map((line, i) => (
                <motion.p key={i} custom={i} variants={lineVariants}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className={`text-base md:text-lg leading-[2.2] ${line === "" ? "h-4" : ""}`}
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-ivory)" }}>
                  {line}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Animated bottom ornament */}
        <motion.div className="text-center mt-10"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <motion.span className="text-[#c9a029] text-2xl tracking-[0.5em] inline-block"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}>
            ✿ ❊ ✿
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
