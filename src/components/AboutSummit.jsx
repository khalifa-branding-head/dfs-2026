import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Users, Globe2, Lightbulb, Play, Shield, Sparkles, Building2, Landmark, Coins } from 'lucide-react';

const pillarTabs = [
  {
    id: 'convening',
    tag: '01. GLOBAL CONVENING POWER',
    title: 'Connecting 10,000+ Financial Leaders',
    subtitle: 'Borderless Financial World',
    desc: 'Organised by DIFC, Dubai FinTech Summit – now in its fourth edition – convenes C-suite leaders, central bankers, regulators, and tech pioneers from 100+ sovereign nations to shape the next chapter of global finance.',
    metrics: [
      { label: 'C-Suite Delegates', value: '10,000+', sub: 'From 100+ Countries', icon: Users },
      { label: 'Global Capital', value: '$100B+', sub: 'Represented AUM', icon: Globe2 },
      { label: 'Market Pioneers', value: '250+', sub: 'Keynote Speakers', icon: Lightbulb }
    ],
    mediaSrc: 'assets/images/summit-showcase.jpg',
    mediaType: 'image'
  },
  {
    id: 'policy',
    tag: '02. POLICY & SOVEREIGN REGULATION',
    title: 'Pioneering Regulatory & Digital Asset Frameworks',
    subtitle: 'VARA, MiCA & Central Bank Telemetry',
    desc: 'Setting global benchmarks in digital asset governance, sovereign AI regulation, and cross-border payment interoperability under the unified backing of DIFC and UAE financial authorities.',
    metrics: [
      { label: 'Regulatory Bodies', value: '50+', sub: 'Central Banks & VARA', icon: Landmark },
      { label: 'Sovereign Hubs', value: '30+', sub: 'Policy Roundtables', icon: Shield },
      { label: 'Asset Tokenisation', value: '$10B+', sub: 'RWA Telemetry', icon: Coins }
    ],
    mediaSrc: 'assets/images/summit-showcase.jpg',
    mediaType: 'image'
  },
  {
    id: 'capital',
    tag: '03. VENTURE CAPITAL & GROWTH CORRIDORS',
    title: 'Fueling MEASA & Global FinTech Scaling',
    subtitle: 'FinTech World Cup & Venture Arena',
    desc: 'Bridging institutional venture funds with high-growth startup corridors across MEASA, LATAM, and Asia. Hosting the FinTech World Cup finals with over $1M in equity funding rewards.',
    metrics: [
      { label: 'Venture Capital Funds', value: '500+', sub: 'Active Institutional VCs', icon: Building2 },
      { label: 'Startup Applicants', value: '1,000+', sub: 'Across 50 Capitals', icon: Sparkles },
      { label: 'Equity Funding Prize', value: '$1M+', sub: 'FWC 2026 Winner Pool', icon: ArrowUpRight }
    ],
    mediaSrc: 'assets/images/summit-showcase.jpg',
    mediaType: 'image'
  }
];

export default function AboutSummit() {
  const [activePillar, setActivePillar] = useState('convening');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const currentTab = pillarTabs.find(t => t.id === activePillar) || pillarTabs[0];

  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-24 px-6 md:px-12 relative font-sans antialiased overflow-hidden selection:bg-[#0284C7]/20 border-t border-slate-200/80">
      
      {/* Background Precision Ambient Glowing Orbs */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-[#0284C7]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#0D9488]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* ==================== 1. EXECUTIVE HEADER & INTERACTIVE PILLAR NAV ==================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-slate-200/80 pb-8">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 bg-[#0284C7]/10 border border-[#0284C7]/20 text-[#0284C7] text-[10px] font-black tracking-[0.25em] px-4 py-1 rounded-md uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Summit Overview & Institutional Command</span>
            </div>
            
            <h2 className="text-[#0F172A] text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Building a Connected <br />
              <span className="bg-gradient-to-r from-[#0284C7] via-[#0D9488] to-[#0F172A] bg-clip-text text-transparent">
                Borderless Financial World
              </span>
            </h2>
          </div>

          {/* Interactive Pillar Selector Tabs */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.04)] overflow-x-auto scrollbar-none">
            {pillarTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActivePillar(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activePillar === tab.id
                    ? 'bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white shadow-[0_4px_15px_rgba(2,132,199,0.25)]'
                    : 'text-[#475569] hover:text-[#0F172A] hover:bg-slate-50'
                }`}
              >
                {tab.id === 'convening' ? '01. Convening Power' : tab.id === 'policy' ? '02. Policy & VARA' : '03. Venture & FWC'}
              </button>
            ))}
          </div>
        </div>

        {/* ==================== 2. MAIN BENTO MATRIX CONTAINER ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT BENTO DECK: DYNAMIC PILLAR CONTENT & 3D METRIC CARDS (7-Span) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 text-left bg-white p-8 md:p-10 rounded-3xl border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)] relative overflow-hidden">
            
            {/* Top Accent Trim Laser Line */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0284C7] via-[#0D9488] to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Monospace Pillar Subhead Badge */}
                <div className="text-[10px] font-mono font-black tracking-[0.25em] text-[#0284C7] uppercase bg-[#0284C7]/10 px-3 py-1 rounded-md inline-block border border-[#0284C7]/20">
                  {currentTab.tag}
                </div>

                {/* Main Dynamic Headline & Subtitle */}
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] tracking-tight leading-snug">
                    {currentTab.title}
                  </h3>
                  <div className="text-xs font-bold text-[#0D9488] uppercase tracking-wider">
                    {currentTab.subtitle}
                  </div>
                </div>

                {/* Body Narrative */}
                <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed">
                  {currentTab.desc}
                </p>

                {/* 3D Dynamic Metric Badges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  {currentTab.metrics.map((m, idx) => {
                    const IconComponent = m.icon;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -4, scale: 1.02 }}
                        transition={{ duration: 0.25 }}
                        className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4 flex flex-col justify-between space-y-3 hover:border-[#0284C7]/40 hover:bg-white hover:shadow-[0_12px_30px_rgba(2,132,199,0.1)] transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[#475569] uppercase tracking-wider">{m.label}</span>
                          <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white transition-all shadow-sm">
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-2xl font-extrabold text-[#0F172A] tracking-tight group-hover:text-[#0284C7] transition-colors">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-semibold text-[#475569] mt-0.5">
                            {m.sub}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
              <a 
                href="/about.html" 
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white text-xs font-black tracking-[0.2em] px-8 py-4 rounded-xl uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(2,132,199,0.25)] hover:shadow-[0_6px_30px_rgba(2,132,199,0.4)] hover:scale-[1.02]"
              >
                <span>Know More</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </a>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center gap-2.5 bg-slate-100 text-[#0F172A] border border-slate-200 hover:border-[#0284C7] hover:text-[#0284C7] text-xs font-bold tracking-widest px-6 py-4 rounded-xl uppercase transition-all duration-300 cursor-pointer shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#0284C7]" />
                <span>Watch Summit Reel</span>
              </button>
            </div>

          </div>

          {/* RIGHT BENTO DECK: CINEMATIC MULTI-MEDIA SHOWCASE WINDOW (5-Span) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Outer Subtle Accent Ring Grid Frame */}
            <div className="absolute inset-0 border border-slate-200/60 rounded-3xl rotate-2 scale-[0.98] pointer-events-none" />
            
            {/* Main Interactive Display Substrate Image Window */}
            <div className="w-full h-full min-h-[460px] rounded-3xl border border-slate-200/80 bg-slate-900 overflow-hidden relative shadow-[0_12px_40px_rgba(15,23,42,0.12)] group hover:border-[#0284C7]/60 transition-all flex flex-col justify-between p-6">
              
              {/* High-Res Summit Showcase Image */}
              <img 
                src={currentTab.mediaSrc}
                alt="Dubai FinTech Summit Floor Atmosphere" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
              />

              {/* Dynamic Film Overlay Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-900/30 pointer-events-none" />
              
              {/* TOP FLOATING METADATA BADGE */}
              <div className="relative z-20 flex items-center justify-between w-full">
                <div className="inline-flex items-center gap-2 bg-slate-900/85 backdrop-blur-md border border-white/15 text-white text-[10px] font-bold tracking-wider px-3.5 py-1.5 rounded-full uppercase shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
                  <span>Madinat Jumeirah · Dubai</span>
                </div>

                <div className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center text-[#0F172A] shadow-md">
                  <Shield className="w-4 h-4 text-[#0284C7]" />
                </div>
              </div>

              {/* CENTER PLAY BUTTON TRIGGER OVERLAY */}
              <div className="relative z-20 flex items-center justify-center my-auto">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group/btn w-20 h-20 rounded-full bg-white/95 backdrop-blur-md text-[#0F172A] flex items-center justify-center shadow-[0_10px_35px_rgba(2,132,199,0.35)] transition-all duration-300 hover:scale-110 hover:bg-[#0284C7] hover:text-white cursor-pointer"
                  aria-label="Play Summit Video"
                >
                  <Play className="w-7 h-7 fill-current ml-1 transition-transform group-hover/btn:scale-110" />
                </button>
              </div>

              {/* BOTTOM INSTITUTIONAL FOOTER BADGE */}
              <div className="relative z-20 pt-4 border-t border-white/15 flex items-center justify-between">
                <div className="space-y-0.5 text-left">
                  <div className="text-[9px] font-black text-[#0284C7] uppercase tracking-[0.25em]">Organised & Powered By</div>
                  <div className="text-sm font-extrabold text-white tracking-wide">DIFC (Dubai Intl Financial Centre)</div>
                </div>
                <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                  4th Edition
                </div>
              </div>

              {/* Bottom Laser Border Accent */}
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-[#0284C7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />
            </div>

          </div>

        </div>

      </div>

      {/* ==================== 3. LIGHTBOX VIDEO SHOWREEL MODAL ==================== */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 select-none"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-slate-700 bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-900/80 text-white border border-slate-700 flex items-center justify-center hover:bg-[#0284C7] transition-all cursor-pointer"
              >
                ✕
              </button>

              <video 
                autoPlay 
                controls 
                className="w-full h-full object-cover"
              >
                <source src="https://dubaifintechsummit.com/wp-content/uploads/2026/01/DFS-Video-mp4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

