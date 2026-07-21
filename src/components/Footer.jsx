import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send, CheckCircle2, Shield } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#F8FAFC] text-[#0F172A] font-sans antialiased border-t border-slate-200/80 relative overflow-hidden selection:bg-[#0284C7]/20">
      
      {/* Precision Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-[#0284C7]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* ==================== 1. TOP NEWSLETTER & SUBSCRIPTION BAR ==================== */}
      <div className="border-b border-slate-200/80 py-14 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#0F172A]">
              Stay Informed on Global FinTech Developments
            </h3>
            <p className="text-xs md:text-sm text-[#475569] font-medium max-w-xl">
              Subscribe for exclusive keynote speaker additions, agenda drops, and VIP delegate access alerts.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full sm:w-80">
              <input 
                type="email"
                required
                placeholder="Enter corporate email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200/80 focus:border-[#0284C7] rounded-xl px-4 py-3 text-xs text-[#0F172A] placeholder-[#475569] outline-none transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white text-xs font-black tracking-widest uppercase rounded-xl shadow-[0_4px_15px_rgba(2,132,199,0.25)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {subscribed ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  Subscribed
                </>
              ) : (
                <>
                  Subscribe
                  <Send className="w-3.5 h-3.5 text-white" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* ==================== 2. MAIN FOOTER NAVIGATION COLUMNS ==================== */}
      <div className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        {/* Column 1: Brand & Patronage */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img 
                src="./dfs-26-logo-clean.svg" 
                alt="Dubai FinTech Summit 2026" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-xs text-[#475569] font-medium leading-relaxed max-w-sm">
              The premier global gathering of financial leaders, central bankers, and technology innovators. Convening 10,000+ C-Suite delegates at Madinat Jumeirah, Dubai.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200/80 space-y-2">
            <div className="text-[10px] font-black tracking-[0.25em] text-[#0284C7] uppercase">Organised & Powered By</div>
            <img 
              src="./organised-by-difc.png" 
              alt="Organised By Trescon | Powered by LEAP | By DIFC" 
              className="h-6 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {/* Column 2: Summit Overview */}
        <div className="space-y-4">
          <h4 className="text-[10px] font-black tracking-[0.25em] text-[#0284C7] uppercase">Summit Links</h4>
          <ul className="space-y-2.5 text-xs text-[#475569] font-medium">
            <li><a href="/about.html" className="hover:text-[#0284C7] transition-colors">About DFS 2026</a></li>
            <li><a href="/agenda.html" className="hover:text-[#0284C7] transition-colors">Summit Agenda</a></li>
            <li><a href="/speakers.html" className="hover:text-[#0284C7] transition-colors">Keynote Speakers</a></li>
            <li><a href="/exhibitors.html" className="hover:text-[#0284C7] transition-colors">Exhibitor Directory</a></li>
            <li><a href="/sponsors.html" className="hover:text-[#0284C7] transition-colors">Partners & Sponsors</a></li>
          </ul>
        </div>

        {/* Column 3: Commercial & Media */}
        <div className="space-y-4">
          <h4 className="text-[10px] font-black tracking-[0.25em] text-[#0284C7] uppercase">Enquire & Partner</h4>
          <ul className="space-y-2.5 text-xs text-[#475569] font-medium">
            <li><a href="/exhibitors.html" className="hover:text-[#0284C7] transition-colors">Book Exhibition Booth</a></li>
            <li><a href="/sponsors.html" className="hover:text-[#0284C7] transition-colors">Sponsorship Prospectus</a></li>
            <li><a href="/media.html" className="hover:text-[#0284C7] transition-colors">Media Accreditation</a></li>
            <li><a href="/blog.html" className="hover:text-[#0284C7] transition-colors">Summit Insights & Blog</a></li>
            <li><a href="/faqs.html" className="hover:text-[#0284C7] transition-colors">Delegate FAQs</a></li>
          </ul>
        </div>

        {/* Column 4: Governance & Venue */}
        <div className="space-y-4">
          <h4 className="text-[10px] font-black tracking-[0.25em] text-[#0284C7] uppercase">Venue & Legal</h4>
          <ul className="space-y-2.5 text-xs text-[#475569] font-medium">
            <li><a href="/privacy.html" className="hover:text-[#0284C7] transition-colors">Privacy Policy</a></li>
            <li><a href="/terms.html" className="hover:text-[#0284C7] transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-[#0284C7] transition-colors">Cookie Policy</a></li>
            <li className="pt-2 text-[11px] text-[#475569]">
              <span className="block font-bold text-[#0F172A] mb-0.5">Madinat Jumeirah</span>
              Al Sufouh 1, Dubai, United Arab Emirates
            </li>
          </ul>
        </div>

      </div>

      {/* ==================== 3. COPYRIGHT & REGULATORY BAR ==================== */}
      <div className="border-t border-slate-200/80 py-6 px-6 md:px-12 bg-slate-100/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#475569] font-medium">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Copyright © 2026 DIFC (Dubai International Financial Centre). All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="/privacy.html" className="hover:text-[#0284C7] transition-colors">Privacy</a>
            <a href="/terms.html" className="hover:text-[#0284C7] transition-colors">Terms</a>
            <a href="/faqs.html" className="hover:text-[#0284C7] transition-colors">Support</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
