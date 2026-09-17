import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustMetrics } from './components/TrustMetrics';
import { ServicesCatalog } from './components/ServicesCatalog';
import { PriceEstimator } from './components/PriceEstimator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ServiceItem } from './types';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [prefillBookingData, setPrefillBookingData] = useState<any>(null);
  const [selectedServiceForEstimator, setSelectedServiceForEstimator] = useState<string>('residential-standard');

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setPrefillBookingData({
        serviceId,
      });
    }
    setIsBookingModalOpen(true);
  };

  const handleSelectServiceForQuote = (service: ServiceItem) => {
    setSelectedServiceForEstimator(service.id);
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProceedToBookingFromEstimator = (estimatorState: any) => {
    setPrefillBookingData(estimatorState);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08080C] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] relative selection:bg-[#FD3A85] selection:text-white">
      {/* Floating Pill Nav Bar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onNavigateToCalculator={handleNavigateToCalculator}
      />

      {/* Hero Section */}
      <Hero
        onOpenBooking={() => handleOpenBooking()}
        onNavigateToCalculator={handleNavigateToCalculator}
      />

      {/* Trust & Metric Strip */}
      <TrustMetrics />

      {/* Interactive Services Catalog */}
      <ServicesCatalog
        onSelectServiceForQuote={handleSelectServiceForQuote}
        onOpenBooking={handleOpenBooking}
      />

      {/* Live Interactive Instant Price Estimator */}
      <PriceEstimator
        initialServiceId={selectedServiceForEstimator}
        onProceedToBooking={handleProceedToBookingFromEstimator}
      />

      {/* The "Why Choose Black Diamond" / Eco Difference */}
      <WhyChooseUs />

      {/* How It Works (3 Steps) */}
      <HowItWorks onOpenBooking={() => handleOpenBooking()} />

      {/* Testimonials & Reviews */}
      <Testimonials />

      {/* FAQ Accordion */}
      <FAQ />

      {/* High-Impact Bottom CTA Box */}
      <CtaBanner onOpenBooking={() => handleOpenBooking()} />

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking & Quote Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        prefillData={prefillBookingData}
      />
    </div>
  );
}
