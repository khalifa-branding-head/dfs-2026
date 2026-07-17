import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="relative overflow-hidden min-h-screen pt-24 pb-16">
      {/* Background Ambience */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-electric/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Header Banner */}
      <section className="relative py-20 border-b border-brand-teal/10">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-brand-teal text-[10px] font-bold tracking-[0.2em] uppercase">
              Dubai FinTech Summit
            </span>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold mt-3 uppercase leading-[1.15]">
              About the Summit
            </h1>
            <p className="text-brand-text-muted text-base md:text-lg mt-4 leading-relaxed">
              Organized under the patronage of DIFC, mapping the future of financial services, showcasing advanced AI platforms, and establishing cross-border investment networks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Asymmetric Core Content */}
      <section className="py-20">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <span className="text-brand-teal text-[10px] font-bold tracking-[0.15em] uppercase">
                Summit Overview
              </span>
              <h2 className="text-white text-2xl md:text-3xl font-extrabold uppercase">
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
              <p className="text-brand-text-muted text-sm md:text-base leading-relaxed">
                Organized under the patronage of DIFC, the Dubai FinTech Summit gathers over 8,000 global financial leaders to discuss economic growth, policy regulation, and digital asset acceleration.
              </p>
              <p className="text-brand-text-muted text-sm md:text-base leading-relaxed">
                This edition focuses on mapping the future of financial services, showcasing advanced AI platforms, and establishing cross-border investment networks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
