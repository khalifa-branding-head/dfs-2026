import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const headlineSpeakers = [
  {
    id: 'essa-kazim',
    name: 'H.E. Essa Kazim',
    title: 'Governor',
    company: 'DIFC',
    country: 'UAE',
    // High-resolution live image path matching your GitHub-hosted asset bundle
    src: 'assets/speakers/essa-kazim.png',
    glowColor: 'from-[#12E9E9] to-transparent'
  },
  {
    id: 'noel-quinn',
    name: 'Noel Quinn',
    title: 'Chairman of the Board of Directors',
    company: 'Julius Baer Group',
    country: 'UK',
    src: 'assets/speakers/noel-quinn.png',
    glowColor: 'from-[#08BDF4] to-transparent'
  },
  {
    id: 'jenny-johnson',
    name: 'Jenny Johnson',
    title: 'Chief Executive Officer',
    company: 'Franklin Templeton',
    country: 'USA',
    src: 'assets/speakers/jenny-johnson.png',
    glowColor: 'from-[#c5a059] to-transparent'
  },
  {
    id: 'tan-su-shan',
    name: 'Tan Su Shan',
    title: 'Chief Executive Officer & Director',
    company: 'DBS Group',
    country: 'SINGAPORE',
    src: 'assets/speakers/tan-su-shan.png',
    glowColor: 'from-[#e11d48] to-transparent'
  }
];

// High-end, slow brand aura morph configuration
const auraAnimationVariants = {
  animate: {
    scale: [1, 1.12, 0.93, 1],
    x: [0, 15, -10, 0],
    y: [0, -10, 15, 0],
    borderRadius: [
      "50% 50% 70% 30% / 50% 60% 40% 50%",
      "70% 30% 52% 48% / 60% 40% 60% 40%",
      "45% 55% 40% 60% / 40% 65% 35% 65%",
      "50% 50% 70% 30% / 50% 60% 40% 50%"
    ],
    transition: {
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function FeaturedSpeakers() {
  return (
    <section className="w-full bg-[#082028] py-28 px-6 md:px-12 relative font-sans antialiased overflow-hidden selection:bg-[#12E9E9]/20">
      {/* Background Decorative Element Gradients */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#08BDF4]/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-[#12E9E9]/4 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* ==================== 1. BRAND HEADLINES HEADER ==================== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/[0.08] pb-8 select-none">
          <div className="space-y-2 text-left">
            <span className="text-xs font-black tracking-[0.25em] text-[#12E9E9] uppercase drop-shadow-[0_2px_8px_rgba(18,233,233,0.2)]">
              Dubai FinTech Summit
            </span>
            <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-tight leading-none">
              The headliners
            </h2>
          </div>
          
          {/* Symmetrical Inline Dynamic Carousel Navs */}
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-md border border-white/[0.08] bg-[#0c2730]/40 text-white/40 flex items-center justify-center transition-all duration-300 hover:border-[#12E9E9] hover:text-[#12E9E9] cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-md border border-white/[0.08] bg-[#0c2730]/40 text-white/40 flex items-center justify-center transition-all duration-300 hover:border-[#12E9E9] hover:text-[#12E9E9] cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ==================== 2. HIGHLIGHT SPECS PORTRAIT MATRIX ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {headlineSpeakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl border border-white/[0.05] bg-[#0c2730]/30 overflow-hidden flex flex-col justify-between h-[460px] group shadow-xl hover:border-white/20 hover:shadow-[0_30px_60px_rgba(4,16,20,0.55)]"
            >
              {/* Dynamic Internal Hover Specular Highlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#12E9E9]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Corrected Portrait Window Framework: Restores Native Color with Visual Vignette Edge Blending */}
              <div className="w-full h-[62%] bg-[#0c2730] relative overflow-hidden flex items-end justify-center border-b border-white/[0.04]">
                
                {/* ==================== 1. SLOW DRIFTING AMBIENT AURA BACKDROP ==================== */}
                {/* Positioned safely behind the portrait layer to create depth */}
                <div className="absolute inset-0 z-0 flex items-center justify-center select-none opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-500">
                  <motion.div 
                    variants={auraAnimationVariants}
                    animate="animate"
                    className={`absolute w-44 h-44 bg-gradient-to-tr ${speaker.glowColor} blur-2xl`}
                  />
                </div>

                {/* ==================== 2. PURE FULL-COLOR PORTRAIT IMAGE LAYER ==================== */}
                {/* Maintained in regular, native color with crisp visual visibility */}
                <img
                  src={speaker.src}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-top relative z-10 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-[1.03]"
                />

                {/* ==================== 3. PREMIUM GRADIENT VIGNETTE BLUR OVERLAY ==================== */}
                {/* 
                  - This overlay features a smooth gradient that blends the sharp bottom and side edges 
                    of the photo backgrounds into the dark theme of the card plate (#0c2730).
                */}
                <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-[#0c2730] via-transparent to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-[#0c2730]/30 via-transparent to-[#0c2730]/30" />
              </div>

              {/* Informational Metadata Typography Suite */}
              <div className="p-6 flex flex-col justify-between flex-grow bg-gradient-to-b from-transparent to-[#082028]/30 relative z-10">
                <div className="space-y-1 text-left">
                  <h4 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[#12E9E9] transition-colors duration-300">
                    {speaker.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#6D8794] line-clamp-1">
                    {speaker.title}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/[0.04] mt-auto">
                  <span className="text-xs font-black tracking-wider text-white uppercase opacity-80">
                    {speaker.company}
                  </span>
                  
                  {/* High-Contrast Country Badge Pill */}
                  <div className="text-[9px] font-black tracking-widest text-[#12E9E9] border border-[#12E9E9]/30 rounded-full px-2.5 py-0.5 select-none bg-[#12E9E9]/5 uppercase group-hover:border-[#12E9E9] transition-all duration-300">
                    {speaker.country}
                  </div>
                </div>
              </div>

              {/* Luminous Flagship Laser Bottom Trim Underline */}
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#12E9E9] via-[#08BDF4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>

        {/* ==================== 3. VIEW ALL SPEAKERS ACTION ANCHOR ==================== */}
        <div className="flex justify-center pt-4 select-none">
          <a
            href="/speakers.html"
            className="inline-flex items-center gap-2.5 bg-[#12E9E9] text-[#082028] text-xs font-black tracking-[0.2em] px-8 py-4 rounded-xl uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(18,233,233,0.2)] hover:shadow-[0_4px_30px_rgba(18,233,233,0.35)] hover:scale-[1.02]"
          >
            View all speakers
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </a>
        </div>

      </div>
    </section>
  );
}
