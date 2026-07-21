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
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function HeroTypography() {
  return (
    <motion.h1 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center font-sans antialiased select-none z-20"
    >
      {/* -------------------- LINE 1: HIGH-CONTRAST BRIGHT WHITE HEADLINE -------------------- */}
      <span className="block overflow-hidden pb-1">
        <motion.span 
          variants={textLineVariants}
          className="block text-[clamp(2.25rem,7.5vw,4.5rem)] font-extrabold tracking-normal leading-[1.1] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
          style={{ color: '#FFFFFF' }}
        >
          Connecting Markets
        </motion.span>
      </span>
      
      {/* -------------------- LINE 2: LUMINOUS ELECTRIC CYAN HEADLINE -------------------- */}
      <span className="block overflow-hidden pt-1">
        <motion.span 
          variants={textLineVariants}
          className="block text-[clamp(2.25rem,7.5vw,4.5rem)] font-extrabold tracking-normal leading-[1.1] text-[#12E9E9] drop-shadow-[0_4px_25px_rgba(18,233,233,0.5)]"
          style={{ color: '#12E9E9' }}
        >
          Transforming Economies
        </motion.span>
      </span>
    </motion.h1>
  );
}
