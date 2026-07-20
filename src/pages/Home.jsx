import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import HomeHero from '../components/HomeHero';
import AboutSummit from '../components/AboutSummit';
import PartnerEcosystem from '../components/PartnerEcosystem';
import SponsorMarquee from '../components/SponsorMarquee';
import ImpactGlance from '../components/ImpactGlance';
import CuratedLeadership from '../components/CuratedLeadership';
import GlobalCapitals from '../components/GlobalCapitals';

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen">
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

      {/* 5. Featured Keynote Speakers */}
      <FeaturedSpeakers />

      {/* 5.1. Curated Gathering of Global Financial Leadership */}
      <CuratedLeadership />

      {/* 5.2. Connecting the World's Financial Capitals Map */}
      <GlobalCapitals />

      {/* 6. Conversion Call to Action */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-brand-dark via-[#020381]/25 to-brand-dark border-t border-brand-teal/10">
        {/* Background visual light burst */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-electric/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-[1300px] mx-auto px-6 md:px-10 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4 uppercase">
            Join the Global Financial Dialogue
          </h2>
          <p className="text-brand-text-muted max-w-2xl text-sm leading-relaxed mb-8">
            Access all panel debates, the exhibition pavilions, and priority network lounges at the Dubai FinTech Summit 2026. Early booking discounts active.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/registration.html"
            className="px-10 py-4 bg-brand-teal hover:bg-brand-teal/90 text-brand-dark font-extrabold tracking-widest text-xs uppercase rounded-lg shadow-[0_0_25px_rgba(18,233,233,0.3)] transition-all duration-300 flex items-center gap-2 group"
          >
            Register & Book Pass
            <ArrowUpRight className="w-4 h-4 text-brand-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>
      </section>
    </div>
  );
}
