/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { BookingContactSection } from './components/BookingContactSection';
import { Footer } from './components/Footer';
import { Phone, Calendar } from 'lucide-react';
import { SPA_INFO } from './data/spaData';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleSelectServiceFromMenu = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C2623] relative">
      {/* Top sticky navigation */}
      <Navbar />

      {/* Main content sections */}
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ServicesSection onSelectServiceForBooking={handleSelectServiceFromMenu} />
        <ExperienceSection />
        <BookingContactSection preselectedServiceId={selectedServiceId} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mobile Floating Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#EAE2D8] p-3 flex items-center gap-2 shadow-lg">
        <a
          href={`tel:${SPA_INFO.phone}`}
          className="flex-1 py-3 px-3 bg-[#FAF8F5] border border-[#D4C6B8] hover:bg-[#F2ECE4] text-[#2C2623] text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 shadow-2xs"
        >
          <Phone className="w-4 h-4 text-[#B38867]" />
          <span>Call Now</span>
        </a>
        <a
          href="#contact"
          className="flex-1 py-3 px-3 bg-[#B38867] hover:bg-[#9E6B65] text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 shadow-md active:scale-[0.98]"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </a>
      </div>
    </div>
  );
}

