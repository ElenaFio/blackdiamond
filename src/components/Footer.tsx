import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#050508] text-slate-400 text-xs border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-flex items-center group py-1 mb-2">
              <img 
                src="/src/assets/images/regenerated_image_1787355732102.png" 
                alt="Black Diamond Cleaning Services" 
                className="h-14 md:h-16 max-h-[64px] w-auto object-contain object-left transition-transform duration-300 group-hover:scale-105 mb-2"
              />
            </a>

            <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed max-w-sm">
              Petaluma’s premier eco-conscious residential and commercial cleaning service. Crafted for pure, allergen-free spaces using 100% non-toxic botanical solutions.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a 
                href="https://www.facebook.com/black.diamond.cleningservices/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FD3A85] text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 border border-white/10"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/black.diamond.usa/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FD3A85] text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 border border-white/10"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links & Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Cleaning Services
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#services" className="hover:text-[#FD3A85] transition-colors">
                  Residential Maintenance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FD3A85] transition-colors">
                  Deep Diamond Scrub
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FD3A85] transition-colors">
                  Move-In / Move-Out Clean
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FD3A85] transition-colors">
                  Commercial &amp; Office Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FD3A85] transition-colors">
                  Post-Renovation &amp; Remodel
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FD3A85] transition-colors">
                  Airbnb &amp; Vacation Turnaround
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas in Sonoma (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Service Areas
            </h4>
            <ul className="space-y-1.5 text-slate-300">
              <li className="flex items-center gap-1.5 text-[#FD3A85] font-semibold">
                <span>• Petaluma (HQ)</span>
              </li>
              <li>• Penngrove</li>
              <li>• Cotati</li>
              <li>• Rohnert Park</li>
              <li>• Santa Rosa</li>
              <li>• Sebastopol</li>
              <li>• Sonoma Valley</li>
              <li>• Novato (North Marin)</li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            
            <div className="space-y-2.5">
              <a
                href="tel:7073184321"
                className="flex items-center gap-2.5 text-slate-200 hover:text-white font-semibold group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#FD3A85]/20 text-[#FD3A85] flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>(707) 318-4321</span>
              </a>

              <a
                href="mailto:customer@blackdiamondcleaning.us"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white group"
              >
                <div className="w-7 h-7 rounded-lg bg-white/10 text-slate-300 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">customer@blackdiamondcleaning.us</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <div className="w-7 h-7 rounded-lg bg-white/10 text-slate-300 flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span>Mon – Sat: 7:00 AM – 7:00 PM</span>
              </div>

              <a
                href="https://facebook.com/kyd.blackdiamond"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#FD3A85] hover:text-[#ff70a6] font-semibold pt-1"
              >
                <div className="w-7 h-7 rounded-lg bg-[#FD3A85]/20 text-[#FD3A85] flex items-center justify-center shrink-0 font-bold">
                  f
                </div>
                <span>@kyd.blackdiamond on Facebook</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Black Diamond Cleaning Services. All rights reserved. Petaluma, CA.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-slate-400">
              Made for Sonoma County healthy living
            </span>
            <span className="text-slate-600">•</span>
            <button
              onClick={onOpenBooking}
              className="text-[#FD3A85] font-bold hover:underline cursor-pointer"
            >
              Book Service (20% OFF)
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
