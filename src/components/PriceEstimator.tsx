import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Check,
  Plus,
  ShieldCheck,
  Clock,
  ArrowRight,
  Calculator,
  Calendar,
  Home,
  CheckCircle2,
} from 'lucide-react';
import { SERVICES_DATA, ADD_ON_OPTIONS } from '../data/cleaningData';
import { ServiceItem } from '../types';

interface PriceEstimatorProps {
  initialServiceId?: string;
  onProceedToBooking: (estimatorState: any) => void;
}

export const PriceEstimator: React.FC<PriceEstimatorProps> = ({
  initialServiceId = 'residential-standard',
  onProceedToBooking,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId);
  const [bedrooms, setBedrooms] = useState<number>(2);
  const [bathrooms, setBathrooms] = useState<number>(2);
  const [squareFootage, setSquareFootage] = useState<number>(1400);
  const [frequency, setFrequency] = useState<'one-time' | 'weekly' | 'bi-weekly' | 'monthly'>('one-time');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [hasPets, setHasPets] = useState<boolean>(true);

  // Sync if initialServiceId changes
  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  const selectedService =
    SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  // Frequency discounts
  const getFrequencyDiscount = () => {
    switch (frequency) {
      case 'weekly':
        return 0.20; // 20% recurring discount
      case 'bi-weekly':
        return 0.15; // 15% recurring discount
      case 'monthly':
        return 0.10; // 10% recurring discount
      default:
        return 0; // One-time base
    }
  };

  // Base Calculation logic
  const calculatePricing = () => {
    let base = selectedService.basePrice;

    // Room multiplier
    const roomFactor = (bedrooms - 1) * 30 + (bathrooms - 1) * 25;
    
    // Sqft adjustment
    const sqftFactor = Math.max(0, Math.round((squareFootage - 1000) / 400) * 20);

    // Sum of add-ons
    const addOnsTotal = selectedAddOns.reduce((sum, addOnId) => {
      const item = ADD_ON_OPTIONS.find((a) => a.id === addOnId);
      return sum + (item ? item.price : 0);
    }, 0);

    // Pet dander HEPA factor if pets enabled
    const petFee = hasPets && !selectedAddOns.includes('pet-dander-treatment') ? 15 : 0;

    const subtotalRaw = base + roomFactor + sqftFactor + addOnsTotal + petFee;

    // First time client promo: 20% OFF
    const newClientDiscountPercent = 0.20;
    const frequencyDiscountPercent = getFrequencyDiscount();
    
    // Combined or max discount
    const totalDiscountRate = Math.max(newClientDiscountPercent, frequencyDiscountPercent);
    const savingsAmount = Math.round(subtotalRaw * totalDiscountRate);
    const finalPrice = Math.max(89, subtotalRaw - savingsAmount);
    const regularPrice = Math.round(subtotalRaw * 1.15); // Strikethrough comparison

    // Estimated duration calculation
    const baseHours = selectedService.category === 'deep-clean' || selectedService.category === 'move-in-out' ? 4.0 : 2.5;
    const estimatedHours = (
      baseHours +
      (bedrooms - 1) * 0.4 +
      (bathrooms - 1) * 0.4 +
      selectedAddOns.length * 0.35
    ).toFixed(1);

    return {
      subtotalRaw,
      savingsAmount,
      finalPrice,
      regularPrice,
      estimatedHours,
      totalDiscountRate,
    };
  };

  const pricing = calculatePricing();

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleBookNow = () => {
    onProceedToBooking({
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      frequency,
      bedrooms,
      bathrooms,
      squareFeet: squareFootage,
      selectedAddOns,
      hasPets,
      estimatedPrice: pricing.finalPrice,
      regularPrice: pricing.regularPrice,
      savings: pricing.savingsAmount,
      estimatedHours: pricing.estimatedHours,
    });
  };

  return (
    <section
      id="calculator"
      className="py-20 sm:py-28 bg-[#08080C] text-white relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FD3A85]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FD3A85]/15 border border-[#FD3A85]/30 text-[#FD3A85] text-xs font-black uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>LIVE INTERACTIVE ESTIMATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Instant transparent pricing. <br />
            <span className="text-[#FD3A85]">20% OFF</span> automatically applied.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Customize your home specifications, frequency, and custom add-ons. No hidden surprise fees ever.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Configurator Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Service Type Selection */}
            <div className="p-6 sm:p-7 rounded-[32px] bg-[#121218] border border-white/10 shadow-xl">
              <label className="block text-xs font-extrabold text-[#FD3A85] uppercase tracking-wider mb-3">
                1. Select Service Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICES_DATA.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => setSelectedServiceId(srv.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      selectedServiceId === srv.id
                        ? 'bg-[#1D1924] border-[#FD3A85] shadow-[0_0_20px_rgba(253,58,133,0.25)]'
                        : 'bg-[#16161F] border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-white">
                        {srv.name}
                      </span>
                      {selectedServiceId === srv.id && (
                        <CheckCircle2 className="w-4 h-4 text-[#FD3A85]" />
                      )}
                    </div>
                    <span className="text-xs text-slate-400">
                      From ${srv.basePrice} • {srv.estimatedTime}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Home Specifications (Bedrooms, Bathrooms, SqFt) */}
            <div className="p-6 sm:p-7 rounded-[32px] bg-[#121218] border border-white/10 shadow-xl space-y-5">
              <label className="block text-xs font-extrabold text-[#FD3A85] uppercase tracking-wider">
                2. Home Layout &amp; Size
              </label>

              {/* Bedrooms Picker */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
                  <span>Bedrooms</span>
                  <span className="text-white font-bold">{bedrooms} {bedrooms === 5 ? '5+ Beds' : 'Bedrooms'}</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => setBedrooms(num)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        bedrooms === num
                          ? 'bg-[#FD3A85] text-white shadow-md shadow-[#FD3A85]/30'
                          : 'bg-[#16161F] text-slate-300 hover:bg-[#20202d] border border-white/5'
                      }`}
                    >
                      {num === 5 ? '5+' : num} {num === 1 ? 'Bed' : 'Beds'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bathrooms Picker */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
                  <span>Bathrooms</span>
                  <span className="text-white font-bold">{bathrooms} {bathrooms === 4 ? '4+ Baths' : 'Bathrooms'}</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      onClick={() => setBathrooms(num)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        bathrooms === num
                          ? 'bg-[#FD3A85] text-white shadow-md shadow-[#FD3A85]/30'
                          : 'bg-[#16161F] text-slate-300 hover:bg-[#20202d] border border-white/5'
                      }`}
                    >
                      {num === 4 ? '4+' : num} {num === 1 ? 'Bath' : 'Baths'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Square Footage Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
                  <span>Approximate Square Footage</span>
                  <span className="text-[#FD3A85] font-bold text-sm">{squareFootage.toLocaleString()} sq. ft.</span>
                </div>
                <input
                  type="range"
                  min="600"
                  max="4500"
                  step="100"
                  value={squareFootage}
                  onChange={(e) => setSquareFootage(Number(e.target.value))}
                  className="w-full accent-[#FD3A85] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-medium mt-1">
                  <span>600 sq ft (Studio/Apt)</span>
                  <span>2,000 sq ft</span>
                  <span>4,500+ sq ft (Estate)</span>
                </div>
              </div>

              {/* Pets Toggle */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">🐾</span>
                  <div>
                    <div className="text-xs font-bold text-slate-200">Have pets in home? (Dogs/Cats)</div>
                    <div className="text-[11px] text-slate-400">We use specialized pet-safe plant botanicals & HEPA filters</div>
                  </div>
                </div>
                <button
                  onClick={() => setHasPets(!hasPets)}
                  className={`w-12 h-6 rounded-full transition-colors p-1 cursor-pointer flex items-center ${
                    hasPets ? 'bg-[#FD3A85] justify-end' : 'bg-slate-700 justify-start'
                  }`}
                >
                  <div className="w-4 h-4 rounded-full bg-white shadow-md"></div>
                </button>
              </div>
            </div>

            {/* Step 3: Cleaning Frequency */}
            <div className="p-6 sm:p-7 rounded-[32px] bg-[#121218] border border-white/10 shadow-xl">
              <label className="block text-xs font-extrabold text-[#FD3A85] uppercase tracking-wider mb-3">
                3. Choose Frequency (Save More)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'one-time', label: 'One-Time', badge: '20% OFF 1st' },
                  { id: 'weekly', label: 'Weekly', badge: 'Save 20%' },
                  { id: 'bi-weekly', label: 'Bi-Weekly', badge: 'Save 15%' },
                  { id: 'monthly', label: 'Monthly', badge: 'Save 10%' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFrequency(item.id as any)}
                    className={`p-3 rounded-2xl text-center border transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      frequency === item.id
                        ? 'bg-[#FD3A85]/20 border-[#FD3A85] text-white'
                        : 'bg-[#16161F] border-white/5 text-slate-300 hover:bg-[#20202d]'
                    }`}
                  >
                    <span className="text-xs font-bold">{item.label}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FD3A85] text-white font-extrabold">
                      {item.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Custom Add-Ons */}
            <div className="p-6 sm:p-7 rounded-[32px] bg-[#121218] border border-white/10 shadow-xl">
              <label className="block text-xs font-extrabold text-[#FD3A85] uppercase tracking-wider mb-3">
                4. Select Optional Add-Ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADD_ON_OPTIONS.map((addOn) => {
                  const isSelected = selectedAddOns.includes(addOn.id);
                  return (
                    <button
                      key={addOn.id}
                      onClick={() => toggleAddOn(addOn.id)}
                      className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                        isSelected
                          ? 'bg-[#1F1722] border-[#FD3A85] shadow-sm'
                          : 'bg-[#16161F] border-white/5 hover:border-white/15'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white">
                          {addOn.name}
                        </span>
                        <span className="text-[11px] text-slate-400 leading-tight mt-0.5">
                          {addOn.description}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="text-xs font-extrabold text-[#FD3A85]">
                          +${addOn.price}
                        </span>
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            isSelected
                              ? 'bg-[#FD3A85] text-white'
                              : 'bg-white/10 text-slate-400'
                          }`}
                        >
                          {isSelected ? (
                            <Check className="w-3 h-3 stroke-[3]" />
                          ) : (
                            <Plus className="w-3 h-3" />
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right / Sticky Summary Price Card Column (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-[36px] bg-[#121218] border border-white/15 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Pink Top Accent Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FD3A85] via-[#FF70A6] to-purple-500" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                  ESTIMATE SUMMARY
                </span>
                <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-[#FD3A85]/20 text-[#FD3A85] border border-[#FD3A85]/30">
                  ✦ 20% DISCOUNT ACTIVE
                </span>
              </div>

              {/* Service Title */}
              <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
                {selectedService.name}
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Petaluma &amp; Sonoma County Residential Care
              </p>

              {/* Price Display */}
              <div className="p-6 rounded-3xl bg-[#08080C] border border-white/10 mb-6 text-center">
                <span className="text-xs text-slate-400 font-semibold block mb-1">
                  Estimated Total With 20% New Client Promo
                </span>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    ${pricing.finalPrice}
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-bold text-slate-500 line-through">
                      ${pricing.regularPrice}
                    </span>
                    <span className="text-xs font-extrabold text-[#FD3A85]">
                      Save ${pricing.savingsAmount}
                    </span>
                  </div>
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full">
                  <Sparkles className="w-3 h-3" />
                  <span>Sonoma County 20% Promo Applied</span>
                </div>
              </div>

              {/* Specs Breakdown List */}
              <div className="space-y-2.5 text-xs text-slate-300 pb-6 border-b border-white/10 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-400">Layout</span>
                  <span className="font-semibold text-white">
                    {bedrooms} Bed • {bathrooms} Bath ({squareFootage} sq ft)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Frequency</span>
                  <span className="font-semibold text-white capitalize">
                    {frequency.replace('-', ' ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Est. Cleaning Time</span>
                  <span className="font-semibold text-[#FD3A85]">
                    ~{pricing.estimatedHours} Hours
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Eco Formulas &amp; Supplies</span>
                  <span className="font-semibold text-emerald-400">
                    Included 100% Free
                  </span>
                </div>
                {selectedAddOns.length > 0 && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Selected Add-ons</span>
                    <span className="font-semibold text-white">
                      {selectedAddOns.length} Extra {selectedAddOns.length === 1 ? 'service' : 'services'}
                    </span>
                  </div>
                )}
              </div>

              {/* Guarantees Mini List */}
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-[#FD3A85] shrink-0" />
                  <span>Licensed, bonded &amp; insured ($2,000,000 policy)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Sparkles className="w-4 h-4 text-[#FD3A85] shrink-0" />
                  <span>24-Hour 100% Satisfaction Re-Clean Guarantee</span>
                </div>
              </div>

              {/* Primary Book CTA */}
              <button
                id="claim-discount-btn"
                onClick={handleBookNow}
                className="w-full py-4 px-6 rounded-full bg-[#FD3A85] hover:bg-[#ff4e93] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(253,58,133,0.4)] hover:shadow-[0_14px_40px_rgba(253,58,133,0.6)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Claim 20% OFF &amp; Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-3 text-center">
                <span className="text-[11px] text-slate-400">
                  No credit card required upfront • Free cancellation
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
