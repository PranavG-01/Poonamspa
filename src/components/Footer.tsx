import React from 'react';
import { Phone, MapPin, Sparkles, Heart } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F1D1B] text-[#E0D8D0] pt-16 pb-12 border-t border-[#332E2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#332E2A]">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <div>
              <span className="font-serif-luxury text-2xl font-bold tracking-widest text-white uppercase block">
                Pure Luxury Spa
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                By Poonam • Louisville, KY
              </span>
            </div>
            <p className="text-xs text-[#B3AAA2] leading-relaxed">
              Offering over 17 years of esthetic expertise in customized facials, body therapies, precision threading, waxing, and beauty care.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Empire Beauty School Certified</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-lg font-bold text-white tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#B3AAA2]">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Poonam</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Services & Pricing</a></li>
              <li><a href="#experience" className="hover:text-[#D4AF37] transition-colors">The Experience</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Core Treatments */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-lg font-bold text-white tracking-wider">
              Popular Treatments
            </h4>
            <ul className="space-y-2 text-xs text-[#B3AAA2]">
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Signature Customized Facial</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Classic Enzyme Facial</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Dermaplane Rejuvenate Facial</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Body Scrub</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Precision Eyebrow Threading</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Lash Lift & Tint</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-lg font-bold text-white tracking-wider">
              Sanctuary Details
            </h4>
            <div className="space-y-2.5 text-xs text-[#B3AAA2]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{SPA_INFO.location}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <a href={`tel:${SPA_INFO.phone}`} className="hover:text-[#D4AF37] transition-colors font-medium">
                  {SPA_INFO.phoneFormatted}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-[#8C827A]">
                <p className="font-medium text-[#B3AAA2] mb-1">Hours (By Appointment):</p>
                <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
                <p>Sat: 9:00 AM – 4:00 PM</p>
                <p>Sun: By Appointment</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7169]">
          <p>© {new Date().getFullYear()} Pure Luxury Spa (poonamspa.com). All rights reserved.</p>
          <div className="flex items-center gap-1 text-[#8C827A]">
            <span>Crafted for timeless relaxation and healthy skin</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
