import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const headlineSpeakers = [
  {
    id: 'essa-kazim',
    name: 'H.E. Essa Kazim',
    title: 'Governor',
    company: 'DIFC',
    country: 'UAE',
    src: 'assets/speakers/essa-kazim.png',
    glowColor: '#12E9E9'
  },
  {
    id: 'noel-quinn',
    name: 'Noel Quinn',
    title: 'Chairman of the Board of Directors',
    company: 'Julius Baer Group',
    country: 'UK',
    src: 'assets/speakers/noel-quinn.png',
    glowColor: '#08BDF4'
  },
  {
    id: 'jenny-johnson',
    name: 'Jenny Johnson',
    title: 'Chief Executive Officer',
    company: 'Franklin Templeton',
    country: 'USA',
    src: 'assets/speakers/jenny-johnson.png',
    glowColor: '#c5a059'
  },
  {
    id: 'tan-su-shan',
    name: 'Tan Su Shan',
    title: 'Chief Executive Officer & Director',
    company: 'DBS Group',
    country: 'SINGAPORE',
    src: 'assets/speakers/tan-su-shan.png',
    glowColor: '#e11d48'
  }
];

// Slices of the official DFS Diamond branding emblem
const diamondSlices = [
  "M 45.6 15 L 54.4 15 L 63.1 25 L 36.9 25 Z", // Slice 1 (Top)
  "M 34.2 28 L 65.8 28 L 74.5 38 L 25.5 38 Z", // Slice 2
  "M 22.9 41 L 77.1 41 L 84.1 51 L 15.9 51 Z", // Slice 3
  "M 18.5 54 L 81.5 54 L 72.75 64 L 27.25 64 Z", // Slice 4
  "M 29.9 67 L 70.1 67 L 61.4 77 L 38.6 77 Z", // Slice 5
  "M 41.2 80 L 58.8 80 L 50 90 Z"               // Slice 6 (Bottom)
];

export default function FeaturedSpeakers() {
  return (
    <section className="w-full bg-[#082028] py-16 md:py-20 px-6 md:px-12 relative font-sans antialiased overflow-hidden selection:bg-[#12E9E9]/20 border-t border-white/[0.06]">
      
      {/* Structural Ambient Section Flares */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#08BDF4]/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-[#12E9E9]/4 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* ==================== 1. PRESTIGE HEADER ==================== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 select-none">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 bg-[#12E9E9]/10 text-[#12E9E9] text-[10px] font-black tracking-[0.25em] px-3.5 py-1 rounded-md uppercase border border-[#12E9E9]/20">
              <Sparkles className="w-3 h-3 text-[#12E9E9]" />
              <span>Dubai FinTech Summit</span>
            </div>
            <h2 className="text-white text-3xl md:text-5xl font-semibold tracking-tight leading-none">
              The Headliners
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-lg border border-white/[0.08] bg-[#0c2730]/40 text-white/40 flex items-center justify-center transition-all duration-300 hover:border-[#12E9E9] hover:text-[#12E9E9] cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-lg border border-white/[0.08] bg-[#0c2730]/40 text-white/40 flex items-center justify-center transition-all duration-300 hover:border-[#12E9E9] hover:text-[#12E9E9] cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ==================== 2. COMPACT SPEAKER CARDS (h-[420px], p-5) ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {headlineSpeakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              initial="initial"
              whileHover="hover"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl border border-white/[0.08] hover:border-[#12E9E9]/40 bg-[#0c2730]/40 backdrop-blur-xl overflow-hidden flex flex-col justify-between h-[420px] group shadow-[0_15px_35px_rgba(4,16,20,0.45)] transition-all duration-500"
            >
              {/* Top Dynamic Hover Glare */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#12E9E9]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30" />

              {/* Portrait Container Window */}
              <div className="w-full h-[62%] bg-gradient-to-b from-[#0e2f3b] to-[#082028] relative overflow-hidden flex items-end justify-center border-b border-white/[0.04]">
                
                {/* Horizontal Laser Scanning Line */}
                <motion.div
                  variants={{
                    initial: { y: "-10%", opacity: 0 },
                    hover: {
                      y: ["-10%", "110%"],
                      opacity: [0, 1, 1, 0],
                      transition: { duration: 1.4, ease: "easeInOut" }
                    }
                  }}
                  className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#12E9E9] to-transparent shadow-[0_0_12px_#12E9E9] z-20 pointer-events-none"
                />

                {/* LAYER 1: DFS SLICES DIAMOND (BEHIND SPEAKER) */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
                  <svg
                    className="absolute w-52 h-52 text-[#12E9E9]"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    {diamondSlices.map((pathD, sIdx) => (
                      <motion.path
                        key={sIdx}
                        d={pathD}
                        variants={{
                          initial: { 
                            fill: "rgba(18, 233, 233, 0.07)", 
                            stroke: "rgba(18, 233, 233, 0.15)",
                            strokeWidth: 0.5
                          },
                          hover: { 
                            fill: [
                              "rgba(18, 233, 233, 0.07)", 
                              "rgba(18, 233, 233, 0.45)", 
                              "rgba(18, 233, 233, 0.16)"
                            ],
                            stroke: [
                              "rgba(18, 233, 233, 0.15)", 
                              "rgba(18, 233, 233, 0.8)", 
                              "rgba(18, 233, 233, 0.28)"
                            ],
                            transition: { 
                              duration: 0.6, 
                              delay: sIdx * 0.12, 
                              ease: "easeInOut" 
                            }
                          }
                        }}
                      />
                    ))}
                  </svg>

                  {/* Speaker Ambient Aura Glow */}
                  <div 
                    className="absolute w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    style={{ backgroundColor: speaker.glowColor }}
                  />
                </div>

                {/* LAYER 2: TRANSPARENT CUTOUT PORTRAIT */}
                <img
                  src={speaker.src}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-top relative z-10 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-[1.04] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                />

                {/* LAYER 3: SOFT BASE GROUNDING GRADIENT */}
                <div className="absolute inset-x-0 bottom-0 h-14 z-20 pointer-events-none bg-gradient-to-t from-[#082028] via-[#082028]/60 to-transparent" />
              </div>

              {/* Informational Text Deck (p-5 for tight vertical footprint) */}
              <div className="p-5 flex flex-col justify-between flex-grow bg-gradient-to-b from-transparent to-[#082028]/40 relative z-20">
                <div className="space-y-1 text-left">
                  <h4 className="text-base font-bold text-white tracking-tight leading-snug group-hover:text-[#12E9E9] transition-colors duration-300">
                    {speaker.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#6D8794] line-clamp-1">
                    {speaker.title}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/[0.04] mt-auto">
                  <span className="text-xs font-black tracking-wider text-white uppercase opacity-80">
                    {speaker.company}
                  </span>
                  
                  <div className="text-[9px] font-black tracking-widest text-[#12E9E9] border border-[#12E9E9]/30 rounded-full px-2.5 py-0.5 select-none bg-[#12E9E9]/5 uppercase group-hover:border-[#12E9E9] transition-all duration-300">
                    {speaker.country}
                  </div>
                </div>
              </div>

              {/* Laser Underline Trim Accent */}
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#12E9E9] via-[#08BDF4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl z-30" />
            </motion.div>
          ))}
        </div>

        {/* ==================== 3. CALL TO ACTION ==================== */}
        <div className="flex justify-center pt-2 select-none">
          <a
            href="/speakers.html"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#12E9E9] to-[#08BDF4] text-[#082028] text-xs font-black tracking-[0.2em] px-8 py-3.5 rounded-xl uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(18,233,233,0.3)] hover:scale-[1.02]"
          >
            <span>View All Speakers</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </a>
        </div>

      </div>
    </section>
  );
}
