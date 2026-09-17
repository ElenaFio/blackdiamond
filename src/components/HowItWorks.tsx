import React from 'react';
import { ClipboardList, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      number: '01',
      title: 'Request Your Quote',
      description: 'Choose the service you need, send us your details, and receive a free, personalized quote.',
      icon: ClipboardList,
      tag: 'Step One',
    },
    {
      number: '02',
      title: 'We Coordinate & Clean',
      description: 'We confirm the date that best fits your schedule, and our professional team arrives on time with 100% eco-friendly supplies.',
      icon: Sparkles,
      tag: 'Step Two',
    },
    {
      number: '03',
      title: 'Enjoy a Fresh Space',
      description: 'Relax and enjoy a spotless, refreshed, and healthier environment while we handle all the hard work.',
      icon: HeartHandshake,
      tag: 'Step Three',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#08080C] text-white relative overflow-hidden">
      {/* Subtle organic line background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FD3A85] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FD3A85]/15 border border-[#FD3A85]/30 text-[#FD3A85] text-xs font-black uppercase tracking-wider mb-4">
            <span>✦</span>
            <span>SEAMLESS 3-STEP EXPERIENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            How Black Diamond works.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            From online estimate to sparkling handover, we've refined every touchpoint to be effortless, dependable, and transparent.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-[32px] bg-[#121218] hover:bg-[#161622] border border-white/10 hover:border-[#FD3A85]/50 p-7 sm:p-8 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Step Top Row */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FD3A85]/20 to-purple-600/20 border border-[#FD3A85]/30 flex items-center justify-center text-[#FD3A85] group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-4xl font-black text-slate-700 group-hover:text-[#FD3A85] transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <span className="inline-block text-[11px] font-extrabold text-[#FD3A85] uppercase tracking-wider mb-2">
                    {step.tag}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Footer Indicator */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-[#FD3A85]" /> Petaluma Team
                  </span>
                  <span className="text-[#FD3A85] font-bold">✦ Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FD3A85] hover:bg-[#ff4e93] text-white font-extrabold text-sm sm:text-base shadow-[0_10px_30px_rgba(253,58,133,0.4)] hover:shadow-[0_14px_40px_rgba(253,58,133,0.6)] transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>Book Your Clean Now (20% OFF)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
