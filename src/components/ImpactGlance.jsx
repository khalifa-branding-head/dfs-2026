import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Users, BarChart3, Presentation, Globe2, Building2 } from 'lucide-react';

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
    <section className="w-full bg-[#082028] py-28 px-6 md:px-12 relative font-sans antialiased overflow-hidden selection:bg-[#12E9E9]/20">
      {/* Precision Visual Backing Accent Overlays */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#12E9E9]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* ==================== 1. ELITE SECTION HEADER BLOCK ==================== */}
        <div className="max-w-2xl text-left space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#12E9E9]/10 text-[#12E9E9] text-[10px] font-black tracking-[0.25em] px-4 py-1.5 rounded-md uppercase">
            Summit Metrics
          </div>
          <h2 className="text-white text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Impact at a Glance
          </h2>
          <p className="text-sm md:text-base text-[#6D8794] font-medium max-w-xl">
            A real-time data look at the structural records, milestones, and institutional parameters of our global financial event.
          </p>
        </div>

        {/* ==================== 2. ASYMMETRIC GRID CONFIGURATION ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: Cinematic Native Video Engine Player Container (5-Span) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full aspect-video lg:aspect-[4/3] rounded-2xl border border-white/[0.08] bg-[#0c2730]/40 backdrop-blur-xl relative overflow-hidden shadow-[0_30px_60px_rgba(4,16,20,0.5)] group cursor-pointer"
              onClick={toggleVideoPlayback}
            >
              {/* Overlay Ambient Matte Mask Layer — Fades out dynamically when playing to give full visual exposure */}
              <div className={`absolute inset-0 bg-gradient-to-t from-[#082028] via-transparent to-black/40 z-10 transition-opacity duration-500 ${
                isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`} />
              
              {/* High-Performance Native HTML5 Video Stream Pipeline */}
              <video
                ref={videoRef}
                src="hero-video.mp4"
                poster="assets/images/showreel-thumbnail.jpg" // Local high-res fallback poster asset
                loop
                playsInline
                muted // Enforces browser autoplay permission configurations cleanly
                className="w-full h-full object-cover relative z-0 transition-transform duration-700 group-hover:scale-102"
              />

              {/* High-Prestige Central Control Overlay Trigger */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div 
                  className={`w-16 h-16 rounded-full bg-white text-[#082028] flex items-center justify-center shadow-[0_10px_30px_rgba(18,233,233,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#12E9E9] ${
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

              {/* Lower Edge Laser Trim Accent Line */}
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-[#12E9E9] to-transparent z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: The Quantum Glass Data Matrix (7-Span) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {impactStats.map((stat, idx) => {
              const StatIcon = stat.icon;
              const isLastItem = idx === impactStats.length - 1;

              return (
                <div
                  key={stat.id}
                  className={`relative rounded-xl border border-white/[0.05] bg-[#0c2730]/30 backdrop-blur-md p-6 flex flex-col justify-between h-[152px] group transition-all duration-300 hover:border-[#12E9E9]/20 hover:bg-[#0c2730]/50 ${
                    isLastItem ? 'sm:col-span-2' : ''
                  }`}
                >
                  {/* Upper Information Metadata Label Line */}
                  <div className="flex items-center justify-between w-full opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[9px] font-black tracking-[0.15em] text-[#6D8794] group-hover:text-white uppercase select-none">
                      Verified Milestone
                    </span>
                    <StatIcon className="w-3.5 h-3.5 text-[#6D8794] group-hover:text-[#12E9E9] transition-colors" />
                  </div>

                  {/* Numerical Metric & Description Layout */}
                  <div className="space-y-1 mt-auto">
                    <div className="text-3xl md:text-4xl font-semibold tracking-tight text-white font-sans">
                      {stat.count}
                    </div>
                    <div className="text-xs font-bold tracking-wide text-[#6D8794] group-hover:text-white transition-colors">
                      {stat.label}
                    </div>
                  </div>

                  {/* Micro Neon Base Border Track Accent */}
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#12E9E9]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
