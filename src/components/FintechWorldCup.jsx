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
    <section className="w-full bg-[#F8FAFC] py-16 md:py-20 px-6 md:px-12 relative font-sans antialiased overflow-hidden selection:bg-[#0284C7]/20 border-t border-slate-200/80">
      
      {/* Background Precision Ambient Flare */}
      <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] bg-[#0284C7]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* ==================== 1. EDITORIAL HEADER ==================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 bg-[#0284C7]/10 text-[#0284C7] text-[10px] font-black tracking-[0.25em] px-4 py-1.5 rounded-md uppercase border border-[#0284C7]/20">
              <Trophy className="w-3 h-3 text-[#0284C7]" />
              <span>Global Startup & Venture Showcase</span>
            </div>

            <h2 className="text-[#0F172A] text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              FinTech World Cup (FWC) 2026
            </h2>

            <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed">
              The ultimate global pitch competition empowering early-stage innovators. Connecting 1,000+ startup applicants across 50+ regional qualifying capitals with $1M+ in equity funding.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="/registration.html" 
              className="px-6 py-3 bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white text-xs font-black tracking-widest uppercase rounded-xl shadow-[0_4px_15px_rgba(2,132,199,0.25)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>Apply as a Startup</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {/* ==================== 2. HIGHLIGHT METRICS STRIP ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
          {fwcMetrics.map((m, idx) => (
            <div key={idx} className="space-y-1 text-center md:text-left border-r border-slate-100 last:border-0 pr-4">
              <div className="text-2xl md:text-4xl font-extrabold text-[#0F172A]">
                {m.value}
              </div>
              <div className="text-[11px] md:text-xs font-bold text-[#475569] uppercase tracking-wider">
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
                className="group relative rounded-2xl border border-slate-200/80 bg-white p-8 flex flex-col justify-between shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:border-[#0284C7]/50 hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)] transition-all duration-500"
              >
                {/* Top Cyan Accent Laser Line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#0284C7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 rounded-t-2xl" />

                <div className="space-y-6">
                  {/* Header Badge Row */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-[0.25em] text-[#0284C7] bg-[#0284C7]/10 px-3 py-1 rounded-md uppercase border border-[#0284C7]/20">
                      {card.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <div className="text-xs font-extrabold text-[#0284C7] tracking-wider uppercase">
                      {card.stat}
                    </div>
                    <h3 className="text-[#0F172A] text-xl font-bold tracking-tight leading-snug group-hover:text-[#0284C7] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#475569] font-medium leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#475569] group-hover:text-[#0F172A] transition-colors">
                    Official Competition Circuit
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#0284C7] text-[#475569] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* ==================== 4. APPLICATION & INCUBATION BANNER ==================== */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-sky-900 via-slate-900 to-sky-950 text-white border border-[#0284C7]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(2,132,199,0.1)]">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-white text-lg font-bold tracking-tight">
              Are you an early-stage or Series A FinTech founder?
            </h4>
            <p className="text-xs text-slate-300 font-medium">
              Submit your pitch deck for regional qualifier evaluation or register to watch the live main stage finals.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/registration.html"
              className="px-6 py-3 bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white text-xs font-black tracking-widest uppercase rounded-xl shadow-[0_4px_15px_rgba(2,132,199,0.25)] hover:scale-105 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
            >
              <span>Submit Pitch Deck</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>

            <a
              href="https://dubaifintechsummit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-slate-900 border border-slate-200 hover:bg-[#0284C7] hover:text-white text-xs font-bold tracking-widest uppercase rounded-xl flex items-center gap-2 transition-colors whitespace-nowrap shadow-sm"
            >
              <span>FWC Guidelines</span>
              <ExternalLink className="w-4 h-4 text-[#0284C7] group-hover:text-white" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
