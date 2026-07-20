import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, MapPin, Layers, Users, Calendar, Filter, Sparkles, Download } from 'lucide-react';

const agendaData = {
  day1: [
    {
      id: "d1-s1",
      time: "09:00 AM - 10:00 AM",
      title: "Opening Keynote: The Decentralized Global Economy",
      stage: "Stage Alpha",
      track: "REGTECH",
      speakers: [
        { name: "H.E. Essa Kazim", role: "Governor, DIFC", avatar: "assets/speakers/essa-kazim.png" }
      ],
      description: "A comprehensive deep dive into mapping liquidity trends, infrastructure developments, and changing regulations across cross-border trade corridors.",
      tags: ["Keynote", "Macro Economics"]
    },
    {
      id: "d1-s2",
      time: "10:30 AM - 11:45 AM",
      title: "Panel: AI Agents in Risk Mitigation Models",
      stage: "FinTech Lab Stage",
      track: "AI",
      speakers: [
        { name: "Jane Doe", role: "Chief AI Officer, NeoBank", avatar: "assets/speakers/jenny-johnson.png" },
        { name: "John Smith", role: "Founder, BlockChain Labs", avatar: "assets/speakers/noel-quinn.png" }
      ],
      description: "Exploring how deep learning neural networks and agentic workflows are altering modern consumer fraud detection architectures.",
      tags: ["AI & Analytics", "Risk Management"]
    },
    {
      id: "d1-s3",
      time: "01:30 PM - 02:45 PM",
      title: "Fireside: Compliance in Cross-Border Tokenized Settlement",
      stage: "Summit VIP Theatre",
      track: "REGTECH",
      speakers: [
        { name: "H.E. Essa Kazim", role: "Governor, DIFC", avatar: "assets/speakers/essa-kazim.png" },
        { name: "Tan Su Shan", role: "CEO, DBS Group", avatar: "assets/speakers/tan-su-shan.png" }
      ],
      description: "Addressing the legal frameworks and regulatory challenges in implementing multi-jurisdiction central bank digital currencies (CBDCs).",
      tags: ["RegTech", "CBDC"]
    }
  ],
  day2: [
    {
      id: "d2-s1",
      time: "09:30 AM - 10:45 AM",
      title: "Masterclass: Digital Asset Orchestration Platforms",
      stage: "Stage Alpha",
      track: "WEB3",
      speakers: [
        { name: "Sarah Jenkins", role: "Partner, Capital VC", avatar: "assets/speakers/jenny-johnson.png" }
      ],
      description: "Analyzing tokenization pipelines and operational institutional rails built for multi-chain financial ecosystems.",
      tags: ["Web3", "Institutional Tech"]
    },
    {
      id: "d2-s2",
      time: "11:15 AM - 12:30 PM",
      title: "Roundtable: The Next Wave of Decentralized Exchanges",
      stage: "FinTech Lab Stage",
      track: "WEB3",
      speakers: [
        { name: "Noel Quinn", role: "Chairman, Julius Baer Group", avatar: "assets/speakers/noel-quinn.png" },
        { name: "Sarah Jenkins", role: "Partner, Capital VC", avatar: "assets/speakers/jenny-johnson.png" }
      ],
      description: "A strategic overview of smart-contract liquidity hubs, order-book automation, and clearing efficiency protocols.",
      tags: ["DeFi", "Liquidity Pools"]
    },
    {
      id: "d2-s3",
      time: "03:00 PM - 04:15 PM",
      title: "Fireside: Quantum Computing in Predictive Asset Allocation",
      stage: "Stage Alpha",
      track: "AI",
      speakers: [
        { name: "Jenny Johnson", role: "CEO, Franklin Templeton", avatar: "assets/speakers/jenny-johnson.png" }
      ],
      description: "Harnessing quantum annealing and machine learning algorithms to optimize risk-adjusted returns in volatile global markets.",
      tags: ["Quantum Computing", "Asset Management"]
    }
  ],
  day3: [
    {
      id: "d3-s1",
      time: "10:00 AM - 11:15 AM",
      title: "Keynote: Next-Gen Payments & Open Banking API Ecosystems",
      stage: "Summit VIP Theatre",
      track: "AI",
      speakers: [
        { name: "Tan Su Shan", role: "CEO, DBS Group", avatar: "assets/speakers/tan-su-shan.png" }
      ],
      description: "Examining real-time payment rails, open banking APIs, and data sovereignty compliance guidelines shaping global retail banking.",
      tags: ["Open Banking", "Payments"]
    },
    {
      id: "d3-s2",
      time: "11:45 AM - 01:00 PM",
      title: "Panel: Cybersecurity & Fraud Mitigation in Neobanks",
      stage: "Stage Alpha",
      track: "REGTECH",
      speakers: [
        { name: "John Smith", role: "Founder, BlockChain Labs", avatar: "assets/speakers/noel-quinn.png" },
        { name: "Tan Su Shan", role: "CEO, DBS Group", avatar: "assets/speakers/tan-su-shan.png" }
      ],
      description: "How central banks and private entities coordinate cybersecurity responses to secure client asset vaults and ledger trails.",
      tags: ["Cybersecurity", "Regulators"]
    },
    {
      id: "d3-s3",
      time: "02:30 PM - 03:45 PM",
      title: "Panel: RWA Tokenization (Real World Asset Backing)",
      stage: "FinTech Lab Stage",
      track: "WEB3",
      speakers: [
        { name: "Jenny Johnson", role: "CEO, Franklin Templeton", avatar: "assets/speakers/jenny-johnson.png" },
        { name: "Noel Quinn", role: "Chairman, Julius Baer Group", avatar: "assets/speakers/noel-quinn.png" }
      ],
      description: "Structuring real estate, gold, and treasury bills on-chain to provide transparent fractionated investment access globally.",
      tags: ["RWA Tokenization", "WealthTech"]
    }
  ]
};

const tracks = [
  { id: 'ALL', label: 'All Tracks' },
  { id: 'REGTECH', label: 'Banking & RegTech' },
  { id: 'WEB3', label: 'Web3 & Assets' },
  { id: 'AI', label: 'AI & Payments' },
];

export default function Agenda() {
  const [activeDay, setActiveDay] = useState('day1');
  const [activeTrack, setActiveTrack] = useState('ALL');
  const [expandedSession, setExpandedSession] = useState(null);

  const toggleSession = (id) => {
    setExpandedSession(expandedSession === id ? null : id);
  };

  const downloadICS = (session, e) => {
    e.stopPropagation(); // Avoid triggering card toggle
    
    // Base ics dates matching the day selection
    const dayDate = activeDay === 'day1' ? '20261102' : activeDay === 'day2' ? '20261103' : '20261104';
    
    // Parse time strings into approximate start/end hours
    const isPM = session.time.includes('PM');
    const startHourMatch = session.time.match(/(\d+):/);
    let startHour = startHourMatch ? parseInt(startHourMatch[1]) : 9;
    if (isPM && startHour !== 12) startHour += 12;
    if (!isPM && startHour === 12) startHour = 0;
    
    const formattedStartHour = startHour.toString().padStart(2, '0');
    const formattedEndHour = (startHour + 1).toString().padStart(2, '0');

    const calendarContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Dubai FinTech Summit//Agenda//EN',
      'BEGIN:VEVENT',
      `UID:${session.id}@dubaifintechsummit.com`,
      `DTSTAMP:20260720T000000Z`,
      `SUMMARY:${session.title}`,
      `DESCRIPTION:${session.description.replace(/\n/g, '\\n')}`,
      `LOCATION:${session.stage}`,
      `DTSTART:${dayDate}T${formattedStartHour}0000Z`,
      `DTEND:${dayDate}T${formattedEndHour}0000Z`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');
    
    const blob = new Blob([calendarContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${session.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredSessions = activeTrack === 'ALL'
    ? agendaData[activeDay]
    : agendaData[activeDay].filter(s => s.track === activeTrack);

  return (
    <div className="min-h-screen bg-[#082028] text-white pt-32 pb-24 px-6 md:px-12 font-sans selection:bg-[#12E9E9]/30 relative overflow-hidden">
      
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#08BDF4]/4 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-[#12E9E9]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* ==================== HEADER ARCHITECTURE ==================== */}
        <div className="mb-12 text-center md:text-left space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#12E9E9]/10 text-[#12E9E9] text-[10px] font-black tracking-[0.25em] px-4 py-1.5 rounded-md uppercase border border-[#12E9E9]/20">
            <Sparkles className="w-3.5 h-3.5" />
            Knowledge Architecture
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Curated Agenda
          </h1>
          <p className="text-sm md:text-base text-[#6D8794] max-w-2xl leading-normal">
            Three action-packed days optimized for global financial leadership. Filter sessions, review panels, and plan your summit experience.
          </p>
        </div>

        {/* ==================== FILTER NAVIGATION BAR ==================== */}
        <div className="space-y-6 mb-12">
          {/* Multi-Day Tabs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center border-b border-white/[0.08] pb-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#6D8794] uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-[#12E9E9]" />
              Select Date:
            </div>
            <div className="flex border border-white/[0.06] bg-[#0c2730]/40 p-1 rounded-xl w-full sm:w-auto max-w-md">
              {['day1', 'day2', 'day3'].map((day) => (
                <button
                  key={day}
                  onClick={() => {
                    setActiveDay(day);
                    setExpandedSession(null); // Clear active expanders to safely switch rendering scopes
                  }}
                  className={`relative w-full sm:w-32 py-2.5 text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 cursor-pointer ${
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
                  {day === 'day1' ? 'Nov 2' : day === 'day2' ? 'Nov 3' : 'Nov 4'}
                </button>
              ))}
            </div>
          </div>

          {/* Track Filters */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="flex items-center gap-2 text-xs font-bold text-[#6D8794] uppercase tracking-wider">
              <Filter className="w-4 h-4 text-[#08BDF4]" />
              Filter Track:
            </div>
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {tracks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => {
                    setActiveTrack(track.id);
                    setExpandedSession(null);
                  }}
                  className={`px-4 py-2 rounded-xl text-[10px] font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    activeTrack === track.id
                      ? 'bg-[#12E9E9] text-[#082028] shadow-[0_4px_15px_rgba(18,233,233,0.25)]'
                      : 'bg-[#0c2730]/60 text-[#6D8794] border border-white/[0.05] hover:border-white/20 hover:text-white'
                  }`}
                >
                  {track.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== TIMELINE ITERATION TRACK ==================== */}
        <motion.div 
          layout 
          className="space-y-6 relative before:absolute before:inset-y-0 before:left-4 md:before:left-6 before:w-[1px] before:bg-[#BEC9CB]/10 min-h-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredSessions.length > 0 ? (
              filteredSessions.map((session) => {
                const isOpen = expandedSession === session.id;
                
                return (
                  <motion.div
                    key={session.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className={`group relative ml-10 md:ml-16 border rounded-2xl transition-all duration-300 overflow-hidden ${
                      isOpen 
                        ? 'border-[#12E9E9]/40 bg-[#0c2730]/80 shadow-[0_15px_30px_rgba(4,16,20,0.55)]' 
                        : 'border-white/[0.05] bg-[#0c2730]/40 hover:border-white/20'
                    }`}
                  >
                    {/* Timeline Chrono Indicator Node */}
                    <div className={`absolute -left-[45px] md:-left-[70px] top-8 w-3.5 h-3.5 rounded-full border-2 bg-[#082028] transition-colors duration-300 z-10 ${
                      isOpen ? 'border-[#12E9E9] shadow-[0_0_10px_#12E9E9]' : 'border-[#6D8794]'
                    }`} />

                    {/* Trigger Header Frame */}
                    <button
                      onClick={() => toggleSession(session.id)}
                      className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-start justify-between gap-4 cursor-pointer"
                    >
                      <div className="space-y-3 flex-grow max-w-3xl">
                        {/* Meta Parameters Block */}
                        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#6D8794]">
                          <span className="flex items-center gap-1.5 text-white bg-white/[0.04] px-2.5 py-1 rounded-md">
                            <Clock className="w-3.5 h-3.5 text-[#12E9E9]" />
                            {session.time}
                          </span>
                          <span className="flex items-center gap-1.5 bg-white/[0.04] px-2.5 py-1 rounded-md">
                            <MapPin className="w-3.5 h-3.5 text-[#08BDF4]" />
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
                            <span key={tag} className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 bg-[#6D8794]/10 text-[#6D8794] rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Hand Actions */}
                      <div className="flex items-center gap-3 self-end md:self-start pt-1">
                        <button
                          onClick={(e) => downloadICS(session, e)}
                          title="Add to Calendar (.ics)"
                          className="p-2 rounded-xl border border-white/[0.08] hover:border-[#12E9E9] text-[#6D8794] hover:text-[#12E9E9] bg-white/[0.02] hover:bg-[#12E9E9]/5 transition-all duration-300 flex items-center justify-center cursor-pointer"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className={`p-2 rounded-xl border transition-colors ${
                            isOpen ? 'border-[#12E9E9]/30 bg-[#12E9E9]/5 text-[#12E9E9]' : 'border-white/[0.08] text-[#6D8794]'
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
                          className="overflow-hidden border-t border-white/[0.06] bg-black/15"
                        >
                          <div className="p-6 md:p-8 space-y-6">
                            {/* Inner Copy Frame */}
                            <div className="space-y-2">
                              <div className="text-xs font-bold tracking-widest text-[#6D8794] uppercase flex items-center gap-1.5">
                                <Layers className="w-3.5 h-3.5 text-[#12E9E9]" /> Session Abstract
                              </div>
                              <p className="text-sm font-normal text-[#6D8794] leading-relaxed max-w-3xl">
                                {session.description}
                              </p>
                            </div>

                            {/* Interactive Panels Array Grid */}
                            <div className="space-y-3">
                              <div className="text-xs font-bold tracking-widest text-[#6D8794] uppercase flex items-center gap-1.5">
                                <Users className="w-3.5 h-3.5 text-[#08BDF4]" /> Panelists
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {session.speakers.map((spk, idx) => (
                                  <div key={idx} className="flex items-center gap-4 bg-[#082028]/60 p-4 border border-white/[0.04] rounded-xl group/speaker hover:border-white/10 transition-all duration-300">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border border-[#12E9E9]/30 bg-gradient-to-br from-[#12E9E9]/20 to-[#08BDF4]/20 flex items-center justify-center font-bold text-xs text-[#12E9E9]">
                                      {spk.avatar ? (
                                        <img src={spk.avatar} alt={spk.name} className="w-full h-full object-cover object-top" />
                                      ) : (
                                        spk.name.charAt(0)
                                      )}
                                    </div>
                                    <div>
                                      <div className="text-sm font-semibold text-white group-hover/speaker:text-[#12E9E9] transition-colors duration-300">{spk.name}</div>
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
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 text-[#6D8794] border border-dashed border-white/[0.08] rounded-2xl bg-[#0c2730]/20 ml-10 md:ml-16"
              >
                No sessions found matching this track selection on this day.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
