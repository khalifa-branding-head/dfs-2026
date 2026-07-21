import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`relative flex items-center gap-2 p-2 rounded-full border transition-all duration-300 ${
        isLight
          ? 'bg-slate-100 border-slate-300 text-amber-600 hover:bg-slate-200'
          : 'bg-[#0c2730] border-white/10 text-[#12E9E9] hover:border-[#12E9E9]/40'
      }`}
      aria-label={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}
      title={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.25 }}
        className="flex items-center justify-center"
      >
        {isLight ? (
          <Sun className="w-4 h-4 text-amber-500 fill-amber-500/20" />
        ) : (
          <Moon className="w-4 h-4 text-[#12E9E9] fill-[#12E9E9]/20" />
        )}
      </motion.div>
      <span className="hidden sm:inline text-[10px] font-extrabold tracking-wider uppercase pr-1.5 select-none text-current">
        {isLight ? 'Light' : 'Dark'}
      </span>
    </motion.button>
  );
}
