import React from 'react';
import { Sparkles, Leaf, Shield, UserCheck, Droplets, Gem } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      icon: Leaf,
      title: 'Botanical Organics',
      description: 'We feature farm-grown, cruelty-free botanicals, natural fruit enzymes, and whipped body polishes that nourish skin deeply.'
    },
    {
      icon: Gem,
      title: 'Diamond Microderm & Dermaplane',
      description: 'Advanced resurfacing techniques that eliminate dead cell layers and peach fuzz to reveal luminous, glass-smooth skin.'
    },
    {
      icon: Shield,
      title: 'Skin Classic Precision Tech',
      description: 'Award-winning direct high frequency to gently eliminate minor skin irregularities and skin tags with minimal downtime.'
    },
    {
      icon: Droplets,
      title: 'Hydrodermabrasion & Peels',
      description: 'Deep infusion of hyaluronic acid, peptides, and botanical nutrients for plump, ultra-hydrated, vibrant skin texture.'
    },
    {
      icon: Sparkles,
      title: 'Artisanal Brow Threading',
      description: 'Using pure cotton thread, Poonam sculpts pristine arches that harmonize with facial bone structure and brow growth patterns.'
    },
    {
      icon: UserCheck,
      title: 'Personalized 1-on-1 Sessions',
      description: 'Never rushed or double-booked. Every appointment is a tranquil, dedicated escape created solely for your rejuvenation.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#FAF8F5] border-b border-[#EAE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2E7DC] border border-[#E0D2C5] text-[#8C5D58] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B38867]" />
            <span>The Pure Luxury Difference</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#2C2623] tracking-tight leading-tight mb-4">
            A Higher Standard of <span className="italic font-normal text-[#9E6B65]">Care & Radiance</span>
          </h2>
          <p className="text-[#5A524A] text-base leading-relaxed">
            Every detail at Pure Luxury Spa is designed to ensure you leave feeling revitalized, confident, and deeply relaxed.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-7 border border-[#E8DFD3] shadow-2xs hover:shadow-sm hover:border-[#B38867]/40 transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-[#FAF5F0] border border-[#EADCCF] flex items-center justify-center text-[#B38867] mb-5">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#2C2623] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5A524A] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="mt-16 rounded-2xl bg-[#2C2623] text-[#FAF8F5] p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-[#B38867]/20 blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              Visit Us in Louisville, KY
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-4xl font-bold mt-2 mb-4 leading-snug">
              Experience the Touch of a 17-Year Master Esthetician
            </h3>
            <p className="text-sm sm:text-base text-[#D4C8BC] leading-relaxed mb-6">
              Appointments are reserved to give each guest exclusive, uninterrupted attention. Reserve your spot today or call for consultation.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-[#B38867] hover:bg-[#9E6B65] text-white text-xs font-semibold uppercase tracking-wider rounded shadow transition-all"
              >
                Request Appointment
              </a>
              <a
                href="tel:559-284-7298"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-[#FAF8F5] border border-white/20 text-xs font-semibold uppercase tracking-wider rounded transition-all"
              >
                Call (559) 284-7298
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
