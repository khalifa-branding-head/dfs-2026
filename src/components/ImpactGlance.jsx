import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Users, BarChart3, Presentation, Globe2, Building2, Sparkles } from 'lucide-react';

const impactStats = [
  { id: 'leaders', count: '10,000+', label: 'Business Leaders', icon: Users },
  { id: 'investors', count: '1,000+', label: 'Elite Investors', icon: BarChart3 },
  { id: 'speakers', count: '300+', label: 'Headline Speakers', icon: Presentation },
  { id: 'countries', count: '120+', label: 'Countries Represented', icon: Globe2 },
  { id: 'exhibitors', count: '200+', label: 'Exhibitors & Partners', icon: Building2 },
];

export default function ImpactGlance() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((err) => console.log("Playback interrupted:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="w-full bg-[#082028] py-16 md:py-20 px-6 md:px-12 relative font-sans antialiased overflow-hidden selection:bg-[#12E9E9]/20 border-t border-white/[0.06]">
      {/* Precision Visual Backing Accent Overlays */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#12E9E9]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* ==================== 1. COMPACT EDITORIAL HEADER BLOCK ==================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl text-left space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#12E9E9]/10 text-[#12E9E9] text-[10px] font-black tracking-[0.25em] px-3.5 py-1 rounded-md uppercase border border-[#12E9E9]/20">
              <Sparkles className="w-3 h-3 text-[#12E9E9]" />
              <span>Summit Metrics</span>
            </div>
            <h2 className="text-white text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              Impact at a Glance
            </h2>
          </div>

          <p className="text-xs md:text-sm text-[#6D8794] font-medium max-w-md text-left md:text-right">
            A real-time data look at the structural records, milestones, and institutional parameters of our global financial event.
          </p>
        </div>

        {/* ==================== 2. ASYMMETRIC GRID CONFIGURATION ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT COLUMN: Cinematic Video Engine Player (5-Span) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div 
              whileHover={{ scale: 1.015, y: -4 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full aspect-video lg:aspect-[4/3] rounded-2xl border border-white/[0.08] hover:border-[#12E9E9]/40 bg-[#0c2730]/40 backdrop-blur-xl relative overflow-hidden shadow-[0_20px_50px_rgba(4,16,20,0.5)] group cursor-pointer transition-all duration-500"
              onClick={toggleVideoPlayback}
            >
              {/* Dual-Stage Dark Overlay Gradient Mask */}
              <div className={`absolute inset-0 bg-gradient-to-t from-[#082028] via-[#082028]/20 to-black/50 z-10 transition-opacity duration-500 ${
                isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`} />
              
              {/* Native HTML5 Video Stream */}
              <video
                ref={videoRef}
                src="hero-video.mp4"
                poster="assets/images/showreel-thumbnail.jpg"
                loop
                playsInline
                muted
                className="w-full h-full object-cover relative z-0 transition-transform duration-700 group-hover:scale-105"
              />

              {/* High-Prestige Central Control Overlay Trigger */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div 
                  className={`w-16 h-16 rounded-full bg-white/90 text-[#082028] flex items-center justify-center shadow-[0_10px_30px_rgba(18,233,233,0.35)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#12E9E9] ${
                    isPlaying ? 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100' : 'opacity-100 scale-100'
                  }`}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-current" />
                  ) : (
                    <Play className="w-5 h-5 fill-current ml-1" />
                  )}
                </div>
              </div>

              {/* Laser Underline Sweep Accent */}
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#12E9E9] via-[#08BDF4] to-transparent z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: The Quantum Glass Data Matrix (7-Span) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {impactStats.map((stat, idx) => {
              const StatIcon = stat.icon;
              const isLastItem = idx === impactStats.length - 1;

              return (
                <motion.div
                  key={stat.id}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className={`relative rounded-xl border border-white/[0.08] hover:border-[#12E9E9]/40 bg-[#0c2730]/40 backdrop-blur-md p-5 flex flex-col justify-between h-[140px] group transition-all duration-300 shadow-[0_10px_30px_rgba(4,16,20,0.3)] hover:bg-[#0c2730]/70 ${
                    isLastItem ? 'sm:col-span-2' : ''
                  }`}
                >
                  {/* Top Metadata Badge Line */}
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[9px] font-black tracking-[0.15em] text-[#6D8794] group-hover:text-[#12E9E9] uppercase select-none transition-colors">
                      Verified Milestone
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-[#082028]/60 border border-white/[0.06] flex items-center justify-center text-[#6D8794] group-hover:text-[#12E9E9] group-hover:border-[#12E9E9]/30 transition-all">
                      <StatIcon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Count Stat & Label */}
                  <div className="space-y-0.5 mt-auto">
                    <div className="text-3xl font-extrabold tracking-tight text-white font-sans group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#12E9E9] transition-all">
                      {stat.count}
                    </div>
                    <div className="text-xs font-bold tracking-wide text-[#6D8794] group-hover:text-white transition-colors">
                      {stat.label}
                    </div>
                  </div>

                  {/* Micro Neon Laser Base Accent */}
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#12E9E9]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
