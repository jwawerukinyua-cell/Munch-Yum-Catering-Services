import React from 'react';
import { Check, ArrowRight, Users } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/cateringData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-stone-950 relative border-t border-stone-800/80 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-400">
            <span>Our Tailored Catering Solutions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Crafted for Celebrations of Every Scale
          </h2>
          <p className="text-stone-400 text-base sm:text-lg font-light leading-relaxed">
            Whether welcoming 20 executive board members or hosting 600 wedding guests, we bring culinary theater, refined flavors, and attentive hospitality to every occasion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service: ServiceItem, index: number) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-stone-900/60 border border-stone-800/90 overflow-hidden hover:border-amber-500/40 transition-all duration-300 flex flex-col shadow-xl"
            >
              {/* Service Image with gentle hover zoom */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

                {/* Capacity badge over image */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-950/80 backdrop-blur-md border border-stone-700/60 text-stone-200 text-xs font-medium">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>{service.guestCapacity}</span>
                </div>

                {/* Service Tagline overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs uppercase tracking-wider font-semibold text-amber-400">
                    {service.tagline}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Service Details & Features */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Key Inclusions */}
                <div className="space-y-2.5 pt-2 border-t border-stone-800/80">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                    Package Inclusions
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                        <div className="w-4 h-4 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Inquiry Action */}
                <div className="pt-4 border-t border-stone-800/80">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-stone-100 bg-stone-800/80 hover:bg-orange-600 hover:text-white border border-stone-700/70 transition-all cursor-pointer group/btn"
                  >
                    <span>Inquire for {service.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
