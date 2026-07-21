import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Trophy, Sparkles } from 'lucide-react';
import ExhibitNetworkGrow from './ExhibitNetworkGrow';
import FintechWorldCup from './FintechWorldCup';

export default function EcosystemVentureHub() {
  const [activeTab, setActiveTab] = useState('exhibition');

  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-20 px-6 md:px-12 border-t border-slate-200 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Hub Navigation Command Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-1.5 text-left">
            <div className="inline-flex items-center gap-2 bg-[#0284C7]/10 text-[#0284C7] text-[10px] font-black tracking-[0.25em] px-3.5 py-1 rounded-md uppercase border border-[#0284C7]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Commercial & Venture Ecosystem</span>
            </div>
            <h2 className="text-[#0F172A] text-2xl md:text-4xl font-bold tracking-tight">
              Exhibition & FinTech World Cup Arena
            </h2>
          </div>

          {/* Tab Selection Switches */}
          <div className="flex items-center bg-slate-200/80 p-1.5 rounded-2xl border border-slate-300/60 shadow-inner">
            <button
              onClick={() => setActiveTab('exhibition')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                activeTab === 'exhibition'
                  ? 'bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white shadow-[0_4px_15px_rgba(2,132,199,0.3)]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Commercial Exhibition (4 Pillars)</span>
            </button>

            <button
              onClick={() => setActiveTab('fwc')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                activeTab === 'fwc'
                  ? 'bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white shadow-[0_4px_15px_rgba(2,132,199,0.3)]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>FinTech World Cup ($1M+ Pitch Arena)</span>
            </button>
          </div>
        </div>

        {/* Tab View Container */}
        <AnimatePresence mode="wait">
          {activeTab === 'exhibition' ? (
            <motion.div
              key="exhibition"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <ExhibitNetworkGrow />
            </motion.div>
          ) : (
            <motion.div
              key="fwc"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <FintechWorldCup />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
