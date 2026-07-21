import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import HeroTypography from './HeroTypography';

export default function HomeHero() {
  return (
    <section 
      id="main-content" 
      className="relative min-h-screen w-full bg-[#F8FAFC] flex flex-col justify-between overflow-hidden pt-24 font-sans selection:bg-[#0284C7]/30"
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
        <div className="absolute inset-0 bg-radial from-transparent via-slate-950/40 to-slate-950/95 pointer-events-none" />
      </div>

      {/* ==================== 2. HIERARCHICAL CONTENT LAYER ==================== */}
      <div className="relative z-30 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center my-auto py-8 select-none">
        
        {/* 1. Meta Context Pill Badge */}
        <span className="text-[10px] md:text-xs font-black tracking-[0.25em] text-[#0284C7] uppercase mb-4 drop-shadow-[0_2px_8px_rgba(2,132,199,0.3)]">
          2-3 November 2026 | Madinat Jumeirah, Dubai
        </span>

        {/* ==================== HERO TYPOGRAPHY SUITE ==================== */}
        <HeroTypography />

        {/* Organizer Partner Badges */}
        <div className="flex items-center justify-center gap-6 bg-white/10 backdrop-blur-md px-6 py-3 border border-white/15 rounded-full max-w-full overflow-hidden mx-auto w-fit mt-6 mb-8">
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
            className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold tracking-[0.15em] rounded-full bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white transition-all duration-300 shadow-[0_4px_20px_rgba(2,132,199,0.3)] hover:shadow-[0_6px_30px_rgba(2,132,199,0.5)] transform active:scale-98"
          >
            <span className="relative px-10 py-3.5 transition-all duration-300 ease-in bg-slate-900 rounded-full group-hover:bg-transparent flex items-center gap-2 text-white font-bold">
              BUY A PASS
              <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>

      {/* ==================== 3. UNIFIED BRAND TRUST FOOTER ==================== */}
      <div className="relative z-30 w-full border-t border-slate-800 bg-slate-900/90 backdrop-blur-md py-6 px-6 md:px-12 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          
          {/* ==================== PREMIUM ROYAL PATRONAGE LAYOUT ==================== */}
          <div className="w-full text-center flex flex-col items-center select-none">
            
            {/* Minimalist Vector System Accent Pill */}
            <div className="w-12 h-1 bg-gradient-to-r from-[#0284C7] to-[#0D9488] rounded-full mb-3" />

            {/* 1. Contextual Protocol Prefix Layer */}
            <span className="text-[10px] md:text-xs font-black tracking-[0.25em] text-[#0284C7] uppercase mb-1.5">
              Under the Patronage of
            </span>

            {/* 2. Official Patron Name Layer (High Contrast White) */}
            <h2 className="text-base sm:text-lg lg:text-xl font-bold tracking-normal leading-snug text-white font-sans max-w-3xl">
              H.H. Sheikh Maktoum bin Mohammed bin Rashid Al Maktoum
            </h2>

            {/* 3. Official Titles Hierarchy Base Layer (High Contrast Slate-300) */}
            <p className="mt-1.5 text-[11px] sm:text-xs font-medium tracking-wide text-slate-300 leading-relaxed max-w-4xl">
              First Deputy Ruler of Dubai, Deputy Prime Minister, and Minister of Finance, UAE, and President of DIFC
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
