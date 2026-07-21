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
    <section className="w-full bg-[#F8FAFC] py-16 md:py-20 px-6 md:px-12 relative font-sans antialiased overflow-hidden selection:bg-[#0284C7]/20 border-t border-slate-200/80">
      
      {/* Background Precision Radial Glow */}
      <div className="absolute top-1/2 right-1/3 w-[650px] h-[650px] bg-[#0284C7]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* ==================== 1. EDITORIAL HEADER ==================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 bg-[#0284C7]/10 text-[#0284C7] text-[10px] font-black tracking-[0.25em] px-4 py-1.5 rounded-md uppercase border border-[#0284C7]/20">
              <Sparkles className="w-3 h-3 text-[#0284C7]" />
              <span>Conference Programme & Strategic Themes</span>
            </div>

            <h2 className="text-[#0F172A] text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Global Leadership. Strategic Dialogue. High-Impact Innovation.
            </h2>

            <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed">
              Explore the four core pillars driving panel debates, ministerial roundtables, and keynotes at the Dubai FinTech Summit 2026.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="/registration.html" 
              className="px-6 py-3 bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white text-xs font-black tracking-widest uppercase rounded-xl shadow-[0_4px_15px_rgba(2,132,199,0.25)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>Buy a Pass</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
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
                className="group relative rounded-2xl border border-slate-200/80 bg-white p-8 flex flex-col justify-between shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:border-[#0284C7]/50 hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)] transition-all duration-500"
              >
                {/* Top Cyan Laser Accent Line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#0284C7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 rounded-t-2xl" />

                <div className="space-y-6">
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-[0.25em] text-[#0284C7] bg-[#0284C7]/10 px-3 py-1 rounded-md uppercase border border-[#0284C7]/20">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-[#475569] uppercase tracking-wider">
                      {pillar.category}
                    </div>
                    <h3 className="text-[#0F172A] text-xl font-bold tracking-tight leading-snug group-hover:text-[#0284C7] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#475569] font-medium leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Key Highlights Checklist */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <div className="text-[10px] font-bold text-[#475569] uppercase tracking-widest mb-2">Key Discussion Sub-Tracks</div>
                    {pillar.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#0F172A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-[11px] font-bold text-[#475569]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                      2-3 Nov 2026
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#475569]" />
                      Madinat Jumeirah
                    </span>
                  </div>

                  <a 
                    href="/agenda.html"
                    className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#0284C7] text-[#475569] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  >
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Programme Overview Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-sky-900 via-slate-900 to-sky-950 text-white border border-[#0284C7]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(2,132,199,0.1)]">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-white text-lg font-bold tracking-tight">
              Want to view the complete 2-day Summit Agenda?
            </h4>
            <p className="text-xs text-slate-300 font-medium">
              Explore keynotes, panel sessions, fireside chats, and stage schedules across all 4 strategic pillars.
            </p>
          </div>

          <a 
            href="/agenda.html"
            className="px-6 py-3 bg-white text-slate-900 hover:bg-[#0284C7] hover:text-white text-xs font-bold tracking-widest uppercase rounded-xl flex items-center gap-2 transition-colors whitespace-nowrap shadow-md"
          >
            <span>View Full Agenda</span>
            <ArrowUpRight className="w-4 h-4 text-[#0284C7] group-hover:text-white" />
          </a>
        </div>

      </div>
    </section>
  );
}
