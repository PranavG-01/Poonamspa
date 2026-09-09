import React from 'react';
import { Sparkles, Calendar, Phone, Award, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#F7F2EB] via-[#FAF8F5] to-[#FAF8F5] pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[#EAE2D8]">
      {/* Subtle luxury ambient pattern / accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#EBD8CE]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#EADCC9]/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2E7DC] border border-[#E0D2C5] text-[#8C5D58] text-xs font-semibold uppercase tracking-widest mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B38867]" />
            <span>Louisville's Premier Esthetic Sanctuary</span>
          </div>

          {/* Main heading */}
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#2C2623] leading-[1.08] mb-6">
            Pure Luxury & <span className="italic font-normal text-[#9E6B65]">Transformative</span> Care
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#5A524A] font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            Backed by <span className="font-semibold text-[#2C2623]">over 17 years of dedicated esthetic expertise</span>, Poonam offers customized facials, body therapies, precision brow threading, and luxury grooming in a peaceful, immaculate sanctuary.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              id="hero-book-btn"
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-[#B38867] hover:bg-[#9E6B65] text-white text-sm font-semibold uppercase tracking-wider rounded shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book An Appointment</span>
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-[#F7F2EB] text-[#2C2623] border border-[#D8CCBD] text-sm font-semibold uppercase tracking-wider rounded shadow-xs transition-all"
            >
              <span>View Treatment Menu</span>
              <ArrowRight className="w-4 h-4 text-[#B38867]" />
            </a>
            <a
              href={`tel:${SPA_INFO.phone}`}
              className="w-full sm:w-auto sm:hidden flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent text-[#2C2623] border border-[#B38867]/40 text-xs font-semibold uppercase tracking-wider rounded"
            >
              <Phone className="w-4 h-4 text-[#B38867]" />
              <span>Call {SPA_INFO.phoneFormatted}</span>
            </a>
          </div>

          {/* Key Trust Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-[#E8DFD3] text-left">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/70 border border-[#ECE5DC]/80 shadow-2xs">
              <div className="p-2 rounded bg-[#F4EDE4] text-[#B38867] shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#2C2623]">17+ Years</div>
                <div className="text-xs text-[#736B63] leading-snug">Esthetic Experience</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/70 border border-[#ECE5DC]/80 shadow-2xs">
              <div className="p-2 rounded bg-[#F4EDE4] text-[#B38867] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#2C2623]">Empire Beauty</div>
                <div className="text-xs text-[#736B63] leading-snug">Certified Diploma</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/70 border border-[#ECE5DC]/80 shadow-2xs">
              <div className="p-2 rounded bg-[#F4EDE4] text-[#B38867] shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#2C2623]">Botanical Care</div>
                <div className="text-xs text-[#736B63] leading-snug">Organic Formulas</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/70 border border-[#ECE5DC]/80 shadow-2xs">
              <div className="p-2 rounded bg-[#F4EDE4] text-[#B38867] shrink-0">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#2C2623]">100% Tailored</div>
                <div className="text-xs text-[#736B63] leading-snug">Personalized Regimens</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
