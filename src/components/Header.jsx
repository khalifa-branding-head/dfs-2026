import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { name: 'HOME', href: '/index.html', key: 'home' },
  { name: 'ABOUT US', href: '/about.html', key: 'about' },
  { name: 'SPEAKERS', href: '/speakers.html', key: 'speakers' },
  { name: 'GET INVOLVED', href: '/exhibitors.html', key: 'exhibitors' },
  { name: 'ECOSYSTEM', href: '/sponsors.html', key: 'sponsors' },
];

export default function Header({ currentPage }) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Performance-optimized scroll event channel via useMotionValueEvent
  useMotionValueEvent(scrollY, "change", (latest) => {
    // 1. Manage backing glass activation threshold
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // 2. Direct directional scroll layout switching (Hide on down, show on up)
    if (latest > 150 && latest > lastScrollY.current) {
      setIsHidden(true);
      setIsMobileMenuOpen(false); // Clean up open drop overlays automatically
    } else {
      setIsHidden(false);
    }
    lastScrollY.current = latest;
  });

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
          ? 'bg-[#082028]/75 backdrop-blur-md border-b border-[#BEC9CB]/15 py-3 shadow-lg shadow-[#082028]/40' 
          : 'bg-gradient-to-b from-[#082028]/95 via-[#082028]/50 to-transparent py-5'
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
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
            viewBox="0 0 1916 303.4"
            aria-hidden="true"
          >
            <g className="text-white">
              <path d="M359.1,1.7h30.5c29.8,0,44.9,14.9,44.9,40.9v.9c0,26.1-15.5,42-45,42h-30.4V1.7M388.8,67c14.3,0,20.6-7.5,20.6-23.1v-.9c0-15.9-6.3-22.7-20.8-22.7h-5.3v46.8h5.5,0Z" />
              <path d="M446,51.5V1.7h24v48.8c0,11.9,2.9,17.6,13.1,17.6s13.1-5.4,13.1-17.9V1.7h24.3v49.5c0,24.4-14.3,35.7-37.4,35.7s-37-11.9-37.1-35.4h0Z" />
              <path d="M536.6,1.7h37.4c19.8,0,28.2,8.9,28.2,21.9v.5c0,9.4-4.8,15.6-14.2,18.1,10.3,1.8,16.8,8,16.8,19.6v.5c0,15-9.7,23.3-30.5,23.3h-37.7V1.7h0ZM569.2,35c7.5,0,10.3-2.6,10.3-8.5v-.5c0-5.7-3.1-8.3-10.3-8.3h-9.2v17.3h9.2ZM570,69.4c7.6,0,11.1-3.5,11.1-9.7v-.5c0-6.3-3.4-9.6-11.8-9.6h-9.3v19.8h10Z" />
              <path d="M635.8,1.7h31.1l26.6,83.8h-25.4l-4.4-15.6h-27.8l-4.4,15.6h-22.4L635.8,1.7ZM640.4,53.4h18.4l-9.1-32.2-9.3,32.2h0Z" />
              <rect x="703.9" y="1.7" width="24.3" height="83.8" />
              <polyline points="359.1 109.1 415.7 109.1 415.7 127.7 383.3 127.7 383.3 145.6 409.2 145.6 409.2 163.3 383.3 163.3 383.3 192.9 359.1 192.9 359.1 109.1" />
              <rect x="427.9" y="109.1" width="24.3" height="83.8" />
              <polygon points="469.1 109.1 496.2 109.1 523 156.3 523 109.1 544 109.1 544 192.9 520.8 192.9 490.2 140.3 490.2 192.9 469.1 192.9 469.1 109.1" />
              <polygon points="576.7 127.6 555 127.6 555 109.1 622.5 109.1 622.5 127.6 600.8 127.6 600.8 192.9 576.7 192.9 576.7 127.6" />
              <polygon points="633.5 109.1 691.4 109.1 691.4 127.6 657.4 127.6 657.4 142 684.5 142 684.5 159.1 657.4 159.1 657.4 174.4 693.3 174.4 693.3 192.9 633.5 192.9 633.5 109.1" />
              <path d="M700.2,151.5v-.9c0-25.8,18.3-42.8,42.8-42.8s36.9,10.1,38.9,32.2h-24.7c-.9-8.6-5.6-13.2-14.1-13.2s-17.6,8.4-17.6,23.7v.9c0,15.1,6.5,23.7,17.9,23.7s14.4-4.4,15.6-13.7h23.9c-1.6,21.7-17.3,32.9-39,32.9s-43.7-17.1-43.7-42.8h0Z" />
              <polygon points="793.9 109.1 818.1 109.1 818.1 141.1 845.6 141.1 845.6 109.1 869.6 109.1 869.6 192.9 845.6 192.9 845.6 159.8 818.1 159.8 818.1 192.9 793.9 192.9 793.9 109.1" />
              <path d="M353.7,273.7h22.9c.6,6,3.3,10.9,13.2,10.9s10.8-3.4,10.8-8.3-3.1-6.6-13.2-8.1c-23.7-2.8-31.7-9.8-31.7-26.7s12.4-26.1,32.5-26.1,31.5,8.4,33.1,26.1h-22.3c-.8-6-4.2-9-10.8-9s-9.7,2.9-9.7,7.1,2.6,6.8,13,8.2c21.2,2.3,32.1,7.9,32.1,26s-12.2,27.9-33.8,27.9-35.4-9.9-36.1-28h0Z" />
              <path d="M433.9,266.3v-49.8h24v48.7c0,11.9,2.9,17.6,13.1,17.6s13.1-5.4,13.1-17.9v-48.4h24.3v49.5c0,24.4-14.3,35.7-37.4,35.7s-37.1-11.9-37.1-35.4h0Z" />
              <polygon points="524.4 216.5 555.7 216.5 571.8 261.1 587.8 216.5 618.5 216.5 618.5 300.3 594.6 300.3 594.6 248.2 574.1 300.3 566.1 300.3 545.8 248.2 545.8 300.3 524.4 300.3 524.4 216.5" />
              <polygon points="635.3 216.5 666.6 216.5 682.6 261.1 698.7 216.5 729.4 216.5 729.4 300.3 705.4 300.3 705.4 248.2 684.9 300.3 677 300.3 656.7 248.2 656.7 300.3 635.2 300.3 635.2 216.5 635.3 216.5" />
              <rect x="746.6" y="216.5" width="24.3" height="83.8" />
              <polygon points="803.9 235 782.2 235 782.2 216.5 849.7 216.5 849.7 235 828 235 828 300.3 803.8 300.3 803.8 235 803.9 235" />
              <path d="M149.2,64.8h4.1c3.3,0,6-2.7,6-6s-2.7-6-6-6h-4.1c-3.3,0-6,2.7-6,6s2.7,6,6,6" />
              <path d="M127.8,87.9h47.5c3.3,0,6-2.7,6-6s-2.7-6-6-6h-47.5c-3.3,0-6,2.7-6,6s2.7,6,6,6" />
              <path d="M198.5,99h-94.9c-3.3,0-6,2.7-6,6s2.7,6,6,6h94.9c3.3,0,6-2.7,6-6s-2.7-6-6-6" />
              <path d="M222.6,122.2h-20.7c-3.3,0-6,2.7-6,6.1s2.7,6.1,6,6.1h20.7c3.3,0,6-2.7,6-6.1s-2.7-6.1-6-6.1" />
              <path d="M244.2,145.7h-56.9c-3.3,0-6,2.7-6,6.1s2.7,6.1,6,6.1h56.9c3.3,0,6-2.7,6-6.1s-2.7-6.1-6-6.1" />
              <path d="M222.4,169h-64.8c-3.3,0-6,2.7-6,6.1s2.7,6.1,6,6.1h64.8c3.3,0,6-2.7,6-6.1s-2.7-6.1-6-6.1" />
              <path d="M79.5,134.7h35.5c3.3,0,6-2.7,6-6.1s-2.7-6.1-6-6.1h-35.5c-3.3,0-6,2.7-6,6.1s2.7,6.1,6,6.1" />
              <path d="M115,157.8c3.3,0,6-2.7,6-6.1s-2.7-6.1-6-6.1h-56.8c-3.3,0-6,2.7-6,6.1s2.7,6.1,6,6.1h56.8Z" />
              <path d="M115,169h-35.5c-3.3,0-6,2.7-6,6.1s2.7,6.1,6,6.1h35.5c-3.3,0-6,2.7-6,6.1s-2.7-6.1-6-6.1" />
              <path d="M174.7,215.7h-46.8c-3.3,0-5.9,2.7-5.9,6s2.7,6,5.9,6h46.8c3.3,0,5.9-2.7,5.9-6s-2.6-6-5.9-6" />
              <path d="M198.5,192.6h-95c-3.3,0-5.9,2.7-5.9,6s2.7,6,5.9,6h95c3.3,0,5.9-2.7,5.9-6s-2.6-6-5.9-6" />
              <path d="M152.6,238.7h-3.1c-3.3,0-5.9,2.7-5.9,6s2.7,6,5.9,6h3.1c3.3,0,5.9-2.7,5.9-6s-2.7-6-5.9-6" />
              <polygon points="300.9 144.9 157.8 1.7 157.8 27.3 275.3 144.9 300.9 144.9" />
              <polygon points="1.2 158.1 144.6 301.7 144.6 276.1 26.7 158.1 1.2 158.1" />
              <polygon points="144.6 27.3 144.6 1.7 1.5 144.9 27.1 144.9 144.6 27.3" />
              <polygon points="157.8 276.1 157.8 301.7 301.2 158.1 275.7 158.1 157.8 276.1" />
            </g>
            <g className="text-[#12E9E9] fill-current">
              <path d="M185.1,122.5h-52.6c-3.3,0-6,2.7-6,6.1s2.7,6.1,6,6.1h52.6c3.3,0,6-2.7,6-6.1s-2.7-6.1-6-6.1" />
              <path d="M169.4,145.7h-36.8c-3.3,0-6,2.7-6,6.1s2.7,6.1,6,6.1h36.8c3.3,0,6-2.7,6-6.1s-2.7-6.1-6-6.1" />
              <path d="M139.3,169h-6.8c-3.3,0-6,2.7-6,6.1s2.7,6.1,6,6.1h6.8c3.3,0,6-2.7,6-6.1s-2.7-6.1-6-6.1" />
            </g>
          </svg>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          <ul className="flex items-center gap-4">
            {NAV_LINKS.map((link) => {
              const isActive = currentPage === link.key;
              return (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="relative text-xs tracking-widest font-bold uppercase px-4 py-2.5 rounded-full transition-colors duration-300 focus:outline-none flex items-center justify-center"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className={`absolute inset-0 rounded-full -z-10 transition-colors duration-300 ${
                          isScrolled
                            ? 'bg-[#0284C7]/15 border border-[#0284C7]/35 shadow-sm'
                            : 'bg-[#12E9E9]/25 border border-[#12E9E9]/60 shadow-[0_0_18px_rgba(18,233,233,0.35)]'
                        }`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 transition-colors duration-300 ${
                      isActive 
                        ? isScrolled
                          ? 'text-[#0284C7] font-black'
                          : 'text-[#12E9E9] font-black drop-shadow-[0_0_10px_rgba(18,233,233,0.5)]' 
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
            className="text-xs font-semibold tracking-wider text-white border border-[#BEC9CB]/30 rounded-full px-5 py-2.5 hover:bg-white/5 hover:border-white transition-all duration-200"
          >
            ENQUIRE NOW
          </a>
          <a
            href="/registration.html"
            className="group flex items-center gap-1 text-xs font-bold tracking-wider bg-[#12E9E9] text-[#082028] rounded-full px-5 py-2.5 shadow-md shadow-[#12E9E9]/20 hover:bg-[#08BDF4] hover:text-white transition-all duration-300"
          >
            BUY A PASS
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#082028] border-b border-[#BEC9CB]/15 px-6 py-8 flex flex-col gap-6 lg:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => {
                const isActive = currentPage === link.key;
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm font-semibold tracking-wider py-2 border-b border-white/5 transition-colors ${
                      isActive ? 'text-[#12E9E9]' : 'text-[#6D8794] hover:text-[#12E9E9]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
            <div className="flex flex-col gap-3 pt-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-xs font-semibold text-[#6D8794] uppercase tracking-wider">Appearance Theme</span>
                <ThemeToggle />
              </div>
              <a 
                href="/registration.html" 
                className="w-full text-center text-xs font-semibold tracking-wider text-white border border-[#BEC9CB]/30 rounded-full py-3 hover:bg-white/5 transition-all"
              >
                ENQUIRE NOW
              </a>
              <a 
                href="/registration.html" 
                className="w-full text-center text-xs font-bold tracking-wider bg-[#12E9E9] text-[#082028] rounded-full py-3 hover:bg-[#08BDF4] hover:text-white transition-all"
              >
                BUY A PASS
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
