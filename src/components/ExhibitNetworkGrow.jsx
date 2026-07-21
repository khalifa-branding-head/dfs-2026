import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users2, 
  TrendingUp, 
  Presentation, 
  ArrowUpRight, 
  Download, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

const pillars = [
  {
    id: 'pillar-1',
    title: 'Exhibition Hall & Custom Pavilions',
    metric: '200+ Global Brands',
    desc: 'Showcase cutting-edge financial software, Web3 infrastructure, and payment rails to key international buyers.',
    image: './assets/images/summit-showcase.jpg',
    icon: Building2,
    badge: 'EXHIBITION SPACE'
  },
  {
    id: 'pillar-2',
    title: 'C-Suite Networking & VIP Lounges',
    metric: '10,000+ Decision Makers',
    desc: 'B2B matchmaking, private executive roundtables, and high-level sovereign wealth networking hubs.',
    image: './assets/images/showreel-thumbnail.jpg',
    icon: Users2,
    badge: 'EXECUTIVE NETWORKING'
  },
  {
    id: 'pillar-3',
    title: 'Innovation Stages & Startup Pitching',
    metric: '50+ Pitch Demos',
    desc: 'Unveil breakthrough fintech solutions live on stage in front of global venture capitalists and media networks.',
    image: './assets/images/summit-showcase.jpg',
    icon: Presentation,
    badge: 'DEMO ARENA'
  },
  {
    id: 'pillar-4',
    title: 'Commercial Growth & Deal Signing',
    metric: '$100B+ AUM Represented',
    desc: 'Formalise strategic cross-border partnerships, joint ventures, and enterprise procurement agreements.',
    image: './assets/images/showreel-thumbnail.jpg',
    icon: TrendingUp,
    badge: 'COMMERCIAL HUB'
  }
];

const metrics = [
  { value: '200+', label: 'Exhibitors & Partners' },
  { value: '10,000+', label: 'C-Suite & Regulators' },
  { value: '$100B+', label: 'Investor AUM Represented' },
  { value: '100+', label: 'Countries Participating' },
];

export default function ExhibitNetworkGrow() {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-20 px-6 md:px-12 relative font-sans antialiased overflow-hidden selection:bg-[#0284C7]/20 border-t border-slate-200/80">
      
      {/* Background Precision Ambient Light Flares */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#0284C7]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* ==================== 1. EDITORIAL HEADER ==================== */}
        <div className="max-w-3xl space-y-3 text-left">
          <div className="inline-flex items-center gap-2 bg-[#0284C7]/10 text-[#0284C7] text-[10px] font-black tracking-[0.25em] px-3.5 py-1 rounded-md uppercase border border-[#0284C7]/20">
            <Sparkles className="w-3 h-3 text-[#0284C7]" />
            <span>Commercial & Exhibition Ecosystem</span>
          </div>

          <h2 className="text-[#0F172A] text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Exhibit. Network. Grow.
          </h2>

          <p className="text-xs md:text-sm text-[#475569] font-medium leading-relaxed">
            Position your brand at the centre of global FinTech innovation. Engage with investors, enterprises, and industry leaders, showcase your solutions, and accelerate commercial growth.
          </p>
        </div>

        {/* ==================== 2. HIGHLIGHT METRICS STRIP ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
          {metrics.map((m, idx) => (
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

        {/* ==================== 3. 4-PILLAR COMPACT 2x2 FEATURE GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;

            return (
              <motion.div
                key={pillar.id}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl border border-slate-200/80 bg-white overflow-hidden flex flex-col justify-between shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:border-[#0284C7]/50 hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)] transition-all duration-500"
              >
                {/* Top Cyan Laser Accent Line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#0284C7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                {/* Visual Image Header */}
                <div className="relative h-44 md:h-48 w-full overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 text-[10px] font-black tracking-[0.25em] text-[#0284C7] bg-white/90 backdrop-blur-md px-3 py-1 rounded-md uppercase border border-slate-200">
                    {pillar.badge}
                  </span>

                  {/* Icon */}
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0284C7] backdrop-blur-md group-hover:bg-[#0284C7] group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between relative z-20 bg-white">
                  <div className="space-y-1.5">
                    <div className="text-xs font-black tracking-[0.25em] text-[#0284C7] uppercase">
                      {pillar.metric}
                    </div>
                    <h3 className="text-[#0F172A] text-lg md:text-xl font-bold tracking-tight group-hover:text-[#0284C7] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#475569] font-medium leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#475569] group-hover:text-[#0F172A] transition-colors">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" />
                      Priority Placement Available
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#0284C7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ==================== 4. CALL TO ACTION BAR ==================== */}
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-sky-900 via-slate-900 to-sky-950 text-white border border-[#0284C7]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(2,132,199,0.1)]">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-white text-base md:text-lg font-bold tracking-tight">
              Ready to showcase your brand to 10,000+ financial leaders?
            </h4>
            <p className="text-xs text-slate-300 font-medium">
              Prime booth spaces and tailored sponsorship packages are currently open for booking.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/exhibitors.html"
              className="px-6 py-3 bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white text-xs font-black tracking-widest uppercase rounded-xl shadow-[0_4px_15px_rgba(2,132,199,0.25)] flex items-center gap-2"
            >
              <span>Reserve Spot</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className="px-6 py-3 bg-white text-slate-900 border border-slate-200 hover:bg-[#0284C7] hover:text-white text-xs font-bold tracking-widest uppercase rounded-xl flex items-center gap-2 transition-colors shadow-sm"
            >
              <Download className="w-4 h-4 text-[#0284C7] group-hover:text-white" />
              <span>Sponsorship Prospectus</span>
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}
