import React from 'react';
import { motion } from 'framer-motion';

const sponsorLogos = [
  { id: 'extracted-0', name: 'Mawarid Finance', src: '/assets/logos/mawarid-finance.png' },
  { id: 'extracted-1', name: 'Emirates NBD', src: '/assets/logos/emirates-nbd.png' },
  { id: 'extracted-2', name: 'Commercial Bank of Dubai', src: '/assets/logos/cbd.png' },
  { id: 'extracted-3', name: 'Ministry of Investment', src: '/assets/logos/ministry-of-investment.png' },
  { id: 'extracted-4', name: 'Ignyte', src: '/assets/logos/ignyte.png' },
  { id: 'extracted-5', name: 'Ripple', src: '/assets/logos/ripple.png' },
  { id: 'extracted-6', name: 'Strategic Partner', src: '/assets/logos/pay.png' },
  { id: 'extracted-7', name: 'Strategic Partner', src: '/assets/logos/sh.png' },
];

// Duplicate list to achieve seamless infinite loop rendering transitions
const doubleLogos = [...sponsorLogos, ...sponsorLogos, ...sponsorLogos];

export default function SponsorMarquee() {
  return (
    <section className="relative w-full bg-[#082028] py-16 overflow-hidden flex flex-col items-center">
      {/* ==================== 1. EDITORIAL TEXT HEADER ==================== */}
      <div className="w-full max-w-7xl px-6 md:px-12 mb-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 select-none">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#12E9E9] uppercase">
            Strategic Alliances
          </span>
          <div className="hidden md:block w-12 h-[1px] bg-[#BEC9CB]/20" />
          <span className="text-xs font-medium tracking-widest text-[#6D8794] uppercase">
            Global Institutional Partners & Sponsors 2026
          </span>
        </div>
      </div>

      {/* ==================== 2. INFINITE HARDWARE MARQUEE LOOP ==================== */}
      {/* Frosted substrate container block providing complete visual integration with Hero structures */}
      <div className="relative w-full bg-[#082028]/45 backdrop-blur-md border-y border-[#BEC9CB]/10 py-8 flex items-center overflow-hidden">
        
        {/* Left & Right Edge Vignette Gradient Blur Overlays to hide entry borders */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#082028] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#082028] to-transparent z-10 pointer-events-none" />

        {/* Dynamic Motion Loop Stream */}
        <motion.div 
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap min-w-full"
          animate={{ x: [0, '-33.33%'] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {doubleLogos.map((logo, idx) => (
            <div 
              key={`${logo.id}-${idx}`}
              className="flex items-center justify-center min-w-[140px] md:min-w-[180px] h-12 group transition-all duration-300"
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
