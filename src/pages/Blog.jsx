import React from 'react';
import { motion } from 'framer-motion';

const POSTS = [
  { title: 'AI Meets FinTech: A New Era', meta: 'Published May 2026 | Read Time: 4 mins' },
];

export default function Blog() {
  return (
    <div className="relative overflow-hidden min-h-screen pt-24 pb-16 bg-[#F8FAFC]">
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#0284C7]/5 rounded-full blur-[100px] pointer-events-none" />

      <section className="py-16">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-[#0284C7] text-[10px] font-black tracking-[0.25em] uppercase">
              DFS Insights
            </span>
            <h1 className="text-[#0F172A] text-3xl md:text-5xl font-bold mt-3 uppercase tracking-tight leading-none">
              Summit Insights & News
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {POSTS.map((post, idx) => (
              <motion.article
                whileHover={{ y: -5 }}
                key={idx}
                className="bg-white border border-slate-200/80 hover:border-[#0284C7]/50 p-6 rounded-2xl shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)] transition-all duration-300"
              >
                <h3 className="text-[#0F172A] font-bold text-base uppercase tracking-wide">
                  {post.title}
                </h3>
                <p className="text-[#475569] text-xs mt-3 font-medium">
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
