import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { name: 'HOME', href: '/index.html', key: 'home' },
  { name: 'ABOUT US', href: '/about.html', key: 'about' },
  { name: 'SPEAKERS', href: '/speakers.html', key: 'speakers' },
  { name: 'GET INVOLVED', href: '/sponsors.html', key: 'sponsors' },
  { name: 'ECOSYSTEM', href: '/exhibitors.html', key: 'exhibitors' }
];

export default function Header({ currentPage = 'home' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      if (currentScrollY > 200) {
        if (currentScrollY > lastScrollY && !isMobileMenuOpen) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' }
      }}
      animate={isHidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-md shadow-slate-900/5' 
          : 'bg-gradient-to-b from-[#041014]/90 via-[#041014]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Logo Container */}
        <a
          href="/index.html"
          className="flex items-center gap-2 group focus:outline-none min-w-[98px]"
          aria-label="Dubai FinTech Summit Homepage"
        >
          {/* DFS Brand SVG Text Logo */}
          <svg
            className={`h-10 w-auto fill-current transition-transform duration-300 group-hover:scale-[1.02] ${
              isScrolled ? 'text-[#0F172A]' : 'text-white'
            }`}
            viewBox="0 0 1916 303.4"
            aria-hidden="true"
          >
            <g>
              <polygon points="403.4,76 345,178 307.3,112 365.8,10" />
              <polygon points="175.7,293.4 234.1,191.4 271.8,257.4 213.3,359.4" />
              <polygon points="214,15.4 330,221.4 293,286.4 177,80.4" />
              <path d="M495.8,107h26.4c17.5,0,29.7,10,29.7,27.1c0,17.1-12.2,27.1-29.7,27.1h-26.4V107z M521.8,147.2 c8.8,0,14.6-5,14.6-13.1c0-8.1-5.8-13.1-14.6-13.1h-11.5v26.2H521.8z" />
              <path d="M564,107h14.5v34.8c0,8.8,5.4,13.1,13.1,13.1c7.7,0,13.1-4.3,13.1-13.1V107h14.5v34.8c0,16.8-11.8,26.4-27.6,26.4 c-15.8,0-27.6-9.6-27.6-26.4V107z" />
              <path d="M627,107h27.9c12.2,0,20.2,5.7,20.2,15.1c0,6.6-4,11.3-10.2,13.4c7.6,1.8,12.2,7.2,12.2,14.7c0,10.2-8.6,16.2-21.7,16.2 H627V107z M652.8,128.5c5,0,8.2-2.5,8.2-6c0-3.5-3.2-6-8.2-6h-11.3v12H652.8z M654.4,152.2c5.4,0,8.8-2.7,8.8-6.5 c0-3.8-3.4-6.5-8.8-6.5h-12.9v13H654.4z" />
              <path d="M707,107h14.3l21,59.4H727l-3.8-11.7h-20.9l-3.8,11.7h-14.9L707,107z M720.2,141.2l-6.7-21.2l-6.7,21.2H720.2z" />
              <path d="M752,107h14.5v59.4H752V107z" />
              <path d="M802,107h14.5v46.4h26.4v13H802V107z" />
              <path d="M848,107h14.5v59.4H848V107z" />
              <path d="M871,107h42.1v13H885.5v10.2h24.7v13h-24.7v10.2h27.6v13H871V107z" />
              <path d="M922,107h14.5v59.4H922V107z" />
              <path d="M945,107h43.5v13h-14.5v46.4H959.5v-46.4H945V107z" />
              <path d="M994,107h14.5v23.2h24.7V107h14.5v59.4h-14.5v-23.2h-24.7v23.2H994V107z" />
              <path d="M1066,107h40.4v13h-25.9v10.2h23.2v13h-23.2v23.2H1066V107z" />
              <path d="M1125,120h-16v-13h46.5v13h-16v46.4h-14.5V120z" />
              <path d="M1161,107h42.1v13h-27.6v10.2h24.7v13h-24.7v10.2h27.6v13H1161V107z" />
              <path d="M1212,107h14.3l21,59.4H1232l-3.8-11.7h-20.9l-3.8,11.7h-14.9L1212,107z M1225.2,141.2l-6.7-21.2l-6.7,21.2H1225.2z" />
              <path d="M1254,107h14.5v46.4h26.4v13H1254V107z" />
              <path d="M1302,154.2c3.4,2.2,8.6,3.8,14.1,3.8c7.4,0,10.9-3.2,10.9-7.2c0-11.9-34.8-4.5-34.8-27.1c0-10.4,9-18.2,25-18.2 c6.8,0,12.6,1.4,16.5,3.6l-4.1,11.9c-3.1-1.8-7.7-3.1-12.8-3.1c-6.8,0-10.1,2.9-10.1,6.5c0,11.3,34.8,4.1,34.8,27.1 c0,11-9,18.7-25.9,18.7c-7.4,0-14.7-1.8-18.3-4.1L1302,154.2z" />
              <path d="M1346,107h14.5v34.8c0,8.8,5.4,13.1,13.1,13.1c7.7,0,13.1-4.3,13.1-13.1V107h14.5v34.8c0,16.8-11.8,26.4-27.6,26.4 c-15.8,0-27.6-9.6-27.6-26.4V107z" />
              <path d="M1409,107h17.1l14.1,38.2l14.1-38.2h17.1v59.4h-13.8v-38.5l-12.8,34.8h-9.2l-12.8-34.8v38.5H1409V107z" />
              <path d="M1480,107h17.1l14.1,38.2l14.1-38.2h17.1v59.4h-13.8v-38.5l-12.8,34.8h-9.2l-12.8-34.8v38.5H1480V107z" />
              <path d="M1551,107h14.5v59.4H1551V107z" />
              <path d="M1574,120h-16v-13h46.5v13h-16v46.4h-14.5V120z" />
              <path d="M78.7,169h-6.8c-3.3,0-6,2.7-6,6.1s2.7,6.1,6,6.1h6.8c3.3,0,6-2.7,6-6.1S82.1,169,78.7,169" />
              <path d="M109,169h-6.8c-3.3,0-6,2.7-6,6.1s2.7,6.1,6,6.1h6.8c3.3,0,6-2.7,6-6.1S112.3,169,109,169" />
              <path d="M139.3,169h-6.8c-3.3,0-6,2.7-6,6.1s2.7,6.1,6,6.1h6.8c3.3,0,6-2.7,6-6.1s-2.7-6.1-6-6.1" />
            </g>
          </svg>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          <ul className="flex items-center gap-3">
            {NAV_LINKS.map((link) => {
              const isActive = currentPage === link.key;
              return (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="relative text-xs tracking-widest font-extrabold uppercase px-4 py-2 rounded-full transition-all duration-300 focus:outline-none flex items-center justify-center"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className={`absolute inset-0 rounded-full -z-10 ${
                          isScrolled
                            ? 'bg-[#0284C7] shadow-md shadow-[#0284C7]/20'
                            : 'bg-gradient-to-r from-[#12E9E9]/25 to-[#0284C7]/35 border border-[#12E9E9]/60 shadow-[0_0_15px_rgba(18,233,233,0.35)]'
                        }`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 transition-colors duration-300 ${
                      isActive 
                        ? isScrolled
                          ? 'text-white font-black'
                          : 'text-[#12E9E9] font-black drop-shadow-[0_0_10px_rgba(18,233,233,0.8)]'
                        : isScrolled
                          ? 'text-slate-800 hover:text-[#0284C7]'
                          : 'text-white/90 hover:text-white'
                    }`}>
                      {link.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/registration.html"
            className={`text-xs font-bold tracking-wider rounded-full px-5 py-2.5 transition-all duration-200 ${
              isScrolled
                ? 'text-slate-800 border border-slate-300 hover:bg-slate-100'
                : 'text-white border border-white/30 hover:bg-white/10 hover:border-white'
            }`}
          >
            ENQUIRE NOW
          </a>
          <a
            href="/registration.html"
            className="group flex items-center gap-1 text-xs font-bold tracking-wider bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white rounded-full px-5 py-2.5 shadow-md shadow-[#0284C7]/20 hover:shadow-lg hover:shadow-[#0284C7]/30 transition-all duration-300"
          >
            <span>BUY A PASS</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden flex items-center justify-center focus:outline-none p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-slate-800 hover:text-[#0284C7]' : 'text-white/90 hover:text-white'
          }`}
          aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl"
          >
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => {
                const isActive = currentPage === link.key;
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm font-bold tracking-wider uppercase py-2 px-4 rounded-xl transition-all ${
                      isActive
                        ? 'bg-[#0284C7] text-white'
                        : 'text-slate-800 hover:bg-slate-100 hover:text-[#0284C7]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <div className="flex items-center justify-between py-1">
                <span className="text-xs font-bold uppercase text-slate-500">Theme</span>
                <ThemeToggle />
              </div>
              <a
                href="/registration.html"
                className="w-full text-center text-xs font-bold tracking-wider text-slate-800 border border-slate-300 rounded-xl py-3 hover:bg-slate-100"
              >
                ENQUIRE NOW
              </a>
              <a
                href="/registration.html"
                className="w-full text-center text-xs font-bold tracking-wider bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white rounded-xl py-3 shadow-md"
              >
                BUY A PASS ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
