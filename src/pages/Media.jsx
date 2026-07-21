import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const RESOURCES = [
  { title: 'Press Release Template', file: 'Download PDF' },
];

export default function Media() {
  return (
    <div className="relative overflow-hidden min-h-screen pt-24 pb-16 bg-[#F8FAFC]">
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#0284C7]/5 rounded-full blur-[100px] pointer-events-none" />

      <section className="py-16">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-[#0284C7] text-[10px] font-black tracking-[0.25em] uppercase">
              DFS Assets
            </span>
            <h1 className="text-[#0F172A] text-3xl md:text-5xl font-bold mt-3 uppercase tracking-tight leading-none">
              Media Resources
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {RESOURCES.map((res, idx) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={idx}
                className="bg-white border border-slate-200/80 hover:border-[#0284C7]/50 p-6 rounded-2xl shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)] transition-all duration-300 flex flex-col justify-between items-center gap-6"
              >
                <h3 className="text-[#0F172A] font-bold text-base text-center uppercase tracking-wide">
                  {res.title}
                </h3>
                <a
                  href="#"
                  className="px-6 py-2.5 bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white font-black tracking-widest text-xs uppercase rounded-xl shadow-[0_4px_15px_rgba(2,132,199,0.25)] transition-all duration-300 flex items-center gap-2 focus:outline-none"
                >
                  <Download className="w-3.5 h-3.5" />
                  {res.file}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
