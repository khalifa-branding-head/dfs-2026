import React from 'react';
import { motion } from 'framer-motion';

const sponsorLogos = [
  { id: 'media-1', name: 'Media Partner 1', src: 'assets/logos/media-logo-1.svg' },
  { id: 'media-2', name: 'Media Partner 2', src: 'assets/logos/media-logo-2.svg' },
  { id: 'media-3', name: 'Media Partner 3', src: 'assets/logos/media-logo-3.svg' },
  { id: 'media-4', name: 'Media Partner 4', src: 'assets/logos/media-logo-4.svg' },
  { id: 'media-5', name: 'Media Partner 5', src: 'assets/logos/media-logo-5.svg' },
  { id: 'media-6', name: 'Media Partner 6', src: 'assets/logos/media-logo-6.svg' },
  { id: 'alliance-1', name: 'Fintech Australia', src: 'assets/logos/fintech-australia.svg' },
  { id: 'alliance-2', name: 'World Alliance', src: 'assets/logos/world-alliance.svg' },
  { id: 'alliance-3', name: 'Finstep Asia', src: 'assets/logos/finstep-asia.svg' },
  { id: 'alliance-4', name: 'AmCham Dubai', src: 'assets/logos/amcham-dubai.svg' },
  { id: 'alliance-5', name: 'Fintech Armenia', src: 'assets/logos/fintech-armenia.svg' },
  { id: 'alliance-6', name: 'W-Logo', src: 'assets/logos/w-logo.svg' },
  { id: 'alliance-7', name: 'Security Alliance', src: 'assets/logos/security-alliance.svg' },
];

// Duplicate list to achieve seamless infinite loop rendering transitions
const doubleLogos = [...sponsorLogos, ...sponsorLogos, ...sponsorLogos];

export default function SponsorMarquee() {
  return (
    <section className="relative w-full bg-[#082028] py-16 overflow-hidden flex flex-col items-center select-none">
      {/* ==================== 1. EDITORIAL TEXT HEADER ==================== */}
      <div className="w-full max-w-7xl px-6 md:px-12 mb-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 select-none">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#12E9E9] uppercase">
            Global Media & Alliances
          </span>
          <div className="hidden md:block w-12 h-[1px] bg-[#BEC9CB]/20" />
          <span className="text-xs font-medium tracking-widest text-[#6D8794] uppercase">
            Recognised by Leading Global Media & Strategic Fintech Associations
          </span>
        </div>
      </div>

      {/* ==================== 2. INFINITE HARDWARE MARQUEE LOOP ==================== */}
      <div className="relative w-full bg-[#082028]/45 backdrop-blur-md border-y border-[#BEC9CB]/10 py-8 flex items-center overflow-hidden">
        
        {/* Left & Right Edge Vignette Gradient Blur Overlays to hide entry borders */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#082028] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#082028] to-transparent z-10 pointer-events-none" />

        {/* Dynamic Motion Loop Stream */}
        <motion.div 
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap min-w-full flex-shrink-0"
          animate={{ x: [0, '-33.33%'] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {doubleLogos.map((logo, idx) => (
            <div 
              key={`${logo.id}-${idx}`}
              className="flex items-center justify-center min-w-[140px] md:min-w-[180px] h-12 group transition-all duration-300 flex-shrink-0"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="max-w-full max-h-full object-contain filter grayscale brightness-0 invert opacity-45 group-hover:filter-none group-hover:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1]"
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

