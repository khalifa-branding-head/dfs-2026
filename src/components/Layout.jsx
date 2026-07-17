import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, page }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#031116] text-white">
      {/* Skip to Main Content Link for accessibility */}
      <a href="#main-content" className="dfs-skip-link">
        Skip to main content
      </a>

      {/* Global Header Navigation */}
      <Header currentPage={page} />

      {/* Primary Page Layout */}
      <main id="main-content" className="flex-grow">
        {children}
      </main>

      {/* Global Footer Layout */}
      <Footer />
    </div>
  );
}
