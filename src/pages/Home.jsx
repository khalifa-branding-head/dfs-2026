import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import HomeHero from '../components/HomeHero';
import AboutSummit from '../components/AboutSummit';
import PartnerEcosystem from '../components/PartnerEcosystem';
import SponsorMarquee from '../components/SponsorMarquee';
import ImpactGlance from '../components/ImpactGlance';
import ProgrammeHub from '../components/ProgrammeHub';
import FeaturedSpeakers from '../components/FeaturedSpeakers';
import CuratedLeadership from '../components/CuratedLeadership';
import GlobalCapitals from '../components/GlobalCapitals';
import CommercialHub from '../components/CommercialHub';
import PassSelector from '../components/PassSelector';

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-[#F8FAFC]">
      {/* 1. Hero Section */}
      <HomeHero />

      {/* 2. Summit Overview */}
      <AboutSummit />

      {/* 3. Premium Asymmetric Partner Ecosystem Grid */}
      <PartnerEcosystem />

      {/* 3.1. Infinite Scrolling Sponsor Marquee */}
      <SponsorMarquee />

      {/* 4. Statistics Metrics section */}
      <ImpactGlance />

      {/* 4.1. Programme Command Hub (15 Discussion Topics + 4 Strategic Themes) */}
      <ProgrammeHub />

      {/* 5. Featured Keynote Speakers */}
      <FeaturedSpeakers />

      {/* 5.1. Curated Gathering of Global Financial Leadership */}
      <CuratedLeadership />

      {/* 5.2. Connecting the World's Financial Capitals Map */}
      <GlobalCapitals />

      {/* 5.3. Commercial Command Hub (Exhibition + FinTech World Cup + In The News) */}
      <CommercialHub />

      {/* 5.4. Pass Tier Selector & Registration CTA */}
      <PassSelector />

      {/* 6. Conversion Call to Action */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0284C7] via-[#0D9488] to-[#0F172A] border-t border-slate-200">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4 uppercase">
            Join the Global Financial Dialogue
          </h2>
          <p className="text-slate-100 max-w-2xl text-sm leading-relaxed mb-8 font-medium">
            Access all panel debates, the exhibition pavilions, and priority network lounges at the Dubai FinTech Summit 2026. Early booking discounts active.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/registration.html"
            className="px-10 py-4 bg-white text-[#0F172A] hover:bg-slate-100 font-extrabold tracking-widest text-xs uppercase rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 flex items-center gap-2 group"
          >
            <span>Register & Book Pass</span>
            <ArrowUpRight className="w-4 h-4 text-[#0F172A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>
      </section>
    </div>
  );
}
