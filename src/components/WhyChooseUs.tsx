import React, { useState } from 'react';
import { Leaf, ShieldCheck, BadgePercent, CheckCircle2, Sparkles, Check, X } from 'lucide-react';
import { WHY_CHOOSE_POINTS } from '../data/cleaningData';

export const WhyChooseUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'eco' | 'conventional'>('eco');

  const getPointIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'BadgePercent':
        return <BadgePercent className="w-5 h-5 text-[#FD3A85]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#FD3A85]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#F8F9FC] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FD3A85]/10 border border-[#FD3A85]/20 text-[#FD3A85] text-xs font-bold uppercase tracking-wider mb-4">
            <span>✦</span>
            <span>WHY CHOOSE BLACK DIAMOND</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Professional quality, <span className="text-[#FD3A85]">care you can feel.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            We combine professional cleaning techniques with eco-friendly products to care for every space and protect what matters most: your family, your pets, and the environment.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Comparison Card (Eco vs Harsh) */}
          <div className="lg:col-span-6">
            <div className="rounded-[36px] bg-[#08080C] text-white p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
              
              {/* Decorative aura */}
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#FD3A85]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FD3A85]">
                  ✦ DIRECT PRODUCT COMPARISON
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-slate-300">
                  Petaluma Clean Standard
                </span>
              </div>

              {/* Comparison Tabs */}
              <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 mb-6">
                <button
                  onClick={() => setActiveTab('eco')}
                  className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeTab === 'eco'
                      ? 'bg-[#FD3A85] text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>🌿 Black Diamond Eco</span>
                </button>
                <button
                  onClick={() => setActiveTab('conventional')}
                  className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeTab === 'conventional'
                      ? 'bg-slate-700 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>⚠️ Standard Cleaners</span>
                </button>
              </div>

              {/* Comparison Details Content */}
              {activeTab === 'eco' ? (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="p-4 rounded-2xl bg-[#121218] border border-emerald-500/30">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                      <Check className="w-4 h-4" /> 100% Botanical Plant Extracts
                    </div>
                    <p className="text-xs text-slate-300">
                      Citrus, thyme, and coconut derivatives eliminate 99.9% of bacteria without caustic fumes.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#121218] border border-emerald-500/30">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                      <Check className="w-4 h-4" /> Infant &amp; Pet Lick Safe
                    </div>
                    <p className="text-xs text-slate-300">
                      Zero harmful residues left on hardwood, tiles, toys, or dining surfaces.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#121218] border border-emerald-500/30">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                      <Check className="w-4 h-4" /> HEPA Sealed Filtration
                    </div>
                    <p className="text-xs text-slate-300">
                      Commercial vacuums capturing 99.97% of dust mites, pollen, and pet dander down to 0.3 microns.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="p-4 rounded-2xl bg-[#121218] border border-rose-500/30">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-1">
                      <X className="w-4 h-4" /> Harsh Bleach &amp; Ammonia
                    </div>
                    <p className="text-xs text-slate-300">
                      Emits pungent volatile organic compounds (VOCs) that irritate lungs and cause headaches.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#121218] border border-rose-500/30">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-1">
                      <X className="w-4 h-4" /> Synthetic Chemical Films
                    </div>
                    <p className="text-xs text-slate-300">
                      Leaves artificial residues on floors that pets lick and toddlers crawl across.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#121218] border border-rose-500/30">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-1">
                      <X className="w-4 h-4" /> Unfiltered Exhaust Fans
                    </div>
                    <p className="text-xs text-slate-300">
                      Low-grade vacuums simply recirculate fine dust and allergens back into the room atmosphere.
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom Stamp */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" /> EPA Safer Choice Standards
                </span>
                <span>Petaluma, CA</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Feature Highlight Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_CHOOSE_POINTS.map((point, index) => (
              <div
                key={index}
                className="p-6 rounded-[28px] bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#FD3A85]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#08080C] flex items-center justify-center">
                      {getPointIcon(point.icon)}
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#FD3A85]/10 text-[#FD3A85] border border-[#FD3A85]/20 uppercase">
                      {point.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {point.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {point.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-[#FD3A85]">
                  <span>✦ Verified Guarantee</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
