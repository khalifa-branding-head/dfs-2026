import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Shield, Building2, Landmark, Globe, Briefcase } from 'lucide-react';

const partners = [
  {
    id: 'difc',
    tier: 'HOST ENTITY',
    name: 'DIFC',
    role: 'Dubai International Financial Centre',
    src: '/assets/logos/difc.svg',
    icon: Shield,
    gridClass: 'md:col-span-2 lg:col-span-2 border-[#12E9E9]/30 bg-gradient-to-br from-[#082028] via-[#082028] to-[#12E9E9]/5'
  },
  {
    id: 'enbd',
    tier: 'PREMIUM BANKING PARTNER',
    name: 'Emirates NBD',
    role: 'Principal Banking Consortium',
    src: '/assets/logos/emirates-nbd.svg',
    icon: Landmark,
    gridClass: 'md:col-span-1 lg:col-span-1'
  },
  {
    id: 'moi',
    tier: 'STRATEGIC GOVERNMENT PARTNER',
    name: 'Ministry of Investment',
    role: 'Federal Investment Infrastructure',
    src: '/assets/logos/ministry-investment.svg',
    icon: Building2,
    gridClass: 'md:col-span-1 lg:col-span-1'
  },
  {
    id: 'cbd',
    tier: 'COMMERCIAL BANKING PARTNER',
    name: 'CBD',
    role: 'Commercial Banking Sector Lead',
    src: '/assets/logos/cbd.svg',
    icon: Briefcase,
    gridClass: 'md:col-span-1 lg:col-span-1'
  },
  {
    id: 'investuae',
    tier: 'NATIONAL INVESTMENT PARTNER',
    name: 'INVEST UAE',
    role: 'Sovereign Wealth Acceleration',
    src: '/assets/logos/invest-uae.svg',
    icon: Globe,
    gridClass: 'md:col-span-1 lg:col-span-1'
  }
];

export default function PartnerMatrix() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative w-full bg-[#082028] py-24 px-6 md:px-12 overflow-hidden selection:bg-[#12E9E9]/20">
      <div className="max-w-7xl mx-auto">
        
        {/* ==================== SECTION HEADER ARCHITECTURE ==================== */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#12E9E9]/10 text-[#12E9E9] text-[10px] font-bold tracking-[0.25em] px-4 py-1.5 rounded-md uppercase mb-4">
            Sovereign Trust Infrastructure
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight font-sans">
            The Institutional Ecosystem
          </h2>
          <p className="text-sm md:text-base text-[#6D8794] mt-4 leading-relaxed">
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
                className={`relative rounded-2xl border border-[#BEC9CB]/10 bg-[#082028]/40 backdrop-blur-md p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 group ${
                  partner.gridClass || ''
                } ${isHovered ? 'border-[#12E9E9]/30 shadow-[0_0_30px_rgba(18,233,233,0.06)]' : ''}`}
              >
                {/* Subtle Geometric Background Ambient Glow Accent */}
                <div className={`absolute -right-12 -top-12 w-32 h-32 bg-[#12E9E9] rounded-full blur-[64px] transition-opacity duration-500 pointer-events-none ${
                  isHovered ? 'opacity-15' : 'opacity-0'
                }`} />

                {/* Upper Metadata Row */}
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold tracking-widest text-[#12E9E9] uppercase block">
                      {partner.tier}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-white font-sans mt-1">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-[#6D8794] font-medium leading-none">
                      {partner.role}
                    </p>
                  </div>
                  
                  {/* Performance Vector Subhead Icon */}
                  <div className={`p-2.5 rounded-xl border transition-colors duration-300 ${
                    isHovered ? 'border-[#12E9E9]/30 bg-[#12E9E9]/5 text-[#12E9E9]' : 'border-[#BEC9CB]/5 text-[#6D8794]'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Lower Branding Row - Parity with Staging SVG Assets */}
                <div className="h-20 flex items-center justify-between border-t border-[#BEC9CB]/5 pt-6 mt-auto">
                  <div className="h-10 max-w-[70%] flex items-center">
                    {/* 
                      - grayscale brightness-0 invert: Enforces clean monochrome styling.
                      - group-hover:filter-none: Smoothly illuminates original brand assets on interaction.
                    */}
                    <img 
                      src={partner.src} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale brightness-0 invert opacity-45 group-hover:opacity-100 group-hover:filter-none transition-all duration-300"
                    />
                  </div>

                  {/* Contextual Outbound Link Track Indicator */}
                  <div className={`flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                    isHovered ? 'text-[#08BDF4] translate-x-0' : 'text-[#6D8794]/0 translate-x-2'
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
