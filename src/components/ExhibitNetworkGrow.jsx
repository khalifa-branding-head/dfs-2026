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
    <section className="w-full bg-[#082028] py-28 px-6 md:px-12 relative font-sans antialiased overflow-hidden selection:bg-[#12E9E9]/20 border-t border-white/[0.06]">
      
      {/* Background Precision Ambient Light Flares */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#12E9E9]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* ==================== 1. EDITORIAL HEADER ==================== */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 bg-[#12E9E9]/10 text-[#12E9E9] text-[10px] font-black tracking-[0.25em] px-4 py-1.5 rounded-md uppercase border border-[#12E9E9]/20">
            <Sparkles className="w-3 h-3 text-[#12E9E9]" />
            <span>Commercial & Exhibition Ecosystem</span>
          </div>

          <h2 className="text-white text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Exhibit. Network. Grow.
          </h2>

          <p className="text-sm md:text-base text-[#6D8794] font-medium leading-relaxed">
            Position your brand at the centre of global FinTech innovation. Engage with investors, enterprises, and industry leaders, showcase your solutions, and accelerate commercial growth.
          </p>
        </div>

        {/* ==================== 2. HIGHLIGHT METRICS STRIP ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#0c2730]/60 border border-white/[0.08] backdrop-blur-xl">
          {metrics.map((m, idx) => (
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

        {/* ==================== 3. 4-PILLAR FEATURE GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;

            return (
              <motion.div
                key={pillar.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#0c2730]/40 backdrop-blur-xl overflow-hidden flex flex-col justify-between shadow-[0_20px_40px_rgba(4,16,20,0.4)] hover:border-[#12E9E9]/40 hover:bg-[#0c2730]/80 transition-all duration-500"
              >
                {/* Top Cyan Laser Accent Line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#12E9E9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                {/* Top Visual Image Header */}
                <div className="relative h-48 md:h-56 w-full overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c2730] via-[#0c2730]/40 to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 text-[10px] font-black tracking-[0.2em] text-[#12E9E9] bg-[#082028]/80 backdrop-blur-md px-3 py-1 rounded-md uppercase border border-[#12E9E9]/30">
                    {pillar.badge}
                  </span>

                  {/* Icon */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-[#082028]/80 border border-white/[0.1] flex items-center justify-center text-[#12E9E9] backdrop-blur-md">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-7 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-xs font-extrabold text-[#12E9E9] tracking-wider uppercase">
                      {pillar.metric}
                    </div>
                    <h3 className="text-white text-xl font-semibold tracking-tight group-hover:text-[#12E9E9] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#BEC9CB] font-medium leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-bold text-[#6D8794] group-hover:text-white transition-colors">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#12E9E9]" />
                      Priority Placement Available
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#12E9E9] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ==================== 4. CALL TO ACTION BAR ==================== */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0c2730] via-[#0e3542] to-[#0c2730] border border-[#12E9E9]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(18,233,233,0.1)]">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-white text-lg font-semibold tracking-tight">
              Ready to showcase your brand to 10,000+ financial leaders?
            </h4>
            <p className="text-xs text-[#6D8794] font-medium">
              Prime booth spaces and tailored sponsorship packages are currently open for booking.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/exhibitors.html"
              className="px-6 py-3 bg-gradient-to-r from-[#12E9E9] to-[#08BDF4] text-[#082028] text-xs font-black tracking-widest uppercase rounded-lg shadow-[0_4px_20px_rgba(18,233,233,0.3)] flex items-center gap-2"
            >
              Reserve Spot
              <ArrowUpRight className="w-4 h-4 text-[#082028]" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className="px-6 py-3 bg-[#082028] text-white border border-white/[0.12] hover:border-[#12E9E9]/50 text-xs font-bold tracking-widest uppercase rounded-lg flex items-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4 text-[#12E9E9]" />
              Sponsorship Prospectus
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}
