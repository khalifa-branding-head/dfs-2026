import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const partnersData = [
  { id: 'cbd', name: 'CBD', desc: 'Commercial Bank of Dubai', src: 'assets/logos/cbd.svg' },
  { id: 'moi', name: 'MINISTRY OF INVESTMENT', desc: 'United Arab Emirates', src: 'assets/logos/ministry-investment.svg' },
  { id: 'invest', name: 'INVEST UAE', desc: 'Sovereign Alliance', src: 'assets/logos/invest-uae.svg' },
  { id: 'mawarid', name: 'MAWARID FINANCE', desc: 'Islamic Financial Partner', src: 'assets/logos/mawarid.svg' },
  { id: 'enbd', name: 'EMIRATES NBD', desc: 'Founding Partner', src: 'assets/logos/emirates-nbd.svg' },
];

export default function PartnerShowcase() {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-20 px-6 md:px-12 selection:bg-[#0284C7]/20 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ==================== 1. SYMMETRICAL HEADER EMBED ==================== */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black tracking-[0.25em] text-[#0284C7] uppercase">
              Strategic Alliances
            </span>
            <div className="hidden md:block w-8 h-[1px] bg-slate-300" />
            <span className="text-xs font-bold tracking-widest text-[#475569] uppercase">
              Global Institutional Partners & Sponsors 2026
            </span>
          </div>
          
          <a href="/sponsors.html" className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-[#0284C7] uppercase hover:text-[#0F172A] group transition-colors">
            View Ecosystem 
            <ArrowUpRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* ==================== 2. PREMIUM GEOMETRIC MATRICES ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {partnersData.map((partner) => (
            <div
              key={partner.id}
              className="relative rounded-2xl border border-slate-200/80 bg-white p-6 flex flex-col justify-between items-center text-center h-48 group hover:border-[#0284C7]/50 transition-all duration-300 shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)]"
            >
              {/* Internal Tile Graphic Element */}
              <div className="w-full flex justify-between items-center mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[9px] font-bold tracking-widest text-[#475569] uppercase">
                  DFS Tier
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
              </div>

              {/* Vector Asset Staging */}
              <div className="h-12 w-full flex items-center justify-center mb-4">
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="max-w-[85%] max-h-full object-contain filter grayscale opacity-65 group-hover:opacity-100 group-hover:filter-none transition-all duration-300"
                />
              </div>

              {/* Text Layer Metadata */}
              <div className="mt-auto space-y-0.5 select-none">
                <h4 className="text-[11px] font-bold tracking-wider text-[#0F172A] uppercase font-sans">
                  {partner.name}
                </h4>
                <p className="text-[9px] font-medium tracking-wide text-[#475569] leading-tight">
                  {partner.desc}
                </p>
              </div>

              {/* High-End Sub-Card Highlight Edge */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#0284C7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
