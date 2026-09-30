import React, { useState } from 'react';
import { Utensils, MessageCircle, FileText, Check } from 'lucide-react';
import { MENU_HIGHLIGHTS, MenuItem, BUSINESS_INFO } from '../data/cateringData';

interface MenuHighlightsProps {
  onOpenConsultation: () => void;
}

type CategoryFilter = 'all' | 'grill' | 'mains' | 'canapes' | 'desserts';

export const MenuHighlights: React.FC<MenuHighlightsProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);

  const filterTabs: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'All Specialties' },
    { id: 'grill', label: 'Flame Grills & Roasts' },
    { id: 'mains', label: 'Signature Mains' },
    { id: 'canapes', label: 'Gourmet Canapés' },
    { id: 'desserts', label: 'Artisan Desserts' },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_HIGHLIGHTS
    : MENU_HIGHLIGHTS.filter((item) => item.category === activeCategory);

  const toggleDishSelection = (dishName: string) => {
    if (selectedDishes.includes(dishName)) {
      setSelectedDishes(selectedDishes.filter((d) => d !== dishName));
    } else {
      setSelectedDishes([...selectedDishes, dishName]);
    }
  };

  const handleWhatsAppSelectedDishes = () => {
    const dishList = selectedDishes.length > 0
      ? selectedDishes.join(', ')
      : 'your signature dishes';
    const message = `Hello Munch & Yum Catering, I am interested in tasting or catering these dishes for my event: ${dishList}. Could you send me pricing details?`;
    window.open(`https://wa.me/254112323708?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="menu" className="py-24 bg-stone-900/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
            <Utensils className="w-3.5 h-3.5" />
            <span>Mouth-Watering Culinary Craft</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Signature Menu Highlights
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            Every dish is an alchemy of fresh coastal spices, slow roasts, and modern culinary flair. Handcrafted fresh on the day of your event.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-amber-500 text-stone-950 font-semibold shadow-md shadow-amber-500/20'
                  : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-white border border-stone-700/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Selected Dishes Floating Prompt if any */}
        {selectedDishes.length > 0 && (
          <div className="mb-8 p-4 rounded-xl bg-amber-950/60 border border-amber-600/40 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-amber-200">
                You selected {selectedDishes.length} favorite {selectedDishes.length === 1 ? 'dish' : 'dishes'}!
              </p>
              <p className="text-xs text-amber-300/80">
                {selectedDishes.join(' · ')}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleWhatsAppSelectedDishes}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Inquire on WhatsApp</span>
              </button>
              <button
                onClick={() => setSelectedDishes([])}
                className="text-xs text-stone-400 hover:text-stone-200 underline px-2"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((dish: MenuItem) => {
            const isSelected = selectedDishes.includes(dish.name);
            return (
              <div
                key={dish.id}
                className={`rounded-xl bg-stone-950/70 border ${
                  isSelected ? 'border-amber-500 ring-1 ring-amber-500/50' : 'border-stone-800'
                } overflow-hidden flex flex-col justify-between group hover:border-amber-500/50 transition-all duration-300 shadow-lg`}
              >
                <div>
                  {/* Dish Photography */}
                  <div className="relative h-48 w-full overflow-hidden bg-stone-900">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

                    {/* Popular indicator */}
                    {dish.popular && (
                      <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-600 text-white text-[11px] font-semibold shadow">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-200" />
                        <span>Chef Pick</span>
                      </div>
                    )}
                  </div>

                  {/* Dish Details */}
                  <div className="p-5 space-y-3">
                    {/* Dietary markers - Clean unboxed text with typographic separators */}
                    <div className="flex items-center gap-1.5 text-[11px] text-amber-400/90 font-medium">
                      {dish.dietary.map((tag, idx) => (
                        <React.Fragment key={tag}>
                          <span>{tag}</span>
                          {idx < dish.dietary.length - 1 && <span className="text-stone-600">·</span>}
                        </React.Fragment>
                      ))}
                    </div>

                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {dish.name}
                    </h3>

                    <p className="text-xs text-stone-300 leading-relaxed font-light">
                      {dish.description}
                    </p>

                    {dish.pairingNote && (
                      <div className="pt-2 text-[11px] text-stone-400 border-t border-stone-800/80 italic">
                        {dish.pairingNote}
                      </div>
                    )}
                  </div>
                </div>

                {/* Dish Card Actions */}
                <div className="p-4 pt-0">
                  <button
                    onClick={() => toggleDishSelection(dish.name)}
                    className={`w-full py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500 text-stone-950'
                        : 'bg-stone-900 text-stone-300 hover:bg-stone-800 hover:text-white border border-stone-700/60'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to Menu Wishlist</span>
                      </>
                    ) : (
                      <span>+ Add to Tasting Wishlist</span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Menu Consultation Callout */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 border border-stone-800 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Need a 100% Customized Event Menu?
            </h3>
            <p className="text-stone-400 text-sm sm:text-base max-w-xl">
              We design menus around your culinary traditions, guest dietary requirements, and exact budget. Contact Chef Kabura directly to schedule your custom tasting session.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-semibold text-sm shadow-lg shadow-orange-900/30 transition cursor-pointer"
            >
              Request Custom Tasting Menu
            </button>
            <a
              href={`https://wa.me/254112323708?text=Hello%20Chef%20Kabura%2C%20could%20you%20send%20me%20your%20full%20Munch%20%26%20Yum%20Catering%20menu%20brochure%3F`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 text-sm font-medium transition"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Get Full PDF Brochure</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
