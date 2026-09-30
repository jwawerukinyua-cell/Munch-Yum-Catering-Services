import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/cateringData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-stone-900/60 relative border-t border-stone-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            Everything you need to know about booking, menu customization, tastings, and our catering logistics.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-stone-950/70 border border-stone-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-white font-medium text-base hover:text-amber-400 transition cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-semibold pr-4">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-stone-900 flex items-center justify-center shrink-0 border border-stone-700/60 text-stone-300 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-amber-400 border-amber-500/50' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-stone-300 text-sm leading-relaxed font-light border-t border-stone-900 pt-3 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-950 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg font-bold text-white">Have a unique question or custom dietary need?</h4>
            <p className="text-xs text-stone-400">Speak directly with Chef Kabura for immediate clarity.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-200 text-xs font-semibold hover:border-amber-500 transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call 011 232 3708</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
