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
    <section className="w-full bg-[#082028] py-28 px-6 md:px-12 relative font-sans antialiased overflow-hidden selection:bg-[#12E9E9]/20 border-t border-white/[0.06]">
      
      {/* Background Precision Ambient Light Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#12E9E9]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* ==================== 1. EDITORIAL HEADER & TOGGLE ==================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 bg-[#12E9E9]/10 text-[#12E9E9] text-[10px] font-black tracking-[0.25em] px-4 py-1.5 rounded-md uppercase border border-[#12E9E9]/20">
              <Zap className="w-3 h-3 text-[#12E9E9]" />
              <span>Registration & Pass Access</span>
            </div>

            <h2 className="text-white text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              Pick Your Pass
            </h2>

            <p className="text-sm md:text-base text-[#6D8794] font-medium leading-relaxed">
              Select the ideal access pass to join 10,000+ C-Suite leaders, central bankers, and investors at the Dubai FinTech Summit 2026.
            </p>
          </div>

          {/* Individual vs Group Pass Switch */}
          <div className="flex items-center bg-[#0c2730] p-1.5 rounded-2xl border border-white/[0.08] backdrop-blur-xl">
            <button
              onClick={() => setIsGroup(false)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                !isGroup
                  ? 'bg-gradient-to-r from-[#12E9E9] to-[#08BDF4] text-[#082028] shadow-[0_4px_20px_rgba(18,233,233,0.3)]'
                  : 'text-[#6D8794] hover:text-white'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Individual Pass</span>
            </button>

            <button
              onClick={() => setIsGroup(true)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 relative ${
                isGroup
                  ? 'bg-gradient-to-r from-[#12E9E9] to-[#08BDF4] text-[#082028] shadow-[0_4px_20px_rgba(18,233,233,0.3)]'
                  : 'text-[#6D8794] hover:text-white'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Group Pass (3+)</span>
              <span className="ml-1 text-[9px] font-black bg-[#12E9E9]/20 text-[#12E9E9] px-1.5 py-0.5 rounded uppercase border border-[#12E9E9]/30">
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
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`group relative rounded-2xl border backdrop-blur-xl p-7 flex flex-col justify-between transition-all duration-500 shadow-[0_20px_40px_rgba(4,16,20,0.4)] ${
                  tier.recommended
                    ? 'bg-gradient-to-b from-[#0e3542] via-[#0c2730] to-[#0c2730] border-[#12E9E9]/60 shadow-[0_0_40px_rgba(18,233,233,0.15)]'
                    : 'bg-[#0c2730]/40 border-white/[0.08] hover:border-[#12E9E9]/40 hover:bg-[#0c2730]/80'
                }`}
              >
                {/* Top Cyan Accent Laser Line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#12E9E9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 rounded-t-2xl" />

                {/* Recommended Badge */}
                {tier.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#12E9E9] to-[#08BDF4] text-[#082028] text-[9px] font-black tracking-widest px-3 py-1 rounded-full uppercase shadow-[0_4px_15px_rgba(18,233,233,0.4)] flex items-center gap-1">
                    <Crown className="w-3 h-3 text-[#082028]" />
                    <span>RECOMMENDED VIP</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Tier Badge & Name */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[9px] font-black tracking-[0.2em] text-[#12E9E9] bg-[#12E9E9]/10 px-2.5 py-1 rounded-md uppercase border border-[#12E9E9]/20">
                      {tier.badge}
                    </span>
                    <h3 className="text-white text-xl font-bold tracking-tight">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-[#6D8794] font-medium leading-relaxed min-h-[36px]">
                      {tier.desc}
                    </p>
                  </div>

                  {/* Pricing Box */}
                  <div className="py-4 border-y border-white/[0.06] space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-white">
                        ${finalPrice}
                      </span>
                      <span className="text-xs text-[#6D8794] line-through">
                        ${tier.individualPrice}
                      </span>
                      <span className="text-[10px] font-bold text-[#12E9E9]">
                        USD / Pass
                      </span>
                    </div>
                    <div className="text-[10px] text-[#12E9E9] font-semibold">
                      Early Bird Rate (Limited Availability)
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3">
                    <div className="text-[10px] font-bold tracking-wider text-[#6D8794] uppercase">Pass Includes</div>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#BEC9CB] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#12E9E9] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  <a
                    href="/registration.html"
                    className={`w-full py-3 px-4 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group ${
                      tier.recommended
                        ? 'bg-gradient-to-r from-[#12E9E9] to-[#08BDF4] text-[#082028] shadow-[0_4px_25px_rgba(18,233,233,0.35)] hover:scale-102'
                        : 'bg-[#082028] text-white border border-white/[0.12] hover:border-[#12E9E9] hover:text-[#12E9E9]'
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
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0c2730] via-[#0e3542] to-[#0c2730] border border-[#12E9E9]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(18,233,233,0.1)]">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-white text-lg font-semibold tracking-tight">
              Registering a Corporate Delegation of 5+ Members?
            </h4>
            <p className="text-xs text-[#6D8794] font-medium">
              Unlock customized enterprise pass bundles, invoice billing, and dedicated VIP group lounge access.
            </p>
          </div>

          <a
            href="/registration.html"
            className="px-6 py-3 bg-[#082028] text-white border border-white/[0.12] hover:border-[#12E9E9]/50 text-xs font-bold tracking-widest uppercase rounded-xl flex items-center gap-2 transition-colors whitespace-nowrap"
          >
            <span>Inquire for Corporate Delegation</span>
            <ArrowUpRight className="w-4 h-4 text-[#12E9E9]" />
          </a>
        </div>

      </div>
    </section>
  );
}
