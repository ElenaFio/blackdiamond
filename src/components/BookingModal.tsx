import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Phone,
  Mail,
  User,
  Home,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  HeartHandshake,
} from 'lucide-react';
import { SERVICES_DATA, ADD_ON_OPTIONS } from '../data/cleaningData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: any;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefillData,
}) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: prefillData?.serviceId || 'residential-standard',
    serviceName: prefillData?.serviceName || 'Residential Pristine Maintenance',
    frequency: prefillData?.frequency || 'one-time',
    bedrooms: prefillData?.bedrooms || 2,
    bathrooms: prefillData?.bathrooms || 2,
    squareFeet: prefillData?.squareFeet || 1400,
    selectedAddOns: prefillData?.selectedAddOns || [],
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    timeSlot: '09:00 AM - 12:00 PM (Morning Window)',
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Petaluma',
    zipCode: '94952',
    specialInstructions: '',
    hasPets: prefillData?.hasPets ?? true,
    petDetails: '1 Dog, 1 Cat',
  });

  if (!isOpen) return null;

  const currentService =
    SERVICES_DATA.find((s) => s.id === formData.serviceId) || SERVICES_DATA[0];

  const estimatedPrice = prefillData?.estimatedPrice || currentService.basePrice;
  const regularPrice = prefillData?.regularPrice || Math.round(estimatedPrice * 1.25);
  const savings = prefillData?.savings || Math.round(regularPrice - estimatedPrice);

  const timeSlots = [
    '08:00 AM - 11:00 AM (Early Arrival)',
    '10:00 AM - 01:00 PM (Mid-Morning)',
    '01:00 PM - 04:00 PM (Afternoon)',
    '03:00 PM - 06:00 PM (Late Afternoon)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const randomCode = 'BDC-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmationCode(randomCode);
      setBookingConfirmed(true);
    }, 900);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-[#121218] border border-white/15 rounded-[36px] shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header Ribbon */}
        <div className="bg-[#08080C] px-6 sm:px-8 py-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FD3A85] to-[#FF70A6] flex items-center justify-center text-white text-sm font-black">
              ✦
            </div>
            <div>
              <h3 className="font-bold text-white text-base sm:text-lg">
                Black Diamond Booking
              </h3>
              <span className="text-xs text-[#FD3A85] font-semibold">
                ✦ 20% New Client Discount Applied
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          
          {!bookingConfirmed ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${
                      step >= 1
                        ? 'bg-[#FD3A85] text-white'
                        : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    1
                  </span>
                  <span className={step === 1 ? 'font-bold text-white' : 'text-slate-400'}>
                    Schedule &amp; Date
                  </span>
                </div>
                <div className="w-12 h-px bg-white/10" />
                <div className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${
                      step >= 2
                        ? 'bg-[#FD3A85] text-white'
                        : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    2
                  </span>
                  <span className={step === 2 ? 'font-bold text-white' : 'text-slate-400'}>
                    Address &amp; Contact
                  </span>
                </div>
              </div>

              {/* Step 1: Schedule & Preferences */}
              {step === 1 && (
                <div className="space-y-6">
                  {/* Selected Summary Card */}
                  <div className="p-4 rounded-2xl bg-[#161622] border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400">Selected Cleaning</div>
                      <div className="text-sm font-bold text-white">
                        {currentService.name}
                      </div>
                      <div className="text-xs text-slate-300">
                        {formData.bedrooms} Bed • {formData.bathrooms} Bath •{' '}
                        {formData.frequency}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-black text-[#FD3A85]">
                        ${estimatedPrice}
                      </div>
                      <div className="text-xs text-slate-400 line-through">
                        ${regularPrice}
                      </div>
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Select Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full p-3.5 rounded-xl bg-[#08080C] border border-white/15 text-white text-sm focus:border-[#FD3A85] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Time Window Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Select Arrival Time Window
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {timeSlots.map((slot, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, timeSlot: slot })
                          }
                          className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all cursor-pointer ${
                            formData.timeSlot === slot
                              ? 'bg-[#FD3A85]/20 border-[#FD3A85] text-white'
                              : 'bg-[#08080C] border-white/10 text-slate-300 hover:border-white/20'
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5 inline mr-1.5 text-[#FD3A85]" />
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Special Requests & Pets */}
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Pet details &amp; notes
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1 Golden Retriever, friendly, will be crated or in yard"
                      value={formData.petDetails}
                      onChange={(e) =>
                        setFormData({ ...formData, petDetails: e.target.value })
                      }
                      className="w-full p-3.5 rounded-xl bg-[#08080C] border border-white/15 text-white text-sm placeholder:text-slate-500 focus:border-[#FD3A85] focus:outline-none"
                    />
                  </div>

                  {/* Next Step CTA */}
                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-8 py-3.5 rounded-full bg-[#FD3A85] hover:bg-[#ff4e93] text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-[#FD3A85]/30 cursor-pointer"
                    >
                      <span>Continue to Address</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Contact & Address */}
              {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Miller"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full p-3.5 rounded-xl bg-[#08080C] border border-white/15 text-white text-sm placeholder:text-slate-500 focus:border-[#FD3A85] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(707) 555-0199"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full p-3.5 rounded-xl bg-[#08080C] border border-white/15 text-white text-sm placeholder:text-slate-500 focus:border-[#FD3A85] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full p-3.5 rounded-xl bg-[#08080C] border border-white/15 text-white text-sm placeholder:text-slate-500 focus:border-[#FD3A85] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="123 D Street, Petaluma, CA"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="w-full p-3.5 rounded-xl bg-[#08080C] border border-white/15 text-white text-sm placeholder:text-slate-500 focus:border-[#FD3A85] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                        City / Area
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="w-full p-3.5 rounded-xl bg-[#08080C] border border-white/15 text-white text-sm focus:border-[#FD3A85] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        value={formData.zipCode}
                        onChange={(e) =>
                          setFormData({ ...formData, zipCode: e.target.value })
                        }
                        className="w-full p-3.5 rounded-xl bg-[#08080C] border border-white/15 text-white text-sm focus:border-[#FD3A85] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                      Entry Instructions (Lockbox, gate code, parking)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Front door code is 4321, park in driveway..."
                      value={formData.specialInstructions}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          specialInstructions: e.target.value,
                        })
                      }
                      className="w-full p-3.5 rounded-xl bg-[#08080C] border border-white/15 text-white text-sm placeholder:text-slate-500 focus:border-[#FD3A85] focus:outline-none"
                    />
                  </div>

                  {/* Summary Guarantee */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>$2M Liability Insured • Zero Upfront Charge</span>
                    </div>
                    <span className="text-[#FD3A85] font-bold">20% OFF Saved</span>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 font-semibold text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 rounded-full bg-[#FD3A85] hover:bg-[#ff4e93] disabled:opacity-50 text-white font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-[#FD3A85]/35 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Confirming Schedule...</span>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Confirm Booking (${estimatedPrice})</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Confirmation Screen */
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                ✓
              </div>

              <div>
                <span className="text-xs font-extrabold text-[#FD3A85] uppercase tracking-wider">
                  ✦ APPOINTMENT SCHEDULED
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  Thank You, {formData.fullName || 'Neighbor'}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
                  Your eco-friendly clean has been reserved. A confirmation SMS &amp; email has been dispatched to {formData.phone || 'your phone'}.
                </p>
              </div>

              {/* Confirmation Details Card */}
              <div className="p-6 rounded-3xl bg-[#08080C] border border-white/10 text-left space-y-3 max-w-md mx-auto text-xs">
                <div className="flex justify-between pb-2 border-b border-white/5 font-mono">
                  <span className="text-slate-400">Confirmation Code</span>
                  <span className="text-[#FD3A85] font-bold">{confirmationCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Service</span>
                  <span className="text-white font-semibold">{currentService.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Date &amp; Time</span>
                  <span className="text-white font-semibold">
                    {formData.date} • {formData.timeSlot.split(' ')[0]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Location</span>
                  <span className="text-white font-semibold">
                    {formData.address || 'Petaluma, CA'}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/5 font-bold text-sm">
                  <span className="text-slate-300">Estimated Total (20% OFF)</span>
                  <span className="text-emerald-400">${estimatedPrice}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:7073184321"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FD3A85]" />
                  <span>Call (707) 318-4321</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#FD3A85] text-white font-bold text-xs shadow-md cursor-pointer"
                >
                  Done &amp; Return to Page
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
