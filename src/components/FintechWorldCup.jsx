import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Rocket, 
  Globe, 
  Building2, 
  Award, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

const fwcMetrics = [
  { value: '$1M+', label: 'Equity Investment Pool' },
  { value: '50+', label: 'Regional Qualifiers' },
  { value: '1,000+', label: 'Global Applicants' },
  { value: '100+', label: 'VC Jury Panelists' },
];

const fwcHighlights = [
  {
    id: 'fwc-1',
    badge: 'INVESTMENT POOL',
    title: '$1M+ Direct Equity Backing',
    desc: 'Unlocking direct venture capital deployment, angel syndicate syndication, and sovereign fund co-investments for winning startups.',
    icon: Trophy,
    stat: '$1,000,000+'
  },
  {
    id: 'fwc-2',
    badge: 'GLOBAL REACH',
    title: '50+ Regional Qualifier Circuits',
    desc: 'Preliminary pitch competitions hosted across financial hubs including London, Sao Paulo, Singapore, Riyadh, and Dubai.',
    icon: Globe,
    stat: '50+ Hubs'
  },
  {
    id: 'fwc-3',
    badge: 'DIFC HUB ACCELERATION',
    title: 'Fast-Track Licensing & Incubation',
    desc: 'Winners receive 12 months free workspace, subsidized DIFC innovation licenses, and regulatory sandbox onboarding.',
    icon: Building2,
    stat: 'DIFC License'
  },
  {
    id: 'fwc-4',
    badge: 'MAIN STAGE FINALS',
    title: 'Live Pitch Arena & VC Jury',
    desc: 'Top 10 global finalists pitch live on the main Dubai FinTech Summit stage to top-tier institutional investor judges.',
    icon: Rocket,
    stat: '10 Finalists'
  }
];

export default function FintechWorldCup() {
  return (
    <section className="w-full bg-[#082028] py-28 px-6 md:px-12 relative font-sans antialiased overflow-hidden selection:bg-[#12E9E9]/20 border-t border-white/[0.06]">
      
      {/* Background Precision Ambient Flare */}
      <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] bg-[#12E9E9]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* ==================== 1. EDITORIAL HEADER ==================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 bg-[#12E9E9]/10 text-[#12E9E9] text-[10px] font-black tracking-[0.25em] px-4 py-1.5 rounded-md uppercase border border-[#12E9E9]/20">
              <Trophy className="w-3 h-3 text-[#12E9E9]" />
              <span>Global Startup & Venture Showcase</span>
            </div>

            <h2 className="text-white text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              FinTech World Cup (FWC) 2026
            </h2>

            <p className="text-sm md:text-base text-[#6D8794] font-medium leading-relaxed">
              The ultimate global pitch competition empowering early-stage innovators. Connecting 1,000+ startup applicants across 50+ regional qualifying capitals with $1M+ in equity funding.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="/registration.html" 
              className="px-6 py-3 bg-gradient-to-r from-[#12E9E9] to-[#08BDF4] text-[#082028] text-xs font-black tracking-widest uppercase rounded-xl shadow-[0_4px_20px_rgba(18,233,233,0.3)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>Apply as a Startup</span>
              <ArrowUpRight className="w-4 h-4 text-[#082028]" />
            </a>
          </div>
        </div>

        {/* ==================== 2. HIGHLIGHT METRICS STRIP ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#0c2730]/60 border border-white/[0.08] backdrop-blur-xl">
          {fwcMetrics.map((m, idx) => (
            <div key={idx} className="space-y-1 text-center md:text-left border-r border-white/[0.06] last:border-0 pr-4">
              <div className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#12E9E9]">
                {m.value}
              </div>
              <div className="text-[11px] md:text-xs font-bold text-[#6D8794] uppercase tracking-wider">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* ==================== 3. 4-CARD FEATURE MATRIX ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {fwcHighlights.map((card) => {
            const IconComp = card.icon;

            return (
              <motion.div
                key={card.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#0c2730]/40 backdrop-blur-xl p-8 flex flex-col justify-between shadow-[0_20px_40px_rgba(4,16,20,0.4)] hover:border-[#12E9E9]/40 hover:bg-[#0c2730]/80 transition-all duration-500"
              >
                {/* Top Cyan Accent Laser Line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#12E9E9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 rounded-t-2xl" />

                <div className="space-y-6">
                  {/* Header Badge Row */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-[0.2em] text-[#12E9E9] bg-[#12E9E9]/10 px-3 py-1 rounded-md uppercase border border-[#12E9E9]/20">
                      {card.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#082028]/80 border border-white/[0.08] flex items-center justify-center text-[#12E9E9] backdrop-blur-md group-hover:bg-[#12E9E9] group-hover:text-[#082028] transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <div className="text-xs font-extrabold text-[#12E9E9] tracking-wider uppercase">
                      {card.stat}
                    </div>
                    <h3 className="text-white text-xl font-semibold tracking-tight leading-snug group-hover:text-[#12E9E9] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#BEC9CB] font-medium leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-6 mt-6 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#6D8794] group-hover:text-white transition-colors">
                    Official Competition Circuit
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/[0.05] group-hover:bg-[#12E9E9] text-[#6D8794] group-hover:text-[#082028] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* ==================== 4. APPLICATION & INCUBATION BANNER ==================== */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0c2730] via-[#0e3542] to-[#0c2730] border border-[#12E9E9]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(18,233,233,0.1)]">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-white text-lg font-semibold tracking-tight">
              Are you an early-stage or Series A FinTech founder?
            </h4>
            <p className="text-xs text-[#6D8794] font-medium">
              Submit your pitch deck for regional qualifier evaluation or register to watch the live main stage finals.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/registration.html"
              className="px-6 py-3 bg-gradient-to-r from-[#12E9E9] to-[#08BDF4] text-[#082028] text-xs font-black tracking-widest uppercase rounded-xl shadow-[0_4px_20px_rgba(18,233,233,0.3)] hover:scale-105 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
            >
              <span>Submit Pitch Deck</span>
              <ArrowUpRight className="w-4 h-4 text-[#082028]" />
            </a>

            <a
              href="https://dubaifintechsummit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#082028] text-white border border-white/[0.12] hover:border-[#12E9E9]/50 text-xs font-bold tracking-widest uppercase rounded-xl flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              <span>FWC Guidelines</span>
              <ExternalLink className="w-4 h-4 text-[#12E9E9]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
