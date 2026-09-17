import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, Phone } from 'lucide-react';
import { FAQS } from '../data/cleaningData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('f1');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFaqs =
    activeCategory === 'all'
      ? FAQS
      : FAQS.filter((f) => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#08080C] text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FD3A85]/15 border border-[#FD3A85]/30 text-[#FD3A85] text-xs font-black uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>GOT QUESTIONS?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Frequently asked questions.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Everything you need to know about our non-toxic cleaning protocols, 20% discount offer, and Petaluma scheduling.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 p-1 rounded-2xl bg-[#121218] border border-white/10">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'eco', label: 'Eco & Pet Safety' },
              { id: 'pricing', label: 'Pricing & 20% OFF' },
              { id: 'general', label: 'Supplies & Access' },
              { id: 'scheduling', label: 'Service Areas' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#FD3A85] text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-[24px] transition-all duration-200 border ${
                  isOpen
                    ? 'bg-[#121218] border-[#FD3A85]/40 shadow-lg shadow-[#FD3A85]/5'
                    : 'bg-[#121218]/60 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#FD3A85] text-white rotate-180'
                        : 'bg-white/10 text-slate-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Contact Box */}
        <div className="mt-12 p-6 rounded-3xl bg-[#121218] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FD3A85]/20 text-[#FD3A85] flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Have a specific question not covered here?
              </div>
              <div className="text-xs text-slate-400">
                Call our team directly for a friendly immediate response
              </div>
            </div>
          </div>
          <a
            href="tel:7073184321"
            className="px-5 py-2.5 rounded-full bg-[#FD3A85] hover:bg-[#ff4e93] text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            Call (707) 318-4321
          </a>
        </div>

        </div>
      </div>
    </section>
  );
};
