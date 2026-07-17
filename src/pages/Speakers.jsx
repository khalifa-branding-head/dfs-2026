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
    <div className="relative overflow-hidden min-h-screen pt-24 pb-16">
      {/* Background Glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none" />

      <section className="py-16">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <span className="text-brand-teal text-[10px] font-bold tracking-[0.2em] uppercase">
              DFS 2026 Panelists
            </span>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold mt-3 uppercase leading-none">
              Summit Speakers
            </h1>
            <p className="text-brand-text-muted text-sm mt-3 max-w-xl mx-auto">
              Meet the central bankers, digital assets pioneers, and startup founders speaking at DFS 2026.
            </p>
          </div>

          {/* Dynamic Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {FILTER_CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`relative px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 border focus:outline-none ${
                    isActive
                      ? 'border-brand-teal text-brand-dark bg-brand-teal shadow-[0_0_15px_rgba(18,233,233,0.25)]'
                      : 'border-white/10 hover:border-brand-teal/30 text-white hover:bg-white/5'
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
                  className="group bg-[#04161c]/50 border border-brand-teal/5 hover:border-brand-teal/20 rounded-xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col"
                >
                  {/* Avatar wrapper */}
                  <div className="relative aspect-[4/5] bg-brand-dark/50 overflow-hidden">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04161c] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Text Details */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-white font-bold text-base tracking-wide group-hover:text-brand-teal transition-colors">
                        {speaker.name}
                      </h3>
                      <p className="text-brand-text-muted text-xs mt-2 leading-relaxed">
                        {speaker.role}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-bold text-white/50 uppercase">
                      <span>{speaker.company}</span>
                      <span className="text-brand-teal text-[9px] border border-brand-teal/20 px-2 py-0.5 rounded uppercase">
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
