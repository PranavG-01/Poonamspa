import React from 'react';
import { Phone, MapPin, Clock, Calendar, Sparkles, MessageSquare, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';

interface BookingContactSectionProps {
  preselectedServiceId?: string;
}

export const BookingContactSection: React.FC<BookingContactSectionProps> = () => {
  return (
    <section id="contact" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2E7DC] border border-[#E0D2C5] text-[#8C5D58] text-xs font-semibold uppercase tracking-widest mb-4">
            <Calendar className="w-3.5 h-3.5 text-[#B38867]" />
            <span>Appointments & Inquiries</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#2C2623] tracking-tight leading-tight mb-4">
            Reserve Your <span className="italic font-normal text-[#9E6B65]">Sanctuary Experience</span>
          </h2>
          <p className="text-[#5A524A] text-base leading-relaxed">
            All services are provided by appointment to ensure undivided attention, pristine sanitation, and a tranquil atmosphere.
          </p>
        </div>

        {/* Centered Booking & Contact Details */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main Direct Booking Action Card */}
          <div className="bg-[#2C2623] text-[#FAF8F5] rounded-2xl p-8 sm:p-12 shadow-md relative overflow-hidden text-center sm:text-left">
            <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-[#B38867]/20 blur-2xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-xl">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold flex items-center justify-center sm:justify-start gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Direct Reservations with Poonam</span>
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
                  Call or Text to Schedule Your Visit
                </h3>
                <p className="text-sm text-[#D4C8BC] leading-relaxed">
                  Have questions regarding treatments, personalized skin advice, or want to reserve your preferred date and time? Reach out directly to Poonam.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <a
                  href={`tel:${SPA_INFO.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#B38867] hover:bg-[#9E6B65] text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow transition-all active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {SPA_INFO.phoneFormatted}</span>
                </a>
                <a
                  href={`sms:${SPA_INFO.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-[#FAF8F5] border border-white/20 font-semibold text-xs uppercase tracking-wider rounded-lg transition-all active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                  <span>Send a Text</span>
                </a>
              </div>
            </div>
          </div>

          {/* Details Grid: Location, Hours, Consultation Note */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Location Card */}
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-[#E8DFD3] shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#FAF5F0] border border-[#EADCCF] flex items-center justify-center text-[#B38867] mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-serif-luxury text-xl font-bold text-[#2C2623] mb-2">
                  Sanctuary Location
                </h4>
                <p className="text-sm font-semibold text-[#2C2623]">{SPA_INFO.name}</p>
                <p className="text-xs text-[#5A524A] mt-0.5">{SPA_INFO.location}</p>
                <p className="text-xs text-[#7A7169] mt-3 italic leading-relaxed">
                  Private sanctuary setting in Louisville, KY. Exact street suite details are provided upon appointment reservation.
                </p>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-[#E8DFD3] shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#FAF5F0] border border-[#EADCCF] flex items-center justify-center text-[#B38867] mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-serif-luxury text-xl font-bold text-[#2C2623] mb-2">
                  Spa Operating Hours
                </h4>
                <div className="space-y-3 text-xs text-[#4A443F] mt-4">
                  {SPA_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-baseline gap-4 py-1.5 border-b border-[#F4EFEA] last:border-0">
                      <span className="font-semibold text-[#2C2623] shrink-0">{h.days}</span>
                      <span className="text-[#6E655E] text-right font-medium">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service & Care Standards Card */}
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-[#E8DFD3] shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#FAF5F0] border border-[#EADCCF] flex items-center justify-center text-[#B38867] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-serif-luxury text-xl font-bold text-[#2C2623] mb-2">
                  Private Care Standards
                </h4>
                <ul className="space-y-2 text-xs text-[#5A524A] mt-3">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#B38867] font-bold">•</span>
                    <span>1-on-1 private client sessions</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#B38867] font-bold">•</span>
                    <span>Hospital-grade sanitation</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#B38867] font-bold">•</span>
                    <span>Customized treatment plans</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#B38867] font-bold">•</span>
                    <span>Same-day inquiry replies</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
