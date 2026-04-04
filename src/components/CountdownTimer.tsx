"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = "2026-04-19T18:00:00"; // 6:00 PM (Dwarpuja time)

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(TARGET_DATE) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  const timerItems = [
    { label: "दिन", value: timeLeft.days },
    { label: "घंटे", value: timeLeft.hours },
    { label: "मिनट", value: timeLeft.minutes },
    { label: "सेकंड", value: timeLeft.seconds },
  ];

  return (
    <div className="py-12 flex flex-col items-center">
      <motion.p 
        className="text-[#f5e6a3] text-sm md:text-base tracking-[0.2em] mb-6 opacity-80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        viewport={{ once: true }}
      >
        शुभ घड़ी की प्रतीक्षा...
      </motion.p>
      
      <div className="flex gap-4 md:gap-8">
        {timerItems.map((item, index) => (
          <motion.div
            key={item.label}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
          >
            <div className="glass-card w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <motion.span 
                key={item.value}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-2xl md:text-4xl font-bold text-[#f5e6a3] glow-text-gold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {String(item.value).padStart(2, '0')}
              </motion.span>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 p-1 opacity-20 text-[8px] text-[#c9a029]">✦</div>
            </div>
            <span className="mt-3 text-xs md:text-sm text-[#cce8e7] tracking-widest uppercase font-medium">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
