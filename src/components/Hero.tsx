import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Star, Calendar, CheckCircle } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigateToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onNavigateToCalculator }) => {
  return (
    <section className="relative min-h-[90vh] pt-32 sm:pt-40 pb-16 lg:pb-24 overflow-hidden flex items-center">
      {/* Dynamic Curved Magenta Gradient Background and Radial Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Pink Glow Orbs */}
        <div className="absolute -top-32 -left-20 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-[#FD3A85]/15 rounded-full blur-[120px] -z-10" />
        <div className="absolute top-1/3 -right-20 w-[420px] h-[420px] bg-[#FD3A85]/20 rounded-full blur-[140px] -z-10" />
        <div className="absolute -bottom-20 left-1/3 w-[360px] h-[360px] bg-purple-900/20 rounded-full blur-[130px] -z-10" />

        {/* SVG Dynamic Organic Curved Diagonal Accent Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-25"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 200 C 300 100, 700 450, 1550 150"
            stroke="url(#gradient-line-1)"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
          <path
            d="M-50 450 C 450 350, 900 700, 1600 400"
            stroke="url(#gradient-line-2)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="gradient-line-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FD3A85" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="gradient-line-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FD3A85" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#FD3A85" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Freshify Headline, Tag, & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tag Badge */}
            <div
              id="hero-tag-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FD3A85]/10 border border-[#FD3A85]/30 mb-6 backdrop-blur-md shadow-sm"
            >
              <span className="text-[#FD3A85] text-xs sm:text-[13px] font-extrabold tracking-wider uppercase">
                ✦ ✦ CLEANING SERVICES COMPANY ● PETALUMA, CA
              </span>
            </div>

            {/* Headline H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              Residential &amp; <br />
              commercial{' '}
              <span className="text-[#FD3A85] relative inline-block">
                cleaning
                <span className="absolute left-0 bottom-1 w-full h-[6px] bg-[#FD3A85]/40 rounded-full -z-10"></span>
              </span>{' '}
              <br />
              tailored services.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl mb-8">
              Eco-friendly, 100% non-toxic cleaning crafted for healthy homes, happy pets, and spotless workplaces across Petaluma and all of Sonoma County.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              {/* Primary: Solid Magenta Pill */}
              <button
                id="hero-get-quote-cta"
                onClick={onNavigateToCalculator}
                className="group px-7 py-3.5 sm:py-4 rounded-full bg-[#FD3A85] hover:bg-[#ff4e93] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_10px_30px_rgba(253,58,133,0.4)] hover:shadow-[0_14px_40px_rgba(253,58,133,0.6)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Get A Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary: Dark Pill with pink outline */}
              <button
                id="hero-book-service-cta"
                onClick={onOpenBooking}
                className="px-6 py-3.5 sm:py-4 rounded-full bg-[#16161F] hover:bg-[#20202d] text-slate-200 hover:text-white font-bold text-sm sm:text-base border border-[#FD3A85]/40 hover:border-[#FD3A85] flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#FD3A85]" />
                <span>Book A Service</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#FD3A85]/20 text-[#FD3A85] font-extrabold">
                  -20%
                </span>
              </button>
            </div>

            {/* Social Proof Micro-Bar */}
            <div className="flex flex-col xs:flex-row items-start xs:items-center gap-4 pt-6 border-t border-white/10 w-full">
              {/* 4 Overlapping Circular User Avatars */}
              <div className="flex items-center -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Petaluma Client"
                  className="w-10 h-10 rounded-full border-2 border-[#08080C] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Petaluma Client"
                  className="w-10 h-10 rounded-full border-2 border-[#08080C] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                  alt="Petaluma Client"
                  className="w-10 h-10 rounded-full border-2 border-[#08080C] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                  alt="Petaluma Client"
                  className="w-10 h-10 rounded-full border-2 border-[#08080C] object-cover"
                />
                <div className="w-10 h-10 rounded-full border-2 border-[#08080C] bg-[#FD3A85] flex items-center justify-center text-white text-xs font-black">
                  ✦
                </div>
              </div>

              {/* Star Rating Text */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FD3A85] text-[#FD3A85]" />
                  ))}
                  <span className="text-white text-xs font-bold ml-1.5 tracking-tight">5.0 / 5.0</span>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  RATED 5.0 OUT OF 5.0 (500+ Homes Cleaned in Sonoma County)
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Rounded Portrait Hero Card with Floating Glass Badges */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Outer Glow Halo */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#FD3A85] to-purple-600 rounded-[40px] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 -z-10" />

            {/* Main Portrait Container */}
            <div className="relative rounded-[36px] bg-[#121218] border border-white/15 p-3.5 shadow-2xl overflow-hidden">
              <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] sm:aspect-[3/3.8] bg-[#16161F]">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                  alt="Black Diamond Cleaning Specialist"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080C]/90 via-transparent to-transparent" />

                {/* Floating Glass Pill Badge #1 - Eco & Pet Safe */}
                <div className="absolute top-5 left-4 right-4 sm:right-auto sm:left-4 px-4 py-2.5 rounded-full bg-[#08080C]/85 backdrop-blur-md border border-white/20 shadow-xl flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                    🌿
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white leading-tight">100% Non-Toxic</span>
                    <span className="text-[10px] text-emerald-300 font-medium">Pet &amp; Infant Certified Safe</span>
                  </div>
                </div>

                {/* Floating Glass Pill Badge #2 - 20% OFF Applied */}
                <div className="absolute bottom-5 right-4 left-4 sm:left-auto sm:right-4 px-4 py-3 rounded-2xl bg-[#08080C]/90 backdrop-blur-lg border border-[#FD3A85]/50 shadow-[0_8px_30px_rgba(253,58,133,0.3)] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FD3A85] to-[#E84393] flex items-center justify-center text-white shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-extrabold text-[#FD3A85] tracking-wider uppercase">
                        ✦ 20% OFF APPLIED
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-200">
                      Sonoma New Client Special
                    </span>
                  </div>
                </div>

                {/* Micro Guarantee Overlay Tag */}
                <div className="absolute bottom-24 left-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FD3A85]" />
                  <span>Licensed &amp; Bonded</span>
                </div>
              </div>
            </div>

            {/* Decorative Sparkles Around Card */}
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#FD3A85]/20 text-[#FD3A85] flex items-center justify-center text-lg font-black animate-pulse">
              ✦
            </div>
            <div className="absolute -bottom-4 -left-4 w-7 h-7 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-black">
              ✦
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
