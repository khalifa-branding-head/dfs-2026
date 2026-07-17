import React from 'react';
import { motion } from 'framer-motion';

const POSTS = [
  { title: 'AI Meets FinTech: A New Era', meta: 'Published May 2026 | Read Time: 4 mins' },
];

export default function Blog() {
  return (
    <div className="relative overflow-hidden min-h-screen pt-24 pb-16">
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-electric/5 rounded-full blur-[100px] pointer-events-none" />

      <section className="py-16">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-brand-teal text-[10px] font-bold tracking-[0.2em] uppercase">
              DFS Insights
            </span>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold mt-3 uppercase leading-none">
              Summit Insights & News
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {POSTS.map((post, idx) => (
              <motion.article
                whileHover={{ y: -5 }}
                key={idx}
                className="bg-[#04161c]/50 border border-brand-teal/5 hover:border-brand-teal/20 p-6 rounded-xl shadow-premium transition-all duration-300"
              >
                <h3 className="text-white font-bold text-base uppercase tracking-wide">
                  {post.title}
                </h3>
                <p className="text-brand-text-muted text-xs mt-3 font-semibold">
                  {post.meta}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
