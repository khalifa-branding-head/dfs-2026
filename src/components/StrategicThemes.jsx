import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe2, 
  Bot, 
  Coins, 
  Rocket, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Calendar,
  Clock
} from 'lucide-react';

const strategicPillars = [
  {
    id: 'pillar-1',
    number: 'PILLAR 01',
    title: 'Global Macroeconomics & Central Banking Policy',
    category: 'MONETARY ARCHITECTURE',
    desc: 'Unpacking central bank digital currencies (CBDCs), sovereign wealth allocation strategies, and interest rate telemetry across global reserve currencies.',
    icon: Globe2,
    highlights: ['Wholesale CBDC Settlement', 'Sovereign Reserve Liquidity', 'Macro Inflation Risk Models'],
    color: 'from-[#12E9E9] to-[#08BDF4]'
  },
  {
    id: 'pillar-2',
    number: 'PILLAR 02',
    title: 'AI Super-Agents & Generative Financial Intelligence',
    category: 'NEXT-GEN TECH',
    desc: 'Deploying autonomous LLM agents for real-time algorithmic execution, fraud prevention, credit scoring, and automated compliance telemetry.',
    icon: Bot,
    highlights: ['Autonomous Workflow Agents', 'Algorithmic Credit Scoring', 'Generative Risk Analytics'],
    color: 'from-[#08BDF4] to-[#12E9E9]'
  },
  {
    id: 'pillar-3',
    number: 'PILLAR 03',
    title: 'Digital Assets, RWA Tokenisation & Web3 Trust',
    category: 'CAPITAL MARKETS',
    desc: 'Institutional-grade asset tokenisation protocols, private key custody infrastructure, and cross-border regulatory compliance under VARA & MiCA.',
    icon: Coins,
    highlights: ['Real-World Asset (RWA) Tokens', 'Institutional Custody Rails', 'VARA/MiCA Compliance'],
    color: 'from-[#12E9E9] to-[#08BDF4]'
  },
  {
    id: 'pillar-4',
    number: 'PILLAR 04',
    title: 'Venture Capital Corridors & Emerging Market Scaling',
    category: 'VENTURE & GROWTH',
    desc: 'Connecting global venture capital funds with high-growth startup ecosystems across MEASA, LATAM, and Southeast Asian financial capitals.',
    icon: Rocket,
    highlights: ['MEASA Growth Corridors', 'FinTech World Cup ($1M Prize)', 'Sovereign Innovation Hubs'],
    color: 'from-[#08BDF4] to-[#12E9E9]'
  }
];

export default function StrategicThemes() {
  return (
    <section className="w-full bg-[#082028] py-28 px-6 md:px-12 relative font-sans antialiased overflow-hidden selection:bg-[#12E9E9]/20 border-t border-white/[0.06]">
      
      {/* Background Precision Radial Glow */}
      <div className="absolute top-1/2 right-1/3 w-[650px] h-[650px] bg-[#12E9E9]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* ==================== 1. EDITORIAL HEADER ==================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 bg-[#12E9E9]/10 text-[#12E9E9] text-[10px] font-black tracking-[0.25em] px-4 py-1.5 rounded-md uppercase border border-[#12E9E9]/20">
              <Sparkles className="w-3 h-3 text-[#12E9E9]" />
              <span>Conference Programme & Strategic Themes</span>
            </div>

            <h2 className="text-white text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              Global Leadership. Strategic Dialogue. High-Impact Innovation.
            </h2>

            <p className="text-sm md:text-base text-[#6D8794] font-medium leading-relaxed">
              Explore the four core pillars driving panel debates, ministerial roundtables, and keynotes at the Dubai FinTech Summit 2026.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="/registration.html" 
              className="px-6 py-3 bg-gradient-to-r from-[#12E9E9] to-[#08BDF4] text-[#082028] text-xs font-black tracking-widest uppercase rounded-xl shadow-[0_4px_20px_rgba(18,233,233,0.3)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>Buy a Pass</span>
              <ArrowUpRight className="w-4 h-4 text-[#082028]" />
            </a>
          </div>
        </div>

        {/* ==================== 2. STRATEGIC PILLARS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {strategicPillars.map((pillar) => {
            const IconComp = pillar.icon;

            return (
              <motion.div
                key={pillar.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#0c2730]/40 backdrop-blur-xl p-8 flex flex-col justify-between shadow-[0_20px_40px_rgba(4,16,20,0.4)] hover:border-[#12E9E9]/40 hover:bg-[#0c2730]/80 transition-all duration-500"
              >
                {/* Top Cyan Laser Accent Line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#12E9E9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 rounded-t-2xl" />

                <div className="space-y-6">
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-[0.2em] text-[#12E9E9] bg-[#12E9E9]/10 px-3 py-1 rounded-md uppercase border border-[#12E9E9]/20">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#082028]/80 border border-white/[0.08] flex items-center justify-center text-[#12E9E9] backdrop-blur-md group-hover:bg-[#12E9E9] group-hover:text-[#082028] transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-[#6D8794] uppercase tracking-wider">
                      {pillar.category}
                    </div>
                    <h3 className="text-white text-xl font-semibold tracking-tight leading-snug group-hover:text-[#12E9E9] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#BEC9CB] font-medium leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Key Highlights Checklist */}
                  <div className="pt-4 border-t border-white/[0.04] space-y-2">
                    <div className="text-[10px] font-bold text-[#6D8794] uppercase tracking-widest mb-2">Key Discussion Sub-Tracks</div>
                    {pillar.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-white/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#12E9E9]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-6 mt-6 border-t border-white/[0.04] flex items-center justify-between">
                  <div className="flex items-center gap-4 text-[11px] font-bold text-[#6D8794]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#12E9E9]" />
                      2-3 Nov 2026
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#6D8794]" />
                      Madinat Jumeirah
                    </span>
                  </div>

                  <a 
                    href="/agenda.html"
                    className="w-8 h-8 rounded-full bg-white/[0.05] group-hover:bg-[#12E9E9] text-[#6D8794] group-hover:text-[#082028] flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  >
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Programme Overview Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0c2730] via-[#0e3542] to-[#0c2730] border border-[#12E9E9]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(18,233,233,0.1)]">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-white text-lg font-semibold tracking-tight">
              Want to view the complete 2-day Summit Agenda?
            </h4>
            <p className="text-xs text-[#6D8794] font-medium">
              Explore keynotes, panel sessions, fireside chats, and stage schedules across all 4 strategic pillars.
            </p>
          </div>

          <a 
            href="/agenda.html"
            className="px-6 py-3 bg-[#082028] text-white border border-white/[0.12] hover:border-[#12E9E9]/50 text-xs font-bold tracking-widest uppercase rounded-xl flex items-center gap-2 transition-colors whitespace-nowrap"
          >
            <span>View Full Agenda</span>
            <ArrowUpRight className="w-4 h-4 text-[#12E9E9]" />
          </a>
        </div>

      </div>
    </section>
  );
}
