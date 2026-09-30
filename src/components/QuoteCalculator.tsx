import React, { useState } from 'react';
import { Calculator, MessageCircle, Check, Users, Calendar, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';

interface QuoteCalculatorProps {
  onOpenConsultationWithData: (data: { eventType: string; guests: number; style: string }) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onOpenConsultationWithData }) => {
  const [guests, setGuests] = useState<number>(100);
  const [eventType, setEventType] = useState<string>('Wedding Reception');
  const [serviceStyle, setServiceStyle] = useState<string>('grand-buffet');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'chafing-equipment',
    'waitstaff-service',
  ]);

  const eventTypes = [
    'Wedding Reception',
    'Corporate Gala / Conference',
    'Private Birthday / Milestone',
    'Ruracio / Traditional Ceremony',
    'Boardroom Executive Lunch',
  ];

  const serviceStyles = [
    {
      id: 'grand-buffet',
      name: 'Grand Buffet Feast',
      basePerPerson: 1800,
      description: '2 succulent meats, 3 rich starches, fresh salads, dessert & warm sauces',
    },
    {
      id: 'cocktail-canapes',
      name: 'Cocktail & Canapés Reception',
      basePerPerson: 1400,
      description: '6 to 8 handcrafted gourmet bite selections, passed sliders & skewers',
    },
    {
      id: 'plated-dinner',
      name: 'Plated 3-Course VIP Dinner',
      basePerPerson: 2500,
      description: 'Synchronized table service with starter, plated entrée & gourmet dessert',
    },
    {
      id: 'live-grill',
      name: 'Live Sizzling Charcoal Grill & Roast',
      basePerPerson: 2200,
      description: 'Live flame station with prime nyama choma, seasoned chicken, plantains & dips',
    },
  ];

  const addonsList = [
    { id: 'chafing-equipment', label: 'Chafing Dishes & Food Warmers Setup', price: 10000 },
    { id: 'waitstaff-service', label: 'Uniformed Waitstaff & Event Captains', price: 15000 },
    { id: 'dessert-bar', label: 'Artisan Dessert Table & Panna Cotta Shooters', price: 18000 },
    { id: 'mocktail-bar', label: 'Fresh Tropical Juice & Mocktail Station', price: 14000 },
    { id: 'premium-cutlery', label: 'Luxury Porcelain Chinaware & Gold Cutlery', price: 20000 },
  ];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const currentStyle = serviceStyles.find((s) => s.id === serviceStyle) || serviceStyles[0];

  // Calculate rough estimates (KES)
  const baseFoodCost = guests * currentStyle.basePerPerson;
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = addonsList.find((a) => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const estimatedTotal = baseFoodCost + addonsTotal;
  const estimatedPerGuest = Math.round(estimatedTotal / guests);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleWhatsAppSend = () => {
    const addonNames = selectedAddons
      .map((id) => addonsList.find((a) => a.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const message = `Hello Munch & Yum Catering! I built a catering estimate on your website:
• Event Type: ${eventType}
• Guest Count: ${guests} Guests
• Service Style: ${currentStyle.name}
• Add-ons: ${addonNames || 'None'}
• Estimated Total: ~${formatCurrency(estimatedTotal)}

Could we discuss this customized menu and check availability?`;

    window.open(`https://wa.me/254112323708?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="estimator" className="py-24 bg-stone-950 relative border-y border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent Menu Estimator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Build Your Custom Catering Estimate
          </h2>
          <p className="text-stone-400 text-base sm:text-lg font-light leading-relaxed">
            Tailor your guest count, dining experience, and event amenities. See an instant preliminary estimate and lock it in with Chef Kabura on WhatsApp.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-stone-900/60 border border-stone-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            {/* 1. Event Type */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-amber-400 block">
                1. Select Event Type
              </label>
              <div className="flex flex-wrap gap-2">
                {eventTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setEventType(type)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium transition cursor-pointer ${
                      eventType === type
                        ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                        : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Guest Count Slider & Quick Presets */}
            <div className="space-y-4 pt-4 border-t border-stone-800">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  2. Number of Guests
                </label>
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-stone-950 border border-stone-700 text-amber-400 font-bold text-base">
                  <Users className="w-4 h-4" />
                  <span>{guests} Guests</span>
                </div>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="20"
                max="600"
                step="10"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />

              {/* Presets */}
              <div className="flex items-center gap-2">
                {[30, 75, 150, 250, 400].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setGuests(preset)}
                    className={`px-3 py-1 text-xs rounded-md transition cursor-pointer ${
                      guests === preset
                        ? 'bg-stone-700 text-amber-300 font-semibold'
                        : 'bg-stone-950 text-stone-400 hover:text-white'
                    }`}
                  >
                    {preset} pax
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Dining Service Style */}
            <div className="space-y-3 pt-4 border-t border-stone-800">
              <label className="text-xs font-semibold uppercase tracking-wider text-amber-400 block">
                3. Choose Dining & Serving Style
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceStyles.map((style) => (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setServiceStyle(style.id)}
                    className={`p-4 rounded-xl text-left transition border cursor-pointer ${
                      serviceStyle === style.id
                        ? 'bg-amber-950/30 border-amber-500 ring-1 ring-amber-500/50'
                        : 'bg-stone-950/60 border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-serif font-bold text-sm text-white">
                        {style.name}
                      </span>
                      <span className="text-xs font-semibold text-amber-400">
                        ~{formatCurrency(style.basePerPerson)}/pax
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 mt-1 font-light leading-relaxed">
                      {style.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Event Amenities & Add-ons */}
            <div className="space-y-3 pt-4 border-t border-stone-800">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-300 block">
                4. Select Event Amenities & Stations (Optional)
              </label>
              <div className="space-y-2">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3 rounded-lg border transition cursor-pointer ${
                        isChecked
                          ? 'bg-stone-800/80 border-amber-500/60 text-stone-100'
                          : 'bg-stone-950/40 border-stone-800/80 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border transition ${
                            isChecked
                              ? 'bg-amber-500 border-amber-500 text-stone-950'
                              : 'border-stone-600 bg-stone-900'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium">{addon.label}</span>
                      </div>
                      <span className="text-xs font-mono text-stone-400">
                        +{formatCurrency(addon.price)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-Time Summary & Direct Booking Callout Column */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="rounded-2xl bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 border border-amber-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Estimated Proposal</h3>
                  <p className="text-xs text-stone-400">Instant planning guide</p>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Chef Verified</span>
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between text-stone-300">
                  <span>Selected Event</span>
                  <span className="font-semibold text-white">{eventType}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Guest Count</span>
                  <span className="font-semibold text-white">{guests} Persons</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Dining Menu</span>
                  <span className="font-semibold text-white">{currentStyle.name}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Food Sourcing & Prep</span>
                  <span className="font-mono text-stone-200">{formatCurrency(baseFoodCost)}</span>
                </div>
                {addonsTotal > 0 && (
                  <div className="flex justify-between text-stone-300">
                    <span>Equipment & Add-ons</span>
                    <span className="font-mono text-stone-200">{formatCurrency(addonsTotal)}</span>
                  </div>
                )}
              </div>

              {/* Total Estimate Display */}
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-1 text-center">
                <p className="text-xs text-stone-400 uppercase tracking-wider">Preliminary Estimated Range</p>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-amber-400">
                  {formatCurrency(estimatedTotal)}
                </div>
                <p className="text-[11px] text-stone-400">
                  Approx. <span className="text-stone-200 font-semibold">{formatCurrency(estimatedPerGuest)}</span> per guest
                </p>
              </div>

              {/* Conversion Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/30 transition transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Estimate to Chef Kabura on WhatsApp</span>
                </button>

                <button
                  onClick={() =>
                    onOpenConsultationWithData({
                      eventType,
                      guests,
                      style: currentStyle.name,
                    })
                  }
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs border border-stone-700 transition cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Book Free Consultation Call</span>
                </button>
              </div>

              <p className="text-[11px] text-stone-500 text-center leading-tight">
                *Note: Final quote may vary slightly based on customized protein cuts, specialty dietary requests, or venue travel distance outside Nairobi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
