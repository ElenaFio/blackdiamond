import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, Menu, X, Shield, Clock } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onNavigateToCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onNavigateToCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-3 md:pt-5 px-4">
      {/* Announcement top pill on mobile / desktop */}
      <div className="max-w-7xl mx-auto mb-2 flex items-center justify-between text-xs text-slate-300 px-4 py-1.5 rounded-full bg-[#121218]/90 border border-white/5 backdrop-blur-md hidden sm:flex">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#FD3A85]/20 text-[#FD3A85] border border-[#FD3A85]/30">
            ✦ PETALUMA LOCAL
          </span>
          <span>Eco-Friendly, Non-Toxic & Pet-Safe Cleaning in Sonoma County</span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#FD3A85]" /> Mon - Sat: 7:00 AM - 7:00 PM
          </span>
          <span className="flex items-center gap-1 text-[#FD3A85] font-semibold">
            <Shield className="w-3.5 h-3.5" /> Insured & Bonded ($2M)
          </span>
        </div>
      </div>

      {/* Floating Pill Nav Container */}
      <nav
        id="main-nav"
        className={`max-w-7xl mx-auto transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
          isScrolled
            ? 'bg-[#08080C]/90 backdrop-blur-xl border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.6)] shadow-[#FD3A85]/5'
            : 'bg-[#08080C]/80 backdrop-blur-md border border-white/10'
        }`}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center shrink-0 group py-1">
          <img 
            src="/src/assets/logo-dark.svg" 
            alt="Black Diamond Cleaning Services" 
            className="h-12 md:h-14 max-h-[56px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#services"
            className="hover:text-[#FD3A85] transition-colors py-1 hover:translate-y-[-1px]"
          >
            Services
          </a>
          <a
            href="#why-us"
            className="hover:text-[#FD3A85] transition-colors py-1 hover:translate-y-[-1px]"
          >
            Why Us
          </a>
          <button
            onClick={onNavigateToCalculator}
            className="hover:text-[#FD3A85] transition-colors py-1 flex items-center gap-1 cursor-pointer"
          >
            <span>Estimator</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FD3A85] animate-pulse"></span>
          </button>
          <a
            href="#how-it-works"
            className="hover:text-[#FD3A85] transition-colors py-1 hover:translate-y-[-1px]"
          >
            How It Works
          </a>
          <a
            href="#reviews"
            className="hover:text-[#FD3A85] transition-colors py-1 hover:translate-y-[-1px]"
          >
            Reviews
          </a>
          <a
            href="#faq"
            className="hover:text-[#FD3A85] transition-colors py-1 hover:translate-y-[-1px]"
          >
            FAQ
          </a>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <a
            href="tel:7073184321"
            className="hidden md:flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-[#FD3A85]/20 flex items-center justify-center text-[#FD3A85]">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span>(707) 318-4321</span>
          </a>

          <button
            id="nav-book-btn"
            onClick={onOpenBooking}
            className="relative group overflow-hidden rounded-full bg-[#FD3A85] hover:bg-[#ff4e93] text-white px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold tracking-tight shadow-lg shadow-[#FD3A85]/35 hover:shadow-[#FD3A85]/50 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin text-white" style={{ animationDuration: '4s' }} />
            <span>Book Now</span>
            <span className="hidden xs:inline bg-black/25 px-1.5 py-0.5 rounded text-[11px] font-extrabold ml-0.5">
              20% OFF
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden max-w-md mx-auto mt-2 p-5 rounded-3xl bg-[#121218]/95 backdrop-blur-2xl border border-white/15 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              Services & Checklists
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              The Eco Difference
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToCalculator();
              }}
              className="text-left px-4 py-2.5 rounded-xl bg-[#FD3A85]/15 text-[#FD3A85] font-semibold flex items-center justify-between"
            >
              <span>Instant Price Calculator</span>
              <span className="text-xs bg-[#FD3A85] text-white px-2 py-0.5 rounded-full font-bold">
                20% OFF
              </span>
            </button>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              How It Works (3 Steps)
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              Petaluma Client Reviews
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              Frequently Asked Questions
            </a>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="tel:7073184321"
                className="flex items-center justify-center gap-2 py-3 rounded-full bg-white/5 border border-white/10 font-semibold text-slate-100"
              >
                <Phone className="w-4 h-4 text-[#FD3A85]" />
                Call (707) 318-4321
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-[#FD3A85] text-white font-bold text-center shadow-lg shadow-[#FD3A85]/30 cursor-pointer"
              >
                Claim 20% OFF & Schedule Service
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
