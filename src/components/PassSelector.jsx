import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Sparkles, 
  Crown, 
  Users, 
  User, 
  ArrowUpRight, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';

const passTiers = [
  {
    id: 'delegate',
    name: 'Delegate Pass',
    badge: 'GENERAL ACCESS',
    individualPrice: 499,
    earlyBirdPrice: 299,
    desc: 'Full access to 2 days of keynotes, panel sessions, and global exhibition pavilions.',
    features: [
      'Access to all 4 Strategic Theme stages',
      'Entry to 200+ Exhibitor Hall & Demo Arenas',
      'Official Event Mobile App & B2B Chat',
      'Delegate Networking Lounge access',
      'Certificate of Attendance'
    ],
    recommended: false,
    cta: 'Select Delegate Pass'
  },
  {
    id: 'exhibitor',
    name: 'Exhibitor Pass',
    badge: 'BOOTH TEAM',
    individualPrice: 999,
    earlyBirdPrice: 699,
    desc: 'Tailored for commercial booth teams, product showcases, and lead generation.',
    features: [
      '2-Day Full Exhibition Floor Access',
      '2 Exhibitor Staff Badges included',
      'Badge Lead Retrieval Scanner App',
      'Company Listing in Official Guide',
      'Exhibitor Networking Hours'
    ],
    recommended: false,
    cta: 'Select Exhibitor Pass'
  },
  {
    id: 'vip',
    name: 'VIP Executive Pass',
    badge: 'MOST POPULAR',
    individualPrice: 1499,
    earlyBirdPrice: 999,
    desc: 'Premium access for C-Suite executives, central bankers, and government officials.',
    features: [
      'Front-Row Reserved Keynote Seating',
      'Exclusive VIP Executive Lounge & Lunch',
      '1-on-1 Dedicated B2B Matchmaking Concierge',
      'VIP Opening Gala Reception Entry',
      'Post-Event Speaker Slides & Recordings'
    ],
    recommended: true,
    cta: 'Get VIP Access'
  },
  {
    id: 'investor',
    name: 'Investor Pass',
    badge: 'VC & CAPITAL',
    individualPrice: 1999,
    earlyBirdPrice: 1299,
    desc: 'Designed for VCs, Sovereign Wealth Funds, Private Equity, and Family Offices.',
    features: [
      'Access to Sovereign & Investor Deal Rooms',
      'FinTech World Cup (FWC) Jury Seating',
      'Pre-vetted 1,000+ Startup Pitch Decks',
      'Exclusive Investor Networking Breakfast',
      'Private Matchmaking Concierge'
    ],
    recommended: false,
    cta: 'Select Investor Pass'
  }
];

export default function PassSelector() {
  const [isGroup, setIsGroup] = useState(false);

  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-20 px-6 md:px-12 relative font-sans antialiased overflow-hidden selection:bg-[#0284C7]/20 border-t border-slate-200/80">
      
      {/* Background Precision Ambient Light Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0284C7]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* ==================== 1. EDITORIAL HEADER & TOGGLE ==================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2 bg-[#0284C7]/10 text-[#0284C7] text-[10px] font-black tracking-[0.25em] px-3.5 py-1 rounded-md uppercase border border-[#0284C7]/20">
              <Zap className="w-3 h-3 text-[#0284C7]" />
              <span>Registration & Pass Access</span>
            </div>

            <h2 className="text-[#0F172A] text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Pick Your Pass
            </h2>

            <p className="text-xs md:text-sm text-[#475569] font-medium leading-relaxed">
              Select the ideal access pass to join 10,000+ C-Suite leaders, central bankers, and investors at the Dubai FinTech Summit 2026.
            </p>
          </div>

          {/* Individual vs Group Pass Switch */}
          <div className="flex items-center bg-slate-200/80 p-1.5 rounded-2xl border border-slate-300/60 backdrop-blur-xl">
            <button
              onClick={() => setIsGroup(false)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                !isGroup
                  ? 'bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white shadow-[0_4px_15px_rgba(2,132,199,0.25)]'
                  : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Individual Pass</span>
            </button>

            <button
              onClick={() => setIsGroup(true)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 relative ${
                isGroup
                  ? 'bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white shadow-[0_4px_15px_rgba(2,132,199,0.25)]'
                  : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Group Pass (3+)</span>
              <span className="ml-1 text-[9px] font-black bg-[#0284C7]/20 text-[#0284C7] px-1.5 py-0.5 rounded uppercase border border-[#0284C7]/30">
                15% OFF
              </span>
            </button>
          </div>
        </div>

        {/* ==================== 2. PASS TIERS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {passTiers.map((tier) => {
            const basePrice = tier.earlyBirdPrice;
            const finalPrice = isGroup ? Math.round(basePrice * 0.85) : basePrice;

            return (
              <motion.div
                key={tier.id}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className={`group relative rounded-2xl border backdrop-blur-xl p-6 md:p-7 flex flex-col justify-between transition-all duration-500 shadow-[0_12px_40px_rgba(15,23,42,0.06)] ${
                  tier.recommended
                    ? 'bg-gradient-to-b from-sky-50/80 via-white to-white border-2 border-[#0284C7] shadow-[0_20px_50px_rgba(2,132,199,0.18)]'
                    : 'bg-white border-slate-200/80 hover:border-[#0284C7]/50 hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)]'
                }`}
              >
                {/* Top Cyan Accent Laser Line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#0284C7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 rounded-t-2xl" />

                {/* Recommended VIP Badge */}
                {tier.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white text-[9px] font-black tracking-widest px-3.5 py-1 rounded-full uppercase shadow-[0_4px_15px_rgba(2,132,199,0.4)] flex items-center gap-1 z-30">
                    <Crown className="w-3 h-3 text-white" />
                    <span>MOST POPULAR VIP</span>
                  </div>
                )}

                <div className="space-y-5">
                  {/* Tier Badge & Name */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[9px] font-black tracking-[0.25em] text-[#0284C7] bg-[#0284C7]/10 px-2.5 py-1 rounded-md uppercase border border-[#0284C7]/20">
                      {tier.badge}
                    </span>
                    <h3 className="text-[#0F172A] text-xl font-bold tracking-tight">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-[#475569] font-medium leading-relaxed min-h-[36px]">
                      {tier.desc}
                    </p>
                  </div>

                  {/* Pricing Box */}
                  <div className="py-3.5 border-y border-slate-100 space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-[#0F172A]">
                        ${finalPrice}
                      </span>
                      <span className="text-xs text-[#475569] line-through">
                        ${tier.individualPrice}
                      </span>
                      <span className="text-[10px] font-bold text-[#0284C7]">
                        USD / Pass
                      </span>
                    </div>
                    <div className="text-[10px] text-[#0284C7] font-bold">
                      Early Bird Rate (Limited Availability)
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5">
                    <div className="text-[10px] font-bold tracking-wider text-[#475569] uppercase">Pass Includes</div>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#475569] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <a
                    href="/registration.html"
                    className={`w-full py-3 px-4 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group ${
                      tier.recommended
                        ? 'bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white shadow-[0_4px_20px_rgba(2,132,199,0.3)] hover:scale-102'
                        : 'bg-slate-900 text-white hover:bg-[#0284C7] hover:text-white'
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* ==================== 3. GROUP & CORPORATE DELEGATION BANNER ==================== */}
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-sky-900 via-slate-900 to-sky-950 text-white border border-[#0284C7]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(2,132,199,0.1)]">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-white text-base md:text-lg font-bold tracking-tight">
              Registering a Corporate Delegation of 5+ Members?
            </h4>
            <p className="text-xs text-slate-300 font-medium">
              Unlock customized enterprise pass bundles, invoice billing, and dedicated VIP group lounge access.
            </p>
          </div>

          <a
            href="/registration.html"
            className="px-6 py-3 bg-white text-slate-900 hover:bg-[#0284C7] hover:text-white text-xs font-bold tracking-widest uppercase rounded-xl flex items-center gap-2 transition-colors whitespace-nowrap shadow-sm"
          >
            <span>Inquire for Corporate Delegation</span>
            <ArrowUpRight className="w-4 h-4 text-[#0284C7] group-hover:text-white" />
          </a>
        </div>

      </div>
    </section>
  );
}
