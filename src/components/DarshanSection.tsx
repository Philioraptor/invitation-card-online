"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import SectionHeading from "./SectionHeading";

const nameVariants = {
  hidden: { opacity: 0, x: -25, filter: "blur(5px)" },
  visible: (i: number) => ({
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: {
      delay: 0.3 + i * 0.14,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function DarshanSection() {
  const { darshan } = weddingData;

  return (
    <section className="section-wrapper relative" id="darshan-section">
      {/* Mandala */}
      <div className="mandala-bg text-[#c9a029] bottom-[15%] left-[3%]" style={{ width: 280, height: 280, animationDuration: "55s" }} />
      <div className="light-bloom" style={{ width: 300, height: 300, top: "10%", right: "0%" }} />

      <div className="max-w-2xl mx-auto relative z-10">
        <SectionHeading>{darshan.heading}</SectionHeading>

        <motion.div className="royal-card max-w-lg mx-auto"
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            {darshan.names.map((name, i) => (
              <motion.div key={i} custom={i} variants={nameVariants}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="py-3 px-4 rounded-xl transition-all duration-500 hover:bg-[#c9a02908] hover:shadow-sm group"
              >
                <motion.p className="text-sm md:text-base font-medium"
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-ivory)" }}
                  whileHover={{ scale: 1.02 }}>
                  {name}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
