"use client";

import { motion } from "framer-motion";

interface Props {
  variant?: "floral" | "simple" | "line";
  className?: string;
}

export default function OrnamentalDivider({ variant = "floral", className = "" }: Props) {
  if (variant === "simple") {
    return (
      <motion.div className={`flex items-center justify-center gap-2 my-6 ${className}`}
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 0.5, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="block w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#c9a029]" />
        <motion.span className="text-[#c9a029] text-xs"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 3, repeat: Infinity }}>✦</motion.span>
        <span className="block w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#c9a029]" />
      </motion.div>
    );
  }

  if (variant === "line") {
    return (
      <motion.div className={`gold-divider ${className}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8/*, delay: 0.2*/ }}
      />
    );
  }

  // Floral variant — default
  return (
    <motion.div className={`flex items-center justify-center gap-3 my-6 ${className}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 0.6, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <span className="block w-12 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#c9a029]" />
      <motion.span className="text-[#c9a029] text-sm"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>❀</motion.span>
      <motion.span className="text-[#c9a029] text-xs"
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}>✦</motion.span>
      <motion.span className="text-[#c9a029] text-sm"
        animate={{ rotate: [0, -15, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>❀</motion.span>
      <span className="block w-12 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#c9a029]" />
    </motion.div>
  );
}
