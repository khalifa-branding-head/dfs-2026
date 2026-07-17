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
    <div className="relative overflow-hidden min-h-screen pt-24 pb-16">
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-electric/5 rounded-full blur-[100px] pointer-events-none" />

      <section className="py-16">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-brand-teal text-[10px] font-bold tracking-[0.2em] uppercase">
              Help Desk
            </span>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold mt-3 uppercase leading-none">
              Frequently Asked Questions
            </h1>
          </div>

          <div className="max-w-2xl mx-auto flex flex-col gap-4 relative z-10">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#04161c]/50 border border-brand-teal/10 hover:border-brand-teal/20 rounded-xl overflow-hidden shadow-premium transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm md:text-base uppercase tracking-wider text-white hover:text-brand-teal focus:outline-none transition-colors"
                  >
                    {faq.question}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 text-brand-teal/80 ${
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
                        <div className="px-6 pb-6 pt-2 text-brand-text-muted text-sm leading-relaxed border-t border-white/5">
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
