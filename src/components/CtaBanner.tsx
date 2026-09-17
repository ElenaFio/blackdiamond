import React from 'react';
import { Sparkles, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#08080C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* Full-width dark container (#0B0B0E) with magenta glow */}
        <div className="relative rounded-[40px] bg-[#0B0B0E] border border-white/15 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.8)]">
          
          {/* Magenta background aura & glowing gradient corners */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FD3A85]/25 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#FD3A85]/20 rounded-full blur-[140px] pointer-events-none" />

          {/* Diagonal SVG sparkle accent */}
          <div className="absolute top-6 right-8 text-[#FD3A85] text-4xl opacity-30 pointer-events-none">
            ✦
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FD3A85]/15 border border-[#FD3A85]/30 text-[#FD3A85] text-xs font-black uppercase tracking-wider mb-6">
              <span>✦</span>
              <span>SPECIAL PROMOTION • 20% OFF FIRST CLEAN</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-6">
              Ready for a spotless, <br />
              <span className="text-[#FD3A85]">toxin-free home</span>?
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl">
              Book your appointment today and receive 20% OFF your first cleaning. Experience the pristine touch of Petaluma’s favorite eco-friendly specialist team.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
              <button
                id="bottom-cta-book-btn"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FD3A85] hover:bg-[#ff4e93] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_10px_35px_rgba(253,58,133,0.5)] hover:shadow-[0_14px_45px_rgba(253,58,133,0.7)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Claim 20% OFF &amp; Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:7073184321"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/20 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#FD3A85]" />
                <span>Call (707) 318-4321</span>
              </a>
            </div>

            {/* Contact Micro-Bar */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
              <a
                href="mailto:customer@blackdiamondcleaning.us"
                className="flex items-center gap-2 hover:text-[#FD3A85] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FD3A85]" />
                <span>customer@blackdiamondcleaning.us</span>
              </a>
              <span className="hidden sm:inline text-slate-700">•</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 font-medium">Licensed, Bonded &amp; Insured</span>
              </div>
              <span className="hidden sm:inline text-slate-700">•</span>
              <span className="text-slate-300 font-medium">Petaluma, CA &amp; Sonoma County</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
