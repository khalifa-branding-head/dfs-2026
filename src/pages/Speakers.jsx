import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FILTER_CATEGORIES = [
  { id: 'all', name: 'All Speakers' },
  { id: 'regulators', name: 'Regulators' },
  { id: 'pioneers', name: 'Fintech Pioneers' },
  { id: 'investors', name: 'Venture Capitalists' },
];

const SPEAKERS_DATA = [
  {
    name: 'Dr. Samir Patel',
    role: 'Governor, sovereign regulatory policies & capital frameworks',
    company: 'Sovereign Financial Authority',
    category: 'regulators',
    image: 'speaker-samir.png',
  },
  {
    name: 'Elena Rostova',
    role: 'Chief Innovation Officer, digital asset transitions & cross-border hubs',
    company: 'Global Capital Markets',
    category: 'pioneers',
    image: 'speaker-elena.png',
  },
  {
    name: 'Marcus Vance',
    role: 'Managing Partner, early-stage scaling & fintech ecosystem funds',
    company: 'Vance Venture Partners',
    category: 'investors',
    image: 'speaker-marcus.png',
  },
  {
    name: 'Aisha Al-Mansoor',
    role: 'Head of Fintech Sandbox & sandboxed corporate frameworks',
    company: 'Regional Regulatory Council',
    category: 'regulators',
    image: 'speaker-aisha.png',
  },
];

export default function Speakers() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSpeakers = SPEAKERS_DATA.filter(
    (speaker) => activeFilter === 'all' || speaker.category === activeFilter
  );

  return (
    <div className="relative overflow-hidden min-h-screen pt-24 pb-16 bg-[#F8FAFC]">
      {/* Background Glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#0284C7]/5 rounded-full blur-[100px] pointer-events-none" />

      <section className="py-16">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <span className="text-[#0284C7] text-[10px] font-black tracking-[0.25em] uppercase">
              DFS 2026 Panelists
            </span>
            <h1 className="text-[#0F172A] text-3xl md:text-5xl font-bold mt-3 uppercase tracking-tight leading-none">
              Summit Speakers
            </h1>
            <p className="text-[#475569] text-sm mt-3 max-w-xl mx-auto font-medium">
              Meet the central bankers, digital assets pioneers, and startup founders speaking at DFS 2026.
            </p>
          </div>

          {/* Dynamic Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12 select-none">
            {FILTER_CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`relative px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 border focus:outline-none cursor-pointer ${
                    isActive
                      ? 'border-[#0284C7] text-white bg-gradient-to-r from-[#0284C7] to-[#0D9488] shadow-[0_4px_15px_rgba(2,132,199,0.25)]'
                      : 'border-slate-200/80 text-[#475569] hover:border-[#0284C7]/40 hover:text-[#0F172A] bg-white'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Grid Layout Container */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredSpeakers.map((speaker) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  key={speaker.name}
                  className="group bg-white border border-slate-200/80 hover:border-[#0284C7]/50 rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)] transition-all duration-300 flex flex-col"
                >
                  {/* Avatar wrapper */}
                  <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden border-b border-slate-200/80">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
                  </div>

                  {/* Text Details */}
                  <div className="p-5 flex-grow flex flex-col justify-between bg-white">
                    <div>
                      <h3 className="text-[#0F172A] font-bold text-base tracking-wide group-hover:text-[#0284C7] transition-colors">
                        {speaker.name}
                      </h3>
                      <p className="text-[#475569] text-xs mt-2 leading-relaxed font-medium">
                        {speaker.role}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#0F172A] uppercase">
                      <span>{speaker.company}</span>
                      <span className="text-[#0284C7] text-[10px] font-black tracking-[0.25em] border border-[#0284C7]/30 bg-[#0284C7]/10 px-2 py-0.5 rounded-full uppercase">
                        {speaker.category}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
