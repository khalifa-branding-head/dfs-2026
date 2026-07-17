import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const partnersData = [
  { id: 'cbd', name: 'CBD', desc: 'Commercial Bank of Dubai', src: '/assets/logos/cbd.svg' },
  { id: 'moi', name: 'MINISTRY OF INVESTMENT', desc: 'United Arab Emirates', src: '/assets/logos/ministry-investment.svg' },
  { id: 'invest', name: 'INVEST UAE', desc: 'Sovereign Alliance', src: '/assets/logos/invest-uae.svg' },
  { id: 'mawarid', name: 'MAWARID FINANCE', desc: 'Islamic Financial Partner', src: '/assets/logos/mawarid.svg' },
  { id: 'enbd', name: 'EMIRATES NBD', desc: 'Founding Partner', src: '/assets/logos/emirates-nbd.svg' },
];

export default function PartnerShowcase() {
  return (
    <section className="w-full bg-[#082028] py-20 px-6 md:px-12 selection:bg-[#12E9E9]/20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ==================== 1. SYMMETRICAL HEADER EMBED ==================== */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#BEC9CB]/10 pb-6">
          <div className="flex items-center gap-4">
            <span className="text-xs font-black tracking-[0.25em] text-[#12E9E9] uppercase drop-shadow-[0_2px_8px_rgba(18,233,233,0.15)]">
              Strategic Alliances
            </span>
            <div className="hidden md:block w-8 h-[1px] bg-[#BEC9CB]/20" />
            <span className="text-xs font-bold tracking-widest text-[#6D8794] uppercase">
              Global Institutional Partners & Sponsors 2026
            </span>
          </div>
          
          <a href="/sponsors.html" className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-[#12E9E9] uppercase group">
            View Ecosystem 
            <ArrowUpRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* ==================== 2. PREMIUM GEOMETRIC MATRICES ==================== */}
        {/* 
          - Ditching the generic single line. 
          - Using an asymmetric grid layout (grid-cols-2 lg:grid-cols-5).
          - Each logo gets an ultra-premium, dark frosted glass substrate tile framework.
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {partnersData.map((partner) => (
            <div
              key={partner.id}
              className="relative rounded-xl border border-[#BEC9CB]/10 bg-[#082028]/40 backdrop-blur-md p-6 flex flex-col justify-between items-center text-center h-48 group hover:border-[#12E9E9]/30 transition-all duration-300 shadow-sm hover:shadow-[0_0_30px_rgba(18,233,233,0.04)]"
            >
              {/* Internal Tile Graphic Element (Micro-Icon Placeholder Slot) */}
              <div className="w-full flex justify-between items-center mb-4 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[9px] font-bold tracking-widest text-[#6D8794] uppercase">
                  DFS Tier
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#12E9E9]" />
              </div>

              {/* Exact Staging Monochrome Vector Asset Protection Layout */}
              <div className="h-12 w-full flex items-center justify-center mb-4">
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="max-w-[85%] max-h-full object-contain filter grayscale brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300"
                />
              </div>

              {/* Text Layer Metadata Anchored to Base Grid */}
              <div className="mt-auto space-y-0.5 select-none">
                <h4 className="text-[11px] font-extrabold tracking-wider text-white uppercase font-sans">
                  {partner.name}
                </h4>
                <p className="text-[9px] font-medium tracking-wide text-[#6D8794] leading-tight">
                  {partner.desc}
                </p>
              </div>

              {/* High-End Sub-Card Neon Highlight Edge */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#12E9E9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
