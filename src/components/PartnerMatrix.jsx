import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Shield, Building2, Landmark, Globe, Briefcase } from 'lucide-react';

const partners = [
  {
    id: 'difc',
    tier: 'HOST ENTITY',
    name: 'DIFC',
    role: 'Dubai International Financial Centre',
    src: 'assets/logos/difc.svg',
    icon: Shield,
    gridClass: 'md:col-span-2 lg:col-span-2 border-[#0284C7]/30 bg-gradient-to-br from-white via-white to-[#0284C7]/5'
  },
  {
    id: 'enbd',
    tier: 'PREMIUM BANKING PARTNER',
    name: 'Emirates NBD',
    role: 'Principal Banking Consortium',
    src: 'assets/logos/emirates-nbd.svg',
    icon: Landmark,
    gridClass: 'md:col-span-1 lg:col-span-1'
  },
  {
    id: 'moi',
    tier: 'STRATEGIC GOVERNMENT PARTNER',
    name: 'Ministry of Investment',
    role: 'Federal Investment Infrastructure',
    src: 'assets/logos/ministry-investment.svg',
    icon: Building2,
    gridClass: 'md:col-span-1 lg:col-span-1'
  },
  {
    id: 'cbd',
    tier: 'COMMERCIAL BANKING PARTNER',
    name: 'CBD',
    role: 'Commercial Banking Sector Lead',
    src: 'assets/logos/cbd.svg',
    icon: Briefcase,
    gridClass: 'md:col-span-1 lg:col-span-1'
  },
  {
    id: 'investuae',
    tier: 'NATIONAL INVESTMENT PARTNER',
    name: 'INVEST UAE',
    role: 'Sovereign Wealth Acceleration',
    src: 'assets/logos/invest-uae.svg',
    icon: Globe,
    gridClass: 'md:col-span-1 lg:col-span-1'
  }
];

export default function PartnerMatrix() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative w-full bg-[#F8FAFC] py-16 md:py-20 px-6 md:px-12 overflow-hidden selection:bg-[#0284C7]/20">
      <div className="max-w-7xl mx-auto">
        
        {/* ==================== SECTION HEADER ARCHITECTURE ==================== */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#0284C7]/10 border border-[#0284C7]/20 text-[#0284C7] text-[10px] font-black tracking-[0.25em] px-4 py-1.5 rounded-md uppercase mb-4">
            Sovereign Trust Infrastructure
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight font-sans">
            The Institutional Ecosystem
          </h2>
          <p className="text-sm md:text-base text-[#475569] mt-4 leading-relaxed">
            Connecting global capital markets under the unified backing of the region's premier regulatory and financial institutions.
          </p>
        </div>

        {/* ==================== ASYMMETRIC GRID SYSTEM ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => {
            const Icon = partner.icon;
            const isHovered = hoveredCard === partner.id;

            return (
              <motion.div
                key={partner.id}
                onMouseEnter={() => setHoveredCard(partner.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-2xl border border-slate-200/80 bg-white p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 shadow-[0_12px_40px_rgba(15,23,42,0.06)] group ${
                  partner.gridClass || ''
                } ${isHovered ? 'border-[#0284C7]/50 shadow-[0_20px_45px_rgba(2,132,199,0.12)]' : ''}`}
              >
                {/* Subtle Geometric Background Ambient Glow Accent */}
                <div className={`absolute -right-12 -top-12 w-32 h-32 bg-[#0284C7] rounded-full blur-[64px] transition-opacity duration-500 pointer-events-none ${
                  isHovered ? 'opacity-10' : 'opacity-0'
                }`} />

                {/* Upper Metadata Row */}
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black tracking-[0.25em] text-[#0284C7] uppercase block">
                      {partner.tier}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-[#0F172A] font-sans mt-1">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-[#475569] font-medium leading-none">
                      {partner.role}
                    </p>
                  </div>
                  
                  {/* Performance Vector Subhead Icon */}
                  <div className={`p-2.5 rounded-xl border transition-colors duration-300 ${
                    isHovered ? 'border-[#0284C7]/30 bg-[#0284C7]/10 text-[#0284C7]' : 'border-slate-200 text-[#475569]'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Lower Branding Row - Parity with Staging SVG Assets */}
                <div className="h-20 flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
                  <div className="h-10 max-w-[70%] flex items-center">
                    <img 
                      src={partner.src} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale opacity-65 group-hover:opacity-100 group-hover:filter-none transition-all duration-300"
                    />
                  </div>

                  {/* Contextual Outbound Link Track Indicator */}
                  <div className={`flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                    isHovered ? 'text-[#0284C7] translate-x-0' : 'text-[#475569]/0 translate-x-2'
                  }`}>
                    Review Alliance
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
