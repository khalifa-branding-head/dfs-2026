import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Globe2, Lightbulb } from 'lucide-react';

const coreHighlights = [
  { id: 'edition', label: '4th Edition', text: 'Convenes C-Suite Leaders', icon: Users },
  { id: 'reach', label: 'Global Finance', text: 'Reshaping Policy Frameworks', icon: Globe2 },
  { id: 'impact', label: 'Tech Evolution', text: 'Driving Groundbreaking Insights', icon: Lightbulb }
];

export default function AboutSummit() {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-20 px-6 md:px-12 overflow-hidden relative selection:bg-[#0284C7]/20">
      
      {/* Ambient Visual System Blur Accent Layers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0284C7]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* ==================== LEFT COLUMN: EDITORIAL CONTENT STACK (60%) ==================== */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Symmetrical Contextual Tag */}
          <div className="inline-flex items-center gap-2 bg-[#0284C7]/10 border border-[#0284C7]/20 text-[#0284C7] text-[10px] font-black tracking-[0.25em] px-4 py-1.5 rounded-md uppercase">
            Summit Overview
          </div>

          {/* Symmetrical Dynamic Main Title Stack */}
          <h2 className="text-[#0F172A] text-[clamp(2rem,5vw,3.75rem)] font-bold tracking-tight leading-[1.15] font-sans">
            Building a Connected <br />
            <span className="bg-gradient-to-r from-[#0284C7] to-[#0D9488] bg-clip-text text-transparent">
              Borderless Financial World
            </span>
          </h2>

          {/* Clean Descriptive Typography Tier */}
          <div className="space-y-4 max-w-2xl font-sans">
            <p className="text-base text-[#475569] font-medium leading-relaxed">
              Organised by <span className="text-[#0F172A] font-bold">DIFC</span>, Dubai FinTech Summit – now in its fourth edition – convenes C-suite leaders, decision-makers, regulators, innovators, and market pioneers from finance, policy, and technology to shape the standards, strategies, and innovations defining the next chapter of global finance.
            </p>
            <p className="text-sm text-[#475569] leading-relaxed">
              Experience groundbreaking insights, bold ideas, and transformative collaborations driving the evolution of the FinTech industry on a global scale.
            </p>
          </div>

          {/* Interactive Metric Framework Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {coreHighlights.map((item) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={item.id}
                  className="rounded-xl border border-slate-200/80 bg-white p-4 space-y-2 transition-all duration-300 shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:border-[#0284C7]/50 hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-wider text-[#0F172A] uppercase">{item.label}</span>
                    <IconComponent className="w-3.5 h-3.5 text-[#0284C7]" />
                  </div>
                  <p className="text-[11px] text-[#475569] leading-tight font-medium">{item.text}</p>
                </div>
              );
            })}
          </div>

          {/* Premium High-Impact Action Button Element */}
          <div className="pt-6">
            <a 
              href="/about.html" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white text-xs font-black tracking-[0.2em] px-8 py-4 rounded-xl uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(2,132,199,0.25)] hover:shadow-[0_6px_30px_rgba(2,132,199,0.4)] hover:scale-[1.02]"
            >
              Know More
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </a>
          </div>

        </div>

        {/* ==================== RIGHT COLUMN: CINEMATIC MULTI-LAYER GALLERY CONTAINER (50%) ==================== */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          
          {/* Subtle Outer Glowing Ring Grid Frame */}
          <div className="absolute inset-0 border border-slate-200/60 rounded-2xl rotate-3 scale-95 pointer-events-none" />
          
          {/* Main Display Substrate Image Window */}
          <motion.div 
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl border border-slate-200/80 bg-white overflow-hidden relative shadow-[0_12px_40px_rgba(15,23,42,0.06)] group hover:border-[#0284C7]/50 transition-all"
          >
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
            
            {/* Dynamic Hover Visual Accent Highlight Ring along bottom edge */}
            <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-[#0284C7] to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <img 
              src="assets/images/summit-showcase.jpg" 
              alt="Dubai FinTech Summit Floor Interaction Gallery" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
