import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import HeroTypography from './HeroTypography';

export default function HomeHero() {
  return (
    <section 
      id="main-content" 
      className="relative h-[95vh] min-h-[820px] w-full bg-[#082028] flex flex-col justify-between overflow-hidden pt-24 font-sans selection:bg-[#12E9E9]/30"
    >
      {/* ==================== 1. PRESERVED STAGING MEDIA LAYER ==================== */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover scale-102 transform translate-z-0 object-center video-hero-layer"
          style={{ filter: 'brightness(0.35) contrast(1.1) saturate(0.95)' }}
        >
          <source src="hero-video.mp4" type="video/mp4" />
          <source src="https://dubaifintechsummit.com/wp-content/uploads/2026/01/DFS-Video-mp4.mp4" type="video/mp4" />
        </video>
        {/* Core Design System Vignette Gradient Layer */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#082028]/40 to-[#082028]/95 pointer-events-none" />
      </div>

      {/* ==================== 2. HIERARCHICAL CONTENT LAYER ==================== */}
      <div className="relative z-30 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center my-auto select-none">
        
        {/* 1. Meta Context Pill Badge */}
        <span className="text-[10px] md:text-xs font-black tracking-[0.25em] text-[#12E9E9] uppercase mb-6 drop-shadow-[0_2px_8px_rgba(18,233,233,0.3)]" style={{ color: '#12E9E9' }}>
          2-3 November 2026 | Madinat Jumeirah, Dubai
        </span>

        {/* ==================== HERO TYPOGRAPHY SUITE ==================== */}
        <HeroTypography />

        {/* Organizer Partner Badges */}
        <div className="flex items-center justify-center gap-6 bg-white/10 backdrop-blur-md px-6 py-3 border border-white/15 rounded-full max-w-full overflow-hidden mx-auto w-fit mt-8 mb-10">
          <img 
            src="organized-by-trescon.svg" 
            alt="Organised by DIFC" 
            className="w-auto object-contain opacity-95"
            style={{ height: '20px' }}
          />
          <div className="w-[1px] h-6 bg-white/20" />
          <img 
            src="part-of.svg" 
            alt="Part of Dubai Future Finance Week" 
            className="w-auto object-contain opacity-95"
            style={{ height: '30px' }}
          />
        </div>

        {/* Core Access Gateway CTA */}
        <div className="flex items-center justify-center">
          <a 
            href="/registration.html" 
            className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold tracking-[0.15em] rounded-full bg-gradient-to-br from-[#12E9E9] to-[#08BDF4] text-white transition-all duration-300 shadow-[0_0_25px_rgba(18,233,233,0.25)] hover:shadow-[0_0_45px_rgba(18,233,233,0.45)] transform active:scale-98"
          >
            <span className="relative px-10 py-4 transition-all duration-300 ease-in bg-[#082028] rounded-full group-hover:bg-transparent flex items-center gap-2 text-white">
              BUY A PASS
              <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>

      {/* ==================== 3. UNIFIED BRAND TRUST FOOTER ==================== */}
      <div className="relative z-30 w-full border-t border-white/10 bg-[#082028]/80 backdrop-blur-md py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          
          {/* ==================== PREMIUM ROYAL PATRONAGE LAYOUT ==================== */}
          <div className="w-full text-center flex flex-col items-center select-none drop-shadow-[0_2px_12px_rgba(8,32,40,0.5)]">
            
            {/* Minimalist Vector System Accent Pill */}
            <div className="w-12 h-1 bg-gradient-to-r from-[#12E9E9] to-[#08BDF4] rounded-full mb-4" />

            {/* 1. Contextual Protocol Prefix Layer */}
            <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-[#38BDF8] uppercase mb-2" style={{ color: '#38BDF8' }}>
              Under the Patronage of
            </span>

            {/* 2. Official Patron Name Layer (High Contrast White) */}
            <h2 className="text-base sm:text-lg lg:text-xl font-bold tracking-normal leading-snug text-white font-sans max-w-3xl" style={{ color: '#FFFFFF' }}>
              H.H. Sheikh Maktoum bin Mohammed bin Rashid Al Maktoum
            </h2>

            {/* 3. Official Titles Hierarchy Base Layer (High Contrast Slate-300) */}
            <p className="mt-2 text-[11px] sm:text-xs font-medium tracking-wide text-slate-300 leading-relaxed max-w-4xl" style={{ color: '#CBD5E1' }}>
              First Deputy Ruler of Dubai, Deputy Prime Minister, and Minister of Finance, UAE, and President of DIFC
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
