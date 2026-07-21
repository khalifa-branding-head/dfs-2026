import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="relative overflow-hidden min-h-screen pt-24 pb-16 bg-[#F8FAFC]">
      {/* Background Ambience */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#0284C7]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#0D9488]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Header Banner */}
      <section className="relative py-16 md:py-20 border-b border-slate-200/80">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-[#0284C7] text-[10px] font-black tracking-[0.25em] uppercase">
              Dubai FinTech Summit
            </span>
            <h1 className="text-[#0F172A] text-3xl md:text-5xl font-bold mt-3 uppercase tracking-tight leading-[1.15]">
              About the Summit
            </h1>
            <p className="text-[#475569] text-base md:text-lg mt-4 font-medium leading-relaxed">
              Organized under the patronage of DIFC, mapping the future of financial services, showcasing advanced AI platforms, and establishing cross-border investment networks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Asymmetric Core Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <span className="text-[#0284C7] text-[10px] font-black tracking-[0.25em] uppercase">
                Summit Overview
              </span>
              <h2 className="text-[#0F172A] text-2xl md:text-3xl font-bold uppercase tracking-tight">
                The Premier Gathering in Global FinTech
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
                Organized under the patronage of DIFC, the Dubai FinTech Summit gathers over 8,000 global financial leaders to discuss economic growth, policy regulation, and digital asset acceleration.
              </p>
              <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
                This edition focuses on mapping the future of financial services, showcasing advanced AI platforms, and establishing cross-border investment networks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
