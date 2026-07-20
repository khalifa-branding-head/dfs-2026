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

export default function FeaturedSpeakers() {
  return (
    <section className="w-full bg-[#082028] py-28 px-6 md:px-12 relative font-sans antialiased overflow-hidden selection:bg-[#12E9E9]/20">
      
      {/* Structural Ambient Section Flares */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#08BDF4]/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-[#12E9E9]/4 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* ==================== 1. PRESTIGE HEADER ==================== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/[0.08] pb-8 select-none">
          <div className="space-y-2 text-left">
            <span className="text-xs font-black tracking-[0.25em] text-[#12E9E9] uppercase drop-shadow-[0_2px_8px_rgba(18,233,233,0.2)]">
              Dubai FinTech Summit
            </span>
            <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-tight leading-none">
              The headliners
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-md border border-white/[0.08] bg-[#0c2730]/40 text-white/40 flex items-center justify-center transition-all duration-300 hover:border-[#12E9E9] hover:text-[#12E9E9] cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-md border border-white/[0.08] bg-[#0c2730]/40 text-white/40 flex items-center justify-center transition-all duration-300 hover:border-[#12E9E9] hover:text-[#12E9E9] cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ==================== 2. ISOMETRIC & NODE NETWORK MATRIX ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {headlineSpeakers.map((speaker, idx) => (
            <motion.div
              key={speaker.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl border border-white/[0.05] bg-[#0c2730]/40 backdrop-blur-xl overflow-hidden flex flex-col justify-between h-[460px] group shadow-xl hover:border-white/20 hover:shadow-[0_30px_60px_rgba(4,16,20,0.55)]"
            >
              {/* Top Dynamic Hover Glare */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#12E9E9]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30" />

              {/* Portrait Container Window */}
              <div className="w-full h-[64%] bg-gradient-to-b from-[#0e2f3b] to-[#082028] relative overflow-hidden flex items-end justify-center border-b border-white/[0.04]">
                
                {/* ==================== LAYER 1: ISOMETRIC CUBES & NODE MESH (BEHIND SPEAKER) ==================== */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
                  
                  {/* Floating Isometric Wireframe Cube 1 (Primary) */}
                  <motion.svg
                    animate={{
                      y: [-8, 8, -8],
                      rotate: [0, 4, 0],
                    }}
                    transition={{
                      duration: 8 + idx * 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute w-48 h-48 opacity-[0.2] group-hover:opacity-[0.42] transition-opacity duration-500 text-[#12E9E9]"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    {/* Isometric Cube Geometry */}
                    <path d="M50 15 L85 32.5 L85 67.5 L50 85 L15 67.5 L15 32.5 Z" stroke="currentColor" strokeWidth="0.75" />
                    <path d="M50 15 L50 50 L85 32.5" stroke="currentColor" strokeWidth="0.75" />
                    <path d="M50 50 L15 32.5" stroke="currentColor" strokeWidth="0.75" />
                    <path d="M50 50 L50 85" stroke="currentColor" strokeWidth="0.75" />
                    {/* Interior Wireframe Grid Lines */}
                    <path d="M32.5 23.75 L67.5 41.25" stroke="currentColor" strokeWidth="0.35" strokeDasharray="2 2" opacity="0.6" />
                    <path d="M67.5 23.75 L32.5 41.25" stroke="currentColor" strokeWidth="0.35" strokeDasharray="2 2" opacity="0.6" />
                  </motion.svg>

                  {/* Secondary Smaller Offset Cube for Parallax Depth */}
                  <motion.svg
                    animate={{
                      y: [10, -10, 10],
                      x: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 11 + idx,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-4 right-2 w-24 h-24 opacity-[0.12] group-hover:opacity-[0.28] transition-opacity duration-500 text-[#08BDF4]"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <path d="M50 15 L85 32.5 L85 67.5 L50 85 L15 67.5 L15 32.5 Z" stroke="currentColor" strokeWidth="0.75" />
                    <path d="M50 15 L50 50 L85 32.5" stroke="currentColor" strokeWidth="0.75" />
                    <path d="M50 50 L15 32.5" stroke="currentColor" strokeWidth="0.75" />
                    <path d="M50 50 L50 85" stroke="currentColor" strokeWidth="0.75" />
                  </motion.svg>

                  {/* Network Node Interconnections */}
                  <svg className="absolute inset-0 w-full h-full opacity-[0.15] group-hover:opacity-[0.3] transition-opacity duration-500" viewBox="0 0 200 200">
                    <line x1="30" y1="40" x2="80" y2="90" stroke="#12E9E9" strokeWidth="0.5" strokeDasharray="3 3" />
                    <line x1="170" y1="50" x2="120" y2="120" stroke="#08BDF4" strokeWidth="0.5" strokeDasharray="3 3" />
                    {/* Glowing Pulsing Nodes */}
                    <circle cx="30" cy="40" r="2.5" fill="#12E9E9" className="animate-pulse" />
                    <circle cx="80" cy="90" r="2" fill="#08BDF4" />
                    <circle cx="170" cy="50" r="2.5" fill="#12E9E9" className="animate-pulse" />
                    <circle cx="120" cy="120" r="2" fill="#08BDF4" />
                  </svg>

                  {/* Custom Speaker Ambient Aura Glow */}
                  <div 
                    className="absolute w-44 h-44 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    style={{ backgroundColor: speaker.glowColor }}
                  />
                </div>

                {/* ==================== LAYER 2: TRANSPARENT CUTOUT PORTRAIT ==================== */}
                <img
                  src={speaker.src}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-top relative z-10 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-[1.04] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                />

                {/* ==================== LAYER 3: SOFT BASE GROUNDING GRADIENT ==================== */}
                <div className="absolute inset-x-0 bottom-0 h-16 z-20 pointer-events-none bg-gradient-to-t from-[#082028] via-[#082028]/60 to-transparent" />
              </div>

              {/* Informational Text Deck */}
              <div className="p-6 flex flex-col justify-between flex-grow bg-gradient-to-b from-transparent to-[#082028]/40 relative z-20">
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
                  
                  <div className="text-[9px] font-black tracking-widest text-[#12E9E9] border border-[#12E9E9]/30 rounded-full px-2.5 py-0.5 select-none bg-[#12E9E9]/5 uppercase group-hover:border-[#12E9E9] transition-all duration-300">
                    {speaker.country}
                  </div>
                </div>
              </div>

              {/* Laser Underline Trim */}
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#12E9E9] via-[#08BDF4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl z-30" />
            </motion.div>
          ))}
        </div>

        {/* ==================== 3. CALL TO ACTION ==================== */}
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
