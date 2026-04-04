"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import SectionHeading from "./SectionHeading";

const nameVariants = {
  hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: {
      delay: 0.3 + i * 0.18,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function VineetSection() {
  const { vineet } = weddingData;

  return (
    <section className="section-wrapper relative" id="vineet-section"
      >

      {/* Floating mandala */}
      <div className="mandala-bg text-[#c9a029] top-[20%] right-[-5%]" style={{ width: 300, height: 300, animationDuration: "50s" }} />
      <div className="light-bloom" style={{ width: 350, height: 350, top: "15%", left: "-5%" }} />

      <div className="max-w-2xl mx-auto relative z-10">
        <SectionHeading>{vineet.heading}</SectionHeading>

        <motion.div className="royal-card max-w-lg mx-auto text-center"
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          {/* Top ornament */}
          <motion.span className="block text-2xl text-[#c9a029] mb-4"
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.08, 1] }}
            transition={{ duration: 4, repeat: Infinity }}>
            ❊
          </motion.span>

          <div className="space-y-4">
            {vineet.names.map((name, i) => (
              <motion.p key={i} custom={i} variants={nameVariants}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-base md:text-lg font-medium"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-ivory)" }}>
                {name}
              </motion.p>
            ))}
          </div>

          {/* Bottom ornament */}
          <motion.span className="block text-2xl text-[#c9a029] mt-4"
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.08, 1] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}>
            ❊
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
