import React, { useState } from 'react';
import { Sparkles, Check, Clock, ArrowRight, Shield, Home, Truck, Building2, HardHat, Key } from 'lucide-react';
import { SERVICES_DATA } from '../data/cleaningData';
import { ServiceCategory, ServiceItem } from '../types';

interface ServicesCatalogProps {
  onSelectServiceForQuote: (service: ServiceItem) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({
  onSelectServiceForQuote,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const filterTabs: { id: ServiceCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Services', count: SERVICES_DATA.length },
    {
      id: 'residential',
      label: 'Residential Cleaning',
      count: SERVICES_DATA.filter((s) => s.category === 'residential').length,
    },
    {
      id: 'deep-clean',
      label: 'Deep Clean & Post-Remodel',
      count: SERVICES_DATA.filter((s) => s.category === 'deep-clean').length,
    },
    {
      id: 'move-in-out',
      label: 'Move-In/Out Turnover',
      count: SERVICES_DATA.filter((s) => s.category === 'move-in-out').length,
    },
    {
      id: 'commercial',
      label: 'Commercial & Office',
      count: SERVICES_DATA.filter((s) => s.category === 'commercial').length,
    },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-5 h-5 text-[#FD3A85]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#FD3A85]" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-[#FD3A85]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#FD3A85]" />;
      case 'HardHat':
        return <HardHat className="w-5 h-5 text-[#FD3A85]" />;
      case 'Key':
        return <Key className="w-5 h-5 text-[#FD3A85]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#FD3A85]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F8F9FC] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FD3A85]/10 border border-[#FD3A85]/20 text-[#FD3A85] text-xs font-bold uppercase tracking-wider mb-4">
            <span>✦</span>
            <span>CUSTOMIZED CLEANING PACKAGES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Professional cleaning tailored to your needs.
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Every home and facility is unique. Select from our rigorous standard maintenance, restorative deep scrubs, or specialized move turnover protocols.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === tab.id
                    ? 'bg-[#08080C] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeCategory === tab.id
                      ? 'bg-[#FD3A85] text-white'
                      : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`rounded-[32px] bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 relative ${
                service.popular
                  ? 'border-[#FD3A85]/40 ring-2 ring-[#FD3A85]/20'
                  : 'border-slate-200/80 hover:border-[#FD3A85]/30'
              }`}
            >
              {/* Optional Top Badge */}
              {service.badge && (
                <div className="absolute top-4 right-4">
                  <span
                    className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
                      service.popular
                        ? 'bg-[#FD3A85] text-white shadow-sm'
                        : 'bg-[#08080C] text-white'
                    }`}
                  >
                    ✦ {service.badge}
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-7">
                {/* Icon & Title */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FD3A85]/10 flex items-center justify-center shrink-0">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{service.estimatedTime}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Price Tag Row */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Starting from</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-extrabold text-slate-900">
                        ${service.basePrice}
                      </span>
                      <span className="text-xs text-[#FD3A85] font-bold line-through">
                        ${Math.round(service.basePrice * 1.25)}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#FD3A85]/15 text-[#FD3A85]">
                      20% OFF Applied
                    </span>
                  </div>
                </div>

                {/* Checklist Features */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    What's Included:
                  </span>
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex flex-col gap-2.5">
                <button
                  onClick={() => onSelectServiceForQuote(service)}
                  className="w-full py-3 px-4 rounded-2xl bg-[#08080C] hover:bg-[#16161F] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Configure in Estimator</span>
                  <ArrowRight className="w-4 h-4 text-[#FD3A85]" />
                </button>
                <button
                  onClick={() => onOpenBooking(service.id)}
                  className="w-full py-2.5 px-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-200 transition-colors cursor-pointer"
                >
                  Direct Instant Booking
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Services */}
        <div className="mt-14 p-6 sm:p-8 rounded-[32px] bg-gradient-to-r from-[#121218] to-[#08080C] text-white border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FD3A85] flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-[#FD3A85]/30">
              🌿
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold">
                Need a Custom Cleaning Arrangement?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                We handle special requests, estate properties, and commercial facilities in Petaluma.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm shrink-0 shadow-md transition-all cursor-pointer"
          >
            Request Custom Estimate
          </button>
        </div>

      </div>
    </section>
  );
};
