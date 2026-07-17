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
    <div className="relative overflow-hidden min-h-screen pt-24 pb-16">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none" />

      <section className="py-16">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <span className="text-brand-teal text-[10px] font-bold tracking-[0.2em] uppercase">
              Join DFS 2026
            </span>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold mt-3 uppercase leading-none">
              Registration
            </h1>
          </div>

          <div className="max-w-md mx-auto bg-[#04161c]/50 border border-brand-teal/10 p-8 rounded-2xl backdrop-blur-md shadow-2xl relative z-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest text-brand-teal uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    required
                    className="w-full px-4 py-3 bg-brand-dark/60 border border-white/10 focus:border-brand-teal rounded-lg text-white text-sm placeholder-white/30 focus:outline-none transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand-teal hover:bg-brand-teal/90 text-brand-dark font-extrabold tracking-widest text-xs uppercase rounded-lg shadow-[0_0_20px_rgba(18,233,233,0.25)] transition-all duration-300"
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
                <div className="w-12 h-12 bg-brand-teal/10 border border-brand-teal/20 rounded-full flex items-center justify-center text-brand-teal text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-white font-bold text-lg uppercase tracking-wider">
                  Details Received
                </h3>
                <p className="text-brand-text-muted text-sm leading-relaxed">
                  Thank you! An email has been sent to <span className="text-white font-semibold">{email}</span> with your payment link.
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
