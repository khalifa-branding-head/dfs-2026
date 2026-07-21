import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Registration() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen pt-24 pb-16 bg-[#F8FAFC]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0284C7]/5 rounded-full blur-[120px] pointer-events-none" />

      <section className="py-16">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <span className="text-[#0284C7] text-[10px] font-black tracking-[0.25em] uppercase">
              Join DFS 2026
            </span>
            <h1 className="text-[#0F172A] text-3xl md:text-5xl font-bold mt-3 uppercase tracking-tight leading-none">
              Registration
            </h1>
          </div>

          <div className="max-w-md mx-auto bg-white border border-slate-200/80 p-8 rounded-2xl shadow-[0_12px_40px_rgba(15,23,42,0.06)] relative z-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 text-left">
                  <label className="text-xs font-bold tracking-widest text-[#0284C7] uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#0284C7] focus:bg-white rounded-xl text-[#0F172A] text-sm placeholder-slate-400 focus:outline-none transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white font-black tracking-widest text-xs uppercase rounded-xl shadow-[0_4px_15px_rgba(2,132,199,0.25)] transition-all duration-300 cursor-pointer"
                >
                  Proceed to Payment
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 flex flex-col items-center gap-4"
              >
                <div className="w-12 h-12 bg-[#0284C7]/10 border border-[#0284C7]/20 rounded-full flex items-center justify-center text-[#0284C7] text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-[#0F172A] font-bold text-lg uppercase tracking-wider">
                  Details Received
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed font-medium">
                  Thank you! An email has been sent to <span className="text-[#0F172A] font-bold">{email}</span> with your payment link.
                </p>
                <div className="hidden" aria-live="polite" id="form-status">
                  Form submission successful.
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
