import React from 'react';

const FOOTER_SECTIONS = [
  {
    title: 'Summit Info',
    links: [
      { name: 'About the Event', href: '/about.html' },
      { name: 'Venue & Location', href: '/venue.html' },
      { name: 'Corporate Partners', href: '/sponsors.html' },
    ],
  },
  {
    title: 'Participate',
    links: [
      { name: 'Book delegate pass', href: '/registration.html' },
      { name: 'Exhibition enquiry', href: '/exhibitors.html' },
      { name: 'Apply as speaker', href: '/speakers.html' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Summit news', href: '/blog.html' },
      { name: 'Frequently Asked Questions', href: '/faqs.html' },
      { name: 'Brochure downloads', href: '/downloads.html' },
    ],
  },
  {
    title: 'Governance',
    links: [
      { name: 'Privacy Policy', href: '/privacy.html' },
      { name: 'Terms of Service', href: '/terms.html' },
      { name: 'Cookie configurations', href: '/cookies.html' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark/95 border-t border-brand-teal/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-96 bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h4 className="text-xs font-bold tracking-widest text-brand-teal uppercase border-b border-brand-teal/20 pb-2">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-brand-text-muted hover:text-white transition-colors duration-200 block py-1"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-brand-text-muted text-center md:text-left">
            &copy; 2026 Dubai FinTech Summit. All rights reserved.
          </p>

          {/* Partner Badges */}
          <div className="flex items-center gap-4">
            <img
              src="organized-by-trescon.svg"
              alt="Organised by DIFC"
              className="h-5 brightness-0 invert opacity-80"
              loading="lazy"
            />
            <div className="w-[1px] height-[14px] bg-white/20 self-stretch" />
            <img
              src="part-of.svg"
              alt="Part of Dubai Future Finance Week"
              className="h-5 brightness-0 invert opacity-80"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
