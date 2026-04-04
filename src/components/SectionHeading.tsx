"use client";

import { motion } from "framer-motion";

interface Props {
  children: string;
  className?: string;
}

export default function SectionHeading({ children, className = "" }: Props) {
  return (
    <motion.div className={`text-center mb-10 ${className}`}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      <h2 className="text-2xl md:text-4xl font-bold tracking-wider heading-ornament inline-block"
        style={{ fontFamily: "var(--font-heading)" }}>
        <span className="text-shimmer">{children}</span>
      </h2>

      {/* Animated underline */}
      <motion.div className="gold-divider mt-4"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  );
}
