"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #001111 0%, #002121 30%, #001111 100%)",
      }}
    >
      {/* Floating ornaments */}
      <motion.div className="flex items-center justify-center gap-4 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.span className="text-lg md:text-xl text-[#f5e6a3] opacity-50"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>❀</motion.span>
        <motion.span className="text-xs text-[#f5e6a3]"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 3, repeat: Infinity }}>✦</motion.span>
        <motion.span className="text-lg md:text-xl text-[#f5e6a3] opacity-50"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}>❁</motion.span>
        <motion.span className="text-xs text-[#f5e6a3]"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}>✦</motion.span>
        <motion.span className="text-lg md:text-xl text-[#f5e6a3] opacity-50"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>❀</motion.span>
      </motion.div>

      {/* Couple monogram — "आ ❤ वि" */}
      <motion.div className="text-center mb-8"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      >
        <motion.div
          className="inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full text-2xl md:text-3xl font-bold"
          style={{
            fontFamily: "var(--font-heading)",
            color: "#f5e6a3",
            border: "2px solid rgba(201,160,41,0.5)",
            background: "linear-gradient(135deg, rgba(201,160,41,0.08), rgba(201,160,41,0.02))",
          }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(201,160,41,0.15)",
              "0 0 50px rgba(201,160,41,0.3), 0 0 80px rgba(201,160,41,0.1)",
              "0 0 20px rgba(201,160,41,0.15)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>आ</span>
          <motion.span className="text-red-400 mx-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}>❤</motion.span>
          <span>वि</span>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <motion.div className="flex items-center justify-center gap-3 mb-6"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 0.6, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span className="block w-20 md:w-32 h-[1px] bg-gradient-to-r from-transparent to-[#c9a029]" />
        <motion.span className="text-[#f5e6a3] text-sm"
          animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>◆ ✦ ◆</motion.span>
        <span className="block w-20 md:w-32 h-[1px] bg-gradient-to-l from-transparent to-[#c9a029]" />
      </motion.div>

      {/* Closing blessing */}
      <motion.p className="text-center text-lg md:text-xl font-bold mb-3 tracking-wider"
        style={{ fontFamily: "var(--font-heading)", color: "#f5e6a3" }}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        शुभं भवतु कल्याणम् ।
      </motion.p>

      <motion.p className="text-center text-sm mt-3 text-[#c9a029] opacity-50"
        style={{ fontFamily: "var(--font-body)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.2 }}>
        शाही विवाह निमंत्रण | 2026
      </motion.p>
    </footer>
  );
}
