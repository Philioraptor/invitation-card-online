"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OpeningScreen from "@/components/OpeningScreen";
import InvitationReveal from "@/components/InvitationReveal";
import EventsSection from "@/components/EventsSection";
import CoupleIntro from "@/components/CoupleIntro";
import RitualSection from "@/components/RitualSection";
import VenueSection from "@/components/VenueSection";
import VineetSection from "@/components/VineetSection";
import DarshanSection from "@/components/DarshanSection";
import SwagatSection from "@/components/SwagatSection";
import AshirwadSection from "@/components/AshirwadSection";
import Footer from "@/components/Footer";
import FloatingPetals from "@/components/FloatingPetals";
import CountdownTimer from "@/components/CountdownTimer";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect, useRef } from "react";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Preload the audio object on mount
    audioRef.current = new Audio("/wedding-music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5; // Start at 50% volume for a gentle experience
  }, []);

  const handleOpen = () => {
    setIsOpened(true);
    // Play music now that user interaction has occurred
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.warn("Audio play failed:", err);
      });
    }
  };

  return (
    <main className="relative">
      <FloatingPetals />

      {/* Opening Screen overlay */}
      <AnimatePresence mode="wait">
        {!isOpened && (
          <motion.div
            key="opening"
            exit={{
              opacity: 0,
              scale: 1.05,
              filter: "blur(10px)",
              transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <OpeningScreen onOpen={handleOpen} />
          </motion.div>
        )}
      </AnimatePresence>

          {/* Main content – revealed after card opens */}
          {isOpened && (
            <motion.div
              className="card-open relative w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {/* Floating Controls */}
              <ScrollToTop />

          {/* Desktop Ornamental Pillars */}
          <div className="hidden md:block fixed top-0 left-4 lg:left-12 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[var(--color-gold-shimmer)] to-transparent opacity-30 z-40 pointer-events-none" />
          <div className="hidden md:block fixed top-0 right-4 lg:right-12 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[var(--color-gold-shimmer)] to-transparent opacity-30 z-40 pointer-events-none" />

          {/* Constrained layout for Ultra-wide Desktops */}
          <div className="max-w-[1600px] w-full mx-auto px-4 lg:px-12 xl:px-24 relative z-10">
            {/* All sections */}
            <InvitationReveal />
            <CountdownTimer />
            <EventsSection />
            <CoupleIntro />
            <RitualSection />
            <VenueSection />
            <VineetSection />
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 max-w-6xl mx-auto">
              <DarshanSection />
              <SwagatSection />
            </div>
            <AshirwadSection />
            <Footer />
          </div>
        </motion.div>
      )}
    </main>
  );
}
