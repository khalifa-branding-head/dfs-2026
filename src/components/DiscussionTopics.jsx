import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Cpu, 
  Coins, 
  ShieldCheck, 
  Building, 
  Landmark, 
  Briefcase, 
  Scale, 
  Rocket, 
  ArrowLeftRight, 
  Wallet, 
  Bot, 
  TrendingUp, 
  PieChart, 
  Globe, 
  Search,
  ArrowUpRight
} from 'lucide-react';

const discussionTopics = [
  {
    id: 'topic-01',
    num: 'TOPIC 01',
    title: 'The Future of FinTech: Innovation Driving Global Finance',
    category: 'ai',
    categoryLabel: 'AI & Innovation',
    desc: 'Unpacking structural shifts, next-gen business models, and breakthrough technologies re-engineering global financial architecture.',
    icon: Sparkles,
    featured: true
  },
  {
    id: 'topic-02',
    num: 'TOPIC 02',
    title: 'Financial Inclusion in Emerging Markets',
    category: 'venture',
    categoryLabel: 'Global Markets',
    desc: 'Leveraging mobile-first infrastructure, micro-finance protocols, and digital identity to onboard the next billion users.',
    icon: Globe,
    featured: false
  },
  {
    id: 'topic-03',
    num: 'TOPIC 03',
    title: 'Digital Assets and Tokenisation: Building Trust at Scale',
    category: 'web3',
    categoryLabel: 'Web3 & Digital Assets',
    desc: 'Real-World Asset (RWA) tokenisation, institutional custody protocols, and liquidity frameworks for digital securities.',
    icon: Coins,
    featured: true
  },
  {
    id: 'topic-04',
    num: 'TOPIC 04',
    title: 'Crypto-Assets: Policy, Regulation and Legal Frameworks',
    category: 'web3',
    categoryLabel: 'Web3 & Regulation',
    desc: 'Harmonising international regulatory standards, VARA/MiCA compliance models, and cross-jurisdictional enforcement.',
    icon: ShieldCheck,
    featured: false
  },
  {
    id: 'topic-05',
    num: 'TOPIC 05',
    title: 'The Role of Central Banks in a Sustainable, Digital Economy',
    category: 'banking',
    categoryLabel: 'Central Banking & CBDCs',
    desc: 'Central Bank Digital Currencies (CBDCs), wholesale settlement networks, and green finance mandates driving monetary policy.',
    icon: Landmark,
    featured: false
  },
  {
    id: 'topic-06',
    num: 'TOPIC 06',
    title: 'Digital Banking and Neobanks: Scaling Profitable Models',
    category: 'banking',
    categoryLabel: 'Digital Banking',
    desc: 'Transitioning from customer acquisition to unit-economic profitability, credit risk modelling, and core banking modernization.',
    icon: Building,
    featured: false
  },
  {
    id: 'topic-07',
    num: 'TOPIC 07',
    title: 'The Future of Wealth Management and Private Banking',
    category: 'banking',
    categoryLabel: 'WealthTech',
    desc: 'AI-driven robo-advisory, hyper-personalised portfolio management, and intergenerational wealth transfer tech.',
    icon: Briefcase,
    featured: false
  },
  {
    id: 'topic-08',
    num: 'TOPIC 08',
    title: 'Evolving Global Regulatory Landscape',
    category: 'banking',
    categoryLabel: 'RegTech & Compliance',
    desc: 'Automated AML/KYC telemetry, real-time transaction monitoring, and supervisory technology (SupTech) for global regulators.',
    icon: Scale,
    featured: false
  },
  {
    id: 'topic-09',
    num: 'TOPIC 09',
    title: 'Early-Stage Start-ups and the New Venture Ecosystem',
    category: 'venture',
    categoryLabel: 'Venture & Capital',
    desc: 'Venture capital deployment trends, accelerator models, sovereign wealth participation, and startup valuation dynamics.',
    icon: Rocket,
    featured: false
  },
  {
    id: 'topic-10',
    num: 'TOPIC 10',
    title: 'Seamless Payments Across Borders',
    category: 'web3',
    categoryLabel: 'Payments & Settlement',
    desc: 'Frictionless cross-border remittance, real-time gross settlement (RTGS) interlinking, and stablecoin payment rails.',
    icon: ArrowLeftRight,
    featured: false
  },
  {
    id: 'topic-11',
    num: 'TOPIC 11',
    title: 'Embedded Finance: Redefining Everyday Transactions',
    category: 'venture',
    categoryLabel: 'Embedded Commerce',
    desc: 'Integrating BaaS (Banking-as-a-Service), BNPL 2.0, and contextual financial products directly into non-financial platforms.',
    icon: Wallet,
    featured: false
  },
  {
    id: 'topic-12',
    num: 'TOPIC 12',
    title: 'From Chatbots to Financial Super-Agents',
    category: 'ai',
    categoryLabel: 'AI & Super-Agents',
    desc: 'Autonomous LLM agents executing complex financial workflows, predictive risk analytics, and generative algorithmic trading.',
    icon: Bot,
    featured: true
  },
  {
    id: 'topic-13',
    num: 'TOPIC 13',
    title: 'Trading and Investment Platforms of Tomorrow',
    category: 'ai',
    categoryLabel: 'Trading Tech',
    desc: 'High-frequency algorithmic execution, fractional asset trading engines, and decentralised exchange (DEX) liquidity pools.',
    icon: TrendingUp,
    featured: false
  },
  {
    id: 'topic-14',
    num: 'TOPIC 14',
    title: 'Asset Management in a Fragmented World: Driving Alpha',
    category: 'venture',
    categoryLabel: 'Asset Management',
    desc: 'Navigating macroeconomic volatility, private market illiquidity, and quantitative multi-asset diversification strategies.',
    icon: PieChart,
    featured: false
  },
  {
    id: 'topic-15',
    num: 'TOPIC 15',
    title: 'Scaling FinTech for the Global South',
    category: 'venture',
    categoryLabel: 'Emerging Markets',
    desc: 'Unlocking growth corridors across MEASA, LATAM, and SEA through interoperable payment networks and leapfrog technology.',
    icon: Cpu,
    featured: false
  }
];

const categoryTabs = [
  { id: 'all', label: 'All Topics (15)' },
  { id: 'ai', label: 'AI & Super-Agents' },
  { id: 'web3', label: 'Web3 & Digital Assets' },
  { id: 'banking', label: 'Banking & Policy' },
  { id: 'venture', label: 'Venture & Global Markets' },
];

export default function DiscussionTopics() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter topics based on active tab and search query
  const filteredTopics = discussionTopics.filter(topic => {
    const matchesCategory = activeCategory === 'all' || topic.category === activeCategory;
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          topic.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          topic.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full bg-[#082028] py-28 px-6 md:px-12 relative font-sans antialiased overflow-hidden selection:bg-[#12E9E9]/20">
      
      {/* Background Precision Ambient Accents */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#12E9E9]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#08BDF4]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* ==================== 1. EDITORIAL HEADER & TITLE ==================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 bg-[#12E9E9]/10 text-[#12E9E9] text-[10px] font-black tracking-[0.25em] px-4 py-1.5 rounded-md uppercase">
              Curated Content Pillars
            </div>
            <h2 className="text-white text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              Discussion Topics
            </h2>
            <p className="text-sm md:text-base text-[#6D8794] font-medium">
              Explore the 15 core strategic themes shaping the agenda of the 4th Dubai FinTech Summit.
            </p>
          </div>

          {/* Search Filter Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6D8794]" />
            <input 
              type="text"
              placeholder="Search topics or themes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0c2730]/60 border border-white/[0.08] focus:border-[#12E9E9]/50 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-[#6D8794] outline-none transition-all duration-300 backdrop-blur-md"
            />
          </div>
        </div>

        {/* ==================== 2. CATEGORY TAB FILTER BAR ==================== */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-white/[0.06]">
          {categoryTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 relative ${
                activeCategory === tab.id
                  ? 'text-[#082028] bg-gradient-to-r from-[#12E9E9] to-[#08BDF4] shadow-[0_4px_20px_rgba(18,233,233,0.3)]'
                  : 'text-[#6D8794] hover:text-white bg-[#0c2730]/40 hover:bg-[#0c2730]/80 border border-white/[0.04]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ==================== 3. DYNAMIC TOPICS MATRIX GRID ==================== */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredTopics.map((topic) => {
              const IconComp = topic.icon;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={topic.id}
                  className={`group relative rounded-2xl border border-white/[0.08] bg-[#0c2730]/40 backdrop-blur-xl p-7 flex flex-col justify-between transition-all duration-500 hover:border-[#12E9E9]/40 hover:bg-[#0c2730]/80 shadow-[0_20px_40px_rgba(4,16,20,0.4)] ${
                    topic.featured ? 'lg:col-span-2 bg-gradient-to-br from-[#0c2730]/80 via-[#0c2730]/50 to-[#0e3542]/40' : ''
                  }`}
                >
                  {/* Top Glowing Laser Border Accent */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#12E9E9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />

                  <div className="space-y-4">
                    {/* Header Row: Topic Monospace Badge & Category Tag */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black tracking-[0.2em] text-[#12E9E9] bg-[#12E9E9]/10 px-3 py-1 rounded-md uppercase border border-[#12E9E9]/20">
                        {topic.num}
                      </span>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#6D8794] group-hover:text-white transition-colors">
                        <IconComp className="w-3.5 h-3.5 text-[#12E9E9]" />
                        <span>{topic.categoryLabel}</span>
                      </div>
                    </div>

                    {/* Topic Title */}
                    <h3 className={`text-white font-semibold tracking-tight leading-snug group-hover:text-[#12E9E9] transition-colors ${
                      topic.featured ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
                    }`}>
                      {topic.title}
                    </h3>

                    {/* Description Paragraph */}
                    <p className="text-xs md:text-sm text-[#BEC9CB] font-medium leading-relaxed">
                      {topic.desc}
                    </p>
                  </div>

                  {/* Bottom Footer Accent Trigger */}
                  <div className="pt-6 mt-6 border-t border-white/[0.04] flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest text-[#6D8794] group-hover:text-white uppercase transition-colors">
                      Key Content Pillar
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/[0.05] group-hover:bg-[#12E9E9] text-[#6D8794] group-hover:text-[#082028] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State Fallback */}
        {filteredTopics.length === 0 && (
          <div className="w-full py-16 text-center text-[#6D8794] font-medium space-y-3">
            <p className="text-base text-white font-semibold">No matching discussion topics found</p>
            <p className="text-xs">Try searching for a different keyword or switch category tabs.</p>
          </div>
        )}

      </div>
    </section>
  );
}
