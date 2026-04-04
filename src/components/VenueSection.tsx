"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import SectionHeading from "./SectionHeading";

// Map Pin SVG Vector
function MapPinSVG() {
  return (
    <motion.svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0, rotate: -30 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill="url(#pinGradient)"
        stroke="#c9a029"
        strokeWidth="0.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      <circle cx="12" cy="9" r="2.5" fill="#fef9f0" />
      <defs>
        <linearGradient id="pinGradient" x1="5" y1="2" x2="19" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c9a029" />
          <stop offset="50%" stopColor="#e8c84a" />
          <stop offset="100%" stopColor="#c9a029" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

// Mini Map Illustration SVG
function MapIllustrationSVG() {
  return (
    <motion.svg width="100%" height="120" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mt-6 mb-2 max-w-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Roads */}
      <motion.line x1="0" y1="60" x2="400" y2="60" stroke="#c9a02940" strokeWidth="2"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 1.5 }}
      />
      <motion.line x1="200" y1="0" x2="200" y2="120" stroke="#c9a02930" strokeWidth="1.5"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.3 }}
      />
      <motion.line x1="100" y1="20" x2="300" y2="100" stroke="#c9a02920" strokeWidth="1"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.6 }}
      />

      {/* Blocks */}
      <rect x="40" y="20" width="60" height="30" rx="4" fill="#c9a02910" stroke="#c9a02930" strokeWidth="0.5" />
      <rect x="260" y="70" width="80" height="35" rx="4" fill="#c9a02910" stroke="#c9a02930" strokeWidth="0.5" />
      <rect x="130" y="75" width="50" height="25" rx="4" fill="#c9a02910" stroke="#c9a02930" strokeWidth="0.5" />

      {/* Venue pin */}
      <motion.g
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="200" cy="55" r="12" fill="#c9a029" opacity="0.15" />
        <circle cx="200" cy="55" r="6" fill="#c9a029" opacity="0.3" />
        <circle cx="200" cy="55" r="3" fill="#c9a029" />
      </motion.g>

      {/* Pulsing ring */}
      <motion.circle cx="200" cy="55" r="16" fill="none" stroke="#c9a029" strokeWidth="1"
        animate={{ r: [16, 25, 16], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
      />

      {/* Labels */}
      <text x="200" y="110" textAnchor="middle" fill="#c9a029" fontSize="8" fontFamily="var(--font-heading)" opacity="0.6">
        रगाई नेचुरल लॉन्स
      </text>
    </motion.svg>
  );
}

export default function VenueSection() {
  const { venue } = weddingData;

  return (
    <section className="section-wrapper relative" id="venue-section">
      {/* Light bloom */}
      <div className="light-bloom" style={{ width: 500, height: 500, top: "10%", left: "-15%" }} />

      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-0">
        <div className="max-w-3xl md:mx-0 md:ml-auto md:pr-12 lg:pr-24">
          <SectionHeading>{venue.heading}</SectionHeading>

          <motion.div
            className="royal-card max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 50, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{ animation: "glowPulse 4s ease-in-out infinite" }}
        >
          {/* Map Pin */}
          <div className="flex justify-center mb-4">
            <MapPinSVG />
          </div>

          {/* Venue Name */}
          <motion.h3 className="text-xl md:text-2xl font-bold mb-2"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-gold-shimmer)" }}
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {venue.name}
          </motion.h3>

          {/* Animated divider */}
          <motion.div className="w-20 h-[1px] mx-auto my-4"
            style={{ background: "linear-gradient(90deg, transparent, #c9a029, transparent)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          {/* Address lines with stagger */}
          <div className="space-y-1">
            {venue.addressLines.map((line, i) => (
              <motion.p key={i}
                className="text-sm md:text-base"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-ivory)" }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.6 }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Map Illustration */}
          <MapIllustrationSVG />

          {/* Royal Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.a
              href={venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="royal-btn-outline flex-1 min-w-[160px] justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              मानचित्र देखें
            </motion.a>

            <motion.button
              onClick={() => {
                navigator.clipboard.writeText(venue.addressLines.join(", "));
                alert("पता कॉपी कर लिया गया है!");
              }}
              className="royal-btn-outline flex-1 min-w-[160px] justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              पता कॉपी करें
            </motion.button>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
