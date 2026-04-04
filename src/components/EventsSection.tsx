"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import SectionHeading from "./SectionHeading";

export default function EventsSection() {
  return (
    <section className="section-wrapper dark-section relative" id="events-section">
      {/* Mandala bg */}
      <div className="mandala-bg text-[#c9a029] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: 500, height: 500 }}
      />

      {/* Light bloom */}
      <div className="light-bloom" style={{ width: 400, height: 400, top: "20%", right: "-10%" }} />

      <div className="max-w-7xl mx-auto relative z-10 px-4">
        <SectionHeading>मांगलिक कार्यक्रम</SectionHeading>

        {/* Events grid - properly centered across all devices, staggered on desktop */}
        <div className="flex flex-wrap lg:items-start justify-center gap-6 md:gap-8 lg:gap-12 mt-12 pb-12 lg:pb-24">
          {weddingData.events.map((event, i) => (
            <motion.div key={i}
              className={`w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-2rem)] max-w-sm ${i % 2 !== 0 ? 'lg:translate-y-16' : 'lg:-translate-y-4'}`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.12,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
            >
              <motion.div className="royal-card group relative overflow-hidden"
                whileHover={{
                  y: -6,
                  boxShadow: "0 16px 48px rgba(201,160,41,0.2), 0 4px 16px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Individual sweeping light effect */}
                <motion.div className="absolute top-0 left-[-100%] w-[50%] h-full opacity-30 pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)", transform: "skewX(-25deg)" }}
                  animate={{ left: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, delay: i * 1.5 }}
                />

                <div className="text-center relative z-10">
                  {/* Animated Light orb behind icon */}
                  <motion.div className="absolute top-0 left-1/2 w-16 h-16 rounded-full blur-[20px] -translate-x-1/2 opacity-60 pointer-events-none"
                    style={{ background: "radial-gradient(circle, #e9c349 0%, transparent 70%)" }}
                    animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                  />

                  {/* Animated Icon */}
                  <motion.span className="text-4xl md:text-5xl block mb-4 relative z-10 filter drop-shadow-md text-[#e9c349]"
                    animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  >
                    {event.icon}
                  </motion.span>

                  {/* Title with glow */}
                  <h3
                    className="text-xl md:text-2xl font-bold mb-2 relative"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-gold-shimmer)" }}
                  >
                    {event.title}
                  </h3>

                  {/* Animated mini divider */}
                  <motion.div
                    className="w-20 h-[2px] mx-auto my-4"
                    style={{ background: "linear-gradient(90deg, transparent, #c9a029, transparent)" }}
                    animate={{ scaleX: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
                  />

                  {/* Date */}
                  <p className="text-base md:text-lg font-semibold tracking-wide"
                    style={{ fontFamily: "var(--font-body)", color: "var(--color-ivory)" }}>
                    {event.date}
                  </p>

                  {/* Time */}
                  {event.time && (
                    <p className="text-sm md:text-base mt-2 opacity-80 font-medium"
                      style={{ fontFamily: "var(--font-body)", color: "var(--color-teal-light)" }}>
                      {event.time}
                    </p>
                  )}
                </div>

                {/* Permanent ambient glow */}
                <motion.div className="absolute inset-0 rounded-[20px] pointer-events-none opacity-50"
                  animate={{ boxShadow: ["inset 0 0 20px rgba(201,160,41,0.05)", "inset 0 0 40px rgba(201,160,41,0.15)", "inset 0 0 20px rgba(201,160,41,0.05)"] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }} />

                {/* Hover glow effect */}
                <motion.div className="absolute inset-0 rounded-[20px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: "inset 0 0 40px rgba(201,160,41,0.2)" }} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
