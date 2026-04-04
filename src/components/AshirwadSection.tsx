"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { useState, useEffect } from "react";

export default function AshirwadSection() {
  const { ashirwad } = weddingData;
  const [particles, setParticles] = useState<
    { id: number; x: string; delay: number; dur: number; size: number }[]
  >([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 25; i++) {
      arr.push({
        id: i,
        x: `${Math.random() * 100}%`,
        delay: Math.random() * 4,
        dur: 3 + Math.random() * 4,
        size: 2 + Math.random() * 3,
      });
    }
    setParticles(arr);
  }, [setParticles]);

  return (
    <section className="section-wrapper relative overflow-hidden" id="ashirwad-section"
      >

      {/* Floating golden particles rising up */}
      {particles.map((p) => (
        <motion.span key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.x,
            width: p.size,
            height: p.size,
            background: "radial-gradient(circle, rgba(201,160,41,0.6), transparent)",
          }}
          animate={{
            y: [600, -50],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Rotating mandala */}
      <div className="mandala-bg text-[#c9a029] top-[10%] right-[-10%]" style={{ width: 400, height: 400, animationDuration: "80s" }} />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-wider heading-ornament"
            style={{ fontFamily: "var(--font-heading)" }}>
            <span className="text-shimmer">{ashirwad.heading}</span>
          </h2>
          <div className="gold-divider mt-4" />
        </motion.div>

        {/* Tribute section */}
        <motion.div className="max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          {/* Namaste emoji with glow */}
          <motion.div className="text-5xl md:text-6xl mb-6"
            animate={{
              scale: [1, 1.08, 1],
              filter: ["drop-shadow(0 0 0px transparent)", "drop-shadow(0 0 20px rgba(201,160,41,0.3))", "drop-shadow(0 0 0px transparent)"],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            🙏
          </motion.div>

          {/* Names from data */}
          {ashirwad.names.map((name, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.2, duration: 1 }}
            >
              <motion.h3 className="text-lg md:text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-gold-shimmer)" }}
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 3, repeat: Infinity }}>
                {name}
              </motion.h3>
            </motion.div>
          ))}

          {/* Blessing message */}
          <motion.p className="text-sm md:text-base mt-4 opacity-70"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-ivory)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}>
            सदैव आशीर्वाद बनाए रखें
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
