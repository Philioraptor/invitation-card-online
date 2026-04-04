"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Props {
  onOpen: () => void;
}

// Mandala SVG ornament
function MandalaSVG({ className, style }: { className?: string, style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
      <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      {[...Array(12)].map((_, i) => (
        <line key={i} x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.3" opacity="0.15"
          transform={`rotate(${i * 30} 100 100)`} />
      ))}
      {[...Array(8)].map((_, i) => (
        <ellipse key={`e${i}`} cx="100" cy="100" rx="85" ry="30" stroke="currentColor" strokeWidth="0.3" opacity="0.12"
          transform={`rotate(${i * 22.5} 100 100)`} />
      ))}
    </svg>
  );
}

export default function OpeningScreen({ onOpen }: Props) {
  const [particles, setParticles] = useState<
    { id: number; x: string; y: string; size: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 70; i++) {
      arr.push({
        id: i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: 1.5 + Math.random() * 4,
        delay: Math.random() * 6,
        duration: 2.5 + Math.random() * 5,
      });
    }
    setParticles(arr);
  }, [setParticles]);

  // Handle user trying to scroll down instead of clicking button
  const handleScroll = (e: React.WheelEvent | React.TouchEvent) => {
    // If it's a wheel event and they scrolled down
    if ('deltaY' in e && e.deltaY > 20) {
      onOpen();
    }
    // If it's a touch move, we could track touch Y, but let's just open on any touch move for simplicity
    if ('touches' in e) {
      onOpen();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-x-hidden overflow-y-auto min-h-[100dvh] w-full"
      style={{
        backgroundColor: "#001111",
        backgroundImage: `radial-gradient(ellipse at 30% 30%, rgba(0, 33, 33, 0.9) 0%, rgba(0, 17, 17, 1) 100%), url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E")`,
      }}
      onWheel={handleScroll}
      onTouchMove={handleScroll}
    >
      {/* Animated Mandala Background */}
      <MandalaSVG className="mandala-bg text-[#c9a029] top-[5%] -left-[10%] opacity-[0.04] md:top-[10%] md:left-[5%] md:opacity-[0.025]" />
      <MandalaSVG className="mandala-bg text-[#c9a029] bottom-[2%] -right-[15%] opacity-[0.04] md:bottom-[5%] md:right-[3%] md:opacity-[0.025]" style={{ animationDirection: "reverse", animationDuration: "80s" } as React.CSSProperties} />

      {/* Palace grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(201,160,41,0.3) 80px, rgba(201,160,41,0.3) 81px),
            repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(201,160,41,0.3) 80px, rgba(201,160,41,0.3) 81px)
          `,
        }}
      />

      {/* Radial golden bloom */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(201,160,41,0.2) 0%, transparent 60%)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Shimmer particles */}
      {particles.map((p) => (
        <motion.span key={p.id} className="absolute rounded-full"
          style={{
            left: p.x, top: p.y,
            width: p.size, height: p.size,
            background: "radial-gradient(circle, rgba(245,230,163,0.9), transparent)",
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.6, 1],
          }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Top animated gold border */}
      <motion.div className="absolute top-0 left-0 right-0 h-1.5"
        
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
      />

      {/* Corner ornaments */}
      {[
        "top-3 left-3 rotate-0",
        "top-3 right-3 rotate-90",
        "bottom-3 left-3 -rotate-90",
        "bottom-3 right-3 rotate-180",
      ].map((pos, i) => (
        <motion.div key={i}
          className={`absolute ${pos} text-[#c9a029] text-3xl md:text-4xl`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3], scale: 1 }}
          transition={{
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
            scale: { duration: 1, delay: 0.8 + i * 0.2 },
          }}
        >
          ❧
        </motion.div>
      ))}

      {/* Top Floral ornament - animated */}
      <motion.div className="text-[#c9a029] text-2xl md:text-3xl mb-4 tracking-[0.8em]"
        initial={{ opacity: 0, y: -30, scale: 0.5 }}
        animate={{ opacity: 0.6, y: 0, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>❀</motion.span>
        {" "}✦{" "}
        <motion.span animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>❀</motion.span>
      </motion.div>

      {/* Ganesh invocation */}
      <motion.p className="text-[#f5e6a3] text-sm md:text-base tracking-[0.3em] mb-6"
        style={{ fontFamily: "var(--font-heading)" }}
        initial={{ opacity: 0, letterSpacing: "1em" }}
        animate={{ opacity: 0.85, letterSpacing: "0.3em" }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        ॥ श्री गणेशाय नमः ॥
      </motion.p>

      {/* Main couple names */}
      <motion.div className="text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold py-4 leading-[1.3] md:leading-normal"
          style={{
            fontFamily: "var(--font-heading)",
            background: "linear-gradient(135deg, #f5e6a3 0%, #c9a029 30%, #f5e6a3 50%, #e8c84a 70%, #c9a029 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 3s linear infinite",
            filter: "drop-shadow(0 4px 20px rgba(201,160,41,0.4))",
          }}
        >
          आर्यमान एवं विनीता
        </h1>
        <motion.p className="text-xl sm:text-2xl md:text-3xl mt-2 text-[#f4c2c2]"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          का शुभ विवाह
        </motion.p>
      </motion.div>

      {/* Animated divider */}
      <motion.div className="flex items-center gap-3 my-8"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 2.3 }}
      >
        <motion.span className="block h-[1px] w-16 md:w-28 bg-gradient-to-r from-transparent to-[#c9a029]"
          animate={{ scaleX: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.span className="text-[#f5e6a3] text-lg"
          animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >✦</motion.span>
        <motion.span className="block h-[1px] w-16 md:w-28 bg-gradient-to-l from-transparent to-[#c9a029]"
          animate={{ scaleX: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
      </motion.div>

      {/* ROYAL BUTTON — "निमंत्रण खोलें" */}
      <motion.button onClick={onOpen}
        className="royal-btn text-lg md:text-xl tracking-widest cursor-pointer"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        निमंत्रण खोलें
      </motion.button>

      {/* Bottom ornament */}
      <motion.div className="text-[#c9a029] text-xl mt-10 tracking-[0.8em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, delay: 3.2 }}
      >
        ✿ ❊ ✿
      </motion.div>

      {/* Bottom border */}
      <motion.div className="absolute bottom-0 left-0 right-0 h-1.5"
        
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
      />
    </motion.div>
  );
}
