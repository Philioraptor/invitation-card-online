"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface PetalData {
  id: string;
  left: string;
  size: number;
  duration: number;
  color: string;
  type: "petal" | "leaf_long" | "leaf_round" | "star";
  rotate: number;
  blur: number;
  sway: number;
  landedX: string; // Position when it lands
}

export default function FloatingPetals() {
  const [activePetals, setActivePetals] = useState<PetalData[]>([]);
  const [landedPetals, setLandedPetals] = useState<PetalData[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const colors = [
    "rgba(255, 182, 193, 0.7)", // Pink
    "rgba(255, 218, 185, 0.6)", // Peach
    "rgba(218, 165, 32, 0.45)", // Golden yellow
    "rgba(255, 255, 255, 0.4)",  // Crystal white
    "rgba(144, 238, 144, 0.3)", // Light green leaf
    "rgba(255, 105, 180, 0.5)", // Hot pink petal
  ];
  
  const types: PetalData["type"][] = ["petal", "petal", "leaf_long", "leaf_round", "star"];

  // Helper to create a new petal
  const createPetal = useCallback(() => {
    const type = types[Math.floor(Math.random() * types.length)];
    return {
      id: Math.random().toString(36).substr(2, 9),
      left: `${Math.random() * 100}%`,
      size: type === 'star' ? 4 + Math.random() * 8 : 12 + Math.random() * 25,
      duration: 12 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      type,
      rotate: Math.random() * 360,
      blur: Math.random() > 0.8 ? 1 + Math.random() * 3 : 0,
      sway: 40 + Math.random() * 80,
      landedX: `${Math.random() * 100}%`,
    } as PetalData;
  }, []);

  // Initialize and spawn
  useEffect(() => {
    if (shouldReduceMotion) return;

    // Start with a few initial petals
    const initial = Array.from({ length: 20 }, createPetal);
    setActivePetals(initial);

    // Continuous spawn interval
    const interval = setInterval(() => {
      setActivePetals((prev) => {
        if (prev.length < 50) {
          return [...prev, createPetal()];
        }
        return prev;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [createPetal, shouldReduceMotion]);

  // Handle landing
  const handleLand = (petal: PetalData) => {
    setActivePetals((prev) => prev.filter((p) => p.id !== petal.id));
    setLandedPetals((prev) => {
      const next = [...prev, petal];
      // Limit landed petals for performance (max 120)
      if (next.length > 120) return next.slice(1);
      return next;
    });
  };

  if (shouldReduceMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden bg-transparent" aria-hidden>
      {/* Falling Petals */}
      <AnimatePresence>
        {activePetals.map((p) => (
          <motion.div
            key={p.id}
            className="absolute"
            style={{
              left: p.left,
              top: "-50px",
              filter: p.blur ? `blur(${p.blur}px)` : 'none',
            }}
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: "95vh",
              x: [0, p.sway * 0.5, -p.sway * 0.5, 0],
              rotate: p.rotate + 360,
              opacity: [0, 1, 1],
            }}
            onAnimationComplete={() => handleLand(p)}
            transition={{
              y: { duration: p.duration, ease: "linear" },
              x: { duration: p.duration / 3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: p.duration, repeat: Infinity, ease: "linear" },
              opacity: { duration: 1 }
            }}
          >
            <PetalShape type={p.type} size={p.size} color={p.color} rotate={p.rotate} />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Landed (Stored) Petals */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        {landedPetals.map((p) => (
          <motion.div
            key={`landed-${p.id}`}
            className="absolute opacity-60"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.6 }}
            style={{
              left: p.landedX,
              bottom: `${Math.random() * 20}px`, // Slight stacking
              filter: p.blur ? `blur(${p.blur + 1}px)` : 'none',
            }}
          >
            <PetalShape type={p.type} size={p.size * 0.8} color={p.color} rotate={p.rotate} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PetalShape({ type, size, color, rotate }: { type: PetalData["type"], size: number, color: string, rotate: number }) {
  if (type === "leaf_long") {
    return (
      <svg width={size} height={size * 2} viewBox="0 0 100 200" fill={color} style={{ transform: `rotate(${rotate}deg)` }}>
        <path d="M50 0C50 0 90 70 90 130C90 168.66 67.6142 200 50 200C32.3858 200 10 168.66 10 130C10 70 50 0 50 0Z" />
        <path d="M50 0V200" stroke="rgba(0,0,0,0.05)" strokeWidth="2" />
      </svg>
    );
  }
  if (type === "leaf_round") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill={color} style={{ transform: `rotate(${rotate}deg)` }}>
        <path d="M50 5C80 5 95 30 95 50C95 70 80 95 50 95C20 95 5 70 5 50C5 30 20 5 50 5Z" />
        <path d="M50 5V95" stroke="rgba(0,0,0,0.05)" strokeWidth="2" />
      </svg>
    );
  }
  if (type === "star") {
    return (
      <div className="rounded-full shadow-lg" style={{ width: size, height: size, backgroundColor: 'rgba(212, 175, 55, 0.8)', boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)' }} />
    );
  }
  return (
    <div className="shadow-sm" style={{ width: size, height: size * 1.3, backgroundColor: color, borderRadius: "60% 10% 60% 40%", transform: `rotate(${rotate}deg)` }} />
  );
}
