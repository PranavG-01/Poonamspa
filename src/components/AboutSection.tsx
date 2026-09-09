import React from 'react';
import { Award, GraduationCap, Sparkles, CheckCircle2, Heart, Clock } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#FAF8F5] border-b border-[#EAE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left profile card with Poonam's photo & credentials */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Outer decorative luxury frame glow */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#D4AF37]/20 via-[#B38867]/20 to-[#9E6B65]/20 blur-sm transform -rotate-1" />
              
              <div className="relative rounded-2xl bg-white border border-[#E5DCD2] p-6 sm:p-8 shadow-sm">
                
                {/* Profile Picture Frame */}
                <div className="relative mx-auto mb-6 w-48 h-60 sm:w-56 sm:h-72 rounded-xl overflow-hidden shadow-md border-2 border-[#D4C4B5]/60 group">
                  <img
                    src="src/assets/images/poonam_profile.jpg"
                    alt="Poonam - Master Esthetician & Founder of Pure Luxury Spa"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 right-2 text-center">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-[11px] font-semibold tracking-wider text-[#FAF8F5] uppercase">
                      Poonam
                    </span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#2C2623]">Poonam</h3>
                  <p className="text-xs uppercase tracking-widest text-[#9E6B65] font-semibold mt-1">
                    Master Esthetician & Founder
                  </p>
                  <p className="text-xs text-[#7A7169] mt-0.5">
                    Pure Luxury Spa • Louisville, KY
                  </p>
                </div>

                {/* Key credentials checklist */}
                <div className="space-y-3.5 pt-4 border-t border-[#F0E8DF] text-xs text-[#4A443F]">
                  <div className="flex items-start gap-2.5">
                    <GraduationCap className="w-4 h-4 text-[#B38867] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#2C2623]">Empire Beauty School</span>
                      <p className="text-[#7A7169]">Esthetics Diploma — Louisville, Kentucky</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-[#B38867] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#2C2623]">17+ Years Industry Experience</span>
                      <p className="text-[#7A7169]">Advanced skincare, anti-aging & facial wellness</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#B38867] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#2C2623]">Pure Luxury Spa Sanctuary</span>
                      <p className="text-[#7A7169]">Private, tailored esthetic care in Louisville</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#B38867] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#2C2623]">Dedicated 1-on-1 Attention</span>
                      <p className="text-[#7A7169]">Never rushed, fully personalized sessions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right text content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2E7DC] border border-[#E0D2C5] text-[#8C5D58] text-xs font-semibold uppercase tracking-widest mb-4">
              <Heart className="w-3.5 h-3.5 text-[#B38867]" />
              <span>About Pure Luxury Spa</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2623] tracking-tight leading-tight mb-6">
              A Passion for Skin Wellness & <span className="text-[#9E6B65] italic">Artisanal Precision</span>
            </h2>

            <div className="space-y-4 text-[#5A524A] text-base leading-relaxed mb-8">
              <p>
                Welcome to <span className="font-semibold text-[#2C2623]">Pure Luxury Spa</span> (also known as Poonam's Spa). Founded by Poonam, an esthetician with over 17 years of experience and a diploma from the prestigious <span className="font-semibold text-[#2C2623]">Empire Beauty School in Louisville, Kentucky</span>.
              </p>
              <p>
                Poonam established Pure Luxury Spa to bring an elevated, serene, and result-driven skincare standard to the Louisville community. Her philosophy centers on uncompromised client satisfaction, combining clinical knowledge with soothing relaxation techniques.
              </p>
              <p>
                Whether you are visiting for an intensive clarifying or anti-aging facial, a luxurious body treatment, precision organic eyebrow threading, smooth waxing, or lash lifting, every treatment is customized specifically to your skin condition and wellness goals.
              </p>
            </div>

            {/* Core commitments grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EAE2D8]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B38867] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#2C2623]">Clinical-Grade Cleanliness</h4>
                  <p className="text-xs text-[#736B63] mt-0.5">Strict sanitation protocols and single-use hygienic tools for every guest.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B38867] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#2C2623]">Botanical Organics</h4>
                  <p className="text-xs text-[#736B63] mt-0.5">Award-winning, cruelty-free botanical scrubs, masks, and nourishing oils.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B38867] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#2C2623]">Master Threading Technique</h4>
                  <p className="text-xs text-[#736B63] mt-0.5">Specialized eyebrow architecture designed to flatter your natural facial contours.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B38867] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#2C2623]">Skin Classic Technology</h4>
                  <p className="text-xs text-[#736B63] mt-0.5">Gentle, non-invasive high frequency for skin tag and blemish reduction.</p>
                </div>
              </div>
            </div>

            {/* Direct Reservation CTA */}
            <div className="mt-8 pt-6 border-t border-[#EAE2D8] flex flex-wrap items-center gap-3.5">
              <a
                id="about-book-btn"
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#B38867] hover:bg-[#9E6B65] text-white text-xs font-semibold uppercase tracking-wider rounded shadow-sm hover:shadow transition-all active:scale-[0.98]"
              >
                <span>Book Appointment</span>
              </a>
              <a
                href={`tel:${SPA_INFO.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#D4C6B8] hover:border-[#B38867] text-[#2C2623] hover:bg-[#F2ECE4] text-xs font-semibold uppercase tracking-wider rounded transition-all"
              >
                <span>Call {SPA_INFO.phoneFormatted}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
