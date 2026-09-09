import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, Sparkles, Calendar } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';

interface NavbarProps {
  onOpenBooking?: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Poonam', href: '#about' },
    { label: 'Services & Pricing', href: '#services' },
    { label: 'The Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EBE3D9] transition-all">
      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex justify-between items-center gap-6">
        {/* Brand identity */}
        <a href="#home" className="flex flex-col group text-left shrink-0">
          <span className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-widest text-[#2C2623] group-hover:text-[#B38867] transition-colors uppercase">
            Pure Luxury Spa
          </span>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E6B65] font-semibold -mt-0.5">
            By Poonam • Louisville, KY
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center space-x-7 text-[14px] font-medium text-[#4A443F] mr-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#B38867] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B38867] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${SPA_INFO.phone}`}
            className="inline-flex items-center justify-center whitespace-nowrap min-w-[145px] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#2C2623] border border-[#D4C6B8] hover:border-[#B38867] hover:bg-[#F2ECE4] rounded transition-all text-center"
          >
            {SPA_INFO.phoneFormatted}
          </a>
          <a
            id="nav-book-btn"
            href="#contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#B38867] hover:bg-[#9E6B65] text-white rounded shadow-sm hover:shadow transition-all active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center space-x-2 lg:hidden">
          <a
            href="#contact"
            className="sm:hidden px-3 py-1.5 text-xs font-semibold bg-[#B38867] text-white rounded"
          >
            Book
          </a>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2C2623] hover:text-[#B38867] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#EBE3D9] px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 font-medium text-[#4A443F]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#F0EAE1] hover:text-[#B38867] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider bg-[#B38867] text-white rounded shadow block"
            >
              Book Appointment
            </a>
            <a
              href={`tel:${SPA_INFO.phone}`}
              className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider border border-[#D4C6B8] text-[#2C2623] rounded bg-white block"
            >
              Call {SPA_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
