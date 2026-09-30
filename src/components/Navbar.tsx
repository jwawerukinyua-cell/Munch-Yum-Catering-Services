import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Menu Highlights', href: '#menu' },
    { label: 'Custom Estimator', href: '#estimator' },
    { label: 'About Chef Kabura', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#faf8f5]/95 backdrop-blur-md border-b border-stone-200/90 shadow-sm ${
        isScrolled ? 'py-2.5 shadow-md' : 'py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Main Navigation Row */}
          <div className="w-full flex items-center justify-between gap-4">
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-stone-700 hover:text-amber-700 transition-colors tracking-wide whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Header Title */}
            <div className="lg:hidden">
              <span className="font-serif text-base font-bold text-stone-900 tracking-tight">
                Munch & Yum
              </span>
            </div>

            {/* Action CTAs: Direct Call & Consultation */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300/80 transition-colors shadow-xs"
                title="Call Munch & Yum Catering"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>{BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-md shadow-orange-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Get a Quote</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2 shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="p-2 rounded-lg bg-orange-600 text-white shadow"
                aria-label="Call Munch & Yum Catering"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white border border-stone-300 text-stone-800"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Name below menu items for Desktop */}
          <div className="hidden lg:flex items-center justify-center gap-2 pt-1 border-t border-stone-200/70 w-full mt-1.5 text-center">
            <span className="font-serif text-xs font-bold tracking-widest uppercase text-stone-900">
              Munch & Yum Catering
            </span>
            <span className="text-[10px] text-amber-700 font-medium tracking-wide">
              · Bespoke Event Catering · Nairobi
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8f5] border-b border-stone-200 px-6 py-5 mt-2 transition-all shadow-xl">
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-stone-800 hover:text-amber-700 text-base font-medium border-b border-stone-200/60"
              >
                {link.label}
              </a>
            ))}

            {/* Name below menu items in mobile dropdown */}
            <div className="pt-3 pb-1 text-center">
              <span className="font-serif text-base font-bold text-stone-900 tracking-tight block">
                Munch & Yum Catering
              </span>
              <span className="text-xs text-amber-700 font-medium tracking-wider uppercase block mt-0.5">
                Bespoke Catering · Nairobi
              </span>
            </div>
          </nav>

          <div className="mt-4 pt-4 border-t border-stone-200 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white border border-stone-300 text-stone-800 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call {BUSINESS_INFO.phoneFormatted}</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold text-sm shadow-lg text-center"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
