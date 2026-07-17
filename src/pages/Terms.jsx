import React from 'react';
import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="relative overflow-hidden min-h-screen pt-24 pb-16">
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none" />

      <section className="py-16">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="max-w-2xl mx-auto bg-[#04161c]/50 border border-brand-teal/10 p-8 md:p-12 rounded-2xl backdrop-blur-md shadow-2xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-brand-teal text-[10px] font-bold tracking-[0.2em] uppercase">
                Governance
              </span>
              <h1 className="text-white text-3xl font-extrabold mt-3 mb-6 uppercase tracking-wide">
                Terms of Service
              </h1>
              <p className="text-brand-text-muted text-sm md:text-base leading-relaxed">
                Delegate registrations are subject to ticketholder validation checkposts. Re-selling passes outside authorized platforms is prohibited.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
