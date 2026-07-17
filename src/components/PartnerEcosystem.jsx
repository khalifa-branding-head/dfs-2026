import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ecosystemPartners = [
  { id: 'enbd', tier: 'FOUNDING PARTNER', src: '/assets/logos/emirates-nbd.png' },
  { id: 'mawarid', tier: 'ISLAMIC FINANCIAL PARTNER', src: '/assets/logos/mawarid-finance.png' },
  { id: 'cbd', tier: 'COMMERCIAL BANKING LEADER', src: '/assets/logos/cbd.png' },
  { id: 'moi', tier: 'STRATEGIC GOVERNMENT PARTNER', src: '/assets/logos/ministry-of-investment.png' },
  { id: 'invest', tier: 'NATIONAL INVESTMENT PARTNER', src: '/assets/logos/invest-uae.png' },
  { id: 'ignyte', tier: 'ECOSYSTEM ALLIANCE', src: '/assets/logos/ignyte.png' },
  { id: 'ripple', tier: 'ECOSYSTEM ALLIANCE', src: '/assets/logos/ripple.png' },
  { id: 'partner-pay', tier: 'STRATEGIC PARTNER', src: '/assets/logos/pay.png' }
];

export default function PartnerEcosystem() {
  return (
    <section className="w-full bg-[#082028] py-24 px-6 md:px-12 relative font-sans antialiased">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ==================== 1. ELITE BRAND HEADER ==================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#BEC9CB]/15 pb-6 select-none">
          <div className="flex items-center gap-4">
            <span className="text-xs font-black tracking-[0.25em] text-[#12E9E9] uppercase drop-shadow-[0_2px_8px_rgba(18,233,233,0.2)]">
              Strategic Alliances
            </span>
            <div className="hidden md:block w-8 h-[1px] bg-[#BEC9CB]/20" />
            <span className="text-xs font-bold tracking-widest text-[#6D8794] uppercase">
              Global Institutional Partners & Sponsors 2026
            </span>
          </div>
          <a href="/partners.html" className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-[#12E9E9] uppercase group transition-colors duration-300 hover:text-white">
            View Ecosystem 
            <ArrowUpRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* ==================== 2. BALANCED TOKEN MATRICES ==================== */}
        {/* 
          - Grid configuration maps items symmetrically into four columns (lg:grid-cols-4).
          - Every block is built on a solid off-white plate to absorb the logo's internal background color cleanly.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {ecosystemPartners.map((partner) => (
            <div
              key={partner.id}
              className="relative rounded-xl bg-white border border-white p-5 flex flex-col justify-between h-[156px] shadow-[0_10px_35px_rgba(4,16,20,0.25)] transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Card Metadata Row */}
              <div className="flex items-center justify-between w-full opacity-80">
                <span className="text-[9px] font-black tracking-[0.12em] text-[#082028]/60 uppercase select-none group-hover:text-[#082028] transition-colors duration-200">
                  {partner.tier}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#082028]/20 group-hover:bg-[#12E9E9] transition-colors duration-200" />
              </div>

              {/* Symmetrical Logo Area – Bypasses filters to hide the clashing borders */}
              <div className="h-16 w-full flex items-center justify-center my-auto overflow-hidden rounded-md">
                <img
                  src={partner.src}
                  alt="Institutional Alliance Logo"
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-102"
                />
              </div>

              {/* Luminous Flagship Laser Accent Underline */}
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#12E9E9] to-[#08BDF4] transform scale-x-0 transition-transform duration-300 origin-center rounded-b-xl group-hover:scale-x-100" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
