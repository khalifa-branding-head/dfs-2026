import React from 'react';
import { motion } from 'framer-motion';

// Premium exponential deceleration curves matching world-class summit interfaces
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Smooth cadence delay between text tracks
      delayChildren: 0.2
    }
  }
};

const textLineVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } // Custom luxury easeout
  }
};

export default function HeroTypography() {
  return (
    <motion.h1 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center font-sans antialiased select-none mix-blend-plus-lighter"
    >
      {/* -------------------- LINE 1: DISCRETE METALLIC SHIELD -------------------- */}
      <span className="block overflow-hidden pb-1">
        <motion.span 
          variants={textLineVariants}
          className="block text-[clamp(2.25rem,7.5vw,4.5rem)] font-semibold tracking-normal leading-[1.1] text-white [text-shadow:_0_4px_24px_rgba(8,32,40,0.7)]"
        >
          Connecting Markets
        </motion.span>
      </span>
      
      {/* -------------------- LINE 2: LUMINOUS GRADIENT CLIP -------------------- */}
      {/* 
        - bg-gradient-to-r: Maps seamlessly to official #12E9E9 and #08BDF4 codes.
        - drop-shadow: Adds a localized glow channel that preserves high legibility 
          over erratic backdrop lighting without darkening the text fill.
      */}
      <span className="block overflow-hidden pt-1">
        <motion.span 
          variants={textLineVariants}
          className="block text-[clamp(2.25rem,7.5vw,4.5rem)] font-semibold tracking-normal leading-[1.1] bg-gradient-to-r from-[#12E9E9] to-[#08BDF4] bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(18,233,233,0.3)]"
        >
          Transforming Economies
        </motion.span>
      </span>
    </motion.h1>
  );
}
