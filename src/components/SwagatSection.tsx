"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import SectionHeading from "./SectionHeading";

const nameVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: {
      delay: 0.3 + i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function SwagatSection() {
  const { swagat } = weddingData;

  return (
    <section className="section-wrapper relative" id="swagat-section"
      >

      {/* Large faded ornament */}
      <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}>
        <span className="text-[250px] md:text-[350px] text-[#c9a029] opacity-[0.02]">❁</span>
      </motion.div>

      <div className="light-bloom" style={{ width: 350, height: 350, bottom: "10%", right: "-5%" }} />

      <div className="max-w-2xl mx-auto relative z-10">
        <SectionHeading>{swagat.heading}</SectionHeading>

        <motion.div className="royal-card max-w-lg mx-auto text-center"
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          {/* Floral accent */}
          <motion.div className="flex justify-center gap-3 mb-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.5, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.span className="text-lg text-[#c9a029]"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}>🌿</motion.span>
            <span className="text-lg text-[#c9a029]">✦</span>
            <motion.span className="text-lg text-[#c9a029]"
              animate={{ rotate: [0, -15, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}>🌿</motion.span>
          </motion.div>

          <div className="space-y-3">
            {swagat.names.map((name, i) => (
              <motion.div key={i} custom={i} variants={nameVariants}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="py-2 px-4 rounded-xl transition-all duration-400 hover:bg-[#c9a02906]"
              >
                <p className="text-sm md:text-base font-medium"
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-ivory)" }}>
                  {name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
