import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, ExternalLink, Download, ArrowUpRight, Calendar, Tag } from 'lucide-react';

const newsArticles = [
  {
    id: 'news-1',
    title: 'Dubai FinTech Summit 2026 Unveils 4th Edition Focus on AI Financial Super-Agents & RWA Tokenisation',
    publisher: 'DIFC Media Office',
    date: 'July 15, 2026',
    category: 'PRESS RELEASE',
    snippet: 'The Dubai International Financial Centre (DIFC) announced the agenda for the 4th edition of the Dubai FinTech Summit, expecting over 10,000 C-Suite leaders.',
    url: 'https://dubaifintechsummit.com/media-partners/',
    image: './assets/images/summit-showcase.jpg'
  },
  {
    id: 'news-2',
    title: 'Global Financial Captains and Central Bankers to Assemble in Dubai for Strategic Economic Dialogue',
    publisher: 'Financial Times',
    date: 'June 28, 2026',
    category: 'GLOBAL COVERAGE',
    snippet: 'Keynotes from HSBC, Franklin Templeton, and DBS Bank highlight the pivotal role of MEASA growth corridors in global financial architecture.',
    url: 'https://dubaifintechsummit.com/media-partners/',
    image: './assets/images/showreel-thumbnail.jpg'
  },
  {
    id: 'news-3',
    title: 'FinTech World Cup 2026 Launches Global Qualifiers Across 50+ Regional Capitals',
    publisher: 'Bloomberg FinTech',
    date: 'June 10, 2026',
    category: 'STARTUP & VENTURE',
    snippet: 'Early-stage startups compete for up to $1M in equity investment and direct incubation in the DIFC Innovation Hub.',
    url: 'https://dubaifintechsummit.com/media-partners/',
    image: './assets/images/summit-showcase.jpg'
  }
];

export default function InTheNews() {
  return (
    <section className="w-full bg-[#082028] py-28 px-6 md:px-12 relative font-sans antialiased overflow-hidden selection:bg-[#12E9E9]/20 border-t border-white/[0.06]">
      
      {/* Background Precision Ambient Flare */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#12E9E9]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 bg-[#12E9E9]/10 text-[#12E9E9] text-[10px] font-black tracking-[0.25em] px-4 py-1.5 rounded-md uppercase border border-[#12E9E9]/20">
              <Newspaper className="w-3 h-3 text-[#12E9E9]" />
              <span>Media & Insights Ecosystem</span>
            </div>

            <h2 className="text-white text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              In the News
            </h2>

            <p className="text-sm md:text-base text-[#6D8794] font-medium leading-relaxed">
              Stay updated with the latest press releases, strategic announcements, and global media coverage from the Dubai FinTech Summit.
            </p>
          </div>

          <a 
            href="https://dubaifintechsummit.com/media-partners/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#12E9E9] hover:text-white transition-colors"
          >
            <span>View Media Centre</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3-Column News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {newsArticles.map((article) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl border border-white/[0.08] bg-[#0c2730]/40 backdrop-blur-xl overflow-hidden flex flex-col justify-between shadow-[0_20px_40px_rgba(4,16,20,0.4)] hover:border-[#12E9E9]/40 hover:bg-[#0c2730]/80 transition-all duration-500"
            >
              {/* Top Cyan Accent Line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#12E9E9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2730] via-[#0c2730]/30 to-transparent" />
                
                {/* Category Pill */}
                <span className="absolute top-4 left-4 text-[10px] font-black tracking-[0.2em] text-[#12E9E9] bg-[#082028]/80 backdrop-blur-md px-3 py-1 rounded-md uppercase border border-[#12E9E9]/30">
                  {article.category}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[11px] font-bold text-[#6D8794]">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3 h-3 text-[#12E9E9]" />
                      {article.publisher}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#6D8794]" />
                      {article.date}
                    </span>
                  </div>

                  <h3 className="text-white text-base font-semibold tracking-tight leading-snug group-hover:text-[#12E9E9] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#BEC9CB] font-medium leading-relaxed line-clamp-3">
                    {article.snippet}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-bold text-[#12E9E9] group-hover:text-white transition-colors">
                  <span>Read Full Article</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Media Kit Banner */}
        <div className="p-6 rounded-2xl bg-[#0c2730]/60 border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#12E9E9]/10 border border-[#12E9E9]/20 flex items-center justify-center text-[#12E9E9]">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Official Press & Brand Guidelines Kit</div>
              <div className="text-xs text-[#6D8794]">High-res logos, official executive photography, and summit press assets.</div>
            </div>
          </div>

          <a 
            href="#"
            className="px-5 py-2.5 bg-[#082028] hover:bg-[#082028]/80 text-white border border-white/[0.12] hover:border-[#12E9E9]/50 text-xs font-bold tracking-widest uppercase rounded-lg transition-colors flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5 text-[#12E9E9]" />
            Download Kit
          </a>
        </div>

      </div>
    </section>
  );
}
