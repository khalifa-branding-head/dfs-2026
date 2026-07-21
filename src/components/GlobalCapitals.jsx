import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ArrowUpRight } from 'lucide-react';

const financialCapitals = [
  { id: 'toronto', name: 'Toronto', region: 'AMER', coordinates: { x: '27.5%', y: '36.0%' }, delegates: '420+', highlight: 'InsurTech & Innovation' },
  { id: 'nyc', name: 'New York City', region: 'AMER', coordinates: { x: '29.2%', y: '38.0%' }, delegates: '1,450+', highlight: 'Capital Markets & PE' },
  { id: 'mexico-city', name: 'Mexico City', region: 'AMER', coordinates: { x: '24.0%', y: '50.0%' }, delegates: '310+', highlight: 'LATAM Fintech Corridors' },
  { id: 'london', name: 'London', region: 'EMEA', coordinates: { x: '47.5%', y: '32.5%' }, delegates: '1,200+', highlight: 'Regulators & Banking' },
  { id: 'stockholm', name: 'Stockholm', region: 'EMEA', coordinates: { x: '51.5%', y: '26.0%' }, delegates: '280+', highlight: 'Nordic WealthTech' },
  { id: 'paris', name: 'Paris', region: 'EMEA', coordinates: { x: '48.5%', y: '35.5%' }, delegates: '490+', highlight: 'Asset Management' },
  { id: 'madrid', name: 'Madrid', region: 'EMEA', coordinates: { x: '47.2%', y: '39.0%' }, delegates: '340+', highlight: 'Southern Europe Hub' },
  { id: 'tel-aviv', name: 'Tel Aviv', region: 'EMEA', coordinates: { x: '54.5%', y: '43.0%' }, delegates: '410+', highlight: 'Cybersecurity & Fraud' },
  { id: 'dubai', name: 'Dubai', region: 'EMEA', coordinates: { x: '58.8%', y: '46.2%' }, delegates: '2,500+', highlight: 'Summit Host City' },
  { id: 'mumbai', name: 'Mumbai', region: 'APAC', coordinates: { x: '66.2%', y: '50.5%' }, delegates: '1,100+', highlight: 'Digital Payments & Infrastructure' },
  { id: 'singapore', name: 'Singapore', region: 'APAC', coordinates: { x: '73.2%', y: '61.5%' }, delegates: '980+', highlight: 'FinTech & WealthTech' },
  { id: 'hk', name: 'Hong Kong', region: 'APAC', coordinates: { x: '75.8%', y: '48.5%' }, delegates: '820+', highlight: 'Asset Management' },
  { id: 'tokyo', name: 'Tokyo', region: 'APAC', coordinates: { x: '81.5%', y: '37.5%' }, delegates: '650+', highlight: 'Institutional Banking' },
  { id: 'sydney', name: 'Sydney', region: 'APAC', coordinates: { x: '86.2%', y: '76.5%' }, delegates: '380+', highlight: 'Cross-Border Rails' },
];

const regions = [
  { id: 'ALL', label: 'Global Corridor' },
  { id: 'EMEA', label: 'EMEA' },
  { id: 'AMER', label: 'Americas' },
  { id: 'APAC', label: 'Asia Pacific' },
];

export default function GlobalCapitals() {
  const [activeRegion, setActiveRegion] = useState('ALL');
  const [hoveredCity, setHoveredCity] = useState(null);

  const filteredCities = activeRegion === 'ALL' 
    ? financialCapitals 
    : financialCapitals.filter(c => c.region === activeRegion);

  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-20 px-6 md:px-12 relative font-sans antialiased overflow-hidden selection:bg-[#0284C7]/20 border-t border-slate-200/80">
      
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0284C7]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* ==================== LEFT COLUMN: EDITORIAL HEADER & REGIONAL CONTROLS (5-Span) ==================== */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#0284C7]/10 text-[#0284C7] text-[10px] font-black tracking-[0.25em] px-4 py-1.5 rounded-md uppercase border border-[#0284C7]/20">
              <Globe className="w-3.5 h-3.5" />
              Global Convergence Hub
            </div>
            
            <h2 className="text-[#0F172A] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Connecting the world's <br />
              <span className="bg-gradient-to-r from-[#0284C7] to-[#0D9488] bg-clip-text text-transparent">
                financial capitals
              </span>
            </h2>
            
            <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed">
              CEOs, regulators, founders, and investors from the world's leading financial capitals converge in Dubai to shape the next era of global finance.
            </p>
          </div>

          {/* Region Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 select-none pt-2">
            {regions.map((reg) => (
              <button
                key={reg.id}
                onClick={() => setActiveRegion(reg.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeRegion === reg.id
                    ? 'bg-[#0284C7] text-white shadow-[0_4px_15px_rgba(2,132,199,0.25)]'
                    : 'bg-white text-[#475569] border border-slate-200/80 hover:border-[#0284C7]/40 hover:text-[#0F172A]'
                }`}
              >
                {reg.label}
              </button>
            ))}
          </div>
        </div>

        {/* ==================== RIGHT COLUMN: INTERACTIVE VECTOR MAP CANVAS (7-Span) ==================== */}
        {/* locked aspect ratio to exactly matches the 16:9 map.mp4 video file to prevent any scaling misalignment */}
        <div className="lg:col-span-7 relative w-full aspect-video rounded-3xl border border-slate-800 bg-slate-900 overflow-hidden shadow-[0_12px_40px_rgba(15,23,42,0.12)] flex items-center justify-center">
          
          {/* Official Animated World Map Video Background */}
          <video 
            src="assets/videos/map.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-85"
          />

          {/* Interactive City Node Overlays */}
          <div className="absolute inset-0 z-20">
            {filteredCities.map((city) => {
              const isSelected = hoveredCity?.id === city.id;
              const isDubai = city.id === 'dubai';

              return (
                <div
                  key={city.id}
                  style={{ left: city.coordinates.x, top: city.coordinates.y }}
                  onMouseEnter={() => setHoveredCity(city)}
                  onMouseLeave={() => setHoveredCity(null)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center cursor-pointer z-30 group"
                >
                  {/* Glowing/Hover Indicator dot precisely overlaying the pre-rendered city */}
                  <div className={`rounded-full transition-all duration-300 flex items-center justify-center ${
                    isDubai 
                      ? 'w-3 h-3 bg-[#0284C7] shadow-[0_0_15px_#0284C7] animate-pulse'
                      : isSelected
                        ? 'w-2.5 h-2.5 bg-[#0284C7] scale-125 shadow-[0_0_12px_#0284C7]' 
                        : 'w-2 h-2 bg-[#0284C7]/80 group-hover:bg-[#0284C7]'
                  }`} />

                  {/* Pulsing ring for selected or Dubai node */}
                  {(isSelected || isDubai) && (
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#0284C7]/20 animate-ping pointer-events-none" />
                  )}

                  {/* Hover Floating Telemetry Badge */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: -5, scale: 1 }}
                        exit={{ opacity: 0, y: -5, scale: 0.95 }}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 p-3 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-[#0284C7]/40 shadow-xl z-40 text-left space-y-1 pointer-events-none text-white"
                      >
                        <div className="flex items-center justify-between border-b border-slate-700 pb-1">
                          <span className="text-[10px] font-black text-[#0284C7] uppercase tracking-wider">{city.name}</span>
                          <span className="text-[9px] font-bold text-slate-400">{city.region}</span>
                        </div>
                        <div className="text-xs font-black text-white">{city.delegates} <span className="text-[10px] font-normal text-slate-400">Delegates</span></div>
                        <div className="text-[9px] font-semibold text-slate-300 truncate">{city.highlight}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
