import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ecosystemPartners = [
  { id: 'enbd', tier: 'FOUNDING PARTNER', src: 'assets/logos/emirates-nbd.png' },
  { id: 'mawarid', tier: 'ISLAMIC FINANCIAL PARTNER', src: 'assets/logos/mawarid-finance.png' },
  { id: 'cbd', tier: 'COMMERCIAL BANKING LEADER', src: 'assets/logos/cbd.png' },
  { id: 'moi', tier: 'STRATEGIC GOVERNMENT PARTNER', src: 'assets/logos/ministry-of-investment.png' },
  { id: 'invest', tier: 'NATIONAL INVESTMENT PARTNER', src: 'assets/logos/invest-uae.png' },
  { id: 'ignyte', tier: 'ECOSYSTEM ALLIANCE', src: 'assets/logos/ignyte.png' },
  { id: 'ripple', tier: 'ECOSYSTEM ALLIANCE', src: 'assets/logos/ripple.png' },
  { id: 'partner-pay', tier: 'STRATEGIC PARTNER', src: 'assets/logos/pay.png' }
];

export default function PartnerEcosystem() {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-20 px-6 md:px-12 relative font-sans antialiased border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* ==================== 1. ELITE BRAND HEADER ==================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6 select-none">
          <div className="flex items-center gap-4">
            <span className="text-xs font-black tracking-[0.25em] text-[#0284C7] uppercase">
              Strategic Alliances
            </span>
            <div className="hidden md:block w-8 h-[1px] bg-slate-300" />
            <span className="text-xs font-bold tracking-widest text-[#475569] uppercase">
              Global Institutional Partners & Sponsors 2026
            </span>
          </div>
          <a href="/sponsors.html" className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#0284C7] uppercase group transition-colors duration-300 hover:text-[#0D9488]">
            <span>View Ecosystem</span>
            <ArrowUpRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* ==================== 2. BALANCED TOKEN MATRICES ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {ecosystemPartners.map((partner) => (
            <div
              key={partner.id}
              className="relative rounded-2xl bg-white border border-slate-200/80 p-5 flex flex-col justify-between h-[160px] shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0284C7]/40 hover:shadow-[0_20px_40px_rgba(2,132,199,0.12)] group"
            >
              {/* Card Metadata Row */}
              <div className="flex items-center justify-between w-full">
                <span className="text-[9.5px] font-extrabold tracking-[0.14em] text-slate-500 uppercase select-none group-hover:text-[#0284C7] transition-colors duration-200">
                  {partner.tier}
                </span>
                <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-[#0284C7] transition-colors duration-200" />
              </div>

              {/* Symmetrical Logo Area */}
              <div className="h-16 w-full flex items-center justify-center my-auto overflow-hidden p-2">
                <img
                  src={partner.src}
                  alt={`${partner.tier} - ${partner.id}`}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Luminous Flagship Accent Underline */}
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#0284C7] to-[#0D9488] transform scale-x-0 transition-transform duration-300 origin-center rounded-b-2xl group-hover:scale-x-100" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
