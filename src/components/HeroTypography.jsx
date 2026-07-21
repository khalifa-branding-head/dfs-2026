import React from 'react';
import { motion } from 'framer-motion';

// Premium exponential deceleration curves matching world-class summit interfaces
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      className="text-center font-sans antialiased select-none z-20 my-2"
    >
      {/* -------------------- LINE 1: HIGH-CONTRAST BRIGHT WHITE HEADLINE -------------------- */}
      <div className="block py-1">
        <motion.span 
          variants={textLineVariants}
          className="block text-[clamp(2.25rem,7.5vw,4.5rem)] font-extrabold tracking-normal leading-[1.1]"
          style={{ 
            color: '#FFFFFF',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.85), 0 2px 4px rgba(0, 0, 0, 0.9)'
          }}
        >
          Connecting Markets
        </motion.span>
      </div>
      
      {/* -------------------- LINE 2: LUMINOUS ELECTRIC CYAN HEADLINE -------------------- */}
      <div className="block py-1">
        <motion.span 
          variants={textLineVariants}
          className="block text-[clamp(2.25rem,7.5vw,4.5rem)] font-extrabold tracking-normal leading-[1.1]"
          style={{ 
            color: '#12E9E9',
            textShadow: '0 0 35px rgba(18, 233, 233, 0.65), 0 4px 20px rgba(0, 0, 0, 0.9)'
          }}
        >
          Transforming Economies
        </motion.span>
      </div>
    </motion.h1>
  );
}
