import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ArrowUpRight } from 'lucide-react';

const financialCapitals = [
  { id: 'toronto', name: 'Toronto', region: 'AMER', coordinates: { x: '46.8%', y: '40.6%' }, delegates: '420+', highlight: 'InsurTech & Innovation' },
  { id: 'nyc', name: 'New York City', region: 'AMER', coordinates: { x: '50.7%', y: '44.8%' }, delegates: '1,450+', highlight: 'Capital Markets & PE' },
  { id: 'mexico-city', name: 'Mexico City', region: 'AMER', coordinates: { x: '45.8%', y: '53.6%' }, delegates: '310+', highlight: 'LATAM Fintech Corridors' },
  { id: 'london', name: 'London', region: 'EMEA', coordinates: { x: '56.7%', y: '39.8%' }, delegates: '1,200+', highlight: 'Regulators & Banking' },
  { id: 'stockholm', name: 'Stockholm', region: 'EMEA', coordinates: { x: '60.1%', y: '32.8%' }, delegates: '280+', highlight: 'Nordic WealthTech' },
  { id: 'paris', name: 'Paris', region: 'EMEA', coordinates: { x: '57.8%', y: '42.9%' }, delegates: '490+', highlight: 'Asset Management' },
  { id: 'madrid', name: 'Madrid', region: 'EMEA', coordinates: { x: '56.9%', y: '47.5%' }, delegates: '340+', highlight: 'Southern Europe Hub' },
  { id: 'tel-aviv', name: 'Tel Aviv', region: 'EMEA', coordinates: { x: '62.7%', y: '40.7%' }, delegates: '410+', highlight: 'Cybersecurity & Fraud' },
  { id: 'dubai', name: 'Dubai', region: 'EMEA', coordinates: { x: '64.7%', y: '57.1%' }, delegates: '2,500+', highlight: 'Summit Host City' },
  { id: 'mumbai', name: 'Mumbai', region: 'APAC', coordinates: { x: '67.8%', y: '53.5%' }, delegates: '1,100+', highlight: 'Digital Payments & Infrastructure' },
  { id: 'singapore', name: 'Singapore', region: 'APAC', coordinates: { x: '70.2%', y: '61.7%' }, delegates: '980+', highlight: 'FinTech & WealthTech' },
  { id: 'hk', name: 'Hong Kong', region: 'APAC', coordinates: { x: '73.2%', y: '51.8%' }, delegates: '820+', highlight: 'Asset Management' },
  { id: 'tokyo', name: 'Tokyo', region: 'APAC', coordinates: { x: '75.2%', y: '47.8%' }, delegates: '650+', highlight: 'Institutional Banking' },
  { id: 'sydney', name: 'Sydney', region: 'APAC', coordinates: { x: '76.6%', y: '76.8%' }, delegates: '380+', highlight: 'Cross-Border Rails' },
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
    <section className="w-full bg-[#082028] py-28 px-6 md:px-12 relative font-sans antialiased overflow-hidden selection:bg-[#12E9E9]/20 border-t border-white/[0.04]">
      
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#12E9E9]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* ==================== LEFT COLUMN: EDITORIAL HEADER & REGIONAL CONTROLS (5-Span) ==================== */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#12E9E9]/10 text-[#12E9E9] text-[10px] font-black tracking-[0.25em] px-4 py-1.5 rounded-md uppercase border border-[#12E9E9]/20">
              <Globe className="w-3.5 h-3.5" />
              Global Convergence Hub
            </div>
            
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Connecting the world's <br />
              <span className="bg-gradient-to-r from-[#12E9E9] via-[#08BDF4] to-white bg-clip-text text-transparent">
                financial capitals
              </span>
            </h2>
            
            <p className="text-sm md:text-base text-[#6D8794] font-medium leading-relaxed">
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
                    ? 'bg-[#12E9E9] text-[#082028] shadow-[0_4px_20px_rgba(18,233,233,0.3)]'
                    : 'bg-[#0c2730]/60 text-[#6D8794] border border-white/[0.05] hover:border-white/20 hover:text-white'
                }`}
              >
                {reg.label}
              </button>
            ))}
          </div>
        </div>

        {/* ==================== RIGHT COLUMN: INTERACTIVE VECTOR MAP CANVAS (7-Span) ==================== */}
        <div className="lg:col-span-7 relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl border border-white/[0.08] bg-[#0c2730]/40 backdrop-blur-xl overflow-hidden shadow-[0_30px_60px_rgba(4,16,20,0.5)] flex items-center justify-center p-6">
          
          {/* Official World Map + Connecting Lines Background Image */}
          <img 
            src="assets/images/world-map.png" 
            alt="World Map Connecting Financial Capitals"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none opacity-90 p-4"
          />

          {/* Interactive City Node Overlays */}
          <div className="absolute inset-0 z-20">
            {filteredCities.map((city) => {
              const isSelected = hoveredCity?.id === city.id;

              return (
                <div
                  key={city.id}
                  style={{ left: city.coordinates.x, top: city.coordinates.y }}
                  onMouseEnter={() => setHoveredCity(city)}
                  onMouseLeave={() => setHoveredCity(null)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center cursor-pointer z-30"
                >
                  {/* Glowing/Hover Indicator dot precisely overlaying the pre-rendered city */}
                  <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                    isSelected 
                      ? 'bg-[#12E9E9] scale-125 shadow-[0_0_12px_#12E9E9]' 
                      : 'bg-transparent group-hover:bg-[#12E9E9]/40'
                  }`} />

                  {/* Hover Floating Telemetry Badge */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: -5, scale: 1 }}
                        exit={{ opacity: 0, y: -5, scale: 0.95 }}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 p-3 rounded-xl bg-[#082028]/95 backdrop-blur-xl border border-[#12E9E9]/40 shadow-[0_10px_30px_rgba(4,16,20,0.8)] z-40 text-left space-y-1 pointer-events-none"
                      >
                        <div className="flex items-center justify-between border-b border-white/10 pb-1">
                          <span className="text-[10px] font-black text-[#12E9E9] uppercase tracking-wider">{city.name}</span>
                          <span className="text-[9px] font-bold text-[#6D8794]">{city.region}</span>
                        </div>
                        <div className="text-xs font-black text-white">{city.delegates} <span className="text-[10px] font-normal text-[#6D8794]">Delegates</span></div>
                        <div className="text-[9px] font-semibold text-[#6D8794] truncate">{city.highlight}</div>
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
