import React from 'react';
import { Heart, ShieldCheck, Clock, Award, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';
import { CATERING_IMAGES } from '../assets/images';

export const AboutFounder: React.FC = () => {
  const pillars = [
    {
      icon: <Award className="w-5 h-5 text-amber-400" />,
      title: 'Farm-Fresh Sourcing',
      desc: 'We partner directly with local Kenyan growers for sweet watermelons, ripe pineapples, and farm-fresh herbs sourced the day of your event.',
    },
    {
      icon: <Heart className="w-5 h-5 text-orange-400" />,
      title: 'Passionate Handcrafted Cooking',
      desc: 'From hand-rolled dough to slow-roasted marinades, our recipes are crafted from scratch without shortcuts or artificial flavor enhancers.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Impeccable Food Hygiene',
      desc: 'Strict food handling, temperature-controlled chafing, and pristine cleanliness standards trusted by corporate leaders and private hosts.',
    },
    {
      icon: <Clock className="w-5 h-5 text-amber-400" />,
      title: 'Flawless Event Punctuality',
      desc: 'Our staff arrives 2 to 3 hours ahead to ensure hot dishes, polished setups, and zero stress when your guests arrive.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-stone-900/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Founder Image with Decorative Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing decorative glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-600 to-orange-600 rounded-3xl blur-xl opacity-30 transform -rotate-2" />

              <div className="relative rounded-2xl overflow-hidden border-2 border-stone-700/80 shadow-2xl bg-stone-950">
                <img
                  src={CATERING_IMAGES.chefKabura}
                  alt="Chef Kabura Karanja - Founder & Executive Chef of Munch & Yum Catering"
                  className="w-full h-auto object-cover object-center aspect-[4/5] hover:scale-102 transition duration-500"
                />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-stone-950/90 backdrop-blur-md border border-stone-800 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-base font-bold text-white">Chef Kabura Karanja</h4>
                    <p className="text-xs text-amber-400 font-medium">Founder & Head Chef</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-stone-300 bg-stone-900 px-2.5 py-1 rounded-md border border-stone-800">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>500+ Feasts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-400">
              <span>The Story Behind The Flavor</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              "Every gathering deserves food that warms both heart and appetite."
            </h2>

            <div className="space-y-4 text-stone-300 text-sm sm:text-base font-light leading-relaxed">
              <p>
                Founded by Chef Kabura Karanja, <strong className="font-semibold text-white">Munch & Yum Catering</strong> was born from a deep-rooted passion: turning ordinary milestones into feast-worthy memories. Whether rolling dough for fresh pastries, selecting sweet watermelons and coastal spices, or carefully slow-cooking nyama choma over aromatic wood embers, Kabura believes genuine hospitality starts in the details.
              </p>
              <p>
                Unlike massive corporate caterers who deliver generic banquet trays, Chef Kabura personally designs menus around your unique taste, traditions, and event timeline. Our dedicated kitchen and floor crew take pride in hot food, generous portions, and an ambiance of effortless celebration.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-800">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-stone-950/60 border border-stone-800/80 space-y-1.5">
                  <div className="flex items-center gap-2">
                    {pillar.icon}
                    <h4 className="font-serif font-bold text-sm text-white">{pillar.title}</h4>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Personal Invitation & Direct Line */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message Chef Kabura Directly</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 text-sm font-semibold transition"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
