import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Clock, CheckCircle, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';
import { CATERING_IMAGES } from '../assets/images';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreMenu }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Hero Image with Appetizing Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={CATERING_IMAGES.hero}
          alt="Lavish catering banquet feast by Munch & Yum Catering"
          className="w-full h-full object-cover object-center transform scale-105 animate-fade-in"
        />
        {/* Multi-layered cinematic gradient for deep contrast and text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/85 to-stone-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Compelling Pitch & Dual CTAs */}
          <div className="lg:col-span-8 space-y-6">
            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Unforgettable Flavors for Your{' '}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                Special Moments
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl font-light leading-relaxed">
              From majestic wedding banquets and high-stakes corporate galas to lively private milestones. Executive Chef Kabura Karanja crafts custom culinary experiences with farm-fresh ingredients, sizzle, and heart.
            </p>

            {/* High-Converting Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-xl shadow-orange-900/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-semibold text-stone-100 bg-stone-900/90 hover:bg-stone-800 border border-stone-700/80 shadow-lg hover:border-amber-500/50 transition-all group"
              >
                <Phone className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-sm font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-700/50 transition-all"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Proof Badges & Quick Highlights */}
            <div className="pt-6 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-stone-300">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">5.0 Rated by Guests</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">100% Fresh Local Prep</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Punctual & Stress-Free</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">500+ Events Catered</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Chef & Tasting Teaser Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative rounded-2xl bg-stone-900/90 border border-stone-800 p-6 backdrop-blur-xl shadow-2xl space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={BUSINESS_INFO.founder.image}
                    alt={BUSINESS_INFO.founder.name}
                    className="w-16 h-16 rounded-xl object-cover border-2 border-amber-500/40 shadow"
                  />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white">Chef Kabura Karanja</h3>
                    <p className="text-xs text-amber-400 font-medium">Founder & Head Chef</p>
                    <p className="text-[11px] text-stone-400 mt-0.5">Munch & Yum Kitchen</p>
                  </div>
                </div>

                <blockquote className="text-xs text-stone-300 italic border-l-2 border-amber-500/60 pl-3 py-1">
                  "Every plate tells a story of celebration. We cook with the love, warmth, and flavor we would serve our own family."
                </blockquote>

                <div className="bg-stone-950/80 rounded-xl p-3 border border-stone-800/80 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-stone-400">Signature Specialty</span>
                    <span className="text-amber-400 font-semibold">Swahili & Grill Fusion</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-stone-400">Consultation Tasting</span>
                    <span className="text-emerald-400 font-semibold">Available for 75+ Guests</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-stone-400">Direct Line</span>
                    <span className="text-stone-200 font-mono font-semibold">{BUSINESS_INFO.phoneFormatted}</span>
                  </div>
                </div>

                <button
                  onClick={onExploreMenu}
                  className="w-full py-2.5 rounded-lg text-xs font-semibold text-stone-200 bg-stone-800/90 hover:bg-stone-700 hover:text-white border border-stone-700 transition text-center block cursor-pointer"
                >
                  Explore Signature Menu Highlights
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
