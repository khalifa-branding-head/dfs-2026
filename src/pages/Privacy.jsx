import React from 'react';
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div className="relative overflow-hidden min-h-screen pt-24 pb-16 bg-[#F8FAFC]">
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#0284C7]/5 rounded-full blur-[100px] pointer-events-none" />

      <section className="py-16">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="max-w-2xl mx-auto bg-white border border-slate-200/80 p-8 md:p-12 rounded-2xl shadow-[0_12px_40px_rgba(15,23,42,0.06)] relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[#0284C7] text-[10px] font-black tracking-[0.25em] uppercase">
                Governance
              </span>
              <h1 className="text-[#0F172A] text-3xl font-bold mt-3 mb-6 uppercase tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-[#475569] text-sm md:text-base leading-relaxed font-medium">
                Dubai FinTech Summit reserves the right to manage registrations under strict data compliance policies. Data processed is synchronized securely to HubSpot CRM services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
