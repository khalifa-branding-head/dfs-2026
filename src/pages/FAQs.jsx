import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS_DATA = [
  {
    question: 'What are the event dates?',
    answer: 'The Dubai FinTech Summit 2026 takes place on May 6 and May 7 at the Madinat Jumeirah, Dubai.',
  },
];

export default function FAQs() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="relative overflow-hidden min-h-screen pt-24 pb-16 bg-[#F8FAFC]">
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#0284C7]/5 rounded-full blur-[100px] pointer-events-none" />

      <section className="py-16">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-[#0284C7] text-[10px] font-black tracking-[0.25em] uppercase">
              Help Desk
            </span>
            <h1 className="text-[#0F172A] text-3xl md:text-5xl font-bold mt-3 uppercase tracking-tight leading-none">
              Frequently Asked Questions
            </h1>
          </div>

          <div className="max-w-2xl mx-auto flex flex-col gap-4 relative z-10">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 hover:border-[#0284C7]/50 rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm md:text-base uppercase tracking-wider text-[#0F172A] hover:text-[#0284C7] focus:outline-none transition-colors cursor-pointer"
                  >
                    {faq.question}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 text-[#0284C7] ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-2 text-[#475569] font-medium text-sm leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
