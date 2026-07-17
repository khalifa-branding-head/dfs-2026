import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const RESOURCES = [
  { title: 'Press Release Template', file: 'Download PDF' },
];

export default function Media() {
  return (
    <div className="relative overflow-hidden min-h-screen pt-24 pb-16">
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none" />

      <section className="py-16">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-brand-teal text-[10px] font-bold tracking-[0.2em] uppercase">
              DFS Assets
            </span>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold mt-3 uppercase leading-none">
              Media Resources
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {RESOURCES.map((res, idx) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={idx}
                className="bg-[#04161c]/50 border border-brand-teal/5 hover:border-brand-teal/20 p-6 rounded-xl shadow-premium transition-all duration-300 flex flex-col justify-between items-center gap-6"
              >
                <h3 className="text-white font-bold text-base text-center uppercase tracking-wide">
                  {res.title}
                </h3>
                <a
                  href="#"
                  className="px-6 py-2.5 bg-brand-teal hover:bg-brand-teal/90 text-brand-dark font-extrabold tracking-widest text-xs uppercase rounded-lg transition-all duration-300 flex items-center gap-2 focus:outline-none"
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
