"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Petal {
  id: number;
  left: string;
  size: number;
  delay: number;
  duration: number;
  color: string;
  type: "petal" | "star" | "dot";
  rotate: number;
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const colors = [
      "rgba(244, 194, 194, 0.5)",
      "rgba(250, 224, 228, 0.4)",
      "rgba(201, 160, 41, 0.25)",
      "rgba(245, 230, 163, 0.3)",
      "rgba(176, 141, 154, 0.3)",
    ];
    const types: Petal["type"][] = ["petal", "petal", "petal", "star", "dot"];

    const arr: Petal[] = [];
    for (let i = 0; i < 30; i++) {
      arr.push({
        id: i,
        left: `${2 + Math.random() * 96}%`,
        size: 6 + Math.random() * 12,
        delay: Math.random() * 12,
        duration: 12 + Math.random() * 16,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: types[Math.floor(Math.random() * types.length)],
        rotate: Math.random() * 360,
      });
    }
    setPetals(arr);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden" aria-hidden>
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: p.left,
            top: "-20px",
            width: p.size,
            height: p.type === "dot" ? p.size : p.size * 1.4,
            borderRadius: p.type === "dot" ? "50%" : p.type === "star" ? "2px" : "50% 0 50% 50%",
            backgroundColor: p.color,
            rotate: `${p.rotate}deg`,
          }}
          animate={{
            y: [0, typeof window !== "undefined" ? window.innerHeight + 40 : 1000],
            x: [0, Math.sin(p.id) * 80],
            rotate: [p.rotate, p.rotate + (p.id % 2 === 0 ? 720 : -540)],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
