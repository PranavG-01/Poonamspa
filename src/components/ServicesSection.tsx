import React, { useState, useMemo } from 'react';
import { Search, Clock, Sparkles, Check, ArrowRight, Tag } from 'lucide-react';
import { SPA_SERVICES, SPA_INFO } from '../data/spaData';
import { ServiceCategory, SpaService } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ServiceCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Services', count: SPA_SERVICES.length },
    { id: 'facials', label: 'Facials & Skin Care', count: SPA_SERVICES.filter(s => s.category === 'facials').length },
    { id: 'body', label: 'Body Treatments', count: SPA_SERVICES.filter(s => s.category === 'body').length },
    { id: 'threading', label: 'Eyebrow & Threading', count: SPA_SERVICES.filter(s => s.category === 'threading').length },
    { id: 'waxing', label: 'Waxing Services', count: SPA_SERVICES.filter(s => s.category === 'waxing').length },
    { id: 'tinting', label: 'Lashes & Tinting', count: SPA_SERVICES.filter(s => s.category === 'tinting').length },
    { id: 'pedicure', label: 'Pedicures', count: SPA_SERVICES.filter(s => s.category === 'pedicure').length },
  ];

  const filteredServices = useMemo(() => {
    return SPA_SERVICES.filter(service => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const matchesSearch = 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.highlights?.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="services" className="py-20 bg-white border-b border-[#EAE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2E7DC] border border-[#E0D2C5] text-[#8C5D58] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B38867]" />
            <span>Pure Luxury Treatment Menu</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#2C2623] tracking-tight leading-tight mb-4">
            Comprehensive Spa & <span className="italic font-normal text-[#9E6B65]">Beauty Services</span>
          </h2>
          <p className="text-[#5A524A] text-base leading-relaxed">
            Every service is meticulously performed by master esthetician Poonam with premium organic formulations and clinical hygiene.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-10 space-y-4">
          {/* Search box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#8C827A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatments (e.g. Signature Facial, Dermaplane, Threading)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#E0D7CD] rounded-lg focus:outline-none focus:border-[#B38867] focus:ring-1 focus:ring-[#B38867] transition-all text-[#2C2623]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C827A] hover:text-[#2C2623]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#B38867] text-white shadow-sm'
                      : 'bg-[#FAF7F2] text-[#4A443F] hover:bg-[#F2ECE4] border border-[#E5DDD2]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#EAE2D8] text-[#5A524A]'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-[#FAF8F5] rounded-xl border border-dashed border-[#D4C8BC]">
            <p className="text-base text-[#5A524A] mb-2 font-medium">No services found matching "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="text-xs font-semibold text-[#B38867] underline uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service: SpaService) => (
              <div
                key={service.id}
                className="relative rounded-xl bg-[#FAF8F5] hover:bg-white border border-[#E8DFD3] hover:border-[#B38867]/50 p-6 flex flex-col justify-between transition-all duration-300 shadow-2xs hover:shadow-md group"
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-3 right-5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#9E6B65] text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                    <Sparkles className="w-3 h-3" />
                    <span>Popular</span>
                  </div>
                )}

                <div>
                  {/* Category tag & duration */}
                  <div className="flex items-center justify-between text-xs text-[#7A7169] mb-2.5">
                    <span className="inline-flex items-center gap-1 uppercase tracking-wider text-[11px] font-semibold text-[#9E6B65]">
                      <Tag className="w-3 h-3" />
                      {service.category}
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium bg-[#F0EAE0] px-2 py-0.5 rounded text-[#4A443F]">
                      <Clock className="w-3 h-3 text-[#B38867]" />
                      {service.duration}
                    </span>
                  </div>

                  {/* Title & Price */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#2C2623] group-hover:text-[#B38867] transition-colors leading-snug">
                      {service.name}
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="text-xl sm:text-2xl font-bold text-[#2C2623] font-serif-luxury">
                        ${service.price}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5A524A] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Key Highlights */}
                  {service.highlights && service.highlights.length > 0 && (
                    <div className="space-y-1.5 mb-6 pt-3 border-t border-[#EFE8DF]">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#5A524A]">
                          <Check className="w-3.5 h-3.5 text-[#B38867] shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#EAE2D8] flex items-center justify-between">
                  <span className="text-xs text-[#7A7169]">
                    1-on-1 Personalized Care
                  </span>
                  <button
                    onClick={() => onSelectServiceForBooking(service.id)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#2C2623] group-hover:bg-[#B38867] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pricing transparency callout note */}
        <div className="mt-12 p-6 rounded-xl bg-[#FAF7F2] border border-[#E5DDD2] text-center max-w-2xl mx-auto">
          <h4 className="font-serif-luxury text-xl font-bold text-[#2C2623] mb-1">
            Questions About Treatments or Custom Packages?
          </h4>
          <p className="text-xs sm:text-sm text-[#5A524A] mb-4">
            Poonam offers personalized consultations to recommend the ideal regimen for your skin goals.
          </p>
          <a
            href={`tel:${SPA_INFO.phone}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B38867] hover:text-[#9E6B65] transition-colors"
          >
            <span>Call / Text Directly: {SPA_INFO.phoneFormatted}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
