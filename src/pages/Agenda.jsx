import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, MapPin, Layers, Users } from 'lucide-react';

const agendaData = {
  day1: [
    {
      id: "d1-s1",
      time: "09:00 AM - 10:00 AM",
      title: "Opening Keynote: The Decentralized Global Economy",
      stage: "Stage Alpha",
      speakers: [{ name: "H.E. Essa Kazim", role: "Governor, DIFC" }],
      description: "A comprehensive deep dive into mapping liquidity trends, infrastructure developments, and changing regulations across cross-border trade corridors.",
      tags: ["Keynote", "Macro Economics"]
    },
    {
      id: "d1-s2",
      time: "10:30 AM - 11:45 AM",
      title: "Panel: AI Agents in Risk Mitigation Models",
      stage: "FinTech Lab Stage",
      speakers: [
        { name: "Jane Doe", role: "Chief AI Officer, NeoBank" },
        { name: "John Smith", role: "Founder, BlockChain Labs" }
      ],
      description: "Exploring how deep learning neural networks and agentic workflows are altering modern consumer fraud detection architectures.",
      tags: ["AI & Analytics", "Risk Management"]
    }
  ],
  day2: [
    {
      id: "d2-s1",
      time: "09:30 AM - 10:45 AM",
      title: "Masterclass: Digital Asset Orchestration Platforms",
      stage: "Stage Alpha",
      speakers: [{ name: "Sarah Jenkins", role: "Partner, Capital VC" }],
      description: "Analyzing tokenization pipelines and operational institutional rails built for multi-chain financial ecosystems.",
      tags: ["Web3", "Institutional Tech"]
    }
  ]
};

export default function Agenda() {
  const [activeDay, setActiveDay] = useState('day1');
  const [expandedSession, setExpandedSession] = useState(null);

  const toggleSession = (id) => {
    setExpandedSession(expandedSession === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#082028] text-white pt-32 pb-24 px-6 md:px-12 font-sans selection:bg-[#12E9E9]/30">
      <div className="max-w-4xl mx-auto">
        
        {/* ==================== HEADER ARCHITECTURE ==================== */}
        <div className="mb-12 text-center md:text-left">
          <div className="text-xs font-bold tracking-widest text-[#12E9E9] uppercase mb-3">
            Knowledge Architecture
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-4">
            Curated Agenda
          </h1>
          <p className="text-sm md:text-base text-[#6D8794] max-w-2xl leading-normal">
            Three action-packed days optimized for industry execution. Filter sessions, review panels, and plan your summit experience.
          </p>
        </div>

        {/* ==================== PREMIUM DUAL-DAY TAB SWITCHER ==================== */}
        <div className="flex border-b border-[#BEC9CB]/10 mb-12 p-1 bg-[#082028]/40 backdrop-blur-md sticky top-24 z-40 rounded-xl max-w-md">
          {['day1', 'day2'].map((day) => (
            <button
              key={day}
              onClick={() => {
                setActiveDay(day);
                setExpandedSession(null); // Clear active expanders to safely switch rendering scopes
              }}
              className={`relative w-full py-3 text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${
                activeDay === day ? 'text-[#082028]' : 'text-[#6D8794] hover:text-white'
              }`}
            >
              {activeDay === day && (
                <motion.div
                  layoutId="activeDayIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-[#12E9E9] to-[#08BDF4] rounded-lg -z-10 shadow-[0_4px_20px_rgba(18,233,233,0.25)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {day === 'day1' ? 'November 2' : 'November 3'}
            </button>
          ))}
        </div>

        {/* ==================== TIMELINE ITERATION TRACK ==================== */}
        <motion.div 
          layout 
          className="space-y-6 relative before:absolute before:inset-y-0 before:left-4 md:before:left-6 before:w-[1px] before:bg-[#BEC9CB]/10"
        >
          <AnimatePresence mode="popLayout">
            {agendaData[activeDay].map((session) => {
              const isOpen = expandedSession === session.id;
              
              return (
                <motion.div
                  key={session.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className={`group relative ml-10 md:ml-16 border rounded-2xl transition-all duration-300 ${
                    isOpen 
                      ? 'border-[#12E9E9]/40 bg-[#082028]/80 shadow-[0_0_30px_rgba(18,233,233,0.05)]' 
                      : 'border-[#BEC9CB]/10 bg-[#082028]/30 hover:border-[#BEC9CB]/30'
                  }`}
                >
                  {/* Timeline Chrono Indicator Node */}
                  <div className={`absolute -left-[45px] md:-left-[70px] top-6 w-3 h-3 rounded-full border-2 bg-[#082028] transition-colors duration-300 ${
                    isOpen ? 'border-[#12E9E9] shadow-[0_0_10px_#12E9E9]' : 'border-[#6D8794]'
                  }`} />

                  {/* Trigger Header Frame */}
                  <button
                    onClick={() => toggleSession(session.id)}
                    className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="space-y-3 flex-1">
                      {/* Meta Parameters Block */}
                      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#6D8794]">
                        <span className="flex items-center gap-1.5 text-white">
                          <Clock className="w-3.5 h-3.5 text-[#12E9E9]" />
                          {session.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {session.stage}
                        </span>
                      </div>

                      {/* Main Heading Text */}
                      <h3 className={`text-lg md:text-xl font-semibold tracking-tight leading-snug transition-colors duration-300 ${
                        isOpen ? 'text-[#12E9E9]' : 'text-white group-hover:text-[#12E9E9]'
                      }`}>
                        {session.title}
                      </h3>

                      {/* Explicit Interactive Tag Pills */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {session.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#6D8794]/10 text-[#6D8794] rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Toggle Component Handle */}
                    <div className="flex items-center self-end md:self-start pt-1">
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`p-2 rounded-xl border transition-colors ${
                          isOpen ? 'border-[#12E9E9]/30 bg-[#12E9E9]/5 text-[#12E9E9]' : 'border-[#BEC9CB]/10 text-[#6D8794]'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Expandable Module Sub-Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-[#BEC9CB]/10 bg-black/10 rounded-b-2xl"
                      >
                        <div className="p-6 md:p-8 space-y-6">
                          {/* Inner Copy Frame */}
                          <div className="space-y-2">
                            <div className="text-xs font-bold tracking-widest text-[#6D8794] uppercase flex items-center gap-1.5">
                              <Layers className="w-3.5 h-3.5" /> Session Abstract
                            </div>
                            <p className="text-sm font-normal text-[#6D8794] leading-relaxed max-w-3xl">
                              {session.description}
                            </p>
                          </div>

                          {/* Interactive Panels Array Grid */}
                          <div className="space-y-3">
                            <div className="text-xs font-bold tracking-widest text-[#6D8794] uppercase flex items-center gap-1.5">
                              <Users className="w-3.5 h-3.5" /> Panelists
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {session.speakers.map((spk, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-[#082028]/50 p-4 border border-[#BEC9CB]/5 rounded-xl">
                                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#12E9E9]/20 to-[#08BDF4]/20 flex items-center justify-center font-bold text-xs text-[#12E9E9] border border-[#12E9E9]/30">
                                    {spk.name.charAt(0)}
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-white">{spk.name}</div>
                                    <div className="text-xs text-[#6D8794]">{spk.role}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
