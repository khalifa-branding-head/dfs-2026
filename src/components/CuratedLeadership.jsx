import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Landmark, Building2, Briefcase, Cpu, Network, Sparkles } from 'lucide-react';

const leadershipSectors = [
  {
    id: 'regulators',
    stat: '20+',
    label: 'Global financial regulators',
    icon: ShieldCheck,
    src: 'assets/images/regulators.webp'
  },
  {
    id: 'exchanges',
    stat: '5+',
    label: 'Stock exchanges',
    icon: Landmark,
    src: 'assets/images/exchanges.webp'
  },
  {
    id: 'bank-execs',
    stat: '30+',
    label: 'Top bank executives',
    icon: Building2,
    src: 'assets/images/bank-execs.webp'
  },
  {
    id: 'investment',
    stat: '20+',
    label: 'Top investment management firms',
    icon: Briefcase,
    src: 'assets/images/investment.webp'
  },
  {
    id: 'fintechs',
    stat: '50+',
    label: 'FinTechs',
    icon: Cpu,
    src: 'assets/images/fintechs.webp'
  },
  {
    id: 'tech-enterprises',
    stat: '20+',
    label: 'Technology enterprises',
    icon: Network,
    src: 'assets/images/tech-enterprises.webp'
  }
];

export default function CuratedLeadership() {
  return (
    <section className="w-full bg-[#082028] py-16 md:py-20 px-6 md:px-12 relative font-sans antialiased overflow-hidden selection:bg-[#12E9E9]/20 border-t border-white/[0.06]">
      
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#12E9E9]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-[#08BDF4]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        
        {/* ==================== LEFT COLUMN: EDITORIAL HEADER (5-Span) ==================== */}
        <div className="lg:col-span-5 space-y-5 text-left">
          
          <div className="inline-flex items-center gap-2 bg-[#12E9E9]/10 text-[#12E9E9] text-[10px] font-black tracking-[0.25em] px-3.5 py-1 rounded-md uppercase border border-[#12E9E9]/20">
            <Sparkles className="w-3 h-3 text-[#12E9E9]" />
            <span>Institutional Network</span>
          </div>

          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15]">
            A curated gathering of <br />
            <span className="bg-gradient-to-r from-[#12E9E9] via-[#08BDF4] to-white bg-clip-text text-transparent">
              global financial leadership
            </span>
          </h2>

          <p className="text-sm md:text-base text-[#6D8794] font-medium leading-relaxed max-w-lg">
            A curated assembly of global financial leaders, spanning regulation, capital markets, banking, investment, and financial technology.
          </p>

          <div className="pt-2 select-none">
            <a
              href="ecosystem.html"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#12E9E9] to-[#08BDF4] text-[#082028] text-xs font-black tracking-[0.2em] px-7 py-3.5 rounded-xl uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(18,233,233,0.3)] hover:scale-[1.03]"
            >
              <span>Explore Leadership Matrix</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </a>
          </div>

        </div>

        {/* ==================== RIGHT COLUMN: 2x3 GLASS PHOTO BENTO (7-Span) ==================== */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {leadershipSectors.map((sector) => {
            const SectorIcon = sector.icon;

            return (
              <motion.div
                key={sector.id}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl border border-white/[0.08] hover:border-[#12E9E9]/40 bg-[#0c2730]/40 overflow-hidden h-[210px] flex flex-col justify-between p-5 group shadow-[0_15px_35px_rgba(4,16,20,0.4)] cursor-pointer transition-all duration-500"
              >
                {/* Background Photo with Smooth Scale */}
                <img
                  src={sector.src}
                  alt={sector.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-108 brightness-90"
                />

                {/* Dual-Stage Dark Vignette Mask Overlays for Maximum Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#082028] via-[#082028]/70 to-black/50 transition-opacity duration-300 group-hover:opacity-90 z-10" />

                {/* Top Badge: Sector Category Icon */}
                <div className="relative z-20 flex justify-end">
                  <div className="w-8 h-8 rounded-lg bg-[#082028]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#12E9E9] group-hover:border-[#12E9E9]/50 group-hover:bg-[#082028] transition-all duration-300">
                    <SectorIcon className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content Area: Number Stat + Label */}
                <div className="relative z-20 space-y-1 text-left mt-auto">
                  <div className="text-3xl font-extrabold text-white tracking-tight font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    <span className="text-[#12E9E9] group-hover:text-white transition-colors duration-300">
                      {sector.stat}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-white/95 leading-tight tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                    {sector.label}
                  </p>
                </div>

                {/* Lower Laser Trim Underline Accent */}
                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#12E9E9] via-[#08BDF4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl z-30" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
