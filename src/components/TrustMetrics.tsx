import React from 'react';
import { Leaf, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { TRUST_METRICS } from '../data/cleaningData';

export const TrustMetrics: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#FD3A85]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#FD3A85]" />;
    }
  };

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 pb-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {TRUST_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl bg-[#121218] hover:bg-[#181822] border border-white/10 hover:border-[#FD3A85]/50 p-5 sm:p-6 transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(253,58,133,0.15)] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(metric.icon)}
                </div>
                <span className="text-[#FD3A85] text-xs font-black opacity-60 group-hover:opacity-100 transition-opacity">
                  ✦ 0{idx + 1}
                </span>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-[#FD3A85] transition-colors">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-slate-200 mt-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {metric.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
